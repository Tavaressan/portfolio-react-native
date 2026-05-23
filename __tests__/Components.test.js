import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../Context/ThemeContext';
import { FontProvider } from '../Context/FontContext';
import ThemeSwitch from '../Components/ThemeSwitch';
import FontSlider from '../Components/FontSlider';
import SocialCard from '../Components/SocialCard';
import ProjectCard from '../Components/ProjectCard';

const renderWithProviders = (ui) => {
  return render(
    <ThemeProvider>
      <FontProvider>
        {ui}
      </FontProvider>
    </ThemeProvider>
  );
};

describe('Componentes do Portfólio DSM', () => {
  it('deve renderizar o ThemeSwitch corretamente com tema padrão escuro', () => {
    const { getByText } = renderWithProviders(<ThemeSwitch />);
    expect(getByText('Tema Escuro')).toBeTruthy();
  });

  it('deve renderizar o FontSlider com tamanho de fonte padrão de 16px', () => {
    const { getByText } = renderWithProviders(<FontSlider />);
    expect(getByText('Tamanho da Fonte')).toBeTruthy();
    expect(getByText('16px')).toBeTruthy();
  });

  it('deve renderizar o SocialCard com título, descrição e botão', () => {
    const { getByText } = renderWithProviders(
      <SocialCard
        title="Meu Teste LinkedIn"
        description="Minha descrição de rede social para testes"
        iconName="logo-linkedin"
        iconColor="#0A66C2"
        url="https://linkedin.com"
      />
    );
    expect(getByText('Meu Teste LinkedIn')).toBeTruthy();
    expect(getByText('Minha descrição de rede social para testes')).toBeTruthy();
    expect(getByText('Acessar Perfil')).toBeTruthy();
  });

  it('deve renderizar o ProjectCard com os detalhes completos do projeto', () => {
    const mockProject = {
      semester: 1,
      title: "Projeto Super Teste 1º Semestre",
      github: "https://github.com/test",
      description: "Descrição de projeto para teste do card.",
      technologies: ["React", "HTML"],
      partners: "Parceiro Teste",
      iconName: "code-slash-outline"
    };

    const { getByText } = renderWithProviders(<ProjectCard project={mockProject} />);
    expect(getByText('Projeto Super Teste 1º Semestre')).toBeTruthy();
    expect(getByText('Descrição de projeto para teste do card.')).toBeTruthy();
    expect(getByText('Parceiro Teste')).toBeTruthy();
    expect(getByText('React')).toBeTruthy();
    expect(getByText('HTML')).toBeTruthy();
    expect(getByText('GitHub')).toBeTruthy();
  });
});
