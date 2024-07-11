import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

const Layout: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen bg-website-background overflow-y-auto md:overflow-hidden'>
      <div className='w-full md:w-64 bg-sidebar text-white h-auto md:h-[calc(100%-2rem)] flex flex-col md:rounded-lg md:mb-0 md:m-4 md:mt-4 md:mb-4'>
        <Sidebar />
      </div>
      <div className='flex-grow md:p-4 md:pl-0'>
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
