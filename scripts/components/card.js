// Component card :
export const card = (data) => {
	const cardRestaurant = document.createElement("div");
	cardRestaurant.classList.add("container__main__homepage__section3__cards__card");

	const cardTemplate = `
        <a class="container__main__homepage__section3__cards__card__anchor" href="./html/menu.html?id=${data.id}" title="Visitez le menu du restaurant : ${data.name} ? " role="link">
            <img
                src="./assets/images/restaurants/${data.image}"
                alt="image ${data.name}"
            />
            <span style="display: ${data.tag === "Nouveau" ? "block" : "none"}">${data.tag}</span>

            <div class="container__main__homepage__section3__cards__card__anchor__caption">
                <div class="container__main__homepage__section3__cards__card__anchor__caption__text">
                    <h3>${data.name}</h3>
                    <p>${data.location}</p>
                </div>
                <div class="container__main__homepage__section3__cards__card__anchor__caption__icône">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        </a>
  `;

    cardRestaurant.innerHTML = cardTemplate;
   
	return cardRestaurant;
};
  