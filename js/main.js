$(function() {
  $('.menu').click(function(){
    $slide = $(this).parent();
    $image = $(this).next();
    switch($slide.attr('id')) {
      case 'slide-1':
        // $image.animate({width:'show'});
        $('#slide-2').animate({left: '1056px'});
        $('#slide-2 .image').animate({width:'hide'});
        $('#slide-3').animate({left: '1147px'});
        $('#slide-3 .image').animate({width:'hide'});
        break;
      case 'slide-2':
        $slide.animate({left: '91px'});
        $image.animate({width:'show'}, 390);
        // $('#slide-1 .image').animate({width:'hide'}, 320);
        // $('#slide-3 .image').css('display', 'none');
        $('#slide-3').animate({left: '1147px'});
        $('#slide-3 .image').animate({width:'hide'});
        break;
      case 'slide-3':
        $slide.animate({left: '182px'});
        $image.animate({width:'show'});
        $('#slide-2').animate({left: '91px'});
        // $('#slide-1 .image').animate({width:'hide'});
        $('#slide-2 .image').animate({width:'show'});
        break;
      default:
        console.log('did not work');
        break;
    }
  });
});
