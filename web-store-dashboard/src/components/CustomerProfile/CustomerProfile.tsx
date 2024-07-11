import React from 'react';

const CustomerProfile = () => {
  return (
    <div className='rounded-lg   mx-auto'>
      <div>
        <div>
          <h2 className='text-xl font-bold mb-8 text-dark-grey-1'>
            Renewa Ltd
          </h2>
          <div className='font-inter text-light-grey-1 mb-7.5 pl-0.75'>
            {/* TODO: Convert to tabs */}
            Overview | Contacts/Addresses | Financials | E-Commerce
            <hr />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pl-6.75'>
          <div className='space-y-4'>
            <h2 className='text-base font-bold mb-6 invisible md:visible'>
              Contact Details
            </h2>
            <div className='flex'>
              <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                Customer Name
              </label>
              <input
                type='text'
                value='Renewa Ltd'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
            <div className='flex'>
              <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                Customer Account ID
              </label>
              <input
                type='text'
                value='456567'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
            <div className='flex'>
              <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                Customer Terms Group
              </label>
              <input
                type='text'
                value='BUY1'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
            <div className='flex'>
              <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                Payment Terms
              </label>
              <input
                type='text'
                value='45 Days'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
            <div className='flex'>
              <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                Credit Limit
              </label>
              <input
                type='text'
                value='3 Days'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
            <div className='flex'>
              <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                Customer Rep
              </label>
              <input
                type='text'
                value='Steve H'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
          </div>
          <div>
            <h2 className='text-base font-bold mb-6 invisible md:visible'>
              Contact Details
            </h2>
            <div className='space-y-4'>
              <div className='flex'>
                <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                  Contact Name
                </label>
                <input
                  type='text'
                  value='EcoFlow'
                  className='mt-1  w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex'>
                <label className='text-light-grey-1 text-sm'>
                  Contact Number
                </label>
                <input
                  type='text'
                  value='0333 455 6777'
                  className='mt-1  w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex'>
                <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                  Address
                </label>
                <input
                  type='text'
                  value='123 Any Road, London'
                  className='mt-1  w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex'>
                <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                  Postcode
                </label>
                <input
                  type='text'
                  value='L3 4TH'
                  className='mt-1  w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex'>
                <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                  Total Orders YTD
                </label>
                <input
                  type='text'
                  value='40'
                  className='mt-1 w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex'>
                <label className='text-light-grey-1 font-inter font-normal font-medium text-sm leading-5'>
                  Value of Orders YTD
                </label>
                <input
                  type='text'
                  value='£157,365'
                  className='mt-1 w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex border-dashed border-2 px-4 py-4'>
                <img src='/images/renewa-logo.png' alt='logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
