import { useEffect, useCallback, useState } from 'react';
import { marked } from 'marked';
import styled from 'styled-components';
import { 
	Markdown as _Markdown,
	Container as _Container 
} from '@com/styled';

const Container = styled(_Container)`
	padding:2rem 0;
`;
const Markdown = styled(_Markdown)`
	h1{ color:#364F6B; margin-top:2rem; }
`;

export default function(){
	const [content,setContent] = useState('');
	const fetchMarkdown = useCallback(async() => {
		const response =  await fetch('/src/assets/markdown/info.md');
		const markdownText = await response.text();
		const html = marked(markdownText);
		setContent(html);
	},[content]);
	useEffect(()=>{
		fetchMarkdown();
	},[fetchMarkdown]);
	return (
		<Container>
			<Markdown dangerouslySetInnerHTML={{ __html:content }} />
		</Container>
	);
}