// Component menu :
export const blockMenu = (data) => {
    const menuRestaurant = document.createElement("div");
    menuRestaurant.classList.add("container__main__menu__section1__backround");

    const menuTemplate = `
        <div class="container__main__menu__section1__backround__title">
            <h3>${data.name}</h3>
            <i class="fa-regular fa-heart"></i>
        </div>

        <div class="container__main__menu__section1__backround__blocks">
            ${generateMenuCategory("Entrées", data.menu.Entrées)}
            ${generateMenuCategory("Plats", data.menu.Plats)}
            ${generateMenuCategory("Desserts", data.menu.Desserts)}
        </div>

        <div class="container__main__menu__section1__backround__btn">
            <button>Commander</button>
        </div>
    `;

    menuRestaurant.innerHTML = menuTemplate;

    return menuRestaurant;
};

const generateMenuCategory = (categoryName, items) => {
    return `
        <div class="container__main__menu__section1__backround__blocks__block">
        <h4>${categoryName}</h4>
        ${items.map((item) => {
            return generateMenuItem(item);
        }).join('')}
        </div>
    `;
}

const generateMenuItem = (item) => {
    return `
        <div class="container__main__menu__section1__backround__blocks__block__card">
            <div class="container__main__menu__section1__backround__blocks__block__card__text">
                <h5>${item.name}</h5>
                <p>${item.description}</p>
            </div>
            <div class="container__main__menu__section1__backround__blocks__block__card__price">
                <span>${item.price}</span>
            </div>
            <div class="container__main__menu__section1__backround__blocks__block__card__check">
                <i class="fa fa-check-circle"></i>
            </div>
        </div>
    `;
}
