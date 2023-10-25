import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./globals.css",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#AD1FEA",
        blue: "#4661E6",
        lightBlue: "#62BCFA",
        darkBlue: "#373F68",
        offDarkBlue: "#3A4374",
        grayBlue: "#647196",
        gray: "#F2F4FF",
        lightGray: "#F7F8FD",
        orange: "#F49F85",
        purpleHover: "#C75AF6",
        blueHover: "#7C91F9",
        darkBlueHover: "#656EA3",
        orangeHover: "#E98888",
      },
    },
  },
  plugins: [],
};
export default config;
