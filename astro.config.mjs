import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site:"https://technova24x7.github.io/universaladv",
  base:'/',
  vite: {
    plugins: [tailwindcss()],
  },
});
