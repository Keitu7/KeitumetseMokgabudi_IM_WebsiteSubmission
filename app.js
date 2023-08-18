function getLink(){
     
    //Getting the Element
    let newLink = document.getElementById("refer");


    //creating an Array
    let links = [];

    //setting the Link
    links[0] = "https://youtu.be/QEZVTvtvDt4";

    links[1] = "https://www.nasa.gov/about/index.html";

    links[2] = "https://api.nasa.gov/planetary/earth/assets";

    links[3] = "https://blog.logrocket.com/optimizing-video-backgrounds-css-javascript/#how-create-video-backgrounds"

    //randomly generate Number
    let i = Math.floor(Math.random() * links.length);

    //setting in the link
    newLink.innerHTML = links[i];

}