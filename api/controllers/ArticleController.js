/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  find: function(req, res) {
    sails.api('article').find(req, function(err, articles) {
      if (err){
        return res.view(500);
      }

      return res.view('article_list', {articles: articles});
    });
  },

  findOne: function(req, res) {
/*
    var id = Number(req.param('id'));
    if (!id) {
      return res.send(400);
    }

    sails.api('article').find({id:id}, function(err, articles) {
      if (err){
        return res.view(500);
      }

      return res.view('article', {articles: articles});
    });
*/
    return res.view(500);
  }
};
