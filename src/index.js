import React from 'react';
import ReactDOM from 'react-dom';

class SimpleChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chr: "init" };
  }

  render() {
    return (
      <div className="SimpleChart">
        <canvas id="canvas"></canvas>
      </div>
    );
  }

  componentDidMount() {
    var tpy = this.props.type || "line";

    if (
          tpy==="polarArea" ||
          tpy==="pie" ||
          tpy==="doughnut"
        ) {
      var ChartData = {};
      ChartData.datasets = [];
      ChartData.datasets[0] = {};
      ChartData.datasets[0].data = [];
      ChartData.datasets[0].backgroundColor = [];
      ChartData.labels = [];
      ChartData.datasets[0].label = this.props.data.msg || "";
      var items = this.props.data.osY.length;
      for (var i=0; i<items; i++) {
          var color = Math.round( i*(360/items) );
          ChartData.datasets[0].data[i] = this.props.data.osY[i];
          ChartData.datasets[0].backgroundColor[i] = "hsl("+color+",100%,50%)";
          ChartData.labels[i] = this.props.data.osX[i] || "";
      }
    } else {
      var ChartData = {
        labels : this.props.data.osX,
        datasets : [
          {
            label: this.props.data.msg,
            fillColor : "#F1F1F1",
            strokeColor : "#C1C1C1",
            pointColor : "#F1F1F1",
            pointStrokeColor : "#C1C1C1",
            pointHighlightFill : "#FFFFFF",
            pointHighlightStroke : "#A1A1A1",
            data : this.props.data.osY
          }
        ]
      };
    }

    // we ride on defaults here
    var GlobalOptions = {};

    var nde = ReactDOM.findDOMNode(this);
    var ctx = nde.getElementsByTagName("canvas")[0].getContext('2d');
    this.state.chr = new Chart(ctx, { type: tpy, data: ChartData, options: GlobalOptions });
  }

  componentDidUpdate() {
    for (var i=0; i<this.props.data.osY.length; i++) {
      this.state.chr.data.datasets[0].data[i] = this.props.data.osY[i];
    }
    this.state.chr.update();
  }
}

module.exports = { SimpleChart: SimpleChart };
