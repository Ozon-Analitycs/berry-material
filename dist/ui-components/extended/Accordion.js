"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));
var _AccordionDetails = _interopRequireDefault(require("@mui/material/AccordionDetails"));
var _AccordionSummary = _interopRequireDefault(require("@mui/material/AccordionSummary"));
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
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
// ==============================|| ACCORDION ||============================== //

var Accordion = function Accordion(_ref) {
  var data = _ref.data,
    _ref$defaultExpandedI = _ref.defaultExpandedId,
    defaultExpandedId = _ref$defaultExpandedI === void 0 ? null : _ref$defaultExpandedI,
    expandIcon = _ref.expandIcon,
    square = _ref.square,
    toggle = _ref.toggle;
  var theme = (0, _styles.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      return toggle && setExpanded(newExpanded ? panel : false);
    };
  };
  (0, _react.useEffect)(function () {
    setExpanded(defaultExpandedId);
  }, [defaultExpandedId]);
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      width: '100%'
    }
  }, data && data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
      key: item.id,
      defaultExpanded: !item.disabled && item.defaultExpand,
      expanded: !toggle && !item.disabled && item.expanded || toggle && expanded === item.id,
      disabled: item.disabled,
      square: square,
      onChange: handleChange(item.id)
    }, /*#__PURE__*/_react["default"].createElement(_AccordionSummary["default"], {
      expandIcon: expandIcon || expandIcon === false ? expandIcon : /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null),
      sx: {
        color: theme.palette.mode === 'dark' ? 'grey.600' : 'grey.900',
        fontWeight: 500
      }
    }, item.title), /*#__PURE__*/_react["default"].createElement(_AccordionDetails["default"], null, item.content));
  }));
};
Accordion.propTypes = {
  data: _propTypes["default"].array,
  defaultExpandedId: _propTypes["default"].string,
  expandIcon: _propTypes["default"].object,
  square: _propTypes["default"].bool,
  toggle: _propTypes["default"].bool
};
var _default = exports["default"] = Accordion;