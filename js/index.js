$('#slider').nivoSlider({
  effect: 'random',
  slices: 15,
  boxCols: 8,
  boxRows: 4,
  animSpeed: 500,
  pauseTime: 6000,
  startSlide: 0,
  directionNav: true,
  controlNav: true,
  pauseOnHover: true,
  manualAdvance: false,
  prevText: 'Prev',
  nextText: 'Next',
  randomStart: true,
});
jQuery(function ($) {
  $(window).load(function () {

  });
});

// $('#concat').click(function(){
  	// $('#concat').hDialog({title: '测试弹框标题',height: 300});
// })

jQuery(".slideBox").slide({ mainCell: ".bd ul", effect: "leftLoop", autoPlay: true });


jQuery(".picScroll-left").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "leftLoop", autoPlay: true, vis: 2 });


$(function () {
  $('#SubmitAdd').click(function () {
    var username = $('#username').val();
    var phone = $('#phone').val();
    var text = $('#text').val();
    // $.post("/tijiao",null,function () {
    //
    // })
    $.ajax({
      url: "/tijiao",
      type: 'POST',
      data: { username: username, phone: phone, text: text },
      dataType: 'json',
      success: function (data) {
        if (data.code == 1) {
          alert(data.msg);
          location.reload();
        } else {
          alert(data.msg);
        }
      }
    });
    return false;
  });
});