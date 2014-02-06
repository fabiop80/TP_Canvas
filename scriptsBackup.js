 window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	var image = new Image();
	image.src = "images/maggie.jpg";
	
	
	image.onload = function(){
		ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
	}
	
	var blu = document.getElementById('idBlur');
	blu.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'blur('+this.value+'px)';
	}, false);
	
	var hueR = document.getElementById('idHueRotate');
	hueR.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'hue-rotate('+this.value+'deg)';
	}, false);
	
	var invt = document.getElementById('idInvert');
	invt.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'invert('+this.value+')';
	}, false);
	
	var brightn = document.getElementById('idBrightness');
	brightn.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'brightness('+this.value+')';
	}, false);
	
	var sepi = document.getElementById('idSepia');
	sepi.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'sepia('+this.value+')';
	}, false);
	
	var graysa = document.getElementById('idGrayscale');
	graysa.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'grayscale('+this.value+')';
	}, false);
	
	var opaci= document.getElementById('idOpacity');
	opaci.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'opacity('+this.value+')';
	}, false);
	
    var satu = document.getElementById('idSaturate');
	satu.addEventListener('change', function(e){
	   e = window.event;
	   canvas.style.webkitFilter = 'saturate('+this.value+')';
    }, false);	
	
	var contrst = document.getElementById('idContrast');
	contrst.addEventListener('change', function(e){
	   e = window.event;
	   canvas.style.webkitFilter = 'contrast('+this.value+')';
    }, false);
}
