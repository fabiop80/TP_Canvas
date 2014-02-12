var bluValue;
var hueRValue;
var invtValue;
var brightnValue;
var sepiValue;
var graysaValue;
var opaciValue;
var satuvalue;
var contrstValue;
var colorPicker;
var rVal;
var gVal;
var bVal;

//Main filter functions
function filtres(){
	colorPicker = document.getElementById("idColorBg");
	colorPicker.addEventListener('change', picker, false);
	

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
}
//Change the 'background' color
function picker(e){
	e = window.event;
	var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	
	var data = imageData.data;
	var couleurAModifier = this.value;
	var couleurRGB = convert(couleurAModifier);
	for (var i=0; i< data.length; i +=4) {
		data[i] = data[i] + couleurRGB['r'];
		data[i+1] = data[i+1] + couleurRGB['g'];
		data[i+2] = data[i+2] + couleurRGB['b'];
		data[i+3];
	}
	ctx.putImageData(imageData, 0, 0);
}
//Converter hex -> RGB
function convert(hex) {
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
		}
