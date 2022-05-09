import { createContext, useContext, useReducer } from 'react';
import { useParams } from "react-router-dom";



const reducer = (state,action) => {
	switch(action.type){
		default:
			return state;
	}
};

const initialState = {
	
};


export const trelloContext = createContext();
export default function({children}){
	const params = useParams();
	const [state,dispatch] = useReducer(reducer,initialState);
	const value = [
		state,
		dispatch
	];
	return (
		<trelloContext.Provider value={value}>
			{children}
		</trelloContext.Provider>
	);
}
