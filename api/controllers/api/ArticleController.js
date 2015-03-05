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
		var id = req.headers.id;

		if (!id) {
			return res.send(400);
		}

		this._findArticles({id: id}, function(error, articles) {
			if (error) {
				return res.send(500);
			}

			res.send(articles);
		});
	},

	// CallbackでJSONを返す内部関数
	_findArticles: function(data, callback) {
		Article.find().exec(function(error, articles) {
			console.log(articles);
			callback(error, articles);
		});
	},

	_findArticleOne: function(data, callback) {
		console.log(data);
		Article.findOne(data).exec(function(error, article) {
			console.log(article);
			callback(error, article);
		});
	}
};
