function activateGallery() {
    let currentClass = "current";
    let imageDescription = document.querySelector('#gallery-info > .description');
    let imageTitle = document.querySelector('#gallery-info > .title');
    let mainImage = document.querySelector('#gallery-photo > img');
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    
    thumbnails.forEach(thumb => {
      thumb.addEventListener("click", function() {
          mainImage.setAttribute('src', thumb.dataset.largeVersion);
          mainImage.setAttribute('alt', thumb.alt);
          
          document.querySelector(".current").classList.remove(currentClass);
          thumb.parentNode.classList.add(currentClass);
          
          imageDescription.innerHTML = thumb.dataset.description;
          imageTitle.innerHTML = thumb.dataset.title;
      });
    });
}