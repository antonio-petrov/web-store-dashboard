const MaintenanceData: React.FC = () => {
  return (
    <div className='bg-white pt-5.5 p-6.75'>
      <div className='inline-flex border-b-2 items-center'>
        <img
          src='/images/waretech-logo.png'
          alt='waretech-logo'
          className='w-8.75 h-8.75 mx-auto'
        />
        <div className='pl-2.75'>
          <p className='text-sm'>Waretech</p>
          <p className='text-xs text-light-grey-2'>HDM Solar</p>
        </div>
      </div>

      <h2 className='text-base font-semibold mt-1.75'>Maintenance Breakdown</h2>
      <p className='text-sm text-light-grey-2 mb-4'>
        Add, Edit, Delete any of your Entities
      </p>
      {['Total Customers', 'Total Suppliers', 'Total Users', 'Total Users'].map(
        (item, index) => (
          <div
            key={index}
            className='mb-4 ml-4 bg-progress-bar-color rounded-xl py-3.5 px-6 text-dark-grey-2 text-xl mt-5'
          >
            <div className='flex justify-between'>
              <div>
                <h3 className='text-lg font-bold'>{item}</h3>
                <p className='text-xs text-gray-500 mb-2.75'>
                  {index % 2 === 0 ? 'Week comparison' : 'Month comparison'}
                </p>
              </div>
              <p className='text-right text-xl font-bold mt-1 pr-4.5'>
                {[1.345, 3.82, '£4690', '£3820'][index]}
              </p>
            </div>

            <div className='mt-1 h-1 bg-gray-200 rounded-full'>
              <div
                className={`h-full rounded-full ${
                  [
                    'bg-progress-blue',
                    'bg-progress-yellow',
                    'bg-progress-red',
                    'bg-progress-green',
                  ][index]
                }`}
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>
        )
      )}
      {/* mb-4 ml-4 bg-progress-bar-color rounded-xl py-3.5 px-6 text-dark-grey-2 text-xl mt-5 */}
      <div className='ml-4 rounded-xl bg-progress-bar-color px-7'>
        <div className='pt-5.5 mb-7'>
          <h3 className='font-medium rounded-xl text-large'>
            Conversion history
          </h3>
          <p className='text-sm text-light-grey-2 mb-2 '>
            Week to week performance
          </p>
        </div>
        {[40, 30, 60, 20, 70, 50, 45, 55, 60, 20].map((width, index) => (
          <div
            key={index}
            className={`h-1 bg-light-grey-3 rounded-full ${
              index % 2 === 1 ? 'mb-3' : 'mb-1'
            }`}
          >
            <div
              className={`h-full rounded-full ${
                ['bg-progress-blue', 'bg-progress-green'][index % 2]
              }`}
              style={{ width: `${width}%` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceData;
