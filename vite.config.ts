import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Markdown from "vite-plugin-md";
// https://vitejs.dev/config/

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
// 设置别名
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@doc": pathResolve("doc"),
};
export default defineConfig({
  alias,
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    Markdown(),
  ],
});
