var dropdown = document.getElementsByClassName("dropdown-btn");
     var i;
     /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
     for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        
     if (dropdownContent.style.display === "block") {
       dropdownContent.style.display = "none";
       } else {
       dropdownContent.style.display = "block";
       }
       })
    }


    /*photos*/

    function getRandomSize(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
    
    let allImages = "";
    let url = "";
    let url_arr = [];
    
    for (var i = 0; i < 25; i++) {
      let width = getRandomSize(200, 400);
      let height =  getRandomSize(200, 400);
      url = "https://placekitten.com/"+width+"/"+height+'';
    
       
       // append new value to the array
       url_arr.push(url);
      console.log(url_arr);
    }
    for (var i=0, len=url_arr.length; i<len; i++) {
      allImages = new Image();
      allImages.src = url_arr[i];
      console.log("heereee")
      console.log(url_arr[i])
      const section_element = document.getElementById('photos');
    
    section_element.append(allImages);

    }
      allImages = new Image();
      allImages.src = url;
      
     // '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
      //allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
   
    const section_element = document.getElementById('photos');
    
    section_element.append(allImages);
    
    console.log(section_element);
    
   
    
//const dji = '<img src="https://placekitten.com/265/265" alt="pretty kitty">';
   // section_element.append(dji);