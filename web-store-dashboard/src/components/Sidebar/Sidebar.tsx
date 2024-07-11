import React, { useState } from 'react';
import MenuItem from './MenuItem';
import UserProfile from '../UserProfile/UserProfile';

interface MenuSection {
  title: string;
  icon: string;
  isDropdown?: boolean;
  isSelected?: boolean;
  expanded?: boolean;
  subItems?: MenuSection[];
}

const menuSections: Record<string, MenuSection[]> = {
  main: [
    {
      title: 'Dashboards',
      icon: 'icons/active-menu.svg',
      isDropdown: true,
      isSelected: true,
      expanded: true,
      subItems: [{ title: 'Test', icon: 'icons/test-icon.svg' }],
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
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    Dashboards: true,
  });

  const toggleDropdown = (title: string) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div className='w-64 bg-sidebar text-white h-screen flex flex-col rounded-lg m-4 pb-4'>
      <div className='p-2 flex items-center space-x-2 mb-2'>
        <div className=' p-2 '>
          <img src='/images/company-logo.svg' alt='Logo' />
        </div>
        <span className='font-semibold text-sm'>Waretech</span>
      </div>
      <hr className='ml-4 mr-4' />
      <UserProfile />
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
              onClick={() => item.isDropdown && toggleDropdown(item.title)}
              expanded={expandedMenus[item.title] ?? false}
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
              onClick={() => item.isDropdown && toggleDropdown(item.title)}
              expanded={expandedMenus[item.title] ?? false}
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
              onClick={() => item.isDropdown && toggleDropdown(item.title)}
              expanded={expandedMenus[item.title] ?? false}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
