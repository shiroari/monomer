(function () {
  
  var link = document.querySelector('link[id="content"]');
  var body = link.import.firstChild;
  
  document.body.appendChild(body.cloneNode(true));
  
})();