"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strengthIndicatorNumFunc = exports.strengthColor = void 0;
var _themesVarsModule = _interopRequireDefault(require("assets/scss/_themes-vars.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Password validator for login pages
 */

// has number
var hasNumber = function hasNumber(number) {
  return new RegExp(/[0-9]/).test(number);
};

// has mix of small and capitals
var hasMixed = function hasMixed(number) {
  return new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);
};

// has special chars
var hasSpecial = function hasSpecial(number) {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(number);
};

// set color based on password strength
var strengthColor = exports.strengthColor = function strengthColor(count) {
  if (count < 2) return {
    label: 'Poor',
    color: _themesVarsModule["default"].errorMain
  };
  if (count < 3) return {
    label: 'Weak',
    color: _themesVarsModule["default"].warningDark
  };
  if (count < 4) return {
    label: 'Normal',
    color: _themesVarsModule["default"].orangeMain
  };
  if (count < 5) return {
    label: 'Good',
    color: _themesVarsModule["default"].successMain
  };
  if (count < 6) return {
    label: 'Strong',
    color: _themesVarsModule["default"].successDark
  };
  return {
    label: 'Poor',
    color: _themesVarsModule["default"].errorMain
  };
};

// password strength indicator
var strengthIndicatorNumFunc = exports.strengthIndicatorNumFunc = function strengthIndicatorNumFunc(number) {
  var strengths = 0;
  if (number.length > 5) strengths += 1;
  if (number.length > 7) strengths += 1;
  if (hasNumber(number)) strengths += 1;
  if (hasSpecial(number)) strengths += 1;
  if (hasMixed(number)) strengths += 1;
  return strengths;
};