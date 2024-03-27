import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(pages)/(home)/page";
import { expect, waitFor, within } from "@storybook/test";
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

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 기본 아이템 갯수가 20개 인지 테스트
    await waitFor(async () => {
      const photoList = canvas.getByRole("list");
      expect(photoList.children.length).toBe(20);
    });
  },
};
