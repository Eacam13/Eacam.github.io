const nome = document.querySelector('#inputNome')
const btn = document.querySelector('#btn')
const container = document.querySelector('#container-content')
const containerNome = document.querySelector('#result-nome')
let resultImg
let resultImgpatas


btn.addEventListener('click', () => {
  fetch(`https://dog.ceo/api/breed/${nome.value}/images/random`)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Erro na solicitação')
  })
  .then(data => {
    console.log(data.message)
    if (!resultImg) {
      // Adicionando um h3 e um h2
      const title = document.createElement('h3');
      title.textContent = 'Raça';
      containerNome.appendChild(title);
      const raca = document.createElement('h2');
      raca.textContent = `${nome.value}`;
      containerNome.appendChild(raca);

      // Adicionando a img das patinhas
      resultImgpatas = document.createElement('img');
      resultImgpatas.id = 'imgpatas';
      resultImgpatas.src = './img/patinhasdogs.gif';
      resultImgpatas.alt = 'Patinhas de Cachorro';
      container.appendChild(resultImgpatas);

      // Criando a tag img a partir da pesquisa na API
      resultImg = document.createElement('img');
      resultImg.id = 'result-img';
      container.appendChild(resultImg);
    } else {
      // Removendo os elementos existentes
      while (containerNome.firstChild) {
        containerNome.removeChild(containerNome.firstChild);
      }

      // Adicionando novamente o h3 e o h2 com os novos valores
      const title = document.createElement('h3');
      title.textContent = 'Raça';
      containerNome.appendChild(title);
      const raca = document.createElement('h2');
      raca.textContent = `${nome.value}`;
      containerNome.appendChild(raca);
    }
    resultImg.src = data.message
    resultImg.alt = nome.value

  })
  .catch(error => {
    console.error(error)
  })
})
