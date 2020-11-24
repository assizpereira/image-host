import { populate_sidenav} from './navig.js';

let database;

/*
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

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


let cat_link;
function populate_sidenav(categories){
	
	for (let i = 0; i < categories.length; i++) {
		console.log(categories[i]);
		cat_link = categories[i];	
		let value = document.createElement('a'); // is a node
		value.innerHTML = cat_link;
		value.value = cat_link;

		
	
		let src = document.getElementById("category");
		src.appendChild(value);

	}
		
		document.getElementById('category').addEventListener("click", function (e) {
			let catname = (e.target.value);
			console.log(catname);
			open_category(catname);
		});

}
*/

//firebase code

function setup() {


	var firebaseConfig = {
		apiKey: "AIzaSyDAIn4j55QfF2Oo-KCpBT2pEKNCyW6ybok",
		authDomain: "wallpapernest.firebaseapp.com",
		databaseURL: "https://wallpapernest.firebaseio.com",
		projectId: "wallpapernest",
		storageBucket: "wallpapernest.appspot.com",
		messagingSenderId: "819954093074",
		appId: "1:819954093074:web:393d10d72ea637d46fdccb"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	database = firebase.database();
	loadFirebase();
}

function loadFirebase() {
	var ref = database.ref("categories");
	ref.on("value", gotData, errData);
}

function errData(error) {
	console.log("Something went wrong.");
	console.log(error);
}

// The data comes back as an object
function gotData(data) {
	console.log(data.val());
	let users = data.val();
	let keys = Object.keys(users);
	console.log(keys);
	populate_sidenav(keys); //calling to populatecat.
	

	for (let i = 0; i < keys.length; i++) {


		let k = keys[i];
		//let name = users[k].desc;
		let type = users[k].thumbnail;

		//adding image links to array
		category_thumbnail.push(type);
		category_alt.push(k);
		console.log(type);
		
	}
	shuffle(category_thumbnail);
	
	


}
/*shuffle images*/
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	category_thumbnail = array;
	populatethumb();
}
  
	
	
  

  



/*populate photos*/
let category_thumbnail = [];
let category_alt = [];


function populatethumb() {
	let allImages = '';

	console.log(category_thumbnail);
	for (let i = 0; i < category_thumbnail.length; i++) {

		allImages = new Image();
		allImages.src = category_thumbnail[i];
		allImages.alt = category_alt[i]
		

		let src = document.getElementById("photos");
		src.appendChild(allImages);
		//console.log(allImages);

	}
	get_category_thumb_data();
}
//getting the alt text of the photos
function get_category_thumb_data() {
	let categoryname;

	document.getElementById('photos').addEventListener("click", function (e) {
		categoryname = (e.target.alt);
		open_category(categoryname);
	});
}


//after user clicks on a category open those images
export function open_category(categoryname){
	console.log(categoryname);
	let ref = database.ref("images/"+categoryname);//accessing images
	ref.on("value", Gotimages, errData);
}




let wallurls = [];

function Gotimages(data) {
	console.log("data val" + data.val());
	
	let images = data.val();
	let keys = Object.keys(images);
	console.log(keys);


	for (let i = 0; i < keys.length; i++) {


		let k = keys[i];
		let url = images[k].url;
		

		//adding image links to array
		wallurls.push(url);
		console.log(url);

	}
	replace_prev_images()
}






function replace_prev_images(){
	//saving cookie
	
	//module.exports = wallurls;
	console.log(wallurls);

	document.cookie = "wallup" + "=" + wallurls + ";" + 30 + ";path=/";
	window.open ('images.html','_self',false);
	


}
setup();