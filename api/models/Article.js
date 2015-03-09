/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'articles',
  attributes: {
    title: 'STRING',
    body: 'STRING',
    tags: {
      collection: 'tag',
      via: 'article_id'
    }
  }

};

