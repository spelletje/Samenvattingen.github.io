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
        closeInner(document.querySelectorAll("#aard, #bio, #chem, #eng, #frans, #fys, #gesch, #ned, #wisk, #exam"));
}
window.onclick = function(event) {
    if (event.target == document.getElementById("aard")) {
        closeAll();
    }
    if (event.target == document.getElementById("bio")) {
        closeAll();
    }
    if (event.target == document.getElementById("chem")) {
        closeAll();
    }
    if (event.target == document.getElementById("eng")) {
        closeAll();
    }
    if (event.target == document.getElementById("frans")) {
        closeAll();
    }
    if (event.target == document.getElementById("fys")) {
        closeAll();
    }
    if (event.target == document.getElementById("gesch")) {
        closeAll();
    }
    if (event.target == document.getElementById("ned")) {
        closeAll();
    }
    if (event.target == document.getElementById("wisk")) {
        closeAll();
    }
    if (event.target == document.getElementById("exam")) {
        closeAll();
    }   
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
            $(".popupContentInner").css({
                "width": "80%"
            });
            $("#pdf").attr("data", "homeMobile.html");
        });
    };
};