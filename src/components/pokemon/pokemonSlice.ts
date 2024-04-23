import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  selectedPokemonUrl: string | null;
}

const initialState: PokemonState = {
  selectedPokemonUrl: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedPokemon: (state, action: PayloadAction<string>) => {
      state.selectedPokemonUrl = action.payload;
    },
  },
});

export const { setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
