import React from 'react';

// Define the type for props
interface MenuItemProps {
  title: string;
  isSelected?: boolean;
  imgSrc?: string;
  altText?: string;
  isDropdown?: boolean;
}

// Use the interface for component props
const MenuItem: React.FC<MenuItemProps> = ({
  title,
  isSelected = false,
  imgSrc,
  altText = 'Item',
  isDropdown = false,
}) => {
  return (
    <li
      className={`px-4 py-2 ml-4 mr-4 ${
        isSelected
          ? isDropdown
            ? 'bg-menu-dropdown-selected'
            : 'bg-menu-selected'
          : 'hover:bg-menu-hover'
      }`}
    >
      <a href='#' className='flex items-center'>
        {imgSrc && <img src={imgSrc} alt={altText} className='w-5 h-5 mr-3' />}
        {title}
        {isDropdown && (
          <img
            src={isSelected ? '/icons/arrow-up.svg' : '/icons/arrow-down.svg'}
            alt={isSelected ? 'arrow-up-icon' : 'arrow-down-icon'}
            className='w-3 h-3 ml-auto'
          />
        )}
      </a>
    </li>
  );
};

export default MenuItem;
