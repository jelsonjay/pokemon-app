import Image from 'next/image';
import styles from '../../styles/About.module.scss';
function AbaouPage() {
	return (
		<div className={styles.about}>
			<h1>About page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nihil
				ex modi sequi veritatis nulla vero ratione sapiente quia praesentium!
			</p>
			<Image
				src='/images/pokemon.jpeg'
				alt='pokemon-avatar'
				width={450}
				height='400'
			/>
		</div>
	);
}

export default AbaouPage;
