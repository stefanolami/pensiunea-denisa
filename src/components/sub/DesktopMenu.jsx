import Link from 'next/link'

import LangSwitcherDesktop from '@/components/sub/LangSwitcherDesktop'

export default function DesktopMenu({ t, lng }) {
	return (
		<div className="hidden md:flex flex-row justify-between items-center gap-16">
			<nav className="grid grid-cols-5 gap-4 text-center">
				<Link href={`/${lng}/about`}>{t('about')}</Link>
				<Link href="/prices">{t('prices')}</Link>
				<Link href="/deals">{t('deals')}</Link>
				<Link href="/gallery">{t('gallery')}</Link>
				<Link href="/contact">{t('contacts')}</Link>
			</nav>
			<LangSwitcherDesktop lng={lng} />
		</div>
	)
}
