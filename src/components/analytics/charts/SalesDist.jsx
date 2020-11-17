import React from 'react';
import { BarChart, Bar, Legend, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';


function SalesDist(props) {
    const data = props.data;
    return (
        <div>
            <h3>Sales Per Country</h3>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" type="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#ffc658" />
            </BarChart>
        </div>
    );
}

export default SalesDist;