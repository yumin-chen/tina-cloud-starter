module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/home",
        },
        {
          source: "/admin",
          destination: "/admin/index.html",
        },
      ],
      afterFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "header",
              key: "sec-fetch-dest",
              value: "document",
            },
            {
              type: "cookie",
              key: "tina_auth",
              value: "true",
            },
          ],
          destination: "http://localhost:3000/admin#/~/:path*",
        },
      ],
    };
  },
};
