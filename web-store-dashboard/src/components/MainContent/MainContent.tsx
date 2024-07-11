import React from 'react';
import MaintenanceData from '../Maintenance/MaintenanceData';
import MaintenanceDetails from '../MaintenanceDetails/MaintenanceDetails';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import TopBar from '../TopBar/TopBar';
import PageTitle from '../PageTitle/PageTitle';

const MainContent: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-website-background'>
      <div>
        <div className='container lg:ml-3.75  pt-3.5 flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-sm text-gray-600'>
            <img src='/icons/house.svg' alt='house-icon' className='w-3 h-3' />
            <Breadcrumbs />
          </div>
          <TopBar />
        </div>
      </div>
      <div className='container px-4 md:px-0 flex-grow overflow-y-auto'>
        <PageTitle title='Customer Maintenance' />
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0'>
            <MaintenanceData />
          </div>
          <div className='w-full md:w-2/3 lg:w-3/4 flex flex-col'>
            <MaintenanceDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
