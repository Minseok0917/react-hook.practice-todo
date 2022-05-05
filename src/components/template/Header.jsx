import { Link } from '@/components/element';
import styled from 'styled-components';
import Gnb from './Gnb';


const Header = styled.header`

`;

export default function(){
	console.log("?3123123312?");
	return (
		<Header>
			<div className="container">
				<h1>LOGO131</h1>
				<Gnb />
			</div>
		</Header>
	);
}