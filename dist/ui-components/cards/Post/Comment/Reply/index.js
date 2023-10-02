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
var _Avatar = _interopRequireDefault(require("../../../../extended/Avatar"));
var _FiberManualRecord = _interopRequireDefault(require("@mui/icons-material/FiberManualRecord"));
var _MoreVertTwoTone = _interopRequireDefault(require("@mui/icons-material/MoreVertTwoTone"));
var _ThumbUpAltTwoTone = _interopRequireDefault(require("@mui/icons-material/ThumbUpAltTwoTone"));
var _ReplyTwoTone = _interopRequireDefault(require("@mui/icons-material/ReplyTwoTone"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ui
// project imports
// assets
var avatarImage = require.context('../../../../../assets/images/users', true);

// ==============================|| POST & COMMENT - REPLAY ||============================== //

var Reply = function Reply(_ref) {
  var commentId = _ref.commentId,
    handleReplayLikes = _ref.handleReplayLikes,
    onReply = _ref.onReply,
    postId = _ref.postId,
    reply = _ref.reply;
  var theme = (0, _styles.useTheme)();
  var id = reply.id;
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
  var replies = reply;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Object.keys(replies).length > 0 && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      pl: 6.25
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
      padding: '16px 16px 8px',
      mt: 1.25
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    wrap: "nowrap",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    sx: {
      width: 24,
      height: 24
    },
    size: "sm",
    alt: "User 1",
    src: replies.profile && replies.profile.avatar && avatarImage("./".concat(replies.profile.avatar))
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    align: "left",
    variant: "h5",
    component: "div"
  }, replies.profile.name)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    align: "left",
    variant: "caption"
  }, /*#__PURE__*/_react["default"].createElement(_FiberManualRecord["default"], {
    sx: {
      width: '10px',
      height: '10px',
      opacity: 0.5,
      m: '0 5px'
    }
  }), ' ', replies.profile.time)))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.ButtonBase, {
    sx: {
      borderRadius: '12px'
    },
    onClick: handleClick,
    "aria-label": "more options"
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    variant: "rounded",
    sx: _objectSpread(_objectSpread(_objectSpread({}, theme.typography.commonAvatar), theme.typography.smallAvatar), {}, {
      background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
      color: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.secondary.dark,
      zIndex: 1,
      transition: 'all .2s ease-in-out',
      '&[aria-controls="menu-list-grow"],&:hover': {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.light
      }
    }),
    "aria-controls": "menu-comment-reply",
    "aria-haspopup": "true"
  }, /*#__PURE__*/_react["default"].createElement(_MoreVertTwoTone["default"], {
    fontSize: "inherit"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    id: "menu-comment-reply",
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
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    align: "left",
    variant: "body2"
  }, replies.data.comment)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    spacing: 2,
    sx: {
      color: theme.palette.mode === 'dark' ? 'grey.700' : 'grey.800'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return handleReplayLikes(postId, commentId, id);
    },
    variant: "text",
    color: "inherit",
    size: "small",
    startIcon: /*#__PURE__*/_react["default"].createElement(_ThumbUpAltTwoTone["default"], {
      color: replies.data.likes && replies.data.likes.like ? 'secondary' : 'inherit'
    })
  }, replies.data.likes && replies.data.likes.value ? replies.data.likes.value : 0, " likes"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    onClick: onReply,
    size: "small",
    color: "inherit",
    startIcon: /*#__PURE__*/_react["default"].createElement(_ReplyTwoTone["default"], {
      color: "primary"
    })
  }, "reply"))))))));
};
Reply.propTypes = {
  commentId: _propTypes["default"].string,
  handleReplayLikes: _propTypes["default"].func,
  onReply: _propTypes["default"].func,
  postId: _propTypes["default"].string,
  reply: _propTypes["default"].object
};
var _default = exports["default"] = Reply;