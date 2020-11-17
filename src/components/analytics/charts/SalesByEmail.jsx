import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';


function SalesByEmail(props) {
    const data = props.data.sort((a, b) => a.count - b.count);
    const fillColors = { 'A': '#ffc658', 'B': '#82ca9d', 'C': '#83a6ed', 'D': '#d0ed57' };
    data.forEach(d => {
        d.fill = fillColors[d.type];
        d.name = `Type ${d.type}`;
    });

    return (
        <div>
            <h3>Sales By Email Type</h3>
            <RadialBarChart
                width={500}
                height={325}
                innerRadius="10%"
                outerRadius="80%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='count' />
                <Legend iconSize={10} width={100} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
            </RadialBarChart>
        </div>
    );
}

export default SalesByEmail;