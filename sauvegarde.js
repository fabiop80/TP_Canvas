//Sauvegarder l'image
function sauvegarder(){
	filtreImg = new Array();
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
	
	filtreImg.push(bluValue);
	filtreImg.push(hueRValue);
	filtreImg.push(invtValue);
	filtreImg.push(brightnValue);
	filtreImg.push(sepiValue);
	filtreImg.push(graysaValue);
	filtreImg.push(opaciValue);
	filtreImg.push(satuvalue);
	filtreImg.push(contrstValue);
	
	filtres= 'blur('+bluValue+'px)' + 'hue-rotate('+hueRValue+'deg)'+
		                            'invert('+invtValue+')' + 'brightness('+brightnValue+')' +
									'sepia('+sepiValue+')' + 'grayscale('+graysaValue+')' +
									'opacity('+opaciValue+')'+'saturate('+satuvalue+')' +
									'contrast('+contrstValue+')';
									
	can.style.webkitFilter = filtres;
	ajouterListener(can, imag, filtres, filtreImg);
	
	var li = document.createElement("li");
	
	li.appendChild(can);		
	liste.appendChild(li);
								
		tabPhotos.push(dataURL);
		
		pictures=JSON.stringify(tabPhotos);
		
		tabFiltre.push(filtres);
		tabFiltrePasFucker.push(filtreImg);
		var tabFiltrePasFuckerStringifier = JSON.stringify(tabFiltrePasFucker);
		var lefiltres=JSON.stringify(tabFiltre);
	
		localStorage.setItem("tabPhotos",pictures);
		localStorage.setItem("tabFiltres",lefiltres);
		localStorage.setItem("tabFiltresPasFucker", tabFiltrePasFuckerStringifier);
}

function ajouterListener(can, imag, filtre, filtreImg)
{
can.addEventListener("click",function(){
					canvas=document.getElementById("canvas");
					ctx=canvas.getContext('2d');
					ctx.clearRect(0,0,canvas.width, canvas.height);
					ctx.drawImage(imag, 0, 0, canvas.width, canvas.height);
					imageDataBkp =ctx.getImageData(0,0,canvas.width, canvas.height);	
					canvas.style.webkitFilter = filtre;
					ajusterInputs(filtreImg);
	
},false);
}
//Affichage de photos
function afficherPhoto(x, y, z) {
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
		console.log(z);
		canva.style.cssFloat = 'left';
		li.appendChild(canva);
		liste.appendChild(li);
		$("canvas").each(function(index){
			if(index>0){
				//$(this).click(eventPhoto(index,x)
				//canvas=document.getElementById("canvas");
				$(this).click(function(){
					canvas=document.getElementById("canvas");
					ctx=canvas.getContext('2d');
					ctx.clearRect(0,0,canvas.width, canvas.height);
					imge= new Image();
					imge.src=x[index-1];
					ctx.drawImage(imge, 0, 0, canvas.width, canvas.height);
					imageDataBkp =ctx.getImageData(0,0,canvas.width, canvas.height);	
					canvas.style.webkitFilter = tabFiltre[index-1];
					console.log(canvas.style.webkitFilter[8]);
					ajusterInputs(z[index-1]);
				});
		}
		});
		
		
	}
 }
 
 function ajusterInputs(z)
 {
	$("#divMenuDroite input").each(function(index)
	{
		$(this).val(z[index]);
	});
 }
 
 /*function eventPhoto(idx,x2){
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext('2d');
	ctx.clearRect(0,0,canvas.width, canvas.height);
	imge= new Image();
	imge.src=x2[idx-1];
	ctx.drawImage(imge, 0, 0, canvas.width, canvas.height);
	imageDataBkp =ctx.getImageData(0,0,canvas.width, canvas.height);	
	canvas.style.webkitFilter = tabFiltre[idx-1];
 }*/