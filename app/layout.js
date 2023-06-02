import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300','400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});


export const metadata = {
  title: 'Portfolio',
  description: 'Welcome to my personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-zinc-900 px-4' lang="en">
      <body className={poppins.className} >{children}</body>
    </html>
  )
}
