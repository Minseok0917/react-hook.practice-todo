import TrelloContextProvider from '@/contexts/TrelloContext';
import TrelloHead from '@/components/trello/head';
import TrelloBody from '@/components/trello/body';

function Trello(){
	return (
		<TrelloContextProvider>
			<div className="trello container">
				<TrelloHead />
				<TrelloBody />
			</div>
		</TrelloContextProvider>
	);
}

export default Trello;