import styled from 'styled-components';


const Button = styled.button`
	border-radius:3px;
	padding:0.5rem 1rem;
	background: #FC5185;
    outline: none;
    border: 0;
    color:#fff;
    font-size:0.75rem;	
    cursor:pointer;
    transition:0.5s;
    font-weight:bold;
    &:hover{
    	background:#c9406a;
    }
`;

export default Button;