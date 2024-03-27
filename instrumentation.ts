export async function register() {
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
  ) {
    const { initMocksInServer } = await import("./app/(mocks)/server");
    await initMocksInServer();
  }
}
// Ref 1. https://github.com/mswjs/msw/issues/1644#issuecomment-1904583080
// Ref 2. https://github.com/mswjs/examples/blob/eb017b0976cbab722e5af5e8077261581fe328af/examples/with-next/instrumentation.ts
// Ref 3. https://github.com/vercel/next.js/blob/4466ba436b996263307171d344cca199e8087744/examples/with-msw/pages/_app.tsx#L3-L5
// Ref 4. https://handongryong.com/post/msw/#%EC%9D%B4%EB%A0%87%EA%B2%8C-%EC%89%BD%EA%B2%8C-%EC%A0%81%EC%9A%A9%EC%9D%B4-%EB%90%98%EB%82%98%EC%9A%94
