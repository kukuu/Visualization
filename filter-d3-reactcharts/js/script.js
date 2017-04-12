'use strict';

var SetIntervalMixin = {
  componentWillMount: function componentWillMount() {
    this.intervals = [];
  },
  setInterval: function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function () {
    this.intervals.push(setInterval.apply(null, arguments));
  }),
  componentWillUnmount: function componentWillUnmount() {
    this.intervals.map(clearInterval);
  }
};

var Rect = React.createClass({
  displayName: 'Rect',

  mixins: [SetIntervalMixin],
  getDefaultProps: function getDefaultProps() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
  },

  getInitialState: function getInitialState() {
    return {
      milliseconds: 0,
      height: 0
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return this.props.height !== this.state.height;
  },

  componentWillMount: function componentWillMount() {
    console.log('will mount');
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({ milliseconds: 0, height: this.props.height });
  },

  componentDidMount: function componentDidMount() {
    this.setInterval(this.tick, 10);
  },

  tick: function tick(start) {
    this.setState({ milliseconds: this.state.milliseconds + 10 });
  },

  render: function render() {
    var easyeasy = d3.ease('back-out');
    var height = this.state.height + (this.props.height - this.state.height) * easyeasy(Math.min(1, this.state.milliseconds / 1000));
    var y = this.props.height - height + this.props.y;
    return React.createElement('rect', { className: 'bar',
      height: height,
      y: y,
      width: this.props.width,
      x: this.props.x
    });
  }
});

var Bar = React.createClass({
  displayName: 'Bar',

  getDefaultProps: function getDefaultProps() {
    return {
      data: []
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  },

  render: function render() {
    var props = this.props;
    var data = props.data.map(function (d) {
      return d.y;
    });

    var yScale = d3.scale.linear().domain([0, d3.max(data)]).range([0, this.props.height]);

    var xScale = d3.scale.ordinal().domain(d3.range(this.props.data.length)).rangeRoundBands([0, this.props.width], 0.05);

    var bars = data.map(function (point, i) {
      var height = yScale(point),
          y = props.height - height,
          width = xScale.rangeBand(),
          x = xScale(i);

      return React.createElement(Rect, { height: height,
        width: width,
        x: x,
        y: y,
        key: i });
    });

    return React.createElement(
      'g',
      null,
      bars
    );
  }
});

var Chart = React.createClass({
  displayName: 'Chart',

  render: function render() {
    return React.createElement(
      'svg',
      { width: this.props.width,
        height: this.props.height },
      this.props.children
    );
  }
});

var Axis = React.createClass({
  displayName: 'Axis',

  render: function render() {
    return React.createElement('g', null);
  }
});

var all = [{ x: 'a', y: 20 }, { x: 'b', y: 14 }, { x: 'c', y: 12 }, { x: 'd', y: 19 }, { x: 'e', y: 18 }, { x: 'f', y: 15 }, { x: 'g', y: 10 }, { x: 'h', y: 14 }];

var filtered = [{ x: 'a', y: 9 }, { x: 'b', y: 5 }, { x: 'c', y: 6 }, { x: 'd', y: 12 }, { x: 'e', y: 10 }, { x: 'f', y: 7 }, { x: 'g', y: 4 }, { x: 'h', y: 9 }];

var App = React.createClass({
  displayName: 'App',

  getDefaultProps: function getDefaultProps() {
    return {
      width: 500,
      height: 500
    };
  },

  getInitialState: function getInitialState() {
    return {
      data: all
    };
  },

  showAll: function showAll() {
    this.setState({ data: all });
  },

  filter: function filter() {
    this.setState({ data: filtered });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'selection' },
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            { onClick: this.showAll },
            'All'
          ),
          React.createElement(
            'li',
            { onClick: this.filter },
            'Filter'
          )
        )
      ),
      React.createElement('hr', null),
      React.createElement(
        Chart,
        { width: this.props.width,
          height: this.props.height },
        React.createElement(Bar, { data: this.state.data,
          width: this.props.width,
          height: this.props.height })
      )
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));