//Listing all attributes with the name expand-more
document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll ('[expand-more]')

    //Creating a function for expanding
    function expanding(){
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')){
            this.innerHTML=this.dataset.showtext;
        }else 
        {
            this.innerHTML=this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }

    //adding event listener for each expand mores used
    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expanding)
    })
})