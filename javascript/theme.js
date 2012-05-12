/* inject viewport meta tag into document head */
function injectViewportMetaTag() {
	
	var meta = $(document.createElement('meta'));
	meta.name = 'viewport';
	meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=false';
	$$('head')[0].insert(meta);
	
};

/* move node into new parent */
function moveNode(node, parent) {
	
	var n = document.getElementById(node);
	var p = document.getElementById(parent);
	p.appendChild(n.parentNode.removeChild(n));
	
}

/* move sidebar to bottom and insert link */
function moveSidebar() {
	
	moveNode('sidebar', 'main');
	var context = document.getElementById('content').getElementsByTagName('div')[0];
	var side = $(document.createElement('a'));
	side.href = '#sidebar';
	side.className = 'icon icon-meta';
	side.innerText = 'Meta';
	context.appendChild(side);
	
}

/* do it! */
document.observe("dom:loaded", function() {

	if (screen.width <= 767 || window.innerWidth <= 767) {
		injectViewportMetaTag();
		moveSidebar();
	}
	
	// alert(window.innerWidth);

});