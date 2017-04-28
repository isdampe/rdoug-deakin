(function(window){
	var fauxTerm = window.fauxTerm;

	var im = document.getElementById('content').innerText;
	var email = 'rdoug' + '@' + 'deakin.edu.au'; //stop robots
	im = im + '<a href="mailto:' + email + '">' + email + '</a>' + "\n\n";

	var help = "{bold}List of known commands{/bold}:\ncat: print home page content to terminal\nclear: clear the terminal screen\nmail: send an email to site owner\nsoftware: print list of software links to terminal";

	var myTerm = new fauxTerm({
		el: document.getElementById('fauxterm'),
		autoFocus: true,
		initialMessage: '~/rdoug$ cat' + "\n" + im,
		cwd: "~/rdoug",
		tags: ['bold'],
		maxBufferLength: 8192,
		maxCommandHistory: 50,
		cmd: function(argv, argc) {

			var buffer;

			switch (argv[0]) {
				case "cat":
					buffer = im;
					return buffer;
				break;
				case "mail":
					window.location.href = 'mailto:' + email;
					return "";
				break;
				case "software":
					return '<a target="_blank" href="https://github.com/isdampe/fauxTerm">fauxTerm.js - Fake web terminal emulator, used on this website.</a>' + "\n";
				break;
			}

			buffer = "{bold}" + argv[0] + "{/bold}: command not found\n\n";
			buffer = buffer + help + "\n\n";
			return buffer;

		}
	});

})(window);
