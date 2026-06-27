# 🎵 Sounds Sphere

> **Your Library. Your Orbit.**
> A next-generation, high-aesthetic music player built with HTML, CSS, JavaScript, and Three.js.

Sounds Sphere is a premium web-based audio player designed with modern, dark-void glassmorphic aesthetics. It represents a clean, fluid interface centered around an interactive 3D orbit visualization that animates dynamically according to the user's cursor.

---

## ✨ Features

- **3D Interactive Orbit Visualizer**: An ambient, interactive sphere rendered in real-time using `Three.js` that reacts to mouse coordinates.
- **Dynamic Dual-Theme Engine**: Seamless transitions between a high-contrast *Deep Void* dark mode and a warm *Paper* light mode.
- **Apple-Style Transport System**: Solid, flat controls featuring play/pause, track skipping, favorite toggles, repeat cycles, smart shuffle, and precise volume sliders.
- **Offline-First Playback**: Custom paths optimized for local file access alongside remote streaming dependencies.
- **Secure Owner Console**: A dedicated management interface (`admin.html`) containing track meta editing options and cover art upload panels.
- **Modern Typography**: Styled using premium Google Fonts (`Unbounded`, `Manrope`, and `Space Mono`).

---

## 🛠️ Tech Stack

- **Frontend**: Semantic HTML5, Vanilla CSS3 (Custom Design Tokens, Variables, CSS Grid, 3D Transforms, Ambient Keyframes).
- **Core Logic**: Vanilla Javascript (ES6+, DOM Manipulation, Web Audio API, LocalSession State).
- **3D Graphics**: `Three.js` (WebGL Renderer, Standard/Basic Materials, Point & Ambient Lights, Mesh groups).

---

## 🚀 Getting Started / Local Deployment

To run and view the project locally on your machine:

1. Clone or download the repository.
2. Serve the directory using any static file server:
   ```bash
   npx serve
   ```
   *Or open it using VS Code's "Live Server" extension.*
3. Open `http://localhost:3000` (or the port provided by your server).

---

## 📁 File Structure

- [`index.html`](./index.html): The interactive 3D landing page.
- [`player.html`](./player.html): The primary library and audio playback interface.
- [`admin.html`](./admin.html): The owner administration panel.
- [`auth.html`](./auth.html): The glassmorphic authentication system (pre-configured for Firebase Integration).
- [`SONGS/`](./SONGS/): Folder containing default tracks and cover assets.
