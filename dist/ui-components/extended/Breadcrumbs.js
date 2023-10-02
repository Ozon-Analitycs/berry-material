"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _Breadcrumbs = _interopRequireDefault(require("@mui/material/Breadcrumbs"));
var _constant = require("../../store/constant");
var _icons = require("@tabler/icons");
var _AccountTreeTwoTone = _interopRequireDefault(require("@mui/icons-material/AccountTreeTwoTone"));
var _Home = _interopRequireDefault(require("@mui/icons-material/Home"));
var _HomeTwoTone = _interopRequireDefault(require("@mui/icons-material/HomeTwoTone"));
var _excluded = ["card", "divider", "icon", "icons", "maxItems", "navigation", "rightAlign", "separator", "title", "titleBottom"]; // material-ui
// project imports
// assets
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var linkSX = {
  display: 'flex',
  color: 'grey.900',
  textDecoration: 'none',
  alignContent: 'center',
  alignItems: 'center'
};

// ==============================|| BREADCRUMBS ||============================== //

var Breadcrumbs = function Breadcrumbs(_ref) {
  var card = _ref.card,
    divider = _ref.divider,
    icon = _ref.icon,
    icons = _ref.icons,
    maxItems = _ref.maxItems,
    navigation = _ref.navigation,
    rightAlign = _ref.rightAlign,
    separator = _ref.separator,
    title = _ref.title,
    titleBottom = _ref.titleBottom,
    others = _objectWithoutProperties(_ref, _excluded);
  var theme = (0, _styles.useTheme)();
  var iconStyle = {
    marginRight: theme.spacing(0.75),
    marginTop: "-".concat(theme.spacing(0.25)),
    width: '16px',
    height: '16px',
    color: theme.palette.secondary.main
  };
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    main = _useState2[0],
    setMain = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    item = _useState4[0],
    setItem = _useState4[1];

  // set active item state
  var getCollapse = function getCollapse(menu) {
    if (menu.children) {
      menu.children.filter(function (collapse) {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse);
        } else if (collapse.type && collapse.type === 'item') {
          if (document.location.pathname === process.env.REACT_APP_BASE_NAME + collapse.url) {
            setMain(menu);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };
  (0, _react.useEffect)(function () {
    var _navigation$items;
    navigation === null || navigation === void 0 || (_navigation$items = navigation.items) === null || _navigation$items === void 0 || _navigation$items.map(function (menu) {
      if (menu.type && menu.type === 'group') {
        if (menu !== null && menu !== void 0 && menu.url && process.env.REACT_APP_BASE_NAME + menu.url === document.location.pathname) {
          setMain(menu);
          setItem(menu);
        } else {
          getCollapse(menu);
        }
      }
      return false;
    });
  });

  // item separator
  var SeparatorIcon = separator;
  var separatorIcon = separator ? /*#__PURE__*/_react["default"].createElement(SeparatorIcon, {
    stroke: 1.5,
    size: "16px"
  }) : /*#__PURE__*/_react["default"].createElement(_icons.IconTallymark1, {
    stroke: 1.5,
    size: "16px"
  });
  var mainContent;
  var itemContent;
  var breadcrumbContent = /*#__PURE__*/_react["default"].createElement(_material.Typography, null);
  var itemTitle = '';
  var CollapseIcon;
  var ItemIcon;

  // collapse item
  if (main && main.type === 'collapse') {
    CollapseIcon = main.icon ? main.icon : _AccountTreeTwoTone["default"];
    mainContent = /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      component: _reactRouterDom.Link,
      to: "#",
      variant: "subtitle1",
      sx: linkSX
    }, icons && /*#__PURE__*/_react["default"].createElement(CollapseIcon, {
      style: iconStyle
    }), main.title);
  }

  // items
  if (item && item.type === 'item' || (item === null || item === void 0 ? void 0 : item.type) === 'group' && item !== null && item !== void 0 && item.url) {
    itemTitle = item.title;
    ItemIcon = item.icon ? item.icon : _AccountTreeTwoTone["default"];
    itemContent = /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "subtitle1",
      sx: {
        display: 'flex',
        textDecoration: 'none',
        alignContent: 'center',
        alignItems: 'center',
        color: 'grey.500'
      }
    }, icons && /*#__PURE__*/_react["default"].createElement(ItemIcon, {
      style: iconStyle
    }), itemTitle);

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = /*#__PURE__*/_react["default"].createElement(_material.Card, _extends({
        sx: {
          marginBottom: card === false ? 0 : theme.spacing(_constant.gridSpacing),
          // border: card === false ? 'none' : '1px solid',
          // borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75,
          background: card === false ? 'transparent' : theme.palette.background["default"]
        }
      }, others), /*#__PURE__*/_react["default"].createElement(_material.Box, {
        sx: {
          p: 2,
          pl: card === false ? 0 : 2
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        container: true,
        direction: rightAlign ? 'row' : 'column',
        justifyContent: rightAlign ? 'space-between' : 'flex-start',
        alignItems: rightAlign ? 'center' : 'flex-start',
        spacing: 1
      }, title && !titleBottom && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "h3",
        sx: {
          fontWeight: 500
        }
      }, item.title)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Breadcrumbs["default"], {
        sx: {
          '& .MuiBreadcrumbs-separator': {
            width: 16,
            ml: 1.25,
            mr: 1.25
          }
        },
        "aria-label": "breadcrumb",
        maxItems: maxItems || 8,
        separator: separatorIcon
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        component: _reactRouterDom.Link,
        to: "/",
        color: "inherit",
        variant: "subtitle1",
        sx: linkSX,
        "aria-label": "home"
      }, icons && /*#__PURE__*/_react["default"].createElement(_HomeTwoTone["default"], {
        sx: iconStyle
      }), icon && /*#__PURE__*/_react["default"].createElement(_Home["default"], {
        sx: _objectSpread(_objectSpread({}, iconStyle), {}, {
          mr: 0
        })
      }), !icon && 'Dashboard'), mainContent, itemContent)), title && titleBottom && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "h3",
        sx: {
          fontWeight: 500
        }
      }, item.title)))), card === false && divider !== false && /*#__PURE__*/_react["default"].createElement(_material.Divider, {
        sx: {
          borderColor: theme.palette.primary.main,
          mb: _constant.gridSpacing
        }
      }));
    }
  }
  return breadcrumbContent;
};
Breadcrumbs.propTypes = {
  card: _propTypes["default"].bool,
  divider: _propTypes["default"].bool,
  icon: _propTypes["default"].bool,
  icons: _propTypes["default"].bool,
  maxItems: _propTypes["default"].number,
  navigation: _propTypes["default"].object,
  rightAlign: _propTypes["default"].bool,
  separator: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  title: _propTypes["default"].bool,
  titleBottom: _propTypes["default"].bool
};
var _default = exports["default"] = Breadcrumbs;