import { useContext, useMemo } from 'react';
import { TodoContext } from '@/context/TodoContext';

function TodoInput(){
	const context = useContext(TodoContext);
	const addTodo = (value)=> context.dispatch({ type:'addTodo', value });
	const updateInput = (value)=> context.dispatch({ type:'updateInput', value });
	const inputValue = useMemo( () => context.state.input,[context]);

	const onInput = (e) => {
		const value = e.target.value;
		updateInput(value);
	};
	const onKeydown = (e) => {
		const key = e.code;
		const value = e.target.value;
		const isAdd = ['Enter','Tab','Space'].includes(key);
		const isText = value.trim().length;
		if( isAdd && isText ){
			addTodo(value);
		}
	};

	return(
		<div>
			<input 
				type="text"
				value={inputValue} 				
				onInput={onInput}
				onKeyDown={onKeydown} />
		</div>
	);
}

export default TodoInput;