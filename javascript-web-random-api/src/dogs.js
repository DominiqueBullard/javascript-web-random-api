import axios from "axios"

export async function fetchDog() {
  const apiUrl = 'https://dog.ceo/api/breeds/image/random';


try {
  const response = await axios.get(apiUrl);
  const dogData = response.data;
  const dogContainer = document.getElementById('dogContainer');

  if(dogData.message){
    const dogImage = document.createElement('img');

    dogImage.src = dogData.message;

    dogImage.alt = "Random Dog Card"

    dogContainer.appendChild(dogImage);
  }
} catch (err){
  console.log(err)
}
}