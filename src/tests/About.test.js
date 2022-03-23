import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente About', () => {
  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const headAbout = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(headAbout).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const firstP = screen.getByText(/This application simulates/i);
    expect(firstP).toBeInTheDocument();
    const secondP = screen.getByText(/One can filter/i);
    expect(secondP).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const imgSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');
    expect(image.src).toBe(imgSrc);
  });
});
