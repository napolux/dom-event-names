# @napolux/dom-event-names

TypeScript constants for DOM event names — eliminate magic strings from your event listeners.

Every constant carries an exact string literal type (e.g. `"mousedown"`, not `string`), so it works with `addEventListener` without any cast.

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

// later…
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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. This project enforces [Conventional Commits](https://www.conventionalcommits.org/) via husky + commitlint.

## License

MIT
