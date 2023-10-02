"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _ImageList = _interopRequireDefault(require("@mui/material/ImageList"));
var _useConfig2 = _interopRequireDefault(require("../../hooks/useConfig"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// project imports

// set image width & height radio
function srcset(image, width, height) {
  var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var cols = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  return "".concat(image, "?w=").concat(width * cols, "&h=").concat(height * rows, "&fit=crop&auto=format 1x,\n  ").concat(image, "?w=").concat(width * cols, "&h=").concat(height * rows, "&fit=crop&auto=format&dpr=2 2x");
}

// ==============================|| IMAGE LIST/GRID ||============================== //

var ImageList = function ImageList(_ref) {
  var itemData = _ref.itemData;
  var _useConfig = (0, _useConfig2["default"])(),
    borderRadius = _useConfig.borderRadius;
  return /*#__PURE__*/_react["default"].createElement(_ImageList["default"], {
    sx: {
      // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
      transform: 'translateZ(0)',
      overflowY: 'visible',
      mb: 0
    },
    gap: 8
  }, itemData.map(function (item) {
    var cols = item.featured ? 2 : 1;
    var rows = item.featured ? 2 : 1;
    return /*#__PURE__*/_react["default"].createElement(_material.ImageListItem, {
      key: item.img,
      cols: cols,
      rows: rows,
      sx: {
        overflow: 'hidden',
        borderRadius: "".concat(borderRadius, "px")
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      srcSet: srcset("assets/images/profile/".concat(item.img), 250, 200, rows, cols),
      alt: item.title,
      loading: "lazy"
    }), /*#__PURE__*/_react["default"].createElement(_material.ImageListItemBar, {
      sx: {
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
      },
      title: item.title,
      position: "top",
      actionPosition: "left"
    }));
  }));
};
ImageList.propTypes = {
  itemData: _propTypes["default"].array
};
var _default = exports["default"] = ImageList;