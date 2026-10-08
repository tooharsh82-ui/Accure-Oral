import React from 'react';

interface ToothIconProps {
  className?: string;
  fill?: string;
}

export const ToothIcon: React.FC<ToothIconProps> = ({
  className = 'w-6 h-6',
  fill = 'none',
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.2 2.8C4.6 3 3 5.3 3 8.4c0 3.3 1.4 6.2 2.9 10.4.7 2 2.2 2.7 3.6 2.7 1.4 0 2.1-.9 2.5-2.5.4 1.6 1.1 2.5 2.5 2.5 1.4 0 2.9-.7 3.6-2.7 1.5-4.2 2.9-7.1 2.9-10.4 0-3.1-1.6-5.4-4.2-5.6-2.2-.2-3.3.9-4.8.9-1.5 0-2.6-1.1-4.8-.9z" />
      <path d="M10 7.5c.7-.5 1.4-.7 2-.7s1.3.2 2 .7" opacity="0.6" />
    </svg>
  );
};
