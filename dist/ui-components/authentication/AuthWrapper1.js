"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styles = require("@mui/material/styles");
// material-ui

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

var AuthWrapper1 = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background["default"] : theme.palette.grey[100],
    minHeight: '100vh'
  };
});
var _default = exports["default"] = AuthWrapper1;