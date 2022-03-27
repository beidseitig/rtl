import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokedex', () => {
  it('Testa se página contém um h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const heading = screen.getByText(/Encountered pokémons/i);
    expect(heading).toBeInTheDocument();
  });

  it('Testa se é exibido o próximo Pokémon quando o botão Próximo pokémon é clicado',
    () => {
      renderWithRouter(<App />);

      const nextButton = screen.getByText('Próximo pokémon');
      expect(nextButton).toBeInTheDocument();
    });

  it('Testa se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);

    const details = screen.getAllByText(/more details/i);
    expect(details.length).toBe(1);
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const filterQuantity = 7;

    const electricFilter = screen.getByRole('button', { name: /electric/i });
    userEvent.click(electricFilter);
    const electric = screen.getAllByText(/electric/i);
    expect(electric.length).toBe(2);

    const filterButtons = screen.getAllByTestId('pokemon-type-button');
    expect(filterButtons.length).toBe(filterQuantity);

    const allButton = screen.getByText(/all/i);
    expect(allButton).toBeInTheDocument();
  });

  it('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const allButton = screen.getByText(/all/i);
    userEvent.click(allButton);
    expect(allButton).toBeInTheDocument();
  });
});
