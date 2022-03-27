import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente NotFound', () => {
  it('Testa se página contém um h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/teste');

    const heading = screen.getByText(/Page requested not found/i);
    expect(heading).toBeInTheDocument();
  });

  it('Testa se página mostra a imagem específica', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/teste');

    const image = screen.getByAltText(
      /pikachu crying because the page requested was not found/i,
    );
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
