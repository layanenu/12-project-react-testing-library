import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Verifica se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);
  const pokemonsTypes = [
    'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
  const getPokemonForButtonType = screen.getAllByTestId('pokemon-type-button');
  getPokemonForButtonType.forEach((event, index) => {
    expect(event).toHaveTextContent(pokemonsTypes[index]);
  });
});
test('Verifica se a Pokédex contém um botão para resetar o filtro', () => {
  renderWithRouter(<App />);
  const buttonAll = screen.getByRole('button', { name: /all/i });
  expect(buttonAll).toBeInTheDocument();
  userEvent.click(buttonAll);
});
