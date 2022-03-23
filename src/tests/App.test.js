import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente App', () => {
  test('Testa os links do componente App - Home', () => {
    renderWithRouter(<App />);
    const headingPoke = screen.getByRole('heading', { level: 1, name: /Pokédex/i });
    expect(headingPoke).toBeInTheDocument();
    screen.logTestingPlaygroundURL();

    const homeLink = screen.queryByRole('link', { name: /home/i });
    userEvent.click(homeLink);

    const head = screen.getByRole('heading', { level: 2, name: /Encountered pokémons/i });
    expect(head).toBeInTheDocument();
  });

  test('Testa os links do componente App - About', () => {
    renderWithRouter(<App />);
    const headingPoke = screen.getByRole('heading', { level: 1, name: /Pokédex/i });
    expect(headingPoke).toBeInTheDocument();
    screen.logTestingPlaygroundURL();

    const aboutLink = screen.queryByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    const head = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(head).toBeInTheDocument();
  });

  test('Testa os links do componente App - Favorite', () => {
    renderWithRouter(<App />);
    const headingPoke = screen.getByRole('heading', { level: 1, name: /Pokédex/i });
    expect(headingPoke).toBeInTheDocument();
    screen.logTestingPlaygroundURL();

    const aboutLink = screen.queryByRole('link', { name: /Favorite pokémons/i });
    userEvent.click(aboutLink);

    const head = screen.getByRole('heading', { level: 2, name: /Favorite pokémons/i });
    expect(head).toBeInTheDocument();
  });
});
