# Portfólio DSM (React Native + Expo)

Este é um aplicativo móvel desenvolvido em **React Native** com **Expo** denominado **Portfólio DSM**. O aplicativo apresenta a trajetória acadêmica e técnica do aluno **Vitor Tavares** no curso de Desenvolvimento de Software Multiplataforma (DSM), exibindo seus projetos reais desenvolvidos do 1º ao 4º semestre.

---

## 🚀 Funcionalidades

1. **Perfil Profissional (Meu Perfil)**:
   - Apresentação pessoal de Vitor Tavares com avatar dinâmico (GitHub).
   - Área de atuação desejada (Back-End) e principais interesses (Java, Spring, Cloud, IoT, Sistemas Distribuídos).
   - Cards interativos para acesso externo ao **LinkedIn** e **GitHub** (via Expo Linking).
   - Controles de acessibilidade para alternar o tema e ajustar o tamanho das fontes.

2. **Projetos Interdisciplinares (1º ao 4º Semestre)**:
   - **1º Semestre (Fundamentos Web)**: Projeto de introdução e fundamentos iniciais de desenvolvimento web.
   - **2º Semestre (Fluxora Maternal)**: Site institucional e responsivo construído para divulgação de serviços de nutrição.
   - **3º Semestre (GT Solar Backend)**: APIs RESTful centralizadas e dockerizadas em Java e Spring Boot para gestão de energia solar.
   - **4º Semestre (Project LDW)**: Projeto mobile em andamento, exibindo um selo de progresso.

3. **Tema Escuro / Claro**:
   - Transição global controlada via Context API.
   - Tema Claro (Fundo: `#FFFFFF`, Texto: `#111111`) e Tema Escuro (Fundo: `#121212`, Texto: `#FFFFFF`).

4. **Controle Dinâmico de Fontes**:
   - Ajuste global do tamanho da fonte padrão entre `14px` e `28px` (padrão `16px`) usando um componente Slider. Todas as fontes da interface escalam proporcionalmente.

5. **Testes de UI**:
   - Cobertura de testes unitários para os componentes compartilhados da interface.

---

## 🛠️ Tecnologias Utilizadas

- **React Native** (0.85) & **Expo** (v56)
- **React Navigation** (Bottom Tab Navigation)
- **React Native Elements (RNE)** (v5)
- **Context API** (para gerenciamento global de temas e tamanho de fontes)
- **Expo Linking** (redirecionamento para links externos)
- **Jest & React Native Testing Library** (para testes automatizados de UI)

---

## 📦 Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Inicie o servidor de desenvolvimento do Expo:
   ```bash
   npm run start
   ```

3. Para testar no navegador ou emuladores, utilize os comandos:
   - Pressione `w` no terminal para abrir no navegador.
   - Pressione `a` para abrir no emulador Android.
   - Pressione `i` para abrir no simulador iOS.

---

## 🧪 Como Executar os Testes

Para rodar a suíte de testes automatizados da interface:
```bash
npm run test
```

Para validar a integridade do build de produção (exportação estática):
```bash
npx expo export
```
