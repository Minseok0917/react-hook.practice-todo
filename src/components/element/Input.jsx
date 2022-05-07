import styled from 'styled-components';


const Input = styled.input`
	border-radius:3px;
	padding:0.75rem 1.25rem;
	font-size:1.25rem;
	outline:none;
	border:1px solid #ddd;
	font-weight:bold;
	transition:0.5s;
	color:#666831;
	&::placeholder{
		font-weight:normal;
		color:#ccc;
	}
	&:focus{
		border:1px solid #e3a5b8;
	}
`;

export default Input;