import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(itemsArray) {
  return itemsArray
    .map(({ preview, original, description }) => {
      return `
          <li class="gallery__item">
          <a href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
          </li>
          `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
