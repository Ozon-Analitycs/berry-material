"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _Logo = _interopRequireDefault(require("../Logo"));
var _icons = require("@tabler/icons");
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // material-ui
// project imports
// assets
// elevation scroll
function ElevationScroll(_ref) {
  var children = _ref.children,
    window = _ref.window;
  var theme = (0, _styles.useTheme)();
  var trigger = (0, _material.useScrollTrigger)({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });
  return /*#__PURE__*/(0, _react.cloneElement)(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background["default"],
      color: theme.palette.text.dark
    }
  });
}
ElevationScroll.propTypes = {
  children: _propTypes["default"].node,
  window: _propTypes["default"].object
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

var AppBar = function AppBar(_ref2) {
  var others = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    drawerToggle = _useState2[0],
    setDrawerToggle = _useState2[1];
  var drawerToggler = function drawerToggler(open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setDrawerToggle(open);
    };
  };
  return /*#__PURE__*/_react["default"].createElement(ElevationScroll, others, /*#__PURE__*/_react["default"].createElement(_material.AppBar, null, /*#__PURE__*/_react["default"].createElement(_material.Container, null, /*#__PURE__*/_react["default"].createElement(_material.Toolbar, {
    sx: {
      py: 2.5,
      px: "0 !important"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    component: "div",
    sx: {
      flexGrow: 1,
      textAlign: 'left'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    sx: {
      display: {
        xs: 'none',
        sm: 'block'
      }
    },
    spacing: {
      xs: 1.5,
      md: 2.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    color: "inherit",
    component: _material.Link,
    href: "#"
  }, "Home"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    color: "inherit",
    component: _reactRouterDom.Link,
    to: "/login",
    target: "_blank"
  }, "Dashboard"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    color: "inherit",
    component: _material.Link,
    href: "https://codedthemes.gitbook.io/berry",
    target: "_blank"
  }, "Documentation"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    component: _material.Link,
    href: "https://links.codedthemes.com/hsqll",
    disableElevation: true,
    variant: "contained",
    color: "secondary"
  }, "Purchase Now")), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: {
        xs: 'block',
        sm: 'none'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    color: "inherit",
    onClick: drawerToggler(true),
    size: "large"
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "top",
    open: drawerToggle,
    onClose: drawerToggler(false)
  }, drawerToggle && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      width: 'auto'
    },
    role: "presentation",
    onClick: drawerToggler(false),
    onKeyDown: drawerToggler(false)
  }, /*#__PURE__*/_react["default"].createElement(_material.List, null, /*#__PURE__*/_react["default"].createElement(_material.Link, {
    style: {
      textDecoration: 'none'
    },
    href: "#",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemButton, {
    component: "a"
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.IconHome2, null)), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: "Home"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Link, {
    style: {
      textDecoration: 'none'
    },
    href: "/login",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemButton, {
    component: "a"
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.IconDashboard, null)), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: "Dashboard"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Link, {
    style: {
      textDecoration: 'none'
    },
    href: "https://codedthemes.gitbook.io/berry",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemButton, {
    component: "a"
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.IconBook, null)), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: "Documentation"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Link, {
    style: {
      textDecoration: 'none'
    },
    href: "https://links.codedthemes.com/hsqll",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemButton, {
    component: "a"
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.IconCreditCard, null)), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: "Purchase Now"
  })))))))))));
};
var _default = exports["default"] = AppBar;