function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages =document.querySelectorAll('.slide-in');

  function checkSlide(e){
    sliderImages.forEach(sliderImage=>{
        sliderImage.classList.add('transform');
      const slideInAt=(window.scrollY+window.innerHeight)-sliderImage.offsetHeight/2;
      const imageBottom=sliderImage.offsetTop+sliderImage.offsetHeight;
      const isHalfShown=slideInAt>sliderImage.offsetTop;
      const isNotScrolledPast=window.scrollY<imageBottom;
      console.log(sliderImage.offsetHeight,slideInAt,imageBottom,isHalfShown,isNotScrolledPast)
      if(isHalfShown&& isNotScrolledPast){
        sliderImage.classList.add('active');
      }
      else{
        sliderImage.classList.remove('active');
      }
    });
  }
  function removeTransition(e){
    sliderImages.forEach(sliderImage=>{
        sliderImage.classList.remove('transform');
    });
  }
  window.addEventListener('load',debounce(checkSlide));
  sliderImages.forEach(addEventListener('transitionend',removeTransition));