import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { positiveTempsData, negativeTempsData } from './temperatureData';

const DualLineChart = () => {
  const [combinedData, setCombinedData] = useState([]);
  
  useEffect(() => {
    // Create a map of all unique dates
    const allDates = new Set();
    positiveTempsData.forEach(item => allDates.add(item.date));
    negativeTempsData.forEach(item => allDates.add(item.date));
    
    // Create combined dataset with all dates
    const combined = Array.from(allDates).map(date => {
      const item1 = positiveTempsData.find(d => d.date === date);
      const item2 = negativeTempsData.find(d => d.date === date);
      
      return {
        date,
        value1: item1 ? item1.value1 : null,
        value2: item2 ? item2.value2 : null,
      };
    });
    
    // Sort by date
    combined.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
    
    setCombinedData(combined);
  }, []);
  
  // Updated to include year in date format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Estimated Seasonal Temperature Variations on 16 Psyche’s Surface</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={combinedData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatDate}
              tick={{ fill: '#6b7280' }}
              angle={-45}
              textAnchor="end"
              height={80}
              interval="preserveStartEnd"
            />
            <YAxis 
              tick={{ fill: '#6b7280' }}
              domain={[0, 'auto']}
              allowDataOverflow={false}
            />
            <Tooltip 
              labelFormatter={(label) => `Date: ${formatDate(label)}`}
              contentStyle={{ backgroundColor: '#f3f4f6', borderRadius: '0.375rem', border: 'none' }}
              cursor={{ strokeWidth: 2, stroke: '#9ca3af' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value1"
              stroke="#2563eb"
              strokeWidth={6}
              dot={false}
              activeDot={{ r: 6, fill: '#2563eb', stroke: '#fff', strokeWidth: 6 }}
              name="90° Latitude Temperatures"
              connectNulls
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#dc2626"
              strokeWidth={6}
              dot={false}
              activeDot={{ r: 6, fill: '#dc2626', stroke: '#fff', strokeWidth: 6 }}
              name="-90° Latitude Temperatures"
              connectNulls
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DualLineChart;