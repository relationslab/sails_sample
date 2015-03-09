/**
* Tag.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'tags',
  attributes: {
    name: 'STRING',
    article_id: {
      model: 'article'
    }
  }

};

