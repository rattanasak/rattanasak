// scroll function
$(document).ready(function() {
$('#sectionOne').on('click',function(){ //Scoll för post-one nav id
  $('html,body').animate({         //kalla upp animatemation function
    scrollTop: $('#post1').offset().top //välj section ID
  })
})

$('#SectionTwo').on('click',function(){ // scroll för post-two
  $('html,body').animate({              //kalla upp animatemation function
    scrollTop: $('#post2').offset().top //välj section ID
  })
})

$('#sectionThree').on('click',function(){ // scrollTop for post-three
  $('html,body').animate({                //kalla upp animatemation function
    scrollTop: $('#post3').offset().top   //välj section ID
  })
})

   //kontrollera knapp display
   $(window).scroll(function(){
       if ($(this).scrollTop() > 600) {
           $('.tillbaka').fadeIn();
       } else {
           $('.tillbaka').fadeOut();
       }
   });
});
