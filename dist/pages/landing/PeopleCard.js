"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _Avatar = _interopRequireDefault(require("../../ui-components/extended/Avatar"));
var _SubCard = _interopRequireDefault(require("../../ui-components/cards/SubCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// project import

// assets
// const prodImage = require.context('@assets/images/landing/testaments', true);
// ==============================|| PEOPLE CARD ||============================== //
var PeopleCard = function PeopleCard(_ref) {
  var id = _ref.id,
    name = _ref.name,
    image = _ref.image,
    tag = _ref.tag,
    content = _ref.content,
    view = _ref.view;
  var theme = (0, _styles.useTheme)();
  // const peopleProfile = image && prodImage(`./${image}`);
  var color = ['primary', 'secondary', 'success', 'info', 'error', 'warning'];
  return /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    sx: {
      bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'background.default',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale3d(1.02, 1.02, 1)',
        transition: 'all .4s ease-in-out'
      },
      opacity: view
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 2.5
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    spacing: 2.5,
    alignItems: "center"
  }, image !== '' && /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    src: '',
    sx: {
      height: 40,
      width: 40,
      bgcolor: 'transparent'
    },
    alt: "'user images'"
  }), image === '' && /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    color: color[Math.floor(Math.random() * (5 - 0 + 1) + 0)],
    src: peopleProfile,
    sx: {
      height: 40,
      width: 40
    },
    alt: "user images"
  }, name.slice(0, 1)), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    key: id,
    spacing: 0
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4",
    sx: {
      fontWeight: 500
    }
  }, name), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    sx: {
      color: theme.palette.primary.main
    }
  }, tag))), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1"
  }, content)));
};
PeopleCard.propTypes = {
  id: _propTypes["default"].number,
  name: _propTypes["default"].string,
  image: _propTypes["default"].string,
  tag: _propTypes["default"].string,
  content: _propTypes["default"].string,
  view: _propTypes["default"].number
};
var _default = exports["default"] = PeopleCard;