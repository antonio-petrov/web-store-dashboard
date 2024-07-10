import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

const Layout: React.FC = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;
