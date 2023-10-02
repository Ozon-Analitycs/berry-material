"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _Avatar = _interopRequireDefault(require("../extended/Avatar"));
var _constant = require("../../store/constant");
var _react = _interopRequireDefault(require("react"));
var _Facebook = _interopRequireDefault(require("@mui/icons-material/Facebook"));
var _Twitter = _interopRequireDefault(require("@mui/icons-material/Twitter"));
var _LinkedIn = _interopRequireDefault(require("@mui/icons-material/LinkedIn"));
var _ChatBubbleTwoTone = _interopRequireDefault(require("@mui/icons-material/ChatBubbleTwoTone"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// project imports

// assets

var avatarImage = require.context('../../assets/images/users', true);
var profileImage = require.context('../../assets/images/profile', true);

// styles
var FacebookWrapper = (0, _styles.styled)(_material.Button)({
  padding: 8,
  background: 'rgba(66, 103, 178, 0.2)',
  '& svg': {
    color: '#4267B2'
  },
  '&:hover': {
    background: '#4267B2',
    '& svg': {
      color: '#fff'
    }
  }
});
var TwitterWrapper = (0, _styles.styled)(_material.Button)({
  padding: 8,
  background: 'rgba(29, 161, 242, 0.2)',
  '& svg': {
    color: '#1DA1F2'
  },
  '&:hover': {
    background: '#1DA1F2',
    '& svg': {
      color: '#fff'
    }
  }
});
var LinkedInWrapper = (0, _styles.styled)(_material.Button)({
  padding: 8,
  background: 'rgba(14, 118, 168, 0.12)',
  '& svg': {
    color: '#0E76A8'
  },
  '&:hover': {
    background: '#0E76A8',
    '& svg': {
      color: '#fff'
    }
  }
});

// ==============================|| USER PROFILE CARD ||============================== //

var UserProfileCard = function UserProfileCard(_ref) {
  var avatar = _ref.avatar,
    name = _ref.name,
    profile = _ref.profile,
    role = _ref.role,
    status = _ref.status;
  var theme = (0, _styles.useTheme)();
  var avatarProfile = avatar && avatarImage("./".concat(avatar));
  var imageProfile = profile && profileImage("./".concat(profile));
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
      border: theme.palette.mode === 'dark' ? 'none' : '1px solid',
      borderColor: theme.palette.grey[100],
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardMedia, {
    component: "img",
    image: imageProfile,
    title: "Slider5 image",
    sx: {
      height: '125px'
    }
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
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: _constant.gridSpacing
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    alt: name,
    src: avatarProfile,
    sx: {
      width: 72,
      height: 72,
      m: '-50px auto 0'
    }
  })))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4"
  }, name)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2"
  }, role)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, status === 'Active' ? /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: "Active",
    size: "small",
    sx: {
      bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : 'success.light',
      color: 'success.dark'
    }
  }) : /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: "Rejected",
    size: "small",
    sx: {
      bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : 'error.light',
      color: 'error.dark'
    }
  })))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(FacebookWrapper, {
    fullWidth: true,
    "aria-label": "facebook"
  }, /*#__PURE__*/_react["default"].createElement(_Facebook["default"], null))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(TwitterWrapper, {
    fullWidth: true,
    "aria-label": "twitter"
  }, /*#__PURE__*/_react["default"].createElement(_Twitter["default"], null))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(LinkedInWrapper, {
    fullWidth: true,
    "aria-label": "linkedin"
  }, /*#__PURE__*/_react["default"].createElement(_LinkedIn["default"], null))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    fullWidth: true,
    startIcon: /*#__PURE__*/_react["default"].createElement(_ChatBubbleTwoTone["default"], null)
  }, "Message")))));
};
UserProfileCard.propTypes = {
  avatar: _propTypes["default"].string,
  name: _propTypes["default"].string,
  profile: _propTypes["default"].string,
  role: _propTypes["default"].string,
  status: _propTypes["default"].string
};
var _default = exports["default"] = UserProfileCard;