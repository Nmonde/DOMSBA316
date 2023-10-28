
const photoContainerQuery = document.querySelector("#photoContainer");
const imagesSources = ["DOM316Images/Adrian1.jpg, DOM316Images/Adrian2.jpg, DOM316Images/Adrian3.jpg"];
const photoTemplate = document.getElementById("photoTemplate");

function imagesFadeInandOut(imagesSource, caption) {
    const photoFragment = document.importNode(photoTemplate.content,true);
    const newPhotoItem = photoFragment.querySelector(".photo");
    const photoImage = newPhotoItem.querySelector("img");

photoImage.src = imagesSource;
photoImage.alt = caption;

newPhotoItem.querySelector(".caption").textContent = caption;
newPhotoItem.style.opacity = 1;
photoContainerQuery.appendChild(newPhotoItem);

setTimeout(() => {
    newPhotoItem.style.opacity= 1;
}, 10000)
}
imagesSources.forEach(function(imagesSource ) {
    imagesFadeInandOut(imagesSource, `Adrian the mad scientist!`);
    });


    const addPhotoForm = document.getElementById("addPhotoForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    let submissionCount =0;
    const maxSubmissions =3;

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    addPhotoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        emailError.style.display = "none";

        if(!validateEmail(emailInput.value)){
            emailError.style.display = "block";
            return; 
        }  
            submissionCount++;
    
                if (submissionCount === maxSubmissions) {
            addPhotoForm.style.display = "none";
            thankYouMessage.style.display = "block";
        }
    });


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

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

const header = document.getElementById("header");
header.textContent= "New wavvvve Scientist.";


