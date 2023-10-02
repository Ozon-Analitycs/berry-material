"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openSnackbar = exports.handlerIncrease = exports.handlerIconVariants = exports.handlerDense = exports["default"] = exports.closeSnackbar = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  action: false,
  open: false,
  message: 'Note archived',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  variant: 'default',
  alert: {
    color: 'primary',
    variant: 'filled'
  },
  transition: 'Fade',
  close: true,
  maxStack: 3,
  dense: false,
  iconVariant: 'hide',
  actionButton: false
};

// ==============================|| SLICE - SNACKBAR ||============================== //

var snackbar = (0, _toolkit.createSlice)({
  name: 'snackbar',
  initialState: initialState,
  reducers: {
    openSnackbar: function openSnackbar(state, action) {
      var _action$payload = action.payload,
        open = _action$payload.open,
        message = _action$payload.message,
        anchorOrigin = _action$payload.anchorOrigin,
        variant = _action$payload.variant,
        alert = _action$payload.alert,
        transition = _action$payload.transition,
        close = _action$payload.close,
        actionButton = _action$payload.actionButton;
      state.action = !state.action;
      state.open = open || initialState.open;
      state.message = message || initialState.message;
      state.anchorOrigin = anchorOrigin || initialState.anchorOrigin;
      state.variant = variant || initialState.variant;
      state.alert = {
        color: (alert === null || alert === void 0 ? void 0 : alert.color) || initialState.alert.color,
        variant: (alert === null || alert === void 0 ? void 0 : alert.variant) || initialState.alert.variant
      };
      state.transition = transition || initialState.transition;
      state.close = close === false ? close : initialState.close;
      state.actionButton = actionButton || initialState.actionButton;
    },
    closeSnackbar: function closeSnackbar(state) {
      state.open = false;
    },
    handlerDense: function handlerDense(state, action) {
      var dense = action.payload.dense;
      state.dense = dense;
    },
    handlerIncrease: function handlerIncrease(state, action) {
      var maxStack = action.payload.maxStack;
      state.maxStack = maxStack;
    },
    handlerIconVariants: function handlerIconVariants(state, action) {
      var iconVariant = action.payload.iconVariant;
      state.iconVariant = iconVariant;
    }
  }
});
var _default = exports["default"] = snackbar.reducer;
var _snackbar$actions = snackbar.actions,
  closeSnackbar = exports.closeSnackbar = _snackbar$actions.closeSnackbar,
  openSnackbar = exports.openSnackbar = _snackbar$actions.openSnackbar,
  handlerDense = exports.handlerDense = _snackbar$actions.handlerDense,
  handlerIconVariants = exports.handlerIconVariants = _snackbar$actions.handlerIconVariants,
  handlerIncrease = exports.handlerIncrease = _snackbar$actions.handlerIncrease;