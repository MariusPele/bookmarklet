javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".altSpan, .axSpan, .closeSpan");
		$("a[alt], button[alt], label[alt]").each(function() {
			$(this).before("<span class=\"altSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\"> INVALID❌alt=\""+$(this).attr('alt')+"\" on "+$(this).prop("tagName")+"</span>");
        });
		$("svg[role=img]").each(function() {
            if($(this).children('desc')){
                $(this).before("<span class=\"altSpan\" style=\"outline:orange 2px dashed;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;speak: literal-punctuation;\">GRAPHIQUE👍desc=\""+$(this).children('desc').val()+"\"❓</span>");
            }
  	    });

  			if (!$('svg[role=img]').length) {
				$('body').prepend('<strong style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="failure" role="status"></strong>');
				$('#failure').html('No SVG with img role Found on Page: ' + document.title);
				setTimeout(function(){ $('#failure').remove(); }, 6000);
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! SVG with img role Found on Page: ' + document.title);
				setTimeout(function(){ $('#success').remove(); }, 3000);
  			}
      $("script[src$='images.js']").remove();s.remove();
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()
