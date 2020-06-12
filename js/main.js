let slider = new Vue({
  el: '.slideshow',
  data: {
    sliders: ['img/item-1.jpg',
    'img/item-2.jpg',
    'img/item-3.jpg',
    'img/item-4.jpg']
  }
})

$('.slider').slick({
  draggable: true,
  arrows: true,
  dots: true,
  fade: true,
  speed: 900,
  infinite: true,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  touchThreshold: 100
})
