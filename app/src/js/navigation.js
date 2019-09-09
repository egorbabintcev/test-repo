let width = document.body.clientWidth;
if (width < 768) {
  $('.nav-list__item_dropdown').click(function() {
    $('.nav-dropdownlist').toggleClass('nav-dropdownlist_expanded');
  })
} else {
  $('.nav-list__item_dropdown, .nav-dropdownlist').hover(function(){
    $('.nav-dropdownlist').addClass('nav-dropdownlist_expanded');
  }, function() {
    $('.nav-dropdownlist').removeClass('nav-dropdownlist_expanded');
  })
}

$('.nav-toggler').click(function() {
  const target = $(this).attr('data-target');
  const icon = $(this).find('i');
  icon.toggleClass('fa-bars');
  icon.toggleClass('fa-times');
  $(target).toggleClass('nav-list_expanded');
})