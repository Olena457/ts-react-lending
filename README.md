# 🪐 React + TypeScript + Vite

# _`Interspace`_ — Design Agency Landing Page

`Interspace` is a modern and responsive landing page template for creative design agencies. Built with a clean structure and smooth animations, it offers an elegant user experience across all devices.

## ✨ Features

- _Structured layout: Header, Main, Footer_
- _Responsive design with mobile-friendly navigation_
- _Stylish sections: About, Features, Awards, Team, Projects, Contacts_
- _Smooth scroll animations powered by AOS_
- _Minimalist UI with clean typography and color palette_

---

## 🖼️ Gallery Preview

<div style="display: flex; flex-wrap: wrap; gap: 15px;">
  <img src="./src/assets/img/projects/big.jpg" width="30%" height="130px" alt="apartment"/>
  <img src="./src/assets/img/projects/apartment.jpg" width="30%" height="130px" alt="bedroom"/>
  <img src="./src/assets/img/projects/kitchen.jpg" width="30%" height="130px" alt="kitchen"/>
  <img src="./src/assets/img/projects/bedroom-1.jpg" width="30%" height="130px" alt="kitchen"/>
</div>

---

## 🧭 Lending Structure

| Section | Description                          |
| ------- | ------------------------------------ |
| Header  | Navigation menu with active styling  |
| Main    | Agency intro, features, team, awards |
| Footer  | Contact info and social links        |

---

## 🛠️ Technologies Used

This landing page is built using a modern frontend stack:

- **React + Vite** — fast and modular setup
- **TypeScript** — type-safe and scalable code
- **SASS** — for modular and maintainable styles
- **AOS** — for scroll-triggered animations
- **clsx** — for conditional class handling

---

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
