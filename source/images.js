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
