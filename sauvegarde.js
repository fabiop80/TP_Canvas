//Sauvegarder l'image
function sauvegarder(){
	btnSauvegardes=document.getElementById("idSauvegarde");
	
	btnSauvegardes.addEventListener('click',function(){
		dataURL = canvas.toDataURL('image/png');
		console.log(dataURL);
	var liste= document.getElementById("listeFichiers");
		can=document.createElement("canvas");
	
		c=can.getContext('2d');
		var imag = new Image();
		imag.height = 60;
        imag.width = 60;
		imag.src = dataURL;
		c.width="100";
		c.height="100";	
	
		imag.onload = function(){
		c.drawImage(this, 0, 0, c.width, c.height);
	}
	
		liste.appendChild(can);
		
		tabPhotos.push(dataURL);
		
		pictures=JSON.stringify(tabPhotos);
	
		localStorage.setItem("tabPhotos",pictures);
		
		localStorage.setItem("src",dataURL);
		
	},false);
	
	
}

//affichage de photos
function afficherPhoto()
 {
    if(localStorage.getItem("tabPhotos")!=null)
	  {
			var x = JSON.parse(localStorage.getItem("tabPhotos"));
		    var liste= document.getElementById("listeFichiers");

			for (var i=0; i<x.length; i++)
								  {
								    
									var li = document.createElement('li');							
									var img = new Image();
									//var chemin = window.URL.createObjectURL(fichiers[i]);
									img.src = x[i];
									img.height = 60;
									img.width = 60;
									img.style.cssFloat = 'left';
									img.style.marginLeft = '5px';
									li.appendChild(img);
									liste.appendChild(li);
	
	                           }
			
      }
 }