import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainerEl.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(itemsArray) {
  return itemsArray
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>
            `;
    })
    .join("");
}

let instance;

function onGalleryItemClick(event) {
  event.preventDefault();
  const galleryItem = event.target;

  if (galleryItem.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(`
          <img src="${galleryItem.dataset.source}" alt="${galleryItem.alt}">
      `);

  openModal(instance);
}

function openModal(instance) {
  instance.show();
  document.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(event) {
  console.log("Escape button EventListener work check!");
  if (event.code === "Escape") {
    closeModal(instance);
  }
}

function closeModal(instance) {
  instance.close();
  document.removeEventListener("keydown", onEscKeyPress);
}
