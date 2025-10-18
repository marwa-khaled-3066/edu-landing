const open = document.getElementById("modal-open");
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('modal-close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});