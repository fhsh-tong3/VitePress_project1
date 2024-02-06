import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "notes",
  description: "tong's notes",
  themeConfig: {
    
    nav: [
      { text: 'Home', link: '/' }
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
      { icon: 'github', link: 'https://github.com/fhsh-tong3' },
      { icon: 'medium', link: 'https://medium.com/@zctongwow' }
    ]
  }
})
