
console.log("new page data");

let wallsurl = [];
function  getsession(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
     
        if (c.indexOf(name) == 0) {
            console.log("dwdwdw");
            let res = c.replace("wallup=", "");
            let walsur = res.split(',');

            wallsurl = walsur;
            console.log(wallsurl);
           /*shuffle images*/
          /* Durstenfeld shuffle, algorithm
          
            for (var x = wallsurl.length - 1; x > 0; x--) {
                var j = Math.floor(Math.random() * (x + 1));
                var temp = wallsurl[x];
                wallsurl[x] = wallsurl[j];
                wallsurl[j] = temp;
            }
            */
        }
    }
    return "";
}



  

   
setup();

     function setup(){
        var lastname = sessionStorage.getItem("wallup");
        console.log(lastname);


        
        var nameArr = lastname.split(',');
    console.log(nameArr);
    for (var x = nameArr.length - 1; x > 0; x--) {
        var j = Math.floor(Math.random() * (x + 1));
        var temp = nameArr[x];
        nameArr[x] = nameArr[j];
        nameArr[j] = temp;
    }

    for(let i = 0; i < nameArr.length; i++){
        let url = nameArr[i].replace(/^"(.*)"$/, '$1');
        
       
        wallsurl.push(url);
    }
    

    
      // let cname = "wallup";
        //getsession(lastname);
       

    
    /*populate wallpapers*/
        //let allImages = '';
        for (let i = 0; i < wallsurl.length; i++) {
            console.log(wallsurl.length);
    
            let img = document.createElement('img');
            img.src = wallsurl[i]; 
            
            let button = document.createElement('button');
            button.id = "download_btn";
            button.innerHTML = "download";
            button.value = wallsurl[i];
    
            
      /*
    
            let btn_data = document.createElement('a')
            btn_data.id = "download_span_links";
            btn_data.href = wallsurl[i];
    
    
    
    
            button.appendChild(btn_data)
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
            //let btndown = document.getElementById("download_btn");
            button.addEventListener("click", function () {
                listenforclicks(button.value);
            });
            
        }
        
        
    }
    
    
     function open_category_dropdown(){
       // let dropdown = document.getElementsByClassName("dropdown-btn");
        //console.log(dropdown);
        document.getElementById("category").style.display = "block";
            
       
    }
     function listenforclicks(Fileurl){
      
        //let i  = '';
        //let btndown = document.getElementById("download_btn");
        console.log(Fileurl);
        if (Fileurl === undefined){
    
        }
        else{
            download_image(Fileurl);
        }
    }
        
    
    function download_image(Fileurl){
    let fileName = "Wallpapernest Wallpaper";
    //downloading the image
    var xhr = new XMLHttpRequest();
    xhr.open("GET", Fileurl, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
    
    
    
    
    }
    
    
    
   
    
    
    
    
    
    
    
    
    
   // setup(wallurls);
    
    
    
    




/*


*/


  





