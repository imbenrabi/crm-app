import React from 'react';
import { BarChart, Bar, Legend, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';


function TopEmployees(props) {
    const data = props.data.sort((a, b) => b.sales - a.sales);

    return (
        <div id="topEmployee-chart">
            <h3>Top Employees</h3>
            <BarChart layout="vertical" width={500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sales" type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default TopEmployees;