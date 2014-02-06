window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	var image = new Image();

	
	image.src = "images/homer.jpeg";
	//var btnReset = document.getElementById("idReset");
	//btnReset.addEventListener('click',reset,false)
	
	
	image.onload = function(){
		ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
	}
	
	var blu = document.getElementById('idBlur');
	blu.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'blur('+this.value+'px)' + 'hue-rotate('+hueR.value+'deg)' +
		                            'invert('+invt.value+')' + 'brightness('+brightn.value+')' +
									'sepia('+sepi.value+')' + 'grayscale('+graysa.value+')' +
									'opacity('+opaci.value+')' + 'saturate('+satu.value+')' + 
									'contrast('+contrst.value+')';
	}, false);
	
	var hueR = document.getElementById('idHueRotate');
	hueR.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'blur('+blu.value+'px)' + 'hue-rotate('+this.value+'deg)' + 
		                            'invert('+invt.value+')' + 'brightness('+brightn.value+')' +
									'sepia('+sepi.value+')' + 'grayscale('+graysa.value+')' +
									'opacity('+opaci.value+')' + 'saturate('+satu.value+')' +
									'contrast('+contrst.value+')';
	}, false);
	
	var invt = document.getElementById('idInvert');
	invt.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter =  'blur('+blu.value+'px)' + 'hue-rotate('+hueR.value+'deg)'+
		                             'invert('+this.value+')' + 'brightness('+brightn.value+')'+
                                      'sepia('+sepi.value+')' + 'grayscale('+graysa.value+')'+
									  'opacity('+opaci.value+')'+ 'saturate('+satu.value+')' +
									  'contrast('+contrst.value+')';
	}, false);
	
	var brightn = document.getElementById('idBrightness');
	brightn.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'blur('+blu.value+'px)' + 'hue-rotate('+hueR.value+'deg)'+
		                            'invert('+invt.value+')' + 'brightness('+this.value+')' +
									'sepia('+sepi.value+')' + 'grayscale('+graysa.value+')' + 
									'opacity('+opaci.value+')'+ 'saturate('+satu.value+')' +
									'contrast('+contrst.value+')';
	}, false);
	
	var sepi = document.getElementById('idSepia');
	sepi.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'blur('+blu.value+'px)' + 'hue-rotate('+hueR.value+'deg)'+
		                            'invert('+invt.value+')' + 'brightness('+brightn.value+')' +
									'sepia('+this.value+')' + 'grayscale('+graysa.value+')' +
									'opacity('+opaci.value+')'+ 'saturate('+satu.value+')' + 
									'contrast('+contrst.value+')';
	}, false);
	
	var graysa = document.getElementById('idGrayscale');
	graysa.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'blur('+blu.value+'px)' + 'hue-rotate('+hueR.value+'deg)'+
		                            'invert('+invt.value+')' + 'brightness('+brightn.value+')' +
									'sepia('+sepi.value+')' + 'grayscale('+this.value+')' + 
									'opacity('+opaci.value+')'+ 'saturate('+satu.value+')' + 
									'contrast('+contrst.value+')';
	}, false);
	
	var opaci= document.getElementById('idOpacity');
	opaci.addEventListener('change', function(e){
		e = window.event;
		canvas.style.webkitFilter = 'blur('+blu.value+'px)' + 'hue-rotate('+hueR.value+'deg)'+
		                            'invert('+invt.value+')' + 'brightness('+brightn.value+')' +
									'sepia('+sepi.value+')' + 'grayscale('+graysa.value+')' +
									'opacity('+this.value+')'+ 'saturate('+satu.value+')' +
									'contrast('+contrst.value+')';
	}, false);
	
    var satu = document.getElementById('idSaturate');
	satu.addEventListener('change', function(e){
	   e = window.event;
	   canvas.style.webkitFilter = 'blur('+blu.value+'px)' + 'hue-rotate('+hueR.value+'deg)'+
		                            'invert('+invt.value+')' + 'brightness('+brightn.value+')' +
									'sepia('+sepi.value+')' + 'grayscale('+graysa.value+')' +
									'opacity('+opaci.value+')'+'saturate('+this.value+')' +
									'contrast('+contrst.value+')';
    }, false);	
	
	var contrst = document.getElementById('idContrast');
	contrst.addEventListener('change', function(e){
	   e = window.event;
	   canvas.style.webkitFilter = 'blur('+blu.value+'px)' + 'hue-rotate('+hueR.value+'deg)'+
		                            'invert('+invt.value+')' + 'brightness('+brightn.value+')' +
									'sepia('+sepi.value+')' + 'grayscale('+graysa.value+')' +
									'opacity('+opaci.value+')'+'saturate('+satu.value+')' +
									'contrast('+this.value+')';
    }, false);
	
	var video = document.getElementById("my_video");
	video.addEventListener("click", photo, false); 
	
	var erreur = function(e){
       console.log("Accès refusé à la caméra");
     } 
	 navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || 
	                          navigator.mozGetUserMedia || navigator.msGetUserMedia; 
							  
	 navigator.getUserMedia({video: true}, 
	                         function(stream){
											//var video = document.querySelector("video"); 
											video.src = window.URL.createObjectURL(stream);
											
                                             }, erreur);


//action
	
	
}

//acces camera
  
 
 function photo() {
         if (stream){ /* Sommes-nous en train de filmer? */
				ctx.drawImage(video, 0, 0); /* Je dessine sur mon canvas ce que mon image film*/ 
				document.querySelector("img").src = canvas.toDataURL("image/webp");
			}
     }


/*function reset(){
 var ranges = document.querySelectorAll('input[type="number"]');
  for (var i = 0, r; r = ranges[i]; i++) {
    r.value = r.min;
  }
}*/

