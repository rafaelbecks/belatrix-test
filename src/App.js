import React, { useState, useEffect } from 'react';
import DefaultPlainFile from './data/DefaultPlainFile';
import { parseDataWithParent, parseData } from './utils';
import DataComponent from './components/DataComponent';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const [data, setData] = useState({});

  useEffect(() => {
    parseFile(DefaultPlainFile);
  }, []);

  const parseFile = (file) => {

    const deparments = []; const provinces = []; const districts = [];

    const lines = file.replace(/"/g,"").split('\n');

    lines.forEach((line) => {
      deparments.push(line.split('/')[0]);
      provinces.push(`${line.split('/ ')[1]}|${line.split('/')[0]}`);
      districts.push(`${line.split('/ ')[2]}|${line.split('/')[1]}`);
    })

    setData({
      deparments: parseData(deparments),
      provinces: parseDataWithParent(provinces),
      districts: parseDataWithParent(districts, true),
    })
  }

  const { provinces, districts, deparments } = data;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DataComponent 
        provinces={provinces}
        deparments={deparments}
        districts={districts}
      />
    </div>
  );
}

export default App;
