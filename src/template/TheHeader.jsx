import Link from '@/components/Link';

export default function(){
	return (
		<header>
			<Link path="/" name="Home" />
			<Link path="/trello" name="Trello" />
		</header>
	);
}