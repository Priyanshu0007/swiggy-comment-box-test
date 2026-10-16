# test.react

A modern React application built with **Vite**, **TypeScript**, **React 19**, **React Compiler**, **Tailwind CSS v4**, **Axios**, and **Remix Icons**.

---

## ⚡ Tech Stack

- **[Vite](https://vite.dev/)** – Lightning fast build tool and dev server
- **[React 19](https://react.dev/)** – The latest React release
- **[React Compiler](https://react.dev/learn/react-compiler)** – Automatic memoization via `babel-plugin-react-compiler`
- **[TypeScript](https://www.typescriptlang.org/)** – Strict static typing
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first CSS framework with `@tailwindcss/vite`
- **[Axios](https://axios-http.com/)** – Promise-based HTTP client for data fetching
- **[Remix Icon](https://remixicon.com/)** – Open-source neutral icon system (2,800+ icons)

---

## 🚀 Getting Started

### 1. Navigate to the project directory:

```bash
cd ~/Desktop/test.react
```

### 2. Start the development server:

```bash
npm run dev
```

### 3. Build for production:

```bash
npm run build
```

### 4. Preview the production build:

```bash
npm run preview
```

### 5. Run the linter:

```bash
npm run lint
```

---

## 📁 Project Structure

```
test.react/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and local logos
│   ├── App.tsx             # Main showcase component
│   ├── index.css           # Tailwind CSS imports & base styles
│   └── main.tsx            # React root & Remix Icon styles import
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration with React Compiler & Tailwind
```

---

## 💡 How Features Are Integrated

- **React Compiler**: Configured in `vite.config.ts` using `@vitejs/plugin-react` and `@rolldown/plugin-babel` with `reactCompilerPreset()`.
- **Tailwind CSS v4**: Imported in `vite.config.ts` via `@tailwindcss/vite` and activated in `src/index.css` via `@import "tailwindcss";`.
- **Remix Icon**: Installed as `remixicon` and imported in `src/main.tsx` via `import 'remixicon/fonts/remixicon.css'`. Use icon classes such as `<i className="ri-heart-line"></i>`.
- **Axios**: Installed as `axios` and ready to make API requests with `axios.get()`, `axios.post()`, etc.
