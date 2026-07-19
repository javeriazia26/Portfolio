import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// `base` must match the repo name because GitHub Pages serves this project
// from https://javeriazia26.github.io/Portfolio/ (a subpath, not the domain root).
// If you ever move to a custom domain or a user/org page (javeriazia26.github.io),
// change base back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
