import { useContext, useCallback, useMemo } from 'react';
import { trelloContext } from '@/contexts/TrelloContext';

export default function(){
	const context = useContext(trelloContext);
	const input = useMemo(()=> context.state.input,[context.state.input]);


	const onInput = useCallback((event) => {
		const $target = event.target;
		const value = $target.value.replace(/[^A-Zㄱ-힣0-9_]/gi,"");
		$target.value = value;
		updateInput(value);
	},[]);

	const onInsertList = useCallback(() => {
		addList(input);
		updateInput('');
	},[input]);

	const updateInput = useCallback((input) => {
		context.dispatch({ type:'updateListInput', input });
	},[]);

	const addList = useCallback((listName) => {
		context.dispatch({ type:'addList', listName });
	},[]);


	return (
		<div className="trello-head flex">
			<div className="trello-head__insert">
				<input type="text" placeholder="Write Trello" className="input insert__input"
				onInput={onInput} value={input} />
				<button className="insert__button btn"
				onClick={onInsertList}>추가하기</button>
			</div>
		</div>
	);
}