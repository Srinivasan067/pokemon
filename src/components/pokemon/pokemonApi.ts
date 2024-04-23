import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query({
      query: (pokemonUrl) => pokemonUrl.replace('https://pokeapi.co/api/v2/pokemon/', ''),
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByNameQuery } = pokemonApi;
