import React from 'react';
import MenuItem from './MenuItem';

const menuSections = {
  main: [
    {
      title: 'Dashboards',
      icon: 'icons/active-menu.svg',
      isDropdown: true,
      isSelected: true,
    },
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
    { title: 'Customers', icon: 'icons/customers.svg', isDropdown: true },
    { title: 'Suppliers', icon: 'icons/suppliers.svg', isDropdown: true },
    { title: 'Users / roles', icon: 'icons/users-roles.svg', isDropdown: true },
  ],
  quickLinks: [
    { title: 'AI Tool', icon: 'icons/ai-tool.svg', isDropdown: true },
    { title: 'EQS Link', icon: 'icons/eqs.svg', isDropdown: true },
    { title: 'A N Other', icon: 'icons/a-n-other.svg', isDropdown: true },
  ],
};

const Sidebar = () => {
  return (
    <div className='w-64 bg-sidebar text-white h-screen flex flex-col rounded-lg m-4 pb-4'>
      <div className='p-2 flex items-center space-x-2'>
        <div className=' p-2 '>
          <img src='/images/company-logo.svg' alt='Logo' />
        </div>
        <span className='font-semibold text-lg'>Waretech</span>
      </div>
      <hr className='ml-4 mr-4' />
      <div className='p-4 flex items-center space-x-2'>
        <img
          src='images/profile-pic.png'
          alt='User'
          className='ml-3.75 rounded-full w-8.25 h-8.25'
        />
        <span className='font-light text-base font-roboto'>
          Tayah Betambeau
        </span>
        <img
          className='cursor-pointer'
          src='icons/arrow-down.svg'
          alt='arrow down icon'
        />
      </div>
      <hr className='ml-4 mr-4' />
      <nav className='flex-grow'>
        <ul className='py-4'>
          {menuSections.main.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              imgSrc={item.icon}
              isSelected={item.isSelected}
              isDropdown={item.isDropdown}
            />
          ))}
        </ul>
        <h3 className='text-sm font-semibold uppercase text-white mb-2 ml-4'>
          Pages
        </h3>
        <ul>
          {menuSections.pages.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              imgSrc={item.icon}
              isDropdown={item.isDropdown}
            />
          ))}
        </ul>
        <h3 className='text-sm font-semibold uppercase text-white mb-2 ml-4'>
          Quick Links
        </h3>
        <ul>
          {menuSections.quickLinks.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              imgSrc={item.icon}
              isDropdown={item.isDropdown}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
