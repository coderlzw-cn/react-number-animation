import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: true,
    treeshake: true,
    external: ['react', 'react-dom', 'motion'], // 外部依赖
    target: 'esnext',
    injectStyle: true,
});
