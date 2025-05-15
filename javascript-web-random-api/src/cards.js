import axios from "axios"

export async function fetchClowCard() {
  const apiUrl = 'https://protected-taiga-89091.herokuapp.com/api/card'

}
try {
  const response = await axios.get(apiUrl);
  const cardData = response.data;
  const cardContainor = document.getElementById('cardContainor');

  if(cardData){
    const cardImage = document.createElement('img');

    cardImage.src = cardData.url;

    cardImage.alt = "Random Clow Card"
  }
} catch (err){
  console.log(err)
}