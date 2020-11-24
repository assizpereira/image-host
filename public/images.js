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
	//let allImages = '';
    
	for (let i = 0; i < wallsurl.length; i++) {
        console.log(wallsurl.length);
    /*
        let span = document.createElement('img');
        span.src = wallsurl[i];
        let allImages = document.createElement('a'); // is a node
        
       
        allImages.href = wallsurl[i];
        allImages.download = 'imahe.jpeg';
        //span.appendChild(document.createAttribute('src'));
        
        allImages.appendChild(span);

*/ 


        let img = document.createElement('img');
        img.src = wallsurl[i]; 
        
        let a = document.createElement('a');
        a.href = img.src;
        a.download = "Myimage";
        
        a.appendChild(img);
        //document.body.appendChild(a);

        //allImages.innerHTML = '<img class="Download"></img>';
        //allImages = new Image();
        //allImages.download = wallsurl[i];
        //value.src = wallsurl[i];
        //allImages.href = wallsurl[i];
       
		//allImages.src = wallsurl[i];

		let src = document.getElementById("wallpapers");
		src.appendChild(a);
		console.log(a);

    }
}
setup();






