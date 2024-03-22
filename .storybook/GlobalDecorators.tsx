import React from "react";
import { Providers } from "../app/(providers)";
import { resetAllStores } from "../app/(states)/(client)/(_zustand)/zustandWithResetFns";
import { inter } from "../app/fonts";

const StoreResetDecorator = (Story: React.ComponentType) => {
  resetAllStores();
  return <Story />;
};

const GlobalWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`global-storybook-wrapper ${inter.className}`}>
      <Providers>{children}</Providers>
    </div>
  );
};

const WrapDecorator = (Story: React.ComponentType) => {
  return (
    <GlobalWrapper>
      <Story />
    </GlobalWrapper>
  );
};

export const GlobalDecorators = [WrapDecorator, StoreResetDecorator];
