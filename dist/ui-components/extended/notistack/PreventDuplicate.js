"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PreventDuplicate;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _notistack = require("notistack");
var _SubCard = _interopRequireDefault(require("../../cards/SubCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ul
// third-party
// project import
// ==============================|| NOTISTACK - PREVENT DUPLICATE ||============================== //

function PreventDuplicate() {
  var _React$useState = _react["default"].useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    checked = _React$useState2[0],
    setChecked = _React$useState2[1];
  var handleChangeCheck = function handleChangeCheck(event) {
    setChecked(event.target.checked);
  };
  return /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    title: "Prevent Duplicate"
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }, /*#__PURE__*/_react["default"].createElement(_material.Checkbox, {
    checked: checked,
    onChange: handleChangeCheck,
    inputProps: {
      'aria-label': 'controlled'
    }
  }), "Prevent duplicate", /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    fullWidth: true,
    sx: {
      marginBlockStart: 2
    },
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('You only see me once.', {
        // eslint-disable-next-line
        preventDuplicate: checked ? true : false,
        variant: 'info'
      });
    }
  }, "Show snackbar")));
}