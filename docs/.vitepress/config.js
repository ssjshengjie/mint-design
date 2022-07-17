module.exports = {
  title: 'Mint-Design',
  description: 'Mint-Design',
  themeConfig: {
    lastUpdated: '最后的更新时间',
    docsDir: '',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: '',
    footer: {
      message: "Released under the MIT License",
      coptright: "Copyright © 2022-present Mint-Design"
    },
    nav: [
      {
        text: "指南", link: '/guide/installation', activeMatch: '/guide/'
      },
      {
        text: "组件", link: '/component/icon', activeMatch: '/component/'
      }
    ],
    sidebar: {
      '/guide': [
        {
          text: "指南",
          items: [
            { text: "安装", link: '/guide/installation' },
            { text: "快速开始", link: '/guide/quieStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: "基础组件",
          items: [{ text: "Icon", link: '/component/icon' }]
        }
      ]
    }
  }
}