import { createContext, useContext, useReducer } from 'react';


const reducer = (state,action) => {
	switch(action.type){
		default:
			return state;
	}
};

const state = {
	
};


const trelloContext = createContext();
export default function({children}){
	const [stat,dispatch] = useReducer(reducer,state);
	return (
		<trelloContext.Provider>
			{children}
		</trelloContext.Provider>
	);
}
