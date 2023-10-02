"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _dateFns = require("date-fns");
var _Avatar = _interopRequireDefault(require("../extended/Avatar"));
var _StarTwoTone = _interopRequireDefault(require("@mui/icons-material/StarTwoTone"));
var _StarBorderTwoTone = _interopRequireDefault(require("@mui/icons-material/StarBorderTwoTone"));
var _MoreHorizOutlined = _interopRequireDefault(require("@mui/icons-material/MoreHorizOutlined"));
var _VerifiedUser = _interopRequireDefault(require("@mui/icons-material/VerifiedUser"));
var _DirectionsRun = _interopRequireDefault(require("@mui/icons-material/DirectionsRun"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ui
// third-party
// project imports
// assets
var avatarImage = require.context('../../assets/images/users', true);

// ==============================|| PRODUCT DETAILS - REVIEW ||============================== //

var ProductReview = function ProductReview(_ref) {
  var avatar = _ref.avatar,
    date = _ref.date,
    name = _ref.name,
    status = _ref.status,
    rating = _ref.rating,
    review = _ref.review;
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
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4,
    lg: 3,
    xl: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    alt: name,
    src: avatar && avatarImage("./".concat(avatar))
  }), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 0.5
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 1,
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    sx: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block'
    }
  }, name), status && /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: "Purchased Verified"
  }, /*#__PURE__*/_react["default"].createElement(_VerifiedUser["default"], {
    fontSize: "small",
    sx: {
      color: 'success.dark'
    }
  })), !status && /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: "Goodwill"
  }, /*#__PURE__*/_react["default"].createElement(_DirectionsRun["default"], {
    fontSize: "small",
    sx: {
      color: 'error.main'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption"
  }, (0, _dateFns.format)(new Date(date), 'E, MMM d yyyy'))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 8,
    lg: 9,
    xl: 10
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 11
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Rating, {
    size: "small",
    name: "simple-controlled",
    value: rating < 4 ? rating + 1 : rating,
    icon: /*#__PURE__*/_react["default"].createElement(_StarTwoTone["default"], {
      fontSize: "inherit"
    }),
    emptyIcon: /*#__PURE__*/_react["default"].createElement(_StarBorderTwoTone["default"], {
      fontSize: "inherit"
    }),
    precision: 0.1,
    readOnly: true
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2"
  }, review))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_MoreHorizOutlined["default"], {
    fontSize: "small",
    "aria-controls": "menu-popular-card",
    "aria-haspopup": "true",
    onClick: handleClick,
    sx: {
      color: 'grey.500',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    id: "menu-popular-card",
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
  }, " Edit"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleClose
  }, " Delete")))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Divider, null)));
};
ProductReview.propTypes = {
  avatar: _propTypes["default"].string,
  date: _propTypes["default"].string,
  name: _propTypes["default"].string,
  status: _propTypes["default"].bool,
  rating: _propTypes["default"].number,
  review: _propTypes["default"].string
};
var _default = exports["default"] = ProductReview;