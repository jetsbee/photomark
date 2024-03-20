/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ], // ref. https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
  },
  experimental: {
    instrumentationHook: true,
  },
  webpack(config, { isServer }) {
    /**
     * @fixme This is completely redundant. webpack should understand
     * export conditions and don't try to import "msw/browser" code
     * that's clearly marked as client-side only in the app.
     */
    if (isServer) {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: "msw/browser", alias: false });
      } else {
        config.resolve.alias["msw/browser"] = false;
      }
    } else {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: "msw/node", alias: false });
      } else {
        config.resolve.alias["msw/node"] = false;
      }
    }

    return config;
  } /*
  Ref 1. https://github.com/mswjs/msw/issues/1644#issuecomment-1904583080 
  Ref 2. https://github.com/mswjs/examples/blob/eb017b0976cbab722e5af5e8077261581fe328af/examples/with-next/next.config.mjs
  */,
};

export default nextConfig;
