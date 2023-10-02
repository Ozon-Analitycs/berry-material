"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionWrapper = exports.HeaderWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // material-ui
// project imports
// import AppBar from '@ui-components/extended/AppBar';
// import HeaderSection from './HeaderSection';
// import CardSection from './CardSection';
// import FeatureSection from './FeatureSection';
// import PeopleSection from './PeopleSection';
// import FrameworkSection from './FrameworkSection';
// import FooterSection from './FooterSection';
// import CustomizeSection from './CustomizeSection';
// import PreBuildDashBoard from './PreBuildDashBoard';
// import StartupProjectSection from './StartupProjectSection';
// import IncludeSection from './IncludeSection';
// import RtlInfoSection from './RtlInfoSection';

// custom stlye
var HeaderWrapper = exports.HeaderWrapper = (0, _styles.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    overflowX: 'hidden',
    overflowY: 'clip',
    background: theme.palette.mode === 'dark' ? theme.palette.background["default"] : "linear-gradient(360deg, ".concat(theme.palette.grey[100], " 1.09%, ").concat(theme.palette.background.paper, " 100%)")
  }, theme.breakpoints.down('md'), {});
});
var SectionWrapper = exports.SectionWrapper = (0, _styles.styled)('div')({
  paddingTop: 100,
  paddingBottom: 100
});

// =============================|| LANDING MAIN ||============================= //

// const Landing = () => {
//     const theme = useTheme();

//     return (
//         <>
//             {/* 1. header and hero section */}
//             <HeaderWrapper id="home">
//                 <AppBar />
//                 <HeaderSection />
//             </HeaderWrapper>

//             {/* 2. card section */}
//             <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
//                 <CardSection />
//             </SectionWrapper>

//             {/* 4. developer experience section */}
//             <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
//                 <CustomizeSection />
//             </SectionWrapper>

//             {/* 3. about section */}
//             <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
//                 <FeatureSection />
//             </SectionWrapper>

//             {/* 4. Apps */}
//             <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
//                 <PreBuildDashBoard />
//             </SectionWrapper>

//             {/* 5. people section */}
//             <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
//                 <PeopleSection />
//             </SectionWrapper>

//             {/* 6. startup section */}
//             <SectionWrapper sx={{ py: 0 }}>
//                 <StartupProjectSection />
//             </SectionWrapper>

//             {/* 7. inculde section */}
//             {/* <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
//                 <IncludeSection />
//             </SectionWrapper> */}

//             {/* 8. multi-language section */}
//             {/* <SectionWrapper sx={{ py: 0 }}>
//                 <RtlInfoSection />
//             </SectionWrapper> */}

//             {/* 9. framework section */}
//             <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
//                 <FrameworkSection />
//             </SectionWrapper>

//             {/* 10. footer section */}
//             <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
//                 <FooterSection />
//             </SectionWrapper>
//         </>
//     );
// };

// export default Landing;