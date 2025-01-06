import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        banner: "url('https://www.google.com/imgres?q=perfume%20blog&imgurl=https%3A%2F%2Flafrenchperfumes.com%2Fcdn%2Fshop%2Farticles%2FIllusion-Aligners-Blog1200-x-600-53_1024x1024.png%3Fv%3D1689318162&imgrefurl=https%3A%2F%2Flafrenchperfumes.com%2Fblogs%2Four-blogs%2Ftop-5-la-french-long-lasting-summer-perfumes-for-men-women-in-2023&docid=bYR0_7auyDtm7M&tbnid=ViBhDiiENVsr8M&vet=12ahUKEwjb-8rT0-GKAxVcgv0HHcI0Dt84ChAzegQIHRAA..i&w=1024&h=512&hcb=2&ved=2ahUKEwjb-8rT0-GKAxVcgv0HHcI0Dt84ChAzegQIHRAA')"

      },
    },
  },
  plugins: [],
};
export default config;
