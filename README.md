# relative

A simple web-based relative pitch trainer that helps you practice identifying musical notes by ear.

Listen to a randomly selected note played by a randomly selected instrument, then identify the pitch using the on-screen piano keyboard.

## Features

- Random note selection
- Random instrument selection
- Audio playback directly in the browser
- 12 pitch classes using flat notation
- Interactive piano keyboard
- Immediate correct/wrong feedback
- Score tracking
- Accuracy percentage
- Replay the current note
- Responsive layout for desktop and mobile

## Tech Stack

- React
- TypeScript
- Vite
- HTML5 Audio API
- CSS

## Getting Started
You can [play it now](https://relative-gray.vercel.app/) in your browser, or run it locally

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/blertjakupi/relative.git
cd relative
```

Install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

### Production Build

Create a production build:

```bash
npm run build
```

The production files will be generated in the `dist` directory.

## How It Works

1. Start the game.
2. A random recording is selected.
3. The note is played through the browser.
4. Once playback finishes, select the pitch you believe you heard.
5. The game tells you whether your answer was correct.
6. Your score and accuracy are updated.
7. Continue with the next note.

The current version uses pitch classes rather than specific octaves. For example, a C played in a different octave is still treated as C.

## Project Structure

```text
src/
├── components/
│   ├── AudioPlayer.tsx
│   ├── Game.tsx
│   └── PianoKeyboard.tsx
├── data/
│   └── recordings.ts
├── game/
│   └── pitchClasses.ts
├── hooks/
│   └── useAudioPlayer.ts
├── App.tsx
└── main.tsx

public/
└── audio/
    └── ...
```

## Audio Credits

The audio recordings used by this project come from the [MIDI.js Soundfonts project](https://github.com/gleitz/midi-js-soundfonts).

Many thanks to the contributors and maintainers of MIDI.js Soundfonts for making these audio resources available.

Please refer to the original repository for the applicable licensing information and full attribution details.

## License

The source code of this project is provided under the license included in this repository.

The audio assets are not original recordings created for this project. They are sourced from the MIDI.js Soundfonts project and remain subject to their respective licensing terms.

For more information, see:

https://github.com/gleitz/midi-js-soundfonts

## Status

This project is currently under active development.

The current goal is to build a simple, fast, and accessible relative pitch trainer.

## Planned Features

- Difficulty levels
- Instrument selection
- Octave-specific exercises
- Sharps/flats notation toggle
- Statistics and performance history
- User accounts and progress synchronization
- Leaderboards
- Custom audio uploads
- More advanced ear-training exercises

---

Built with React + TypeScript.