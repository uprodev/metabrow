jQuery(document).ready(function ($) {

 $('.lang-wrap select').niceSelect();

 $(document).on('click', 'header .nice-select .option', function (e){
  let index = $(this).index() + 1;
  $('.nice-select .img-wrap img').hide();
  $(".nice-select .img-wrap img:nth-child(" + index + ")").show();
 });


/* var swiperFirst = new Swiper(".first-slider", {
  navigation: {
   nextEl: ".first-next",
   prevEl: ".first-prev",
  },
  noSwiping: false,
  allowTouchMove:false,
 });*/

 $(document).on('click', '.info-wrap>a', function (e) {
  e.preventDefault();
  if($(this).hasClass('is-open')){
    $(this).removeClass('is-open');
    $('.wrap-text').hide();
  }else{
    $(this).addClass('is-open');
    $('.wrap-text').show();
  }
 });

 $(document).on('click', '.wrap-text a', function (e){
  e.preventDefault();
  $('.info-wrap>a').removeClass('is-open');
  $('.wrap-text').hide();
 });

 /*open popup start*/
 $(document).on('click', '.talk-wrap a', function (e) {
   e.preventDefault();
  $.fancybox.open( $('#start'), {
   touch:false,
   autoFocus:false,
  });
 });

 /*open popup questionnaire*/
 $(document).on('click', '.popup-start a.btn-default', function (e) {
  e.preventDefault();
  $.fancybox.close();
  $.fancybox.open( $('#questionnaire'), {
   touch:false,
   autoFocus:false,
  });
 });


 // question
 $(window).on('load', function (e){
  let questionCol = $('.question-wrap').children('div').length;

  $('.total-question').html(questionCol);
 });


 /*change step*/
 $(document).on('click', '.input-wrap input', function (e) {
   let stepCurrent = $(this).closest('.step').index() + 2,
       item = $(this).closest('.step'),
     questionCol = $('.question-wrap').children('div').length,
     progress = stepCurrent/questionCol * 100;


   if(!$('.question-wrap .step:last-child').hasClass('is-active')){

    if(!item.hasClass('is-selected is-active')){
     $('.progress-total').css('width',progress+"%");

     $('.number-question').html(stepCurrent);
    }


    if(!item.hasClass('is-selected')) {

     item.addClass('is-selected')

     $('.question-wrap .step').removeClass('is-active');

     $('.question-wrap').children(".step-"+ stepCurrent +"").addClass('is-active');
    }


    if(stepCurrent > 1){
     $('.btn-prev').removeClass('is-hide');
    }


    if(item.hasClass('is-selected is-active')){
     $('.btn-next').removeClass('is-hide');
    }else{
     $('.btn-next').addClass('is-hide');
    }
   }else{

    $.fancybox.close();
    $.fancybox.open( $('#total'), {
     touch:false,
     autoFocus:false,
     afterShow : function(e){
      $(".popup-total .wrap").niceScroll({
       cursorcolor: "rgba(115, 114, 114, 0.3)",
       cursoropacitymin: 1,
       cursoropacitymax: 1,
       cursorwidth: "4px",
       zindex: "99999",
       horizrailenabled: false,
       cursorborder: "0px solid #fff",
      });
     },
    });
   }


 });




 $(document).on('click', '.btn-prev', function (e){
  e.preventDefault();
  let stepActive = $('.question-wrap').find('.is-active').index(),
    questionCol = $('.question-wrap').children('div').length,
    progress = stepActive/questionCol * 100;

  $('.progress-total').css('width',progress+"%");

  $('.question-wrap .step').removeClass('is-active');

  $('.question-wrap').children(".step-"+ stepActive +"").addClass('is-active');

  $('.btn-next').removeClass('is-hide');

  $('.number-question').html(stepActive);

  if(stepActive === 1){
   $('.btn-prev').addClass('is-hide');
  }

 });

 $(document).on('click', '.btn-next', function (e){
  e.preventDefault();
  let stepActive = $('.question-wrap').find('.is-active').index() + 2,
     questionCol = $('.question-wrap').children('div').length,
      progress = stepActive/questionCol * 100;

  $('.progress-total').css('width',progress+"%");
  $('.question-wrap .step').removeClass('is-active');

  $('.question-wrap').children(".step-"+ stepActive +"").addClass('is-active');

  $('.number-question').html(stepActive);

  if($('.question-wrap .step').hasClass('is-selected is-active')){
   $('.btn-next').removeClass('is-hide');
  }else{
   $('.btn-next').addClass('is-hide');
  }

  if(stepActive > 1){
   $('.btn-prev').removeClass('is-hide');
  };


 });



  /*mob slider*/

 function addSlider() {
  let mobSlider1 = $(".mob-slider"),
    mobSlider1Wrap = $(".mob-slider .answer-options"),
    slide1 = $(".mob-slider .answer-options .input-wrap"),
    mobSlider2 = $(".mob-slider-2"),
    mobSlider2Wrap = $(".mob-slider-2 .product-wrap"),
    slide2 = $(".mob-slider-2 .product-wrap .item");
  if(window.innerWidth < 576){
   mobSlider1.addClass('swiper');
   mobSlider2.addClass('swiper');
   mobSlider1Wrap.addClass('swiper-wrapper');
   mobSlider2Wrap.addClass('swiper-wrapper');
   slide1.addClass('swiper-slide');
   slide2.addClass('swiper-slide');
   var swiperMob1 = new Swiper(".mob-slider", {
    slidesPerView: "auto",
    /*slidesPerView: 2,*/
    spaceBetween: 15,
    pagination: {
     el: ".swiper-mob-1",
     clickable: true,
    },
   });

   var swiperMob2 = new Swiper(".mob-slider-2", {
    slidesPerView: "auto",
    /*slidesPerView: 2,*/
    spaceBetween: 15,
    pagination: {
     el: ".swiper-mob-2",
     clickable: true,
    },
   });

  }else{

   mobSlider1.removeClass('swiper');
   mobSlider1Wrap.removeClass('swiper-wrapper');
   slide1.removeClass('swiper-slide');
   $('.mob-slider').destroy();

   mobSlider2.removeClass('swiper');
   mobSlider2Wrap.removeClass('swiper-wrapper');
   slide2.removeClass('swiper-slide');
   $(".mob-slider-2").destroy();
  }
 };

 $( window ).resize(addSlider);
 $( document ).ready(addSlider);

});

