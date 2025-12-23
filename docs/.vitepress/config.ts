import { defineConfig } from 'vitepress'

// v14 英文用户指南侧边栏
const v14EnSidebar = [
  {
    text: 'User Guide',
    items: [
      { text: 'Copyright', link: '/v14/en/' },
      { text: 'Introduction', link: '/v14/en/Introduction' },
      { text: 'Understanding Thought Relationships', link: '/v14/en/Understanding-Thought-Relationships' },
      { text: 'Navigating Your Brain', link: '/v14/en/Navigating-Your-Brain' },
      { text: 'Customizing Your Brain\'s Environment', link: '/v14/en/Customizing-Your-Brains-Environment' },
      { text: 'Creating Thoughts', link: '/v14/en/Creating-Thoughts' },
      { text: 'Editing Thoughts and Links', link: '/v14/en/Editing-Thoughts-and-Links' },
      { text: 'Customizing Thought and Link Properties', link: '/v14/en/Customizing-Thought-and-Link-Properties' },
      { text: 'Advanced Navigation and Alternative Views', link: '/v14/en/Advanced-Navigation-and-Alternative-Views' },
      { text: 'The Content Area', link: '/v14/en/The-Content-Area' },
      { text: 'BrainBox', link: '/v14/en/BrainBox' },
      { text: 'Producing Reports', link: '/v14/en/Producing-Reports' },
      { text: 'Find and Replace', link: '/v14/en/Find-and-Replace' },
      { text: 'Statistics', link: '/v14/en/Statistics' },
      { text: 'Managing Events', link: '/v14/en/Managing-Events' },
      { text: 'TheBrain Icons', link: '/v14/en/TheBrain-Icons' },
      { text: 'Online Menu Options', link: '/v14/en/Online-Menu-Options' },
      { text: 'Using Mobile Versions of TheBrain', link: '/v14/en/Using-Mobile-Versions-of-TheBrain' },
      { text: 'Share, Synchronize, and Back Up Your Brains', link: '/v14/en/Share-Synchronize-and-Back-Up-Your-Brains' },
      { text: 'Importing Information into Your Brain', link: '/v14/en/Importing-Information-into-Your-Brain' },
      { text: 'Encrypting Individual File Attachments', link: '/v14/en/Encrypting-Individual-File-Attachments' },
      { text: 'Exporting', link: '/v14/en/Exporting' },
      { text: 'TheBrain API', link: '/v14/en/TheBrain-API' },
      { text: 'Glossary', link: '/v14/en/Glossary' },
      { text: 'Download', link: '/v14/en/download' },
    ]
  }
]

// v14 简体中文用户指南侧边栏
const v14ZhSidebar = [
  {
    text: '用户指南',
    items: [
      { text: '版权声明', link: '/v14/zh/' },
      // { text: '简介', link: '/v14/zh/Introduction' },
    ]
  }
]

// v14 繁体中文用户指南侧边栏
const v14ZhTWSidebar = [
  {
    text: '使用者指南',
    items: [
      { text: '版權聲明', link: '/v14/zh-TW/' },
      // { text: '簡介', link: '/v14/zh-TW/Introduction' },
    ]
  }
]

// v15 英文用户指南侧边栏（待填充）
const v15EnSidebar = [
  {
    text: 'User Guide (v15)',
    items: [
      { text: 'Overview', link: '/v15/en/' },
    ]
  }
]

// v15 简体中文用户指南侧边栏（待填充）
const v15ZhSidebar = [
  {
    text: '用户指南 (v15)',
    items: [
      { text: '概述', link: '/v15/zh/' },
    ]
  }
]

// v15 繁体中文用户指南侧边栏（待填充）
const v15ZhTWSidebar = [
  {
    text: '使用者指南 (v15)',
    items: [
      { text: '概述', link: '/v15/zh-TW/' },
    ]
  }
]

// 用户案例侧边栏
const userCasesEnSidebar = [
  {
    text: 'User Cases',
    items: [
      { text: 'Overview', link: '/user-cases/en/' },
    ]
  }
]

const userCasesZhSidebar = [
  {
    text: '用户案例',
    items: [
      { text: '概述', link: '/user-cases/zh/' },
    ]
  }
]

const userCasesZhTWSidebar = [
  {
    text: '用戶案例',
    items: [
      { text: '概述', link: '/user-cases/zh-TW/' },
    ]
  }
]

// 精选脑图侧边栏
const brainMapsEnSidebar = [
  {
    text: 'Brain Maps',
    items: [
      { text: 'Gallery', link: '/brain-maps/en/' },
    ]
  }
]

const brainMapsZhSidebar = [
  {
    text: '精选脑图',
    items: [
      { text: '展示', link: '/brain-maps/zh/' },
    ]
  }
]

const brainMapsZhTWSidebar = [
  {
    text: '精選腦圖',
    items: [
      { text: '展示', link: '/brain-maps/zh-TW/' },
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TheBrain Knowledgebase",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  description: "Connecting every moment of inspiration. TheBrain user-specific smart navigation.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'v14',
        items: [
          { text: 'v14 (Current)', link: '/v14/en/' },
          { text: 'v15 (Next)', link: '/v15/en/' }
        ]
      },
      { text: 'User Guide', link: '/v14/en/' },
      { text: 'User Cases', link: '/user-cases/en/' },
      { text: 'Brain Maps', link: '/brain-maps/en/' }
    ],

    sidebar: {
      // v14 用户指南
      '/v14/en/': v14EnSidebar,
      '/v14/zh/': v14ZhSidebar,
      '/v14/zh-TW/': v14ZhTWSidebar,
      // v15 用户指南
      '/v15/en/': v15EnSidebar,
      '/v15/zh/': v15ZhSidebar,
      '/v15/zh-TW/': v15ZhTWSidebar,
      // 用户案例
      '/user-cases/en/': userCasesEnSidebar,
      '/user-cases/zh/': userCasesZhSidebar,
      '/user-cases/zh-TW/': userCasesZhTWSidebar,
      // 精选脑图
      '/brain-maps/en/': brainMapsEnSidebar,
      '/brain-maps/zh/': brainMapsZhSidebar,
      '/brain-maps/zh-TW/': brainMapsZhTWSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tobemaster56/the-brain-guide' }
    ]
  },
  sitemap: {
    hostname: 'https://thebrain.ourpkm.com'
  }
})
