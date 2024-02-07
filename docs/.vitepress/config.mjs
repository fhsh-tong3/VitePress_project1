import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Tong's website",
  description: "tong's website home",
  themeConfig: {
    
    sidebar: [
      {
        text: 'ɴᴏᴛᴇs',
        items: [
          { text: '2024.1.31 notes', link: '/1-31notes.html' },
          { text: '2024.2.1 notes', link: '/2-1notes.html' },
          { text: 'network1-1', link: '/network1-1.html' },
          { text: 'network1-2', link: '/network1-2.html' }
        ]
      },
      {
        text: 'ᴏғғɪᴄɪᴀʟ ᴄᴏᴍᴘᴛɪᴀ sᴇᴄᴜʀɪᴛʏ+',
        items: [
          { text: 'lesson1', link: '/lesson1.html' },
          { text: 'lesson2', link: '/lesson2.html' }
        ]
      },
      {
        text: 'ᴄᴛғ',
        items: [
          { text: 'natas-ans', link:'/natas-ans.html'}
        ]
      },
      {
        text: 'ᴄʜᴀʟʟᴇɴɢᴇ 👩🏻‍💻',
        items: [
          { text: 'noting now' }
        ]
      }

    ],

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/fhsh-tong3' 
      },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16"><path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/></svg>',
          alt: 'Medium Icon'
        },
        link: 'https://medium.com/@zctongwow'
      }
    ]
    
  }
})
