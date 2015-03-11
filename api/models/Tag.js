/**
* Tag.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'tags',
  attributes: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: 'integer'
    },
    name: 'string',
    articles: {
      collection: 'article',
      via: 'tag_articles',
      through: 'articletag'
    }
  }

};

