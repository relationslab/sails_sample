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
  findArticles: function(options, callback) {

    var where = {}, page = 1, limit = 10, sort = 'created DESC', comments = false;
    if(options.where){
      where = options.where;
    }
    if(options.page){
      page = options.page;
    }
    if(options.limit){
      limit = options.limit;
    }
    if(options.sort){
      sort = options.sort;
    }
    if(options.comments){
      comments = options.comments;
    }

    var statement = Article.find().where(where).populate('tags').paginate({page: page, limit: limit, sort: sort});

    if(comments){
      statement = statement.populate('comments');
    }
    statement.exec(function(error, articles) {
      callback(error, articles);
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

    var where = {}, page = 1, limit = 10, sort = 'name DESC';
    if(options.where){
      where = options.where;
    }
    if(options.page){
      page = options.page;
    }
    if(options.limit){
      limit = options.limit;
    }
    if(options.sort){
      sort = options.sort;
    }

    Tag.find().where(where).populate('articles').paginate({page: page, limit: limit, sort: sort}).exec(function(error, tags) {
      callback(error, tags);
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

    var where = {}, page = 1, limit = 10, sort = 'created DESC';
    if(options.where){
      where = options.where;
    }
    if(options.page){
      page = options.page;
    }
    if(options.limit){
      limit = options.limit;
    }
    if(options.sort){
      sort = options.sort;
    }

    Comment.find().where(where).paginate({page: page, limit: limit, sort: sort}).exec(function(error, comments) {
      callback(error, comments);
    });

  },

};
