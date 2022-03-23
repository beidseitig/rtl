import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente FavoritePokemons', () => {
  it('Testa se é exibido a mensagem se não tiver pokémons favoritos.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');

    const noFav = screen.getByText(/No favorite pokemon found/i);
    expect(noFav).toBeInTheDocument();
  });

  it('Testa se é exibido todos os cards de pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);
    const detail = screen.getByText(/more details/i);
    userEvent.click(detail);
    screen.logTestingPlaygroundURL();

    const isFav = screen.getByText(/pokémon favoritado/i);
    userEvent.click(isFav);

    history.push('/favorites');
    const details = screen.getAllByText(/more details/i);
    expect(details.length).toBeGreaterThanOrEqual(1);
  });
});
