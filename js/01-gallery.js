import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListEl = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryListEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryListEl.addEventListener("click", onImageClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImgBigSize = event.target.dataset.source;
  const lightBoxHtml = `<img width="1280" height="800" src=${selectedImgBigSize}>`;
  const instance = basicLightbox.create(lightBoxHtml, {
    onShow: () => {
      document.addEventListener("keydown", closeModal);
    },
    onClose: () => {
      document.removeEventListener("keydown", closeModal);
    },
  });
  instance.show();

  function closeModal(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
