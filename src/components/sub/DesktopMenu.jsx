import Link from 'next/link'

export default function DesktopMenu() {
	return (
		<nav className="hidden md:grid grid-cols-5 gap-4 text-center">
			<Link href="/about">About Us</Link>
			<Link href="/prices">Prices</Link>
			<Link href="/deals">Deals</Link>
			<Link href="/gallery">Gallery</Link>
			<Link href="/contact">Contact</Link>
		</nav>
	)
}
