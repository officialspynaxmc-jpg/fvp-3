import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <img
      src="https://verify.scc.gov.bd/crest-128.webp"
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      alt="সিলেট সিটি কর্পোরেশন লোগো"
    />
  );
};