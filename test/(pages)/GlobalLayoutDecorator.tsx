import type { PartialStoryFn } from "@storybook/csf";
import type { ReactRenderer } from "@storybook/react";

import { GlobalLayout } from "@/app/(components)/(GlobalLayout)/GlobalLayout";

export const GlobalLayoutDecorator = (
  story: PartialStoryFn<ReactRenderer, {}>
) => <GlobalLayout>{story()}</GlobalLayout>;
