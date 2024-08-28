import images from './images';
import { BoxData } from './types';

export const navLinks = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'News',
		href: '/news',
	},
	{
		name: 'Podcasts',
		href: '/podcasts',
	},
	{
		name: 'Resources',
		href: '/resources',
	},
];

export const boxData: BoxData[] = [
	{
		title: 'Resource Access',
		description:
			'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.',
	},
	{
		title: 'Community Forum',
		description:
			'Join our active community forum to discuss industry trends and collaborate with peers.',
	},
	{
		title: 'Tech Events',
		description:
			'Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.',
	},
];

export const footerLinks = [
	{
		title: 'Home',
		links: [
			{ linkTitle: 'Features', link: '#' },
			{ linkTitle: 'Blogs', link: '#' },
			{ linkTitle: 'Resources', link: '#', new: true },
			{ linkTitle: 'Testimonials', link: '#' },
			{ linkTitle: 'Contact Us', link: '#' },
			{ linkTitle: 'Newsletter', link: '#' },
		],
	},
	{
		title: 'News',
		links: [
			{ linkTitle: 'Trending Stories', link: '#' },
			{ linkTitle: 'Featured Videos', link: '#' },
			{ linkTitle: 'Technology', link: '#' },
			{ linkTitle: 'Health', link: '#' },
			{ linkTitle: 'Politics', link: '#' },
			{ linkTitle: 'Environment', link: '#' },
		],
	},
	{
		title: 'Blogs',
		links: [
			{ linkTitle: 'Quantum Computing', link: '#' },
			{ linkTitle: 'AI Ethics', link: '#' },
			{ linkTitle: 'Space Exploration', link: '#' },
			{ linkTitle: 'Biotechnology', link: '#', new: true },
			{ linkTitle: 'Renewable Energy', link: '#' },
			{ linkTitle: 'Biohacking', link: '#' },
		],
	},
	{
		title: 'Podcasts',
		links: [
			{ linkTitle: 'AI Revolution', link: '#' },
			{ linkTitle: 'TechTalk AI', link: '#' },
			{ linkTitle: 'AI Conversations', link: '#' },
		],
	},
];

export const achievementData = [
	{
		title: '300',
		description: 'Resources available',
	},
	{
		title: '12k',
		description: 'Total Downloads',
	},
	{
		title: '10k',
		description: 'Active Users',
	},
];

export const HeroTabsData = [
	{
		title: 'Latest News Updates',
		subtitle: 'Stay Current',
		description: 'Over 1,000 articles published monthly',
		image: images.current,
	},
	{
		title: 'Expert Contributors',
		subtitle: 'Trusted Insights',
		description: '50+ renowned AI experts on our team',
		image: images.contribute,
	},
	{
		title: 'Global Readership',
		subtitle: 'Worldwide Impact',
		description: '2 million monthly readers',
		image: images.impact,
	},
];
