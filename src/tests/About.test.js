import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../components';

describe('Testando o componente About', () => {
  test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const headAbout = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(headAbout).toBeInTheDocument();
  });

  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const pokePara = screen.getAllByRole('paragraph');
    expect(pokePara).toHaveLength(2);
    screen.logTestingPlaygroundURL();
  });
});
