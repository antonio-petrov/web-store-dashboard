import React from 'react';
import LabelInput from '../LabelInput/LabelInput';

const ContactInfo: React.FC = () => (
  <>
    <LabelInput label='Address' value='123 Any Road, London' />
    <LabelInput label='Postcode' value='L3 4TH' />
    <LabelInput label='Total Orders YTD' value='40' />
    <LabelInput label='Value of Orders YTD' value='£157,365' />
    <div className='flex border-dashed border-2 px-4 py-4'>
      <img src='/images/renewa-logo.png' alt='logo' />
    </div>
  </>
);

export default ContactInfo;
