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

export const futureTechData = [
	{
		title: 'Future Technology Blog',
		description:
			'Stay informed with our blog section dedicated to future technology.',
		image: images.informed,
		cards: [
			{
				title: 'Quantity',
				description:
					'Over 1,000 articles on emerging tech trends and breakthroughs.',
			},
			{
				title: 'Variety',
				description:
					'Articles cover fields like AI, robotics, biotechnology, and more.',
			},
			{
				title: 'Frequency',
				description: 'Fresh content added daily to keep you up to date.',
			},
			{
				title: 'Authoritative',
				description:
					'Written by our team of tech experts and industry professionals.',
			},
		],
	},
	{
		title: 'Research Insights Blogs',
		description:
			'Dive deep into future technology concepts with our research section.',
		image: images.research,
		cards: [
			{
				title: 'Depth',
				description: '500+ research articles for in-depth understanding.',
			},
			{
				title: 'Graphics',
				description: 'Visual aids and infographics to enhance comprehension.',
			},
			{
				title: 'Trends',
				description: 'Explore emerging trends in future technology research.',
			},
			{
				title: 'Contributors',
				description: 'Contributions from tech researchers and academics.',
			},
		],
	},
];

export const BlogPosts = [
	{
		title: 'The Quantum Leap in Computing',
		author: 'John Techson',
		avatar: images.person1,
		category: 'Quantum Computing',
		publishedDate: 'October 15, 2023',
		description:
			'Explore the revolution in quantum computing, its applications, and its potential impact on various industries.',
		likes: '24400',
		liked: true,
		comments: 30,
		shares: 10,
	},
	{
		title: 'The Ethical Dilemmas of AI',
		author: 'Sarah Ethicist',
		avatar: images.person2,
		category: 'AI Ethics',
		publishedDate: 'November 5, 2023',
		description:
			'A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.',
		likes: '24400',
		liked: false,
		comments: 30,
		shares: 10,
	},
	{
		title: 'The Mars Colonization Challenge',
		author: 'Astronomer X',
		avatar: images.person3,
		category: 'Space Exploration',
		publishedDate: 'December 10, 2023',
		description:
			'Exploring the technical and logistical challenges of human colonization on Mars.',
		likes: '24400',
		liked: true,
		comments: 30,
		shares: 10,
	},
];
