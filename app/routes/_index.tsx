import type { MetaFunction } from '@remix-run/node';
import Hero from '~/components/section/Hero';

export const meta: MetaFunction = () => {
	return [
		{ title: 'AI Blog' },
		{
			name: 'description',
			content:
				'Your goto place for keeping up with the latest happening on the AI world.',
		},
	];
};

export default function Index() {
	return (
		<>
			<Hero />
		</>
	);
}
