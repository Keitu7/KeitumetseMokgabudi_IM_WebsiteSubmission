let noOfCharac = 1465; 
let contents = document.querySelectorAll(".content");
contents.forEach(content => {

    //here we want to check when the text length is less than 165 (number of Characters)...then hide the rest of the text//
    if (content.textContent.length < noOfCharac)
    {
        content.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = content.textContent.slice
        (0,noOfCharac);
        let moreText = content.textContent.slice 
        (noOfCharac);

        content.innerHTML = `${displayText}<span class="ellipses">...</span><span class="hide more">${moreText}</span>`;
    }

    function readMore(btn){
        let dataBlog = btn.parentElement; 
        dataBlog.querySelector(".ellipses").classList.toggle
        ("hide");
        btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
    }
})