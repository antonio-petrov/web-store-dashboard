import React from 'react';
import MenuItem from './MenuItem';

const menuSections = {
  main: [
    { title: 'Dashboards', icon: 'icons/active-menu.svg' },
    {
      title: 'Maintenance Menu',
      icon: 'icons/inactive-menu.svg',
      isSelected: true,
    },
    { title: 'Product Management', icon: 'icons/inactive-menu.svg' },
    { title: 'Purchasing', icon: 'icons/inactive-menu.svg' },
    { title: 'Reporting', icon: 'icons/inactive-menu.svg' },
    { title: 'EQSI', icon: 'icons/inactive-menu.svg' },
  ],
  pages: [
    { title: 'Customers', icon: 'icons/customers.svg' },
    { title: 'Suppliers', icon: 'icons/suppliers.svg' },
    { title: 'Users / roles', icon: 'icons/users-roles.svg' },
  ],
  quickLinks: [
    { title: 'AI Tool', icon: 'icons/ai-tool.svg' },
    { title: 'EQS Link', icon: 'icons/eqs.svg' },
    { title: 'A N Other', icon: 'icons/a-n-other.svg' },
  ],
};

const Sidebar = () => {
  return (
    <div className='w-64 bg-sidebar text-white h-screen flex flex-col rounded-lg m-4'>
      <div className='p-4 flex items-center space-x-2 border-b border-white'>
        <div className=' p-2 '>
          <img src='/images/company-logo.svg' alt='Logo' />
        </div>
        <span className='font-semibold text-lg'>Waretech</span>
      </div>
      <div className='p-4 flex items-center space-x-2 border-b border-white'>
        <img
          src='images/profile-pic.png'
          alt='User'
          className='rounded-full w-10 h-10'
        />
        <span className='font-semibold text-lg'>Tayah Betambeau</span>
      </div>
      <nav className='flex-grow'>
        <ul className='py-4'>
          {menuSections.main.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              imgSrc={item.icon}
              isSelected={item.isSelected}
            />
          ))}
        </ul>
        <h3 className='text-sm font-semibold uppercase text-white mb-2 ml-4'>
          Pages
        </h3>
        <ul>
          {menuSections.pages.map((item) => (
            <MenuItem key={item.title} title={item.title} imgSrc={item.icon} />
          ))}
        </ul>
        <h3 className='text-sm font-semibold uppercase text-white mb-2 ml-4'>
          Quick Links
        </h3>
        <ul>
          {menuSections.quickLinks.map((item) => (
            <MenuItem key={item.title} title={item.title} imgSrc={item.icon} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
