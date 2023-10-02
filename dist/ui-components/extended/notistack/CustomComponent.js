"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomComponent;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _notistack = require("notistack");
var _SubCard = _interopRequireDefault(require("../../cards/SubCard"));
var _CheckCircle = _interopRequireDefault(require("@mui/icons-material/CheckCircle"));
var _CloseOutlined = _interopRequireDefault(require("@mui/icons-material/CloseOutlined"));
var _KeyboardArrowDownOutlined = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDownOutlined"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ui
// third-party
// project import
// assets
var SnackbarBox = (0, _styles.styled)(_notistack.SnackbarContent)(function () {
  return {
    '@media (min-width:600px)': {
      minWidth: '344px !important'
    }
  };
});
var CustomNotistack = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useSnackbar = (0, _notistack.useSnackbar)(),
    closeSnackbar = _useSnackbar.closeSnackbar;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var handleExpandClick = (0, _react.useCallback)(function () {
    setExpanded(function (prevState) {
      return !prevState;
    });
    // eslint-disable-next-line
  }, []);
  var handleDismiss = (0, _react.useCallback)(function () {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);
  return /*#__PURE__*/_react["default"].createElement(SnackbarBox, {
    ref: ref
  }, /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      bgcolor: 'warning.light',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardActions, {
    sx: {
      padding: '8px 8px 8px 16px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle2"
  }, props.message), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    "aria-label": "Show more",
    sx: {
      p: 1,
      transition: 'all .2s',
      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'
    },
    onClick: handleExpandClick
  }, /*#__PURE__*/_react["default"].createElement(_KeyboardArrowDownOutlined["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      p: 1,
      transition: 'all .2s'
    },
    onClick: handleDismiss
  }, /*#__PURE__*/_react["default"].createElement(_CloseOutlined["default"], null)))), /*#__PURE__*/_react["default"].createElement(_material.Collapse, {
    "in": expanded,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    sx: {
      padding: 2,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      bgcolor: 'warning.lighter'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true
  }, "PDF ready"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    size: "small",
    startIcon: /*#__PURE__*/_react["default"].createElement(_CheckCircle["default"], {
      sx: {
        fontSize: 16
      }
    }),
    sx: {
      '&:hover': {
        bgcolor: 'transparent'
      }
    }
  }, "Download now")))));
});
CustomNotistack.propTypes = {
  id: _propTypes["default"].number,
  message: _propTypes["default"].string
};

// ==============================|| NOTISTACK - CUSTOM STYLE ||============================== //

function CustomComponent() {
  return /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    title: "Custom Component"
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    fullWidth: true,
    sx: {
      marginBlockStart: 2
    },
    onClick: function onClick() {
      (0, _notistack.enqueueSnackbar)("You're report is ready", {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        content: function content(key, message) {
          return /*#__PURE__*/_react["default"].createElement(CustomNotistack, {
            id: key,
            message: message
          });
        }
      });
    }
  }, "Show snackbar"));
}