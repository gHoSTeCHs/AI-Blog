import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'danger';
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	loading = false,
	children,
	className,
	...props
}) => {
	const baseStyles =
		'px-[16px] py-[14px] md:px-[14px] md:py-[10px] text-[14px] rounded-md focus:outline-none transition duration-150 font-medium';
	const variantStyles = {
		primary:
			'bg-yellow text-bg-primary hover:bg-background-tertiary border border-border hover:bg-gray-600',
		secondary: 'bg-btn text-white hover:bg-gray-600',
		danger: 'bg-red-500 text-white hover:bg-red-600',
	};
	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${className}`}
			disabled={loading}
			{...props}>
			{loading ? 'Loading...' : children}
		</button>
	);
};

export default Button;
