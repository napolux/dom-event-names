# @napolux/dom-event-names

TypeScript constants for DOM event names - eliminate magic strings from your event listeners.

Every constant carries an exact string literal type (e.g. `"mousedown"`, not `string`), so it works with `addEventListener` without any cast.

## Why?

```ts
// Magic strings are error-prone and hard to refactor
element.addEventListener("mosuedown", handler); // typo, no error

// Constants are autocompleted and type-checked
element.addEventListener(MOUSE_DOWN, handler); // safe
```

## Installation

```bash
npm install @napolux/dom-event-names
```

```bash
yarn add @napolux/dom-event-names
```

## Usage

### Individual imports

```ts
import { CLICK, KEY_DOWN, MOUSE_ENTER } from "@napolux/dom-event-names";

const button = document.querySelector("button")!;

function handleClick(e: MouseEvent) {
  console.log("clicked", e.target);
}

button.addEventListener(CLICK, handleClick);

// later...
button.removeEventListener(CLICK, handleClick);
```

### Using the DOMEvents object

```ts
import { DOMEvents } from "@napolux/dom-event-names";

window.addEventListener(DOMEvents.RESIZE, () => {
  console.log("window resized");
});

document.addEventListener(DOMEvents.VISIBILITY_CHANGE, () => {
  console.log("visibility:", document.visibilityState);
});
```

### Type usage

```ts
import type { DOMEventName } from "@napolux/dom-event-names";

function on(el: HTMLElement, event: DOMEventName, handler: EventListener) {
  el.addEventListener(event, handler);
}
```

## Available Events

| Category               | Constants                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Mouse                  | `CLICK`, `DBL_CLICK`, `MOUSE_DOWN`, `MOUSE_UP`, `MOUSE_MOVE`, `MOUSE_ENTER`, `MOUSE_LEAVE`, `MOUSE_OVER`, `MOUSE_OUT`, `CONTEXT_MENU` |
| Keyboard               | `KEY_DOWN`, `KEY_UP`, `KEY_PRESS`                                                                                                     |
| Form                   | `SUBMIT`, `CHANGE`, `INPUT`, `FOCUS`, `BLUR`, `RESET`, `SELECT`                                                                       |
| Drag                   | `DRAG_START`, `DRAG`, `DRAG_END`, `DRAG_OVER`, `DRAG_ENTER`, `DRAG_LEAVE`, `DROP`                                                     |
| Touch                  | `TOUCH_START`, `TOUCH_END`, `TOUCH_MOVE`, `TOUCH_CANCEL`                                                                              |
| Window & Document      | `LOAD`, `UNLOAD`, `RESIZE`, `SCROLL`, `HASH_CHANGE`, `POP_STATE`, `VISIBILITY_CHANGE`                                                 |
| Media                  | `PLAY`, `PAUSE`, `ENDED`, `VOLUME_CHANGE`, `TIME_UPDATE`, `CAN_PLAY`, `CAN_PLAY_THROUGH`                                              |
| Clipboard              | `COPY`, `CUT`, `PASTE`                                                                                                                |
| Animation & Transition | `ANIMATION_START`, `ANIMATION_END`, `ANIMATION_ITERATION`, `TRANSITION_END`                                                           |
| Pointer                | `POINTER_DOWN`, `POINTER_UP`, `POINTER_MOVE`, `POINTER_ENTER`, `POINTER_LEAVE`, `POINTER_CANCEL`                                      |
| Wheel                  | `WHEEL`, `MOUSE_WHEEL`                                                                                                                |

## Works everywhere

- **TypeScript** - full literal types, autocomplete, and type safety
- **JavaScript (ESM)** - `import { CLICK } from "@napolux/dom-event-names"`
- **JavaScript (CJS)** - `const { CLICK } = require("@napolux/dom-event-names")`
- **Node.js** - works out of the box, CJS and ESM

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. This project enforces [Conventional Commits](https://www.conventionalcommits.org/) via husky + commitlint.

## License

MIT
