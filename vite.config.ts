import path from "path";

import svgr from "@svgr/rollup";
import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [pluginReact(), svgr({ svgo: false })],
  build: {
    assetsDir: "./",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve("./src"),
      },
    ],
  },
});
