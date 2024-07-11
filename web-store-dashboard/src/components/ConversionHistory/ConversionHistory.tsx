import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

interface ConversionHistoryProps {
  data: number[];
}

const ConversionHistory: React.FC<ConversionHistoryProps> = ({ data }) => {
  return (
    <div className='rounded-xl bg-progress-bar-color px-7'>
      <div className='pt-5.5 mb-7'>
        <h3 className='font-medium rounded-xl text-large'>
          Conversion history
        </h3>
        <p className='text-sm text-light-grey-2 mb-2'>
          Week to week performance
        </p>
      </div>
      {data.map((width, index) => (
        <div
          key={index}
          className={`h-1 bg-light-grey-3 rounded-full ${
            index % 2 === 1 ? 'mb-3' : 'mb-1'
          }`}
        >
          <ProgressBar
            color={['bg-progress-blue', 'bg-progress-green'][index % 2]}
            width={`${width}%`}
          />
        </div>
      ))}
    </div>
  );
};

export default ConversionHistory;
