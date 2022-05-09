import ContextProvider from "@con/trello";
import { useParams  } from "react-router-dom";

export default function(){
	const params = useParams();
	const idx = params.idx;
	return (
		<ContextProvider>
			<div>
				<h1>{idx}</h1>
			</div>
		</ContextProvider>
	);
}