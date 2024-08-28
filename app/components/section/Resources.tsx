import Resource from '../subsection/Resource';
import Header from '../ui/header';
import LinkTab from '../ui/linkTab';

const Resources = () => {
	return (
		<section>
			<div className="bg-bg-secondary">
				<div className="py-20 container flex items-center justify-between">
					<Header
						title="Your Gateway to In-Depth Information"
						tag="Unlock Valuable Knowledge with FutureTech's Resources"
					/>
					<LinkTab title="View All Resources" />
				</div>
			</div>
			<Resource />
		</section>
	);
};

export default Resources;
