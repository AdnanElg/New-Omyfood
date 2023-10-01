// Component banner :
export const banner = (data) => {

  const bannerRestaurant = document.createElement("div");
	bannerRestaurant.classList.add("container__main__menu__block__banner");

	const bannerTemplate = `
        <img src="../assets/images/restaurants/${data.image}" alt="image ${data.name}" />
  `;

  bannerRestaurant.innerHTML = bannerTemplate;
   
  return bannerRestaurant;
};
  