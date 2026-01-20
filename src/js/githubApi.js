export async function fetchGithubUser(username) {
    const baseURL = 'https://api.github.com';
    const response = await fetch(`${baseURL}/users/${username}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado.');
    }
    return await response.json();
}
