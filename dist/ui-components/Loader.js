"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Loader = void 0;
var _LinearProgress = _interopRequireDefault(require("@mui/material/LinearProgress"));
var _styles = require("@mui/material/styles");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// styles
var LoaderWrapper = (0, _styles.styled)('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%'
});

// ==============================|| LOADER ||============================== //

var Loader = exports.Loader = function Loader() {
  return /*#__PURE__*/_react["default"].createElement(LoaderWrapper, null, /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], {
    color: "primary"
  }));
};
var _default = exports["default"] = Loader;