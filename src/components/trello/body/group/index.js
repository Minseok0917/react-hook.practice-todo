import { useContext, useCallback, useMemo } from 'react';
import { trelloContext } from '@/contexts/TrelloContext';
import Item from './item';

export default function(props){
	const context = useContext(trelloContext);
	const group = props.group;
	const groupInput = useMemo(() => group.input, [group.input]);

	const onInput = useCallback((event) => {
		const $target = event.target;
		const value = $target.value.replace(/[^A-Zㄱ-힣0-9_]/gi,"");
		$target.value = value;
		updateInput(value);
	},[]);

	const onInsertItem = useCallback(() => {
		addItem(groupInput);
		updateInput('');
	},[groupInput]);

	const updateInput = useCallback((input) => {
		context.dispatch({ type:'updateItemInput', input, listName:group.name });
	},[]);

	const addItem = useCallback((itemName) => {
		context.dispatch({ type:'addItem', itemName, listName:group.name });
	},[]);

	const removeList = useCallback(()=> {
		context.dispatch({ type:'removeList', listName:group.name });
	},[]);

	return (
		<div className="group">
			<div className="group-head">
				<div className="group-head__view">
					<p className="view__title">{group.name}</p>
					<button className="view__button"
					onClick={removeList}></button>
				</div>
				<div className="group-head__insert">
					<input type="text" placeholder="Add Item" className="input insert__input" value={groupInput}
					onInput={onInput} />
					<button className="insert__button btn"
					onClick={onInsertItem}>ADD</button>
				</div>
			</div>
			<div className="group-body">
				{ group.items.map( item => (
					<Item group={group} item={item} key={item.name} />
				))}
			</div>
		</div>
	);
}