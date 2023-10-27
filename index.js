const photoContainer = document.getElementById("photoContainer");
const photoContainerQuery = document.querySelector("#photoContainer");
const addPhotoForm = document.querySelectorAll("input");


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
})

