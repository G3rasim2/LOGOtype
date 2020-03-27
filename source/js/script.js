$(document).ready(function() {
  $('#catalogCarousel').owlCarousel({
      dots:true,
      navText:"",
      loop: true,
      startPosition:0,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          320:{
              items:1
          }
      }
  });
  $('#bestsellerCarousel').owlCarousel({
      nav: true,
      navText:["",""],
      loop: true,
      startPosition:0,
      margin:20,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          320:{
              items:3
          }
      }
  });
  $('#bestseller2Carousel').owlCarousel({
      nav: true,
      navText:["",""],
      loop: true,
      startPosition:0,
      margin:20,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          320:{
              items:3
          }
      }
  });
  $('#newsCarousel').owlCarousel({
      nav: true,
      navText:["",""],
      loop: true,
      startPosition:0,
      margin:20,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          320:{
              items:3
          }
      }
  });
});