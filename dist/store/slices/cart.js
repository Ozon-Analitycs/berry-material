"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // third-party
var initialState = {
  error: null,
  checkout: {
    step: 0,
    products: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
    payment: {
      type: 'free',
      method: 'cod',
      card: ''
    }
  }
};
var slice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {
    // HAS ERROR
    hasError: function hasError(state, action) {
      state.error = action.payload;
    },
    // ADD PRODUCT
    addProductSuccess: function addProductSuccess(state, action) {
      state.checkout.products = action.payload.products;
      state.checkout.subtotal += action.payload.subtotal;
      state.checkout.total += action.payload.subtotal;
    },
    // REMOVE PRODUCT
    removeProductSuccess: function removeProductSuccess(state, action) {
      state.checkout.products = action.payload.products;
      state.checkout.subtotal += -action.payload.subtotal;
      state.checkout.total += -action.payload.subtotal;
    },
    // UPDATE PRODUCT
    updateProductSuccess: function updateProductSuccess(state, action) {
      state.checkout.products = action.payload.products;
      state.checkout.subtotal = state.checkout.subtotal - action.payload.oldSubTotal + action.payload.subtotal;
      state.checkout.total = state.checkout.total - action.payload.oldSubTotal + action.payload.subtotal;
    },
    // SET STEP
    setStepSuccess: function setStepSuccess(state, action) {
      state.checkout.step = action.payload;
    },
    // SET NEXT STEP
    setNextStepSuccess: function setNextStepSuccess(state) {
      state.checkout.step += 1;
    },
    // SET BACK STEP
    setBackStepSuccess: function setBackStepSuccess(state) {
      state.checkout.step -= 1;
    },
    // SET BILLING ADDRESS
    setBillingAddressSuccess: function setBillingAddressSuccess(state, action) {
      state.checkout.billing = action.payload.billing;
    },
    // SET DISCOUNT
    setDiscountSuccess: function setDiscountSuccess(state, action) {
      var difference = 0;
      if (state.checkout.discount > 0) {
        difference = state.checkout.discount;
      }
      state.checkout.discount = action.payload.amount;
      state.checkout.total = state.checkout.total + difference - action.payload.amount;
    },
    // SET SHIPPING CHARGE
    setShippingChargeSuccess: function setShippingChargeSuccess(state, action) {
      state.checkout.shipping = action.payload.shipping;
      state.checkout.total += action.payload.newShipping;
      state.checkout.payment = _objectSpread(_objectSpread({}, state.checkout.payment), {}, {
        type: action.payload.type
      });
    },
    // SET PAYMENT METHOD
    setPaymentMethodSuccess: function setPaymentMethodSuccess(state, action) {
      state.checkout.payment = _objectSpread(_objectSpread({}, state.checkout.payment), {}, {
        method: action.payload.method
      });
    },
    // SET PAYMENT CARD
    setPaymentCardSuccess: function setPaymentCardSuccess(state, action) {
      state.checkout.payment = _objectSpread(_objectSpread({}, state.checkout.payment), {}, {
        card: action.payload.card
      });
    },
    // RESET CART
    resetCardSuccess: function resetCardSuccess(state) {
      state.checkout = initialState.checkout;
    }
  }
});

// Reducer
var _default = exports["default"] = slice.reducer;