import React from 'react';

const Breadcrumbs: React.FC = () => {
  return (
    <div className='text-top-bar-color font-roboto pt-1'>
      <span> / </span>
      <span>Pages</span>
      <span> / </span>
      <span className='text-page-title-color'>Maintenance</span>
    </div>
  );
};

export default Breadcrumbs;
