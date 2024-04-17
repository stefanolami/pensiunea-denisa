import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'

import { dir } from 'i18next'
import { languages } from '@/app/i18n/settings'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
}

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children, params: { lng } }) {
	return (
		<html
			lang={lng}
			dir={dir(lng)}
		>
			<body className={inter.className}>
				<main className="w-full">
					<Header lng={lng} />
					{children}
				</main>
			</body>
		</html>
	)
}
