import React from 'react';

interface LabelInputProps {
  label: string;
  value: string;
}

const LabelInput: React.FC<LabelInputProps> = ({ label, value }) => (
  <div className='flex'>
    <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
      {label}
    </label>
    <input
      type='text'
      value={value}
      className='mt-1 w-full border rounded-md pl-5'
      readOnly
    />
  </div>
);

export default LabelInput;
