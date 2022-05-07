import { useRef, useContext, useMemo, useCallback } from 'react';
import { categoryContext } from '@con/category';
import styled from 'styled-components';
import { 
	Input as _Input,
	Button
} from '@com/element';
import { Container as _Container } from '@com/styled';

const Container = styled(_Container)`
	padding:3rem 0;
	display:flex;
	gap:1rem;
`;

const Input = styled(_Input)`
	flex:1;
`;

export default function(){
	const context = useContext(categoryContext);
	const $input = useRef();
	const onInput = useCallback((e)=>{
		const $target = e.target;
		const value = $target.value.replace(/[^ㄱ-힣0-9a-z_]/gi,'');
		$target.value = value;
	},[]);
	const onKeyDown = useCallback((e)=>{
		const isAdd = ['Enter','Space','Tab'].includes(e.code);
		if( isAdd ){
			e.preventDefault();
			const value = $input.current.value.trim();
			if( value.length && !context.state.some( ({name}) => name === value ) ){
				context.add(value);
				$input.current.value = '';
			}
		}
	},[context.state]);
	return (
		<article>
			<Container>
				<Input ref={$input} placeholder="write category...." onInput={onInput} onKeyDown={onKeyDown} />
				<Button>ADD CATEGORY</Button>
			</Container>
		</article>
	);
}