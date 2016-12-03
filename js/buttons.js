
function openNav() {
    // document.getElementById("mySidenav").style.width = "250px";
    $("#mySidenav").animate({
    	left:"0px"
    }, "fast");
}

function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
	$("#mySidenav").animate({
    	left:"-240px"
    }, "fast");
}

