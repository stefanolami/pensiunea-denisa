import { useTranslation } from '../i18n'
import HomeHero from '@/components/HomeHero'

export default async function Home({ params: { lng } }) {
	const { t } = await useTranslation(lng)
	return (
		<>
			<HomeHero />
			<div className="bg-black h-[1000px] text-white pt-10 text-center">
				{t('home')}
			</div>
		</>
	)
}
