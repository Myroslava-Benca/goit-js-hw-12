import{a as h,S as g,i as b}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const L="43559338-49e51b38628b18648a05e4f59",w="https://pixabay.com/api/",u=async(e,o)=>(await h.get(w,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data;let S=new g(".gallery a");const y=e=>{const o=document.querySelector(".gallery"),c=e.map(s=>`
    <div class="photo-card">
      <a href="${s.largeImageURL}">
        <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${s.likes}</p>
        <p class="info-item"><b>Views</b> ${s.views}</p>
        <p class="info-item"><b>Comments</b> ${s.comments}</p>
        <p class="info-item"><b>Downloads</b> ${s.downloads}</p>
      </div>
    </div>
  `).join("");o.insertAdjacentHTML("beforeend",c),S.refresh()},q=()=>{const e=document.querySelector(".gallery");e.innerHTML=""},n=e=>{b.info({title:"",message:e})},v=()=>{const e=document.querySelector(".load-more");e.style.display="block"},f=()=>{const e=document.querySelector(".load-more");e.style.display="none"},M=document.getElementById("search-form"),P=document.querySelector(".load-more"),m=document.querySelector(".loader");let i="",a=1;M.addEventListener("submit",B);P.addEventListener("click",$);async function B(e){if(e.preventDefault(),i=e.currentTarget.searchQuery.value.trim(),i===""){n("Please enter a search query.");return}a=1,q(),f();try{p();const o=await u(i,a);l(),o.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):(y(o.hits),o.totalHits>15&&v())}catch(o){l(),console.error(o),n("Something went wrong. Please try again.")}}async function $(){a+=1;try{p();const e=await u(i,a);l(),y(e.hits),a*15>=e.totalHits&&(f(),n("We're sorry, but you've reached the end of search results."))}catch(e){l(),console.error(e),n("Something went wrong. Please try again.")}}function p(){m.style.display="block"}function l(){m.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
