"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _framerMotion = require("framer-motion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// third-party

// ==============================|| ANIMATION FOR CONTENT ||============================== //

var NavMotion = function NavMotion(_ref) {
  var children = _ref.children;
  var motionVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    "in": {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };
  var motionTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: motionVariants,
    transition: motionTransition
  }, children);
};
NavMotion.propTypes = {
  children: _propTypes["default"].node
};
var _default = exports["default"] = NavMotion;