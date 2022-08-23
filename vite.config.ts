import { defineConfig } from "vite";
import path from 'path';
import fs from 'fs-extra';

import uni from "@dcloudio/vite-plugin-uni";

function copyFile(): any {
  const PLATFORM = process.env.UNI_PLATFORM as string
  if (PLATFORM !== 'mp-weixin') return {}
  return {
    name: 'copy-cloudfunctions',
    enforce: 'post',
    async writeBundle() {
      await fs.copy(
        path.resolve(__dirname, './cloudfunctions'),
        path.join(
          __dirname,
          './dist',
          process.env.NODE_ENV === 'production' ? 'build' : 'dev',
          PLATFORM,
          'cloudfunctions'
        )
      );
    },
  };
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), copyFile()],
});
