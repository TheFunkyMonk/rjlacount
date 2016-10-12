export default function() {

  smoothScroll.init({
    selector: '[data-scroll]',
    speed: 600,
    easing: 'easeInOutCubic',
    offset: 96
  });
}
