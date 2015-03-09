/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  find: function(req, res) {
/*
    sails.controllers['api/article']._findArticles({id: id}, function(error, articles) {
      if (error) {
        return res.send(500);
      }

      res.view('homepage', {articles: articles});
    });
*/
    res.view('article_list', { articles: [
      {
        id: 1,
        title: "引き出される環境",
        body: "こんにちは。加留部です。リレーションズでインターンを始めて半年が経過しました。僕自身、今の環境に身を置けることにとても感謝しています。今回は、チームのあり方についてこの半年で感じたことの一つを考えてみたいと思います。あなたのチームに、何かもやもやを感じていたり、あの人はもっとできるだろうにな、もったいないな、と思われているメンバーはいませんか？「どうすれば”もったいないメンバー”がいない、良いチームになるのか」というのは永遠のテーマでもありますが、今日はそこに注目します。メンバーそれぞれを最大限に活かしながら、しかも相乗効果まで生まれる、そんなチームワークを「引き出される環境」と名付けて、書いてみたいと思います。",
        tags: [
          { id: 1, name: "Relations", article_id: 1 }
        ]
      },
      {
        id: 2,
        title: "【募集中】COGOOの春期インターン！詳細公開します。",
        body: "こんにちは。COGOOチームの福里です。前回、ぺいぺい編集長のカワグチさんがお知らせしてくれましたが、COGOOでは春休みを1000倍おもしろくしたい学生を大募集しております。【大募集】 COGOOの本気インターン！春休みを10倍おもしろくしたい学生求ム!!恐らくこのブログを読んでくれている方は、COGOOインターンシップに興味を持っていてくださってるのだと思います。迷ったらやってみるのがイチバン！思い立ったが吉日！ちょっとでも興味を持った方は…つまり、このブログをお読みになった方は、必ずご応募くださいね。笑(/ω・＼)ﾁﾗｯ",
        tags: [
          { id: 1, name: "Relations", article_id: 2 },
          { id: 2, name: "COGOO", article_id: 2 }
        ]
      },
      {
        id: 3,
        title: "リレーションズが創る、プラスの一年",
        body: "こんにちは。 あけましておめでとうございます。 少しでもブログを訪れてくれた方、一度でもリレーションズに関わってくださった方、ありがとうございました。 本年も社員一同、お客様一社一社に寄り添い、サービスの質をあげていくことにこだわり抜いていきたいと思います。 引き続き、昨年同様の応援をよろしくお願いします。",
        tags: [
          { id: 1, name: "Relations", article_id: 3 }
        ]
      }
    ]});
  },

  findOne: function(req, res) {
    var id = Number(req.param('id'));

    if (!id) {
      return res.send(400);
    }

/*
    sails.controllers['api/article']._findArticleOne({id: id}, function(error, article) {
      if (error) {
        //return res.send(500);
        res.view('500');
      }

      res.view('article', {article: article});
    });
*/
    res.view('article', { article: {
      id: 1,
      title: "引き出される環境",
      body: "こんにちは。加留部です。リレーションズでインターンを始めて半年が経過しました。僕自身、今の環境に身を置けることにとても感謝しています。今回は、チームのあり方についてこの半年で感じたことの一つを考えてみたいと思います。あなたのチームに、何かもやもやを感じていたり、あの人はもっとできるだろうにな、もったいないな、と思われているメンバーはいませんか？「どうすれば”もったいないメンバー”がいない、良いチームになるのか」というのは永遠のテーマでもありますが、今日はそこに注目します。メンバーそれぞれを最大限に活かしながら、しかも相乗効果まで生まれる、そんなチームワークを「引き出される環境」と名付けて、書いてみたいと思います。",
      tags: [
        { id: 1, name: "testTag", article_id: 1 },
        { id: 2, name: "anotherTag", article_id: 1 }
      ],
      comments: [
        { id: 1, body: "Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, ", article_id: 1 },
        { id: 2, body: "ないす記事ですね！　テストのコメントです　テストのコメントです　テストのコメントです　テストのコメントです　テストのコメントです", article_id: 1 }
      ]
    }});
  }
};
