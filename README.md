# Language Drills

An installable web app (PWA) with Russian, German, Chinese (HSK), French and English drills (including two preposition drills: 中文 → 介词 Prepositions — coverb word order, 关于/对于/对, localizers, “for/about”, spot-the-error — and a Russian ↔ German crossover, Русский → Предлоги RU↔DE and Deutsch → Präpositionen DE↔RU, one drill with shared progress practising preposition + case in both languages plus English transfer traps), plus two Mandarin listening courses with audio: Listening 1 (136 parts) and Listening 2 (174 parts), a sentence drill built from them (中文 → 句子: every “Sentences” part of both courses — 25 sets, 283 sentences — to rebuild from word blocks or bigger chunks, or to type in full in characters or toneless pinyin, with the original audio clip for each sentence), the audiobook 神秘的电话 The Mysterious Phone Call (中文 → 电话: 12 chapters with a corrected transcript, pinyin, English, tap-a-word dictionary, word list, gap-fill and comprehension questions: true / false / not mentioned, multiple choice and answers in Chinese), 播客 Podcasts (中文 → 播客: eight low-intermediate and intermediate comprehensible-input podcast episodes of 9–36 minutes — travelling with a best friend, assumptions about China, simplified vs traditional characters, the 996 work culture, leaving your hometown, whether China has slums, and two true-crime stories — each with a corrected transcript split into topic sections, pinyin, English, tap-a-word dictionary, word list, gap-fill and comprehension questions), a German sentence drill built from the German listening transcripts (Deutsch → Sätze: 54 recordings, about 4,400 sentences, each with its own audio clip — rebuild it from word blocks or word groups, or type it in full; rounds of 10/20/whole text, tap a word for its meaning), and a German listening course (Deutsch → Hören: Goethe-Zertifikat B2, 17 recordings, and TestDaF: the digital-format training (12 recordings), three complete model exams (Musterprüfungen 1, 3, 5: listening and speaking) and extracts from the Training TestDaF CDs (Langenscheidt); plus 13 Fragen: six full debates from the unbubble format, 30–50 minutes each – unconditional basic income, capitalism, apprenticeships vs. university, conscription, banning the AfD, legalising drugs – split into topic sections, with the guests listed and about 25 exercises per debate; transcripts, tap-a-word dictionary, word cards, and gap-fill, multiple-choice, true/false/not-mentioned, find-the-errors and open questions). After the first visit it works fully offline.

## Put it on GitHub Pages

1. Create a new **public** repository on GitHub (for example `language-drills`).
2. Click **Add file → Upload files** and upload the contents of this folder in three goes, because GitHub's web uploader takes at most 100 files at a time:
   - all the loose files at the top (`index.html`, `listening-data.json`, `listening2-data.json`, `listening2-lex.json`, `story-data.json`, `story-lex.json`, `dehoer-data.json`, `podcast-data.json`, `podcast-lex.json`, `sw.js`, `manifest.webmanifest`, `README.md`, `.nojekyll`) together with the `icons` folder;
   - the `apps` folder (one page per drill) and the `fonts` folder;
   - the `audio-1` folder;
   - the `audio-2` folder;
   - the `audio-3` folder;
   - the `audio-4` folder;
   - the `audio-5` folder (the audiobook 神秘的电话);
   - the `audio-6` folder (the 播客 podcasts);
   - the `audio-de` folder (German listening, including the 13 Fragen debates `u01`–`u06`).
   Commit after each upload. (With git you can push everything in one go.)
3. Go to **Settings → Pages**, set *Source* to **Deploy from a branch**, and choose `main` and `/ (root)`. Save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Install on your phone

1. Open that address in Chrome on Android while you're online.
2. Leave it open for a moment. The audio (about 275 MB) downloads in the background.
3. Use the menu **⋮ → Add to Home screen / Install app**.

From then on it opens from the home screen and works with no connection.

## Good to know

- **Sync between devices:** open ⋮ → *Sync between devices*, follow the link to create a *fine-grained* GitHub token whose only permission is **Gists: Read and write**, with an expiry date, paste it and tap *Connect GitHub sync*. Do the same on every device with the same token. Progress is kept in a private gist called `language-drills-sync.json` in your GitHub account. It syncs when the app opens, about every 20–30 seconds while you drill, and when you leave the app. Offline changes sync later. Without sync, use the backup option in ⋮ to move progress by hand.
- **Flashcards** (听力 / 听力 2 / 神秘的电话 / 播客 “My words”, 生词卡, Hören “Meine Wörter”, Meine Wörter · Karten): choose how many cards per round (10, 20, 30, 50, all, or type your own number). New or missed cards need “knew it” three times — they come back in the same round — and then return tomorrow, in 3 days, 7, 14, 30, 60 and 120 days.
- **When you change files later**, open `sw.js`, raise `const VERSION='v50'` to `'v51'` (and so on), and upload it too. Installed copies then show a "new version is ready → Reload" message. The app looks for a new version every time it comes back on screen (at most every 2 minutes) and every 30 minutes while open; ⋮ → *Check for updates* checks right away and shows the version the device is running.
- **How it is built:** `index.html` is only the frame (navigation, Today, sync, settings, about 250 KB). Each drill is its own page in `apps/` and is loaded the first time you open it; the fonts are files in `fonts/` that every drill shares. To change a drill, edit its file in `apps/` directly. Drills you have not used for 20 minutes (or beyond the last four) are closed to save memory; they reopen where you were.
- **Where progress is kept:** in the browser's IndexedDB database `language-drills` on each device (much roomier than localStorage, and not shared with your other apps' localStorage). A red notice appears if a save ever fails, for example when the device is full; the app keeps your changes and tries again. Updating from an older version moves existing progress over automatically.
- **Other apps on the same address:** all your GitHub Pages projects share one web address (`<username>.github.io`), so they share the browser's offline storage. This app only touches its own offline files (named `drills-…`). The sync key is stored separately from your progress, is not in backups, and the page only talks to this site and GitHub (a Content-Security-Policy blocks everything else). For full separation, give each app its own address, for example a custom domain per project.
- `.nojekyll` tells GitHub to serve the files exactly as they are, so keep it.

## Export flashcards to Anki

Every flashcard section has a **⬇ Export for Anki (CSV)** button: 听力, 听力 2, 神秘的电话 and 播客 (My words), 生词卡, 看图 (Wörter tab: exports what the filters show), Deutsch Hören (Meine Wörter) and Wortkarten. The file has the columns Front, Back, Tags (HTML: pinyin, meaning, up to two example sentences). In Anki (2.1.55 or newer): File → Import, choose the file; the cards go into the deck named in the file. Choose the note type “Basic (and reversed card)” for both directions.

## Finding your way

- **Today** opens first. It shows your day streak, what is due for review and which mistakes are waiting across all drills, with **Continue** (back to the last drill you practised), **Review** and **Redo** buttons, and every language with its counts. Counts come from drills already opened on that device.
- **Two levels only.** The top row is the language (and Today). The second row is the open drill: tap its name (▾) to switch to another drill of that language, and its sections sit right next to it (Nouns · Adjectives · …, or Practise · Mistakes · Stats …). On a phone both levels share the single bar at the bottom: flag ▴ for the language or Today, the drill name ▾, then the sections.
- **Same header everywhere.** Every drill opens with its name (the same name as in the navigation) and its score in the same style: Correct · Answered · Accuracy · Streak for grammar drills, Due · Mistakes · Practised for the review drills, Due · Words for word cards.

## Keyboard

With a physical keyboard every tab works without the mouse; press **?** in any drill for the full list.
Enter checks then goes on, Esc goes back, Alt+→ skips, H / S hint and show, Space or R replays the audio (Shift+Space the whole section), Alt+↑/↓ changes the speed.
Answers: 1–4 or A–D, R / F / N for true · false · not mentioned; blocks by number or by typing the start of the word (pinyin for Chinese), Backspace takes one back.
Listening: Space play/pause, ← → line by line, Shift+← → 5 seconds, T / E / P transcript · English · pinyin, M my words. Word cards: Space flips, 1 / 2 (or ← →) again / got it.
Alt+0 Today, Alt+1…9 language, Alt+[ ] previous / next drill of the language, [ ] previous / next section of the drill, Ctrl+K jump anywhere.
Typing: tone numbers become tone marks in pinyin boxes (ni3 → nǐ), a: o: u: s: give ä ö ü ß in German, and Alt+L lets Latin keys type Cyrillic in the Russian, Belarusian and Church Slavonic drills.

## Tags and filters for your words (生词卡 and Deutsch → Karten)

The List tab of 生词卡 (words from 听力, 听力 2, 神秘的电话 and 播客) and of Deutsch → Karten (words from Hören) can group and filter your words:

- **Automatic:** lesson or unit (听力 1 units, 听力 2 lessons, exam and part for German), the recording where you marked the word, word type (Chinese: verb, noun, adjective, measure word, time & place, grammar word, connector, chunk, name; German: noun der/die/das, verb, separable, reflexive, verb + preposition, connector, function word, phrase), character family (电话 · 电视) or word family (Arbeit · Arbeitsplatz), topic, and confusion sets (same sound with different tones, like 买 · 卖; or German prefix verbs, like bestehen · verstehen).
- **Your own:** ear or meaning (👂 missed by ear / 📖 new meaning), stage (new → know it in text → catch it by ear → can use it), your own confusion sets and own tags. Set them with 🏷 on a word or under a flipped card. Any automatic tag can be corrected. Getting a word's tones right in 🎧 By ear moves it up to “catch it by ear”.
- **Group by** any category, search, **Only these** to filter, and **▶ Learn** to practise just one group. The filter also applies in Learn until you clear it.
- **Export with categories (CSV):** one Anki deck (中文::生词卡 or Deutsch::Meine Wörter) with a subdeck for every value of the category you choose. All the other categories go along as hierarchical tags (zh::type::Verb, de::thema::…). Tick “only the cards the filter shows” to export one group. The plain export is unchanged.

## Tones (中文 → 声调)

Real word clips cut from Listening 1 and 2 (`tones-data.json`, about 4,750 words and 1,100 tone-change examples): Tone ID (mark each syllable 1–4 or neutral), minimal pairs, odd one out, tone changes (不, 一, 3 + 3) and a chart of which tones you mix up. Tone ID and Pairs give you more of the tones you mix up. 句子 has a "tones must be right" option for typed pinyin, and 生词卡 has a 🎧 By ear mode (hear the word, mark its tones, then flip). Answers from all three feed the same chart.

## Connectors (Связки · Konnektoren · Connecteurs · Connectors · 关联词)

One sub-tab per language with three ways to practise: combine two sentences with the given connector (typed), build the sentence from blocks (two wrong connectors as traps), or pick the connector for the gap. A Learn list explains every connector (meaning, register, level, word order or mood). Filters for level and register.
Russian B1–C1, everyday spoken (72 connectors, 125 pairs); German B1–C2, colloquial to literary (88 connectors, 143 pairs + 111 sentences from Hören with audio); French C1–C2, soutenu and littéraire (59 connectors, 90 pairs); English C1–C2, formal and literary (61 connectors, 101 pairs); Chinese HSK 2–5, everyday (61 connectors, 105 pairs + 318 sentences from 听力 1 + 2 with audio, translation and pinyin). French and English are now groups (grammar + connectors).

