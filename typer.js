(() => {
  let lastEditable = null;
  let typing = null; // store current typing promise
  let cancelCurrent = false;

  // Track last focused editable element
  window.addEventListener("focusin", e => {
    const el = e.target;
    if (
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement ||
      (el instanceof Element && el.isContentEditable)
    ) {
      lastEditable = el;
    }
  });

  function dispatchInput(el) {
    el.dispatchEvent(new Event("input", { bubbles: true }));
  }

  async function typeInto(el, text, baseDelay = 60, jitter = 100) {
    cancelCurrent = false;
    for (const ch of text) {
      if (cancelCurrent) break;

      // random “thinking” pause
      if (Math.random() < 0.05) {
        await new Promise(r => setTimeout(r, 500 + Math.random() * 1500));
      }

      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        const start = el.selectionStart ?? el.value.length;
        const end = el.selectionEnd ?? start;
        el.value = el.value.slice(0, start) + ch + el.value.slice(end);
        const pos = start + 1;
        el.setSelectionRange(pos, pos);
        dispatchInput(el);
      } else {
        try {
          document.execCommand("insertText", false, ch);
        } catch {
          el.textContent = (el.textContent ?? "") + ch;
        }
        el.focus();
        dispatchInput(el);
      }

      await new Promise(r => setTimeout(r, baseDelay + Math.random() * jitter));
    }
  }

  // Expose humanType function
  window.humanType = async function (text) {
    if (!lastEditable) {
      console.warn("Focus an input, textarea, or contenteditable element first!");
      return;
    }
    // cancel previous typing
    cancelCurrent = true;
    await typing; // wait for previous typing to stop
    typing = typeInto(lastEditable, text);
    await typing;
  };

  // Ctrl+Y and Ctrl+Shift+Y shortcuts
  document.addEventListener("keydown", async e => {
    if (!e.ctrlKey || (e.key !== "y" && e.key !== "Y")) return;

    e.preventDefault();
    if (!lastEditable) {
      console.warn("Focus an input, textarea, or contenteditable element first!");
      return;
    }

    let text = lastEditable.value || lastEditable.textContent || "";
    if (e.shiftKey) {
      // Ctrl+Shift+Y clears the box first
      if (lastEditable instanceof HTMLInputElement || lastEditable instanceof HTMLTextAreaElement) {
        lastEditable.value = "";
        lastEditable.setSelectionRange(0, 0);
        dispatchInput(lastEditable);
      } else {
        lastEditable.textContent = "";
        dispatchInput(lastEditable);
      }
      await new Promise(r => setTimeout(r, 150)); // small pause
    }

    cancelCurrent = true;
    await typing; // stop previous typing
    typing = typeInto(lastEditable, text);
  });
})();
