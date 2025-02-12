$(window).on('load', function(){
    $('body').hide();
    $(document).addClass('preloader');
    
    setTimeout(function () {

        $('.loader').removeClass("preloader");
        $('body').fadeIn();
      },1100 );
});
$('.2').css({"opacity":'0,8'});

$('.btn-explore').click( function(){
  var link = 'order.html';
      setTimeout(function(){
        $('body').fadeOut(); 
        window.location.href = link ;
      },500);
        
});