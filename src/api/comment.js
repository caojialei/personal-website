const express = require('express')
const apiRoutes = express.Router()

// 获取文章评论列表 todo 待修改
apiRoutes.get('/website/comment/listArticleComments', (req, res) => {
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
})
