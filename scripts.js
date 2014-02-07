var arrayDefault = new Array(0, 0 ,0 ,1, 0, 0, 1, 1, 1);

var canvas;
var ctx; 
var video;
var bluValue=0;
var hueRValue=0;
var invtValue=0;
var brightnValue=1;
var sepiValue=0;
var graysaValue=0;
var opaciValue=1;
var satuvalue=1;
var contrstValue = 1;


window.onload = function(){
	dragListeners();
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	var image = new Image();
	
	canvas.style.filter = canvas.style.filter || canvas.style.webkitFilter || canvas.style.mozFilter
	
	image.src = "images/beyonce.jpg";

	image.onload = function(){
		//canvas.width = image.width;
		//canvas.height = image.height;
		ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
	}
	
	var blu = document.getElementById('idBlur');
	blu.addEventListener('change', function(e){
		e = window.event;
		bluValue = this.value;
		canvas.style.webkitFilter = 'blur('+this.value+'px)' + 'hue-rotate('+hueRValue+'deg)' +
		                            'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')' +
									'opacity('+opaciValue+')' + 'saturate('+satuvalue+')' + 
									'contrast('+contrstValue+')';
	}, false);
	
	var hueR = document.getElementById('idHueRotate');
	hueR.addEventListener('change', function(e){
		e = window.event;
		hueRValue = this.value;
		canvas.style.webkitFilter = 'blur('+bluValue+'px)' + 'hue-rotate('+this.value+'deg)' + 
		                            'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')' +
									'opacity('+opaciValue+')' + 'saturate('+satuvalue+')' +
									'contrast('+contrstValue+')';
	}, false);
	
	var invt = document.getElementById('idInvert');
	invt.addEventListener('change', function(e){
		e = window.event;
		invtValue = this.value;
		canvas.style.webkitFilter =  'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
		                             'invert('+this.value+')' + 'brightness('+brightnValue+')'+
                                      'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')'+
									  'opacity('+opaciValue+')'+ 'saturate('+satuvalue+')' +
									  'contrast('+contrstValue+')';
	}, false);
	
	var brightn = document.getElementById('idBrightness');
	brightn.addEventListener('change', function(e){
		e = window.event;
		brightnValue = this.value;
		canvas.style.webkitFilter = 'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
		                            'invert('+invtValue+')' + 'brightness('+this.value+')' +
									'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')' + 
									'opacity('+opaciValue+')'+ 'saturate('+satuvalue+')' +
									'contrast('+contrstValue+')';
	}, false);
	
	var sepi = document.getElementById('idSepia');
	sepi.addEventListener('change', function(e){
		e = window.event;
		sepiValue = this.value;
		canvas.style.webkitFilter = 'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
		                            'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+this.value+')' + 'grayscale('+graysaValue+')' +
									'opacity('+opaciValue+')'+ 'saturate('+satuvalue+')' + 
									'contrast('+contrstValue+')';
	}, false);
	
	var graysa = document.getElementById('idGrayscale');
	graysa.addEventListener('change', function(e){
		e = window.event;
		graysaValue = this.value;
		canvas.style.webkitFilter = 'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
		                            'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+sepiValue+')' + 'grayscale('+this.value+')' + 
									'opacity('+opaciValue+')'+ 'saturate('+satuvalue+')' + 
									'contrast('+contrstValue+')';
	}, false);
	
	var opaci= document.getElementById('idOpacity');
	opaci.addEventListener('change', function(e){
		e = window.event;
		opaciValue = this.value;
		canvas.style.webkitFilter = 'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
		                            'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')' +
									'opacity('+this.value+')'+ 'saturate('+satuvalue+')' +
									'contrast('+contrstValue+')';
	}, false);
	
    var satu = document.getElementById('idSaturate');
	satu.addEventListener('change', function(e){
	   e = window.event;
	  satuvalue = this.value;
	   canvas.style.webkitFilter = 'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
		                            'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')' +
									'opacity('+opaciValue+')'+'saturate('+this.value+')' +
									'contrast('+contrstValue+')';
    }, false);	
	
	var contrst = document.getElementById('idContrast');
	contrst.addEventListener('change', function(e){
	   e = window.event;
	  contrstValue = this.value;
	   canvas.style.webkitFilter = 	'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
									'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')' +
									'opacity('+opaci.value+')'+'saturate('+satuvalue+')' +
									'contrast('+this.value+')';
    }, false);
	
	video = document.getElementById("my_video");
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
											prise = stream;
                                             }, erreur);
		
}

//acces camera
 function photo() {
         if (prise){ /* Sommes-nous en train de filmer? */
				ctx.drawImage(video, 0, 0); /* Je dessine sur mon canvas ce que mon image film*/ 
			}
     }

 function reset(){
	canvas.removeAttribute("style");
	for(var i=0; i< arrayDefault.length; i++){
		document.getElementsByTagName('input')[i+1].value = arrayDefault[i];
	}
}

//var filtres = document.querySelectorAll('input[type="number"]');
var filtres = document.getElementsByTagName("input");
var r;
for(var i=0; i<filtres.lenght; i++){
  //filtres[i];
  //r.value = r.min;
  filtres[i].innerHTML = 0;
}
//canvas.toDataURL(); sauvegarde							
