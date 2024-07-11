import React from 'react';
import MaintenanceData from '../Maintenance/MaintenanceData';
import MaintenanceDetails from '../Maintenance/MaintenanceDetails';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import TopBar from '../TopBar/TopBar';
import PageTitle from '../PageTitle/PageTitle';

const MainContent: React.FC = () => {
  return (
    <div className='flex-grow bg-website-background'>
      <div>
        <div className='container ml-8 pt-6 flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-sm text-gray-600'>
            <img src='/icons/house.svg' alt='house-icon' className='w-3 h-3' />
            <Breadcrumbs />
          </div>
          <TopBar />
        </div>
      </div>
      <div className='container pl-1'>
        <PageTitle title='Customer Maintenance' />
        <div className='grid grid-cols-3 gap-6'>
          {/* TODO: This will probably need to be changed for other pages? Can't take such decision without seeing other screens. */}
          <MaintenanceData />
          {/* TODO: Consider having a separate component for the data below - depending on the other screens from the app */}
          <MaintenanceDetails />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
