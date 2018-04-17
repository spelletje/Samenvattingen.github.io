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
function time () {
    var time = new Date();
    var h1 = Math.floor(time.getHours() / 10);
    var m1 = Math.floor(time.getMinutes() / 10);
    var s1 = Math.floor(time.getSeconds() / 10);
    var h2 = time.getHours() - (h1 * 10);
    var m2 = time.getMinutes() - (m1 * 10);
    var s2 = time.getSeconds() - (s1 * 10);
    document.getElementById("time").innerHTML = m2+""+h1+":"+s2+""+h2+":"+m1+""+s1;
}
setInterval(time, 500);
function openNav() {
    $("#navBar").css({
        "width": "250px",
        "font-size": "2vmax"
    });
    $("#navBarFull").css({
        "display": "block"
    });
    $(".closebtn").css({
        "display": "block"
    });
};
function closeNav() {
    $("#navBar").css({"width": "0"});
    $("#navBarFull").css({
        "display": "none"
    });
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
        $(".module").css({
            "top": "14%"
        });
        }
        else {
            $(".module").css({
                "top": "9%"
            });
        }
    });
});
tabCheck = 0;
function moduleTab() {
    if (tabCheck == 0) {
        $(".module").fadeIn(200);
        $(".closeTab").css({
            "display": "block"
        });
        tabCheck++;
        if (isMobile.any()) {
        $(".list").css({
            "margin-top": "57%"
        });
        }
        else {
        $(".list").css({
            "margin-top": "70%"
        });
        }
    }
    else {
        $(".module").fadeOut(200);
        $(".closeTab").css({
            "display": "none"
        });
        tabCheck--;
        $(".list").css({
            "margin-top": "0%"
        });
    }
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
    $(".module").fadeOut(200);
    tabCheck--;
    $(".list").css({
        "margin-top": "0%"
    });
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
    $(".module").fadeOut(200);
    tabCheck--;
    $(".list").css({
        "margin-top": "0%"
    });
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
    $(".module").fadeOut(200);
    tabCheck--;
    $(".list").css({
        "margin-top": "0%"
    });
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
            $("#pdf").attr("data", "homeMobile.html");
        });
    };
};

function abdellahshow (){
     $(".abdellah").css({
        "display": "block"
     });
}

function abdellahnoshow (){
    $(".abdellah").css({
        "display": "none"
     });
}
