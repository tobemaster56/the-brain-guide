import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TheBarin Knowledgebase",
  description: "Connecting every moment of inspiration. theBarin user-specific smart navigation.",
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
          { text: 'Customizing Your Brain\'s Environment', link: '/en/Customizing-Your-Brains-Environment' },
          { text: 'Creating Thoughts', link: '/en/Creating-Thoughts' },
          { text: 'Editing Thoughts and Links', link: '/en/Editing-Thoughts-and-Links' },
          { text: 'Customizing Thought and Link Properties', link: '/en/Customizing-Thought-and-Link-Properties' },
          { text: 'Advanced Navigation and Alternative Views', link: '/en/Advanced-Navigation-and-Alternative-Views' },
          { text: 'The Content Area', link: '/en/The-Content-Area' },
          { text: 'BrainBox', link: '/en/BrainBox' },
          { text: 'Producing Reports', link: '/en/Producing-Reports' },
          { text: 'Find and Replace', link: '/en/Find-and-Replace' },
          { text: 'Statistics', link: '/en/Statistics' },
          { text: 'Managing Events', link: '/en/Managing-Events' },
          { text: 'TheBrain Icons', link: '/en/TheBrain-Icons' },
          { text: 'Online Menu Options', link: '/en/Online-Menu-Options' },
          { text: 'Using Mobile Versions of TheBrain', link: '/en/Using-Mobile-Versions-of-TheBrain' },
          { text: 'Share, Synchronize, and Back Up Your Brains', link: '/en/Share-Synchronize-and-Back-Up-Your-Brains' },
          { text: 'Importing Information into Your Brain', link: '/en/Importing-Information-into-Your-Brain' },
          { text: 'Encrypting Individual File Attachments', link: '/en/Encrypting-Individual-File-Attachments' },
          { text: 'Exporting', link: '/en/Exporting' },
          { text: 'TheBrain API', link: '/en/TheBrain-API' },
          { text: 'Glossary', link: '/en/Glossary' },
          { text: 'Download', link: '/en/download' },
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
      label: '简体中文',
      lang: 'zh',
      link: '/zh/user-guide'
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/user-guide'
    }
  }
})
