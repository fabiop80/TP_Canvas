//Sauvegarder l'image
function sauvegarder(){
    if(soundsBol)
	   document.getElementById("clickSound").play();
	   
	dataURL = canvas.toDataURL('image/png');
	console.log(dataURL);

	var liste= document.getElementById("listeFichiers");
	can=document.createElement("canvas");
	c=can.getContext('2d');
	var imag = new Image();
	imag.src = dataURL;
		

	imag.onload = function(){
		can.width=100;
		can.height=100;
		c.drawImage(this, 0, 0, can.width, can.height);		
	}
	
	filtres= 'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
		                            'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')' +
									'opacity('+opaciValue+')'+'saturate('+satuvalue+')' +
									'contrast('+contrstValue+')';
									
	can.style.webkitFilter = filtres;
	can.addEventListener("click",function(){
					canvas=document.getElementById("canvas");
					ctx=canvas.getContext('2d');
					ctx.clearRect(0,0,canvas.width, canvas.height);
					ctx.drawImage(imag, 0, 0, canvas.width, canvas.height);
					imageDataBkp =ctx.getImageData(0,0,canvas.width, canvas.height);	
					canvas.style.webkitFilter = tabFiltre[index-1];
	
	},false);
	var li = document.createElement("li");
	
	li.appendChild(can);		
	liste.appendChild(li);
								
		tabPhotos.push(dataURL);
		
		pictures=JSON.stringify(tabPhotos);
		
		tabFiltre.push(filtres);
		var lefiltres=JSON.stringify(tabFiltre);
	
		localStorage.setItem("tabPhotos",pictures);
		localStorage.setItem("tabFiltres",lefiltres);
}
//Affichage de photos
function afficherPhoto(x, y) {
	var liste= document.getElementById("listeFichiers");
	for (var i=0; i<x.length; i++){
		var li = document.createElement('li');	
		var	canva=document.createElement('canvas');
		var ct=canva.getContext("2d");
		var img = new Image();
		canva.style.height = "100px";
		canva.style.width = "100px";
		img.src = x[i];
		ct.drawImage(img, 0, 0, canva.width, canva.height);
		canva.style.webkitFilter = y[i];
		canva.style.cssFloat = 'left';
		li.appendChild(canva);
		liste.appendChild(li);
		$("canvas").each(function(index){
			if(index>0){
				$(this).click(function(){
					canvas=document.getElementById("canvas");
					ctx=canvas.getContext('2d');
					ctx.clearRect(0,0,canvas.width, canvas.height);
					imge= new Image();
					imge.src=x[index-1];
					ctx.drawImage(imge, 0, 0, canvas.width, canvas.height);
					imageDataBkp =ctx.getImageData(0,0,canvas.width, canvas.height);	
					canvas.style.webkitFilter = tabFiltre[index-1];
				});
			}
		});
	}
 }