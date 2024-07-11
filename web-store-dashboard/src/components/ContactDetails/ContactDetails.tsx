import React, { useEffect, useState } from 'react';
import LabelInput from '../LabelInput/LabelInput';
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

const ContactDetails: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) {
        console.error('API URL is not defined');
        return;
      }

      try {
        const response = await axios.get(apiUrl as string);
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
    <div className='flex flex-wrap pr-4'>
      <div className='w-full md:w-1/2 md:pr-4'>
        <div className='space-y-4'>
          <h2 className='text-base font-bold mb-4 md:mb-6'>Primary Details</h2>
          <LabelInput
            label='Customer Name'
            value={customerData.NAME}
            isLongField={true}
            className='w-full'
          />
          <LabelInput
            label='Customer Account ID'
            value={customerData.ACCNO}
            className='w-full'
          />
          <LabelInput
            label='Credit Limit'
            value={customerData['CREDIT.LIMIT']}
            className='w-full'
          />
          <LabelInput
            label='Customer Rep'
            value={customerData.REP}
            className='w-full'
          />
        </div>

        <div className='space-y-4 mt-4 md:mt-8'>
          <h2 className='text-base font-bold mb-4 md:mb-6'>Contact Details</h2>
          <LabelInput
            label='Contact Number'
            value={customerData.PHONE}
            className='w-full'
          />
          <LabelInput
            label='Fax Number'
            value={customerData.FAX}
            className='w-full'
          />
        </div>

        <div className='space-y-4 mt-4 md:mt-8'>
          <h2 className='text-base font-bold mb-4 md:mb-6'>Customer Address</h2>
          <LabelInput
            label='Address'
            value={customerData.ADDRESS.join(', ')}
            isLongField={true}
            className='w-full'
          />
          <LabelInput
            label='Area'
            value={customerData.AREA}
            className='w-full'
          />
        </div>
      </div>

      <div className='w-full md:w-1/2 md:pl-4 flex flex-col items-center'>
        <div className='flex border-dashed border-2 px-4 py-4 mb-4 md:mb-11.25 w-full justify-center'>
          <img
            src='/images/renewa-logo.png'
            alt='logo'
            className='max-w-full'
          />
        </div>

        <div className='border-2 pl-6.75 pt-3.75 pb-4 pr-5.75 w-full flex flex-col space-y-8'>
          <div className='flex justify-between'>
            <label className='text-label-color font-inter font-normal font-medium text-sm leading-5'>
              Total Sales Last Year
            </label>
            <label className='text-label-color font-inter font-normal font-medium text-sm leading-5'>
              {customerData['LAST.YEAR']}
            </label>
          </div>
          <div className='overflow-y-auto max-h-48 w-full'>
            <h3 className='text-base font-bold mb-2'>Sales (Last 12 Months)</h3>
            <table className='min-w-full'>
              <thead>
                <tr>
                  <th className='text-left'>Month</th>
                  <th className='text-right'>Sales</th>
                </tr>
              </thead>
              <tbody>
                {customerData.SALES.map((sale, index) => (
                  <tr key={index}>
                    <td className='text-left'>
                      {new Date(
                        0,
                        new Date().getMonth() - index,
                        1
                      ).toLocaleString('default', { month: 'long' })}
                    </td>
                    <td className='text-right'>{sale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
