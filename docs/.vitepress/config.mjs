import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "☺︎",
  description: "tong's website",
  themeConfig: {
    
    socialLinks: [
      {
        icon: {
          svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Z"/>
          </svg>,
          alt: 'Home Icon'
        },
        link: '/'
      }
    ],

    sidebar: [
      {
        text: 'ɴᴏᴛᴇs',
        items: [
          { text: '2024.1.31 notes', link: '/1-31notes.html' },
          { text: '2024.2.1 notes', link: '/2-1notes.html' }
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
          { text: 'noting now', link: '/' }
        ]
      },
      {
        text: 'ᴄʜᴀʟʟᴇɴɢᴇ 👩🏻‍💻',
        items: [
          { text: '', link: '/' }
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
