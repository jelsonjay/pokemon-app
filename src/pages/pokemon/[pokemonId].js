import Image from 'next/dist/client/image';
import styles from '../../../styles/Details.module.scss';
export const getStaticPaths = async () => {
	const maxItems = 200;
	const url = 'https://pokeapi.co/api/v2/pokemon';
	const res = await fetch(`${url}/?limit=${maxItems}`);
	const data = await res.json();

	//return params

	const paths = data.results.map((pokemon, index) => {
		return {
			params: { pokemonId: (index + 1).toString() }
		};
	});

	return {
		paths,
		fallback: false
	};
};

function Pokemon({ pokemon }) {
	return (
		<div className={styles.pokemon_wrap}>
			<h1>{pokemon.name}</h1>
			<Image
				src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
				width='250'
				height='250'
				alt={pokemon.name}
			/>
			<div>
				<h3>Number:</h3>
				<p>ID: {pokemon.id}</p>
			</div>
			<div className={styles.type_wrap}>
				<h3>Type:</h3>
				<div>
					{pokemon.types.map((item, index) => (
						<span
							key={index}
							className={`${styles.type} ${styles['type_' + item.type.name]}`}
						>
							{item.type.name}
						</span>
					))}
				</div>
			</div>
			<div className={styles.data_wrap}>
				<div className={styles.data_height}>
					<h4>Pokemon Height:</h4>
					<p>{pokemon.height * 10} cm</p>
				</div>
				<div className={styles.data_weight}>
					<h4>Pokemon Weight:</h4>
					<p>{pokemon.weight / 10} kg</p>
				</div>
			</div>
		</div>
	);
}

export default Pokemon;

export const getStaticProps = async context => {
	const id = context.params.pokemonId;

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

	const data = await res.json();

	return {
		props: { pokemon: data }
	};
};
