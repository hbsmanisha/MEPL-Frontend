import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-xl p-4 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}
