import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Google Meets Who?',
    description: 'New Way to Meet People',
    icons: {
        icon: '/icons/logo.svg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <ClerkProvider
                appearance={{
                    layout: {
                        logoImageUrl: '/icons/zoom-logo.svg',
                        socialButtonsVariant: 'iconButton',
                    },
                    variables: {
                        colorText: '#FFFF',
                        colorPrimary: '#0E78F9',
                        colorBackground: '#1C1F2E',
                        colorInputBackground: '#252A41',
                        colorInputText: '#FFFF',
                    },
                }}
            >
                <body className={`${inter.className} bg-dark-2`}>
                    {children}
                    <Toaster />
                </body>
            </ClerkProvider>
        </html>
    )
}
