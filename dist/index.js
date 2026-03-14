"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ANIMATION_END: () => ANIMATION_END,
  ANIMATION_ITERATION: () => ANIMATION_ITERATION,
  ANIMATION_START: () => ANIMATION_START,
  BLUR: () => BLUR,
  CAN_PLAY: () => CAN_PLAY,
  CAN_PLAY_THROUGH: () => CAN_PLAY_THROUGH,
  CHANGE: () => CHANGE,
  CLICK: () => CLICK,
  CONTEXT_MENU: () => CONTEXT_MENU,
  COPY: () => COPY,
  CUT: () => CUT,
  DBL_CLICK: () => DBL_CLICK,
  DOMEvents: () => DOMEvents,
  DRAG: () => DRAG,
  DRAG_END: () => DRAG_END,
  DRAG_ENTER: () => DRAG_ENTER,
  DRAG_LEAVE: () => DRAG_LEAVE,
  DRAG_OVER: () => DRAG_OVER,
  DRAG_START: () => DRAG_START,
  DROP: () => DROP,
  ENDED: () => ENDED,
  FOCUS: () => FOCUS,
  HASH_CHANGE: () => HASH_CHANGE,
  INPUT: () => INPUT,
  KEY_DOWN: () => KEY_DOWN,
  KEY_PRESS: () => KEY_PRESS,
  KEY_UP: () => KEY_UP,
  LOAD: () => LOAD,
  MOUSE_DOWN: () => MOUSE_DOWN,
  MOUSE_ENTER: () => MOUSE_ENTER,
  MOUSE_LEAVE: () => MOUSE_LEAVE,
  MOUSE_MOVE: () => MOUSE_MOVE,
  MOUSE_OUT: () => MOUSE_OUT,
  MOUSE_OVER: () => MOUSE_OVER,
  MOUSE_UP: () => MOUSE_UP,
  PASTE: () => PASTE,
  PAUSE: () => PAUSE,
  PLAY: () => PLAY,
  POINTER_CANCEL: () => POINTER_CANCEL,
  POINTER_DOWN: () => POINTER_DOWN,
  POINTER_ENTER: () => POINTER_ENTER,
  POINTER_LEAVE: () => POINTER_LEAVE,
  POINTER_MOVE: () => POINTER_MOVE,
  POINTER_UP: () => POINTER_UP,
  POP_STATE: () => POP_STATE,
  RESET: () => RESET,
  RESIZE: () => RESIZE,
  SCROLL: () => SCROLL,
  SELECT: () => SELECT,
  SUBMIT: () => SUBMIT,
  TIME_UPDATE: () => TIME_UPDATE,
  TOUCH_CANCEL: () => TOUCH_CANCEL,
  TOUCH_END: () => TOUCH_END,
  TOUCH_MOVE: () => TOUCH_MOVE,
  TOUCH_START: () => TOUCH_START,
  TRANSITION_END: () => TRANSITION_END,
  UNLOAD: () => UNLOAD,
  VISIBILITY_CHANGE: () => VISIBILITY_CHANGE,
  VOLUME_CHANGE: () => VOLUME_CHANGE
});
module.exports = __toCommonJS(index_exports);
var CLICK = "click";
var DBL_CLICK = "dblclick";
var MOUSE_DOWN = "mousedown";
var MOUSE_UP = "mouseup";
var MOUSE_MOVE = "mousemove";
var MOUSE_ENTER = "mouseenter";
var MOUSE_LEAVE = "mouseleave";
var MOUSE_OVER = "mouseover";
var MOUSE_OUT = "mouseout";
var CONTEXT_MENU = "contextmenu";
var KEY_DOWN = "keydown";
var KEY_UP = "keyup";
var KEY_PRESS = "keypress";
var SUBMIT = "submit";
var CHANGE = "change";
var INPUT = "input";
var FOCUS = "focus";
var BLUR = "blur";
var RESET = "reset";
var SELECT = "select";
var DRAG_START = "dragstart";
var DRAG = "drag";
var DRAG_END = "dragend";
var DRAG_OVER = "dragover";
var DRAG_ENTER = "dragenter";
var DRAG_LEAVE = "dragleave";
var DROP = "drop";
var TOUCH_START = "touchstart";
var TOUCH_END = "touchend";
var TOUCH_MOVE = "touchmove";
var TOUCH_CANCEL = "touchcancel";
var LOAD = "load";
var UNLOAD = "unload";
var RESIZE = "resize";
var SCROLL = "scroll";
var HASH_CHANGE = "hashchange";
var POP_STATE = "popstate";
var VISIBILITY_CHANGE = "visibilitychange";
var PLAY = "play";
var PAUSE = "pause";
var ENDED = "ended";
var VOLUME_CHANGE = "volumechange";
var TIME_UPDATE = "timeupdate";
var CAN_PLAY = "canplay";
var CAN_PLAY_THROUGH = "canplaythrough";
var COPY = "copy";
var CUT = "cut";
var PASTE = "paste";
var ANIMATION_START = "animationstart";
var ANIMATION_END = "animationend";
var ANIMATION_ITERATION = "animationiteration";
var TRANSITION_END = "transitionend";
var POINTER_DOWN = "pointerdown";
var POINTER_UP = "pointerup";
var POINTER_MOVE = "pointermove";
var POINTER_ENTER = "pointerenter";
var POINTER_LEAVE = "pointerleave";
var POINTER_CANCEL = "pointercancel";
var DOMEvents = {
  CLICK,
  DBL_CLICK,
  MOUSE_DOWN,
  MOUSE_UP,
  MOUSE_MOVE,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  MOUSE_OVER,
  MOUSE_OUT,
  CONTEXT_MENU,
  KEY_DOWN,
  KEY_UP,
  KEY_PRESS,
  SUBMIT,
  CHANGE,
  INPUT,
  FOCUS,
  BLUR,
  RESET,
  SELECT,
  DRAG_START,
  DRAG,
  DRAG_END,
  DRAG_OVER,
  DRAG_ENTER,
  DRAG_LEAVE,
  DROP,
  TOUCH_START,
  TOUCH_END,
  TOUCH_MOVE,
  TOUCH_CANCEL,
  LOAD,
  UNLOAD,
  RESIZE,
  SCROLL,
  HASH_CHANGE,
  POP_STATE,
  VISIBILITY_CHANGE,
  PLAY,
  PAUSE,
  ENDED,
  VOLUME_CHANGE,
  TIME_UPDATE,
  CAN_PLAY,
  CAN_PLAY_THROUGH,
  COPY,
  CUT,
  PASTE,
  ANIMATION_START,
  ANIMATION_END,
  ANIMATION_ITERATION,
  TRANSITION_END,
  POINTER_DOWN,
  POINTER_UP,
  POINTER_MOVE,
  POINTER_ENTER,
  POINTER_LEAVE,
  POINTER_CANCEL
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ANIMATION_END,
  ANIMATION_ITERATION,
  ANIMATION_START,
  BLUR,
  CAN_PLAY,
  CAN_PLAY_THROUGH,
  CHANGE,
  CLICK,
  CONTEXT_MENU,
  COPY,
  CUT,
  DBL_CLICK,
  DOMEvents,
  DRAG,
  DRAG_END,
  DRAG_ENTER,
  DRAG_LEAVE,
  DRAG_OVER,
  DRAG_START,
  DROP,
  ENDED,
  FOCUS,
  HASH_CHANGE,
  INPUT,
  KEY_DOWN,
  KEY_PRESS,
  KEY_UP,
  LOAD,
  MOUSE_DOWN,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  MOUSE_MOVE,
  MOUSE_OUT,
  MOUSE_OVER,
  MOUSE_UP,
  PASTE,
  PAUSE,
  PLAY,
  POINTER_CANCEL,
  POINTER_DOWN,
  POINTER_ENTER,
  POINTER_LEAVE,
  POINTER_MOVE,
  POINTER_UP,
  POP_STATE,
  RESET,
  RESIZE,
  SCROLL,
  SELECT,
  SUBMIT,
  TIME_UPDATE,
  TOUCH_CANCEL,
  TOUCH_END,
  TOUCH_MOVE,
  TOUCH_START,
  TRANSITION_END,
  UNLOAD,
  VISIBILITY_CHANGE,
  VOLUME_CHANGE
});
