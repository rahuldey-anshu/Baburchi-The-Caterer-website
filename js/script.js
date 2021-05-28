$(document).ready(function(){
//   toggler-btn
  $('.navbar-toggler').click(function(){
      $('.navbar-toggler').toggleClass('change')
  })
  
//   sticky navbar less padding
 
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position>= 718)
    {
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
        
    }
    else{
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
         
    }
})
  
//   smoothScroll
  $('.nav-item a').click(function(link){
      link.preventDefault();
      let target = $(this).attr('href');
      
      $('html , body').animate({
          scrollTop: $(target).offset().top - 25
      },2100);
  })
  
  //Back to top
  $(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position>= 718)
    {
        $('#back-to-top').addClass('scrollTop');
        
        
    }
    else{
        $('#back-to-top').removeClass('scrollTop');
    }
})

  
  
    //ripples
    $("header , .info").ripples({
        dropRadius: 1.3,
        perturbance: 0.1,
    
    });
// magnific popup
$('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
    // other options
  });




})