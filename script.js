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
var module_check = false;
function openNav() {
    $("#navBar").css({
        "width": "275px",
        "font-size": "2vmax"
    });
    $("#navBarFull").fadeIn(200);
    $(".closebtn").css({
        "display": "block"
    });
	if (module_check == false) {
		$(".m3").css ({
			"background-color": "rgba(0,0,0,0.2)"
		});
	}
};
function closeNav() {
    $("#navBar").css({"width": "0"});
    $("#navBarFull").fadeOut(200);
    $(".closebtn").css({
        "display": "none"
    });
    $(".module").fadeOut(200);
    tabCheck = 0;
    $(".list").css({
        "margin-top": "0%"
    });
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
function help() {
    $("#pdf").attr("data", "changelog.txt");
};
function show(vak) {
    $(vak).fadeIn(200);
    $(".module").fadeOut(200);
    tabCheck = 0;
    $(".list").css({
        "margin-top": "0%"
    });
};

function closeInner(vak) {
    $(vak).fadeOut(200);
};

function closeAll() {
        closeInner(document.querySelectorAll("#aardM1, #bioM1, #chemM1, #engM1, #fransM1, #fysM1, #geschM1, #nedM1, #wiskM1, #aardM2, #bioM2, #chemM2, #engM2, #fransM2, #fysM2, #geschM2, #nedM2, #wiskM2, #aardM3, #bioM3, #chemM3, #engM3, #fransM3, #fysM3, #geschM3, #nedM3, #wiskM3, #exam"));
}

window.onclick = function(event) {
    if (event.target == document.getElementById("aardM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("bioM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("chemM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("engM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("fransM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("fysM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("geschM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("nedM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("wiskM1")) {
        closeAll();
    }
    if (event.target == document.getElementById("aardM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("bioM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("chemM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("engM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("fransM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("fysM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("geschM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("nedM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("wiskM2")) {
        closeAll();
    }
    if (event.target == document.getElementById("aardM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("bioM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("chemM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("engM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("fransM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("fysM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("geschM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("nedM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("wiskM3")) {
        closeAll();
    }
    if (event.target == document.getElementById("exam")) {
        closeAll();
    }   
}

$(document).ready(function() {
    $(window).on('orientationchange', function(event) {
        if (screen.height < screen.width){
        $(".logo").css({
            "height": "3vw",
            "width": "3vw",
            "left": "1vw",
            "margin-top": "0.3vw",
        });
        $(".nav").css({
            "height": "12%"
        });
        }
        else {
        $(".logo").css({
            "height": "3vh",
            "width": "3vh",
            "left": "1vh",
            "margin-top": "0.2vh",
        });
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
	/*
    $(".module").fadeOut(200);
    tabCheck--;
	*/
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
	/*
    $(".module").fadeOut(200);
    tabCheck--;
	*/
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
	/*
    $(".module").fadeOut(200);
    tabCheck--;
	*/
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
                "font-size": "20px",
            });
            $(".navList").css({
                "font-size": "20px"
            });
            $(".m1").css({
                "font-size": "20px"
            });
            $(".m2").css({
                "font-size": "20px"
            });
            $(".m3").css({
                "font-size": "20px"
            });
            $(".popupContentInner").css({
                "width": "80%"
            });
            $(".logo").css({
                "height": "3vh",
                "width": "3vh",
                "left": "1vh",
                "margin-top": "0.2vh",
            });
            $(".imgPush").css({
                "position": "absolute"
            });
            $("#pdf").attr("data", "homeMobile.html");
        });
    };
};
