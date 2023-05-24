/*
 * @Author: zhouyang
 * @Date: 2023-05-15 10:31:29
 * @LastEditors: zhouyang
 * @LastEditTime: 2023-05-15 15:17:03
 * @FilePath: \electron-github-update\vue-app\vite.config.ts
 * @Desc: 描述
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: '../electron-app',
    emptyOutDir: false,
  },
  plugins: [vue()],
})
