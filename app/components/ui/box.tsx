import React from 'react';
import { ArrowBox } from './arrowBox';

interface BoxProps {
	title: string;
	description: string;
}

export const Box = ({ title, description }: BoxProps) => {
	return (
		<div className="flex flex-col gap-4 bg-bg-secondary p-8 rounded-[10px] hover:bg-bg-primary/30 transition-all cursor-pointer">
			<div className="flex items-center justify-between">
				<h3 className="text-xl font-semibold">{title}</h3>
				<ArrowBox />
			</div>
			<p className="text-base text-text-secondary">{description}</p>
		</div>
	);
};
