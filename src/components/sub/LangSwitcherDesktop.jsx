'use client'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import i18next from 'i18next'

const LangSwitcherDesktop = ({ lng }) => {
	const [open, setOpen] = useState(false)
	const icons = ['/romania.png', '/uk.png']
	const romaniaIcon = icons[0]
	const ukIcon = icons[1]
	const expandArrow = '/expand-arrow.png'
	const collapseArrow = '/collapse-arrow.png'
	const detectedLng = i18next.language

	return (
		<div className="flex items-center justify-center ">
			<motion.div
				animate={open ? 'open' : 'closed'}
				className="relative"
			>
				<button
					onClick={() => setOpen((pv) => !pv)}
					className="flex items-center rounded-md gap-2"
				>
					<Image
						src={lng === 'ro' ? romaniaIcon : ukIcon}
						alt="logo"
						width="40"
						height="40"
						className=""
					/>
					<Image
						src={open ? collapseArrow : expandArrow}
						alt="dropdown arrow"
						width="15"
						height="15"
						className=""
					/>
				</button>

				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: 'top', translateX: '-50%' }}
					className="flex flex-row gap-2 p-2 rounded-lg bg-transparent text-white border border-white shadow-xl absolute top-[120%] left-[50%] w-32 overflow-hidden"
				>
					<Option
						setOpen={setOpen}
						Icon={romaniaIcon}
						newLng="ro"
					/>
					<Option
						setOpen={setOpen}
						Icon={ukIcon}
						newLng="en"
					/>
				</motion.ul>
			</motion.div>
		</div>
	)
}

const Option = ({ newLng, Icon, setOpen }) => {
	const pathname = usePathname()
	const newPathname = pathname.substring(3)
	return (
		<motion.li
			variants={itemVariants}
			onClick={() => setOpen(false)}
			className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-white text-white hover:text-black transition-colors cursor-pointer"
		>
			<Link href={`/${newLng}/${newPathname}`}>
				<motion.span variants={actionIconVariants}>
					<Image
						src={Icon}
						alt="logo"
						width="40"
						height="40"
					/>
				</motion.span>
			</Link>
		</motion.li>
	)
}

export default LangSwitcherDesktop

const wrapperVariants = {
	open: {
		scaleY: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1,
			duration: 0.1,
		},
	},
	closed: {
		scaleY: 0,
		transition: {
			when: 'afterChildren',
			staggerChildren: 0.1,
			duration: 0.1,
		},
	},
}

const iconVariants = {
	open: { rotate: 180 },
	closed: { rotate: 0 },
}

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			when: 'beforeChildren',
		},
	},
	closed: {
		opacity: 0,
		y: -15,
		transition: {
			when: 'afterChildren',
		},
	},
}

const actionIconVariants = {
	open: { scale: 1, y: 0 },
	closed: { scale: 0, y: -7 },
}
