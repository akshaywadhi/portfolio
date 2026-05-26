import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          typewriter: ["typewriter-effect"],
          forms: ["react-hook-form", "@web3forms/react"],
        },
      },
    },
    cssMinify: true,
    sourcemap: false,
  },
});
