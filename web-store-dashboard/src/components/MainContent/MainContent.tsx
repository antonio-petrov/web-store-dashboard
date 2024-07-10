import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className='flex-grow bg-gray-100'>
      <div>
        <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-sm text-gray-600'>
            <svg
              className='w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
            </svg>
            <span>/</span>
            <span>Pages</span>
            <span>/</span>
            <span>Maintenance</span>
          </div>
          <div className='flex items-center space-x-2'>
            <input
              type='text'
              placeholder='Search here'
              className='border rounded px-2 py-1 text-sm rounded-lg'
            />
            <button className='p-1 rounded-full'>
              {' '}
              <img
                src='/icons/customer.svg'
                alt='person-icon'
                className='w-5 h-5 mr-3'
              />
            </button>
            <button className='p-1 rounded-full'>
              {' '}
              <img
                src='/icons/cog-wheel.svg'
                alt='cog-wheel-icon'
                className='w-5 h-5'
              />
            </button>
            <button className='p-1 rounded-full'>
              {' '}
              <img src='/icons/bell.svg' alt='bell-icon' className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-semibold'>Customer Maintenance</h1>
          <div className='flex space-x-2'>
            <input
              type='text'
              placeholder='Search Maintenance...'
              className='border rounded px-3 py-2 rounded-lg'
            />
            <button className='px-4 py-2 bg-blue-500 text-white rounded flex items-center'>
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
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-1 bg-white rounded-lg shadow p-6'>
            <h2 className='text-lg font-semibold mb-4'>
              Maintenance Breakdown
            </h2>
            <p className='text-sm text-gray-600 mb-4'>
              Add, Edit, Delete any of your Entities
            </p>
            {[
              'Total Customers',
              'Total Suppliers',
              'Total Users',
              'Total Users',
            ].map((item, index) => (
              <div key={index} className='mb-4'>
                <h3 className='text-sm font-medium'>{item}</h3>
                <p className='text-xs text-gray-500'>
                  {index % 2 === 0 ? 'Week comparison' : 'Month comparison'}
                </p>
                <div className='mt-1 h-2 bg-gray-200 rounded-full'>
                  <div
                    className={`h-full rounded-full ${
                      [
                        'bg-progress-blue',
                        'bg-progress-yellow',
                        'bg-progress-red',
                        'bg-progress-green',
                      ][index]
                    }`}
                    style={{ width: '60%' }}
                  ></div>
                </div>
                <p className='text-right text-sm font-medium mt-1'>
                  {[1.345, 3.82, '£4690', '£3820'][index]}
                </p>
              </div>
            ))}
            <h3 className='text-sm font-medium mt-6 mb-2'>
              Conversion history
            </h3>
            <p className='text-xs text-gray-500 mb-2'>
              Week to week performance
            </p>
            {[60, 40, 80, 50, 30].map((width, index) => (
              <div key={index} className='h-1 bg-gray-200 rounded-full mb-1'>
                <div
                  className={`h-full rounded-full ${
                    [
                      'bg-progress-blue',
                      'bg-progress-green',
                      'bg-progress-yellow',
                    ][index % 3]
                  }`}
                  style={{ width: `${width}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className='col-span-2 bg-white rounded-lg shadow p-6'>
            {/* Customer profile content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
