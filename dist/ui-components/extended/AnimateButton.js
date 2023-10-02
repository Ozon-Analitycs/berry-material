"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // third-party
// ==============================|| ANIMATION BUTTON ||============================== //

var AnimateButton = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _scale, _scale2;
  var children = _ref.children,
    type = _ref.type,
    direction = _ref.direction,
    offset = _ref.offset,
    scale = _ref.scale;
  var offset1;
  var offset2;
  switch (direction) {
    case 'up':
    case 'left':
      offset1 = offset;
      offset2 = 0;
      break;
    case 'right':
    case 'down':
    default:
      offset1 = 0;
      offset2 = offset;
      break;
  }
  var _useCycle = (0, _framerMotion.useCycle)(offset1, offset2),
    _useCycle2 = _slicedToArray(_useCycle, 2),
    x = _useCycle2[0],
    cycleX = _useCycle2[1];
  var _useCycle3 = (0, _framerMotion.useCycle)(offset1, offset2),
    _useCycle4 = _slicedToArray(_useCycle3, 2),
    y = _useCycle4[0],
    cycleY = _useCycle4[1];
  switch (type) {
    case 'rotate':
      return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
        ref: ref,
        animate: {
          rotate: 360
        },
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 2,
          repeatDelay: 0
        }
      }, children);
    case 'slide':
      if (direction === 'up' || direction === 'down') {
        return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
          ref: ref,
          animate: {
            y: y !== undefined ? y : ''
          },
          onHoverEnd: function onHoverEnd() {
            return cycleY();
          },
          onHoverStart: function onHoverStart() {
            return cycleY();
          }
        }, children);
      }
      return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
        ref: ref,
        animate: {
          x: x !== undefined ? x : ''
        },
        onHoverEnd: function onHoverEnd() {
          return cycleX();
        },
        onHoverStart: function onHoverStart() {
          return cycleX();
        }
      }, children);
    case 'scale':
    default:
      if (typeof scale === 'number') {
        scale = {
          hover: scale,
          tap: scale
        };
      }
      return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
        ref: ref,
        whileHover: {
          scale: (_scale = scale) === null || _scale === void 0 ? void 0 : _scale.hover
        },
        whileTap: {
          scale: (_scale2 = scale) === null || _scale2 === void 0 ? void 0 : _scale2.tap
        }
      }, children);
  }
});
AnimateButton.propTypes = {
  children: _propTypes["default"].node,
  offset: _propTypes["default"].number,
  type: _propTypes["default"].oneOf(['slide', 'scale', 'rotate']),
  direction: _propTypes["default"].oneOf(['up', 'down', 'left', 'right']),
  scale: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].object])
};
AnimateButton.defaultProps = {
  type: 'scale',
  offset: 10,
  direction: 'right',
  scale: {
    hover: 1,
    tap: 0.9
  }
};
var _default = exports["default"] = AnimateButton;