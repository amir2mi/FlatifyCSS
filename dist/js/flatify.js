/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/alert.js":
/*!********************************!*\
  !*** ./js/components/alert.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vent */ \"./js/utils/vent.js\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ \"./js/utils/logger.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\t// when close button is clicked and have [.alert] wrapper, remove alert.\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".close-button\", function () {\n\t\tconst wrapper = this.closest(\".alert\");\n\n\t\t// return if close button does not have wrapper with [.alert] class\n\t\tif (!wrapper) return;\n\n\t\t// add animation class to remove the alert\n\t\twrapper.classList.add(\"alert-will-be-removed\");\n\n\t\t// after delay remove alert from DOM\n\t\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(wrapper).once(\"animationend\", (e) => {\n\t\t\twrapper.remove();\n\t\t});\n\t});\n});\n\n\n//# sourceURL=webpack://flatifycss/./js/components/alert.js?");

/***/ }),

/***/ "./js/components/dropdown.js":
/*!***********************************!*\
  !*** ./js/components/dropdown.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vent */ \"./js/utils/vent.js\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ \"./js/utils/logger.js\");\n\n\n// import * as Popper from \"@popperjs/core\";\n\n/**\n * Create a dropdown with Popper JS\n * @param {Object} dropdown\n * @param {Object} toggle\n */\nfunction createDropdown(dropdown, toggle) {\n\t// return if Popper was not loaded\n\tif (typeof Popper === \"undefined\") {\n\t\treturn (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", \"Dropdowns require Popper (https://popper.js.org)\");\n\t}\n\n\tPopper.createPopper(toggle, dropdown, {\n\t\tplacement: dropdown.getAttribute(\"data-dropdown-direction\") || \"bottom\",\n\t\tmodifiers: [\n\t\t\t{\n\t\t\t\tname: \"computeStyles\",\n\t\t\t\toptions: {\n\t\t\t\t\t// because of show/hide animation it should be false\n\t\t\t\t\tgpuAcceleration: false,\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"offset\",\n\t\t\t\toptions: {\n\t\t\t\t\toffset: [0, 20],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"arrow\",\n\t\t\t\toptions: {\n\t\t\t\t\telement: dropdown.querySelector(\".pointer-arrow\"),\n\t\t\t\t\tpadding: 15,\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t});\n}\n\n/**\n * Show given dropdown\n * @param {Object} dropdown\n * @param {Object=} toggle\n */\nfunction showDropdown(dropdown, toggle) {\n\t// find dropdown toggle if it is not set\n\tif (!toggle) {\n\t\ttoggle = findDropdownToggle(dropdown);\n\t}\n\n\t// create dropdown with Popper or update position\n\tcreateDropdown(dropdown, toggle);\n\n\t// show dropdown\n\tdropdown.classList.add(\"show\");\n\n\t// flip dropdown toggle arrow and add active state\n\ttoggle.classList.add(\"arrow-flip\", \"active\");\n\n\t// dropdown toggle [aria-expanded=\"true\"] to indicate that dropdown is opened\n\ttoggle.setAttribute(\"aria-expanded\", true);\n}\n\n/**\n * Hide given dropdown\n * @param {Object} dropdown\n * @param {Object=} toggle\n */\nfunction hideDropdown(dropdown, toggle) {\n\t// find dropdown toggle if it is not set\n\tif (!toggle) {\n\t\ttoggle = findDropdownToggle(dropdown);\n\t}\n\n\tdropdown.classList.add(\"dropdown-will-be-hidden\");\n\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dropdown).once(\"animationend\", () => {\n\t\t// hide dropdown when animation is done\n\t\tdropdown.classList.remove(\"dropdown-will-be-hidden\", \"show\");\n\n\t\t// remove flip for toggle arrow and remove active state\n\t\ttoggle.classList.remove(\"arrow-flip\", \"active\");\n\n\t\t// dropdown toggle [aria-expanded=\"false\"] to indicate that dropdown is closed\n\t\ttoggle.setAttribute(\"aria-expanded\", false);\n\t});\n}\n\n/**\n * Find given dropdown toggle button\n * @param {Object} dropdown\n * @returns\n */\nfunction findDropdownToggle(dropdown) {\n\t// get dropdown wrapper if wrapper was not found return an error\n\tconst wrapper = dropdown.closest(\".dropdown-wrapper\");\n\tif (!wrapper) return (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", \"Dropdown should be inside '.dropdown-wrapper'\");\n\n\treturn wrapper.querySelector(\".dropdown-toggle\");\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\t// when dropdown toggle is clicked show or hide dropdown\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".dropdown-toggle\", function () {\n\t\tconst wrapper = this.closest(\".dropdown-wrapper\");\n\n\t\t// return if dropdown toggle does not have wrapper with [.dropdown-wrapper] class\n\t\tif (!wrapper) return (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", \"Dropdown toggle button should be inside '.dropdown-wrapper'\");\n\n\t\tconst dropdown = wrapper.querySelector(\".dropdown\");\n\t\t// return if there is not dropdown inside dropdown wrapper\n\t\tif (!dropdown) return (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", \"Could not found '.dropdown' element inside '.dropdown-wrapper'\");\n\n\t\tif (dropdown.classList.contains(\"show\")) {\n\t\t\thideDropdown(dropdown, this);\n\t\t} else {\n\t\t\tshowDropdown(dropdown, this);\n\t\t}\n\t});\n\n\t// close dropdown when it is clicked\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".dropdown\", function (e) {\n\t\tconst dropdown = e.target.closest(\".dropdown\");\n\t\tconst autoCloseType = dropdown.getAttribute(\"data-dropdown-auto-close\");\n\n\t\t// hide if [data-dropdown-auto-close] attribute = outside || true || default.\n\t\tif (!autoCloseType || autoCloseType === \"true\" || autoCloseType === \"inside\") {\n\t\t\thideDropdown(dropdown);\n\t\t}\n\t});\n\n\t// close dropdown when [.close-dropdown] button inside it is clicked (autoclose is false)\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".close-dropdown\", function (e) {\n\t\tconst dropdown = e.target.closest(\".dropdown\");\n\t\t// return if dropdown toggle does not have wrapper with [.dropdown-wrapper] class\n\t\tif (!dropdown) return (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", \"Dropdown close button should be inside '.dropdown-wrapper'\");\n\n\t\thideDropdown(dropdown);\n\t});\n\n\t// close active dropdowns when outside of the dropdown area is clicked, it respects [data-dropdown-auto-close] option.\n\tdocument.addEventListener(\"click\", function (e) {\n\t\t// select active dropdowns which has [data-dropdown-auto-close] attribute = outside || true || default.\n\t\tconst activeDropdowns = document.querySelectorAll(\n\t\t\t\".dropdown.show:not([data-dropdown-auto-close]), .dropdown.show[data-dropdown-auto-close='outside'], .dropdown.show[data-dropdown-auto-close='true']\"\n\t\t);\n\n\t\t// if there is no active dropdown return\n\t\tif (!activeDropdowns) return;\n\n\t\tactiveDropdowns.forEach((dropdown) => {\n\t\t\tconst toggle = findDropdownToggle(dropdown);\n\n\t\t\t/** hide dropdown if:\n\t\t\t * 1- the clicked target IS NOT dropdown itself.\n\t\t\t * 2- the dropdown toggle button IS NOT the clicked target.\n\t\t\t */\n\t\t\tif (e.target.closest(\".dropdown\") !== dropdown && e.target !== toggle) {\n\t\t\t\thideDropdown(dropdown, toggle);\n\t\t\t}\n\t\t});\n\t});\n\n\t// close active dropdowns when ESC key is pressed\n\tdocument.addEventListener(\"keyup\", (e) => {\n\t\tif (e.key == \"Escape\") {\n\t\t\tconst activeDropdowns = document.querySelectorAll(\".dropdown.show\");\n\n\t\t\t// if there is no active dropdown return\n\t\t\tif (!activeDropdowns) return;\n\n\t\t\t// hide all dropdowns\n\t\t\tactiveDropdowns.forEach((dropdown) => hideDropdown(dropdown));\n\t\t}\n\t});\n});\n\n\n//# sourceURL=webpack://flatifycss/./js/components/dropdown.js?");

/***/ }),

/***/ "./js/components/modal.js":
/*!********************************!*\
  !*** ./js/components/modal.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vent */ \"./js/utils/vent.js\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ \"./js/utils/logger.js\");\n\n\n\n/**\n * Show given modal and its backdrop\n * @param {Object} modal\n * @param {Object} modalBackdrop\n */\nfunction showModal(modal, modalBackdrop) {\n\tif (modalBackdrop) {\n\t\t// there is a backdrop for modal, display it\n\t\tmodalBackdrop.classList.add(\"show\");\n\t} else {\n\t\t// otherwise create one\n\t\tlet backdropElement = document.createElement(\"div\");\n\t\tbackdropElement.classList.add(\"backdrop-layer\", \"modal-backdrop\", \"show\");\n\t\tdocument.body.appendChild(backdropElement);\n\t}\n\n\t// change aria-modal to true\n\tmodal.setAttribute(\"aria-modal\", true);\n\n\t// add [display: block] and animation class\n\tmodal.classList.add(\"show\");\n}\n\n/**\n * Hide given modal and its backdrop\n * @param {Object} modal\n * @param {Object} modalBackdrop\n */\nfunction hideModal(modal, modalBackdrop) {\n\t// get all active modals\n\tconst activeModals = document.querySelectorAll(\".modal.show\");\n\n\t// hide backdrop if there is xonly one active modal\n\tif (activeModals.length === 1) {\n\t\tmodalBackdrop.classList.add(\"backdrop-will-be-removed\");\n\t}\n\tmodal.classList.add(\"modal-will-be-hidden\");\n\n\t// after delay hide modal and its backdrop\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modal).once(\"animationend\", (e) => {\n\t\t// removed hide animation class and show [display:none]\n\t\t// hide backdrop if there is only one active modal\n\t\tif (activeModals.length === 1) {\n\t\t\tmodalBackdrop.classList.remove(\"show\", \"backdrop-will-be-removed\");\n\t\t}\n\t\tmodal.classList.remove(\"show\", \"modal-will-be-hidden\");\n\n\t\t// change aria-modal to false\n\t\tmodal.setAttribute(\"aria-modal\", false);\n\t});\n}\n\n/**\n * Hide current active modals, if the backdrop is given hide it otherwise hide active backdrop\n * @param {Object} modalBackdrop\n */\nfunction hideActiveModals(modalBackdrop) {\n\tconst modals = document.querySelectorAll(\".modal.show\");\n\tif (!modals) return (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"warn\", \"There is no active modal in this page to hide\", modal);\n\n\tmodals.forEach((modal) => {\n\t\t// if modal is required repeat the show animation else hide it.\n\t\tif (modal.classList.contains(\"required\")) {\n\t\t\t/**\n\t\t\t * When two or more modals are open, they should not get the [.show] class removed at the same time,\n\t\t\t * because number of active modals will be [0] and backdrop will be hidden, whilst there are still active modals.\n\t\t\t * so the first setTimeout prevent all of them being removed at the same time.\n\t\t\t */\n\t\t\tsetTimeout(() => {\n\t\t\t\tmodal.classList.remove(\"show\");\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tmodal.classList.add(\"show\");\n\t\t\t\t}, 150);\n\t\t\t}, 150);\n\t\t} else {\n\t\t\t// hide modal and its backdrops, either the backdrop was the click target or find active backdrop.\n\t\t\thideModal(modal, modalBackdrop || document.querySelector(\".modal-backdrop.show\"));\n\t\t}\n\t});\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\t// when open modal is clicked show related modal\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".open-modal\", function (e) {\n\t\tlet modal;\n\t\tconst target = e.target.getAttribute(\"data-modal-target\");\n\t\tconst modalBackdrop = document.querySelector(\".modal-backdrop\");\n\n\t\tif (target && document.querySelector(target)) {\n\t\t\tmodal = document.querySelector(target);\n\t\t} else {\n\t\t\t// if target was not found\n\t\t\treturn (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n\t\t\t\t\"error\",\n\t\t\t\t\"No target found for open modal button, try to add or edit 'data-modal-target' attribute of '.open-modal'\"\n\t\t\t);\n\t\t}\n\n\t\tshowModal(modal, modalBackdrop);\n\t});\n\n\t// when close modal is clicked hide related modal\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".close-modal\", function (e) {\n\t\tlet modal;\n\t\tconst target = e.target.getAttribute(\"data-modal-target\");\n\t\tconst modalBackdrop = document.querySelector(\".modal-backdrop\");\n\n\t\tif (target) {\n\t\t\tmodal = document.querySelector(target);\n\t\t\tif (!modal)\n\t\t\t\treturn (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n\t\t\t\t\t\"error\",\n\t\t\t\t\t\"No target found for close modal, try to add or edit 'data-modal-target' attribute of '.close-modal'\"\n\t\t\t\t);\n\t\t} else {\n\t\t\tmodal = e.target.closest(\".modal\");\n\t\t\tif (!modal)\n\t\t\t\treturn (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n\t\t\t\t\t\"error\",\n\t\t\t\t\t\"Close modal button is not in a modal, you can set 'data-modal-target' attribute to specify which modal belongs to this button\"\n\t\t\t\t);\n\t\t}\n\n\t\thideModal(modal, modalBackdrop);\n\t});\n\n\t// if backdrop is clicked hide active modals.\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".modal-backdrop\", (e) => hideActiveModals(e.target));\n\n\t// if ESC key is pressed hide active modals.\n\tdocument.addEventListener(\"keyup\", (e) => e.key == \"Escape\" && hideActiveModals());\n});\n\n\n//# sourceURL=webpack://flatifycss/./js/components/modal.js?");

/***/ }),

/***/ "./js/flatify.js":
/*!***********************!*\
  !*** ./js/flatify.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/alert */ \"./js/components/alert.js\");\n/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dropdown */ \"./js/components/dropdown.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ \"./js/components/modal.js\");\n/* harmony import */ var _forms_show_password_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/show-password-button */ \"./js/forms/show-password-button.js\");\n// Components\n\n\n\n\n// Forms\n\n\n\n//# sourceURL=webpack://flatifycss/./js/flatify.js?");

/***/ }),

/***/ "./js/forms/show-password-button.js":
/*!******************************************!*\
  !*** ./js/forms/show-password-button.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vent */ \"./js/utils/vent.js\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ \"./js/utils/logger.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\".input-wrapper\").on(\"click\", \".show-password-button\", function (e) {\n\t\t// prevent focus to other inputs\n\t\te.preventDefault();\n\n\t\tconst wrapper = this.closest(\".input-wrapper\");\n\n\t\t// return if show password button does not have wrapper with [.input-wrapper] class\n\t\tif (!wrapper) {\n\t\t\treturn (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", `Show password button is not in an \".input-wrapper\"`, this.parentElement);\n\t\t}\n\n\t\tif (wrapper.classList.contains(\"visible-password\")) {\n\t\t\t// remove visible class for eye icon\n\t\t\twrapper.classList.remove(\"visible-password\");\n\t\t\t// change input type to password\n\t\t\tconst input = wrapper.querySelector(\"input\");\n\t\t\tif (input) input.type = \"password\";\n\n\t\t\t(0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"info\", \"Password is hidden\", input);\n\t\t} else {\n\t\t\t// add visible class for eye icon\n\t\t\twrapper.classList.add(\"visible-password\");\n\t\t\t// change input type to text\n\t\t\tconst input = wrapper.querySelector(\"input\");\n\t\t\tif (input) input.type = \"text\";\n\n\t\t\t(0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"info\", \"Password is shown\", input);\n\t\t}\n\t});\n});\n\n\n//# sourceURL=webpack://flatifycss/./js/forms/show-password-button.js?");

/***/ }),

/***/ "./js/helpers/truncate.js":
/*!********************************!*\
  !*** ./js/helpers/truncate.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vent */ \"./js/utils/vent.js\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ \"./js/utils/logger.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".toggle-truncate\", function (e) {\n\t\tlet text;\n\n\t\tif (e.target.classList.contains(\"truncate\")) {\n\t\t\t// if truncate class was added directly to the element\n\t\t\ttext = e.target;\n\t\t} else {\n\t\t\t// if there is a target that should be truncated\n\t\t\tconst target = e.target.getAttribute(\"data-truncation-target\");\n\t\t\tif (target && document.querySelector(target)) {\n\t\t\t\ttext = document.querySelector(target);\n\t\t\t} else {\n\t\t\t\t// if target was not found\n\t\t\t\treturn (0,_utils_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n\t\t\t\t\t\"error\",\n\t\t\t\t\t\"No target found for truncation, try to add or edit 'data-truncation-target' attribute of '.toggle-truncate'\"\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\n\t\tif (text.classList.contains(\"show-text\")) {\n\t\t\t// remove class to truncate text\n\t\t\ttext.classList.remove(\"show-text\");\n\t\t} else {\n\t\t\t// add class to show full text\n\t\t\ttext.classList.add(\"show-text\");\n\t\t}\n\t});\n});\n\n\n//# sourceURL=webpack://flatifycss/./js/helpers/truncate.js?");

/***/ }),

/***/ "./js/utils/logger.js":
/*!****************************!*\
  !*** ./js/utils/logger.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ logger; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./js/config.json\");\n\n\n/**\n * Log a message in the console or another services,\n * It will log if [enableLogging] is true in config.json.\n *\n * @param type {string} console logging type can be info, warn or error.\n * @param message {string} console logging type.\n * @param data {any} Attached data for further information.\n */\nfunction logger(type, message, data) {\n\tif (_config__WEBPACK_IMPORTED_MODULE_0__.enableLogging === true) {\n\t\tmessage = `${_config__WEBPACK_IMPORTED_MODULE_0__.name}: ${message}`;\n\t\treturn data ? console[type](message, data) : console[type](message);\n\t}\n}\n\n\n//# sourceURL=webpack://flatifycss/./js/utils/logger.js?");

/***/ }),

/***/ "./js/utils/vent.js":
/*!**************************!*\
  !*** ./js/utils/vent.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Vent, jQuery inspired DOM events library\n * @url https://github.com/ealush/vent\n */\n\n((exports) => {\n\tconst savedEvents = [];\n\n\t/**\n\t * Naively checks if a given event name is a native event.\n\t * @param {String} event Name of the event to test\n\t * @returns {Boolean}\n\t */\n\tconst isNativeEvent = (event) => typeof document[`on${event}`] !== \"undefined\";\n\n\t/**\n\t * Checks if an event target is our intended target to call the handler for.\n\t * @param {HTMLElement} eventTarget Target passed from event.\n\t * @param {String} delegatedTarget Selector of a delegation target.\n\t * @param {HTMLElement} originalTarget \"Main\" (non delegated) target.\n\t * @returns {Boolean}\n\t */\n\tconst isTarget = (eventTarget, delegatedTarget, originalTarget) => {\n\t\t/**\n\t\t * If no delegate passed, then the event must have been called on\n\t\t * on the original target or its descendents. No questions asked.\n\t\t */\n\t\tif (!delegatedTarget || typeof delegatedTarget !== \"string\") {\n\t\t\treturn true;\n\t\t}\n\n\t\t/**\n\t\t * True if:\n\t\t * 1. The event target matches the delegate target\n\t\t * 2. The event target is a descendent of the delegate target.\n\t\t */\n\t\treturn matches(eventTarget, delegatedTarget) || originalTarget.contains(eventTarget.closest(delegatedTarget));\n\t};\n\n\t/**\n\t * Checks that a given element complies with a supplied selector.\n\t * @param {HTMLElement} target Target element to test.\n\t * @param {String} selector Selector to test the element with.\n\t * @returns {Boolean}\n\t */\n\tconst matches = (target, selector) => {\n\t\tif (!target) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif (typeof target.matches === \"function\") {\n\t\t\treturn target.matches(selector);\n\t\t} else if (typeof target.msMatchesSelector === \"function\") {\n\t\t\treturn target.msMatchesSelector(selector);\n\t\t}\n\n\t\treturn false;\n\t};\n\n\t/**\n\t * Generates a list of nodes from a selector or an EventTarget.\n\t * @param {*} nodes\n\t * @returns {Array<EventTarget>}\n\t */\n\tconst parseNode = (nodes) => {\n\t\tif (!nodes) {\n\t\t\treturn [];\n\t\t}\n\n\t\tif (typeof nodes === \"string\") {\n\t\t\treturn [...document.querySelectorAll(nodes)];\n\t\t} else if (nodes instanceof NodeList) {\n\t\t\treturn [...nodes];\n\t\t} else if (typeof nodes.addEventListener === \"function\") {\n\t\t\treturn [nodes];\n\t\t}\n\n\t\treturn [];\n\t};\n\n\t/**\n\t * Splits a string by ' ' and removes duplicates.\n\t * @param {String} events\n\t * @returns {Array<String>}\n\t */\n\tconst splitEvents = (events) => {\n\t\tif (typeof events !== \"string\") {\n\t\t\treturn [];\n\t\t}\n\n\t\tconst uniqueEvents = events.split(\" \").reduce(\n\t\t\t({ keys, existing }, current) => {\n\t\t\t\tif (existing[current]) {\n\t\t\t\t\treturn { keys, existing };\n\t\t\t\t}\n\n\t\t\t\treturn {\n\t\t\t\t\tkeys: [...keys, current],\n\t\t\t\t\texisting: { ...existing, [current]: true },\n\t\t\t\t};\n\t\t\t},\n\t\t\t{ keys: [], existing: {} }\n\t\t);\n\n\t\treturn uniqueEvents.keys;\n\t};\n\n\t/**\n\t * Registers either a one time or a permanent listener on an EventTarget.\n\t * @param {EventTarget} target Target to add listener to.\n\t * @param {String} eventName Name of the event to listen to.\n\t * @param {Function} handler Handler callback function.\n\t * @param {Object} options.\n\t * @param {String} options.delegate Selector for delegation.\n\t * @param {Boolean} options.once Determines whether the handler should run once or more.\n\t */\n\tconst listen = (target, eventName, handler, { delegate, once }) => {\n\t\t// Instead of using the user's own handler, we wrap it with our own.\n\t\t// This is so we can implement deleg\n\t\tconst delegateHandler = (e) => {\n\t\t\tif (isTarget(e.target, delegate, target)) {\n\t\t\t\tconst data = e && e.detail;\n\t\t\t\thandler.call(delegate ? e.target : target, e, data);\n\n\t\t\t\tif (once) {\n\t\t\t\t\ttarget.removeEventListener(eventName, delegateHandler);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\t// We're keeping a reference to the original handler\n\t\t// so the consumer can later on `off` that specific handler\n\t\tdelegateHandler.originalHandler = handler;\n\n\t\ttarget.addEventListener(eventName, delegateHandler);\n\n\t\tif (!once) {\n\t\t\tsetEvent(target, eventName, delegateHandler);\n\t\t}\n\t};\n\n\t/**\n\t * Dispatches an event on a target, or calls its `on` function.\n\t * @param {EventTarget} target Event target to dispatch the event on.\n\t * @param {String} events space separated list of event names;\n\t * @param {Object} detail EventTarget Detail Object.\n\t * @param {Object} options\n\t */\n\tconst dispatch = (target, events, detail, options) => {\n\t\tconst hasDispatch = typeof target.dispatchEvent === \"function\";\n\n\t\tsplitEvents(events).forEach((eventName) => {\n\t\t\tconst nativeEvent = isNativeEvent(eventName);\n\t\t\tlet event;\n\n\t\t\tif (detail || !nativeEvent) {\n\t\t\t\tevent = new CustomEvent(eventName, Object.assign({ detail, bubbles: true }, options));\n\t\t\t} else {\n\t\t\t\tevent = new Event(eventName, Object.assign({ bubbles: true }, options));\n\t\t\t}\n\n\t\t\tif (nativeEvent && typeof target[eventName] === \"function\") {\n\t\t\t\ttarget[eventName]();\n\t\t\t}\n\n\t\t\tif (!hasDispatch) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\ttarget.dispatchEvent(event);\n\t\t});\n\t};\n\n\t/**\n\t * Stores target and its events for later access.\n\t * @param {EventTarget} target An event target to store.\n\t * @param {String} event Event Name.\n\t * @param {Function} handler Event handler function.\n\t */\n\tconst setEvent = (target, event, handler) => {\n\t\tif (!target || !event || !handler) {\n\t\t\treturn;\n\t\t}\n\t\tconst targetIndex = savedEvents.findIndex(([current]) => current === target);\n\n\t\t// Get the existing target reference, or default to an empty object.\n\t\tconst [_, targetEvents] = savedEvents[targetIndex] || [target, {}];\n\n\t\ttargetEvents[event] = targetEvents[event] || [];\n\t\ttargetEvents[event].push(handler);\n\n\t\tif (targetIndex === -1) {\n\t\t\tsavedEvents.push([target, targetEvents]);\n\t\t} else {\n\t\t\tsavedEvents[targetIndex] = [target, targetEvents];\n\t\t}\n\t};\n\n\t/**\n\t * Removes Target events from storage\n\t * @param {EventTarget} target EventTarget to remove.\n\t * @param {String} [events] List of events to remove from storage.\n\t * @param {Function} [handler] Funtion to remove.\n\t */\n\tconst deleteEvents = (target, events, handler) => {\n\t\tconst targetIndex = savedEvents.findIndex(([current]) => current === target);\n\t\tif (targetIndex === -1) {\n\t\t\treturn;\n\t\t}\n\n\t\tconst [, targetEvents] = savedEvents[targetIndex];\n\n\t\tconst eventsArray = splitEvents(events);\n\n\t\t// Do this for each of the existing events for the current target.\n\t\tfor (const event in targetEvents) {\n\t\t\tif (\n\t\t\t\t// * The consumer requested to remove the current event name\n\t\t\t\t//    or if the user did not specify an event name\n\t\t\t\t(eventsArray.indexOf(event) !== -1 || !events) &&\n\t\t\t\t// * And the current target has this event registered\n\t\t\t\tObject.prototype.hasOwnProperty.call(targetEvents, event) &&\n\t\t\t\t// * And it is an array (safeguard)\n\t\t\t\tArray.isArray(targetEvents[event])\n\t\t\t) {\n\t\t\t\t// Filter out the events that the consumer wanted to remove\n\t\t\t\ttargetEvents[event] = targetEvents[event].filter((currentHandler) => {\n\t\t\t\t\t// If the consumer specified a specific handler to remove\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\t// and the handler doesn't match the current handler\n\t\t\t\t\t\tif (currentHandler.originalHandler !== handler) {\n\t\t\t\t\t\t\t// keep it in\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// filter it out and remove its listener;\n\t\t\t\t\t\t\ttarget.removeEventListener(event, currentHandler);\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Remove all handlers for current event name\n\t\t\t\t\t\ttarget.removeEventListener(event, currentHandler);\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\tif (!events) {\n\t\t\t\t\t// Clear all the events\n\t\t\t\t\tdelete targetEvents[event];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (!events) {\n\t\t\tsavedEvents.splice(targetIndex, 1);\n\t\t}\n\t};\n\n\twindow[\"Vent\"] = function Vent(...args) {\n\t\tthis.length = 0;\n\t\tthis.add(...args);\n\t};\n\tconst vent = (...args) => new window[\"Vent\"](...args);\n\twindow[\"vent\"] = vent;\n\n\t// Mocks native splice\n\twindow[\"Vent\"].prototype[\"splice\"] = function (...args) {\n\t\treturn Array.prototype.splice.apply(this, args);\n\t};\n\n\t// Mocks native forEach\n\twindow[\"Vent\"].prototype[\"each\"] = function (...args) {\n\t\tArray.prototype.forEach.call(this, ...args);\n\t\treturn this;\n\t};\n\n\twindow[\"Vent\"].prototype[\"add\"] = function (...args) {\n\t\targs.forEach((selector) => {\n\t\t\tconst nodeList = parseNode(selector);\n\n\t\t\tnodeList.forEach((node) => {\n\t\t\t\tfor (let i = 0; i < this.length; i++) {\n\t\t\t\t\tif (this[i] === node) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tthis[this.length] = node;\n\t\t\t\tthis.length++;\n\t\t\t});\n\t\t});\n\n\t\treturn this;\n\t};\n\n\twindow[\"Vent\"].prototype[\"on\"] = function (...args) {\n\t\treturn bindEvents(this, {}, args);\n\t};\n\n\twindow[\"Vent\"].prototype[\"once\"] = function (...args) {\n\t\treturn bindEvents(this, { once: true }, args);\n\t};\n\n\twindow[\"Vent\"].prototype[\"off\"] = function (events, handler) {\n\t\treturn this[\"each\"]((target) => deleteEvents(target, events, handler));\n\t};\n\n\twindow[\"Vent\"].prototype[\"trigger\"] = function (events, { data, options } = {}) {\n\t\treturn this[\"each\"]((target) => dispatch(target, events, data, options));\n\t};\n\n\tconst bindEvents = (instance, options, [events, ...args]) => {\n\t\tif (!args.length) {\n\t\t\t// no handler. bye.\n\t\t\treturn;\n\t\t}\n\n\t\t// One liner for:\n\t\t// [handler] = args\n\t\t// [delegate, handler] = args\n\t\tconst { length, [length - 1]: handler, [length - 2]: delegate } = args;\n\n\t\tconst eventsArray = splitEvents(events);\n\t\treturn instance[\"each\"]((node) =>\n\t\t\teventsArray.forEach((event) =>\n\t\t\t\tlisten(node, event, handler, {\n\t\t\t\t\t...options,\n\t\t\t\t\tdelegate,\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t};\n\n\treturn window[\"vent\"];\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (window[\"vent\"]);\n\n\n//# sourceURL=webpack://flatifycss/./js/utils/vent.js?");

/***/ }),

/***/ "./js/config.json":
/*!************************!*\
  !*** ./js/config.json ***!
  \************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"name\":\"Flatify CSS\",\"enableLogging\":true,\"supportLTR\":true}');\n\n//# sourceURL=webpack://flatifycss/./js/config.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./js/flatify.js");
/******/ 	__webpack_require__("./js/components/alert.js");
/******/ 	__webpack_require__("./js/components/dropdown.js");
/******/ 	__webpack_require__("./js/components/modal.js");
/******/ 	__webpack_require__("./js/forms/show-password-button.js");
/******/ 	__webpack_require__("./js/helpers/truncate.js");
/******/ 	__webpack_require__("./js/utils/logger.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/utils/vent.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=../maps/flatify.js.map
