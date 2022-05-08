import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoading } from '@com/loading';




export default function(){
	const Home = lazy(() => import('@/pages/Home'));
	const Category = lazy(() => import('@/pages/Category'));
	const Trello = lazy(() => import('@/pages/Trello'));
	return (
		<Suspense fallback={<PageLoading />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category" element={<Category />} />
				<Route path="/trello/:idx" element={<Trello />} />
			</Routes>
		</Suspense >
	);
}
