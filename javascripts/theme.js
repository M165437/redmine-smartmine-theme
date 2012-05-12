/* init necessary changes */
function init() {
	
	/* inject viewport meta tag into document head */
	$$('head')[0].insert({bottom: '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=false"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><link rel="apple-touch-startup-image" href="/themes/smartmine/images/startup.png"><link rel="apple-touch-icon-precomposed" href="/themes/smartmine/images/apple-touch-icon-precomposed.png"/><link rel="apple-touch-icon-precomposed" sizes="72x72" href="/themes/smartmine/images/apple-touch-icon-72x72-precomposed.png"/><link rel="apple-touch-icon-precomposed" sizes="114x114" href="/themes/smartmine/images/apple-touch-icon-114x114-precomposed.png"/>'});
	
	/* prevent links in standalone web apps opening Mobile Safari (https://gist.github.com/1042167) */
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
	
	/* hide address bar */
	window.setTimeout(function(){ window.scrollTo(0, 1); }, 0);
	
};

/* move sidebar to bottom and insert meta link */
function sidebar() {
	if (!hasClass(document.getElementById('main'), 'nosidebar')) {
		var c = document.getElementById('content').getElementsByTagName('div')[0];
		if (!hasClass(c, 'contextual')) {
			$(document.getElementById('content')).insert({top: '<div class="contextual"></div>'});
			c = document.getElementById('content').getElementsByTagName('div')[0];
		}
		var m = $(document.createElement('a'));
		m.href = '#sidebar';
		m.className = 'icon icon-meta';
		m.innerText = 'Meta';
		c.appendChild(m);
		moveNode('sidebar', 'main');
	}
}

/* hide contextual and insert actions link */
function contextual() {
	var c = document.getElementById('content').getElementsByTagName('div')[0];
	if ((hasClass(c, 'contextual')) && (c.childElements().length > 2)) {
		
		console.log("test");
		/* @TODO:   Wenn mehr als nur ein Kindelement,
					dann alle Elemente in ein neues Element oberhalb von …  */
		
	}
}

/* change and hide navigation */
function navigation() {
	
	/* @TODO: reverse li und stelle angemeldet als nach oben */
	//$$('#account ul').insert( $$('#account ul li').reverse() );
}

/* do it! */
document.observe("dom:loaded", function() {
	if (screen.width <= 767 || window.innerWidth <= 767) {
		init();
		sidebar();
		contextual();
		navigation();
	}
});


/*	#Helpers
================================================== */

/* move node into new parent */
function moveNode(node, parent) {
	var n = document.getElementById(node);
	var p = document.getElementById(parent);
	if (n != undefined && n !== null && p != undefined && p !== null) {
		p.appendChild(n.parentNode.removeChild(n));
	}
}

/* hasClass */
function hasClass(element, cls) {
    var r = new RegExp('\\b' + cls + '\\b');
    return r.test(element.className);
}