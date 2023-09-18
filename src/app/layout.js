import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Umang Sailor',
  description: 'Potofolio Application of UmangSailor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><div className='container'>
        <div className='wrapper'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </div>
        </body>
    </html>
  )
}
