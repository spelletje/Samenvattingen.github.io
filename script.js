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
function openSumm(summ, mobileSumm) {
		var objData = document.getElementById("pdf");
		if (isMobile.any()) {
        	objData.setAttribute("data", mobileSumm);
        }
        else {
            objData.setAttribute("data", summ);
        }    
        closeNav();
        closeAard();
        closeBio();
        closeChem();
        closeEng();
        closeFrans();
        closeFys();
        closeGesch();
        closeWisk();   
};
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