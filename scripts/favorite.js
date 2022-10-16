function getFavoritesLocalStor(){
  return JSON.parse(localStorage.getItem("@saveVacancy")) || []
}

let vagasFavoritas = getFavoritesLocalStor()
console.log(vagasFavoritas);

function vacancyAlredyExist(vacancy){
  return vagasFavoritas.findIndex(elt => elt.id === vacancy.id)
}

function favoriteAndRemove(vacancy){
  const vacancyExist = vacancyAlredyExist(vacancy)
  
  if(vacancyExist < 0){
    vagasFavoritas = [...vagasFavoritas, vacancy]
    
  }else{
    vagasFavoritas.splice(vacancyExist, 1)
    
  }

  localStorage.setItem("@saveVacancy", JSON.stringify(vagasFavoritas))
}
renderCard(jobsData);
renderFavorite(vagasFavoritas)
