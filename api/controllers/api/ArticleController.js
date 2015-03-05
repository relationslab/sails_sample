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

		this._findArticles({page: page}, function(error, articles) {
			if (error) {
				return res.send(500);
			}

			res.send(articles);
		});
	},
	// CallbackでJSONを返す内部関数
	_findArticles: function(data, callback) {
		Article.find().exec(function(error, articles) {
			callback(error, articles);
		});
	}
};
