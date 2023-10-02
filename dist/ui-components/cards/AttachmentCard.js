"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _constant = require("../../store/constant");
var _DownloadForOfflineTwoTone = _interopRequireDefault(require("@mui/icons-material/DownloadForOfflineTwoTone"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// assets

var backImage = require.context('../../assets/images/profile', true);

// ==============================|| ATTACHMENT CARD ||============================== //

var AttachmentCard = function AttachmentCard(_ref) {
  var title = _ref.title,
    image = _ref.image;
  var theme = (0, _styles.useTheme)();
  var backProfile = image && backImage("./".concat(image));
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'grey.100'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardMedia, {
    component: "img",
    image: backProfile,
    title: "Slider5 image"
  }), /*#__PURE__*/_react["default"].createElement(_material.CardContent, {
    sx: {
      p: 2,
      pb: '16px !important'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: _constant.gridSpacing
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    component: "div",
    sx: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_DownloadForOfflineTwoTone["default"], {
    sx: {
      cursor: 'pointer'
    }
  })))));
};
AttachmentCard.propTypes = {
  image: _propTypes["default"].string,
  title: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string, _propTypes["default"].object])
};
var _default = exports["default"] = AttachmentCard;