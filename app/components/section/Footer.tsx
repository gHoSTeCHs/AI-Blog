import { footerLinks } from '~/constants/data';
import FooterTab from '../ui/footerTab';

export default function Footer() {
	return (
		<footer className="container py-[60px]">
			<div className="flex  justify-between">
				{footerLinks.map((footerlink) => (
					<FooterTab title={footerlink.title} links={footerlink.links} />
				))}
			</div>
		</footer>
	);
}
