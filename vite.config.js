import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/wp-json": {
//         target: "http://stephare-react.local",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });


export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '../platform/',
    emptyOutDir: true, 
  },
  server: {
    proxy: {
      '/wp-json': {
        target: 'http://stephare-react.local',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
