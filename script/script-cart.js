var lol =[];
var titleFood = [];
var getTheImage = [];

//reload animation
$(window).on('load', function(){
    $('body').hide();
    $(document).addClass('preloader');
    
    setTimeout(function () {

        $('.loader').removeClass("preloader");
        $('body').fadeIn();
      },800 );
});
// function for Cart
$('#img-cart').on('click', function(){
    var showTheListCart = $('#list-cart').show();
    $('#silang').show();
});
$('#silang').on('click', function(){
    $(this).hide();
    var closeTheListCart = $('#list-cart').hide();
    
})
//function for button list food
  $('.btn1').on('click', function(){  
    
             var laukForNasbung = $(this).text();
            var priceFOod = $(this).find('#price1').text();
            var removeDropdown = $('.dropdown-food1');
            var getTheTitle = $('#txt-food1').text().trim();
            
            //function for showing image        
           var showTheImage =  $('#imgFood1').attr('src');
           
            //function disable button
            removeDropdown.removeClass();
            setTimeout(function() { 
           
            alert('Item Telah Ditambahkan ke Keranjang, Mohon Hanya Memilih Satu Item, Mohon refresh jika ada kesalahan')
            
        },70);
         lol.push(laukForNasbung)
         titleFood.push(getTheTitle)
         getTheImage.push(showTheImage)
         $('.image').attr('src', showTheImage);
         showThis(this);
         notif(this)
         playingSound(this)

    });

    $('.btn2').on('click', function(){
        var laukForNasbung2 = $(this).text().trim();
        var priceFOod2 = $(this).find('#price2').text();
        var getTheTitle2 = $('#txt-food2').text().trim();
            //function for showing image        
           var showTheImage2 =  $('#imgFood2').attr('src');
        
        var removeDropdown2 = $('.dropdown-food2')
            removeDropdown2.removeClass();
            
        setTimeout(function() { 
           
            alert('Item Telah Ditambahkan ke Keranjang, Mohon Hanya Memilih Satu Item, Mohon refresh jika ada kesalahan')
            
        },70);
        lol.push(laukForNasbung2)
         titleFood.push(getTheTitle2)
         getTheImage.push(showTheImage2)
         $('.image').attr('src', showTheImage2);
         showThis(this);
         notif(this)
         playingSound(this)
    });

    $('.btn3').on('click', function(){
        var laukForNasbung3 = $(this).text().trim($('#price3'));
        var priceFOod3 = $(this).find('#price3').text();
        var removeDropdown3 = $('.dropdown-food3')
        var getTheTitle3 = $('#txt-food3').text().trim();
        var showTheImage3 =  $('#imgFood3').attr('src');
            removeDropdown3.removeClass();
        setTimeout(function() { 
           
            alert('Item Telah Ditambahkan ke Keranjang, Mohon Hanya Memilih Satu Item, Mohon refresh jika ada kesalahan')
            
        },70);
        lol.push(laukForNasbung3)
        titleFood.push(getTheTitle3)
        getTheImage.push(showTheImage3)
        $('.image').attr('src', showTheImage3);
        showThis(this);
        notif(this)
        playingSound(this)
        
    });

    $('.btn4').on('click', function(){
        var laukForNasbung4 = $(this).text();
        var priceFOod4 = $(this).find('#price4').text();
        var removeDropdown4 = $('.dropdown-food4')
        var getTheTitle4 = $('#txt-food4').text().trim();
        var showTheImage4 =  $('#imgFood4').attr('src');
        setTimeout(function() { 
           
            alert('Item Telah Ditambahkan ke Keranjang, Mohon Hanya Memilih Satu Item, Mohon refresh jika ada kesalahan')
            
        },70);
        lol.push(laukForNasbung4)
        titleFood.push(getTheTitle4)
        getTheImage.push(showTheImage4)
        $('.image').attr('src', showTheImage4);
        showThis(this);
        notif(this)
        playingSound(this)
        
    });

    function showThis(){
        
        if(getTheImage.length >0){
            $('#list-cart .li-list:nth-child(1) .image').attr('src', getTheImage[0]).show()
            $('#list-cart .li-list:nth-child(1) .dropdown-item').text(titleFood[0] +"\xa0"+ lol[0]) 
            $('#list-cart .li-list:nth-child(1) .total-item').show();
            
              
        }
        if(getTheImage.length >1){
            $('#list-cart .li-list:nth-child(2) .image').attr('src', getTheImage[1]).show()
            $('#list-cart .li-list:nth-child(2) .dropdown-item').text(titleFood[1] +"\xa0"+ lol[1])
            $('#list-cart .li-list:nth-child(2) .total-item').show();
        }
        if(getTheImage.length >2){
            $('#list-cart .li-list:nth-child(3) .image').attr('src', getTheImage[2]).show()
            $('#list-cart .li-list:nth-child(3) .dropdown-item').text(titleFood[2] +"\xa0"+ lol[2])
            $('#list-cart .li-list:nth-child(3) .total-item').show();
        }if(getTheImage.length >3){
            $('#list-cart .li-list:nth-child(4) .image').attr('src', getTheImage[3]).show()
            $('#list-cart .li-list:nth-child(4) .dropdown-item').text(titleFood[3] +"\xa0"+ lol[3])
            $('#list-cart .li-list:nth-child(4) .total-item').show();
        }if(getTheImage.length >4){
            $('#list-cart .li-list:nth-child(5) .image').attr('src', getTheImage[4]).show()
            $('#list-cart .li-list:nth-child(5) .dropdown-item').text(titleFood[4] +"\xa0"+ lol[4])
            $('#list-cart .li-list:nth-child(5) .total-item').show();
            $('.dropdown-food4').removeClass();
        }
    }
    //notif
    function notif(){
        if(lol.length > 0){
            $('.notif').show().text(lol.length);

        }
    
    }
    function playingSound(){
        var audio = new Audio ('music/play.mp3')
        audio.play();
        audio.volume = 1.0;
      }
      //function for button submit
$('.btnSubmit').on('click', function(){
    var totalItem3 =  $('#list-cart .li-list:nth-child(3) .total-item').val()
    var totalItem =  $('#list-cart .li-list:nth-child(1) .total-item').val()
    var totalItem2 =  $('#list-cart .li-list:nth-child(2) .total-item').val()
    var totalItem4 =  $('#list-cart .li-list:nth-child(4) .total-item').val()
    var totalItem5 =  $('#list-cart .li-list:nth-child(5) .total-item').val()
    if($.trim(lol).length <0){
      alert('Tolong Isi Keranjang, Keranjang Masih Kosong')
      }
     else if(lol.length === 1){
       var sendMsg = 'Halo,Saya%20ingin%20memesan%20,%0A' + titleFood[0] +"\xa0"+ lol[0]+',\xa0'+totalItem+'%20Bungkus';
       
       window.location = 'https://wa.me/628123193955?text='+sendMsg; 
        
    }else if(lol.length === 2){
        
         var sendMsg2 = 'Halo,Saya%20ingin%20memesan%20:%0A' 
         +titleFood[0] +"\xa0"+ lol[0]+',\xa0'+totalItem+'%20Bungkus.%0A'
         +titleFood[1] +'\xa0'+lol[1]+',\xa0'+totalItem2+'%20Bungkus.';
        
         window.location = 'https://wa.me/628123193955?text='+sendMsg2; 
        
         
     }else if(lol.length === 3){
        
        
        
         var sendMsg3 = 'Halo,Saya%20ingin%20memesan%20:%0A' 
         +titleFood[0] +"\xa0"+ lol[0]+',\xa0'+totalItem+'%20Bungkus.%0A'
         +titleFood[1] +'\xa0'+lol[1]+',\xa0'+totalItem2+'%20Bungkus.%0A'
         +titleFood[2] +'\xa0'+lol[2]+',\xa0'+totalItem3+'%20Bungkus.';
        
         window.location = 'https://wa.me/628123193955?text='+sendMsg3; 
        
         
         
     }else if(lol.length === 4){
        
        
        
        var sendMsg4 = 'Halo,Saya%20ingin%20memesan%20:%0A' 
        +titleFood[0] +"\xa0"+ lol[0]+',\xa0'+totalItem+'%20Bungkus.%0A'
        +titleFood[1] +'\xa0'+lol[1]+',\xa0'+totalItem2+'%20Bungkus.%0A'
        +titleFood[2] +'\xa0'+lol[2]+',\xa0'+totalItem3+'%20Bungkus.%0A'
        +titleFood[3] +'\xa0'+lol[3]+',\xa0'+totalItem4+'%20Bungkus.';
       
        window.location = 'https://wa.me/628123193955?text='+sendMsg4; 
       
        
        
    }else if(lol.length === 5){
        
        
        
        var sendMsg5 = 'Halo,Saya%20ingin%20memesan%20:%0A' 
        +titleFood[0] +"\xa0"+ lol[0]+',\xa0'+totalItem+'%20Bungkus.%0A'
        +titleFood[1] +'\xa0'+lol[1]+',\xa0'+totalItem2+'%20Bungkus.%0A'
        +titleFood[2] +'\xa0'+lol[2]+',\xa0'+totalItem3+'%20Bungkus.%0A'
        +titleFood[3] +'\xa0'+lol[3]+',\xa0'+totalItem4+'%20Bungkus.%0A'
        +titleFood[4] +'\xa0'+lol[4]+',\xa0'+totalItem5+'%20Bungkus.';
       
        window.location = 'https://wa.me/628123193955?text='+sendMsg5; 
       
        
        
    }
     
  });
    

    
    