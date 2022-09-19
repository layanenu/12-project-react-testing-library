import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

test('Verifica se a página contém um heading h2 e uma imagem', () => {
  renderWithRouter(<NotFound />);
  const paragraphPageNotFound = screen
    .getByRole('heading', { name: /page requested not found/i });
  const imgPageNotFound = screen.getByRole('img', { src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif' });
  expect(paragraphPageNotFound).toBeInTheDocument();
  expect(imgPageNotFound).toBeInTheDocument();
  expect(imgPageNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
