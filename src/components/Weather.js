import React from 'react'
import { VictoryChart, VictoryLine } from 'victory'


function Weather() {


    return (
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
    )
}


export default Weather;
