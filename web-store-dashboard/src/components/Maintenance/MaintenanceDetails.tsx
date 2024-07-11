import CustomerProfile from '../CustomerProfile/CustomerProfile';
import SearchInput from '../Input/SearchInput';

const MaintenanceDetails: React.FC = () => {
  return (
    <div className='col-span-2'>
      <div className='flex space-x-2 space-x-5 mb-8'>
        <SearchInput className='border rounded px-3 py-2 rounded-lg flex-grow max-w-2xl' />
        <button className='px-4 py-2 bg-light-blue-background text-blue-text rounded flex items-center'>
          <svg
            className='w-4 h-4 mr-2'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
          Export
        </button>
        <button className='px-4 py-2 bg-blue-600 text-white rounded flex items-center'>
          <svg
            className='w-4 h-4 mr-2'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
              clipRule='evenodd'
            />
          </svg>
          Add New
        </button>
      </div>
      <div className='col-span-2 bg-white rounded-lg p-4'>
        <CustomerProfile />
      </div>
    </div>
  );
};

export default MaintenanceDetails;
