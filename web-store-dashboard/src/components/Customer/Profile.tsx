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
    <div className='p-4 w-3/4'>
      <h2 className='text-xl font-bold'>{customerData.NAME}</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h3 className='font-semibold'>Primary Details</h3>
          <p>Customer Account Number: {customerData.ACCNO}</p>
          <p>Customer Terms Group: {customerData.AREA}</p>
          <p>Payment Terms: {customerData['LAST.YEAR']}</p>
          <p>Credit Limit: {customerData['CREDIT.LIMIT']}</p>
          <p>Customer Rep: {customerData.REP}</p>
        </div>
        <div>
          <h3 className='font-semibold'>Contact Details</h3>
          <p>Contact Name: {customerData.NAME}</p>
          <p>Contact Number: {customerData.PHONE}</p>
          <p>Customer Address: {customerData.ADDRESS.join(', ')}</p>
        </div>
      </div>
      <div>
        <h3 className='font-semibold'>Total Orders YTD</h3>
        <p>
          Value of Orders YTD:{' '}
          {customerData.SALES.reduce(
            (sum, sale) => sum + parseFloat(sale),
            0
          ).toFixed(2)}
        </p>
        <p>Total Orders LYTD: {customerData['LAST.YEAR']}</p>
      </div>
    </div>
  );
};

export default Profile;
