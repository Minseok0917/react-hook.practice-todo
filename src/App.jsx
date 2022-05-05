import { createGlobalStyle } from "styled-components";
import {
	Header,
	Footer
} from '@com/template';
import Router from '@/router';

const GlobalStyle = createGlobalStyle``;

// <GlobalStyle />

export default function(){
	return (
		<div className="app">			
			<Header />
			<Router />
			<Footer />
		</div>
	);
}