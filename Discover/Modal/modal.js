const button = document.getElementById('openModal')
const divModal = document.querySelector('.modal-wrapper')

button.addEventListener('click', openModal)

function openModal () {
  divModal.classList.remove('invisible')
}

document.addEventListener('keydown', exitModal)

function exitModal(event) {
  const isEscKey = event.key === "Escape"
  const existClassInvisible = divModal.classList.contains('invisible')

  if (isEscKey && !existClassInvisible) {
    divModal.classList.add('invisible')
  }
}