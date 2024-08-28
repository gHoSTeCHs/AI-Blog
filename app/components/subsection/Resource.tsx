import React from 'react';
import images from '~/constants/images';

const resourceData = [
	{
		title: 'Ebooks',
		description:
			'Explore our collection of ebooks covering a wide spectrum of future technology topics.',
		image: images.ebook,
		background: images.classRoom,
		varTitle: 'Variety of Topics',
		varDescription:
			'Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).',
		furtherDes:
			'Ebooks are authored by renowned experts with an average of 15 years of experience',
	},
];

const Resource = () => {
	return (
		<div>
			<div>
				<div>
					<img src={resourceData[0].image} alt="" />
				</div>
				<div></div>
			</div>
			<div></div>
		</div>
	);
};

export default Resource;
