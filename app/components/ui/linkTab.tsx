import { MoveUpRight } from 'lucide-react';
import React from 'react';

interface LinkTabProps {
	title: string;
}

const LinkTab: React.FC<LinkTabProps> = ({ title }) => {
	return (
		<div className="">
			<div className="inline-block border border-border rounded-md px-5 py-[14px] hover:bg-[#191919]/70 cursor-pointer transition-all">
				<div className=" flex gap-1 ">
					<p>{title}</p>
					<MoveUpRight />
				</div>
			</div>
		</div>
	);
};

export default LinkTab;
