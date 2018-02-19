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
}
function openNav() {
		document.getElementById("navBar").style.width = "350px";
}
function closeNav() {
		document.getElementById("navBar").style.width = "0";
}

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

function openPopupGesch() {
	document.getElementById('popupGesch').style.display = "block";
}
function closePopupGesch() {
	document.getElementById('popupGesch').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupGesch')) {
        document.getElementById('popupGesch').style.display = "none";
    }
}

function openPopupFys() {
	document.getElementById('popupFys').style.display = "block";
}
function closePopupFys() {
	document.getElementById('popupFys').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupFys')) {
        document.getElementById('popupFys').style.display = "none";
    }
}

function openPopupFrans() {
	document.getElementById('popupFrans').style.display = "block";
}
function closePopupFrans() {
	document.getElementById('popupFrans').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupFrans')) {
        document.getElementById('popupFrans').style.display = "none";
    }
}

function openPopupEng() {
	document.getElementById('popupEng').style.display = "block";
}
function closePopupEng() {
	document.getElementById('popupEng').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupEng')) {
        document.getElementById('popupEng').style.display = "none";
    }
}

function openPopupChem() {
	document.getElementById('popupChem').style.display = "block";
}
function closePopupChem() {
	document.getElementById('popupChem').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupChem')) {
        document.getElementById('popupChem').style.display = "none";
    }
}

function openPopupBio() {
	document.getElementById('popupBio').style.display = "block";
}
function closePopupBio() {
	document.getElementById('popupBio').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupBio')) {
        document.getElementById('popupBio').style.display = "none";
    }
}

function openPopupAard() {
	document.getElementById('popupAard').style.display = "block";
}
function closePopupAard() {
	document.getElementById('popupAard').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupAard')) {
        document.getElementById('popupAard').style.display = "none";
    }
}
