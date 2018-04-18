const express = require('express')
const apiRoutes = express.Router()
// const marked = require('marked')

// 获取文章列表
apiRoutes.post('/website/article/listArticle', (req, res) => {
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
            'title': '集合番@LinkedHashSet一文通（1.7版）',
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
})

// 获取文章详情
apiRoutes.post('/website/article/getArticleDetail', (req, res) => {
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
})
// // articleDetail
// apiRoutes.get('/website/articleDetail', (req, res) => {
//
//   readFile.readFile(function(err,data){
//     if (err) {
//       console.error(err);
//     }
//     res.send(marked(data))
//     // res.json(
//     //     {
//     //         "respCode": "0000",
//     //         "respMsg": "操作成功",
//     //         "author":" 黄志鹏kira",
//     //         "content":marked(data)
//     //     }
//     // )
//   });
// })
