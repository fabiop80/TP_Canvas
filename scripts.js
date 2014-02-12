var arrayDefault = new Array(0, 0 ,0 ,1, 0, 0, 1, 1, 1);

var canvas;
var ctx; 
var video;
var tabPhotos;
var tabFiltre;


window.onload = function(){

  
	if(localStorage.getItem("tabPhotos")!=null && localStorage.getItem("tabFiltres")!=null)	{
	  tabPhotos = JSON.parse(localStorage.getItem("tabPhotos"));
	  tabFiltre = JSON.parse(localStorage.getItem("tabFiltres"));
	}else{
	 tabPhotos = new Array();
	 tabFiltre = new Array();
	}

	$('#idFile').bind("click" , function () {
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

	
	if (tabPhotos.length > 0 && tabFiltre.length > 0){
		afficherPhoto(tabPhotos, tabFiltre);
	}
	
	image.onload=function(){
		this.width = canvas.width;
		this.height = canvas.height;
		ctx.drawImage(this,0,0,canvas.width,canvas.height);
	}
//	canvas.style.webkitFilter=localStorage.getItem("filtres");	

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
         if (prise){ /* Sommes-nous en train de filmer? */
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				ctx.drawImage(video, 0, 0, canvas.width, canvas.height); /* Je dessine sur mon canvas ce que mon image film*/ 
				reset();
			
			}
	
     }
	 
function cadre(x,y){
 var l1 = x*1.26436782;
 var h1 = y*1.36363636;
 var monImage= document.getElementById("cadre");
 monImage.width = l1;
 monImage.height = h1;

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
		canvas.height = (cwdt/twdt)*thdt;
		//cadre(canvas.width,canvas.height);
		ctx.drawImage(image, 10,10, canvas.width, canvas.height);	
        ctx.drawImage(document.getElementById("cadre"), 0, 0, canvas.width, canvas.height);			
		window.URL.revokeObjectURL(urlObj);
	}						    
}