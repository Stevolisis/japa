import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgPrimary p-7`}>

        <header className='pb-5'>
          <h1 className='text-bgSecondary text-2xl'>
            <Link href='/' className='font-extrabold'>JAPA</Link>
          </h1>
        </header>

          {children}

      </body>
    </html>
  )
}
