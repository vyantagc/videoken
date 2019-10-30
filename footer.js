function doing(classname,targetnya){
	var items = document.getElementsByClassName(classname);
	for (var i = 0; i < items.length; i++) {
	  items[i].addEventListener('click', function(){
	  	var vid = this.getAttribute('data-vid'); 
	  	window.location.href = targetnya+"?yb="+vid;
	  });
	}
}