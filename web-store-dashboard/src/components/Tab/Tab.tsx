import React from 'react';

interface TabProps {
  tab: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tab: React.FC<TabProps> = ({ tab, activeTab, setActiveTab }) => {
  return (
    <p
      className={`pb-2.25 mr-6 cursor-pointer ${
        activeTab === tab
          ? 'border-b-2 border-blue-500 mb-[-2px] text-light-grey-5'
          : 'hover:text-light-grey-5'
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </p>
  );
};

export default Tab;
