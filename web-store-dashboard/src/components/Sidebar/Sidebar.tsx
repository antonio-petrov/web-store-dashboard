import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className='w-1/4 bg-gray-800 text-white h-screen p-4'>
      <h2 className='text-2xl font-bold'>Waretech</h2>
      <nav>
        <ul>
          <li className='my-4'>
            <a href='#' className='text-gray-300'>
              Dashboards
            </a>
          </li>
          <li className='my-4'>
            <a href='#' className='text-gray-300'>
              Maintenance Menu
            </a>
          </li>
          <li className='my-4'>
            <a href='#' className='text-gray-300'>
              Product Management
            </a>
          </li>
          <li className='my-4'>
            <a href='#' className='text-gray-300'>
              Purchasing
            </a>
          </li>
          <li className='my-4'>
            <a href='#' className='text-gray-300'>
              Reporting
            </a>
          </li>
          <li className='my-4'>
            <a href='#' className='text-gray-300'>
              EQSI
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
