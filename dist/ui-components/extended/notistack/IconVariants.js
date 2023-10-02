"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = IconVariants;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _notistack = require("notistack");
var _SubCard = _interopRequireDefault(require("../../cards/SubCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ul
// third-party
// project import
// TODO
// import { dispatch } from '@store';
// import { handlerIconVariants } from '@store/slices/snackbar';
// ==============================|| NOTISTACK - CUSTOM ICON ||============================== //
function IconVariants() {
  var _useState = (0, _react.useState)('usedefault'),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };
  return /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    title: "With Icons"
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControl, null, /*#__PURE__*/_react["default"].createElement(_material.RadioGroup, {
    row: true,
    "aria-labelledby": "demo-row-radio-buttons-group-label",
    value: value,
    onChange: handleChange,
    name: "row-radio-buttons-group"
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    value: "usedefault",
    control: /*#__PURE__*/_react["default"].createElement(_material.Radio, null),
    label: "Use Default"
  }), /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    value: "useemojis",
    control: /*#__PURE__*/_react["default"].createElement(_material.Radio, null),
    label: "Use Emojis"
  }), /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    value: "hide",
    control: /*#__PURE__*/_react["default"].createElement(_material.Radio, null),
    label: "Hide"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    fullWidth: true,
    sx: {
      marginBlockStart: 2
    },
    onClick: function onClick() {
      (0, _notistack.enqueueSnackbar)('Your notification here', {
        variant: 'info'
      });
      // TODO
      console.log('click');
      // dispatch(
      //     handlerIconVariants({
      //         iconVariant: value
      //     })
      // );
    }
  }, "Show Snackbar"));
}