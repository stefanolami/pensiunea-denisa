'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useTranslation } from '../app/i18n/client'

import MobileMenu from './sub/MobileMenu'
import DesktopMenu from './sub/DesktopMenu'

export default function Header({ lng }) {
	const { t } = useTranslation(lng, 'header')
	const { scrollY } = useScroll()

	const [hidden, setHidden] = useState(false)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious()
		if (latest > previous && latest > 200) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	return (
		<motion.header
			variants={{
				visible: { y: 0 },
				hidden: { y: '-100%' },
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.4, ease: 'easeInOut' }}
			className="fixed top-0 w-full bg-transparent text-white z-50 md:px-10 md:py-4 xl:px-28 xl:py-7 flex justify-between items-center"
		>
			<Link
				className="pl-6 md:pl-0"
				href={`/${lng}`}
			>
				{t('logo')}
			</Link>
			<div className="flex items-center justify-end">
				<DesktopMenu
					t={t}
					lng={lng}
				/>
				<MobileMenu
					t={t}
					lng={lng}
				/>
			</div>
		</motion.header>
	)
}
