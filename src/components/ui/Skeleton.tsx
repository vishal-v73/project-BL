import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular'
}) => {
  const baseStyles = 'animate-pulse bg-gray-200';
  
  const variants = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded h-4 w-2/3',
  };

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
    />
  );
};
