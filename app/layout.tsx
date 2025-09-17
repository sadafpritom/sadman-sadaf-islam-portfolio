import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sadman Sadaf Islam - Technical Support Specialist & Unix Server Administrator',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Technical Support Specialist with expertise in Unix server administration, database management, and production support for financial systems. Based in Toronto, ON.',
  keywords: [
    'Technical Support',
    'Unix Server Administration',
    'Database Management',
    'Production Support',
    'Financial Systems',
    'Toronto',
  ],
  authors: [{ name: 'Sadman Sadaf Islam' }],
  creator: 'Sadman Sadaf Islam',
  openGraph: {
    title: 'Sadman Sadaf Islam - Technical Support Specialist',
    description:
      'Technical Support Specialist with expertise in Unix server administration, database management, and production support for financial systems.',
    url: 'https://www.sadmansadaf.com',
    siteName: 'Sadman Sadaf Islam Portfolio',
    images: [
      {
        url: '/images/preview.png', // 👈 stored in /public/images/preview.png
        width: 1200,
        height: 630,
        alt: 'Sadman Sadaf Islam Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sadman Sadaf Islam - Technical Support Specialist',
    description:
      'Technical Support Specialist with expertise in Unix server administration, database management, and production support for financial systems.',
    images: ['/images/preview.png'], // 👈 also points to /public/images/preview.png
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
