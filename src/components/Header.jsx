import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Header() {
	return (
		<header className="w-full bg-transparent text-white absolute z-50 xl:px-28 xl:py-7">
			<div className="w-full flex justify-between items-center">
				<Link
					className="pl-6 xl:pl-0"
					href="/"
				>
					LOGO
				</Link>
				<div className="flex items-center justify-end">
					<nav className="hidden md:grid grid-cols-5 gap-4 text-center">
						<Link href="/">About Us</Link>
						<Link href="/">Prices</Link>
						<Link href="/">Deals</Link>
						<Link href="/">Gallery</Link>
						<Link href="/">Contact</Link>
					</nav>
					<MobileMenu />
				</div>
			</div>
		</header>
	)
}
