"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _Animation = _interopRequireDefault(require("./Animation"));
var _SubCard = _interopRequireDefault(require("../../ui-components/cards/SubCard"));
var _Avatar = _interopRequireDefault(require("../../ui-components/extended/Avatar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// project imports

// assets
// import Offer1 from '@assets/images/landing/offer/offer-1.png';
// import Offer2 from '@assets/images/landing/offer/offer-2.png';
// import Offer3 from '@assets/images/landing/offer/offer-3.png';
// import Offer4 from '@assets/images/landing/offer/offer-4.png';
// import Offer5 from '@assets/images/landing/offer/offer-5.png';
// import Offer6 from '@assets/images/landing/offer/offer-6.png';

var OfferCard = exports.OfferCard = function OfferCard(_ref) {
  var title = _ref.title,
    caption = _ref.caption,
    image = _ref.image;
  var theme = (0, _styles.useTheme)();
  var AvaterSx = {
    background: 'transparent',
    color: theme.palette.secondary.main,
    width: 56,
    height: 56
  };
  return /*#__PURE__*/_react["default"].createElement(_Animation["default"], null, /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    sx: {
      bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
      borderColor: theme.palette.mode === 'dark' ? theme.palette.background["default"] : theme.palette.divider,
      '&:hover': {
        boxShadow: 'none'
      },
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    variant: "rounded",
    sx: AvaterSx
  }, /*#__PURE__*/_react["default"].createElement(_material.CardMedia, {
    component: "img",
    src: image,
    alt: "Beautiful User Interface"
  })), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3",
    sx: {
      fontWeight: 500
    }
  }, title), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    sx: {
      fontSize: '1rem'
    }
  }, caption)))));
};
OfferCard.propTypes = {
  title: _propTypes["default"].string,
  caption: _propTypes["default"].string,
  image: _propTypes["default"].string
};
// =============================|| LANDING - FEATURE PAGE ||============================= //

// TODO
// const FeatureSection = () => (
//     <Container>
//         <Grid container spacing={7.5} justifyContent="center">
//             <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
//                 <Grid container spacing={1.5}>
//                     <Grid item xs={12}>
//                         <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
//                             What does Berry offer?
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="body2" sx={{ fontSize: '1rem' }}>
//                             Berry is a reliable choice for your admin panel needs, offering a wide range of features to easily manage your
//                             backend panel
//                         </Typography>
//                     </Grid>
//                 </Grid>
//             </Grid>
//             <Grid item xs={12}>
//                 <Grid container justifyContent="center" spacing={5} sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title="Beautiful User Interface"
//                             caption="Berry can improve the user experience of your web application by providing a clear and intuitive layout, and consistent look and feel."
//                             image={Offer1}
//                         />
//                     </Grid>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title="Time and Cost Savings"
//                             caption="Berry can save developers time and effort by providing a pre-built user interface, allowing them to focus on other aspects of the project."
//                             image={Offer2}
//                         />
//                     </Grid>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title="Reduce Development Complexity"
//                             caption="Berry simplifies admin panel development with easy theme setup and clear code with flexible layouts options."
//                             image={Offer3}
//                         />
//                     </Grid>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title="Improved Scalability"
//                             caption="Berry uses scalable technologies and resources to ensure that your admin panel remains efficient and effective as your needs evolve."
//                             image={Offer4}
//                         />
//                     </Grid>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title=" Well-Documented and Supported"
//                             caption="With a range of resources including user guides, tutorials, and FAQs to help users understand and effectively use the Berry."
//                             image={Offer5}
//                         />
//                     </Grid>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title="Performance Centric"
//                             caption="Berry is a performance-centric dashboard template that is designed to deliver optimal performance for your admin panel."
//                             image={Offer6}
//                         />
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </Container>
// );

// export default FeatureSection;