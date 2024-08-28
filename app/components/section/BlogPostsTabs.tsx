import React, { useEffect, useState } from 'react';
import Tab from '../ui/tab';
import { BlogPosts as Blogs } from '~/constants/data';
import LinkTab from '../ui/linkTab';
import { Heart } from 'lucide-react';

const blogCategories = [
	'All',
	'Quantum Computing',
	'AI Ethics',
	'Space Exploration',
	'BioTechnology',
	'Renewable Energy',
];

const BlogPostsTabs = () => {
	const [activeCategory, setActiveCategory] = useState('All');
	const [blogsToshow, setBlogToShow] = useState(Blogs);

	useEffect(() => {
		if (activeCategory === 'All') {
			setBlogToShow(Blogs.slice(0, 3));
		} else {
			setBlogToShow(
				Blogs.filter((blog) => blog.category === activeCategory).slice(0, 3)
			);
		}
	}, [activeCategory]);

	const formatNumber = (number: number | string) => {
		let num = parseInt(number.toString());
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1) + 'M';
		} else if (num >= 1000) {
			return (num / 1000).toFixed(1) + 'k';
		} else {
			return num.toString();
		}
	};

	const handleTabClick = (category: React.SetStateAction<string>) => {
		setActiveCategory(category);
	};

	return (
		<div className="">
			<div className="border border-border border-x-0 py-10">
				<div className="container grid grid-cols-6 gap-[14px]">
					{blogCategories.map((category) => (
						<Tab
							title={category}
							key={category}
							isActive={activeCategory === category}
							onClick={() => handleTabClick(category)}
						/>
					))}
				</div>
			</div>

			<div className="mt-4">
				{blogsToshow.length > 0 ? (
					blogsToshow.map((blog, index) => (
						<div
							className={`${
								index === 0 ? 'border-t-0' : ''
							} border border-border border-x-0`}
							key={index}>
							<div className="container py-[60px]">
								<div className="grid grid-cols-12">
									<div className="col-span-3">
										<div className="flex items-center gap-2">
											<img src={blog.avatar} alt="Author Image" />
											<div>
												<p className="text-lg font-semibold">{blog.author}</p>
												<p className="text-base text-text-secondary">
													{blog.category}
												</p>
											</div>
										</div>
									</div>
									<div className=" col-span-9">
										<div className="flex items-center justify-between">
											<div className="flex flex-col gap-6">
												<h4 className="text-lg font-semibold text-text-tetriary">
													{blog.publishedDate}
												</h4>
												<div>
													<h3 className="text-[22px] leading-none font-semibold">
														{blog.title}
													</h3>
													<p className="text-base text-text-secondary">
														{blog.description}
													</p>
												</div>
												<div>
													<div className="flex items-center gap-1">
														<Heart
															fill={blog.liked ? '#FF0000' : '#141414'}
															className={`${
																blog.liked ? 'text-[#ff0000]' : 'text-border'
															} cursor-pointer`}
														/>
														<p>{formatNumber(blog.likes)}</p>
													</div>
												</div>
											</div>
											<div>
												<LinkTab title="Read More" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<p>No Blogs Avaliable for this category</p>
				)}
			</div>
		</div>
	);
};

export default BlogPostsTabs;
