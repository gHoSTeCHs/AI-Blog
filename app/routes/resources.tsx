import { MetaFunction } from '@remix-run/node';
export const meta: MetaFunction = () => [
	{ title: 'Resources' },
	{ name: 'description', content: 'Your greatest repository of resources' },
];

export default function Resources() {
	return <h1>Resources</h1>;
}
