var React = require('react');
var Fetch = require('whatwg-fetch');
var TagList = require('../tag/tagList.jsx');


var ArticleList = React.createClass({
  getInitialState : function() {
    return {
      articles: []
    };
  },

  componentDidMount : function() {
    var this_ = this;
    fetch(this.props.fetch)
      .then(function(res){
        return res.json();
      }).then(function(json){
        this_.setState({
          articles: json
        });
      }).catch(function(e){
        console.log(e);
      });
  },

  render: function() {
    var list = this.state.articles.map(function(article) {
      return <li key={article.id} className="articleList_item"><ArticleListItem article={article} /></li>;
    });

    return <ul className="articleList articleList_list">{list}</ul>;
  }
});


var ArticleListItem = React.createClass({
  propTypes: {
    article: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string,
      body: React.PropTypes.string,
      tags: React.PropTypes.array
    })
  },

  render: function() {
    return (
      <div>
        <h1 className="articleList_title">
          <a className="articleList_title_link" href={"/article/"+this.props.article.id}>{this.props.article.title}</a>
        </h1>

        <TagList tags={this.props.article.tags} />

        <div className="articleList_body">
          <p className="articleList_body_text">{this.props.article.body}</p>　
          <a className="articleList_body_link" href={"/article/"+this.props.article.id}>続きを読む→</a>
        </div>
      </div>
    );
  }
});



module.exports = ArticleList;
