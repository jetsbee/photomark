import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(pages)/(home)/page";
import { GlobalLayoutDecorator } from "../GlobalLayoutDecorator";

const meta = {
  title: "pages/home",
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

export const Default: Story = {};
