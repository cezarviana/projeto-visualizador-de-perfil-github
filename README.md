# Visualizador de Perfil do GitHub


## Funcionalidades que o projeto precisa ter:

- Buscar usuários do GitHub pelo nome de usuário;
- Exibir informações do perfil (avatar, nome, bio, seguidores, seguindo);
- Listar últimos 10 repositórios com estatísticas (stars, forks, watchers, linguagem);
- Tratar estados de loading, erro e usuário não encontrado;
- Interface responsiva e animações suaves;


## Endpoints utilizados:

- Perfil: GET/users/:username
- Repositórios: GET/users/:username/repos (usar query per_page=10 e sort=updated / sort=pushed conforme objetivo)

