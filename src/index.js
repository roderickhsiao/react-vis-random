import React from 'react';
import {
  RadialChart,
} from 'react-vis';

const PROPS_BY_TYPE = {
  donut: {
    innerRadius: 12,
    radius: 20
  },
  'donut-focus': {
    innerRadius: 11,
    radius: 21
  }
};

const getChartData = (count) => {
  var data = [];
  for (var i = 0; i < count; i++) {
    data.push({
      angle: Math.floor((Math.random() * 10) + 1),
      title: `data-${i}`
    });
  }
  return data;
}

const isNil = (data) => (typeof data === undefined) || (data === null);
/**
 * Generic Line Chart Component
 */
class BRadialChart extends React.Component {
  static displayName = 'BRadialChart'

  static defaultProps = {
    height: 300,
    type: 'donut'
  }

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      focus: null
    };
    this.data = getChartData(10);
  }

  getDataWithStyle = (data) => {
    const {focus, active} = this.state;
    const {type} = this.props;

    return data.map((d) => {
      const isFocus = isNil(focus) ? true : (focus === d.title);
      var props;
      if (isFocus) {
        props = Object.assign({}, PROPS_BY_TYPE['donut-focus'], {opacity: 1});
      }
      else {
        props = Object.assign({}, PROPS_BY_TYPE.donut, {opacity: .6});
      }

      return Object.assign({}, props, d);
    });
  }

  render() {
    const {
      type,
      height,
      ...otherProps
    } = this.props;
    const propsByType = PROPS_BY_TYPE[type] || {};

    return (
      <div className="chart-wrapper-container">
        <RadialChart
          animation
          showLabels
          width={600}
          data={this.getDataWithStyle(this.data)}
          height={height}
          className="chart-wrapper"
          onValueMouseOver={v => this.setState({focus: v.title})}
          onSeriesMouseOut={v => this.setState({focus: null})}
          {...otherProps}
          {...propsByType}
        >
        </RadialChart>
      </div>
    );
  }
}

export default BRadialChart;
