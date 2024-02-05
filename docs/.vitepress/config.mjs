import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "good notes",
  description: "tong ' notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'notes',
        items: [
          { text: '2024.1.31 notes', link: '/1-31notes.html' },
          { text: '2024.2.1 notes', link: '/2-1notes.html' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fhsh-tong3' }
    ]
  }
})
