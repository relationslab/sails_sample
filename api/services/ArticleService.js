module.exports = {

  /**
  * 記事の一覧を返す
  * options {
  *   where: 検索条件 例:{title: 'こんにちは'}
  *   page: ページ番号 例:1
  *   limit: ページあたりの件数 例:10
  *   sort: ソート順 例: name DESC
  *   comments: コメント有無 例: true
  * }
  **/
  findArticles: function(options) {

    var Promise = require("bluebird"); // ここでrequireしてて良いのか…？
    return new Promise(function (resolve, reject){
      var where = options.where || {};
      var page = options.page || 1;
      var limit = options.limit || 10;
      var sort = options.sort || 'createdAt DESC';
      var comments = options.comments || false;

      var find = Article.find().where(where).sort(sort).paginate({page: page, limit: limit}).populate('tags');

      if(comments){
        find = find.populate('comments');
      }

      find.then(function(articles){
        resolve(articles);
      }).catch(function(error){
        reject(error);
      });

    });

  },

  /**
  * タグから記事を取得する
  * options {
  *   where: 検索条件 例:{name: 'あいさつ'}
  *   page: ページ番号 例:1
  *   limit: ページあたりの件数 例:10
  *   sort: ソート順 例: name DESC
  * }
  **/
  findArticlesByTag: function(options, callback) {

    var Promise = require("bluebird");
    return new Promise(function (resolve, reject){

      var where = options.where || {};
      var page = options.page || 1;
      var limit = options.limit || 10;
      var sort = options.sort || 'name DESC';

      Tag.find().where(where).sort(sort).populate('articles').paginate({page: page, limit: limit}).then(function(tags){
        resolve(tags);
      }).catch(function(error){
        reject(error);
      });
    });

  },

  /**
  * コメントを取得する
  * options {
  *   where: 検索条件 例:{article_id: 1}
  *   page: ページ番号 例:1
  *   limit: ページあたりの件数 例:10
  *   sort: ソート順 例: created ASC
  * }
  **/
  findComments: function(options, callback) {

    var Promise = require("bluebird");
    return new Promise(function (resolve, reject){

      var where = options.where || {};
      var page = options.page || 1;
      var limit = options.limit || 10;
      var sort = options.sort || 'createdAt DESC';

      Comment.find().where(where).sort(sort).paginate({page: page, limit: limit}).then(function(comments){
        resolve(comments);
      }).catch(function(error){
        reject(error);
      });

    });

  },

};
