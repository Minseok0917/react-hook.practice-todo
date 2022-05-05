import styled from 'styled-components';
import { Link } from '@com/element';

const Gnb = styled.nav`

`;


export default function(){
	return (
		<Gnb>
			<Link path="/" name="Home" />
			<Link path="/trello" name="Trello" />
		</Gnb>
	);
}