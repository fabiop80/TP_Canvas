var arrayDefault = new Array(0, 0 ,0 ,1, 0, 0, 1, 1, 1);

var canvas;
var ctx; 
var video;
var tabPhotos;
var tabFiltre;
var imageDataBkp;
var soundsBol = true;

window.onload = function(){
	if(localStorage.getItem("tabPhotos")!=null && localStorage.getItem("tabFiltres")!=null)	{
	  tabPhotos = JSON.parse(localStorage.getItem("tabPhotos"));
	  tabFiltre = JSON.parse(localStorage.getItem("tabFiltres"));
	}else{
	 tabPhotos = new Array();
	 tabFiltre = new Array();
	}

	$('#idFile').bind("click" , function () {
       	if (soundsBol){
			document.getElementById("clickSound").play();
		}
		$('#html_btn').click();
    });
	
	var image = new Image();

	defaultValues();
	dragListeners();
	filtres();
	
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	
	btnSauvegardes=document.getElementById("idSauvegarde");
	btnSauvegardes.addEventListener('click',sauvegarder, false)
	
	document.getElementById("idReset").onclick = reset;
	document.getElementById("html_btn").onchange = loadFile;
	document.getElementById("idSounds").onclick = toggleSounds;
	document.getElementById("idAide").onclick = function(){
	 	if (soundsBol)
		document.getElementById("clickSound").play();
	};

	if (tabPhotos.length > 0 && tabFiltre.length > 0){
		afficherPhoto(tabPhotos, tabFiltre);
	}

	video = document.getElementById("my_video");
	video.addEventListener("click", photo, false);
	document.getElementById("idPhoto").addEventListener("click", photo, false);
	
	var erreur = function(e){
      console.log("Accès refusé à la caméra");
     } 
	 
	
	 navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || 
	                          navigator.mozGetUserMedia || navigator.msGetUserMedia; 

	 navigator.getUserMedia({video: true}, 
	                        function(stream){
								video.src = window.URL.createObjectURL(stream);
								prise = stream;
							}, erreur);
}
//acces camera
 function photo() {
		if(soundsBol)
			document.getElementById("photoSound").play();
 
         if (prise){ /* Sommes-nous en train de filmer? */
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				ctx.drawImage(video, 0, 0, canvas.width, canvas.height); /* Je dessine sur mon canvas ce que mon image film*/ 
				imageDataBkp = ctx.getImageData(0,0,canvas.width,canvas.height);	
				reset();
			}
}

function loadFile(){
	var monFichier = document.getElementsByTagName("input")[0].files[0];
	var urlObj = window.URL.createObjectURL(monFichier);
	var image = new Image();
	image.src = urlObj;
	
	image.onload = function(){
		var cwdt = canvas.width;
		var twdt = this.width;
		var thdt = this.height;	
        var leCadre = document.getElementById("cadre");		
		ctx.drawImage(image, 0,0, canvas.width, canvas.height);	
		imageDataBkp = ctx.getImageData(0,0,canvas.width, canvas.height);	
        			
		window.URL.revokeObjectURL(urlObj);
	}						    
}

//Event for reset button	 
 function reset(){
 	if (soundsBol){
		document.getElementById("clickSound").play();
	}
	canvas.removeAttribute("style");
	for(var i=0; i< arrayDefault.length; i++){
		document.getElementsByTagName('input')[i+1].value = arrayDefault[i];
	}
	defaultValues();
	ctx.putImageData(imageDataBkp,0,0);
}
//Function to put all values on default values	
function defaultValues(){
	bluValue=0;
	hueRValue=0;
	invtValue=0;
	brightnValue=1;
	sepiValue=0;
	graysaValue=0;
	opaciValue=1;
	satuvalue=1;
	contrstValue=1;
}

function toggleSounds(){
	if (!soundsBol){
		document.getElementById("clickSound").play();
		$('#glyphSoundsOn').css("display", "inline");
		$('#glyphSoundsOff').css("display", "none");
		$('#idSounds').blur();
		soundsBol = true;
	} else {
		$('#glyphSoundsOn').css("display", "none");
		$('#glyphSoundsOff').css("display", "inline");
		$('#idSounds').blur();
		soundsBol = false;
	}
}