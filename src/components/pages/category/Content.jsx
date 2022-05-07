import { useContext, useCallback } from 'react';
import { categoryContext } from '@con/category';
import styled from 'styled-components';
import { Link, Icon } from '@com/element';
import { Container as _Container } from '@com/styled';

const Container = styled(_Container)`
	display:flex;
	gap:1rem;
	flex-wrap:wrap;	
`;

const Item = styled.div`
	padding:0.5rem 0.5rem 0.5rem 1rem;
	border-radius:3px;
	border:1px solid #ddd;
	display:flex;
	gap:2rem;
	align-items:center;
`;

const Title = styled.div`
	font-size:0.75rem;
`;
const Button = styled.button`
	background:transparent;
	border:0;
	outline:none;
	color:#364F6B;
	cursor:pointer;
`;

export default function(){
	const context = useContext(categoryContext);
	const onClick = useCallback((name)=>{
		context.remove(name);
	},[]);
	return (
		<article>
			<Container>
				{context.state.map( ({name})  => (
					<Item key={name}>
						<Title>
							<Link path="/"  key={name} >{name}</Link>
						</Title>
						<Button onClick={()=>onClick(name)}>
							<Icon name="fas-xmark" />
						</Button>
					</Item>
				))}
			</Container>
		</article>
	);
}