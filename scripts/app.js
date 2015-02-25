(function (document) {
	'use strict';

	document.getElementById('update').addEventListener('click', function () {

		var preview = document.getElementById('preview'),
			content = document.getElementById('content').value;


		preview.contentDocument.getElementById('content').innerHTML = content;
		
	});


	// wrap document so it plays nice with other libraries
	// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));