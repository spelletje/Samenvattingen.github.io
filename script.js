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
var objData = document.getElementById("pdf");
function openNav() {
		document.getElementById("navBar").style.width = "250px";
		document.getElementById("navBar").style.fontSize = "2vmax";
}
function closeNav() {
		document.getElementById("navBar").style.width = "0";
}
function summ_aard_HO() {
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_aard_HO.pdf");
        }
        else {
            objData.setAttribute("data", "summ_aard_HO.pdf");
        }    
        closeNav();
        closeAard();    
}
function summ_bio() {		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_bio.pdf");
        }
        else {
            objData.setAttribute("data", "summ_bio.pdf");
        }    
        closeNav();
        closeBio();    
}
function summ_chem_atom() {		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_chem_atom.pdf");
        }
        else {
            objData.setAttribute("data", "summ_chem_atom.pdf");
        }    
        closeNav();
        closeChem();    
}
function summ_chem_even() {		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_chem_even.pdf");
        }
        else {
            objData.setAttribute("data", "summ_chem_even.pdf");
        }    
        closeNav();
        closeChem();    
}
function summ_eng_u3_4() {
		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_eng_u3_4.pdf");
        }
        else {
            objData.setAttribute("data", "summ_eng_u3_4.pdf");
        }    
        closeNav();
        closeEng();    
}
function summ_frans_pronom() {
		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_frans_pronom.pdf");
        }
        else {
            objData.setAttribute("data", "summ_frans_pronom.pdf");
        }    
        closeNav();
        closeFrans();    
}
function summ_fys() {
		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_fys.pdf");
        }
        else {
            objData.setAttribute("data", "summ_fys.pdf");
        }    
        closeNav();
        closeFys();    
}
function summ_gesch_strijd() {
		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_gesch_strijd.pdf");
        }
        else {
            objData.setAttribute("data", "summ_gesch_strijd.pdf");
        }    
        closeNav();
        closeGesch();    
}
function summ_wisk_complex() {
		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_wisk_complex.pdf");
        }
        else {
            objData.setAttribute("data", "summ_wisk_complex.pdf");
        }    
        closeNav();
        closeWisk();    
}
function summ_wisk_funct() {
		
		if (isMobile.any()) {
        	objData.setAttribute("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_wisk_funct.pdf");
        }
        else {
            objData.setAttribute("data", "summ_wisk_funct.pdf");
        }    
        closeNav();
        closeWisk();    
}
function summ_wisk_gon() {
		
		if (isMobile.any()) {
        	$("#pdf").attr("data", "https://docs.google.com/gview?embedded=true&url=https://samenvattingen.github.io/summ_wisk_gon.pdf");
        }
        else {
            $("#pdf").attr("data", "summ_wisk_gon.html");
        }    
        closeNav();
        closeWisk();    
}
function home() {
	if (isMobile.any()) {
		$("#pdf").attr("data", "homeMobile.html");
	}
	else {
		$("#pdf").attr("data", "home.html");
	}
	closeNav();
}
function show(vak) {
	if (vak === aard) {
		$("#aard").fadeIn(200);
	}
	if (vak === bio) {
		$("#bio").fadeIn(200);
	}
	if (vak === chem) {
		$("#chem").fadeIn(200);
	}
	if (vak === eng) {
		$("#eng").fadeIn(200);
	}
	if (vak === frans) {
		$("#frans").fadeIn(200);
	}
	if (vak === fys) {
		$("#fys").fadeIn(200);
	}
	if (vak === gesch) {
		$("#gesch").fadeIn(200);
	}
	if (vak === wisk) {
		$("#wisk").fadeIn(200);
	}
};
function closeAard() {
	$("#aard").fadeOut(200);
}
function closeBio() {
	$("#bio").fadeOut(200);
}
function closeChem() {
	$("#chem").fadeOut(200);
}
function closeEng() {
	$("#eng").fadeOut(200);
}
function closeFys() {
	$("#fys").fadeOut(200);
}
function closeFrans() {
	$("#frans").fadeOut(200);
}
function closeGesch() {
	$("#gesch").fadeOut(200);
}
function closeWisk() {
	$("#wisk").fadeOut(200);
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
	}
};