import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import Web3Mod from '@/providers/Web3Mod'


const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shard',
  description: 'Invest in your friends!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
          <Web3Mod>
              <ModalProvider/>
              <Sidebar>
              </Sidebar>
              {children}
            </Web3Mod>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
