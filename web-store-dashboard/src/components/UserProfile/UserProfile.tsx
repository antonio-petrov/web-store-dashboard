import React from 'react';

const UserProfile = () => {
  return (
    <div className='p-4 flex items-center space-x-2'>
      <img
        src='images/profile-pic.png'
        alt='User'
        className='ml-3.75 rounded-full w-8.25 h-8.25'
      />
      <span className='font-light text-base font-roboto'>Tayah Betambeau</span>
      <img
        className='cursor-pointer'
        src='icons/arrow-down.svg'
        alt='arrow down icon'
      />
    </div>
  );
};

export default UserProfile;
