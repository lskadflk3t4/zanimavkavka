# Language Drills

An installable web app (PWA) with Russian, German, Chinese (HSK), French and English drills (including two preposition drills: 中文 → 介词 Prepositions — coverb word order, 关于/对于/对, localizers, “for/about”, spot-the-error — and a Russian ↔ German crossover, Русский → Предлоги RU↔DE and Deutsch → Präpositionen DE↔RU, one drill with shared progress practising preposition + case in both languages plus English transfer traps), plus two Mandarin listening courses with audio: Listening 1 (136 parts) and Listening 2 (174 parts), a sentence drill built from them (中文 → 句子: every “Sentences” part of both courses — 25 sets, 283 sentences — to rebuild from word blocks or bigger chunks, or to type in full in characters or toneless pinyin, with the original audio clip for each sentence), the audiobook 神秘的电话 The Mysterious Phone Call (中文 → 电话: 12 chapters with a corrected transcript, pinyin, English, tap-a-word dictionary, word list, gap-fill and comprehension questions: true / false / not mentioned, multiple choice and answers in Chinese), a German sentence drill built from the German listening transcripts (Deutsch → Sätze: 48 recordings, about 1,500 sentences, each with its own audio clip — rebuild it from word blocks or word groups, or type it in full; rounds of 10/20/whole text, tap a word for its meaning), and a German listening course (Deutsch → Hören: Goethe-Zertifikat B2, 17 recordings, and TestDaF: the digital-format training (12 recordings), three complete model exams (Musterprüfungen 1, 3, 5: listening and speaking) and extracts from the Training TestDaF CDs (Langenscheidt); transcripts, tap-a-word dictionary, word cards, and gap-fill, multiple-choice, true/false/not-mentioned, find-the-errors and open questions). After the first visit it works fully offline.

## Put it on GitHub Pages

1. Create a new **public** repository on GitHub (for example `language-drills`).
2. Click **Add file → Upload files** and upload the contents of this folder in three goes, because GitHub's web uploader takes at most 100 files at a time:
   - all the loose files at the top (`index.html`, `listening-data.json`, `listening2-data.json`, `listening2-lex.json`, `story-data.json`, `story-lex.json`, `dehoer-data.json`, `sw.js`, `manifest.webmanifest`, `README.md`, `.nojekyll`) together with the `icons` folder;
   - the `audio-1` folder;
   - the `audio-2` folder;
   - the `audio-3` folder;
   - the `audio-4` folder;
   - the `audio-5` folder (the audiobook 神秘的电话);
   - the `audio-de` folder (German listening).
   Commit after each upload. (With git you can push everything in one go.)
3. Go to **Settings → Pages**, set *Source* to **Deploy from a branch**, and choose `main` and `/ (root)`. Save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Install on your phone

1. Open that address in Chrome on Android while you're online.
2. Leave it open for a moment. The audio (about 200 MB) downloads in the background.
3. Use the menu **⋮ → Add to Home screen / Install app**.

From then on it opens from the home screen and works with no connection.

## Good to know

- **Sync between devices:** open ⋮ → *Sync between devices*, follow the link to create a GitHub token with only "gist" ticked, paste it and tap *Connect GitHub sync*. Do the same on every device with the same token. Progress is kept in a private gist called `language-drills-sync.json` in your GitHub account. It syncs when the app opens, about every 20–30 seconds while you drill, and when you leave the app. Offline changes sync later. Without sync, use the backup option in ⋮ to move progress by hand.
- **Flashcards** (听力 / 听力 2 / 神秘的电话 “My words”, 生词卡, Hören “Meine Wörter”, Meine Wörter · Karten): choose how many cards per round (10, 20, 30, 50, all, or type your own number). New or missed cards need “knew it” three times — they come back in the same round — and then return tomorrow, in 3 days, 7, 14, 30, 60 and 120 days.
- **When you change files later**, open `sw.js`, raise `const VERSION='v1'` to `'v2'` (and so on), and upload it too. Installed copies then show a "new version is ready → Reload" message.
- `.nojekyll` tells GitHub to serve the files exactly as they are, so keep it.

## Export flashcards to Anki

Every flashcard section has a **⬇ Export for Anki (CSV)** button: 听力, 听力 2 and 神秘的电话 (My words), 生词卡, 看图 (Wörter tab: exports what the filters show), Deutsch Hören (Meine Wörter) and Wortkarten. The file has the columns Front, Back, Tags (HTML: pinyin, meaning, up to two example sentences). In Anki (2.1.55 or newer): File → Import, choose the file; the cards go into the deck named in the file. Choose the note type “Basic (and reversed card)” for both directions.

## Keyboard

With a physical keyboard every tab works without the mouse; press **?** in any drill for the full list.
Enter checks then goes on, Esc goes back, Alt+→ skips, H / S hint and show, Space or R replays the audio (Shift+Space the whole section), Alt+↑/↓ changes the speed.
Answers: 1–4 or A–D, R / F / N for true · false · not mentioned; blocks by number or by typing the start of the word (pinyin for Chinese), Backspace takes one back.
Listening: Space play/pause, ← → line by line, Shift+← → 5 seconds, T / E / P transcript · English · pinyin, M my words. Word cards: Space flips, 1 / 2 (or ← →) again / got it.
Alt+1…9 language, Alt+[ ] sub-tab, [ ] tab inside a drill, Ctrl+K jump anywhere.
Typing: tone numbers become tone marks in pinyin boxes (ni3 → nǐ), a: o: u: s: give ä ö ü ß in German, and Alt+L lets Latin keys type Cyrillic in the Russian, Belarusian and Church Slavonic drills.

## Tones (中文 → 声调)

Real word clips cut from Listening 1 and 2 (`tones-data.json`, about 4,750 words and 1,100 tone-change examples): Tone ID (mark each syllable 1–4 or neutral), minimal pairs, odd one out, tone changes (不, 一, 3 + 3) and a chart of which tones you mix up. Tone ID and Pairs give you more of the tones you mix up. 句子 has a "tones must be right" option for typed pinyin, and 生词卡 has a 🎧 By ear mode (hear the word, mark its tones, then flip). Answers from all three feed the same chart.

## Connectors (Связки · Konnektoren · Connecteurs · Connectors · 关联词)

One sub-tab per language with three ways to practise: combine two sentences with the given connector (typed), build the sentence from blocks (two wrong connectors as traps), or pick the connector for the gap. A Learn list explains every connector (meaning, register, level, word order or mood). Filters for level and register.
Russian B1–C1, everyday spoken (72 connectors, 125 pairs); German B1–C2, colloquial to literary (88 connectors, 143 pairs + 111 sentences from Hören with audio); French C1–C2, soutenu and littéraire (59 connectors, 90 pairs); English C1–C2, formal and literary (61 connectors, 101 pairs); Chinese HSK 2–5, everyday (61 connectors, 105 pairs + 318 sentences from 听力 1 + 2 with audio, translation and pinyin). French and English are now groups (grammar + connectors).

