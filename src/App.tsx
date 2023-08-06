import React, { useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import {  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import './App.css';

const endPoint = 'https://lossesdataprocessor.azurewebsites.net/api/GetData?code=JmpmzExq9HsNu5Sv4Wzseb6jJeFX5NSOPztjTPbvxsusAzFuy5iZsA==';

interface LossModel {
  Total: number;
  Date: Date;
}


const App : FunctionComponent = React.memo(() => {
  const [data, setDate] = React.useState<Array<LossModel>>([])

  useEffect(() => {

    axios.get(endPoint).then(response=>{
      setDate(response.data)
    });
    
  }, []);
  
  return(
    <div className="App">
      <header  className="App-header">
       <h1>Documenting Russian Equipment Losses During The Russian Invasion Of Ukraine</h1>
       <div style={{ width: '90%', height: 500 }}>
        <div>Total count of <b>Losses</b> vehicles and equipment</div>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis  type="number" domain={[0, 20000]}/>
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: '90%', height: 500, marginTop:50 }}>
        <div>Total count of <b>Captured</b> vehicles and equipment</div>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis  type="number" domain={[0, 20000]}/>
            <Tooltip />
            <Area type="monotone" dataKey="Captured" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

<div style={{ width: '90%', height: 500, marginTop:50 }}>
        <div>Total count of <b>Destroyed</b> vehicles and equipment</div>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis  type="number" domain={[0, 20000]}/>
            <Tooltip />
            <Area type="monotone" dataKey="Destroyed" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

        </header>
    
    </div>
  )
});

export default App;
