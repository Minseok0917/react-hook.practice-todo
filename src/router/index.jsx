import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoading } from '@com/loading';




export default function(){
	const Home = lazy(() => import('@/pages/Home'));
	// const Trello = lazy(() => import('@/pages/Trello'));
	const Category = lazy(() => import('@/pages/Category'));
	// <Route path="/trello" element={<Trello />} />
	return (
		<Suspense fallback={<PageLoading />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category" element={<Category />} />
			</Routes>
		</Suspense >
	);
}
