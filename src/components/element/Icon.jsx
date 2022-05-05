  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  export default function(props){
  	const icon = props.name.split('-');
  	icon.length === 1 && icon.unshift('fab');
  	
  	return (
  		<FontAwesomeIcon icon={icon} />
  	);
  }