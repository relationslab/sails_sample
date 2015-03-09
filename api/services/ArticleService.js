module.exports = {

  /**
  * 記事の一覧を返す
  * options {
  *   page: ページ番号
  *   limit: ページあたりの件数
  * }
  **/
  findWithTags: function(options, callback) {

    var page = 1, limit = 10;
    if(options.page){
      page = options.page;
    }
    if(options.limit){
      limit = options.limit;
    }

    Article.find().populate('tags').paginate({page: page, limit: limit}).exec(function(error, articles) {
      callback(error, articles);
    });

  }

};
