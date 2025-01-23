import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      scss: {
        // https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
});
