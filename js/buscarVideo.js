import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideos(dadosDePesquisa);

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    const lista = document.querySelector('[data-lista]');
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if(busca.length === 0) {
        lista.innerHTML = `<h2 class= 'mensagem__titulo'>Não existem videos com esse termo</h2>`;
    }
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));