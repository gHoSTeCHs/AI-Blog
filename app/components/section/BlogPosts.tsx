import React from 'react';
import Header from '../ui/header';
import LinkTab from '../ui/linkTab';
import BlogPostsTabs from './BlogPostsTabs';

const BlogPostsSection = () => {
	return (
		<section>
			<div className="bg-bg-secondary">
				<div className="py-20 container flex items-center justify-between">
					<Header
						title="A Knowledge Treasure Trove"
						tag="Explore FutureTech's In-Depth Blog Posts"
					/>
					<LinkTab title="View all Blogs" />
				</div>
			</div>
			<div>
				<BlogPostsTabs />
			</div>
		</section>
	);
};

export default BlogPostsSection;
