/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        newprimary: "#376489",
        newprimarySmoth: "#92B2D1",
        newsecondary: "#F1E1E4", // Tambahkan warna lain sesuai kebutuhan
        newsecondarySmoth: "#B29292", // Tambahkan warna lain sesuai kebutuhan
        textGreyColor: "#738CA5",
        textPrimary: "#C1989F",
        themeBg: "#FAF5F0",

        //Sabrina Theme
        bblue: "#274C69",
        brown: "#B29292", // Corrected color declaration (removed extra colon)
        blue: "#92B2D1", // Corrected spacing
        "dark-blue": "#376489",
        gradb: "rgba(115, 140, 165, 0.52)", // Add custom color
        whitee: "#FAF5F0",
        beige: "#F5F5DC",
        rose: "#C1989F",
        "dark-rose": "#C1989F",

        frose: "#F1E1E4",
        fblue: "#738CA5",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        mognolia: ["Magnolia Script", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        sfpro: ["SF Pro Display", "sans-serif"],
        sorcesanspro: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
