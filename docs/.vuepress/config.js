module.exports = {
  title: 'heyjs',
  description: '马上开始吧',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/web_accumulate/', // 这是部署到github相关的配置 
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {                
    nav:[            //导航栏配置
      { text: '主页', link: '/' },
      { text: 'javascript', link: '/blog/js/' },
      { text: 'vue', link: '/blog/vue/' },
      { text: 'md语法', link: '/blog/参考语法/' },
      { text: '百度一下', link: 'https://www.baidu.com' },
      // 可下拉列表
      {
        text: 'GitHub',
        items: [
          { 
            text: '地址1', 
            link: 'https://github.com/OBKoro1' 
          },
          {
            text: '地址2',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }        
    ],
    sidebar: [
      {
        title: 'javascript', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/blog/js/',
          '/blog/js/haha'
        ]
      },
      {
        title: 'vue', 
        collapsable: true,
        children: [
          '/blog/vue/'
        ]
      },
      {
        title: '参考语法', 
        collapsable: true,
        children: [
          '/blog/参考语法/'
        ]
      }
    ],
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    // displayAllHeaders: true 
  }
}




// genSidebarConfig('前端开发规范'),

// function genSidebarConfig(title) {
//   return [{
//     title,
//     collapsable: false,
//     children: [
//       '',
//       'html-standard',
//       'css-standard',
//       'js-standard',
//       'git-standard'
//     ]
//   }]
// }