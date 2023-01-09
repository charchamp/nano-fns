import { defineConfig } from 'tsup'

export default defineConfig({
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: {
    resolve: true
  },
  format: ['cjs', 'esm'],
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entry: ['./src'],
  target: 'es2020'
})
