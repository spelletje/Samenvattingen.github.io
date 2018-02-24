window.onload = mobile;
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
}

function openNav() {
		document.getElementById("navBar").style.width = "250px";
		document.getElementById("navBar").style.fontSize = "2vmax";
}
function closeNav() {
		document.getElementById("navBar").style.width = "0";
}
function summ_aard_HO() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_aard_HO.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_aard_HO.pdf');
        }    
        closeNav();
        close(aard);    
}
function summ_bio() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_bio.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_bio.pdf');
        }    
        closeNav();
        close(bio);    
}
function summ_chem_atom() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_chem_atom.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_chem_atom.pdf');
        }    
        closeNav();
        close(chem);    
}
function summ_chem_even() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_chem_even.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_chem_even.pdf');
        }    
        closeNav();
        close(chem);    
}
function summ_eng_u3_4() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_eng_u3_4.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_eng_u3_4.pdf');
        }    
        closeNav();
        close(eng);    
}
function summ_frans_pronom() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_frans_pronom.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_frans_pronom.pdf');
        }    
        closeNav();
        close(frans);    
}
function summ_fys() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_fys.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_fys.pdf');
        }    
        closeNav();
        close(fys);    
}
function summ_gesch_strijd() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_gesch_strijd.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_gesch_strijd.pdf');
        }    
        closeNav();
        close(gesch);    
}
function summ_wisk_complex() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_wisk_complex.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_wisk_complex.pdf');
        }    
        closeNav();
        close(wisk);    
}
function summ_wisk_funct() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_wisk_funct.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_wisk_funct.pdf');
        }    
        closeNav();
        close(wisk);    
}
function summ_wisk_gon() {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_wisk_gon.pdf');
        }
        else {
            objData.setAttribute('data', 'summ_wisk_gon.pdf');
        }    
        closeNav();
        close(wisk);    
}
function home() {
	if (isMobile.any()) {
		objData = document.getElementById("pdf")
		objData.setAttribute("data", "homeMobile.html");
		}
		else {
		objData = document.getElementById("pdf")
		objData.setAttribute("data", "home.html");
		}
	closeNav();
}
function show(vak) {
	if (vak === aard) {
		$("#aard").fadeIn(300);
	}
	if (vak === bio) {
		$("#bio").fadeIn(300);
	}
	if (vak === chem) {
		$("#chem").fadeIn(300);
	}
	if (vak === eng) {
		$("#eng").fadeIn(300);
	}
	if (vak === frans) {
		$("#frans").fadeIn(300);
	}
	if (vak === fys) {
		$("#fys").fadeIn(300);
	}
	if (vak === gesch) {
		$("#gesch").fadeIn(300);
	}
	if (vak === wisk) {
		$("#wisk").fadeIn(300);
	}
};
function closeAard() {
	$("#aard").fadeOut(300);
}
function closeBio() {
	$("#bio").fadeOut(300);
}
function closeChem() {
	$("#chem").fadeOut(300);
}
function closeEng() {
	$("#eng").fadeOut(300);
}
function closeFys() {
	$("#fys").fadeOut(300);
}
function closeFrans() {
	$("#frans").fadeOut(300);
}
function closeGesch() {
	$("#gesch").fadeOut(300);
}
function closeWisk() {
	$("#wisk").fadeOut(300);
}
function mobile() {
	if (isMobile.any()) {
		$(document).ready(function(){
			$(".popup_content").css({
				"width": "80%",
				"height": "80%",
				"font-size": "20px",
				"margin-top": "10%"
			});
			$(".navList").css({
				"font-size": "20px"
			});
			$("pdf").attr("data", "homeMobile.html");
			objData = document.getElementById("pdf");
			objData.setAttribute("data", "homeMobile.html");
		});
		/*var popupContent = document.getElementsByClassName("popup_content");
		var navList = document.getElementsByClassName("navList");
		var home = document.getElementsByClassName("home");
		var txt = document.getElementsByClassName("txt");
		for (var i = 0; i < popupContent.length; i++) {
			//alert("MOBILE");
			popupContent[i].style.width = "80%";
			popupContent[i].style.height = "80%";
			popupContent[i].style.fontSize = "20px";
			popupContent[i].style.marginTop = "10%";
		}
		for (var i = 0; i < navList.length; i++) {
			navList[i].style.fontSize = "20px";
		}
		objData = document.getElementById("pdf")
		objData.setAttribute("data", "homeMobile.html");*/
	}
};