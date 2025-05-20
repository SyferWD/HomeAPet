import { Footer, NavBar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from './contexts/AuthContext'

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
    <html lang="en" className="font-sans">
       <AuthProvider>
        <body className='min-h-screen'> 
            <NavBar />
            <div>
              {children}
            </div>
            <Footer />
        </body>
      </AuthProvider>
    </html>
  )
}
