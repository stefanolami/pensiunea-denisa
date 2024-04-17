'use client'
import { ImagesSlider } from '@/components/ui/images-slider'
import { motion } from 'framer-motion'

export default function Home({ params: { lng } }) {
	const images = ['/pic2.jpg', '/pic1.jpg', '/pic3.jpg']
	return (
		<>
			<ImagesSlider
				className="h-[100svh] xl:h-[100vh]"
				images={images}
				direction="up"
			>
				<motion.div
					initial={{
						opacity: 0,
						/* y: -80, */
					}}
					animate={{
						opacity: 1,
						/* y: 0, */
					}}
					transition={{
						duration: 0.6,
					}}
					className="z-50 flex flex-col justify-center items-center"
				>
					<motion.p className="font-bold text-xl md:text-6xl text-center text-white py-4">
						Pensiunea Denisa
					</motion.p>
					{/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
					<span>About Us...</span>
					<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
				</button> */}
				</motion.div>
			</ImagesSlider>
			<div className="bg-black h-[1000px]"></div>
		</>
	)
}
