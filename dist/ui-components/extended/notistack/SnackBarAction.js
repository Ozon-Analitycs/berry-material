"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SnackBarAction;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _notistack = require("notistack");
var _SubCard = _interopRequireDefault(require("../../cards/SubCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// third-party

// project import

// ==============================|| NOTISTACK - ACTION BUTTONS ||============================== //

function SnackBarAction() {
  var _useSnackbar = (0, _notistack.useSnackbar)(),
    closeSnackbar = _useSnackbar.closeSnackbar;
  var actionTask = function actionTask(snackbarId) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
      variant: "text",
      onClick: function onClick() {
        // eslint-disable-next-line
        alert("I belong to snackbar with id ".concat(snackbarId));
      }
    }, "Undo"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
      variant: "text",
      onClick: function onClick() {
        return closeSnackbar(snackbarId);
      }
    }, "Dismiss"));
  };
  return /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    title: "With Action"
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    fullWidth: true,
    sx: {
      marginBlockStart: 2
    },
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('Your notification here', {
        action: function action(key) {
          return actionTask(key);
        }
      });
    }
  }, "Show Snackbar"));
}