var React = require('react');

var TestList = React.createClass({
  getInitialState : function() {
    return {
      users: [
        {id:1, name:"masahiko kubara"},
        {id:2, name:"keita moromizato"},
        {id:3, name:"hirofumi ootori"}
      ]
    };
  },

  render: function() {
    var list = this.state.users.map(function(user) {
      return <li key={user.id}><TestItem user={user} /></li>;
    });

    return <ul>{list}</ul>;
  }
});


var TestItem = React.createClass({
  propTypes: {
    user: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired
    })
  },

  render: function() {
    return (
      <div>
        <span>{this.props.user.name}</span>
      </div>
    );
  }
});

module.exports = TestList;
