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
      className={`px-4 py-2 ${
        isSelected ? 'bg-menu-selected' : 'hover:bg-menu-hover'
      }`}
    >
      <a href='#' className='flex items-center'>
        {imgSrc && <img src={imgSrc} alt={altText} className='w-5 h-5 mr-3' />}
        {title}
        {isDropdown && (
          <svg
            className='ml-auto w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        )}
      </a>
    </li>
  );
};

export default MenuItem;
