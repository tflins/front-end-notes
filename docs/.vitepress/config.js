const { getChildrenPlugins } = require('./utils')

module.exports = {
  title: '🍁枫林晚记丨个人前端知识体系',
  description: `稳扎稳打，专研原理，高楼基石`,
  lang: 'zh-CN',
  head: [],
  base: '/notes/',
  themeConfig: {
    repo: 'tflins/front-end-notes',
    docsBranch: 'main',
    editLinks: false,
    editLinkText: '为此页提供修改建议',
    // displayAllHeaders: true,
    nav: [
      {
        text: '前端基础',
        items: [
          { text: 'JavaScript', link: '/前端基础/JavaScript/1-数据类型相关/1-数据类型' },
          { text: 'CSS', link: '/前端基础/CSS/盒模型' }
        ]
      },
      {
        text: '前端框架',
        items: [
          { text: 'vue', link: '/前端框架/vue/new vue 做了什么' }
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: '模块化', link: '/前端工程化/模块化/早期的模块化' }
        ]
      },
      {
        text: '计算机网络',
        items: [
          { text: 'http', link: '/计算机网络/http/http 常见状态码' }
        ]
      },
      {
        text: '前端安全',
        link: '/前端安全/XSS 跨站脚本伪造'
      },
      {
        text: '算法与数据结构',
        items: [
          { text: '数据结构', link: '算法与数据结构/数据结构/链表' }
        ]
      },
      {
        text: '博客',
        link: 'https://tflin.com/'
      }
    ],

    sidebar: {
      '/前端基础/JavaScript': getChildrenPlugins('../前端基础/JavaScript'),
      '/前端基础/CSS': getChildrenPlugins('../前端基础/CSS'),
      '/前端框架/vue': getChildrenPlugins('../前端框架/vue'),
      '/前端工程化/模块化': getChildrenPlugins('../前端工程化/模块化'),
      '/计算机网络/http': getChildrenPlugins('../计算机网络/http'),
      '/前端安全': getChildrenPlugins('../前端安全'),
      '/算法与数据结构': getChildrenPlugins('../算法与数据结构/数据结构')
    }
  }
}