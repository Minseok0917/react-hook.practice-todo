import { useReducer } from 'react';
import TodoContainer from '@/components/todo/TodoContainer';

const getIdx = (()=>{
	let idx = 0;
	return () => idx++;
})();

const reducer = (state,action) => {
	switch(action.type){
		case 'ADD_CONTAINER':
			const todoContainer = { 
				idx: getIdx(),
				todos:[]
			};
			return [...state,todoContainer];
		case 'REMOVE_CONTAINER':
			return state.filter(({idx}) => idx !== action.idx );
		default:
			return state;
	}
};


function Todo(){
	const [containers,dispatch] = useReducer(reducer,[]);

	const addContainer = () => dispatch({ type:'ADD_CONTAINER' });
	const removeContainer = (idx) => dispatch({ type:'REMOVE_CONTAINER', idx });

	return (
		<div className="todo-page">
			<div className="todo-head">
				<button onClick={addContainer}>추가하기</button>
			</div>
			<div className="todo-body">
				{ containers.map( container => (
					<TodoContainer 
						key={container.idx}
						container={container} 
						remove={removeContainer} />
				)) }
			</div>
		</div>
	);
}


export default Todo;
