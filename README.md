# 👻 typergeist

> The ghost that types *like a human*.

Typergeist simulates human typing directly into real web inputs — character by character, with random delays, hesitations, and natural speed variance.

---

## 🚀 Installation / Usage

Paste this in your browser console:

```js
await import("https://raw.githubusercontent.com/<your-username>/typergeist/main/typer.js");
Then focus any input, textarea, or contenteditable element, and:

Press Ctrl + Y → starts typing the default or last text

Press Ctrl + Shift + Y → clears the box first, then types

You can also call it programmatically:

js
Copy code
humanType("Hello, this types like a human!");
⚡ Features
🧠 Human-like delays & random “thinking” pauses

🎹 Keyboard shortcut trigger (Ctrl + Y / Ctrl + Shift + Y)

📝 Works on <input>, <textarea>, and contenteditable elements

🪄 Pure JS, zero dependencies, runs anywhere in the browser

✍️ Supports multiple calls — new calls queue after current typing, or can interrupt if modified

🧩 Example Repo Structure
arduino
Copy code
typergeist/
├── typer.js       # main script
└── README.md      # this file
❤️ Credits
Built by humans, for humans (who type too slowly).

⚠️ Disclaimer
For demo, learning, and fun use only.
Do not spam or auto-fill forms without consent. Use responsibly.
