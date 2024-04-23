import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useGetPokemonByNameQuery } from './services/pokemonApi';

const PokemonDetails: React.FC = () => {
  const selectedPokemonUrl = useSelector((state: RootState) => state.pokemon.selectedPokemonUrl);
  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(selectedPokemonUrl);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Pokemon Details</h2>
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
