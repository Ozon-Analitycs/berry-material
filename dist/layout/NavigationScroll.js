"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

var NavigationScroll = function NavigationScroll(_ref) {
  var children = _ref.children;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  (0, _react.useEffect)(function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return children || null;
};
NavigationScroll.propTypes = {
  children: _propTypes["default"].node
};
var _default = exports["default"] = NavigationScroll;