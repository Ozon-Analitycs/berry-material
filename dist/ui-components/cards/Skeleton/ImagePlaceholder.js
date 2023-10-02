"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // material-ui
// ==============================|| SKELETON IMAGE CARD ||============================== //

var ImagePlaceholder = function ImagePlaceholder(_ref) {
  var others = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], _extends({
    variant: "rectangular"
  }, others, {
    animation: "wave"
  }));
};
var _default = exports["default"] = ImagePlaceholder;