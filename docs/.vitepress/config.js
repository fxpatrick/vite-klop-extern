import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'id-ID',
  title: 'Klearance Online',
  description: 'Aplikasi Pelaporan Bea Cukai',
  head:[['link', { rel: "shortcut icon", href: "/klearancelogo.ico"}]],

  lastUpdated: true,
  locales: {
    '/': {
      lang: 'id-ID',
      selectText: 'Bahasa Indonesia'
    },
    '/en/': {
      lang: 'en-US',
      selectText: 'English'
    }
  },
  themeConfig: {
    logo: '/klearancelogo.png',
    siteTitle: false,
    nav: nav(),
    sidebar: {
      '/klriuip': [
        {
          text: 'First Step',
          items: [
            { text: 'Eksternal', link: '/klriuip/usereksternal/' }, 
          ]
        },
        {
          text: 'Documents',
          items: [
            { text: 'PurchaseOrder', link: '/klriuip/dokumenpurchaseorder/' }, 
            { text: 'Shipment', link: '/klriuip/dokumeneshipment/' }, 
          ]
        }
      ]
    },
    footer: {
      message: 'Bea Cukai Lebih Baik',
      copyright: 'Copyright © 2022 PT Solusi Manufaktur Teknologi'
    }
  }
})

function nav() {
  return [
    { text: 'Klearance IU/IP', link: '/klriuip/usereksternal/', activeMatch: '/klriuip' },
  ]
}

