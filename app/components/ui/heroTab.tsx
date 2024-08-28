import React from 'react';
import { ArrowBox } from './arrowBox';

interface HeroTabProps {
	title: string;
	subtitle: string;
	description: string;
	image: string;
	classname?: string;
}

const HeroTab: React.FC<HeroTabProps> = ({
	title,
	subtitle,
	description,
	image,
	classname,
}) => {
	return (
		<div className={`flex items-center px-[50px] py-[40px] ${classname}`}>
			<div className="flex flex-col gap-5">
				<img src={image} alt="HeroTab Image" className="max-w-[40px]" />
				<div>
					<h3 className="text-lg font-semibold">{title}</h3>
					<p className="text-base  text-text-tetriary">{subtitle}</p>
				</div>
				<p className="text-base text-text-secondary"> {description}</p>
			</div>
			<div>
				<ArrowBox />
			</div>
		</div>
	);
};

export default HeroTab;
