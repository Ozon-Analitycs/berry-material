"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormControl = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// ==============================|| FORM CONTROL ||============================== //

var FormControl = exports.FormControl = function FormControl(_ref) {
  var captionLabel = _ref.captionLabel,
    formState = _ref.formState,
    iconPrimary = _ref.iconPrimary,
    iconSecondary = _ref.iconSecondary,
    placeholder = _ref.placeholder,
    textPrimary = _ref.textPrimary,
    textSecondary = _ref.textSecondary;
  var theme = (0, _styles.useTheme)();
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary ? /*#__PURE__*/_react["default"].createElement(IconPrimary, {
    fontSize: "small",
    sx: {
      color: theme.palette.grey[700]
    }
  }) : null;
  var IconSecondary = iconSecondary;
  var secondaryIcon = iconSecondary ? /*#__PURE__*/_react["default"].createElement(IconSecondary, {
    fontSize: "small",
    sx: {
      color: theme.palette.grey[700]
    }
  }) : null;
  var errorState = formState === 'error';
  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true,
    error: errorState
  }, /*#__PURE__*/_react["default"].createElement(_material.InputLabel, null, captionLabel), /*#__PURE__*/_react["default"].createElement(_material.OutlinedInput, {
    placeholder: placeholder,
    type: "text",
    label: captionLabel,
    startAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, primaryIcon && /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
      position: "start"
    }, primaryIcon), textPrimary && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
      position: "start"
    }, textPrimary), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
      sx: {
        height: 28,
        m: 0.5,
        mr: 1.5
      },
      orientation: "vertical"
    }))),
    endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, secondaryIcon && /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
      position: "end"
    }, secondaryIcon), textSecondary && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Divider, {
      sx: {
        height: 28,
        m: 0.5
      },
      orientation: "vertical"
    }), /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
      position: "end"
    }, textSecondary)))
  }));
};
FormControl.propTypes = {
  captionLabel: _propTypes["default"].string,
  formState: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object,
  iconSecondary: _propTypes["default"].object,
  placeholder: _propTypes["default"].string,
  textPrimary: _propTypes["default"].string,
  textSecondary: _propTypes["default"].string
};
var _default = exports["default"] = FormControl;