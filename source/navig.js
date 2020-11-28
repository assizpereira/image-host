import { open_category} from './app.js';
import { prospective_wallpapers} from './app.js';

let cat_link;

export function populate_sidenav(categories){
	
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
			if (catname == "Prospective Wallpapers") {
				prospective_wallpapers();
			}
			else {
				open_category(catname);
			}
	
		});
		
}

//populate_sidenav();

