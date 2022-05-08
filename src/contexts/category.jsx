import { createContext, useState, useContext, useReducer } from 'react';
import storage from '@/helpers/localStorage';




const initialState =  storage.get('category') || [];


const reducer = (state,action) => {
	switch(action.type){
		case 'add':
			const addState = [...state,{
				name:action.name,
				trello:[]
			}];
			storage.set('category',addState);
			return addState;
		case 'remove':
			const removeState = state.filter( ({name}) => name !== action.name );
			storage.set('category',removeState);
			return removeState;
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
