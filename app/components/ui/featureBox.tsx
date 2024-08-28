import React from 'react';

interface FeatureBoxProps {
	title: string;
	description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, description }) => {
	return (
		<div className="flex flex-col gap-4 bg-bg-secondary p-8 rounded-[10px] hover:bg-[#191919]/30 hover:text-[#fff]/80 cursor-pointer transition-all">
			<h3 className="text-xl font-semibold">{title}</h3>

			<p className="text-base text-text-secondary">{description}</p>
		</div>
	);
};

export default FeatureBox;
