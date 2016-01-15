// HOC
var Container = function(Component) {
  return React.createClass({
    getInitialState: function() {
      return {
        data: []
      };
    },

    componentDidMount: function() {
      // do some ajax stuff or
      // other connections
      this.setState({
        data: ['Alan Turing', 'Ada Lovelace', 
        'Edsger Dijkstra', 'Donald Knuth', 'Grace Hopper']
      });
    },

    render: function() {
      return (
        React.createElement('div', null, 
          React.createElement(Component, { data: this.state.data })
        )
      );
    }
  });
}

var List = React.createClass({
  _renderList: function() {
    return this.props.data.map(function(item, i) {
      return React.createElement('li', { key: i }, item);
    });
  },

  render: function() {
    return (
      React.createElement('ul', null, this._renderList())
    );
  }
})

ReactDOM.render(
  React.createElement(Container(List)),
  document.getElementById('root')
);