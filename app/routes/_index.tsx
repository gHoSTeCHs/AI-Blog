import type { MetaFunction } from '@remix-run/node';
import BlogPostsSection from '~/components/section/BlogPosts';
import FutureTechSection from '~/components/section/FutureTech';
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
			<FutureTechSection />
			<BlogPostsSection />
		</>
	);
}
