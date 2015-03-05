/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  find: function(req, res) {
    var id = req.param('id');

    if (!id) {
      return res.send(400);
    }

    sails.controllers['api/article']._findArticles({id: id}, function(error, articles) {
      if (error) {
        return res.send(500);
      }

      res.view('homepage', {articles: articles});
    });
  },

  findOne: function(req, res) {
    var id = Number(req.param('id'));

    if (!id) {
      return res.send(400);
    }

    //sails.controllers['api/article']._findArticles({}, function(error, article) {});

    sails.controllers['api/article']._findArticleOne({id: id}, function(error, article) {
      if (error) {
        //return res.send(500);
        res.view('500');
      }

      res.view('article', {article: article});
    });
  }
};
