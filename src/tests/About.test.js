import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />);

  const aboutTittle = screen.getByRole(
    'heading',
    { name: /About Pokédex/i },
    { level: 2 },
  );

  const imgAboutPokedex = screen.getByRole('img', { src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png' });

  const firstParagraph = screen
    .getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all/i,
    );
  const secondParagraph = screen
    .getByText(/one can filter pokémons by type, and see more details for each/i);

  expect(aboutTittle).toBeInTheDocument();
  expect(firstParagraph).toBeInTheDocument();
  expect(secondParagraph).toBeInTheDocument();
  expect(imgAboutPokedex).toBeInTheDocument();
  expect(imgAboutPokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
