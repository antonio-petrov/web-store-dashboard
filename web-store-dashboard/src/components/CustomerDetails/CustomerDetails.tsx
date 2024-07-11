import React from 'react';
import LabelInput from '../LabelInput/LabelInput';

const CustomerDetails: React.FC = () => (
  <>
    <LabelInput label='Customer Terms Group' value='BUY1' />
    <LabelInput label='Payment Terms' value='45 Days' />
    <LabelInput label='Credit Limit' value='3 Days' />
    <LabelInput label='Customer Rep' value='Steve H' />
  </>
);

export default CustomerDetails;
