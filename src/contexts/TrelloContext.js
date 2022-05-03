import { createContext, useReducer } from 'react';

const addList = (name,input="",items=[]) => ({
	name,
	input,
	items
});

const addItem = (name,status=false) => ({
	name,
	status
});

const reducer = (state,action) => {
	const {input, lists} = state;
	const list = lists.find(({name}) => name === action.listName );

	switch(action.type){
		case 'updateListInput':
			return {
				input:action.input,
				lists
			};
		case 'updateItemInput':
			list.input = action.input;
			return {
				input,
				lists
			};
		case 'addList':
			return {
				input,
				lists:[...lists,addList(action.listName)]
			};
		case 'removeList':
			return {
				input,
				lists:lists.filter( ({name}) => name !== action.listName )
			};
		case 'addItem':
			list.items = [...list.items,addItem(action.itemName)];
			return {
				input,
				lists
			};
		case 'removeItem':
			list.items = list.items.filter(({name}) => name !== action.itemName );
			return {
				input,
				lists
			};
		default:
			return state;
	}
};
const initialState = {
	input:'',
	lists:[]
};


export const trelloContext = createContext();
export default function ContextProvider({children}){
	const [state,dispatch] = useReducer(reducer,initialState);
	const contextValue = {
		state,
		dispatch
	};
	return (
		<trelloContext.Provider value={contextValue}>
			{children}
		</trelloContext.Provider>
	);
}
