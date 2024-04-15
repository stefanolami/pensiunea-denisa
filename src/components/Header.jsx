import Link from 'next/link'

export default function Header() {
	return (
		<header className="w-full bg-transparent text-white absolute z-50 px-28 py-7">
			<div className="w-full flex justify-between">
				<Link href="/">LOGO</Link>
				<div>
					<nav className="grid grid-cols-5 gap-4 text-center">
						<Link href="/">About Us</Link>
						<Link href="/">Prices</Link>
						<Link href="/">Deals</Link>
						<Link href="/">Gallery</Link>
						<Link href="/">Contact</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}
