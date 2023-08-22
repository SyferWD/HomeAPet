import { Footer, NavBar } from '@/components'
import { poppins, roboto_flex } from './fonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomeAPet',
  description: 'Adoption and Rehoming made easy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto_flex.variable}`}>
      {/* <body className='bg-[url(/cool-background-2.svg)] bg-fix bg-cover'> */}
       <body className='min-h-screen'> 
        <NavBar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
