'use client'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const LangSwitcherMobile = ({ lng }) => {
	const pathname = usePathname()
	const newPathname = pathname.substring(3)
	const icons = ['/romania.png', '/uk.png']
	const romaniaIcon = icons[0]
	const ukIcon = icons[1]
	/* const roStyle = {
		left: '0',
		borderRadius: '6px 0 0 6px',
	}
	const enStyle = {
		right: '0',
		borderRadius: '0 6px 6px 0',
	} */
	const getStyle = () => {
		if (lng === 'ro') {
			return {
				left: '0',
				borderRadius: '6px 0 0 6px',
			}
		} else {
			return {
				right: '0',
				borderRadius: '0 6px 6px 0',
			}
		}
	}

	return (
		<div className="relative grid grid-cols-2 border border-white/70 rounded-md">
			<div className="py-2 px-[3px]">
				<Link
					href={`/ro/${newPathname}`}
					className=""
				>
					<Image
						src={romaniaIcon}
						alt="romania"
						width="40"
						height="40"
						className="z-30"
					/>
				</Link>
			</div>
			<div className="py-2 px-[3px]">
				<Link href={`/en/${newPathname}`}>
					<Image
						src={ukIcon}
						alt="uk"
						width="40"
						height="40"
					/>
				</Link>
			</div>
			<motion.span
				className="absolute bg-white/70 w-[46px] h-[46px] -z-10"
				style={getStyle()}

				/* variants={{
					ro: {
						left: '0',
						borderRadius: '6px 0 0 6px',
					},
					en: {
						right: '0',
						borderRadius: '0 6px 6px 0',
					},
				}}
				initial={lng === 'ro' ? 'ro' : 'en'} */
			/>
		</div>
	)
}

export default LangSwitcherMobile
