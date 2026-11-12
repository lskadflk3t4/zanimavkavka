# Language Drills

An installable web app (PWA) with Russian, German, Chinese (HSK), French and English drills, plus two Mandarin listening courses with audio: Listening 1 (136 parts) and Listening 2 (174 parts). After the first visit it works fully offline.

## Put it on GitHub Pages

1. Create a new **public** repository on GitHub (for example `language-drills`).
2. Click **Add file → Upload files** and upload the contents of this folder in three goes, because GitHub's web uploader takes at most 100 files at a time:
   - all the loose files at the top (`index.html`, `listening-data.json`, `listening2-data.json`, `listening2-lex.json`, `sw.js`, `manifest.webmanifest`, `README.md`, `.nojekyll`) together with the `icons` folder;
   - the `audio-1` folder;
   - the `audio-2` folder;
   - the `audio-3` folder;
   - the `audio-4` folder.
   Commit after each upload. (With git you can push everything in one go.)
3. Go to **Settings → Pages**, set *Source* to **Deploy from a branch**, and choose `main` and `/ (root)`. Save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Install on your phone

1. Open that address in Chrome on Android while you're online.
2. Leave it open for a moment. The audio (about 115 MB) downloads in the background.
3. Use the menu **⋮ → Add to Home screen / Install app**.

From then on it opens from the home screen and works with no connection.

## Good to know

- **Sync between devices:** open ⋮ → *Sync between devices*, follow the link to create a GitHub token with only "gist" ticked, paste it and tap *Connect GitHub sync*. Do the same on every device with the same token. Progress is kept in a private gist called `language-drills-sync.json` in your GitHub account. It syncs when the app opens, about every 20–30 seconds while you drill, and when you leave the app. Offline changes sync later. Without sync, use the backup option in ⋮ to move progress by hand.
- **When you change files later**, open `sw.js`, raise `const VERSION='v1'` to `'v2'` (and so on), and upload it too. Installed copies then show a "new version is ready → Reload" message.
- `.nojekyll` tells GitHub to serve the files exactly as they are, so keep it.
