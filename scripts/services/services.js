// Importation des data :
import dataRestaurants from '../data/dataRestaurants.json' assert { type: "json" };

// Data Sevice Api :
export const service = {
    // Récupération de tout les data des restaurants :
    getAllRestaurants() {
		try {
			const path = dataRestaurants
			const responce = path.dataRestaurants;
			console.log(responce);
            return responce;
		} catch (err) {
			throw new Error(`Error data restaurants: ${err.message}`);
		}
	},

	// Récupération la data d'un seul restaurants :
	getRestaurantById(id) {
		try {
			const path = dataRestaurants
			const responce = path.dataRestaurants;
			const restaurantsById = responce.find(
				(dataRestaurants) => dataRestaurants.id === id,
			);
			console.log(restaurantsById);
			return restaurantsById;
		} catch (error) {
			throw new Error(`Error data restaurants: ${err.message}`);
		}
	}
};