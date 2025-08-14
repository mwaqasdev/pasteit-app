# PasteIt

PasteIt is a modern web application for creating, sharing, and managing text snippets ("pastes"). Built with React, Vite, Tailwind CSS, Redux Toolkit, and React Router, it offers a fast, responsive, and user-friendly experience.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Project Setup](#project-setup)
  - [Tailwind CSS Integration](#tailwind-css-integration)
  - [Redux Toolkit Setup](#redux-toolkit-setup)
  - [React Router Setup](#react-router-setup)
- [Usage](#usage)
- [Development](#development)
- [License](#license)
- [Links](#links)

---

## Features

- **Create, Edit, Delete Pastes:** Easily manage your text snippets.
- **Shareable Links:** Generate unique links for each paste.
- **Copy to Clipboard:** Quickly copy paste content from any page.
- **Date Formatting:** Human-readable date display (e.g., January 1, 2025).
- **Responsive UI:** Styled with Tailwind CSS for mobile and desktop.
- **State Management:** Powered by Redux Toolkit.
- **Routing:** Seamless navigation with React Router.

---

## Tech Stack

- **Frontend:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing:** [React Router DOM](https://reactrouter.com/)

---

## Getting Started

### Project Setup

1. **Create a React project using Vite:**
   ```bash
   npm create vite@latest
   ```

2. **Install dependencies:**
   ```bash
   npm install tailwindcss @tailwindcss/vite @reduxjs/toolkit react-redux react-router-dom
   ```

---

### Tailwind CSS Integration

1. **Configure the Vite plugin:**

   Edit `vite.config.js`:
   ```js
   import { defineConfig } from 'vite'
   import tailwindcss from '@tailwindcss/vite'
   export default defineConfig({
     plugins: [tailwindcss()],
   })
   ```

2. **Import Tailwind CSS in your main CSS file:**

   In `src/App.css` or `src/index.css`:
   ```css
   @import "tailwindcss";
   ```

---

### Redux Toolkit Setup

1. **Create the Redux store:**

   In `src/app/store.js`:
   ```js
   import { configureStore } from '@reduxjs/toolkit'
   export const store = configureStore({
     reducer: {},
   })
   ```

2. **Provide the store to React:**

   In `src/index.js`:
   ```jsx
   import { store } from './store.js'
   import { Provider } from 'react-redux'

   <StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
   </StrictMode>
   ```

3. **Create a Redux slice:**

   In `src/redux/pasteSlice.js`:
   ```js
   import { createSlice } from '@reduxjs/toolkit'
   // ...slice definition...
   ```

4. **Add the slice reducer to the store:**

   ```js
   import pasteReducer from './redux/pasteSlice'
   // ...add to store reducer...
   ```

---

### React Router Setup

1. **Install React Router DOM:**
   ```bash
   npm i react-router-dom
   ```

2. **Configure routes in your app:**
   ```jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom'
   // ...existing code...
   ```

---

## Usage

- **Create a Paste:** Use the home page form to add a new paste.
- **Edit/Delete:** Manage your pastes from the list or detail view.
- **Copy to Clipboard:** Click the copy button to copy paste content.
- **Share:** Use the share button to get a link for your paste.
- **Date Formatting:** All dates are displayed in a readable format.

### Example Tailwind Component

```jsx
// ...existing code...
<div className="min-h-screen bg-blue-800 flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4">Hello, Tailwind CSS!</h1>
    <p className="text-gray-700">
      This is a simple example of using Tailwind CSS in a React project.
    </p>
  </div>
</div>
// ...existing code...
```

---

## Development

- **Start the development server:**
  ```bash
  npm run dev
  ```

- **Build for production:**
  ```bash
  npm run build
  ```

---

## License

MIT

---

## Links

- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)