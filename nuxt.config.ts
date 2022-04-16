import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Nuxt 3 Awesome Starter",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt 3 Awesome Starter",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // css
  css: [],

  // plugins
  plugins: [],

  // module
  modules: ["@nuxtjs/tailwindcss"],

  // build modules
  buildModules: [],
});
