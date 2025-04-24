
export default function busca() {
  const botaoBusca = document.querySelector('.icone-busca');
  const resultado = document.querySelector('#modal p');

  botaoBusca.addEventListener('click', () => {
    const campoBusca = document.querySelector('.campo-busca');
    const termoBusca = campoBusca.value.toLowerCase();

    resultado.textContent = termoBusca === ''
      ? 'Você não buscou por nada'
      : `Você buscou por: ${termoBusca}`;

    // Limpa o campo
    campoBusca.value = '';
  });
}
