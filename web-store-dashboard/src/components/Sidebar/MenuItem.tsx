import React from 'react';

interface MenuItemProps {
  title: string;
  isSelected?: boolean;
  imgSrc?: string;
  isDropdown?: boolean;
  onClick?: () => void;
  expanded?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  isSelected = false,
  imgSrc,
  isDropdown = false,
  onClick,
  expanded = false,
}) => {
  const bgClass = isSelected
    ? isDropdown && expanded
      ? 'bg-menu-dropdown-selected'
      : 'bg-menu-selected'
    : 'hover:bg-menu-hover';

  const arrowSrc = isDropdown
    ? expanded
      ? '/icons/arrow-up.svg'
      : '/icons/arrow-down.svg'
    : undefined;

  return (
    <li className={`px-4 py-2 ml-4 mr-4 ${bgClass}`} onClick={onClick}>
      <a href='#' className='ml-2 flex items-center'>
        {imgSrc && <img src={imgSrc} alt={title} className='w-4 h-4 mr-3' />}
        {title}
        {isDropdown && (
          <img
            src={arrowSrc}
            alt={expanded ? 'arrow-up-icon' : 'arrow-down-icon'}
            className='w-3 h-3 ml-auto'
          />
        )}
      </a>
    </li>
  );
};

export default MenuItem;
