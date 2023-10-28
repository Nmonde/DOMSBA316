const photoContainerQuery = document.querySelector("#photoContainer");
const imagesSources = ["DOM316Images/Adrian1.jpg, DOM316Images/Adrian2.jpg, DOM316Images/Adrian3.jpg"];
const photoTemplate = document.getElementById("photoTemplate");

function imagesFadeInandOut(imagesSource, caption) {
    const photoFragment = document.importNode(photoTemplate.content,true);
    const newPhotoItem = photoFragment.querySelector("photo");
    const photoImage = newPhotoItem.querySelector("img");

photoImage.src = imagesSource;
photoImage.alt = caption;

newPhotoItem.querySelector(".caption").textContent = caption;
newPhotoItem.style.opacity = 0;
photoContainerQuery.appendChild(newPhotoItem);

setTimeout(() => {
    newPhotoItem.style.opacity= 1;
}, 1000)

imagesSources.forEach(function(imagesSource, index) {
    imagesFadeInandOut(imagesSource, `Adrian the mad scientist ${index+1}!`);
    });


    const addPhotoForm = Document.getElementById("addPhotoForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    let submissionCount =0;
    const maxSubmissions =3;

    addPhotoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        submissionCount++;

        if (submissionCount === maxSubmissions) {
            addPhotoForm.style.display = "none";
            thankYouMessage.style.display = "block";
        }
    });



const togglePhotosButton = document.getElementById("#togglePhotosButton");
const photos = photoContainerQuery.querySelectorAll("img");
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
