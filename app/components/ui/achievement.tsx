import { Plus } from 'lucide-react';
import React from 'react';

interface AchievementProps {
	title: string;
	description: string;
	classname?: any;
}

const Achievement: React.FC<AchievementProps> = ({
	title,
	description,
	classname,
}) => {
	return (
		<div className={`flex flex-col gap-[8px] p-[30px] ${classname}`}>
			<div className="flex items-end">
				<h3 className="text-[30px] leading-none font-semibold">{title}</h3>
				<Plus className="text-yellow" />
			</div>

			<p className="text-sm text-text-secondary font-normal">{description}</p>
		</div>
	);
};

export default Achievement;
