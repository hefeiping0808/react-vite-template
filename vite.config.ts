import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'), // 将 @ 映射到 src
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'], // 确保支持 .tsx 文件
	},
});