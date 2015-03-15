var React = require('react');
var ArticleList = require('./article/articleList.jsx');

React.render(<ArticleList fetch="/api/article/find"/>
  , document.getElementById('articleList')
);
