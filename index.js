const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"

// Bea json() é um methodo do jQuery, dps teste com JSON.parse.
// O metodo json() também não é suportado por alguns browsers
// como IE, firefox android, Samsung Internet e Android Webview
fetch(url)
  .then(response => response.json())
  .then(data => {

    let element = document.getElementById('cards');

    for(indice of data){
      element.innerHTML = 
      `
      <p><img src="${indice.photo}"></p>
      <p>${indice.property_type}</p>
      <p>${indice.name}</p>
      <p>${indice.price}</p>

      `;
    }
    
    console.log(data);
  })
  .catch(err => console.log(err))
