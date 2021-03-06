/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'articles',
  attributes: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: 'integer'
    },
    title: 'string',
    body: 'string',
    tags: {
      collection: 'tag',
      via: 'article_tags',
      through: 'articletag'
    },
    comments : {
      collection: 'comment',
      via: 'article_id'
    }
  }

};

