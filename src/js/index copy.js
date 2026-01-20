const baseURL = 'https://api.github.com';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {

    const userName = inputSearch.value;

    if (userName) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

        try {

            const response = await fetch(`${baseURL}/users/${userName}`);

            if (!response.ok) {
                alert('Usuário não encontrado no GitHub.');
                profileResults.innerHTML = '';
                return;
            }



            const userData = await response.json();
            console.log(userData);
            console.log(userData.avatar_url);
            console.log(userData.name);
            console.log(userData.bio);
            console.log(userData.followers);
            console.log(userData.following);

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name || 'Nome não disponível'}</h2>
                    <p>${userData.bio || 'Não possui bio cadastrada 😢'}</p>
                    </div>
                    </div>
                    
                <div class="profile-counters">
                    <div class="followers">
                        <h4>🙂 Seguidores</h4>
                        <span>${userData.followers}</span>
                    </div>
                    <div class="following">
                        <h4>🙂 Seguindo</h4>
                        <span>${userData.following}</span>
                    </div>
                </div>
            </div>
            `


        } catch (error) {
            console.error('Erro ao buscar o usuário:', error);
            alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
            profileResults.innerHTML = '';
        }


    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = '';
    }

}
);