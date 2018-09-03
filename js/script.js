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

var nav_check = false;
var module_check = false;
var popup_check = false;

function openNav() {
    $("#navBar").animate({
        "left": "0"
    }, {queue: false});
    $("#navBarFull").fadeIn(200);
	if (module_check == false) {
        if ($("#kiesJaar").val() == 5) {
            $(".m3").css ({
                "background-color": "rgba(0,0,0,0.2)"
            });

        }
        else if ($("#kiesJaar").val() == 6) {
    	    $(".m4").css ({
    		    "background-color": "rgba(0,0,0,0.2)"
    		});
        }
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

function show(vak) {
    $(vak).fadeIn(200);
    $("#closePopup").fadeIn(200);
    popup_check = true;
};

function closeInner(vak) {
    $(vak).fadeOut(200);
};

function closeAll() {
    closeInner(document.querySelectorAll("#LO, #aardM1, #bioM1, #chemM1, #engM1, #fransM1, #fysM1, #geschM1, #nedM1, #wiskM1, #aardM2, #bioM2, #chemM2, #engM2, #fransM2, #fysM2, #geschM2, #nedM2, #wiskM2, #aardM3, #bioM3, #chemM3, #engM3, #fransM3, #fysM3, #geschM3, #nedM3, #wiskM3, #exam, #aardM4, #bioM4, #chemM4, #engM4, #fransM4, #fysM4, #geschM4, #nedM4, #wiskM4, #aardM5, #bioM5, #chemM5, #engM5, #fransM5, #fysM5, #geschM5, #nedM5, #wiskM5, #aardM6, #bioM6, #chemM6, #engM6, #fransM6, #fysM6, #geschM6, #nedM6, #wiskM6"));
    $("#closePopup").fadeOut(200);
    popup_check = false;
}


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
    $(".list4").css({
        "display": "none"
    });
    $(".list5").css({
        "display": "none"
    });    
    $(".list6").css({
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
    $(".m4").css({
        "background-color": ""
    });
    $(".m5").css({
        "background-color": ""
    });
    $(".m6").css({
        "background-color": ""
    });
    $("#module").text("Module 1");
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
    $(".list4").css({
        "display": "none"
    });
    $(".list5").css({
        "display": "none"
    });    
    $(".list6").css({
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
    $(".m4").css({
        "background-color": ""
    });
    $(".m5").css({
        "background-color": ""
    });
    $(".m6").css({
        "background-color": ""
    });
    $("#module").text("Module 2");
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
    $(".list4").css({
        "display": "none"
    });
    $(".list5").css({
        "display": "none"
    });    
    $(".list6").css({
        "display": "none"
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
    $(".m4").css({
        "background-color": ""
    });
    $(".m5").css({
        "background-color": ""
    });
    $(".m6").css({
        "background-color": ""
    });
    $("#module").text("Module 3");
    module_check = true;
}
function m4() {
    $(".list1").css({
        "display": "none"
    });
    $(".list2").css({
        "display": "none"
    });
    $(".list3").css({
        "display": "none"
    });
    $(".list4").css({
        "display": "block"
    });
    $(".list5").css({
        "display": "none"
    });    
    $(".list6").css({
        "display": "none"
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
        "background-color": ""
    });
    $(".m4").css({
        "background-color": "rgba(0,0,0,0.2)"
    });
    $(".m5").css({
        "background-color": ""
    });
    $(".m6").css({
        "background-color": ""
    });
    $("#module").text("Module 4");
    module_check = true;
}
function m5() {
    $(".list1").css({
        "display": "none"
    });
    $(".list2").css({
        "display": "none"
    });
    $(".list3").css({
        "display": "none"
    });
    $(".list4").css({
        "display": "none"
    });
    $(".list5").css({
        "display": "block"
    });    
    $(".list6").css({
        "display": "none"
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
        "background-color": ""
    });
    $(".m4").css({
        "background-color": ""
    });
    $(".m5").css({
        "background-color": "rgba(0,0,0,0.2)"
    });
    $(".m6").css({
        "background-color": ""
    });
    $("#module").text("Module 5");
    module_check = true;
}
function m6() {
    $(".list1").css({
        "display": "none"
    });
    $(".list2").css({
        "display": "none"
    });
    $(".list3").css({
        "display": "none"
    });
    $(".list4").css({
        "display": "none"
    });
    $(".list5").css({
        "display": "none"
    });    
    $(".list6").css({
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
        "background-color": ""
    });
    $(".m4").css({
        "background-color": ""
    });
    $(".m5").css({
        "background-color": ""
    });
    $(".m6").css({
        "background-color": "rgba(0,0,0,0.2)"
    });
    $("#module").text("Module 6");
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
            $(".jaar span").css({
                "font-size": "15px"
            });
            $(".txt").css({
                "font-size": "2.4vmax"
            });
            $(".m1").text("M1");
            $(".m2").text("M2");
            $(".m3").text("M3");
            $(".m4").text("M4");
            $(".m5").text("M5");
            $(".m6").text("M6");
            $(".m1").css({
                "font-size": "20px"
            });
            $(".m2").css({
                "font-size": "20px"
            });
            $(".m3").css({
                "font-size": "20px"
            });
            $(".m4").css({
                "font-size": "20px"
            });
            $(".m5").css({
                "font-size": "20px"
            });
            $(".m6").css({
                "font-size": "20px"
            });
            $("#loading").css({
                "height": "100px",
                "width": "100px",
                "top": "53%"
            });
            $(".icon").css({
                "margin-top": "0.1rem"
            });
             $(".ad").css({
                "display": "none"
            });
        });
    }
    //table
    var table = document.getElementById("table");
    var collumns = table.getElementsByTagName("td");
    var headers = table.getElementsByTagName("th");

    var d = new Date();
    var n = d.getDay();
    if(n == 1){
        for(var i = 1; i <= 37; i += 6){
            collumns[i].style.backgroundColor = "#dddddd";
        }
        headers[1].style.backgroundColor = "#dddddd";
    }
    else if(n == 2){
        for(var i = 2; i <= 38; i += 6){
            collumns[i].style.backgroundColor = "#dddddd";
        }
        headers[2].style.backgroundColor = "#dddddd";
    }
    else if(n == 3){
        for(var i = 3; i <= 39; i += 6){
            collumns[i].style.backgroundColor = "#dddddd";
        }
        headers[3].style.backgroundColor = "#dddddd";
    }
    else if(n == 4){
        for(var i = 4; i <= 40; i += 6){
            collumns[i].style.backgroundColor = "#dddddd";
        }
        headers[4].style.backgroundColor = "#dddddd";
    }
    else if(n == 5){
        for(var i = 5; i <= 41; i += 6){
            collumns[i].style.backgroundColor = "#dddddd";
        }
        headers[5].style.backgroundColor = "#dddddd";
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

function changeJaar() {
    if ($("#kiesJaar").val() == 5) {
        $("#nav5de").css({
            "display": "block"
        });
        $("#nav6de").css({
            "display": "none"
        });
        $("#change5").css({
            "display": "block"
        });
        $("#change6").css({
            "display": "none"
        });
        m3();
        module_check = false;
        closeNav();
    }
    if ($("#kiesJaar").val() == 6) {
        $("#nav5de").css({
            "display": "none"
        });
        $("#nav6de").css({
            "display": "block"
        });
        $("#change5").css({
            "display": "none"
        });
        $("#change6").css({
            "display": "block"
        });
        m4();
        module_check = false;
        closeNav();
    }

    $(".m1").css({
        "background-color": ""
    });
    $(".m2").css({
        "background-color": ""
    });
    $(".m3").css({
        "background-color": ""
    });
    $(".m4").css({
        "background-color": ""
    });
    $(".m5").css({
        "background-color": ""
    });
    $(".m6").css({
        "background-color": ""
    });
};
