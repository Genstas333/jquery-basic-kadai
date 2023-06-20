$(function() {
    // ボタンがクリックされた場合
    $('#change-color').on('click', function(){
      $('#target').css('color','red');
    });
  });
  

  $(function() {
  
    $('#change-text').on('click', function(){
    
      $('p').text('Hello!');
    });
  });

  $(function(){
    $('#fade-out').on('click',function(){
      $('#target').fadeOut();
    });
  });

  $(function(){
    $('#fade-in').on('click',function(){
      $('#target').fadeIn();
    });
  });