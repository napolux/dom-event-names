# Contributing

Thanks for your interest in contributing to `@napolux/dom-event-names`!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/<your-username>/dom-event-names.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b my-feature`

## Development

Build the project:

```bash
npm run build
```

Clean build artifacts:

```bash
npm run clean
```

## Adding New Event Constants

- Use `UPPER_SNAKE_CASE` for the constant name (e.g. `MOUSE_DOWN`, not `MOUSEDOWN`)
- Use `as const` to preserve the string literal type
- Add a JSDoc comment describing when the event fires
- Add the constant to the `DOMEvents` object
- Place it in the correct category section

## Submitting Changes

1. Commit your changes with a clear message
2. Push to your fork
3. Open a pull request against `main`
4. Describe what you changed and why

## Reporting Issues

Open an issue on GitHub with:

- A clear title and description
- Steps to reproduce (if applicable)
- Expected vs actual behavior

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
