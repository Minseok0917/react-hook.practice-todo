import styled from 'styled-components';
import { Link } from '@com/element';

const Gnb = styled.nav`
	display:flex;
	gap:1rem;
	color:#fff;
	font-size:1rem;
	font-weight:bold;
`;


export default function(){
	return (
		<Gnb>
			<Link path="/">Home</Link>
			<Link path="/trello">Trello</Link>
		</Gnb>
	);
}