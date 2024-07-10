import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CustomerData {
  ACCNO: string;
  NAME: string;
  ADDRESS: string[];
  AREA: string;
  REP: string;
  'CREDIT.LIMIT': string;
  FAX: string;
  PHONE: string;
  'LAST.YEAR': string;
  SALES: string[];
}

const Profile: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL as string
        );
        const data = response.data.ReactCustomer[0];
        setCustomerData(data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchData();
  }, []);

  if (!customerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex-grow p-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-semibold'>Customer Maintenance</h1>
        <div className='flex space-x-2'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded'>
            Export
          </button>
          <button className='px-4 py-2 bg-blue-600 text-white rounded'>
            + Add New
          </button>
        </div>
      </div>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>{customerData.NAME}</h2>
          <img
            src='/path-to-company-logo.jpg'
            alt='Company Logo'
            className='w-24 h-24 object-cover rounded'
          />
        </div>
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <h3 className='font-semibold mb-2'>Primary Details</h3>
            <div className='space-y-2'>
              <p>
                <span className='font-medium'>Customer Account ID:</span>{' '}
                {customerData.ACCNO}
              </p>
              <p>
                <span className='font-medium'>Customer Terms Group:</span>{' '}
                {customerData.AREA}
              </p>
              <p>
                <span className='font-medium'>Payment Terms:</span>{' '}
                {customerData['LAST.YEAR']}
              </p>
              <p>
                <span className='font-medium'>Credit Limit:</span>{' '}
                {customerData['CREDIT.LIMIT']}
              </p>
              <p>
                <span className='font-medium'>Customer Rep:</span>{' '}
                {customerData.REP}
              </p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold mb-2'>Contact Details</h3>
            <div className='space-y-2'>
              <p>
                <span className='font-medium'>Contact Name:</span>{' '}
                {customerData.NAME}
              </p>
              <p>
                <span className='font-medium'>Contact Number:</span>{' '}
                {customerData.PHONE}
              </p>
              <p>
                <span className='font-medium'>Customer Address:</span>{' '}
                {customerData.ADDRESS.join(', ')}
              </p>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <h3 className='font-semibold mb-2'>Order Summary</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p>
                <span className='font-medium'>Total Orders YTD:</span>{' '}
                {customerData.SALES.length}
              </p>
              <p>
                <span className='font-medium'>Value of Orders YTD:</span> £
                {customerData.SALES.reduce(
                  (sum, sale) => sum + parseFloat(sale),
                  0
                ).toFixed(2)}
              </p>
            </div>
            <div>
              <p>
                <span className='font-medium'>Total Orders LYTD:</span>{' '}
                {customerData['LAST.YEAR']}
              </p>
              <p>
                <span className='font-medium'>Value of Orders LYTD:</span> £
                {parseFloat(customerData['LAST.YEAR']).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
