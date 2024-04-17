import Link from 'next/link'
import { useTranslation } from '../app/i18n'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../app/i18n/settings'

export default async function Footer({ lng }) {
	const { t } = await useTranslation(lng, 'footer')
	return (
		<footer className="w-full h-32 p-10 bg-gray-800 text-white flex justify-between items-center">
			<h3>{t('footer')}</h3>
			<div>
				<Trans
					i18nKey="languageSwitcher"
					t={t}
				>
					<strong>{{ lng }}</strong>
				</Trans>
				{languages
					.filter((l) => lng !== l)
					.map((l, index) => {
						return (
							<span key={l}>
								{index > 0 && ' or '}
								<Link href={`/${l}`}>{l}</Link>
							</span>
						)
					})}
			</div>
		</footer>
	)
}
