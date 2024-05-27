import React, { ReactNode } from 'react'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Google Meets Who?',
    description: 'New Way to Meet People',
    icons: {
        icon: '/icons/logo.svg',
    },
}

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    )
}

export default RootLayout
