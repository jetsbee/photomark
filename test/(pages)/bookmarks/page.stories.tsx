import type { PartialStoryFn } from "@storybook/csf";
import type { Meta, ReactRenderer, StoryObj } from "@storybook/react";

import Page from "@/app/(pages)/bookmarks/page";
import { GlobalLayoutDecorator } from "../GlobalLayoutDecorator";

import { BookmarkStoreProvider } from "@/app/(states)/(client)/(bookmark)/ContextProvider";
import { expect, waitFor, within } from "@storybook/test";

const MockStateForBookmark = {
  bookmark: {
    hMmqVfjtTAY: {
      url: "https://plus.unsplash.com/premium_photo-1706552627475-2617a0495e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Nzk0Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NDczNTh8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    "iWRcuzhW-Ds": {
      url: "https://images.unsplash.com/photo-1706720093238-2324a804d12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Nzk0Mjh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NDczNTh8&ixlib=rb-4.0.3&q=80&w=1080",
    },
  },
};

const storeProvidersDecorator = (story: PartialStoryFn<ReactRenderer, {}>) => (
  <BookmarkStoreProvider {...MockStateForBookmark}>
    {story()}
  </BookmarkStoreProvider>
);

const meta = {
  title: "pages/bookmarks",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [GlobalLayoutDecorator, storeProvidersDecorator],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 북마크 아이템 갯수가 2개 인지 테스트 (목킹한 상태 데이터 갯수와 같은지 확인)
    await waitFor(async () => {
      const photoList = canvas.getByRole("list");
      expect(photoList.children.length).toBe(2);
    });
  },
};
