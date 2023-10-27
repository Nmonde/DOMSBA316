const photoContainerQuery = document.querySelector("#photoContainer");
const inputElements = document.querySelectorAll("input");
const photos = photoContainer.querySelectorAll("img");


function fadeInImages(images, delay) {
    let index = 0;

function showNextImage() {
    if (index < images.length) {
        images[index].style.opacity = 1;
        index++;
        setTimeout(showNextImage, delay);
    }
}
showNextImage();
}
photos.forEach(function(photos) {
    photos.style.opacity = 0;
});

fadeInImages(photos, 1000);

const imageSources = ["DOM316Images/Adrian1.jpg, DOM316Images/Adrian2.jpg, DOM316Images/Adrian3.jpg"];
const photoTemplate = document.getElementById("photoTemplate");
imageSources.array.forEach(function(imageSources) {
const photoFragment = document.importNode(photoTemplate.content, true);
const newPhotoItem = photoFragment.querySelector(".photo");
newPhotoItem.querySelector("img").src = "DOM316Images/Adrian1.jpg; DOM316Images/Adrian2.jpg; DOM316Images/Adrian3.jpg";
newPhotoItem.querySelector(".caption").textContent = "Adrian the new Mad Scientist!";

const photoContainerQuery.appendChild(newPhotoItem);

    
});





const addPhotoForm = document.getElementById("addPhotoForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const submissionCount= 0;
const maxSubmissions= 3;
addPhotoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    submissionCount++;
    if (submissionCount === maxSubmissions) {
    addPhotoForm.style.display = "none";
    thankYouMessage.style.display = "block";
    }
});


photos.forEach(function(photos) {
    console.log(photos.src);

});


const togglePhotosButton = document.getElementById("togglePhotosButton");
const photo = document.querySelectorAll("#photoContainerimg");

const photosHidden = false;
togglePhotosButton.addEventListener("click", function() {
    photosHidden = !photosHidden;

    photos.forEach(photo => {
        if (photosHidden) {
            photo.style.display = "none";
        } else {
            photo.style.display = "block";
        }
    });
});


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("Welcome to our website!");
    }
});
