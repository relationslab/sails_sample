var React = require('react');


var TagList = React.createClass({
  getInitialState : function() {
    return {
      tags: []
    };
  },

  render: function() {
    var list = this.props.tags.map(function(tag) {
      return <li key={tag.id} className="c_tagItem articleList_tagItem"><TagListItem tag={tag} /></li>;
    });

    return <ul className="c_tagList articleList_tagList">{list}</ul>;
  }
});


var TagListItem = React.createClass({
  propTypes: {
    tag: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string
    })
  },

  render: function() {
    return (
      <div>
        {this.props.tag.name}
      </div>
    );
  }
});



module.exports = TagList;
