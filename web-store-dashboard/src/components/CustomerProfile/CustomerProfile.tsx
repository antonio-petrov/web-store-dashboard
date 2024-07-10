import React from 'react';

const CustomerProfile = () => {
  return (
    <div className='rounded-lg   mx-auto'>
      <div>
        <div>
          <h2 className='text-xl font-bold mb-6 text-dark-grey'>Renewa Ltd</h2>
          <div className='font-inter text-light-grey'>
            {/* TODO: Convert to tabs */}
            Overview | Contacts/Addresses | Financials | E-Commerce
          </div>
          <hr />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <div className='flex'>
              <label className='text-light-grey text-sm'>Customer Name</label>
              <input
                type='text'
                value='Renewa Ltd'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
            <div className='flex'>
              <label className='text-light-grey text-sm'>
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
              <label className='text-light-grey text-sm'>
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
              <label className='text-light-grey text-sm'>Payment Terms</label>
              <input
                type='text'
                value='45 Days'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
            <div className='flex'>
              <label className='text-light-grey text-sm'>Credit Limit</label>
              <input
                type='text'
                value='3 Days'
                className='mt-1  w-full border rounded-md pl-5'
                readOnly
              />
            </div>
            <div className='flex'>
              <label className='text-light-grey text-sm'>Customer Rep</label>
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
                <label className='text-light-grey text-sm'>Contact Name</label>
                <input
                  type='text'
                  value='EcoFlow'
                  className='mt-1  w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex'>
                <label className='text-light-grey text-sm'>
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
                <label className='text-light-grey text-sm'>Address</label>
                <input
                  type='text'
                  value='123 Any Road, London'
                  className='mt-1  w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex'>
                <label className='text-light-grey text-sm'>Postcode</label>
                <input
                  type='text'
                  value='L3 4TH'
                  className='mt-1  w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
              <div className='flex'>
                <label className='text-light-grey text-sm'>
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
                <label className='text-light-grey text-sm'>
                  Value of Orders YTD
                </label>
                <input
                  type='text'
                  value='£157,365'
                  className='mt-1 w-full border rounded-md pl-5'
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
