export default function(){
	return (
		<div className="trello-head flex">
			<div className="trello-head__insert">
				<input type="text" placeholder="Write Trello" className="input insert__input" />
				<button className="insert__button btn">추가하기</button>
			</div>
		</div>
	);
}