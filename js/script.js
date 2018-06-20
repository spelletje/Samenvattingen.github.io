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
/*
window.onload=function(){
    if (/Edge\/\d./i.test(navigator.userAgent)){
        window.alert('Als je Microsoft Edge gebruikt zijn er problemen met het openen van samenvattingen. Om dit op te lossen kan je Google Chrome of Firefox downloaden.');
    }
}
*/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

var nav_check = false;
var module_check = false;
var popup_check = false;

function openNav() {
    $("#navBar").animate({
        "left": "0"
    }, {queue: false});
    $("#navBarFull").fadeIn(200);
	if (module_check == false) {
	    $(".m3").css ({
		    "background-color": "rgba(0,0,0,0.2)"
		});
	}
    nav_check = true;
};
function closeNav() {
    $("#navBar").animate({"left": "-275px"}, {queue: false});
    $("#navBarFull").fadeOut(200);
    $(".list").css({
        "margin-top": "0%"
    });
    nav_check = false;
};
var closeTopNav_check = false;
function openSumm(summ, mobileSumm) {
    if (isMobile.any()) {
        $("#pdf").attr("data", mobileSumm);
    }
    else {
        $("#pdf").attr("data", summ);
    }    
    closeTopNav_check = true;
    closeNav();
    closeAll();
    closeTopNav();
    $("#pdf").css({
        "z-index": "1"
    });
    $(".home").css({
        "display": "none"
    });
    $("#loading").css({
        "display": "block"
    });
    $("#summSwipe").css({
        "display": "block"
    });
};

function closeTopNav() {
    if (isMobile.any()) {
    }
    else{
        $(".nav").css({
            "top": "-10%"
        });
        $(".pdf").css({
            "height": "100%",
            "top": "0"
        });
    }
}

function openTopNav() {
    if (isMobile.any()) {
    }
    else{
        $(".nav").css({
            "top": "0"
        });
        $(".pdf").css({
            "height": "90%",
            "top": "10%"
        });
    }
}

$(function() {
  $('.openTopNav').hover(function() {
    if (isMobile.any()) {
    }
    else{
        if (closeTopNav_check == true){
            $('.nav').css('top', '0');
        }
    }
  }, function() {
  });
});

$(function() {
  $('.pdf').hover(function() {
    if (isMobile.any()) {
    }
    else{
        if (closeTopNav_check == true){
            $('.nav').css('top', '-10%');
        }
    }
  }, function() {
  });
});

function home() {
    closeTopNav_check = false;
    closeNav();
    closeAll();
    openTopNav();
    $("#pdf").css({
        "z-index": "0"
    });
    $(".home").css({
        "display": "block"
    });
    $("#pdf").attr("data", "");
    $("#loading").css({
        "display": "none"
    });
    $("#summSwipe").css({
        "display": "none"
    });
};
function Leerkrachten() {
    closeTopNav_check = false;
    closeNav();
    closeAll();
    openTopNav();
    $("#pdf").css({
        "z-index": "0"
    });
    $(".home").css({
        "display": "none"
    });
    $("#pdf").attr("data", "Corda/index.html");
    $("#loading").css({
        "display": "none"
    });
    $("#summSwipe").css({
        "display": "none"
    });
};
function show(vak) {
    $(vak).fadeIn(200);
    $("#closePopup").fadeIn(200);
    popup_check = true;
};

function closeInner(vak) {
    $(vak).fadeOut(200);
};

function closeAll() {
    closeInner(document.querySelectorAll("#EHBO, #aardM1, #bioM1, #chemM1, #engM1, #fransM1, #fysM1, #geschM1, #nedM1, #wiskM1, #aardM2, #bioM2, #chemM2, #engM2, #fransM2, #fysM2, #geschM2, #nedM2, #wiskM2, #aardM3, #bioM3, #chemM3, #engM3, #fransM3, #fysM3, #geschM3, #nedM3, #wiskM3, #exam"));
    $("#closePopup").fadeOut(200);
    popup_check = false;
}
$(document).ready(function() {
    if(Math.random() >= 0.5){
        document.getElementById("TeacherM1").style.display = "block";
        document.getElementById("TeacherM2").style.display = "block";
        document.getElementById("TeacherM3").style.display = "block";
        document.getElementById("TeacherF1").style.display = "none";
        document.getElementById("TeacherF2").style.display = "none";
        document.getElementById("TeacherF3").style.display = "none";
    }
    else {
        document.getElementById("TeacherF1").style.display = "block";
        document.getElementById("TeacherF2").style.display = "block";
        document.getElementById("TeacherF3").style.display = "block";
        document.getElementById("TeacherM1").style.display = "none";
        document.getElementById("TeacherM2").style.display = "none";
        document.getElementById("TeacherM3").style.display = "none";
    }
    $(window).on('orientationchange', function(event) {
        if (screen.height < screen.width){
            $(".nav").css({
                "height": "12%"
            });
        }
        else {
            $(".nav").css({
                "height": "10%"
            });
        }
    });
});

function m1() {
    $(".list1").css({
        "display": "block"
    });
    $(".list2").css({
        "display": "none"
    });
    $(".list3").css({
        "display": "none"
    });
    $(".list").css({
        "margin-top": "0%"
    });
	$(".m1").css({
		"background-color": "rgba(0,0,0,0.2)"
	});
	$(".m2").css({
        "background-color": ""
    });
    $(".m3").css({
        "background-color": ""
    });
	module_check = true;
}
function m2() {
    $(".list1").css({
        "display": "none"
    });
    $(".list2").css({
        "display": "block"
    });
    $(".list3").css({
        "display": "none"
    });
    $(".list").css({
        "margin-top": "0%"
    });
    $(".m1").css({
        "background-color": ""
    });
	$(".m2").css({
		"background-color": "rgba(0,0,0,0.2)"
	});
    $(".m3").css({
        "background-color": ""
    });
	module_check = true;
}
function m3() {
    $(".list1").css({
        "display": "none"
    });
    $(".list2").css({
        "display": "none"
    });
    $(".list3").css({
        "display": "block"
    });
    $(".list").css({
        "margin-top": "0%"
    });
	$(".m1").css({
		"background-color": ""
	});
	$(".m2").css({
		"background-color": ""
	});
	$(".m3").css({
		"background-color": "rgba(0,0,0,0.2)"
	});
	module_check = true;
}

function mobile() {
    if (isMobile.any()) {
        $(document).ready(function(){
            $(".popup_content").css({
                "width": "80%",
                "height": "80%",
                "font-size": "18px",
            });
            $(".navList").css({
                "font-size": "20px"
            });
            $(".txt").css({
                "font-size": "2.4vmax"
            });
            $(".m1").css({
                "font-size": "20px"
            });
            $(".m1").text("M1");
            $(".m2").css({
                "font-size": "20px"
            });
            $(".m2").text("M2");
            $(".m3").css({
                "font-size": "20px"
            });
            $(".m3").text("M3");
            $("#loading").css({
                "height": "100px",
                "width": "100px",
                "top": "53%"
            });
            $(".icon").css({
                "margin-top": "0.1rem"
            });
        });
    }
    else {
        $("#ent").text("Elektrisch Potentiaal & Magnetisch Veld");
    }
};

var xDown = 0;
var xMove = 0;
var xDiff = 0;
var navTopHeight = Number($(".openTopNav").height());

window.addEventListener('touchstart', function(e) {
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
});

window.addEventListener('touchmove', function(e) {
    xMove = e.touches[0].clientX;
    xDiff = xMove - xDown;
    if(nav_check == false && popup_check == false) {
        if(xDown < 50 && yDown > navTopHeight) {
            if(xDiff > 0 && xDiff < 275) {
		        $("#navBarFull").fadeIn(200);
                $("#navBar").css({"left": -275 + xDiff});
            }
            else if(xDiff > 275){
                $("#navBar").css({"left": 0});
            }
        }
    }
    else if(popup_check == false){
        if(xDown > 275 && yDown > navTopHeight) {		
            if(xDiff < 0 && xDiff > -275) {
                $("#navBar").css({"left": xDiff});
            }
        }
    }
});

window.addEventListener('touchend', function(e) {
    if(nav_check == false  && popup_check == false) {
        if(xDiff > 100 && xDown < 50 && yDown > navTopHeight) {
            openNav();
        }
        else{
            closeNav();
        }
    }
    else if(popup_check == false){
        if(xDiff < -100 && xDown > 275 && yDown > navTopHeight){
            closeNav();
        }
        else{
            openNav();
        }
    }
});

