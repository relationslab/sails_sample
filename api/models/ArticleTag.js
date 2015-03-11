/**
* Articles_tags.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'articles_tags',
  tables: ['articles', 'tags'],
  junctionTable: true,

  attributes: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: 'integer'
    },
    article_tags: {
      columnName: 'article_id',
      type: 'integer',
      foreignKey: true,
      references: 'article',
      on: 'id',
      via: 'articles',
      groupBy: 'article'
    },
    tag_articles: {
      columnName: 'tag_id',
      type: 'integer',
      foreignKey: true,
      references: 'tag',
      on: 'id',
      via: 'tags',
      groupBy: 'tag'
    }
  }
};

