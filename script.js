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
	$("#navBar").css({
		"width": "250px",
		"font-size": "2vmax"
	});
};
function closeNav() {
	$("#navBar").css({"width": "0"});
};
function openSumm(summ, mobileSumm) {
		if (isMobile.any()) {
        	$("#pdf").attr("data", mobileSumm);
        }
        else {
        	$("#pdf").attr("data", summ);
        }    
        closeNav();
        closeAll();
};
function home() {
	if (isMobile.any()) {
		$("#pdf").attr("data", "homeMobile.html");
	}
	else {
		$("#pdf").attr("data", "home.html");
	}
	closeNav();
	closeAll();
};
function show(vak) {
	$(vak).fadeIn(200);
};
function closeInner(vak) {
	$(vak).fadeOut(200);
};
function closeAll() {
        closeInner('#aard');
        closeInner('#wisk'); 
        closeInner('#bio');
        closeInner('#chem');
        closeInner('#eng');
        closeInner('#frans');
        closeInner('#fys');
        closeInner('#gesch');
	closeInner('#ned');
}
function close() {
	closeAll();
};
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
			$("#pdf").attr("data", "homeMobile.html");
		});
	};
};
