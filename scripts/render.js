function renderCard(array) {
  let cardContainer = document.querySelector("#card-container");
  cardContainer.innerHTML = "";

  array.forEach((element, index, array) => {
    const card = cardMaker(element, index, array);
    cardContainer.appendChild(card);
  });
}



function renderFavorite(array) {
  let favoriteContainer = document.querySelector("#favorite-container");

  favoriteContainer.innerHTML = "";

  if (array.length > 0) {
    array.forEach((element, index, array) => {
      const favorite = favoriteMaker(element, index, array);
      favoriteContainer.appendChild(favorite);
    });
  }else{
    let favEmpty = favoriteEmpty()
    favoriteContainer.appendChild(favEmpty)
  }
}


