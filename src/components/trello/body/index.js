export default function(){
	return (
		<div className="trello-body">
			<div className="group">
				<div className="group-head">
					<div className="group-head__view">
						<p className="view__title">TodoList</p>
						<button className="view__button"></button>
					</div>
					<div className="group-head__insert">
						<input type="text" placeholder="Add Item" className="input insert__input" />
						<button className="insert__button btn">ADD</button>
					</div>
				</div>
				<div className="group-body">
					<div className="item">
						<p className="item__title">31312</p>
						<button className="item__button"></button>
					</div>
				</div>
			</div>
		</div>
	);
}