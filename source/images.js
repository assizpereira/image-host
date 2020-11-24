console.log("new page data");
let wallsurl = [];
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let res = c.replace("wallup=", "");
            let walsur = res.split(',');

            wallsurl = walsur;
            console.log(wallsurl);
            
            
        }
    }
    return "";
}




function setup(){
    getCookie("wallup");
    console.log(wallsurl);

/*populate photos*/
	let allImages = '';
    
	for (let i = 0; i < wallsurl.length; i++) {
        console.log(wallsurl.length);
        

		allImages = new Image();
		allImages.src = wallsurl[i];

		let src = document.getElementById("wallpapers");
		src.appendChild(allImages);
		console.log(allImages);

    }
}
setup();






var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;

		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	})
}
function get_category_sidenav(){
    for (let i = 0; i < category_thumbnail.length; i++) {

		allImages = new Image();
		allImages.src = category_thumbnail[i];
		allImages.alt = category_alt[i]

		let src = document.getElementsByClassName("dropdown-container");
		src.appendChild(allImages);
		//console.log(allImages);
}
}

