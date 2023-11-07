import { defineConfig, loadEnv } from "vite";
import pluginReact from "@vitejs/plugin-react";

export default (args: { mode: string }) => {
  process.env = loadEnv(args.mode, process.cwd(), "");

  return defineConfig({
    plugins: [pluginReact()],
    define: {
      "process.env": process.env,
    },
    build: {
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
  });
};
