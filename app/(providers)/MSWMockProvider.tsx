"use client";

import { useEffect, useState } from "react";

export function MSWMockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function enableApiMocking() {
      /**
       * @fixme Next puts this import to the top of
       * this module and runs it during the build
       * in Node.js. This makes "msw/browser" import to fail.
       */
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        const { initMocksInClient } = await import("../(mocks)");
        await initMocksInClient();
      } // ref. https://github.com/vercel/next.js/blob/4466ba436b996263307171d344cca199e8087744/examples/with-msw/pages/_app.tsx#L3-L5
      setIsReady(true);
    }

    enableApiMocking();
  }, []);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
} // Ref. https://github.com/mswjs/examples/blob/eb017b0976cbab722e5af5e8077261581fe328af/examples/with-next/app/mockProvider.tsx
