import { useTranslation } from '../../i18n'

export default async function About({ params: { lng } }) {
	const { t } = await useTranslation(lng, 'about')
	return <h1>{t('about')}</h1>
}
