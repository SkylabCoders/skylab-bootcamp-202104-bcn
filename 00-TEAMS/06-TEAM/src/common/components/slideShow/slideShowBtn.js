function next(position) {
  const slider = document.querySelector('#slider');
  const sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
  switch (position) {
    case 'RIGHT':
      slider.style.marginLeft = '-200%';
      break;
    case 'LEFT':
      slider.style.marginLeft = '0%';
      break;
    default:
      slider.style.marginLeft = '0%';
      break;
  }
  slider.style.transition = 'all 0.5s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = '-100%';
  }, 500);
}

export default next;
