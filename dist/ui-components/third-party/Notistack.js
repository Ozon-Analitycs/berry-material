"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _notistack = require("notistack");
var _icons = require("@tabler/icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// third-party

// assets

// custom styles
var StyledSnackbarProvider = (0, _styles.styled)(_notistack.SnackbarProvider)(function (_ref) {
  var theme = _ref.theme;
  return {
    '&.notistack-MuiContent-default': {
      backgroundColor: theme.palette.primary.main
    },
    '&.notistack-MuiContent-error': {
      backgroundColor: theme.palette.error.main
    },
    '&.notistack-MuiContent-success': {
      backgroundColor: theme.palette.success.main
    },
    '&.notistack-MuiContent-info': {
      backgroundColor: theme.palette.info.main
    },
    '&.notistack-MuiContent-warning': {
      backgroundColor: theme.palette.warning.main
    }
  };
});

// ===========================|| SNACKBAR - NOTISTACK ||=========================== //

var Notistack = function Notistack(_ref2) {
  var children = _ref2.children,
    snackbar = _ref2.snackbar;
  var iconSX = {
    marginRight: 8,
    fontSize: '1.15rem'
  };
  return /*#__PURE__*/React.createElement(StyledSnackbarProvider, {
    maxSnack: snackbar.maxStack,
    dense: snackbar.dense,
    iconVariant: snackbar.iconVariant === 'useemojis' ? {
      success: /*#__PURE__*/React.createElement(_icons.IconCircleCheck, {
        style: iconSX
      }),
      error: /*#__PURE__*/React.createElement(_icons.IconSquareRoundedX, {
        style: iconSX
      }),
      warning: /*#__PURE__*/React.createElement(_icons.IconInfoCircle, {
        style: iconSX
      }),
      info: /*#__PURE__*/React.createElement(_icons.IconAlertCircle, {
        style: iconSX
      })
    } : undefined
    // eslint-disable-next-line
    ,
    hideIconVariant: snackbar.iconVariant === 'hide' ? true : false
  }, children);
};
Notistack.propTypes = {
  children: _propTypes["default"].node,
  snackbar: _propTypes["default"].object
};
var _default = exports["default"] = Notistack;