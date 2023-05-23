$('.sike_three_tab li').click(function () {
  var el_index = $(this).parent().find('li').index(this);
  $(this).parent().find('li').removeClass('active');
  $(this).addClass('active');
  $(this).parent().parent().parent().find(".sike_three_page").hide();
  $(this).parent().parent().parent().find(".sike_three_page").eq(el_index).show();

});