import React from 'react'
import { VictoryChart, VictoryLine, VictoryStack, VictoryHistogram } from 'victory'


function Weather() {
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];

    return (
    <div>    
        <VictoryChart
                domainPadding={{x:30, y:10}}
                width={1000}
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
            y="actual"
        
        />
        </VictoryChart>
        
        <VictoryChart

        domainPadding={{x:30, y:10}}
                width={1000}
                height={250}>
                <VictoryLine
            data={[
                {experiment: "1.1.", actual: 0, label: '0%'},
                {experiment: "2.1.", actual: 20, label: '20%'},
                {experiment: "3.1.", actual: 40, label: '40%'},
                {experiment: "4.1.", actual: 20, label: '20%'},
                {experiment: "5.1.", actual: 80, label: '80%'}
            ]}
            style={{data:
                    {stroke: "green", strokeWidth: 1}
            }}
            x="experiment"
            y="actual"
            />

    
        </VictoryChart>
    
        
        </div>
    )
}


export default Weather;
