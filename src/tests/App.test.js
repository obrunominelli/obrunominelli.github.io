import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>),
    history,
  });
}

describe('01 - Verifica se as rotas foram defininas corretamentes', () => {
  it ('Verifica se a página Home é carregada ao clicar no link Home', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', {name: /home/i}));
    const home = screen.getByRole('heading', {name: /home/i});
    expect(home).toBeInTheDocument();
  });

  it ('Verifica se a página Projetos é carregada ao clicar no link Projetos', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', {name: /projetos/i}));
    const projects = screen.getByRole('heading', {name: /projetos/i});
    expect(projects).toBeInTheDocument();
  });

  it ('Verifica se a página Sobre é carregada ao clicar no link Sobre', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', {name: /sobre/i}));
    const about = screen.getByRole('heading', {name: /sobre/i});
    expect(about).toBeInTheDocument();
  });

  it ('Verifica se a página Contato é carregada ao clicar no link Contato', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', {name: /contato/i}));
    const contact = screen.getByRole('heading', {name: /contato/i});
    expect(contact).toBeInTheDocument();
  });

});
