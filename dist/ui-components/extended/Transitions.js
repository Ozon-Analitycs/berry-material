"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _excluded = ["children", "position", "type", "direction"]; // material-ui
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// ==============================|| TRANSITIONS ||============================== //

var Transitions = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    position = _ref.position,
    type = _ref.type,
    direction = _ref.direction,
    others = _objectWithoutProperties(_ref, _excluded);
  var positionSX = {
    transformOrigin: '0 0 0'
  };
  switch (position) {
    case 'top-right':
      positionSX = {
        transformOrigin: 'top right'
      };
      break;
    case 'top':
      positionSX = {
        transformOrigin: 'top'
      };
      break;
    case 'bottom-left':
      positionSX = {
        transformOrigin: 'bottom left'
      };
      break;
    case 'bottom-right':
      positionSX = {
        transformOrigin: 'bottom right'
      };
      break;
    case 'bottom':
      positionSX = {
        transformOrigin: 'bottom'
      };
      break;
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0'
      };
      break;
  }
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    ref: ref
  }, type === 'grow' && /*#__PURE__*/_react["default"].createElement(_material.Grow, others, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: positionSX
  }, children)), type === 'collapse' && /*#__PURE__*/_react["default"].createElement(_material.Collapse, _extends({}, others, {
    sx: positionSX
  }), children), type === 'fade' && /*#__PURE__*/_react["default"].createElement(_material.Fade, _extends({}, others, {
    timeout: {
      appear: 500,
      enter: 600,
      exit: 400
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: positionSX
  }, children)), type === 'slide' && /*#__PURE__*/_react["default"].createElement(_material.Slide, _extends({}, others, {
    timeout: {
      appear: 0,
      enter: 400,
      exit: 200
    },
    direction: direction
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: positionSX
  }, children)), type === 'zoom' && /*#__PURE__*/_react["default"].createElement(_material.Zoom, others, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: positionSX
  }, children)));
});
Transitions.propTypes = {
  children: _propTypes["default"].node,
  type: _propTypes["default"].oneOf(['grow', 'fade', 'collapse', 'slide', 'zoom']),
  position: _propTypes["default"].oneOf(['top-left', 'top-right', 'top', 'bottom-left', 'bottom-right', 'bottom']),
  direction: _propTypes["default"].oneOf(['up', 'down', 'left', 'right'])
};
Transitions.defaultProps = {
  type: 'grow',
  position: 'top-left',
  direction: 'up'
};
var _default = exports["default"] = Transitions;