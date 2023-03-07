import { vscode } from "./vscode"

export const FONT_ID = {
  'Hand-drawn': 'Virgil',
  'Normal': 'Cascadia',
  'Code': 'Assistant',
} as const

const rewriteFont = (fontFamily: string, fontUrl: string, fontType = 'font/woff2') => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = fontUrl
  link.as = 'font'
  link.type = fontType
  // link.crossOrigin = 'anonymous'
  document.head.appendChild(link)

  const style = document.createElement('style')
  style.innerHTML = `
    @font-face {
      font-family: "${fontFamily}";
      src: url("${fontUrl}");
      font-display: swap;
    }
  `
  document.head.appendChild(style)
}

const rewriteAllFont = async () => {
  // const { customFont = {} } = await getSettings()
  // for (const [name, url] of Object.entries(customFont)) {
  //   if (url) rewriteFont(FONT_ID[name as keyof typeof FONT_ID], url)
  // }
  // rewriteFont(FONT_ID["Hand-drawn"], 'https://pocket.haydenhayden.com/font/chinese.woff2')



  rewriteFont(FONT_ID["Hand-drawn"], './chinese.woff2')
  // rewriteFont(FONT_ID["Hand-drawn"], 'file:///Users/Hayden/Downloads/chinese.woff2')
}

export default rewriteAllFont