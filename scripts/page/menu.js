import { service } from "../services/services.js";

// Menu : 
const menu = () => {
    //? Obtenir l'ID du photographe à partir du paramètre de requête de l'URL
    const url = new URLSearchParams(document.location.search);
    const id = parseInt(url.get("id"));

	const dataRestaurantById = service.getRestaurantById(id); 

};

menu(); 