import React from 'react';

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className = '' }) => {
  const combinedClassName = `border rounded px-3 py-2 rounded-lg pl-10 ${className}`;

  return (
    <div
      className='search-input-container flex-grow max-w-2xl'
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
    >
      <img
        src='./icons/search.svg'
        alt='Search'
        className='search-icon'
        style={{
          position: 'absolute',
          left: '10px',
          height: '20px',
          width: '20px',
          zIndex: 10,
        }}
      />
      <input
        type='text'
        placeholder='Search Maintenance...'
        className={combinedClassName}
      />
    </div>
  );
};

export default SearchInput;
