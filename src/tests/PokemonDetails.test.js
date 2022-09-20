import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const moreDetailsButton = /More details/i;

test('Verifica se é exibido na tela um h2 com o texto <name> Details', () => {
  renderWithRouter(<App />);
  const moreDetailsLink = screen.getByRole('link', { name: moreDetailsButton });
  userEvent.click(moreDetailsLink);
  const detailsTittle = screen.getByRole(
    'heading',
    { name: /pikachu details/i },
    { level: 2 },
  );
  expect(detailsTittle).toBeInTheDocument();
});
test('Verifica se é exibido na tela um h2 com o texto Summary', () => {
  renderWithRouter(<App />);
  const moreDetailsLink = screen.getByRole('link', { name: moreDetailsButton });
  userEvent.click(moreDetailsLink);
  const summary = screen.getByRole('heading', { name: /summary/i }, { level: 2 });
  expect(summary).toBeInTheDocument();
});
test('Verifica se é exibido na tela um h2 com o texto <summary>', () => {
  renderWithRouter(<App />);
  const moreDetailsLink = screen.getByRole('link', { name: moreDetailsButton });
  userEvent.click(moreDetailsLink);
  const summaryAboutPokemon = screen
    .getByText(/this intelligent pokémon roasts hard berries with electricity to./i);
  expect(summaryAboutPokemon).toBeInTheDocument();
});
test('Verifica se é exibido na tela um h2 com o texto Game Locations of <name>', () => {
  renderWithRouter(<App />);
  const moreDetailsLink = screen.getByRole('link', { name: moreDetailsButton });
  userEvent.click(moreDetailsLink);
  const locationsOfPokemonTittle = screen.getByRole(
    'heading',
    { name: /game locations of pikachu/i },
    { level: 2 },
  );
  expect(locationsOfPokemonTittle).toBeInTheDocument();
});
test('Verifica se são exibidas na tela imagens de localização com o src correto', () => {
  renderWithRouter(<App />);
  const moreDetailsLink = screen.getByRole('link', { name: moreDetailsButton });
  userEvent.click(moreDetailsLink);
  const imgsPokemonLocation = screen.getAllByRole('img', { name: /Pikachu location/i });
  expect(imgsPokemonLocation.length).toBe(2);
  expect(imgsPokemonLocation[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(imgsPokemonLocation[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
});
test('Verifica se é exibido na tela uma label com o texto Pokémon favoritado?', () => {
  renderWithRouter(<App />);
  const moreDetailsLink = screen.getByRole('link', { name: moreDetailsButton });
  userEvent.click(moreDetailsLink);
  const labelPokemonFav = screen.getByLabelText(/pokémon favoritado\?/i);
  expect(labelPokemonFav).toBeInTheDocument();
});
