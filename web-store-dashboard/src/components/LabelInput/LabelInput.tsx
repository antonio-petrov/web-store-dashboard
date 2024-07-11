import React from 'react';

interface LabelInputProps {
  label: string;
  value: string;
  isLongField?: boolean;
  hasBorder?: boolean;
  className?: string;
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  value,
  isLongField = false,
  hasBorder = true,
  className = '',
}) => (
  <div
    className={`flex flex-col md:flex-row items-start md:items-center mb-4 ${className}`}
  >
    <label className='text-label-color font-inter font-normal font-medium text-sm leading-5 w-full md:w-48 mb-2 md:mb-0'>
      {label}
    </label>
    <input
      type='text'
      value={value}
      className={`w-full md:ml-4 ${isLongField ? 'flex-1' : 'md:w-48'} ${
        hasBorder ? 'border' : ''
      } rounded-sm pl-2 md:pl-5 border-light-grey-6 text-dark-grey-3`}
      readOnly
    />
  </div>
);
export default LabelInput;
