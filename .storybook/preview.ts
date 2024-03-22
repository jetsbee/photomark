import type { Preview } from "@storybook/react";
import { GlobalDecorators } from "./GlobalDecorators";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [...GlobalDecorators],
};

export default preview;
