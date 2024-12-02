if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
    window.alert("Hello Sensei");
}

var getNavi = document.getElementById('menu');
document.getElementById('mobile-navigation').onclick = function(){
	var a = getNavi.getAttribute('style');
	if(a){
		getNavi.removeAttribute('style');
		document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-menu.png)';
	} else {
		getNavi.style.display='block';
		document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-close.png)';
	}
};
var getElm = getNavi.getElementsByTagName("LI");
for(var i=0;i<getElm.length;i++){
	if(getElm[i].children.length>1){
		var smenu = document.createElement("span");
		smenu.setAttribute("class","mobile-submenu");
		smenu.setAttribute("OnClick","submenu("+i+")");
		getElm[i].appendChild(smenu);
	};
};
submenu = function (i){
	var sub = getElm[i].children[1];
	var b = sub.getAttribute('style');
	if(b){
		sub.removeAttribute('style');
		getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
		getElm[i].lastChild.style.backgroundColor='rgba(255, 255, 255, 0.8)';
	} else {
		sub.style.display='block';
		getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
		getElm[i].lastChild.style.backgroundColor='rgba(248, 98, 130, 0.8)';
	}
};


let chngeColorBtn = document.getElementById("modal-open")
let action = document.getElementById("action")
let closeButton = document.getElementById("modal-close")
let modalInput = document.getElementById("input-modal")
let modal = document.getElementById("container")
let text1 = document.getElementById("banner-text1")
let text2 = document.getElementById("banner-text2")
let text3 = document.getElementById("banner-text3")
let text4 = document.getElementById("banner-text4")


chngeColorBtn.onclick = function(){
	modal.style.visibility = "visible" 
}


closeButton.onclick = function(){
	modal.style.visibility = "hidden" 
}


action.onclick = function(){
	let digit = parseInt(modalInput.value)
	
	if(digit===1){
		text1.style.color = "teal"
		text2.style.color = "teal"
		text3.style.color = "teal"
		text4.style.color = "teal"
		
		modal.style.visibility = "hidden"
		modalInput.value = "";
	}else if(digit===2){
		text1.style.color = "white"
		text2.style.color = "white"
		text3.style.color = "white"
		text4.style.color = "white"

		modal.style.visibility = "hidden"
		modalInput.value = "";
	}else if(digit===""){
		window.alert(`Nothing inserted`)
	}else{
		modalInput.value = "";
		window.alert(`${digit} has no effect`)
	}
}