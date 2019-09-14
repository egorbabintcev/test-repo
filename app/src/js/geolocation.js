let peterburgNumber = {
  whatsapp: 'https://wa.me/79775503717',
  viber: 'viber://chat?number=89775503717'
};
let moscowNumber = {
  whatsapp: 'https://wa.me/79262863781',
  viber: 'viber://chat?number=89262863781'
};

if (!navigator) throw new Error('Geolocation is not supported');
const coords = navigator.geolocation.getCurrentPosition(function(data) {
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;
  console.log(data);
  const requestConfig = {
    url: `https://eu1.locationiq.com/v1/reverse.php?key=e3a18d422b7c96&lat=${lat}&lon=${lon}&format=json`,
    method: 'GET',
    success: function(request) {
      let city = request.address.state;
      if (city == 'Москва') {
        $('.header__contact-icon-symbol_whatsapp').parent().attr('href', moscowNumber.whatsapp);
        $('.header__contact-icon-symbol_viber').parent().attr('href', moscowNumber.viber);
      } else if (city == 'Санкт-Петербург') {
        $('.header__contact-icon-symbol_whatsapp').parent().attr('href', peterburgNumber.whatsapp);
        $('.header__contact-icon-symbol_viber').parent().attr('href', peterburgNumber.viber);
      }
    }
  }
  $.ajax(requestConfig);
})
