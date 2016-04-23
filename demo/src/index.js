import React from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";
import rcl from "react-chart-all";

// sample page content
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var chart = this.props.data;
    return (
      <div>
        <rcl.SimpleChart data={chart} type={"line"}/>
        <rcl.SimpleChart data={chart} type={"bar"}/>
        <rcl.SimpleChart data={chart} type={"radar"}/>
        <rcl.SimpleChart data={chart} type={"polarArea"}/>
        <rcl.SimpleChart data={chart} type={"pie"}/>
        <rcl.SimpleChart data={chart} type={"doughnut"}/>
        <rcl.SimpleChart data={chart}/>
        <rcl.SimpleChart data={chart} type={"radar"}/>
        <rcl.SimpleChart data={chart} type={"bar"}/>
      </div>
    );
  }
}

// sample usage 1
/*
var chart = { msg: "test chart", osX: [], osY: [] };
for (var i=0,x=0; i<5; i++,x++) {
  chart.osX[i] = "id "+x;
  chart.osY[i] = x+5;
}
ReactDOM.render(
  <App data={chart}/>,
  document.getElementById('app')
);
*/

// sample usage 2
var chart = { msg: "testing random chart", osX: [], osY: [] };
function setRandomChart() {
  for (var i=0,x=0; i<8; i++,x++) {
    chart.osX[i] = "id "+x;
    chart.osY[i] = x*Math.random();
  }
  ReactDOM.render(
    <App data={chart}/>,
    document.getElementById('app')
  );
}
setInterval(() => { setRandomChart() }, 5000);
