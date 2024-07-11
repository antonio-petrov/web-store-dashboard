import React from 'react';

interface LogoHeaderProps {
  logoSrc: string;
  companyName: string;
  companySubText: string;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({
  logoSrc,
  companyName,
  companySubText,
}) => {
  return (
    <div className='inline-flex items-center'>
      <img src={logoSrc} alt='company-logo' className='w-8.75 h-8.75 mx-auto' />
      <div className='pl-2.75'>
        <p className='text-sm'>{companyName}</p>
        <p className='text-xs text-light-grey-2'>{companySubText}</p>
      </div>
    </div>
  );
};

export default LogoHeader;
