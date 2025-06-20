import type { Preview } from "@storybook/react-webpack5";
import { themes } from "@storybook/theming";
import { Decorator } from "@storybook/react";
import "../src/index.css";

// 🔁 Toolbar for theme switching
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

// 🎨 Automatically change background based on selected theme
const withThemeBackground: Decorator = (Story, context) => {
  const theme = context.globals.theme;

  const background = theme === "dark" ? "#1a1a1a" : "#ffffff";

  return (
    <div style={{ background, padding: "2rem" }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withThemeBackground],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
  },
};

export default preview;
