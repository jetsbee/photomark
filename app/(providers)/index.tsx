import { MSWMockProvider } from "./MSWMockProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MSWMockProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </MSWMockProvider>
  );
};
