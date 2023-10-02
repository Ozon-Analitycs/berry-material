"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styles = require("@mui/material/styles");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // material-ui
// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

var AuthWrapper2 = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background["default"] : theme.palette.background.paper,
    minHeight: '100vh'
  }, theme.breakpoints.down('lg'), {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100]
  });
});
var _default = exports["default"] = AuthWrapper2;