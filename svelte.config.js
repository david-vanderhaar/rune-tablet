import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '200.html'
    }),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/rune-tablet" : "",
    },
  },
};

export default config;
