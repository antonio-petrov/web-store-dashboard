import React, { useState } from 'react';
import Tab from '../Tab/Tab';
import ContactDetails from '../ContactDetails/ContactDetails';

const tabs = ['Overview', 'Contacts/Addresses', 'Financials', 'E-Commerce'];

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className='rounded-lg mx-auto'>
      <div>
        <h2 className='text-xl font-bold mb-8 text-dark-grey-1'>Renewa Ltd</h2>
        <div className='flex font-inter text-light-grey-1 mb-7.5 pl-1 border-b-2 '>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pl-6.75'>
          <ContactDetails />
          <ContactDetails secondColumn />
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
