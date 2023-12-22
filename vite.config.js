import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
    },
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul',
      reporter: ['clover', 'html'],
      reportsDirectory: 'target/clover',
    },
    reporters: ['junit', 'default'],
    outputFile: './target/surefire-reports/junit.xml',
  },
  plugins: [
    dts({
      include: './src',
      outDir: './dist/types',
    }),
    viteStaticCopy({
      targets: [{ src: 'package.json', dest: './' }],
    }),
  ],
});
