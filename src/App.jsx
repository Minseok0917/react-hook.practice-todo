import { createGlobalStyle } from "styled-components";
import { Header } from '@com/template';
import Router from '@/router';

const GlobalStyle = createGlobalStyle``;

export default function(){
	return (
		<div className="app">			
			<Header />
			<Router />
		</div>
	);
}