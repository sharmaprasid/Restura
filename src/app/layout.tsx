import Footer from './components/Footer'
import LocationFooter from './components/LocationFooter'
import Navbar from './components/Navbar'
import TopNavbar from './components/TopNavbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Restura',
  description: 'TAste the best',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <TopNavbar />

        <Navbar />





        {children}
        <LocationFooter />
        <Footer />
      </body>
    </html>
  )
}
