/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  find: function(req, res) {
    var page = req.param('page');

    if (!page) {
      return res.send(400);
    }

    sails.controllers['api/article']._findArticles({page: page}, function(error, articles) {
      if (error) {
        return res.send(500);
      }

      res.view('homepage', {articles: articles});
    });
  }
};
