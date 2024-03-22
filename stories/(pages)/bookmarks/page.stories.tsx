import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(pages)/bookmarks/page";
import { GlobalLayoutDecorator } from "../GlobalLayoutDecorator";

import { fireEvent, waitFor, within } from "@storybook/test";

const meta = {
  title: "pages/bookmarks",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [GlobalLayoutDecorator],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Todo: Write a real test codes
    await waitFor(async () => {
      await fireEvent.click(
        canvas.getAllByText("Bookmarks", { selector: "button" })[0]
      );
    });
  },
};
