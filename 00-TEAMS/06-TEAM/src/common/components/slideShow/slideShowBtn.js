// if (slider !== null) {
//   const sliderSection = document.querySelectorAll('.slider__section');
//   const sliderSectionLast = sliderSection[sliderSection.length - 1];
//   slider.insertAdjacentElement('afterbegin', sliderSectionLast);
// }
function next(position) {
  //   // eslint-disable-next-line no-debugger
  // eslint-disable-next-line no-debugger
  debugger;
  const slider = document.querySelector('#slider');
  const sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
  //   if (slider !== undefined) {
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
//   }
}

export default next;
