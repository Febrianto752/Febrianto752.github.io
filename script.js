$('.page-scroll').on('click', function(e) {

  var tujuan = $(this).attr('href');
 
  var elemenTujuan = $(tujuan);
 
  $('html, body').animate({
   scrollTop: elemenTujuan.offset().top - 50
  },1000, 'easeInOutExpo');
 
  e.preventDefault();
 });



 // Parallax

 // About
 $(window).on('load', function(){
  $('.about .pKiri').addClass('pMuncul');
  $('.about .pKanan').addClass('pMuncul');
 });




 $(window).scroll(function(){
   let wScroll = $(this).scrollTop();

   //Jumbotron
   // kecepatan berbeda pada element saat scroll
  $('.jumbotron img').css({
    'transform': `translate(0px, ${wScroll/2.5}%)`
  });

  $('.jumbotron h1').css({
    'transform': `translate(0px, ${wScroll/2}%)`
  });

  $('.jumbotron p').css({
    'transform': `translate(0px, ${wScroll/1.2}%)`
  });


  // portfolio
  // efek landing page
  if(wScroll > $('.portfolio').offset().top - 200){
    $('.portfolio .thumbnail').each(function(i){

      setTimeout(function(){
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 300 * (i + 1));
    })
  }

 });


