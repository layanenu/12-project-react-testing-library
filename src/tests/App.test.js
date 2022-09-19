import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: /Home/i });
  const aboutLink = screen.getByRole('link', { name: /About/i });
  const favoritePokemonsLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(favoritePokemonsLink).toBeInTheDocument();
});
test('Verifica se é redirecionada para a página inicial ao clicar no link Home', () => {
  const { history } = renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: /Home/i });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
  const homeTittle = screen.getByRole('link', { name: /Home/i });
  expect(homeTittle).toBeInTheDocument();
});
test('Verifica se é redirecionada para a página About ao clicar no link About', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: /About/i });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
  const aboutTittle = screen.getByRole(
    'heading',
    { name: /About Pokédex/i },
    { level: 2 },
  );
  expect(aboutTittle).toBeInTheDocument();
});
test('Verifica se redireciona para /favorites ao clicar em Pokémons Favoritados', () => {
  const { history } = renderWithRouter(<App />);
  const favoritePokemonsLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(favoritePokemonsLink).toBeInTheDocument();
  userEvent.click(favoritePokemonsLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
  const favoriteTittle = screen.getByRole(
    'heading',
    { name: /Favorite pokémons/i },
    { level: 2 },
  );
  expect(favoriteTittle).toBeInTheDocument();
});
test('Verifica se redireciona para Not Found ao entrar em URL desconhecida', () => {
  const { history } = renderWithRouter(<App />);

  const INVALID_URL = '/xablau';
  act(() => { history.push(INVALID_URL); });

  const notFoundTitle = screen.getByRole(
    'heading',
    { name: /Page requested not found/i },
    { level: 2 },
  );
  expect(notFoundTitle).toBeInTheDocument();
});
