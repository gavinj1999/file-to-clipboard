# 📋 File to Clipboard: Your Text File Copying Superpower! 🚀

Welcome to **File to Clipboard**, the VSCode extension that makes copying text file contents as easy as a right-click! Say goodbye to opening files just to snag their contents—whether it's a `.txt`, `.js`, or `.md`, this extension zaps the text straight to your clipboard with a single click. Plus, you get to be the DJ of your file extensions, remixing the list to suit your workflow. Ready to clip like a pro? Let’s dive in! 🎉

## 🎯 Features That’ll Make You Say "Wow!"

- **Right-Click Magic**: Right-click any text file in the VSCode File Explorer, hit **To Clipboard**, and *boom*—the file’s contents are on your clipboard, ready to paste anywhere!
- **Text Files Only, Please**: Out of the box, it supports popular text formats like `.txt`, `.js`, `.ts`, `.json`, `.md`, `.css`, `.html`, `.py`, and more. No images or database files crashing this party!
- **Customizable Extension Party**: Tweak the list of allowed file extensions in the settings to match your vibe. Want `.log` files? Done. Done with `.csv`? Kick it out!
- **User-Friendly Feedback**: Get clear messages like "Copied!" or "Oops, that’s not a text file!" so you’re never left guessing.
- **Lightweight & Zippy**: Built to be fast and unobtrusive, so you can focus on coding, not waiting.

## 🛠️ Installation: Get This Party Started!

Want to join the clipboard revolution? Here’s how to install **File to Clipboard** on your local VSCode setup:

1. **Grab the Goods**:
   - Make sure you have the `.vsix` file for the extension (e.g., `file-to-clipboard-0.0.3.vsix`). If you’re the dev, package it with:
     ```bash
     npm install -g @vscode/vsce
     vsce package
     ```

2. **Install the Extension**:
   - Open VSCode and head to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
   - Click the three dots (`...`) in the top-right corner and choose **Install from VSIX...**.
   - Navigate to your project folder (e.g., `C:\Users\YourName\file-to-clipboard`), select the `.vsix` file, and click **Open**.
   - Or, be a terminal rockstar and run:
     ```bash
     code --install-extension path\to\file-to-clipboard-0.0.3.vsix
     ```

3. **Restart VSCode** (if needed):
   - Give VSCode a quick nap and wake-up to ensure the extension is ready to roll.

4. **Check It Out**:
   - Open a folder with some text files, right-click a `.txt` or `.js` file, and look for **To Clipboard** in the context menu. You’re in business! 🎸

## 🎨 How to Use It: Clip Like a Champ!

Using **File to Clipboard** is as fun as a barrel of monkeys:

1. **Find Your File**:
   - In the VSCode File Explorer, locate a text file (e.g., `notes.txt`, `app.js`, or `readme.md`).

2. **Right-Click & Clip**:
   - Right-click the file and select **To Clipboard** from the context menu.
   - Watch the magic happen as the file’s contents are copied to your clipboard!

3. **Paste Anywhere**:
   - Pop over to your favorite text editor, chat app, or code playground and paste (`Ctrl+V`) to share the goodness.

4. **Error? No Sweat!**:
   - Tried to copy a `.png` or `.db` file? You’ll get a friendly nudge: “This command is only supported for configured text file extensions.”
   - Check your settings to add new extensions if needed (see below).

## ⚙️ Customize Your Clipboard Groove

Want to make **File to Clipboard** dance to your tune? Customize the allowed file extensions via the settings page:

1. **Open Settings**:
   - Go to File > Preferences > Settings (`Ctrl+,`) or click the gear icon in the Extensions view for **File to Clipboard** and select **Extension Settings**.
   - Search for `File to Clipboard` to find the settings.

2. **Tweak Allowed Extensions**:
   - Find the **File to Clipboard: Allowed Extensions** setting.
   - Add or remove extensions (e.g., add `.log`, remove `.csv`). Make sure each extension starts with a dot (e.g., `.txt`, not `txt`).
   - Example: `[ ".txt", ".js", ".log" ]` to only allow `.txt`, `.js`, and `.log` files.

3. **Workspace Vibes**:
   - Set different extensions for specific projects by switching to the Workspace tab in Settings.

4. **Test Your Changes**:
   - Right-click files with your configured extensions to ensure **To Clipboard** works as expected.
   - Try an unconfigured file to see the error message guiding you to the settings.

## 🎉 Default Extensions: The Starter Playlist

Out of the box, **File to Clipboard** supports these text file extensions:

- `.txt`, `.js`, `.ts`, `.json`, `.md`, `.css`, `.html`, `.py`, `.java`, `.cpp`, `.c`, `.h`, `.php`, `.rb`, `.go`, `.sh`, `.yaml`, `.yml`, `.xml`, `.csv`

Don’t like the defaults? Remix them in the settings to create your perfect playlist!

## 🛠️ For Developers: Build & Tweak the Code

If you’re a code ninja wanting to hack on **File to Clipboard**, here’s the lowdown:

1. **Project Setup**:
   - Clone or navigate to the project folder:
     ```bash
     cd C:\Users\YourName\file-to-clipboard
     npm install
     ```

2. **Compile**:
   - Build the extension with:
     ```bash
     npm run compile
     ```

3. **Test Locally**:
   - Open the project in VSCode, press `F5` to launch the Extension Development Host, and test the extension.

4. **Key Files**:
   - `src/extension.ts`: The main logic, handling file copying and settings.
   - `package.json`: Defines commands, menus, and the settings page.
   - `webpack.config.js` & `tsconfig.json`: Build configuration for TypeScript and Webpack.

5. **Customize**:
   - Add new features (e.g., file size limits, confirmation dialogs).
   - Update the `allowedExtensions` default list in `package.json` and `extension.ts`.

6. **Repackage**:
   - After changes, increment the `version` in `package.json` and run:
     ```bash
     vsce package
     ```

## 🚨 Troubleshooting: Don’t Let Bugs Steal Your Groove

- **“To Clipboard” Missing?**
  - Ensure the extension is installed and enabled in the Extensions view.
  - Check that you’re right-clicking a file (not a folder) in the File Explorer.
  - Verify the file’s extension is in your configured list (Settings > File to Clipboard).

- **Copy Not Working?**
  - Look for error messages like “Failed to copy file contents” and check file permissions.
  - Open VSCode Developer Tools (Help > Toggle Developer Tools, Console tab) for clues.

- **Settings Not Saving?**
  - Ensure extensions start with a dot (e.g., `.txt`) in the settings UI.
  - Check `settings.json` for manual edits if using raw JSON.

- **Still Stuck?**
  - Drop an issue on the repo (if published) or ping the dev (that’s you, maybe?). Include error messages and what you tried!

## 📜 License

This extension is licensed under the [MIT License](LICENSE). Feel free to use, tweak, and share the love!

## 🎈 Final Words

**File to Clipboard** is your ticket to effortless text file copying in VSCode. Whether you’re slinging code, jotting notes, or sharing snippets, this extension has your back. Customize it, clip it, love it! Got ideas for new features? Fork it or shout out! Let’s keep the clipboard party rocking! 🎶

---

*Built with 💖 by Gavin (or your name here!).*
