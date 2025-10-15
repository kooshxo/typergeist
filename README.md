# 👻 Typergeist

> The ghost that types *like a human*.

Typergeist simulates human typing directly into web inputs — character by character, with random delays, pauses, and natural speed variation.

---

## 🚀 Installation / Usage

Paste this in your browser console:

```js
await import("https://raw.githubusercontent.com/<your-username>/typergeist/main/typer.js");

// Then focus any input, textarea, or contenteditable element:

// Press Ctrl + Y → starts typing the default or last text
// Press Ctrl + Shift + Y → clears the box first, then types

// Or call it programmatically:
humanType("Hello, this types like a human!");
