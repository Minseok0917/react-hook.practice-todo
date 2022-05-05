import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const getPath = (addPath="") => path.join(__dirname,'src',addPath);


export default defineConfig({
	plugins: [react()],
	resolve:{
		alias:{
			'@': getPath(),
			'@com': getPath('components'),
			'@con': getPath('contexts'),
			'@css': getPath('assets/postcss')
		}
	}
})
