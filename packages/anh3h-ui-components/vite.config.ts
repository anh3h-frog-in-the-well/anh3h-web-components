import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'anh3h-ui',
      fileName: (format) => `anh3h-ui.${format}.js`,
      formats: ['es']
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.json'
    })
  ]
})
