const MaintenanceData: React.FC = () => {
  return (
    <div className='col-span-1 bg-white  shadow p-6'>
      <h2 className='text-lg font-semibold mb-4'>Maintenance Breakdown</h2>
      <p className='text-sm text-gray-600 mb-4'>
        Add, Edit, Delete any of your Entities
      </p>
      {['Total Customers', 'Total Suppliers', 'Total Users', 'Total Users'].map(
        (item, index) => (
          <div key={index} className='mb-4'>
            <h3 className='text-sm font-medium'>{item}</h3>
            <p className='text-xs text-gray-500'>
              {index % 2 === 0 ? 'Week comparison' : 'Month comparison'}
            </p>
            <div className='mt-1 h-2 bg-gray-200 rounded-full'>
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
            <p className='text-right text-sm font-medium mt-1'>
              {[1.345, 3.82, '£4690', '£3820'][index]}
            </p>
          </div>
        )
      )}
      <h3 className='text-sm font-medium mt-6 mb-2'>Conversion history</h3>
      <p className='text-xs text-gray-500 mb-2'>Week to week performance</p>
      {[60, 40, 80, 50, 30].map((width, index) => (
        <div key={index} className='h-1 bg-gray-200 rounded-full mb-1'>
          <div
            className={`h-full rounded-full ${
              ['bg-progress-blue', 'bg-progress-green', 'bg-progress-yellow'][
                index % 3
              ]
            }`}
            style={{ width: `${width}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MaintenanceData;
