// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html', // 确保包含根 HTML 文件
        './src/**/*.{js,ts,jsx,tsx}', // 包括所有 src 文件夹中的 JS/TS/JSX/TSX 文件
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};