import React from 'react';
import DataContext from '../../context/DataContext';
import ResidencesTable from '../organisms/ResidencesTable/ResidencesTable';

export default function Residences() {
  return (
    <DataContext.Consumer>
      {(value) => <ResidencesTable {...value} />}
    </DataContext.Consumer>
  );
}
