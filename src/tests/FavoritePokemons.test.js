import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);

  const paragraphPageFavorites = screen.getByText(/no favorite pokemon found/i);
  expect(paragraphPageFavorites).toBeInTheDocument();
});
