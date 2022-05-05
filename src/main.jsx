import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import '@css/common.postcss';
import '@/plugins/icon';
import App from './App';



console.log(App);

const $root = document.getElementById('root');
createRoot($root).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
