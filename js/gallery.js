function activateGallery() {
    let currentClass = "current";
    let imageDescription = document.querySelector('#gallery-info > .description');
    let imageTitle = document.querySelector('#gallery-info > .title');
    let mainImage = document.querySelector('#gallery-photo > img');
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    
    thumbnails.forEach(thumb => {
      // preload large images
      let largeVersion = thumb.dataset.largeVersion;
      let preloadImage = new Image();
      preloadImage.setAttribute('src', largeVersion);

      thumb.addEventListener("click", function() {
          // set main image
          mainImage.setAttribute('src', largeVersion);
          mainImage.setAttribute('alt', thumb.alt);
          // set current thumbnail
          document.querySelector(".current").classList.remove(currentClass);
          thumb.parentNode.classList.add(currentClass);
          // set image details
          imageDescription.innerHTML = thumb.dataset.description;
          imageTitle.innerHTML = thumb.dataset.title;
      });
    });
}