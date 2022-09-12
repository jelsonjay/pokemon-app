import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Home.module.scss';

function Card({ pokemon }) {
	return (
		<>
			<div className={styles.card}>
				<Image
					className={styles.img}
					src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
					width='120'
					height='120'
					alt='avatar-img'
				/>
				<p className={styles.title}>
					<span className={styles.code}>ID:</span> {pokemon.id}
				</p>
				<h3>{pokemon.name}</h3>
				<Link href={`/pokemon/${pokemon.id}`}>
					<a className={styles.btn}>More Info</a>
				</Link>
			</div>
		</>
	);
}

export default Card;
