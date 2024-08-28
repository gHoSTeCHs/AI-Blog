import { json } from '@remix-run/node';
import images from '~/constants/images';
import Header from '../ui/header';
import { boxData } from '~/constants/data';
import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Box } from '../ui/box';

export default function CTA() {
	return (
		<section className="bg-bg-secondary py-20">
			<div className="container flex flex-col gap-[50px]">
				<div className="flex items-center gap-[60px]">
					<img src={images.siteIcon} alt="Site Icon" />
					<Header
						title="Be Part of the Future Tech Revolution"
						tag="Learn, Connect, and Innovate"
						description="Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers."
					/>
				</div>
				<div className="flex items-center justify-between gap-[10px] p-[10px] bg-bg-primary rounded-[10px]">
					{boxData.map((box) => (
						<Box key={box.title} {...box} />
					))}
				</div>
			</div>
		</section>
	);
}
