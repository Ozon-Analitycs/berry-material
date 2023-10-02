"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputLabel = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _excluded = ["children", "horizontal"]; // material-ui
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BInputLabel = (0, _styles.experimentalStyled)(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_material.InputLabel, props);
}, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'horizontal';
  }
})(function (_ref) {
  var theme = _ref.theme,
    horizontal = _ref.horizontal;
  return {
    color: theme.palette.text.primary,
    fontWeight: 500,
    marginBottom: horizontal ? 0 : 8
  };
});
var InputLabel = exports.InputLabel = function InputLabel(_ref2) {
  var children = _ref2.children,
    horizontal = _ref2.horizontal,
    others = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/_react["default"].createElement(BInputLabel, _extends({
    horizontal: horizontal
  }, others), children);
};
InputLabel.propTypes = {
  children: _propTypes["default"].node,
  horizontal: _propTypes["default"].bool
};
InputLabel.defaultProps = {
  horizontal: false
};
var _default = exports["default"] = InputLabel;