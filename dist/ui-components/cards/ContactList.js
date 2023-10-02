"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _Avatar = _interopRequireDefault(require("../extended/Avatar"));
var _constant = require("../../store/constant");
var _ChatBubbleTwoTone = _interopRequireDefault(require("@mui/icons-material/ChatBubbleTwoTone"));
var _PhoneTwoTone = _interopRequireDefault(require("@mui/icons-material/PhoneTwoTone"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // material-ui
// project imports
// assets
var avatarImage = require.context('../../assets/images/users', true);

// styles
var ListWrapper = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    padding: '15px 0',
    borderBottom: theme.palette.mode === 'dark' ? 'none' : '1px solid',
    borderTop: theme.palette.mode === 'dark' ? 'none' : '1px solid',
    borderColor: "".concat(theme.palette.grey[100], "!important")
  };
});

// ==============================|| USER CONTACT LIST ||============================== //

var ContactList = function ContactList(_ref2) {
  var avatar = _ref2.avatar,
    name = _ref2.name,
    role = _ref2.role,
    onActive = _ref2.onActive;
  var theme = (0, _styles.useTheme)();
  var avatarProfile = avatar && avatarImage("./".concat(avatar));
  return /*#__PURE__*/_react["default"].createElement(ListWrapper, null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    spacing: _constant.gridSpacing
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    onClick: function onClick() {
      return onActive && onActive();
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    spacing: _constant.gridSpacing,
    sx: {
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    alt: name,
    src: avatarProfile,
    sx: {
      width: 48,
      height: 48
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sm: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 0
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4",
    component: "div"
  }, name)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption"
  }, role)))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1,
    sx: _defineProperty({
      justifyContent: 'flex-end'
    }, theme.breakpoints.down('md'), {
      justifyContent: 'flex-start'
    })
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    placement: "top",
    title: "Message"
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    sx: {
      minWidth: 32,
      height: 32,
      p: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_ChatBubbleTwoTone["default"], {
    fontSize: "small"
  })))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    placement: "top",
    title: "Call"
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    color: "secondary",
    sx: {
      minWidth: 32,
      height: 32,
      p: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_PhoneTwoTone["default"], {
    fontSize: "small"
  }))))))));
};
ContactList.propTypes = {
  avatar: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onActive: _propTypes["default"].func,
  role: _propTypes["default"].string
};
var _default = exports["default"] = ContactList;