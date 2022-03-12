import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Navbar.module.scss';

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Image
					src='/images/logo.png'
					width='70'
					height='60'
					alt='Pokemon-Logo'
				/>
				<h1>Pokemon</h1>
			</div>
			<ul className={styles.links}>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
					<Link href='/pokemons'>
						<a>Pokemons</a>
					</Link>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
