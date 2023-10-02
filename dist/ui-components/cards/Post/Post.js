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
var yup = _interopRequireWildcard(require("yup"));
var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));
var _reactHookForm = require("react-hook-form");
var _yup2 = require("@hookform/resolvers/yup");
var _reactMarkdown = _interopRequireDefault(require("react-markdown"));
var _remarkGfm = _interopRequireDefault(require("remark-gfm"));
var _Comment = _interopRequireDefault(require("./Comment"));
var _MainCard = _interopRequireDefault(require("../MainCard"));
var _AnimateButton = _interopRequireDefault(require("../../extended/AnimateButton"));
var _ImageList = _interopRequireDefault(require("../../extended/ImageList"));
var _Avatar = _interopRequireDefault(require("../../extended/Avatar"));
var _ShareTwoTone = _interopRequireDefault(require("@mui/icons-material/ShareTwoTone"));
var _FiberManualRecord = _interopRequireDefault(require("@mui/icons-material/FiberManualRecord"));
var _PeopleAltTwoTone = _interopRequireDefault(require("@mui/icons-material/PeopleAltTwoTone"));
var _ChatTwoTone = _interopRequireDefault(require("@mui/icons-material/ChatTwoTone"));
var _ContentCopyTwoTone = _interopRequireDefault(require("@mui/icons-material/ContentCopyTwoTone"));
var _MoreVertTwoTone = _interopRequireDefault(require("@mui/icons-material/MoreVertTwoTone"));
var _ThumbUpAltTwoTone = _interopRequireDefault(require("@mui/icons-material/ThumbUpAltTwoTone"));
var _ChatBubbleTwoTone = _interopRequireDefault(require("@mui/icons-material/ChatBubbleTwoTone"));
var _useConfig2 = _interopRequireDefault(require("../../../hooks/useConfig"));
var _excluded = ["bug", "label", "size", "fullWidth", "name", "required"]; // material-ui
// third-party
// project imports
// assets
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var avatarImage = require.context("../../../assets/images/users", true);
var validationSchema = yup.object().shape({
  name: yup.string().required("Comment Field is Required")
});

// ==============================|| COMMENT TEXTFIELD ||============================== //

var FormInput = function FormInput(_ref) {
  var bug = _ref.bug,
    label = _ref.label,
    size = _ref.size,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
    name = _ref.name,
    required = _ref.required,
    others = _objectWithoutProperties(_ref, _excluded);
  var isError = false;
  var errorMessage = "";
  if (bug && Object.prototype.hasOwnProperty.call(bug, name)) {
    isError = true;
    errorMessage = bug[name].message;
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, _extends({
    name: name,
    defaultValue: "",
    render: function render(_ref2) {
      var field = _ref2.field;
      return /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
        fullWidth: fullWidth,
        size: size,
        label: label,
        InputLabelProps: {
          className: required ? "required-label" : "",
          required: required || false
        },
        error: isError
      }, field));
    }
  }, others)), errorMessage && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.FormHelperText, {
    error: true
  }, errorMessage)));
};
FormInput.propTypes = {
  bug: _propTypes["default"].object,
  size: _propTypes["default"].string,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool
};

// ==============================|| SOCIAL PROFILE - POST ||============================== //

var Post = function Post(_ref3) {
  var commentAdd = _ref3.commentAdd,
    handleCommentLikes = _ref3.handleCommentLikes,
    handlePostLikes = _ref3.handlePostLikes,
    handleReplayLikes = _ref3.handleReplayLikes,
    post = _ref3.post,
    replyAdd = _ref3.replyAdd;
  var theme = (0, _styles.useTheme)();
  var id = post.id,
    data = post.data;
  var profile = post.profile;
  profile = _objectSpread({}, profile);
  var _useConfig = (0, _useConfig2["default"])(),
    borderRadius = _useConfig.borderRadius;
  var matchesXS = (0, _material.useMediaQuery)(theme.breakpoints.down("md"));
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
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    anchorSharedEl = _useState4[0],
    setAnchorSharedEl = _useState4[1];
  var handleSharedClick = function handleSharedClick(event) {
    setAnchorSharedEl(event.currentTarget);
  };
  var handleSharedClose = function handleSharedClose() {
    setAnchorSharedEl(null);
  };
  var _useState5 = (0, _react.useState)(!(data.comments && data.comments.length > 0)),
    _useState6 = _slicedToArray(_useState5, 2),
    openComment = _useState6[0],
    setOpenComment = _useState6[1];
  var handleChangeComment = function handleChangeComment() {
    setOpenComment(function (prev) {
      return !prev;
    });
  };
  var commentsResult = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  if (data && data.comments) {
    commentsResult = data.comments.map(function (comment) {
      return /*#__PURE__*/_react["default"].createElement(_Comment["default"], {
        postId: id,
        comment: comment,
        key: comment.id,
        user: profile,
        replyAdd: replyAdd,
        handleCommentLikes: handleCommentLikes,
        handleReplayLikes: handleReplayLikes
      });
    });
  }
  var methods = (0, _reactHookForm.useForm)({
    resolver: (0, _yup2.yupResolver)(validationSchema)
  });
  var handleSubmit = methods.handleSubmit,
    errors = methods.formState.errors,
    reset = methods.reset;
  var onSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(comment) {
      var commentId, newComment;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            handleChangeComment();
            commentId = (0, _uniqueId["default"])("#COMMENT_");
            newComment = {
              id: commentId,
              profile: profile,
              data: {
                comment: comment.name,
                likes: {
                  like: false,
                  value: 0
                },
                replies: []
              }
            };
            commentAdd(id, newComment);
            reset({
              name: ""
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onSubmit(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
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
    alt: "User 1",
    src: profile.avatar && avatarImage("./".concat(profile.avatar))
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
  }, profile.name)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    align: "left",
    variant: "caption"
  }, /*#__PURE__*/_react["default"].createElement(_FiberManualRecord["default"], {
    sx: {
      width: "10px",
      height: "10px",
      opacity: 0.5,
      m: "0 5px"
    }
  }), " ", profile.time)))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.ButtonBase, {
    sx: {
      borderRadius: "12px"
    },
    onClick: handleClick,
    "aria-label": "more options"
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    variant: "rounded",
    sx: _objectSpread(_objectSpread(_objectSpread({}, theme.typography.commonAvatar), theme.typography.smallAvatar), {}, {
      background: theme.palette.mode === "dark" ? theme.palette.dark.main : theme.palette.secondary.light,
      color: theme.palette.mode === "dark" ? theme.palette.dark.light : theme.palette.secondary.dark,
      zIndex: 1,
      transition: "all .2s ease-in-out",
      '&[aria-controls="menu-list-grow"],&:hover': {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.light
      }
    }),
    "aria-controls": "menu-post",
    "aria-haspopup": "true"
  }, /*#__PURE__*/_react["default"].createElement(_MoreVertTwoTone["default"], {
    fontSize: "inherit"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    id: "menu-post",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    variant: "selectedMenu",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleClose
  }, "Edit"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleClose
  }, "Delete"))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    sx: {
      "& > p": _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
        mb: 0
      })
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
    remarkPlugins: [_remarkGfm["default"]]
  }, data.content)), data && data.images && data.images.length > 0 && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_ImageList["default"], {
    itemData: data.images
  })), data.video && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    sx: {
      "&.MuiGrid-root": {
        pt: 2
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardMedia, {
    sx: _defineProperty({
      borderRadius: "".concat(borderRadius, "px"),
      height: 330
    }, theme.breakpoints.down("xl"), {
      height: 220
    }),
    component: "iframe",
    src: "https://www.youtube.com/embed/".concat(data.video),
    "aria-label": "theme related video"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    justifyContent: "space-between",
    spacing: 2,
    sx: {
      mt: 0,
      color: theme.palette.mode === "dark" ? "grey.700" : "grey.800"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    onClick: function onClick() {
      return handlePostLikes(id);
    },
    color: "inherit",
    size: "small",
    startIcon: /*#__PURE__*/_react["default"].createElement(_ThumbUpAltTwoTone["default"], {
      color: data && data.likes && data.likes.like ? "primary" : "inherit"
    })
  }, data && data.likes && data.likes.value ? data.likes.value : 0, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    color: "inherit",
    sx: {
      fontWeight: 500,
      ml: 0.5,
      display: {
        xs: "none",
        sm: "block"
      }
    }
  }, "likes")), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleChangeComment,
    size: "small",
    variant: "text",
    color: "inherit",
    startIcon: /*#__PURE__*/_react["default"].createElement(_ChatBubbleTwoTone["default"], {
      color: "secondary"
    })
  }, data.comments ? data.comments.length : 0, " comments"))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: handleSharedClick,
    size: "large",
    "aria-label": "share options"
  }, /*#__PURE__*/_react["default"].createElement(_ShareTwoTone["default"], {
    sx: {
      width: "16px",
      height: "16px"
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    id: "menu-post",
    anchorEl: anchorSharedEl,
    keepMounted: true,
    open: Boolean(anchorSharedEl),
    onClose: handleSharedClose,
    variant: "selectedMenu",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    sx: {
      "& .MuiSvgIcon-root": {
        marginRight: "14px",
        fontSize: "1.25rem"
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleSharedClose
  }, /*#__PURE__*/_react["default"].createElement(_ShareTwoTone["default"], {
    fontSize: "inherit"
  }), " Share Now"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleSharedClose
  }, /*#__PURE__*/_react["default"].createElement(_PeopleAltTwoTone["default"], {
    fontSize: "inherit"
  }), " Share to Friends"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleSharedClose
  }, /*#__PURE__*/_react["default"].createElement(_ChatTwoTone["default"], {
    fontSize: "inherit"
  }), " Send in Messanger"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: handleSharedClose
  }, /*#__PURE__*/_react["default"].createElement(_ContentCopyTwoTone["default"], {
    fontSize: "inherit"
  }), " Copy Link"))))), /*#__PURE__*/_react["default"].createElement(_material.Collapse, {
    "in": openComment,
    sx: {
      width: "100%"
    }
  }, openComment && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    sx: {
      pt: 2
    }
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2,
    alignItems: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sx: {
      display: {
        xs: "none",
        sm: "block"
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    sx: {
      mt: 0.75
    },
    alt: "User 1",
    src: profile.avatar && avatarImage("./".concat(profile.avatar)),
    size: "xs"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_reactHookForm.FormProvider, methods, /*#__PURE__*/_react["default"].createElement(FormInput, {
    fullWidth: true,
    name: "name",
    label: "Write a comment...",
    size: matchesXS ? "small" : "medium",
    bug: errors
  }))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_AnimateButton["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    color: "secondary",
    size: matchesXS ? "small" : "large",
    sx: {
      mt: 0.5
    }
  }, "Comment"))))))), commentsResult));
};
Post.propTypes = {
  commentAdd: _propTypes["default"].func,
  handleCommentLikes: _propTypes["default"].func,
  handlePostLikes: _propTypes["default"].func,
  handleReplayLikes: _propTypes["default"].func,
  post: _propTypes["default"].object,
  replyAdd: _propTypes["default"].func
};
var _default = exports["default"] = Post;