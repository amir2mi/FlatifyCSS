// Initial modules
const distFileName = "flatify";
const distFileNameRTL = "flatify-rtl";
const bumpVersionFiles = ["./package.json", "./scss/flatify.scss", "./js/flatify.js"];

const { src, dest, watch, series, parallel } = require("gulp");
const argv = require("yargs").argv;
const autoprefixer = require("autoprefixer");
const babel = require("gulp-babel");
const bump = require("gulp-bump");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const fs = require("fs");
const git = require("gulp-git");
const noop = require("gulp-noop");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const semver = require("semver");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");

// File path variables
const files = {
  sassFiles: "scss/**/*.scss", // for watch task
  sassMain: "scss/flatify.scss",
  sassMainRTL: "scss/flatify-rtl.scss",
  jsMain: "js/**/*js",
};

// Task creators
function sassTask(file, fileName, minify = true, prefixed = true) {
  let postcssPlugins = [];
  if (minify) {
    postcssPlugins.push(cssnano());
  }
  if (prefixed) {
    postcssPlugins.push(autoprefixer());
  }
  return src(file)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(postcssPlugins))
    .pipe(
      rename((file) => {
        if (fileName) {
          file.basename = fileName;
        }
        if (!prefixed) {
          file.basename += "-noprefix";
        }
        if (minify) {
          file.basename += "-min";
        }
      })
    )
    .pipe(sourcemaps.write("../maps"))
    .pipe(dest("dist/css"));
}

function jsTask(file, fileName, minify = true, production = true) {
  return src(file)
    .pipe(
      webpack({
        mode: production ? "production" : "development",
        optimization: {
          minimize: minify,
        },
      })
    )
    .pipe(sourcemaps.init())
    .pipe(concat(fileName))
    .pipe(
      production
        ? babel({
            presets: ["@babel/env"],
          })
        : noop()
    )
    .pipe(minify ? uglify() : noop())
    .pipe(
      rename((file) => {
        if (minify) {
          file.basename += "-min";
        }
        file.extname = ".js";
      })
    )
    .pipe(sourcemaps.write("../maps"))
    .pipe(dest("dist/js"));
}

// calculate the next version
function nextVersion(type = "patch") {
  const pkg = JSON.parse(fs.readFileSync(bumpVersionFiles[0], "utf8"));
  return semver.inc(pkg.version, argv.type || type);
}

// bump version
function bumper(files, type = "patch", value) {
  // command gulp release --ver 1.0.0
  // OR
  // command gulp release --type major | minor | patch | prerelease
  return src(files)
    .pipe(bump({ version: value || argv.ver || nextVersion(type) }))
    .pipe(dest((file) => file.base));
}

// Git tasks
// set description for release commit with --desc or --m command
// if description is empty it will not commit
function commitAll(desc) {
  return src("./")
    .pipe(git.add({ args: "-a" }))
    .pipe(git.commit(argv.m || argv.desc || desc));
}

// Add git tag for current version
function addGitVersionTag(desc) {
  // get the current version
  const pkg = JSON.parse(fs.readFileSync(bumpVersionFiles[0], "utf8"));
  git.tag(`v${argv.ver || pkg.version}`, argv.m || argv.desc || desc);
}

// Watch task
function watchTask(filesArr, tasksArr) {
  watch(filesArr, parallel(...tasksArr));
}

// SASS tasks
// LTR
const mainSassTask__noprefix = () => sassTask(files.sassMain, distFileName, false, false); // dev
const mainSassTask__prefixed = () => sassTask(files.sassMain, distFileName, false, true);
const mainSassTask__minified__noprefix = () => sassTask(files.sassMain, distFileName, true, false);
const mainSassTask__minified__prefixed = () => sassTask(files.sassMain, distFileName, true, true); // production
// RTL
const mainSassTask_rtl__noprefix = () => sassTask(files.sassMainRTL, distFileNameRTL, false, false);
const mainSassTask_rtl__prefixed = () => sassTask(files.sassMainRTL, distFileNameRTL, false, true);
const mainSassTask_rtl__minified__noprefix = () => sassTask(files.sassMainRTL, distFileNameRTL, true, false);
const mainSassTask_rtl__minified__prefixed = () => sassTask(files.sassMainRTL, distFileNameRTL, true, true);

// JavaScript tasks
const mainJsTask_dev = () => jsTask(files.jsMain, distFileName, false, false);
const mainJsTask_production = () => jsTask(files.jsMain, distFileName, false, true);
const mainJsTask__minified_production = () => jsTask(files.jsMain, distFileName, true, true);

const bumpVersionDefault = () => bumper(bumpVersionFiles, "prerelease");
const bumpVersionRelease = () => bumper(bumpVersionFiles, "patch");
const addReleaseTag = (done) => {
  // patch is the default versioning type for release however it can be changed with --type command: gulp release --type "major"
  addGitVersionTag("patch");
  done();
};

// Watch
const defaultWatchTasks = () => watchTask([files.sassFiles, files.jsMain], [mainSassTask__noprefix, mainJsTask_dev]);
exports.watch = series(parallel(mainSassTask__noprefix, mainJsTask_dev), defaultWatchTasks);

// Default
exports.default = series(
  bumpVersionDefault,
  // css - ltr
  mainSassTask__noprefix,
  mainSassTask__prefixed,
  mainSassTask__minified__noprefix,
  mainSassTask__minified__prefixed,
  // css - rtl
  mainSassTask_rtl__noprefix,
  mainSassTask_rtl__prefixed,
  mainSassTask_rtl__minified__noprefix,
  mainSassTask_rtl__minified__prefixed,
  // js
  mainJsTask_production,
  mainJsTask__minified_production
);

// Release
exports.release = series(
  bumpVersionRelease,
  // css - ltr
  mainSassTask__noprefix,
  mainSassTask__prefixed,
  mainSassTask__minified__noprefix,
  mainSassTask__minified__prefixed,
  // css - rtl
  mainSassTask_rtl__noprefix,
  mainSassTask_rtl__prefixed,
  mainSassTask_rtl__minified__noprefix,
  mainSassTask_rtl__minified__prefixed,
  // js
  mainJsTask_production,
  mainJsTask__minified_production
  // commitAll
  // addReleaseTag
);
