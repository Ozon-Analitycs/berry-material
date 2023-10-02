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
var _Avatar = _interopRequireDefault(require("../extended/Avatar"));
var _constant = require("../../store/constant");
var _MoreHorizOutlined = _interopRequireDefault(require("@mui/icons-material/MoreHorizOutlined"));
var _Facebook = _interopRequireDefault(require("@mui/icons-material/Facebook"));
var _Twitter = _interopRequireDefault(require("@mui/icons-material/Twitter"));
var _LinkedIn = _interopRequireDefault(require("@mui/icons-material/LinkedIn"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ui
// project imports
// assets
var avatarImage = require.context('../../assets/images/users', true);

// styles
var FacebookWrapper = (0, _styles.styled)(_material.Button)({
  padding: 8,
  background: 'rgba(66, 103, 178, 0.2)',
  '& svg': {
    color: '#4267B2'
  },
  '&:hover': {
    background: '#4267B2',
    '& svg': {
      color: '#fff'
    }
  }
});
var TwitterWrapper = (0, _styles.styled)(_material.Button)({
  padding: 8,
  background: 'rgba(29, 161, 242, 0.2)',
  '& svg': {
    color: '#1DA1F2'
  },
  '&:hover': {
    background: '#1DA1F2',
    '& svg': {
      color: '#fff'
    }
  }
});
var LinkedInWrapper = (0, _styles.styled)(_material.Button)({
  padding: 8,
  background: 'rgba(14, 118, 168, 0.12)',
  '& svg': {
    color: '#0E76A8'
  },
  '&:hover': {
    background: '#0E76A8',
    '& svg': {
      color: '#fff'
    }
  }
});

// ==============================|| USER SIMPLE CARD ||============================== //

var UserSimpleCard = function UserSimpleCard(_ref) {
  var avatar = _ref.avatar,
    name = _ref.name,
    status = _ref.status;
  var theme = (0, _styles.useTheme)();
  var avatarProfile = avatar && avatarImage("./".concat(avatar));
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      p: 2,
      background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
      border: '1px solid',
      borderColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.grey[100],
      '&:hover': {
        border: "1px solid".concat(theme.palette.primary.main)
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: _constant.gridSpacing
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: _constant.gridSpacing
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    alt: name,
    src: avatarProfile,
    sx: {
      width: 72,
      height: 72
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
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
    color: "inherit",
    "aria-controls": "menu-friend-card",
    "aria-haspopup": "true",
    sx: {
      opacity: 0.6
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    id: "menu-simple-card",
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
  }, "Edit"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleClose
  }, "Delete"))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: _constant.gridSpacing
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4"
  }, name)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, status === 'Active' ? /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: "Active",
    size: "small",
    sx: {
      bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : 'success.light',
      color: 'success.dark'
    }
  }) : /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: "Rejected",
    size: "small",
    sx: {
      bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : 'error.light',
      color: 'error.dark'
    }
  })))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(FacebookWrapper, {
    fullWidth: true,
    "aria-label": "facebook"
  }, /*#__PURE__*/_react["default"].createElement(_Facebook["default"], {
    fontSize: "small"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(TwitterWrapper, {
    fullWidth: true,
    "aria-label": "twitter"
  }, /*#__PURE__*/_react["default"].createElement(_Twitter["default"], {
    fontSize: "small"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(LinkedInWrapper, {
    fullWidth: true,
    "aria-label": "linkedin"
  }, /*#__PURE__*/_react["default"].createElement(_LinkedIn["default"], {
    fontSize: "small"
  })))))));
};
UserSimpleCard.propTypes = {
  avatar: _propTypes["default"].string,
  name: _propTypes["default"].string,
  status: _propTypes["default"].string
};
var _default = exports["default"] = UserSimpleCard;