import { useTranslations } from 'next-intl'

export default function BlackBlock() {
	const t = useTranslations('Index')
	return (
		<div className="bg-black text-white text-center h-96">
			<p>{t('title')}</p>
		</div>
	)
}
