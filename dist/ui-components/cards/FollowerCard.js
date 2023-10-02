"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _MoreHorizOutlined = _interopRequireDefault(require("@mui/icons-material/MoreHorizOutlined"));
var _PersonAddTwoTone = _interopRequireDefault(require("@mui/icons-material/PersonAddTwoTone"));
var _PeopleAltTwoTone = _interopRequireDefault(require("@mui/icons-material/PeopleAltTwoTone"));
var _PinDropTwoTone = _interopRequireDefault(require("@mui/icons-material/PinDropTwoTone"));
var _FavoriteTwoTone = _interopRequireDefault(require("@mui/icons-material/FavoriteTwoTone"));
var _DeleteTwoTone = _interopRequireDefault(require("@mui/icons-material/DeleteTwoTone"));
var _GroupTwoTone = _interopRequireDefault(require("@mui/icons-material/GroupTwoTone"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ui
// assets
var avatarImage = require.context('../../assets/images/users', true);

// ==============================|| SOCIAL PROFILE - FOLLOWER CARD ||============================== //

var FollowerCard = function FollowerCard(_ref) {
  var avatar = _ref.avatar,
    follow = _ref.follow,
    location = _ref.location,
    name = _ref.name;
  var theme = (0, _styles.useTheme)();
  var avatarProfile = avatar && avatarImage("./".concat(avatar));
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var handleClick = function handleClick(event) {
    setAnchorEl(event === null || event === void 0 ? void 0 : event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      padding: '16px',
      background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
      border: '1px solid',
      borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100],
      '&:hover': {
        border: "1px solid".concat(theme.palette.primary.main)
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    alt: "User 1",
    src: avatarProfile
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    component: "div",
    sx: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block'
    }
  }, name), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle2",
    sx: {
      mt: 0.25,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_PinDropTwoTone["default"], {
    sx: {
      mr: '6px',
      fontSize: '16px',
      verticalAlign: 'text-top'
    }
  }), location)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_MoreHorizOutlined["default"], {
    fontSize: "small",
    sx: {
      color: theme.palette.primary[200],
      cursor: 'pointer'
    },
    "aria-controls": "menu-followers-card",
    "aria-haspopup": "true",
    onClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    id: "menu-followers-card",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    variant: "selectedMenu",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_FavoriteTwoTone["default"], {
    fontSize: "small"
  })), "Favorites"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_GroupTwoTone["default"], {
    fontSize: "small"
  })), "Edit Friend List"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_DeleteTwoTone["default"], {
    fontSize: "small"
  })), "Removed"))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, follow === 2 ? /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    fullWidth: true,
    startIcon: /*#__PURE__*/_react["default"].createElement(_PersonAddTwoTone["default"], null)
  }, "Follow Back") : /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    fullWidth: true,
    startIcon: /*#__PURE__*/_react["default"].createElement(_PeopleAltTwoTone["default"], null)
  }, "Followed"))));
};
FollowerCard.propTypes = {
  avatar: _propTypes["default"].string,
  follow: _propTypes["default"].number,
  location: _propTypes["default"].string,
  name: _propTypes["default"].string
};
var _default = exports["default"] = FollowerCard;