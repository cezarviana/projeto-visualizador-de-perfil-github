# 🐙 Visualizador de Perfil do GitHub

## 📝 Descrição do Projeto
**Visualizador de Perfil do GitHub** é um projeto front-end que permite aos usuários buscar e visualizar perfis do GitHub de forma interativa. O site consome a API do GitHub para exibir informações detalhadas sobre usuários, incluindo dados do perfil e repositórios recentes.

O projeto foi desenvolvido para praticar a manipulação do DOM com JavaScript, o consumo de APIs externas e a criação de uma interface responsiva e funcional.

Repositório do projeto: [Visualizador de Perfil do GitHub Repositório](https://github.com/seu-usuario/visualizador-de-perfil-github) (substitua pelo link real)

Acesse o site aqui: [Visualizador de Perfil do GitHub](https://seu-usuario.github.io/visualizador-de-perfil-github/) (substitua pelo link real)

## 🔎 Funcionalidades
- **Busca de Usuários:** Permite buscar usuários do GitHub pelo nome de usuário.
- **Exibição de Perfil:** Mostra avatar, nome, bio, seguidores e seguindo.
- **Lista de Repositórios:** Exibe os últimos 10 repositórios com estatísticas como stars, forks, watchers e linguagem.
- **Estados de Interface:** Trata estados de loading, erro e usuário não encontrado.
- **Design Responsivo:** Interface adaptável a diferentes tamanhos de tela com animações suaves.

## Endpoints utilizados:

   ```javascript
- Perfil: GET/users/:username
- Repositorios: GET/users/:username/repos (usar query per_page=10 e sort=updated / sort=pushed conforme objetivo)
   ```

## 🛠️ Ferramentas utilizadas
- **HTML5:** Estruturação semântica do conteúdo.
- **CSS3:** Estilização, layout com Flexbox e responsividade.
- **JavaScript (ES6+):** Manipulação do DOM, lógica de busca e consumo de API (`fetch`).
- **GitHub API:** Consumo de dados de usuários e repositórios.
- **Devicon:** Biblioteca de ícones para o ícone do GitHub.
- **Git & GitHub:** Controle de versão e hospedagem do projeto.

## 🎨 Imagens do projeto
<div align="center">
<img src="./src/images/screenshot-desktop.png" style="height: 300px; text-align: center;"> 
<br><br>
<img src="./src/images/screenshot-mobile.png" style="height: 300px; text-align: center;"> <br>
</div>

## 💡 Decisões do projeto
1. **Consumo de API Externa:** Utilizou-se `fetch` para consumir a API do GitHub, simulando requisições assíncronas reais e praticando tratamento de erros e estados de loading.
   
2. **Renderização Dinâmica:** Os elementos do perfil e repositórios são criados dinamicamente com JavaScript, injetados no DOM para flexibilidade e adaptação aos dados recebidos.
   ```javascript
   const repositoriesHTML = userRepos.map(repo => `
       <a href="${repo.html_url}" target="_blank">
           <div class="repository-card">
               <h3>${repo.name}</h3>
               // ... restante do código
           </div>
       </a>
   `).join('');
   ```

3. **Estrutura CSS Modular:** O CSS foi dividido em arquivos (`reset.css`, `styles.css`, `responsive.css`, `animations.css`), facilitando manutenção e organização.

## 💦 Desafios e Aprendizados
- **Tratamento de Estados Assíncronos:** Gerenciar loading, erro e sucesso com `async/await` e manipulação do DOM foi essencial para uma experiência fluida.
- **Responsividade e Animações:** Implementar media queries e transições suaves aprimorou habilidades em CSS responsivo.
- **Consumo de API:** Lidar com limitações de rate limit da API do GitHub e tratamento de respostas não-ok.

## 💭 Possíveis atualizações futuras
- [ ] Adicionar filtros para repositórios (por linguagem, stars, etc.).
- [ ] Implementar paginação para mais repositórios.
- [ ] Criar uma página de detalhes para repositórios individuais.
- [ ] Adicionar modo escuro (Dark Mode).
- [ ] Incluir gráficos ou estatísticas visuais do perfil.

## 🚀 Como rodar o projeto
Este é um projeto estático de front-end, então você não precisa de um servidor complexo para executá-lo.

### Pré-requisitos
- **Navegador Web:** Qualquer navegador moderno como Chrome, Firefox ou Edge.
- **Git (Opcional):** Para clonar o repositório.

### Passos

1. **Clone o repositório (se estiver usando Git):**
   ```bash
   git clone https://github.com/cezarviana/projeto-visualizador-de-perfil-github.git
   ```
   Se não estiver usando Git, você pode baixar o projeto como um arquivo ZIP diretamente do GitHub.

2. **Navegue até a pasta do projeto:**
   ```bash
   cd projeto-visualizador-de-perfil-github
   ```

3. **Abra o arquivo index.html:**
   Abra o arquivo index.html diretamente no seu navegador de preferência para visualizar o site.
