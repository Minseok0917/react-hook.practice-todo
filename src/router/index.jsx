import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';



const Home = lazy(() => import('@/pages/Home'));
const Trello = lazy(() => import('@/pages/Trello'));


export default function(){
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/" element={<Trello />} />
		</Routes>
	);
}
