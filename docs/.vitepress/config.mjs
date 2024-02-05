import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "good notes",
  description: "tong's notes",
  themeConfig: {
    
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'notes',
        items: [
          { text: '2024.1.31 notes', link: '/1-31notes.html' },
          { text: '2024.2.1 notes', link: '/2-1notes.html' }
        ]
      },
      {
        text: 'Official CompTIA Security+ Student Guide-dual-notes',
        items: [
          { text: 'lesson1', link: '/lesson1.html' },
          { text: 'lesson2', link: '/lesson2.html' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fhsh-tong3' }
    ]
  }
})
