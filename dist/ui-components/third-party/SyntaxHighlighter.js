"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _reactSyntaxHighlighter = _interopRequireDefault(require("react-syntax-highlighter"));
var _hljs = require("react-syntax-highlighter/dist/esm/styles/hljs");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// third-party

// ==============================|| SYNTAX HIGHLIGHTER ||============================== //

var ReactSyntaxHighlighter = function ReactSyntaxHighlighter(_ref) {
  var codeString = _ref.codeString,
    _ref$showLineNumbers = _ref.showLineNumbers,
    showLineNumbers = _ref$showLineNumbers === void 0 ? true : _ref$showLineNumbers;
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      fontSize: '1rem !important',
      overflow: 'hidden',
      '& pre': {
        margin: 0,
        padding: '16px !important',
        fontFamily: theme.typography.fontFamily,
        bgcolor: theme.palette.mode === 'dark' ? "".concat(theme.palette.grey[50], " !important") : "".concat(theme.palette.grey[900], " !important")
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactSyntaxHighlighter["default"], {
    language: "javacript",
    showLineNumbers: showLineNumbers,
    style: theme.palette.mode === 'dark' ? _hljs.a11yLight : _hljs.a11yDark
  }, codeString));
};
ReactSyntaxHighlighter.propTypes = {
  codeString: _propTypes["default"].string,
  showLineNumbers: _propTypes["default"].bool
};
var _default = exports["default"] = ReactSyntaxHighlighter;