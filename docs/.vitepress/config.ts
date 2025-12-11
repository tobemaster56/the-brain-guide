import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TheBarin Manual & Knowledgebase",
  description: "连接每一个灵感瞬间。TheBarin 用户专属的智慧导航。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: '/en/user-guide' }
    ],

    sidebar: [
      {
        text: 'User Guide',
        items: [
          { text: 'Copy right', link: '/en/user-guide' },
          { text: 'Introduction', link: '/en/Introduction' },
          { text: 'Understanding Thought Relationships', link: '/en/Understanding-Thought-Relationships' },
          { text: 'Navigating Your Brain', link: '/en/Navigating-Your-Brain' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tobemaster56/the-brain-guide' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/user-guide'
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh/user-guide'
    }
  }
})
