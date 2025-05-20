import axios from "axios"

let currentImageUrl = '';

export async function fetchDog() {
  const apiUrl = 'https://dog.ceo/api/breeds/image/random';


try {
  const response = await axios.get(apiUrl);
  const dogData = response.data;
  const dogContainer = document.getElementById('dogContainer');
  

  if(dogData.message){
    const dogImage = document.getElementById('img');
    currentImageUrl = dogData.message;

    dogImage.src = dogData.message;

    dogImage.alt = "Random Dog Card";
    dogContainer.appendChild(dogImage);
  }
} catch (err){
  console.log(err)
}
}

export function showBreed(){
  if(!currentImageUrl) return;
  const dialogBreed = document.getElementById('dialogBreed');
  const textBreed = document.getElementById('textBreed');

  const match = currentImageUrl.match(/breeds\/([^\/]+)\//);
  const rawBreed = match ? match[1] : 'Unknown';
  const formattedBreed = rawBreed

  .split ('-')
  .map (word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  textBreed.textContent = `Breed: ${formattedBreed}`;
  dialogBreed.showModal();
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('getDogBtn');
  button.addEventListener('click', fetchDog);
  document.getElementById('showBreedBtn').addEventListener('click', showBreed);
  fetchDog();
});