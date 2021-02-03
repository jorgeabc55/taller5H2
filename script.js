
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb-left");
var thumbRight = document.querySelector(".slider > .thumb-right");
var range = document.querySelector(".slider > .range");

function setLeftValue(){
	var _this = inputLeft,
		min=parseInt(_this.min),
		max=parseInt(_this.max);

	_this.value =  Math.min(parseInt(_this.value), parseInt(inputRight.value)-1);

	var percent = ((_this.value-min)/(max-min)) * 100;

	thumbLeft.style.left = percent+"%";
	range.style.left = percent+"%";
}
setLeftValue();

function setRightValue(){
	var _this = inputRight,
		min=parseInt(_this.min),
		max=parseInt(_this.max);

	_this.value =  Math.max(parseInt(_this.value),parseInt(inputLeft.value)+1);

	var percent = ((_this.value-min)/(max-min)) * 100;

	thumbRight.style.right = (100 - percent)+"%";
	range.style.right = (100 - percent)+"%";
}
setRightValue();


inputLeft.addEventListener("input",setLeftValue);
inputRight.addEventListener("input",setRightValue);

inputLeft.addEventListener("mouseover",function(){
	thumbLeft.classList.add("hover");
});

inputLeft.addEventListener("mouseout",function(){
	thumbLeft.classList.add("hover");
});

inputLeft.addEventListener("mousedown",function(){
	thumbLeft.classList.add("active");
});

inputLeft.addEventListener("mouseup",function(){
	thumbLeft.classList.add("active");
});

inputRight.addEventListener("mouseover",function(){
	thumbRight.classList.add("hover");
});

inputRight.addEventListener("mouseout",function(){
	thumbRight.classList.add("hover");
});

inputRight.addEventListener("mousedown",function(){
	thumbRight.classList.add("active");
});

inputRight.addEventListener("mouseup",function(){
	thumbRight.classList.add("active");
});


var nom =document.getElementById('nombre');
const nom2 =document.getElementById('nombre2');

var apell =document.getElementById('apellido');
const apell2 =document.getElementById('apellido2');

var id_usr =document.getElementById('id_usr');
const id_usr2 =document.getElementById('id_usr2');

var ccusuario =document.getElementById('ccusuario');
const ccusuario2 =document.getElementById('ccusuario2');

var ccpassword =document.getElementById('ccpassword');
const ccpassword2 =document.getElementById('ccpassword2');

var email =document.getElementById('email');
const email2 =document.getElementById('email2');

var conf_psw =document.getElementById('conf_psw');
const conf_psw2 =document.getElementById('conf_psw2');


function Registrar() {

	if(nom.value==""){
		nom.setAttribute('placeholder','Campo obligatorio'); 
		nom2.setAttribute('class','form-group has-error'); 
	}

	else{
		nom.setAttribute('placeholder','Nombre'); 
		nom2.setAttribute('class','form-group'); 
	}

	if(apell.value==""){
		apell.setAttribute('placeholder','Campo obligatorio'); 
		apell2.setAttribute('class','form-group has-error'); 
	}

	else{
		apell.setAttribute('placeholder','Apellido'); 
		apell2.setAttribute('class','form-group'); 
	}

	if(id_usr.value==""){
		id_usr.setAttribute('placeholder','Campo obligatorio'); 
		id_usr2.setAttribute('class','form-group has-error'); 
	}

	else{
		id_usr.setAttribute('placeholder','Id Usuario'); 
		id_usr2.setAttribute('class','form-group'); 
	}

	if(ccusuario.value==""){
		ccusuario.setAttribute('placeholder','Campo obligatorio'); 
		ccusuario2.setAttribute('class','form-group has-error'); 
	}

	else{
		ccusuario.setAttribute('placeholder','Cc Usuario'); 
		ccusuario2.setAttribute('class','form-group'); 
	}


	if(ccpassword.value==""){
		ccpassword.setAttribute('placeholder','Campo obligatorio'); 
		ccpassword2.setAttribute('class','form-group has-error'); 
	}else{
		var val = validar_clave(ccpassword);
		if (val==true) {
			ccpassword.setAttribute('placeholder','Contraseña'); 
			ccpassword2.setAttribute('class','form-group');
		}
		ccpassword.setAttribute('placeholder','No coincide con el formato requerido'); 
		ccpassword2.setAttribute('class','form-group has-error');
	}

	if(email.value==""){
		email.setAttribute('placeholder','Campo obligatorio'); 
		email2.setAttribute('class','form-group has-error'); 
	}

	else{
		email.setAttribute('placeholder','Email'); 
		email2.setAttribute('class','form-group'); 
	}

	if (conf_psw.value=="") {
		conf_psw.setAttribute('placeholder','Campo obligatorio'); 
		conf_psw2.setAttribute('class','form-group has-error'); 
	} else if (ccpassword.value === conf_psw.value && val==true) {
		ccpassword.setAttribute('placeholder','Contraseña'); 
		ccpassword2.setAttribute('class','form-group');
		conf_psw.setAttribute('placeholder','Contraseña'); 
		conf_psw2.setAttribute('class','form-group');
	} else {
		conf_psw2.setAttribute('class','form-group has-error');
		alert("Caracteres Minimos 15")
		conf_psw.setAttribute('placeholder','No coincide con el formato requerido'); 
	}
	if(ccpassword.value != conf_psw.value){
		conf_psw2.setAttribute('class','form-group has-error');
		alert("Las contraseñas no coinciden")
		conf_psw.setAttribute('placeholder','Las contraseñas no coinciden '); 
	}


}
function validar_clave(ccpassword)
{
	if(ccpassword.length >= 15)
	{		
		var mayuscula = false;
		var minuscula = false;
		var numero = false;
		var caracter_raro = false;
		
		for(var i = 0;i<ccpassword.length;i++)
		{
			if(ccpassword.charCodeAt(i) >= 65 && ccpassword.charCodeAt(i) <= 90)
			{
				mayuscula = true;
			}
			else if(ccpassword.charCodeAt(i) >= 97 && ccpassword.charCodeAt(i) <= 122)
			{
				minuscula = true;
			}
			else if(ccpassword.charCodeAt(i) >= 48 && ccpassword.charCodeAt(i) <= 57)
			{
				numero = true;
			}
			else
			{
				caracter_raro = true;
			}
		}
		if(mayuscula == true && minuscula == true || caracter_raro == true && numero == true)
		{
			return true;
		}
	}
	return false;
}









