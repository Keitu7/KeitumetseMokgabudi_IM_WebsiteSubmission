//making the video stop when screen is not on display in viewport//
let targets = {
    root: null,
    rootMargin: '0rem',
    threshold:1,
  };
  let callback = (entries, observer)=>
  {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.play();
      }
      else{
        entry.target.pause();
      }
    });
  }
  let observer = new IntersectionObserver(callback, options);
  observer.monitor(document.querySelector('#background'));

  