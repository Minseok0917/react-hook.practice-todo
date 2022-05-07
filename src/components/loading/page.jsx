import styled from 'styled-components';
import { Icon } from '@com/element';


const Loading = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.4);
    z-index: 9999;
    display:flex;
    justify-content: center;
    align-items: center;
}
`;

export default function(){
	return (
		<Loading>
			<Icon name="react" color="#61dafb" fontSize="2.5rem" />
		</Loading>
	);
}