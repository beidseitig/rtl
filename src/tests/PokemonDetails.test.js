import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente PokemonDetails', () => {
  it('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela',
    () => {
      renderWithRouter(<App />);

      const details = screen.getByRole('link', { name: /more details/i });
      userEvent.click(details);

      const pokemonName = screen.getByText(/pikachu details/i);
      expect(pokemonName).toBeInTheDocument();
      expect(details).not.toBeInTheDocument();

      const heading = screen.getByRole('heading', { level: 2, name: /summary/i });
      expect(heading).toBeInTheDocument();

      const resume = screen.getByText(
        /This intelligent Pokémon roasts hard berries with electricity/i,
      );
      expect(resume).toBeInTheDocument();
    });

  it('Testa se existe uma seção com os mapas contendo as localizações do pokémon', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    const srcForest = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const srcPlant = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

    const heading = screen.getByRole('heading',
      { level: 2, name: /Game Locations of pikachu/i });
    expect(heading).toBeInTheDocument();

    const imgs = screen.getAllByRole('img', { name: /pikachu location/i });

    const forest = screen.getByText(/Kanto Viridian Forest/i);
    expect(forest).toBeInTheDocument();
    expect(imgs[0].src).toBe(srcForest);
    expect(imgs[0].alt).toBe('Pikachu location');

    const plant = screen.getByText(/Kanto power plant/i);
    expect(plant).toBeInTheDocument();
    expect(imgs[1].src).toBe(srcPlant);
    expect(imgs[1].alt).toBe('Pikachu location');
  });

  it('Testa se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    const check = screen.getByRole('checkbox', { name: /Pokémon favoritado\?/i });
    expect(check).toBeInTheDocument();
  });
});
