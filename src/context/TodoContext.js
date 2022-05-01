import { createContext, useReducer } from 'react';

export const TodoContext = createContext();

const getTodoIdx = (()=>{
	let idx = 0;
	return () => idx++;
})();

const intialState = {
	input:'',
	todos:[]
};

const reducer = (state,action) => {
	switch(action.type){
		case 'addTodo':
			return { 
				...state,
				input : '',
				todos : [...state.todos, {
					idx:getTodoIdx(),
					value: action.value
				}]
			};
		case 'removeTodo':
			return state;
		case 'updateTodo':
			return state;
		case 'updateInput':
			return { 
				...state,
				input : action.value
			};
		default:
			return state;
	}
};

const ContextProvider = ({children}) => {
	const [state,dispatch] = useReducer(reducer,intialState);
	const contextValue = {
		state,
		dispatch
	};
	return (
		<TodoContext.Provider value={contextValue}>
			{children}
		</TodoContext.Provider>
	);
};

export default ContextProvider;
