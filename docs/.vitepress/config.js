const { getChildrenPlugins } = require('./utils')

module.exports = {
  title: '🍁枫林晚记丨个人前端知识体系',
  description: `稳扎稳打，专研原理，高楼基石`,
  lang: 'zh-CN',
  head: [],
  themeConfig: {
    repo: 'tflins/front-end-notes',
    docsBranch: 'main',
    editLinks: false,
    editLinkText: '为此页提供修改建议',
    displayAllHeaders: true,
    nav: [
      {
        text: '前端基础',
        items: [
          { text: 'JavaScript', link: '/前端基础/JavaScript/数据类型/数据类型' },
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
      '/前端基础/JavaScript': [
        {
          text: 'JavaScript',
          // children: [
          //   {
          //     text: '数据类型',
          //     children: [
          //       {
          //         text: '基本数据类型',
          //         link: '/前端基础/JavaScript/数据类型/数据类型'
          //       },
          //       {
          //         text: 'null 和 undefined',
          //         link: '/前端基础/JavaScript/数据类型/null 和 undefined'
          //       },
          //       {
          //         text: '判断数据类型',
          //         link: '/前端基础/JavaScript/数据类型/判断数据类型'
          //       },
          //       {
          //         text: '四则运算',
          //         link: '/前端基础/JavaScript/数据类型/四则运算'
          //       },
          //       {
          //         text: '== 和 ===',
          //         link: '/前端基础/JavaScript/数据类型/== 和 ==='
          //       }
          //     ]
          //   },
          //   {
          //     text: '原型、基础',
          //     children: [
          //       {
          //         text: '如何实现继承',
          //         link: '/前端基础/JavaScript/原型、继承/如何实现继承'
          //       }
          //     ]
          //   }
          // ]
          children: getChildrenPlugins('../前端基础/JavaScript')
        }
      ],
      '/前端基础/CSS': [
        {
          text: 'CSS',
          // children: [
          //   {
          //     text: '盒模型',
          //     link: '/前端基础/CSS/盒模型'
          //   }
          // ]
          children: getChildrenPlugins('../前端基础/CSS')
        }
      ],
      '/前端框架/vue': [
        { text: 'vue', children: getChildrenPlugins('../前端框架/vue') }
      ],
      '/前端工程化/模块化': [
        { text: '模块化', children: getChildrenPlugins('../前端工程化/模块化') }
      ],
      '/计算机网络/http': [
        { text: '模块化', children: getChildrenPlugins('../计算机网络/http') }
      ],
      '/前端安全': [
        { text: '前端安全', children: getChildrenPlugins('../前端安全') }
      ],
      '/算法与数据结构': [
        { text: '数据结构', children: getChildrenPlugins('../算法与数据结构/数据结构') }
      ]
    }
  }
}