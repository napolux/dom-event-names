/**
 * @module @napolux/dom-event-names
 * @description TypeScript constants for DOM event names.
 */

//
// Mouse Events
//

/** @constant {string} Fired when an element is clicked. */
export const CLICK = "click" as const;
/** @constant {string} Fired when an element is double-clicked. */
export const DBL_CLICK = "dblclick" as const;
/** @constant {string} Fired when a mouse button is pressed on an element. */
export const MOUSE_DOWN = "mousedown" as const;
/** @constant {string} Fired when a mouse button is released over an element. */
export const MOUSE_UP = "mouseup" as const;
/** @constant {string} Fired when the mouse pointer moves over an element. */
export const MOUSE_MOVE = "mousemove" as const;
/** @constant {string} Fired when the mouse pointer enters an element (no bubbling). */
export const MOUSE_ENTER = "mouseenter" as const;
/** @constant {string} Fired when the mouse pointer leaves an element (no bubbling). */
export const MOUSE_LEAVE = "mouseleave" as const;
/** @constant {string} Fired when the mouse pointer enters an element or its children. */
export const MOUSE_OVER = "mouseover" as const;
/** @constant {string} Fired when the mouse pointer leaves an element or its children. */
export const MOUSE_OUT = "mouseout" as const;
/** @constant {string} Fired when the right mouse button is clicked (context menu). */
export const CONTEXT_MENU = "contextmenu" as const;

//
// Keyboard Events
//

/** @constant {string} Fired when a key is pressed down. */
export const KEY_DOWN = "keydown" as const;
/** @constant {string} Fired when a key is released. */
export const KEY_UP = "keyup" as const;
/** @constant {string} Fired when a key that produces a character is pressed. @deprecated Use KEY_DOWN instead. */
export const KEY_PRESS = "keypress" as const;

//
// Form Events
//

/** @constant {string} Fired when a form is submitted. */
export const SUBMIT = "submit" as const;
/** @constant {string} Fired when the value of an element changes and is committed. */
export const CHANGE = "change" as const;
/** @constant {string} Fired when the value of an input element changes. */
export const INPUT = "input" as const;
/** @constant {string} Fired when an element receives focus. */
export const FOCUS = "focus" as const;
/** @constant {string} Fired when an element loses focus. */
export const BLUR = "blur" as const;
/** @constant {string} Fired when a form is reset. */
export const RESET = "reset" as const;
/** @constant {string} Fired when text is selected in an input or textarea. */
export const SELECT = "select" as const;

//
// Drag Events
//

/** @constant {string} Fired when the user starts dragging an element. */
export const DRAG_START = "dragstart" as const;
/** @constant {string} Fired continuously while an element is being dragged. */
export const DRAG = "drag" as const;
/** @constant {string} Fired when a drag operation ends. */
export const DRAG_END = "dragend" as const;
/** @constant {string} Fired when a dragged element is over a valid drop target. */
export const DRAG_OVER = "dragover" as const;
/** @constant {string} Fired when a dragged element enters a valid drop target. */
export const DRAG_ENTER = "dragenter" as const;
/** @constant {string} Fired when a dragged element leaves a valid drop target. */
export const DRAG_LEAVE = "dragleave" as const;
/** @constant {string} Fired when a dragged element is dropped on a valid drop target. */
export const DROP = "drop" as const;

//
// Touch Events
//

/** @constant {string} Fired when a touch point is placed on the touch surface. */
export const TOUCH_START = "touchstart" as const;
/** @constant {string} Fired when a touch point is removed from the touch surface. */
export const TOUCH_END = "touchend" as const;
/** @constant {string} Fired when a touch point moves along the touch surface. */
export const TOUCH_MOVE = "touchmove" as const;
/** @constant {string} Fired when a touch point is disrupted (e.g. too many touch points). */
export const TOUCH_CANCEL = "touchcancel" as const;

//
// Window & Document Events
//

/** @constant {string} Fired when the whole page has loaded. */
export const LOAD = "load" as const;
/** @constant {string} Fired when the document or a resource is being unloaded. */
export const UNLOAD = "unload" as const;
/** @constant {string} Fired when the window is resized. */
export const RESIZE = "resize" as const;
/** @constant {string} Fired when the document view is scrolled. */
export const SCROLL = "scroll" as const;
/** @constant {string} Fired when the URL hash fragment changes. */
export const HASH_CHANGE = "hashchange" as const;
/** @constant {string} Fired when the active history entry changes. */
export const POP_STATE = "popstate" as const;
/** @constant {string} Fired when the document's visibility state changes. */
export const VISIBILITY_CHANGE = "visibilitychange" as const;

//
// Media Events
//

/** @constant {string} Fired when media playback has started. */
export const PLAY = "play" as const;
/** @constant {string} Fired when media playback is paused. */
export const PAUSE = "pause" as const;
/** @constant {string} Fired when media playback has reached the end. */
export const ENDED = "ended" as const;
/** @constant {string} Fired when the volume has changed. */
export const VOLUME_CHANGE = "volumechange" as const;
/** @constant {string} Fired when the current playback position has changed. */
export const TIME_UPDATE = "timeupdate" as const;
/** @constant {string} Fired when the browser can start playing the media. */
export const CAN_PLAY = "canplay" as const;
/** @constant {string} Fired when the browser can play through the media without buffering. */
export const CAN_PLAY_THROUGH = "canplaythrough" as const;

//
// Clipboard Events
//

/** @constant {string} Fired when content is copied to the clipboard. */
export const COPY = "copy" as const;
/** @constant {string} Fired when content is cut to the clipboard. */
export const CUT = "cut" as const;
/** @constant {string} Fired when content is pasted from the clipboard. */
export const PASTE = "paste" as const;

//
// Animation & Transition Events
//

/** @constant {string} Fired when a CSS animation starts. */
export const ANIMATION_START = "animationstart" as const;
/** @constant {string} Fired when a CSS animation ends. */
export const ANIMATION_END = "animationend" as const;
/** @constant {string} Fired when a CSS animation iteration completes. */
export const ANIMATION_ITERATION = "animationiteration" as const;
/** @constant {string} Fired when a CSS transition ends. */
export const TRANSITION_END = "transitionend" as const;

//
// Wheel Events
//

/** @constant {string} Fired when the user rotates a wheel button on a pointing device (typically a mouse). */
export const WHEEL = "wheel" as const;
/** @constant {string} Fired when a mouse wheel is rotated. @deprecated Use WHEEL instead. */
export const MOUSE_WHEEL = "mousewheel" as const;

//
// Pointer Events
//

/** @constant {string} Fired when a pointer becomes active (mouse button pressed, touch contact, pen contact). */
export const POINTER_DOWN = "pointerdown" as const;
/** @constant {string} Fired when a pointer is no longer active. */
export const POINTER_UP = "pointerup" as const;
/** @constant {string} Fired when a pointer changes coordinates. */
export const POINTER_MOVE = "pointermove" as const;
/** @constant {string} Fired when a pointer enters an element's hit-test area (no bubbling). */
export const POINTER_ENTER = "pointerenter" as const;
/** @constant {string} Fired when a pointer leaves an element's hit-test area (no bubbling). */
export const POINTER_LEAVE = "pointerleave" as const;
/** @constant {string} Fired when a pointer event is cancelled by the browser. */
export const POINTER_CANCEL = "pointercancel" as const;

//
// DOMEvents
//

/**
 * Single object collecting every DOM event name constant.
 *
 * @example
 * ```ts
 * import { DOMEvents } from "@napolux/dom-event-names";
 * element.addEventListener(DOMEvents.CLICK, handler);
 * ```
 */
export const DOMEvents = {
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
  POINTER_CANCEL,

  WHEEL,
  MOUSE_WHEEL,
} as const;

/**
 * Union type of all DOM event name string literals.
 *
 * @example
 * ```ts
 * import type { DOMEventName } from "@napolux/dom-event-names";
 *
 * function on(el: HTMLElement, event: DOMEventName, handler: EventListener) {
 *   el.addEventListener(event, handler);
 * }
 * ```
 */
export type DOMEventName = (typeof DOMEvents)[keyof typeof DOMEvents];
