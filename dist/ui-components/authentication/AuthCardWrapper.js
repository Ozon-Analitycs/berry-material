"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _MainCard = _interopRequireDefault(require("../cards/MainCard"));
var _excluded = ["children"]; // material-ui
// project import
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

var AuthCardWrapper = function AuthCardWrapper(_ref) {
  var children = _ref.children,
    other = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], _extends({
    sx: {
      maxWidth: {
        xs: 400,
        lg: 475
      },
      margin: {
        xs: 2.5,
        md: 3
      },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    },
    content: false
  }, other), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      p: {
        xs: 2,
        sm: 3,
        xl: 5
      }
    }
  }, children));
};
AuthCardWrapper.propTypes = {
  children: _propTypes["default"].node
};
var _default = exports["default"] = AuthCardWrapper;