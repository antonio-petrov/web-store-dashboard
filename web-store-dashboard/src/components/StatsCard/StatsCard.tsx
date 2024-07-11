import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

interface StatsCardProps {
  title: string;
  comparisonText: string;
  value: string;
  progressBarColor: string;
  progressBarWidth: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  comparisonText,
  value,
  progressBarColor,
  progressBarWidth,
}) => {
  return (
    <div className='mb-1.25 bg-progress-bar-color rounded-xl py-3.5 pr-6 pl-6.5 text-dark-grey-2 text-xl'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='text-xs text-gray-500 mb-2.75'>{comparisonText}</p>
        </div>
        <p className='text-right text-xl font-bold mt-1 pt-1.5'>{value}</p>
      </div>
      <ProgressBar color={progressBarColor} width={progressBarWidth} />
    </div>
  );
};

export default StatsCard;
