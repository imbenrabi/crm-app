import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


function SalesTrend(props) {
    const data = props.data;

    return (
        <div>
            <h3>Contacts Per Month</h3>
            <LineChart width={730} height={200} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" legendType='none' />
            </LineChart>
        </div>
    );
}

export default SalesTrend;