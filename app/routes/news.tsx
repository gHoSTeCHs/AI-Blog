import { MetaFunction } from '@remix-run/node';
export const meta: MetaFunction = () => [
	{ title: 'News' },
	{ name: 'description', content: 'Get the lastest happening on here' },
];

export default function News() {
	return <h1>News</h1>;
}
