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
           /*shuffle images*/
          /* Durstenfeld shuffle, algorithm*/

            for (var x = wallsurl.length - 1; x > 0; x--) {
                var j = Math.floor(Math.random() * (x + 1));
                var temp = wallsurl[x];
                wallsurl[x] = wallsurl[j];
                wallsurl[j] = temp;
            }
            
        }
    }
    return "";
}



  




function setup(){
    getCookie("wallup");
    console.log(wallsurl);

/*populate wallpapers*/
    //let allImages = '';
	for (let i = 0; i < wallsurl.length; i++) {
        console.log(wallsurl.length);

        let img = document.createElement('img');
        img.src = wallsurl[i]; 
        
        let button = document.createElement('input')
        button.id = "download_btn";
        button.type = 'button';
    button.value = "download";
  
/*
        let btn_img = document.createElement('span')
        btn_img.id = "download_img_btn";
        btn_img.src = "./img/download.svg";




        button.appendChild(btn_img)
        
  */
        

        let div_walls = document.createElement('div');
        div_walls.id = "wrapper_div";
        
        
        div_walls.appendChild(img);
        div_walls.appendChild(button);
        //document.body.appendChild(a);

        //allImages.innerHTML = '<img class="Download"></img>';
        //allImages = new Image();
        //allImages.download = wallsurl[i];
        //value.src = wallsurl[i];
        //allImages.href = wallsurl[i];
       
		//allImages.src = wallsurl[i];

		let src = document.getElementById("wallpapers");
		src.appendChild(div_walls);
    
    }
    open_category_dropdown();
    
}

function open_category_dropdown(){
   // let dropdown = document.getElementsByClassName("dropdown-btn");
    //console.log(dropdown);
    document.getElementById("category").style.display = "block";
        
   
}








setup();








