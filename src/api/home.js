const express = require('express')
const apiRoutes = express.Router()

// info
apiRoutes.get('/website/user/getAuthorDetail', (req, res) => {
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
})

module.exports = apiRoutes
