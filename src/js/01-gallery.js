import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryContainer = document.querySelector(".gallery");

function createGalleryCards(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `;
    })
    .join("");
}

const cardsMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
console.log(galleryItems);

new SimpleLightbox(".gallery a", {
  caption: true,
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});


console.log(galleryItems);