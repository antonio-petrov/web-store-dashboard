const TopBar: React.FC = () => {
  return (
    <div className='flex items-center space-x-2'>
      <input
        type='text'
        placeholder='Search here'
        className='border border-top-bar-color rounded px-2 py-1 text-sm rounded-lg bg-transparent placeholder-top-bar-color py-2'
      />
      <button className='p-1 rounded-full'>
        {' '}
        <img src='/icons/customer.svg' alt='person-icon' className='w-5 h-5' />
      </button>
      <button className='p-1 rounded-full'>
        {' '}
        <img
          src='/icons/cog-wheel.svg'
          alt='cog-wheel-icon'
          className='w-5 h-5'
        />
      </button>
      <button className='p-1 rounded-full'>
        {' '}
        <img src='/icons/bell.svg' alt='bell-icon' className='w-5 h-5' />
      </button>
    </div>
  );
};

export default TopBar;
