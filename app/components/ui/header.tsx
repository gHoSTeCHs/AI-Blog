interface HeaderProps {
	title: string;
	description?: string;
	tag?: string;
}

const Header = ({ title, description, tag }: HeaderProps): JSX.Element => {
	return (
		<header className="flex flex-col gap-5">
			<div className="flex flex-col gap-[10px]">
				<div className=" ">
					<p className="inline-block bg-[#333333] px-2 py-1 rounded-sm font-medium">
						{tag}
					</p>
				</div>
				<h1 className="text-[44px] leading-none">{title}</h1>
			</div>

			<p className="text-base text-text-tetriary">{description}</p>
		</header>
	);
};

export default Header;
