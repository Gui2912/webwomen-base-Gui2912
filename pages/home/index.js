/* Desenvolva sua lógica aqui... */

function cardMaker(element,index,array){
  
  let card = document.createElement("li")
  card.classList.add("card")

  let cardTitle = document.createElement("h3")
  cardTitle.innerText = element.title

  let companyName= document.createElement("span")
  companyName.innerText = element.enterprise

  let local = document.createElement("span")
  local.innerText = element.location

  let cardDescription = document.createElement("p")
  cardDescription.innerText = element.descrition

  let cardFooter= document.createElement("div")
  cardFooter.classList = "card-footer flex space-between"

  let typeWork = document.createElement("button")
  typeWork.classList.add("type-work")
  typeWork.innerText = element.modalities[0]

  let candidate = document.createElement("button")
  
  if(vacancyAlredyExist(element) < 0){
    candidate.innerText = "Candidatar"
    
  }else{
    candidate.innerText = "Remover Candidatura"
    
  }
  candidate.classList.add("candidate")
  
  candidate.addEventListener("click", ()=>{
    if(candidate.innerText == "Candidatar"){
      candidate.innerText = "Remover Candidatura"
    }else{
      candidate.innerText = "Candidatar"
    }
    favoriteAndRemove(element)
    renderFavorite(vagasFavoritas)
  })
  
  cardFooter.append(typeWork, candidate)
  card.append(cardTitle, companyName, local, cardDescription, cardFooter)
  return card
}

function favoriteMaker(element, index, array){
  
  let favoriteCard = document.createElement("li")

  let favoriteHeader = document.createElement("div")
  favoriteHeader.classList = "favorite-header flex space-between align-center"

  let favoriteTitle = document.createElement("h4")
  favoriteTitle.innerText = element.title

  let trash = document.createElement("button")
  trash.addEventListener("click", ()=>{
    
    favoriteAndRemove(element)
    renderFavorite(vagasFavoritas)
    renderCard(jobsData)
  })

  let trashImg = document.createElement("img")
  trashImg.src = "assets/img/trash.svg"
  trashImg.classList = "justify-center align-center flex"

  let favoriteEnterprise = document.createElement("span")
  favoriteEnterprise.innerText = element.enterprise

  let favoriteLocal = document.createElement("span")
  favoriteLocal.innerText = element.location

  trash.appendChild(trashImg)
  favoriteHeader.append(favoriteTitle,trash)
  favoriteCard.append(favoriteHeader,favoriteEnterprise,favoriteLocal)

  return favoriteCard
}


function favoriteEmpty(){
  let emptyCard = document.createElement("li")
  
  let emptyP = document.createElement("p")
  emptyP.classList = "empty-p"
  emptyP.innerText = "Você ainda não aplicou para nenhuma vaga"

  let emptyDiv = document.createElement("div")
  emptyDiv.classList = "empty empty-div"

  let emptyDiv2 = document.createElement("div")
  emptyDiv2.classList = "empty empty-div-2"

  let divsAlign = document.createElement("div")
  divsAlign.classList = "flex space-between"

  let divsAlignDiv1 = document.createElement("div")
  divsAlignDiv1.classList = "empty empty-span"

  let divsAlignDiv2 = document.createElement("div")
  divsAlignDiv2.classList = "empty empty-span"

  let divsAlignDiv3 = document.createElement("div")
  divsAlignDiv3.classList = "empty empty-span"

  divsAlign.append(divsAlignDiv1, divsAlignDiv2, divsAlignDiv3)
  emptyCard.append(emptyP, emptyDiv, emptyDiv2, divsAlign)

  return emptyCard
}

