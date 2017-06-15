$(function () {

  var animate = function (div, togClass, duration) {
    setInterval(function () {
      div.toggleClass(togClass);
    }, duration)
  }

  $('#header h1').addClass('fade-in');

  // Soundbar
  animate($('.bar-1'), 'bar-1-height', 1000)
  animate($('.bar-2'), 'bar-2-height', 1000)
  animate($('.bar-3'), 'bar-3-height', 1000)
  animate($('.bar-4'), 'bar-4-height', 1000)
  animate($('.bar-5'), 'bar-5-height', 1000)
  animate($('.bar-6'), 'bar-6-height', 1000)
  animate($('.bar-7'), 'bar-7-height', 1000)
  animate($('.bar-8'), 'bar-8-height', 1000)

  if ($('.bar').length) {
    setInterval(function () {
      var barLength = $('.bar').length;
      var randomBar = Math.floor((Math.random() * (barLength)));
      $('.bar-' + randomBar + '').addClass('blue-bar').siblings().removeClass('blue-bar');
    }, 1000)
  }

})
