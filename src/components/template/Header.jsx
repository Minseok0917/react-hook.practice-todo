import styled from 'styled-components';
import Gnb from './Gnb';
import { Link } from '@com/element';
import { Container  as _Container } from '@com/styled';


const Header = styled.header`
	background:#364F6B;
	padding:1rem 0;
`;
const Container = styled(_Container)`
	display:flex;
	justify-content:space-between;
	align-items:center;
`;
const Logo = styled.h1`
	margin:0;
	color:#fff;
	font-size:1.75rem;
`;

export default function(){
	return (
		<Header>
			<Container>
				<Logo>
					<Link path="/" >TRELLO</Link>
				</Logo>
				<Gnb />
			</Container>
		</Header>
	);
}