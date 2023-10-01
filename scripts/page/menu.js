import { service } from "../services/services.js";
import { banner } from "../components/banner.js";
import { blockMenu } from "../components/blockMenu.js";

// Menu : 
const menu = () => {
    //? Obtenir l'ID du photographe à partir du paramètre de requête de l'URL
    const url = new URLSearchParams(document.location.search);
    const id = parseInt(url.get("id"));

	const dataRestaurantById = service.getRestaurantById(id); 

	const backgroundBanner = document.querySelector(
		".container__main__menu__block"
	);
    backgroundBanner.append(banner(dataRestaurantById)); 


    const sectionMenu = document.querySelector(
		".container__main__menu__section1"
	);
    sectionMenu.append(blockMenu(dataRestaurantById)); 
};

menu(); 