const open = document.getElementById("modal-open");
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('modal-close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

const art_open = document.getElementById("art");
const art_modal_container = document.getElementById('art-container');
const art_close = document.getElementById('art-close');

art_open.addEventListener('click', () => {
    art_modal_container.classList.add('show');
});

art_close.addEventListener('click', () => {
    art_modal_container.classList.remove('show');
});

const science_open = document.getElementById("science");
const science_modal_container = document.getElementById('science-container');
const science_close = document.getElementById('science-close');

science_open.addEventListener('click', () => {
    science_modal_container.classList.add('show');
});

science_close.addEventListener('click', () => {
    science_modal_container.classList.remove('show');
});


const empty_modal_container = document.getElementById('empty-container');
const empty_close = document.getElementById('empty-close');

empty_close.addEventListener('click', () => {
    empty_modal_container.classList.remove('show');
});

const geo_open = document.getElementById("geo");
const music_open = document.getElementById("music");
const lit_open = document.getElementById("lit");

geo_open.addEventListener('click', () => {
    empty_modal_container.classList.add('show');
});
music_open.addEventListener('click', () => {
    empty_modal_container.classList.add('show');
});
lit_open.addEventListener('click', () => {
    empty_modal_container.classList.add('show');
});

