import { useState } from 'react';
import styles from '../../styles/Home.module.scss';
import Card from '../components/Card';

export default function Home({ pokemons }) {
	const [noOfLoad, setNoOfLoad] = useState(6);

	// load more items
	const loadMore = () => {
		setNoOfLoad(noOfLoad + noOfLoad);
	};

	return (
		<>
			<div>
				<div className={styles.title}>
					<h1>Pokemon</h1>
				</div>

				<div className={styles.container}>
					{pokemons.slice(0, noOfLoad).map(pokemon => (
						<Card key={pokemon.id} pokemon={pokemon} />
					))}
				</div>
				<a onClick={() => loadMore()} className={styles.buttons}>
					Load More Pokemon
				</a>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const maxItems = 200;
	const url = 'https://pokeapi.co/api/v2/pokemon';

	const res = await fetch(`${url}/?limit=${maxItems}`);

	const data = await res.json();

	data.results.forEach((item, i) => {
		item.id = i + 1;
	});

	return {
		props: {
			pokemons: data.results
		}
	};
}
