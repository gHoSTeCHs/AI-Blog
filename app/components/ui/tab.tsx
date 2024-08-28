import React from 'react';

interface TabProps {
	title: string;
	onClick?: any;
	isActive: any;
}

const Tab: React.FC<TabProps> = ({ title, onClick, isActive }) => {
	return (
		<div
			className={`${
				isActive ? 'bg-bg-secondary' : ''
			} border border-border text-center px-5 py-6 rounded-md hoverTab`}
			onClick={onClick}>
			<h3 className="">{title}</h3>
		</div>
	);
};

export default Tab;
