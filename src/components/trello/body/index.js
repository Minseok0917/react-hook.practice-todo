import { useContext, useCallback, useMemo } from 'react';
import { trelloContext } from '@/contexts/TrelloContext';
import Group from './group';

export default function(){
	const context = useContext(trelloContext);
	const lists = useMemo( () => context.state.lists,[context.state.lists]);

	return (
		<div className="trello-body">
			{
				lists.map( list => (
					<Group group={list} key={list.name} />
				))
			}
		</div>
	);
}

/*
<div className="group">
	<div className="group-head">
		<div className="group-head__view">
			<p className="view__title">TodoList</p>
			<button className="view__button"></button>
		</div>
		<div className="group-head__insert">
			<input type="text" placeholder="Add Item" className="input insert__input" />
			<button className="insert__button btn">ADD</button>
		</div>
	</div>
	<div className="group-body">
		<div className="item">
			<p className="item__title">31312</p>
			<button className="item__button"></button>
		</div>
	</div>
</div>

*/