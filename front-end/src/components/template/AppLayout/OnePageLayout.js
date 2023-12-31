import React from 'react';
import PageHeader from '../../organisms/PageHeader/PageHeader';

const OnePageLayout = ({ children }) => {
  return (
    <div className='main-container'>
      <PageHeader />
      <div className='page-content'>{children}</div>
    </div>
  );
};

export default OnePageLayout;
