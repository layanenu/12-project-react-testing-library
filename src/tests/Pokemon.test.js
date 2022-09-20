import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Verifica se a imagem do pokemon possui o alt <name> sprite', () => {
  renderWithRouter(<App />);
  const imgPokemonName = screen.getByRole('img', { name: /pikachu sprite/i });
  expect(imgPokemonName.alt).toBe('Pikachu sprite');
});
test('Verifica se a imagem do pokemon possui o src correto', () => {
  renderWithRouter(<App />);
  const imgPokemon = screen.getByRole('img', { src: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png' });
  expect(imgPokemon).toBeInTheDocument();
  expect(imgPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});
test('Verifica se é exibido na tela um texto com o tipo do pokemon', () => {
  renderWithRouter(<App />);
  const pokemonType = screen.getByTestId('pokemon-type', { name: /electric/i });
  expect(pokemonType.innerHTML).toBe('Electric');
});
test('Verifica se favorito possui src /star-icon e alt <name> como favorito', () => {
  renderWithRouter(<App />);
  const moreDetailsLink = screen.getByRole('link', { name: 'More details' });
  userEvent.click(moreDetailsLink);
  const favoriteCheckbox = screen
    .getByRole('checkbox', { name: /pokémon favoritado\?/i });
  userEvent.click(favoriteCheckbox);
  const imgStar = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(imgStar.src).toBe('http://localhost/star-icon.svg');
  expect(imgStar.alt).toBe('Pikachu is marked as favorite');
});
test('Verifica se é exibido na tela um link com o href /pokemons/<id>', () => {
  const { history } = renderWithRouter(<App />);
  const moreDetailsLink = screen.getByRole('link', { name: 'More details' });
  userEvent.click(moreDetailsLink);
  expect(history.location.pathname).toBe('/pokemons/25');
});
