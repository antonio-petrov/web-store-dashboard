import React from 'react';
import LabelInput from '../LabelInput/LabelInput';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import ContactInfo from '../ContactInfo/ContactInfo';

interface ContactDetailsProps {
  secondColumn?: boolean;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  secondColumn = false,
}) => {
  return (
    <div className={secondColumn ? '' : 'space-y-4'}>
      <h2 className='text-base font-bold mb-6 invisible md:visible'>
        Contact Details
      </h2>
      <div className='space-y-4'>
        <LabelInput
          label={secondColumn ? 'Contact Name' : 'Customer Name'}
          value={secondColumn ? 'EcoFlow' : 'Renewa Ltd'}
        />
        <LabelInput
          label={secondColumn ? 'Contact Number' : 'Customer Account ID'}
          value={secondColumn ? '0333 455 6777' : '456567'}
        />
        {!secondColumn && <CustomerDetails />}
        {secondColumn && <ContactInfo />}
      </div>
    </div>
  );
};

export default ContactDetails;
