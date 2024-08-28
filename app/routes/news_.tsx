import { MetaFunction } from '@remix-run/node';
import { Link, Outlet } from '@remix-run/react';
export const meta: MetaFunction = () => [
	{ title: 'News' },
	{ name: 'description', content: 'Get the lastest happening on here' },
];

export default function News() {
	return (
		<h1>
			This is main news page
			<Link to="/news/1">News 1</Link>
		</h1>
	);
}
