import React from 'react'
import { VictoryChart, VictoryLine } from 'victory'


function Weather() {
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];

    return (
    <div>    
        <VictoryBar
        data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
      />
        <VictoryChart
            domainPadding={{x:30, y:10}}
                width={10000}
                height={250}>
            <VictoryLine


        
        
            data={[
                {experiment: "1.1.", actual: -10},
                {experiment: "2.1.", actual: -5},
                {experiment: "3.1.", actual: -0},
                {experiment: "1.1.", actual: +5},
                {experiment: "2.1.", actual: +10}
                
            ]}
            style={{data:
                    {stroke: "green", strokeWidth: 1}
            }}
            x="experiment"
            y="experiment"
        
        />
        </VictoryChart>
        </div>
    )
}


export default Weather;
