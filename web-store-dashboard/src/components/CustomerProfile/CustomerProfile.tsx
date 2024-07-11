import React, { useState } from 'react';
import Tab from '../Tab/Tab';
import ContactDetails from '../ContactDetails/ContactDetails';

const tabs = ['Overview', 'Contacts/Addresses', 'Financials', 'E-Commerce'];

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className='rounded-lg mx-auto w-full'>
      <div>
        <h2 className='text-xl font-bold mb-4 md:mb-8 text-dark-grey-1'>
          Renewa Ltd
        </h2>
        <div className='flex flex-col md:flex-row lg:flex-row font-inter text-light-grey-1 mb-4 md:mb-7 lg:mb-7 pl-1 border-b-2'>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
      </div>

      <div className='pl-4 md:pl-6.75 lg:pl-6.75'>
        <ContactDetails />
      </div>
    </div>
  );
};

export default CustomerProfile;
