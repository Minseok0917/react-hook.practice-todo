  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import styled from 'styled-components';

  const Icon = styled(FontAwesomeIcon)`
  	font-size:${ (props) => props.fontSize || '1rem' }
  	color:${ (props) => props.color || '#333' }
  `;

  export default function(props){
  	const icons = props.name.split('-');
  	icons.length === 1 && icons.unshift('fab');

    const [prefix,...icon] = icons;
    const iconValue = [prefix,icon.join('-')];

  	
  	return (
  		<Icon icon={iconValue} {...props}  />
  	);
  }