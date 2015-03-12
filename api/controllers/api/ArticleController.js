/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	// 外部公開API
	find: function(req, res) {
		// メタ情報の取得
		var page = req.headers.page;

		if (!page) {
			return res.send(400);
		}

		Article.find().exec(function(error, articles) {
			if (error) {
				return res.send(500);
			}

			res.send(articles);
		});
	}
};
