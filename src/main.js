import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery, notify, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';

const form = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let query = '';
let page = 1;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  query = event.currentTarget.searchQuery.value.trim();

  if (query === '') {
    notify('Please enter a search query.');
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();

  try {
    showLoader();
    const data = await fetchImages(query, page);
    hideLoader();
    if (data.hits.length === 0) {
      notify('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderImages(data.hits);
      if (data.totalHits > 15) {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    hideLoader();
    console.error(error);
    notify('Something went wrong. Please try again.');
  }
}

async function onLoadMore() {
  page += 1;
  try {
    showLoader();
    const data = await fetchImages(query, page);
    hideLoader();
    renderImages(data.hits);
    if (page * 15 >= data.totalHits) {
      hideLoadMoreButton();
      notify("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    hideLoader();
    console.error(error);
    notify('Something went wrong. Please try again.');
  }
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
