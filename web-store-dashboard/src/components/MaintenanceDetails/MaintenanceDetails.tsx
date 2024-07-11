import React from 'react';
import CustomerProfile from '../CustomerProfile/CustomerProfile';
import SearchInput from '../Input/SearchInput';

const MaintenanceDetails: React.FC = () => {
  return (
    <div className='flex-grow flex flex-col h-full overflow-y-auto'>
      <div className='flex flex-col md:flex-row md:space-x-5 mb-8 pl-12 pr-12 md:pl-0 md:pr-0'>
        <SearchInput className='border border-gray-300 rounded-lg px-3 py-2 flex-grow mb-2 md:mb-0' />
        <div className='flex flex-row space-x-2 mb-2 md:mb-0 justify-between'>
          <button className='px-4 py-2 bg-light-blue-background text-blue-text rounded flex items-center '>
            <svg
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
            Export
          </button>
          <button className='px-4 py-2 bg-blue-600 text-white rounded flex items-center'>
            <svg
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                clipRule='evenodd'
              />
            </svg>
            Add New
          </button>
        </div>
      </div>
      <div className='flex-grow bg-white rounded-lg pl-4 pt-3.25 overflow-y-auto'>
        <CustomerProfile />
      </div>
    </div>
  );
};

export default MaintenanceDetails;
