import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';


const Link = styled(_Link)`
	color:inherit;
	font-size:inherit;
`;


export default function(props){
	return (
		<Link to={props.path}>{props.children}</Link>
	);
}