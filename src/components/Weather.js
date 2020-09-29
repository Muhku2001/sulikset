import React, { useState } from 'react'
import { VictoryChart, VictoryLine, VictoryStack, VictoryArea, VictoryScatter, VictoryTooltip, VictoryVoronoiContainer, } from 'victory'


function Weather() {
  function convertUTDateToLocalDate(date){
    now Date(date.getTime()+date.getTimezoneOffset()*60*1000);
    return date;
  }

  // hakee päivämäärän.
  const today = new Date();
  // rakentaa päivämäärän muotoon: päivä.kuukausi.vuosi
  const date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();

  //hakee sään
  const initWeather = [];
  const [weather, setWeather] = useState(initWeather);

  //hakee kosteus/lämpö taulukon
  fetch('https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==&amount=50')
    .then(response => response.json())
    .then(json => setWeather([...json]));

  let humtempkey = 1;
  let chartTempDots = [];
  let chartDataTemp = [];
  let chartDataHum = [];


 //loop joka parseroi tietoja
  const rows = () => weather.slice(0, 24).reverse().map(temphum => {
    const fixedTime = String(convertUTDateToLocalDate(now Date(temphum.PublishedAt)));
    const measurementDate = temphum.PublishedAt.split('T')[0].split('-')[2] +'.'+ temphum.PublishedAt.split('T')[0].split('-')[1] +'.'+temphum.PublishedAt.split('T')[0].split('-')[0] 
    const time = fixedTine.split(' ')[4].split(':')[0] + "." + fixedTime.split(' ')[4].split(':')[1];
    chartDataHum.push({experiment: String( measurementTime), actual: parseInt(temphum.Hum), label: String(temphum.Hum.split(".")[0]+"%")});
    chartDataTemp.push({experiment: String( measurementTime), actual: parseInt(temphum.Temp)  })
    chartTempDots.push({x: parseInt(humtempkey++), y: parseInt(temphum.Temp) })
    return <div key={humtempkey}><b>Pvm: </b>{measurementDate}, <b>klo</b> {measurementTime}--- <b>Ilmankosteus: </b>{temphum.Hum.split('.')[0]}%---<b>Lämpötila: </b>{temphum.Temp.split('.')[0]}°C</div>
                                              
  })
  //lämpötila taulukko
  const showChartHum = chartDataHum;

 //kosteus taulukko
const showChartTemp = chartDataTemp;

console.log(chartTempDots);
const showTempDots = chartTempDots;
  return (
    <div align="center">

      <div>
        <h3>Piirrettävän chartin data</h3>
      </div>

      <div>
        <b> Tänään on: {date}</b>
      </div>

      <div>
        {rows()}
      </div>

      <h3>Lämpötila</h3>


      <VictoryChart

        domainPadding={{ x: 30, y: 10 }}
        width={1000}
        height={250}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryLine
          data={showChartTemp}
          style={{
            data:
              { stroke: "tomato", strokeWidth: 5 }
          }}
          x="experiment"
          y="actual"

        />
        <VictoryScatter
          style={{
            data: { fill: "blue" }, labels: { fill: "blue" }
          }}
          size={(active) => active ? 5 : 3}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip />}
          data={showTempDots}
        />
      </VictoryChart>

      <VictoryChart
        domainPadding={{ x: 1, y: 10 }}
        width={1300}
        height={350}
        events={[{
          childName: ["area-1"],
          target: "data",
          eventHandlers: {
            onClick: () => {
              return [{
                childName: "area-4",
                mutation: (props) => {
                  const fill = props.style.fill;
                  return fill === "tsmoke" ? null : { style: { fill: "tsmoke" } };
                }
              }];
            }
          }
        }]}
      >
        <VictoryStack>
          <VictoryArea name="area-1"
            data={showChartHum}
            x="experiment"
            y="actual"
          />
        </VictoryStack>
      </VictoryChart>


    </div>
  )
}


export default Weather;
