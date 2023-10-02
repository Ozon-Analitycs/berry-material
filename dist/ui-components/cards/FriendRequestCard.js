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
var _constant = require("../../store/constant");
var _MoreHorizOutlined = _interopRequireDefault(require("@mui/icons-material/MoreHorizOutlined"));
var _FavoriteTwoTone = _interopRequireDefault(require("@mui/icons-material/FavoriteTwoTone"));
var _DeleteTwoTone = _interopRequireDefault(require("@mui/icons-material/DeleteTwoTone"));
var _GroupTwoTone = _interopRequireDefault(require("@mui/icons-material/GroupTwoTone"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ui
// project import
// assets
var avatarImage = require.context('../../assets/images/users', true);

// ==============================|| SOCIAL PROFILE - FRIEND REQUEST CARD ||============================== //

var FriendRequestCard = function FriendRequestCard(_ref) {
  var avatar = _ref.avatar,
    name = _ref.name,
    mutual = _ref.mutual;
  var theme = (0, _styles.useTheme)();
  var avatarProfile = avatar && avatarImage("./".concat(avatar));
  var btnSX = {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[200],
    background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.background.paper
  };
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
      p: 2,
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
    spacing: _constant.gridSpacing
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
    sx: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block'
    }
  }, name), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle2",
    sx: {
      mt: 0.5,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block'
    }
  }, mutual, " mutual friends")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    sx: {
      mt: -0.75,
      mr: -0.75
    },
    onClick: handleClick,
    "aria-label": "more options"
  }, /*#__PURE__*/_react["default"].createElement(_MoreHorizOutlined["default"], {
    fontSize: "small",
    color: "primary",
    "aria-controls": "menu-friend-card",
    "aria-haspopup": "true",
    sx: {
      opacity: 0.6
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    id: "menu-friend-card",
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
  })), "Unfriend"))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    fullWidth: true,
    sx: btnSX
  }, "Confirm")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    fullWidth: true,
    color: "error",
    sx: btnSX
  }, "Delete"))))));
};
FriendRequestCard.propTypes = {
  avatar: _propTypes["default"].string,
  mutual: _propTypes["default"].number,
  name: _propTypes["default"].string
};
var _default = exports["default"] = FriendRequestCard;