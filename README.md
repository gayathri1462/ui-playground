# UI Playground

A modern component playground built with **React**, **Storybook**, and **Tailwind CSS**.  
Designed to prototype, document, and test UI components in isolation with live preview, visual regression testing, and design tokens.

## ✨ Features

- ⚛️ React component library (TypeScript)
- 🎨 Styled with Tailwind CSS
- 📚 Documented using Storybook
- 🧪 Interactive stories with Storybook Testing Library
- 🧩 Design token support + custom docs blocks
- 🌓 Light & dark background toggling
- 🔍 Supports play functions for testing
- 💡 Shimmer loading effect demo

## 📦 Tech Stack

- React (TypeScript)
- Storybook 9 (with Webpack 5)
- Tailwind CSS
- `@storybook/testing-library` for story interactions
- `@storybook/addon-themes` and `@storybook/addon-docs` for customization

## 🧪 Run Locally

```bash
# Install dependencies (recommended with legacy peer deps to avoid Storybook 9 conflicts)
npm install --legacy-peer-deps

# Run Storybook
npm run storybook
