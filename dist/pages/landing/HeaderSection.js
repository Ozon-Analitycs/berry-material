"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderImage = exports.HeaderAnimationImage = void 0;
var _reactRouterDom = require("react-router-dom");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // material-ui
// third party
// import { motion } from 'framer-motion';

// project imports
// import AnimateButton from '@ui-components/extended/AnimateButton';
// import useConfig from '@hooks/useConfig';

// assets
//import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// import TechLight from '@assets/images/landing/tech-light.svg';
// import TechDark from '@assets/images/landing/tech-dark.svg';
// import dashboard from '@assets/images/landing/hero-dashboard.png';
// import widget1 from '@assets/images/landing/hero-widget-1.png';
// import widget2 from '@assets/images/landing/hero-widget-2.png';
// import BgDark from '@assets/images/landing/bg-hero-block-dark.png';
// import BgLight from '@assets/images/landing/bg-hero-block-light.png';

// styles
var HeaderImage = exports.HeaderImage = (0, _styles.styled)('img')(function (_ref) {
  var _ref2;
  var theme = _ref.theme;
  return _ref2 = {
    maxWidth: '100%',
    borderRadius: 20,
    transform: 'scale(1.7)',
    transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%'
  }, _defineProperty(_ref2, theme.breakpoints.down('xl'), {
    transform: 'scale(1.5)'
  }), _defineProperty(_ref2, theme.breakpoints.down('lg'), {
    transform: 'scale(1.2)'
  }), _ref2;
});
var HeaderAnimationImage = exports.HeaderAnimationImage = (0, _styles.styled)('img')({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

// ==============================|| LANDING - HEADER PAGE ||============================== //

// const HeaderSection = () => {
//     const theme = useTheme();
//     const { rtlLayout } = useConfig();

//     const headerSX = { fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem' } };

//     const HeaderAnimationImagememo = useMemo(
//         () => (
//             <HeaderAnimationImage
//                 src={theme.palette.mode === 'dark' ? BgDark : BgLight}
//                 alt="Berry"
//                 sx={{
//                     display: { xs: 'none', md: 'flex' },
//                     position: 'absolute',
//                     filter: 'none',
//                     bottom: { md: 0 },
//                     right: 0,
//                     width: '50%',
//                     transformOrigin: '50% 50%',
//                     transform: rtlLayout ? 'rotateY(180deg)' : 'rotateY(0deg)'
//                 }}
//             />
//         ),
//         [rtlLayout, theme]
//     );

//     return (
//         <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <Grid
//                 container
//                 justifyContent="space-between"
//                 alignItems="center"
//                 sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
//             >
//                 <Grid item xs={12} md={5}>
//                     <Grid container spacing={6}>
//                         <Grid item xs={12}>
//                             <motion.div
//                                 initial={{ opacity: 0, translateY: 550 }}
//                                 animate={{ opacity: 1, translateY: 0 }}
//                                 transition={{ type: 'spring', stiffness: 150, damping: 30 }}
//                             >
//                                 <Stack spacing={1}>
//                                     <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" sx={headerSX}>
//                                         Use Berry to Power Your Next
//                                     </Typography>

//                                     <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" color="primary" sx={headerSX}>
//                                         React Project
//                                     </Typography>
//                                 </Stack>
//                             </motion.div>
//                         </Grid>
//                         <Grid item xs={12} sx={{ mt: -2.5, textAlign: { xs: 'center', md: 'left' } }}>
//                             <motion.div
//                                 initial={{ opacity: 0, translateY: 550 }}
//                                 animate={{ opacity: 1, translateY: 0 }}
//                                 transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
//                             >
//                                 <Typography
//                                     textAlign={{ xs: 'center', md: 'left' }}
//                                     color="text.primary"
//                                     variant="body1"
//                                     sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}
//                                 >
//                                     Berry is React based Dashboard template which helps you to build faster and beautiful web applications.
//                                 </Typography>
//                             </motion.div>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <motion.div
//                                 initial={{ opacity: 0, translateY: 550 }}
//                                 animate={{ opacity: 1, translateY: 0 }}
//                                 transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
//                             >
//                                 <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
//                                     <Grid item>
//                                         <AnimateButton>
//                                             <Button
//                                                 component={RouterLink}
//                                                 to={''}
//                                                 target="_blank"
//                                                 size="large"
//                                                 variant="contained"
//                                                 color="secondary"
//                                                 startIcon={<PlayArrowIcon />}
//                                             >
//                                                 Live Preview
//                                             </Button>
//                                         </AnimateButton>
//                                     </Grid>
//                                     <Grid item>
//                                         <Button component={Link} href="https://links.codedthemes.com/hsqll" target="_blank" size="large">
//                                             Purchase Now
//                                         </Button>
//                                     </Grid>
//                                 </Grid>
//                             </motion.div>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <motion.div
//                                 initial={{ opacity: 0, translateY: 550 }}
//                                 animate={{ opacity: 1, translateY: 0 }}
//                                 transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.6 }}
//                             >
//                                 <Stack direction="row" spacing={2} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
//                                     <CardMedia
//                                         component="img"
//                                         image={theme.palette.mode === 'dark' ? TechDark : TechLight}
//                                         alt="Berry Tech"
//                                         sx={{ width: { xs: '75%', sm: '50%', md: '75%' } }}
//                                     />
//                                 </Stack>
//                             </motion.div>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
//                     <Box sx={{ position: 'relative', mt: 8.75, zIndex: 9 }}>
//                         <HeaderImage src={dashboard} alt="Berry" />
//                         <Box
//                             sx={{
//                                 position: 'absolute',
//                                 top: { md: -35, lg: -110 },
//                                 right: theme.direction === 'rtl' ? 170 : { md: -50, lg: -140, xl: -220 },
//                                 width: { md: 220, lg: 290 },
//                                 animation: '10s slideY linear infinite'
//                             }}
//                         >
//                             <motion.div
//                                 initial={{ opacity: 0, scale: 0 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
//                             >
//                                 <HeaderAnimationImage src={widget1} alt="Berry" />
//                             </motion.div>
//                         </Box>
//                         <Box
//                             sx={{
//                                 position: 'absolute',
//                                 bottom: { md: -20, lg: -90 },
//                                 left: { md: 100, lg: 300 },
//                                 width: { md: 220, lg: 280 },
//                                 animation: '10s slideY linear infinite',
//                                 animationDelay: '2s'
//                             }}
//                         >
//                             <motion.div
//                                 initial={{ opacity: 0, scale: 0 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
//                             >
//                                 <HeaderAnimationImage src={widget2} alt="Berry" />
//                             </motion.div>
//                         </Box>
//                     </Box>
//                     {HeaderAnimationImagememo}
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default HeaderSection;