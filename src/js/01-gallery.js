// Add imports above this line
import { galleryItems } from '../js/gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

const createGalleryEl = galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');

galleryEl.innerHTML = createGalleryEl;

var lightbox = new SimpleLightbox('.gallery a', {
    /* options */

    captionDelay: 250,
    captionsData: "alt",
});