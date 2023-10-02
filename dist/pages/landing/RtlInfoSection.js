"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderImage = exports.HeaderAnimationImage = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // material-ui
// assets
// import LightRTLImage from '@assets/images/landing/bg-rtl-info-light.svg';
// import DarkRTLImage from '@assets/images/landing/bg-rtl-info-dark.svg';

// import BgDark from '@assets/images/landing/bg-rtl-info-block-dark.png';
// import BgLight from '@assets/images/landing/bg-rtl-info-block-light.png';

// styles
var HeaderImage = exports.HeaderImage = (0, _styles.styled)('img')(function (_ref) {
  var _ref2;
  var theme = _ref.theme;
  return _ref2 = {
    maxWidth: '100%',
    height: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0
  }, _defineProperty(_ref2, theme.breakpoints.down('xl'), {
    right: -100
  }), _defineProperty(_ref2, theme.breakpoints.down('md'), {
    right: -120
  }), _defineProperty(_ref2, theme.breakpoints.down('sm'), {
    right: -160
  }), _ref2;
});
var HeaderAnimationImage = exports.HeaderAnimationImage = (0, _styles.styled)('img')({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

// const RtlInfoSection = () => {
//     const theme = useTheme();

//     return (
//         <Box
//             sx={{
//                 background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[100],
//                 height: { xs: 240, sm: 280, md: 360, lg: 451, xl: 595 },
//                 overflow: 'hidden',
//                 position: 'relative'
//             }}
//         >
//             <Stack spacing={2} sx={{ mt: { xs: 4, md: 6, lg: 12, xl: 15 }, ml: { xs: 2, sm: 3, md: 7 } }}>
//                 <Typography variant="h2" sx={{ zIndex: 2, fontSize: { xs: '1.5rem', sm: '2.125rem', lg: '2.5rem', xl: '2.75rem' } }}>
//                     Multi-language, RTL Support
//                 </Typography>
//                 <Typography variant="h4" sx={{ fontWeight: 400, zIndex: '9', width: { xs: '50%', md: '100%' } }}>
//                     Support Multi-language. Added 4 pre-filled language.
//                 </Typography>
//             </Stack>
//             <HeaderImage
//                 src={theme.palette.mode === 'dark' ? DarkRTLImage : LightRTLImage}
//                 sx={{ zIndex: 1, height: { xs: 'inherit' }, objectFit: { xs: 'cover', lg: 'fill' } }}
//             />
//             <HeaderAnimationImage
//                 src={theme.palette.mode === 'dark' ? BgDark : BgLight}
//                 alt="Berry"
//                 sx={{
//                     position: 'absolute',
//                     filter: 'none',
//                     bottom: 0,
//                     right: 0,
//                     width: '100%',
//                     transform: { xl: 'scale(0.9)', lg: 'scale(0.85)', md: 'scale(0.85)', sm: 'scale(0.9)' },
//                     transformOrigin: '100% 180%'
//                 }}
//             />
//         </Box>
//     );
// };

// export default RtlInfoSection;