import { createContext, useReducer } from 'react';

const reducer = (state,action) => {
	switch(action.type){
		default:
			return state;
	}
};
const initialState = {

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
