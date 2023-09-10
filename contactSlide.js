//Stating starting point
var i = 0;
var images = [];
var time = 3500;

//List for images
images[0] = "images/pexels-pixabay-2156_rotated (1).jpg";
images[1] = "images/pexels-pixabay-33684 (1).jpg";
images[2] = "images/pexels-pixabay-256379 (1).jpg";
images[2] = "images/pexels-pixabay-355956 (1).jpg";

//Changing the image funtion
function changeImg(){
    document.slideShow.src = images[i];

    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;