
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out shadow-sm hover:shadow-md";
  
  const primaryStyle = "bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400";
  const secondaryStyle = "bg-sky-100 hover:bg-sky-200 text-sky-700 focus:ring-sky-300 border border-sky-300";

  const variantStyle = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
