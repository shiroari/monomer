(function () {

  const SCRIPT_VERSION = "0.0.1";

  var fn = {};

  fn.updateTabs = function () {

    var active = $('.tabs>li.active');

    active.parent().css('border-color', active.css('background-color'));

    $('.tab-view').removeClass('active')
    $('#' + active.data('view')).addClass('active');

  };

  fn.fillFromFile = function (field, url, ifEmpty) {

    var f = $(field)[0];
    if (!ifEmpty || !f.value) {
      var r = new Request(url);
      fetch(r).then(function (response) {
        return response.text();
      }).then(function (text) {
        f.value = text;
      });
    }

  };

  fn.prepare = function () {

    fn.fillFromFile($('#user_view'), 'default.html', true);
    fn.fillFromFile($('#user_data'), 'scripts/data.js', true);

  };
  
  fn.reset = function () {

    fn.fillFromFile($('#user_view'), 'default.html');
    fn.fillFromFile($('#user_data'), 'scripts/data.js');

  };  

  fn.updatePreview = function () {

    var view = $('#preview');
    var doc = view[0].contentDocument;
    var win = view[0].contentWindow;
    var userView = $('#user_view')[0];
    var userData = $('#user_data')[0];

    if (userData.value !== null) {
      win.eval(userData.value);
    }

    if (userView.value !== null) {
      doc.body.innerHTML = userView.value;
      doc.dispatchEvent(new Event('WebComponentsReady'));
    }

  };

  fn.storeState = function () {

    var userView = $('#user_view')[0];
    var userData = $('#user_data')[0];

    localStorage.setItem('version', SCRIPT_VERSION);
    localStorage.setItem('user_view', userView.value);
    localStorage.setItem('user_data', userData.value);

  };

  fn.restoreState = function () {

    var version = localStorage.getItem('version');

    if (!version) {
      return;
    }

    if (version !== SCRIPT_VERSION) {
      alert("Script format was changed. Saved script cannot be restored.");
      return;
    }

    $('#user_view').val(localStorage.getItem('user_view'));
    $('#user_data').val(localStorage.getItem('user_data'));

  };

  /**/

  $('.tab>a').click(function (e) {

    $('.tabs>li').removeClass('active');
    $(e.currentTarget).parent().addClass('active');

    fn.updateTabs();

  });

  $('#run').click(function () {
    fn.storeState();
    fn.updatePreview();
  });
  
  $('#reset').click(function () {
    fn.reset();
    fn.updatePreview();
  });  

  /**/

  fn.updateTabs();
  fn.restoreState();
  fn.prepare();

  window.addEventListener('load', function () {
    fn.updatePreview();
  });

})();