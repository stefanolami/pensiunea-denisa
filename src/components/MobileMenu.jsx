'use client'

import { motion, MotionConfig } from 'framer-motion'
import { useState } from 'react'

export default function MobileMenu() {
	const [active, setActive] = useState(false)
	return (
		<MotionConfig
			transition={{
				duration: 0.4,
				ease: 'easeInOut',
			}}
		>
			<motion.button
				onClick={() => setActive((pv) => !pv)}
				className="relative h-16 w-16 rounded-full"
				animate={active ? 'open' : 'closed'}
			>
				<motion.span
					className="absolute h-1 w-8 bg-white"
					style={{
						left: '50%',
						top: '35%',
						x: '-50%',
						y: '-50%',
					}}
					variants={{
						open: {
							rotate: ['0deg', '0deg', '45deg'],
							top: ['35%', '50%', '50%'],
						},
						closed: {
							rotate: ['45deg', '0deg', '0deg'],
							top: ['50%', '50%', '35%'],
						},
					}}
				/>
				<motion.span
					className="absolute h-1 w-8 bg-white"
					style={{
						left: '50%',
						top: '50%',
						x: '-50%',
						y: '-50%',
					}}
					variants={{
						open: {
							rotate: ['0deg', '0deg', '-45deg'],
						},
						closed: {
							rotate: ['-45deg', '0deg', '0deg'],
						},
					}}
				/>
				<motion.span
					className="absolute h-1 w-4 bg-white"
					style={{
						left: 'calc(50% + 8px)',
						bottom: '35%',
						x: '-50%',
						y: '50%',
					}}
					variants={{
						open: {
							rotate: ['0deg', '0deg', '45deg'],
							bottom: ['35%', '50%', '50%'],
							left: '50%',
						},
						closed: {
							rotate: ['45deg', '0deg', '0deg'],
							bottom: ['50%', '50%', '35%'],
							left: 'calc(50% + 8px)',
						},
					}}
				/>
			</motion.button>
		</MotionConfig>
	)
}
