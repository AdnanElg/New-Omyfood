import { service } from "../services/services.js";
import { card } from "../components/card.js";

// Home Page : 
const homePage = () => {
	const dataRestaurantAll = service.getAllRestaurants(); 
	
	dataRestaurantAll.forEach((dataRestaurantAll) => {
		const cardSection = document.querySelector(
			".container__main__homepage__section3__cards"
		);
		cardSection.append(card(dataRestaurantAll)); 
	});
};

homePage(); 