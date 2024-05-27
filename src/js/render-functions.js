import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');

export const renderImages = (images) => {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => `
    <div class="photo-card">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${image.likes}</p>
        <p class="info-item"><b>Views</b> ${image.views}</p>
        <p class="info-item"><b>Comments</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
      </div>
    </div>
  `).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
};

export const notify = (message) => {
  iziToast.info({
    title: '',
    message: message,
     position: 'topRight'
  });
};

export const showLoadMoreButton = () => {
  const loadMoreBtn = document.querySelector('.load-more');
  loadMoreBtn.style.display = 'block';
};

export const hideLoadMoreButton = () => {
  const loadMoreBtn = document.querySelector('.load-more');
  loadMoreBtn.style.display = 'none';
};
