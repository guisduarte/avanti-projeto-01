export default function menu() {
  
  const botaoTodasCategorias = document.querySelector('.botao-menu');
  const menu = document.querySelector('.container__departamentos-categorias');
  const listaDepartamentos = document.querySelectorAll('.lista-departamentos');
  const containerDepartamentos = document.querySelector(
    '.container__lista-departamentos',
  );
  const todasListas = document.querySelectorAll('.container__lista-categorias');
  const tituloDepartamento = document.querySelectorAll(
    '.container__lista-categorias h2',
  );

  // Abrir menu
  botaoTodasCategorias.addEventListener('mouseover', () => {
    menu.classList.add('ativo');
    botaoTodasCategorias.classList.add('ativo');
    containerDepartamentos.style.display = 'flex';
  });

  // Fechar menu
  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('ativo');
    botaoTodasCategorias.classList.remove('ativo');
    esconderTodasAsListas();
    tituloDepartamento.forEach((departamento) =>
      departamento.classList.remove('ativo'),
    );
  });

  // Mouseover nos departamentos
  listaDepartamentos.forEach((departamento) => {
    departamento.addEventListener('mouseover', () => {
      const idLista = departamento.dataset.lista;

      listaDepartamentos.forEach((dep) => dep.classList.remove('ativo'));
      mostrarLista(idLista);
      departamento.classList.add('ativo');
    });

    departamento.addEventListener('click', () => {
      const idLista = departamento.dataset.lista;
      mostrarLista(idLista);
      containerDepartamentos.style.display = 'none';

      tituloDepartamento.forEach((departamento) =>
        departamento.classList.add('ativo'),
      );
    });
  });

  // Mostra só a lista específica
  function mostrarLista(id) {
    esconderTodasAsListas();
    const listaSelecionada = document.querySelector(`.${id}`);
    if (listaSelecionada) {
      listaSelecionada.classList.add('ativo');
    }
  }

  // Esconde todas
  function esconderTodasAsListas() {
    todasListas.forEach((lista) => lista.classList.remove('ativo'));
  }
}
