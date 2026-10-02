import React from 'react';

export default function BrandMark({ className = '' }) {
  return <span className={`fox-mark ${className}`} aria-hidden="true">✳</span>;
}
