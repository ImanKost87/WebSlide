var timeInterval = 0;
var currentPictureNumber = 0;
var picturesNumber = 5;
var fileNames = ["src/img/cat1.jpg", "src/img/cat2.jpg", "src/img/cat3.jpg", "src/img/cat4.jpg", "src/img/cat5.jpg"];

function playSound() {
    const audio = new Audio();
    audio.src = "src/audio/cat.wav";
    audio.play();
}

function nextSlide(n) {
    if (document.getElementById("seq").checked) {
        currentPictureNumber = (picturesNumber + currentPictureNumber + n) % picturesNumber;
    } else {
        currentPictureNumber = Math.floor(Math.random() * picturesNumber);
    }
    // console.log(currentPictureNumber);

    showImagesAndMusic(currentPictureNumber);
}

function showSlide(fileName) {
    fileName = fileName.substr(32);
    currentPictureNumber = fileNames.indexOf(fileName);

    showImagesAndMusic(currentPictureNumber);
}

function showImagesAndMusic(index) {
    if (document.getElementById("music").checked) {
        playSound();
    }

    description.innerHTML = 'Котик номер ' + index;
    document.getElementById("image").src = fileNames[index];

    document.getElementById("prev1").src = document.getElementById("image").src;
    document.getElementById("prev2").src = fileNames[(index + 1) % picturesNumber];
    document.getElementById("prev3").src = fileNames[(index + 2) % picturesNumber];
    document.getElementById("prev4").src = fileNames[(index + 3) % picturesNumber];

    // console.log(fileNames, index);
}

function stopSlideShow() {
    clearInterval(timeInterval);
    timeInterval = 0;
}

function autoNextSlide() {
    stopSlideShow()
    console.log(currentPictureNumber);

    if (timeInterval == 0) {
        timeInterval = setInterval("nextSlide(1)", document.getElementById("show-time").value);
    }
}

const fileUploader = document.getElementById('file-uploader');

var loadFile = function(event) {
    // var image = document.getElementById('image');
    // image.src = URL.createObjectURL(event.target.files[0]);

    fileNames.push(URL.createObjectURL(event.target.files[0]));
    picturesNumber = picturesNumber + 1;
    currentPictureNumber = fileNames.length - 1;

    showImagesAndMusic(currentPictureNumber)
};

