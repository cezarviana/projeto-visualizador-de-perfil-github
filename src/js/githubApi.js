const baseURL = 'https://api.github.com';

export async function fetchGithubUser(userName) {
    const response = await fetch(`${baseURL}/users/${userName}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado.');
    }
    return await response.json();
}

export async function fetchGithubUserRepos(userName) {
    const response = await fetch(`${baseURL}/users/${userName}/repos`);
    if(!response.ok) {
        throw new Error('Repositórios não encontrados.');
    }
    return await response.json();
}
