import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryListEl.addEventListener("click", onImageClick);
galleryListEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
      `;
    })
    .join("");
}

function onImageClick(event) {
  lightbox.open();
}
