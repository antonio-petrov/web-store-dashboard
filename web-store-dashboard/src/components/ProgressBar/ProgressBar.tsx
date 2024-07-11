import React from 'react';

interface ProgressBarProps {
  color: string;
  width: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ color, width }) => {
  return (
    <div className='h-1 bg-progress-bar-color rounded-full'>
      <div className={`h-full rounded-full ${color}`} style={{ width }}></div>
    </div>
  );
};

export default ProgressBar;
