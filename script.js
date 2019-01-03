
function randomimg(){
	var img1 = document.getElementByID("");
	var img2 = document.getElementByID("");
	var img3 = document.getElementByID("");
	var img4 = document.getElementByID("");
	var img5 = document.getElementByID("");
	var img6 = document.getElementByID("");
	var img7 = document.getElementByID("");
	var img8 = document.getElementByID("");
	var img9 = document.getElementByID("");
	var img10 = document.getElementByID("");
	var img11 = document.getElementByID("");
	var img12 = document.getElementByID("");
	window.alert("Images should be loaded");
}

var random_images_array = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png", ];
function getRandomImage(imgAr, path) {
    path = path || 'images/';
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}