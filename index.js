function showForm() {
  let form = document.getElementById('formID');
  form.style.display = 'flex';
}

function removeForm() {
  let form = document.getElementById('formID');
  form.style.display = 'none';
}

let burgersArray = [




]
let drinksArray = []




let burgers = document.getElementById('burgers');
let drinks = document.getElementById('drinks')

function addItem() {
  let category = document.getElementById('category');



  let imageInput = document.getElementById('file-input');
  console.log(imageInput.value);


  let itemName = document.getElementById('item-name');

  let itemPrice = document.getElementById('item-price');

  let itemDetails = document.getElementById('item-details');

  let file = imageInput.files[0];
  let reader = new FileReader();

  reader.addEventListener('load', function (event) {
    let imageData = event.target.result;
    let newItem = {
      image: imageData,
      name: itemName.value,
      description: itemDetails.value,
      price: itemPrice.value
    };
    itemName.value = '';
    itemDetails.value = '';
    itemPrice.value = '';

    if (category.value === 'burgers') {
      burgersArray.push(newItem);
      updateBurgersHTML()
      removeForm();
    } else if (category.value === 'drinks') {
      drinksArray.push(newItem);
      updateDrinksHTML()
      removeForm();


    }
  });

  reader.readAsDataURL(file);

}




function updateBurgersHTML() {
  burgers.innerHTML = burgersArray.map(generateSingleItemHTML).join('');

}
function updateDrinksHTML() {
  drinks.innerHTML = drinksArray.map(generateSingleItemHTML).join('');

}

function generateSingleItemHTML(item) {
  return `
  
<div class='item flex flex-col items-center justify-center p-5 text-center text-[1.2rem] text-[#5d4037] rounded-[10px] m-2.5 bg-[#FFA500]'>
     <div>
     <img src='${item.image}'>
   
     </div>
  <div>

    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <p>${item.price}</p>
  </div>

</div>
  `
}