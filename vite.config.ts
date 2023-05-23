import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'gender.js',
            fileName: 'index',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        }
    }
})