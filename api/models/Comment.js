/**
* Comments.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'comments',

  attributes: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: 'integer'
    },
    body: 'string',
    article_id: {
      model: 'article'
    }
  }

};
