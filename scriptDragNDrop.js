function dragListeners(){
	var body = document.getElementById("contBody");
	body.addEventListener('dragenter', dragenter, false);
	body.addEventListener('dragover', dragover, false);
	body.addEventListener('drop', drop, false);
}

function dragenter(e){
	e = window.event;
	e.preventDefault();
	e.stopPropagation();
}

function dragover(e){
	e = window.event;
	e.preventDefault();
	e.stopPropagation();
}

function drop(e){
	e = window.event;
	e.preventDefault();
//	e.stopPropagation(); On peut droper l'image partout dans la page

	var data = e.dataTransfer;
	var fichiers = data.files;

	gererFichier(fichiers);
}

function gererFichier(fichiers){
	var liste = document.getElementById('listeFichiers');
	if(!fichiers.length){
		liste.innerHTML = "ERROR - Aucune fichier selectioner";
	} else {
		for(var i=0; i<fichiers.length; i++){
			var li = document.createElement('li');
			var img = new Image();
			var chemin = window.URL.createObjectURL(fichiers[i]);
			img.src = chemin;
			img.height = 60;
			img.width = 60;
			img.style.cssFloat = 'left';
			img.style.marginLeft = '5px';
			img.addEventListener('click', ajouterAuCanvas, false);
			li.appendChild(img);
			liste.appendChild(li);
		}
	}
}

function ajouterAuCanvas(e){
	e = window.event;
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.src = e.currentTarget.getAttribute('src');
	img.onload = function(){
		ctx.drawImage(this,0, 0, canvas.width, canvas.height);
	}
}