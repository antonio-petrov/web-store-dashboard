import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

const Layout: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen bg-website-background lg:p-4'>
      <div className='w-full md:w-64 bg-sidebar text-white h-auto md:h-full flex flex-col rounded-lg mb-4 md:mb-0'>
        <Sidebar />
      </div>
      <div className='flex-grow md:ml-4'>
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
