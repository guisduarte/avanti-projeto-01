export default function modal() {
  const modal = document.querySelector('#modal');
  const openModalBtn = document.querySelector('.open');
  const closeModalBtn = document.querySelector('.close');

  openModalBtn.addEventListener('click', () => modal.showModal());
  closeModalBtn.addEventListener('click', () => modal.close());
}
