export const initMocksInServer = async () => {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen({ onUnhandledRequest: "bypass" });
    // ref. https://mswjs.io/docs/api/setup-server/listen/#onunhandledrequest
  }
};

export const initMocksInClient = async () => {
  if (typeof window !== "undefined") {
    const { worker } = await import("./browser");
    await worker.start({ onUnhandledRequest: "bypass" });
    // ref. https://mswjs.io/docs/api/setup-worker/start/#onunhandledrequest
  }
};
/*
Ref 1. https://github.com/vercel/next.js/blob/4466ba436b996263307171d344cca199e8087744/examples/with-msw/mocks/index.ts
Ref 2. https://github.com/mswjs/examples/blob/eb017b0976cbab722e5af5e8077261581fe328af/examples/with-next/app/mockProvider.tsx#L19
Ref 3. https://mswjs.io/docs/integrations/browser#conditionally-enable-mocking
*/
