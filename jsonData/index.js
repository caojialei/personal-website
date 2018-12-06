exports.getResJson = function (app) {
  // article
  // 获取文章列表
  app.post('/website/article/listArticle', function (req, res) {
    res.json(
      {
        'respCode': 0,
        'respMsg': '成功',
        'data': {
          'total': 8,
          'pageSize': 5,
          'pageNo': 1,
          'articleList': [
            {
              'originalUrl': 'https://www.zybuluo.com/kiraSally/note/825758',
              'counts': 0,
              'author': '黄志鹏kira',
              'id': '11111',
              'content': 'Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见',
              'title': '集合番@LinkedHashSet一文通（1.7版）2',
              'createTime': '2017-07-24T02:53:13.006Z',
              'updateTime': '2018-03-27T03:18:35.528Z',
              'tags': [
                {
                  'title': 'Java'
                }
              ]
            },
            {
              'originalUrl': 'https://www.zybuluo.com/kiraSally/note/825758',
              'counts': 0,
              'author': '黄志鹏kira',
              'id': '11111',
              'content': 'Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见',
              'title': '集合番@LinkedHashSet一文通（1.7版）2',
              'createTime': '2017-07-24T02:53:13.006Z',
              'updateTime': '2018-03-27T03:18:35.528Z',
              'tags': [
                {
                  'title': 'Java'
                }
              ]
            },
            {
              'originalUrl': 'https://www.zybuluo.com/kiraSally/note/825758',
              'counts': 0,
              'author': '黄志鹏kira',
              'id': '11111',
              'content': 'Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入Java线程间的通信由Java内存模型(JMM)控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见',
              'title': '集合番@LinkedHashSet一文通（1.7版）2',
              'createTime': '2017-07-24T02:53:13.006Z',
              'updateTime': '2018-03-27T03:18:35.528Z',
              'tags': [
                {
                  'title': 'Java'
                }
              ]
            }
          ]
        }
      }
    )
  });
  // 获取文章详情
  app.post('/website/article/getArticleDetail', function (req, res) {
    res.json(
      {
        'respCode': 0,
        'respMsg': '操作成功',
        'data': {
          'author': '黄志鹏kira',
          'id': '11111',
          'title': '并发番@AbstractQueuedSynchronizer一文',
          'isFavorite': 0,
          'content': '> * 1.7采用数组+链表的结构，即使哈希函数取得再好，也很难达到元素百分百均匀分布',
          'createTime': '2017-07-24T02:53:13.006Z',
          'updateTime': '2018-03-27T03:18:35.528Z',
          'tags': [
            {
              'title': '并发'
            }
          ]
        }
      }
    )
  });
  // category
  // 获取文章分类列表
  app.get('/website/category/listCategory', function (req, res) {
    res.json(
      {
        'respCode': 0,
        'respMsg': '操作成功',
        'data': {
          'categoryList': [
            {
              'name': '并发番',
              'articleCounts': 242,
              'id': '111'
            },
            {
              'name': '并发番2',
              'articleCounts': 242,
              'id': '222'
            },
            {
              'name': '并发番3',
              'articleCounts': 242,
              'id': '333'
            }
          ]

        }
      }
    )
  });
  // listTag
  // 获取文章标签列表
  app.get('/website/tag/listTag', function (req, res) {
    res.json(
      {
        'respCode': 0,
        'respMsg': '操作成功',
        'data': {
          'tagList': [
            {
                'id':1,
                'name':'设计模式',
                'count':11
            },
            {
              'id':2,
              'name':'设计模式2',
              'count':22
            },
            {
              'id':3,
              'name':'设计模式3',
              'count':33
            }
          ]
        }
      }
    )
  });
  // comment
  // 获取文章评论列表 todo 待修改
  app.get('/website/comment/listArticleComments', function (req, res) {
    res.json(
      {
        'respCode': 0,
        'respMsg': '请求成功',
        'data': {
          'total': 30,
          'commentList': [
            {
              'c_user_name': '萌萌',
              'c_id': '201801',
              'c_user_id': '170201',
              'c_content': '写的真好！值得学习',
              'c_quote': '待补充：划线评论',
              'createdCt': '2018-04-12 09:55:10',
              'likes_count': 4,
              'reply_list': [
                {
                  'r_user_name': '小白菜',
                  'r_c_user_name': '萌萌',
                  'r_c_id': '201801',
                  'r_id': '180412',
                  'r_user_id': '180412',
                  'r_content': '我也是这么觉得的',
                  'createdRt': '2018-04-13 09:55:10'
                }
              ]
            }
          ]
        }
      }
    )
  });
  // home
  // 作者信息
  app.get('/website/user/getAuthorInfo', function (req, res) {
    res.json(
      {
        'respCode': 0,
        'respMsg': '操作成功',
        'data': {
          'userName': 'kiraSally',
          'selfDescription': '正儿八经的Java攻城狮一枚，但因媳妇缘故而对前端兴趣浓厚 . 笔者原创文章统一使用CmdMarkdown编写，以分享形式展示，希望看官们多多指导',
          'community': [
            {
              'name': 'github',
              'url': 'https://github.com/kiraGitHub'
            }
          ]
        }
      }
    )
  });
};
