(function () {

  $('#user_view').val(localStorage.getItem('user_view'));
  $('#user_data').val(localStorage.getItem('user_data'));

  var fn = {};

  fn.updateTabs = function () {

    var active = $('.tabs>li.active');

    active.parent().css('border-color', active.css('background-color'));

    $('.tab-view').removeClass('active')
    $('#' + active.data('view')).addClass('active');

  };

  /**/

  $('.tab>a').click(function (e) {

    $('.tabs>li').removeClass('active');
    $(e.currentTarget).parent().addClass('active');

    fn.updateTabs();

  });

  $('#run').click(function () {

    var view = $('#preview');
    var doc = view[0].contentDocument;
    var win = view[0].contentWindow;
    var userView = $('#user_view');
    var userData = $('#user_data');

    localStorage.setItem('user_view', userView.val());
    localStorage.setItem('user_data', userData.val());

    win.eval(userData.val());
    
    doc.body.innerHTML = userView.val();
    doc.dispatchEvent(new Event('WebComponentsReady'));

  });

  /**/

  fn.updateTabs();

})();