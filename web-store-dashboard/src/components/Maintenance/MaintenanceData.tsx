import React from 'react';
import LogoHeader from '../LogoHeader/LogoHeader';
import StatsCard from '../StatsCard/StatsCard';
import ConversionHistory from '../ConversionHistory/ConversionHistory';

const MaintenanceData: React.FC = () => {
  const stats = [
    {
      title: 'Total Customers',
      comparisonText: 'Week comparison',
      value: '1.345',
      progressBarColor: 'bg-progress-blue',
      progressBarWidth: '60%',
    },
    {
      title: 'Total Suppliers',
      comparisonText: 'Month comparison',
      value: '3.82',
      progressBarColor: 'bg-progress-yellow',
      progressBarWidth: '60%',
    },
    {
      title: 'Total Users',
      comparisonText: 'Week comparison',
      value: '£4690',
      progressBarColor: 'bg-progress-red',
      progressBarWidth: '60%',
    },
    {
      title: 'Total Users',
      comparisonText: 'Month comparison',
      value: '£3820',
      progressBarColor: 'bg-progress-green',
      progressBarWidth: '60%',
    },
  ];

  const conversionHistoryData = [40, 30, 60, 20, 70, 50, 45, 55, 60, 20];

  return (
    <div className='bg-white p-4 md:p-6'>
      <div className='px-4 md:px-0'>
        <LogoHeader
          logoSrc='/images/waretech-logo.png'
          companyName='Waretech'
          companySubText='HDM Solar'
        />
        <hr className='border-t border-light-grey-4 mt-4' />
        <h2 className='text-base font-semibold mt-2'>Maintenance Breakdown</h2>
        <p className='text-sm text-light-grey-2 mb-8'>
          Add, Edit, Delete any of your Entities
        </p>
      </div>
      <div className='px-4 md:px-0'>
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      <ConversionHistory data={conversionHistoryData} />
    </div>
  );
};

export default MaintenanceData;
