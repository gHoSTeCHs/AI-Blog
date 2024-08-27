// app/components/Nav.jsx
import { NavLink } from '@remix-run/react';
import { navLinks } from '~/constants/data';

export default function Nav() {
	return (
		<nav className="flex gap-4 bg-bg-primary">
			{navLinks.map((link) => (
				<NavLink
					key={link.name}
					to={link.href}
					className={({ isActive }) => (isActive ? 'font-bold' : '')}>
					{link.name}
				</NavLink>
			))}
		</nav>
	);
}
