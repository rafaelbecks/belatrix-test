import React from 'react';
import { JsonToTable } from 'react-json-to-table';

const DataComponent = ({ districts, provinces, deparments }) => {
    return (
      <div className="App-content">
        <h3>Departamentos</h3>
        <JsonToTable json={deparments} />
        <h3>Provincias</h3>
        <JsonToTable json={provinces} />
        <h3>Distritos</h3>
        <JsonToTable json={districts} />
      </div>
    );
};

export default DataComponent;
