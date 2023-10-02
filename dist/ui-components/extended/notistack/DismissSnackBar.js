"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DismissSnackBar;
var _material = require("@mui/material");
var _notistack = require("notistack");
var _react = _interopRequireDefault(require("react"));
var _SubCard = _interopRequireDefault(require("../../cards/SubCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ul

// third-party

// project import

// ==============================|| NOTISTACK - DISMISS ||============================== //

function DismissSnackBar() {
  var _useSnackbar = (0, _notistack.useSnackbar)(),
    closeSnackbar = _useSnackbar.closeSnackbar;
  return /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    title: "Dismiss Programmatically"
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    flexDirection: "row",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    fullWidth: true,
    color: "error",
    sx: {
      marginBlockStart: 2,
      marginInlineEnd: 2
    },
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('No connection!', {
        variant: 'error',
        persist: true,
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
      });
    }
  }, "Simulate connection loss"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    fullWidth: true,
    sx: {
      marginBlockStart: 2
    },
    onClick: function onClick() {
      return closeSnackbar();
    }
  }, "Back Online")));
}