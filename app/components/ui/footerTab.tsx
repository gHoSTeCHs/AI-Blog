import { Link } from '@remix-run/react';

interface FooterTabProps {
	title: string;
	links: {
		linkTitle: string;
		link: string;
		new?: boolean;
	}[];
}

const FooterTab: React.FC<FooterTabProps> = ({ title, links }) => {
	return (
		<div className="flex flex-col gap-7">
			<h3 className="text-lg font-semibold">{title}</h3>
			<div className="flex flex-col gap-3">
				{links.map((link, index) => (
					<div
						key={index}
						className="flex items-center text-text-secondary text-sm hover:text-[#98989a]/50 transition-all">
						<Link to={link.link} className="mr-2">
							{link.linkTitle}
						</Link>
						{link.new && (
							<span className="bg-bg-secondary text-white text-xs font-bold px-[10px] py-[4px] rounded">
								New
							</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FooterTab;
