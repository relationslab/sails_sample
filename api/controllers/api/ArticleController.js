/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	// 外部公開API
	find: function(req, res) {
		ArticleService.findArticles().then(function(articles) {
			res.send(articles);
		}).catch(function(error){
			res.send(500);
		});
	}
};
