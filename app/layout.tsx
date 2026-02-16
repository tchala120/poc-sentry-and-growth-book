import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import type { ReactNode } from 'react'

import './globals.css'

const poppins = Poppins({
	variable: '--font-poppins',
	weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
	title: 'PoC - Sentry & GrowthBook',
	description: 'Proof of Concept for Sentry & GrowthBook integration',
}

interface RootLayoutProps {
	children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	)
}

export default RootLayout
