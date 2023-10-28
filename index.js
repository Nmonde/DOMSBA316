const photoContainerQuery = document.querySelector("#photoContainer");
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

const photoContainer = document.querySelector("photoContainer");
const delayBetweenImages = 1000;
const imagesSources = ["DOM316Images/Adrian1.jpg, DOM316Images/Adrian2.jpg, DOM316Images/Adrian3.jpg"];
let index= 0;

function imagesFadeInandOut() {
    if (index < imagesSources.length) {
        const newPhotoItem = document.createElement("img");
        newPhotoItem.src = imagesSources[index];
        newPhotoItem.alt = "Adrian the mad scientist!";
        newPhotoItem.classList.add("photo");
        newPhotoItem.style.opacity = 0;

        photoContainer.appendChild(newPhotoItem);

        setTimeout(() => {
            newPhotoItem.style.opacity = 1;
            index++;
            imagesFadeInandOut();
        }, delayBetweenImages);
    }
}
imagesFadeInandOut();  




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


const togglePhotosButton = document.getElementById("#togglePhotosButton");
const photosContainerimg = document.querySelectorAll("#photoContainerimg");

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
