👻 Typergeist: The Ghost That Types Like a Human
Typergeist simulates human typing directly into real web inputs — character by character, with random delays, hesitations, and natural speed variance.

🚀 Installation & Quick Usage
Typergeist is a pure JavaScript module, ready to be imported and run directly in your browser's console or integrated into any frontend environment.

Browser Console (Quick Start)
Paste the following line into your browser's Developer Console and press Enter:

JavaScript

await import("https://raw.githubusercontent.com/<your-username>/typergeist/main/typer.js");
Focus any text input field (<input>, <textarea>, or a contenteditable element).

Use the following keyboard shortcuts:

Shortcut	Action
Ctrl + Y	Starts typing the default text or the last text provided.
Ctrl + Shift + Y	Clears the input box first, then starts typing.

Export to Sheets
Programmatic Use
You can also call the typing function directly in your scripts:

JavaScript

humanType("Hello, this types like a human!");
⚡ Features
Typergeist brings a touch of humanity to automation with its core features:

🧠 Human-like Delays: Implements random, natural "thinking pauses" and realistic character-to-character speed variance.

🎹 Keyboard Shortcut Trigger: Conveniently launch typing with Ctrl + Y or Ctrl + Shift + Y.

📝 Broad Compatibility: Works seamlessly on standard web inputs: <input>, <textarea>, and contenteditable elements.

🪄 Pure JS, Zero Dependencies: A lightweight script that runs anywhere in the browser without needing external libraries.

✍️ Queuing and Interruption: Supports multiple calls—new typing requests gracefully queue after the current one finishes, or they can be modified to interrupt.

🧩 Example Repository Structure
Arduino

typergeist/
├── typer.js       # The main Typergeist script
└── README.md      # This file
❤️ Credits
Built by humans, for humans (who type too slowly).

⚠️ Disclaimer: Use Responsibly
Typergeist is intended for demo, learning, and fun use only.

Do not spam or auto-fill forms without explicit consent. Use responsibly and respect website terms of service.
