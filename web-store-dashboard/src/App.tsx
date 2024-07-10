import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import CustomerProfile from './components/Customer/Profile';

const App: React.FC = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <CustomerProfile />
    </div>
  );
};

export default App;
