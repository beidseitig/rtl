import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokemon', () => {
  it('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const imgSrc = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.innerHTML).toBe('Electric');

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toBeInTheDocument();

    const pokemonImg = screen.getByAltText(/pikachu sprite/i);
    expect(pokemonImg.src).toBe(imgSrc);
    expect(pokemonImg.alt).toBe('Pikachu sprite');
  });

  it('Testa se o card do Pokémon contém um link de navegação para exibir detalhes',
    () => {
      renderWithRouter(<App />);
      const url = 'http://localhost/pokemons/25';

      const details = screen.getByText(/more details/i);
      expect(details).toBeInTheDocument();
      expect(details.href).toBe(url);
    });

  it('Testa se ao clicar no link é feito o redirecionamento para a página de detalhes',
    () => {
      const { history } = renderWithRouter(<App />);

      const details = screen.getByText(/more details/i);
      userEvent.click(details);

      const { pathname } = history.location;
      expect(details.href).toContain(pathname);
    });

  it('Testa se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const imgAlt = 'Pikachu is marked as favorite';
    const imgSrc = 'http://localhost/star-icon.svg';

    const details = screen.getByText(/more details/i);
    userEvent.click(details);

    const fav = screen.getByText(/pokémon favoritado/i);
    userEvent.click(fav);

    const img = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(img).toBeInTheDocument();
    expect(img.alt).toBe(imgAlt);
    expect(img.src).toBe(imgSrc);
  });
});
