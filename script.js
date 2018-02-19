debugger;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function openNav() {
		document.getElementById("navBar").style.width = "350px";
};
function closeNav() {
		document.getElementById("navBar").style.width = "0";
};
function changeAard() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_aard.pdf');
			if (isMobile.any()) {
				objData.setAttribute('data', 'http://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_aard.pdf');
			}		
};
function changeBio() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_bio.pdf');
			if (isMobile.any()) {
				objData.setAttribute('data', 'http://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_bio.pdf');
			}		
};
function changeChem() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_chem.pdf');
			if (isMobile.any()) {
				objData.setAttribute('data', 'http://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_chem.pdf');
			}		
};
function changeEng() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_eng.pdf');
			if (isMobile.any()) {
				objData.setAttribute('data', 'http://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_eng.pdf');
			}		
};
function changeFrans() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_frans.pdf');
			if (isMobile.any()) {
				objData.setAttribute('data', 'http://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_frans.pdf');
			}	
};
function changeFys() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_fys.pdf');
			if (isMobile.any()) {
				objData.setAttribute('data', 'http://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_fys.pdf');
			}		
};
function changeGesch() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_gesch.pdf');
			if (isMobile.any()) {
				objData.setAttribute('data', 'http://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_gesch.pdf');
			}		
};
function changeWisk() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_wisk.pdf');
			if (isMobile.any()) {
				objData.setAttribute('data', 'http://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_wisk.pdf');
			}		
};
var x = 1
if (x == 1) {
	document.getElementById("navBar").style.width = "50%";
	document.getElementById("navBar").style.backgroundColor = "blue";
};

function openPopupWisk() {
	document.getElementById('popupWisk').style.display = "block";
}
function closePopupWisk() {
	document.getElementById('popupWisk').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupWisk')) {
        document.getElementById('popupWisk').style.display = "none";
    }
}
