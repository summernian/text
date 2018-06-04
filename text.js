function drag(id) {
	var el = document.querySelector(id);
	var disX = 0;
	var disY = 0;
	
	//设置定位
	el.style.position = 'absolute';
	el.style.left = el.offsetLeft;
	el.style.top = el.offsetTop;
	
	el.onmousedown = function(e) {
		
		disX = e.clientX - el.offsetLeft;
		disY = e.clientY - el.offsetTop;
		
		document.onmousemove = function(e) {
			el.style.left = e.clientX - disX + 'px';
			el.style.top = e.clientY - disY + 'px';
		}
		
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
	return false;
}

drag('#div');