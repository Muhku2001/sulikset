import React from 'react'
import { VictoryChart, VictoryLine, VictoryStack, VictoryArea, VictoryScatter, VictoryTooltip, VictoryVoronoiContainer } from 'victory'


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
                height={250}
                containerComponent={<VictoryVoronoiContainer/>}
                >
                <VictoryLine
            data={[
                {experiment: "10.9.", actual: -10},
                {experiment: "12.9.", actual: -5},
                {experiment: "13.9.", actual: -0},
                {experiment: "15.9.", actual: +10}
            ]}
            style={{data:
                    {stroke: "tomato", strokeWidth: 5}
            }}
            x="experiment"
            y="actual"
        
        />
         <VictoryScatter
    style={{
      data: {fill: "blue"}, labels: {fill: "blue"}
    }}
    size={(datum, active) => active ? 5 : 3}
    labels={({ datum }) => datum.y}
    labelComponent={<VictoryTooltip/>}
    data={[
      {x: 1, y: -10},
      {x: 2, y: -5},
      {x: 3, y: 0},
      {x: 4, y: +10}
    ]}
  />
        </VictoryChart>
        
        <VictoryChart
    domainPadding={{x:30, y:10}}
            width={1000}
            height={250}
    events={[{
    childName: ["area-1", "area-2"],
    target: "data",
    eventHandlers: {
      onClick: () => {
        return [{
          childName: "area-4",
          mutation: (props) => {
            const fill = props.style.fill;
            return fill === "tsmoke" ? null : {style: {fill: "tsmoke"}};
          }
        }];
      }
    }
  }]}
>
  <VictoryStack>
    <VictoryArea name="area-1"
      data={[
        {x: "10.9", y: 2}, {x: "11.9", y: 3}, {x: "12.9", y: 5}, {x: "13.9", y: 4}
      ]}
      data={[
        {experiment: "10.9.", actual: 0, label: '0%'},
        {experiment: "11.9.", actual: 20, label: '20%'},
        {experiment: "12.9.", actual: 60, label: '60%'},
        {experiment: "13.9.", actual: 0, label: '0%'}
    ]}
    x="experiment"
    y="actual"
    />
    <VictoryArea name="area-2"
      data={[
        {x: "14.9", y: 1}, {x: "15.9", y: 4}, {x: "16.9", y: 5}, {x: "17.9", y: 7}
      ]}
      data={[
        {experiment: "14.9.", actual: 0, label: '0%'},
        {experiment: "15.9.", actual: 20, label: '20%'},
        {experiment: "16.9.", actual: 40, label: '40%'},
        {experiment: "17.9.", actual: 0, label: '0%'}
    ]}
    x="experiment"
    y="actual"
    />
  </VictoryStack>
</VictoryChart>
    
        
        </div>
    )
}


export default Weather;
