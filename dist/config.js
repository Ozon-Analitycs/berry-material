"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HORIZONTAL_MAX_ITEM = exports.DASHBOARD_PATH = void 0;
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DASHBOARD_PATH = exports.DASHBOARD_PATH = '/dashboard/default';
var HORIZONTAL_MAX_ITEM = exports.HORIZONTAL_MAX_ITEM = 7;
var config = {
  layout: _constant["default"].VERTICAL_LAYOUT,
  // vertical, horizontal
  drawerType: _constant["default"].DEFAULT_DRAWER,
  // default, mini-drawer
  fontFamily: "'Roboto', sans-serif",
  borderRadius: 8,
  outlinedFilled: true,
  navType: 'light',
  // light, dark
  presetColor: 'default',
  // default, theme1, theme2, theme3, theme4, theme5, theme6
  locale: 'en',
  // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  rtlLayout: false,
  container: false
};
var _default = exports["default"] = config;