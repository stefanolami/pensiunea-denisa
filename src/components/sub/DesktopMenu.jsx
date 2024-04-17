import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function DesktopMenu() {
	const { t } = useTranslation()

	return (
		<nav className="hidden md:grid grid-cols-5 gap-4 text-center">
			<Link href="/about">{t('about')}</Link>
			<Link href="/prices">Prices</Link>
			<Link href="/deals">Deals</Link>
			<Link href="/gallery">Gallery</Link>
			<Link href="/contact">Contact</Link>
		</nav>
	)
}
