const express = require('express')
const apiRoutes = express.Router()

// 获取文章分类列表
apiRoutes.get('/website/category/listCategory', (req, res) => {
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
          }
        ]

      }
    }
  )
})
