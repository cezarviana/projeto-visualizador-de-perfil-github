const baseURL = 'https://api.github.com';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', async () => {

    const userName = inputSearch.value;

    if (userName) {
        
        const response = await fetch(`${baseURL}/users/${userName}`);

        if (!response.ok) {
            alert('Usuário não encontrado no GitHub.');
            return;
        }

        const data = await response.json();
        console.log(data);

    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
    }

});