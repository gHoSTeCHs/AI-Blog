import { MetaFunction } from '@remix-run/node';
export const meta: MetaFunction = () => [
	{ title: 'Podcasts' },
	{
		name: 'description',
		content: 'Get the latest talk in Ai tech World on here',
	},
];

export default function Podcasts() {
	return <h1>This is the Podcasts Page</h1>;
}
