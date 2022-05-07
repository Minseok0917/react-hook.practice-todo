import { createContext, useState, useContext, useReducer } from 'react';


const initialState = [];


const reducer = (state,action) => {
	switch(action.type){
		case 'add':
			return [...state,{
				name:action.name,
				trello:[]
			}];
		case 'remove':
			return state.filter( ({name}) => name !== action.name );
		case 'update':
			return state;
		default:
			return state;
	}
};



export const categoryContext = createContext();
export default function({children}){
	const [state,dispatch] = useReducer(reducer,initialState);
	const value = {
		state,
		add:(name) => dispatch({type:'add', name }),
		remove:(name) => dispatch({type:'remove', name}),
		update:(name,newName) => dispatch({type:'update', name, newName})
	};
	return (
		<categoryContext.Provider value={value}>
			{children}
		</categoryContext.Provider>
	);
}
