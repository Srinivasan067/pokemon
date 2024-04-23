import React from 'react';
import { useGetPokemonListQuery } from './services/pokemonApi';
import { useDispatch } from 'react-redux';
import { setSelectedPokemon } from './store/pokemonSlice';

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const { data: pokemonList, error, isLoading } = useGetPokemonListQuery();

  const handlePokemonClick = (pokemonUrl: string) => {
    dispatch(setSelectedPokemon(pokemonUrl));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList?.results.map((pokemon) => (
          <li key={pokemon.name} onClick={() => handlePokemonClick(pokemon.url)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
