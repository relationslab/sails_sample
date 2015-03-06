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

    sails.api('article').find(req, function(err, articles) {
      res.view('homepage', {articles: articles});
    });
  }
};
