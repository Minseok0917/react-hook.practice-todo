import { useParams  } from "react-router-dom";

export default function(){
	const params = useParams();
	const idx = params.idx;
	return (
		<div>
			<h1>{idx}</h1>
		</div>
	);
}