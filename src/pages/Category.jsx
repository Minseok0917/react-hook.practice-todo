import ContextProvider from '@con/category';
import { Add, Content } from '@com/pages/category';

export default function(){
	return (
		<ContextProvider>
			<section>
				<Add />
				<Content />
			</section>
		</ContextProvider>
	);
}