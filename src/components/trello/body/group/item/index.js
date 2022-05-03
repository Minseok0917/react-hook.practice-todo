import { useContext, useCallback, useMemo } from 'react';
import { trelloContext } from '@/contexts/TrelloContext';

export default function(props){
	const context = useContext(trelloContext);
	const group = props.group;
	const item = props.item;

	const removeItem = useCallback(()=> {
		context.dispatch({ type:'removeItem', listName:group.name, itemName:item.name });
	},[]);
	return (
		<div className="item">
			<p className="item__title">{item.name}</p>
			<button className="item__button"
			onClick={removeItem}></button>
		</div>
	);
}