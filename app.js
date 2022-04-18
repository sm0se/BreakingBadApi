const got = async () => {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?page=1`);
    const json = await response.json();
    //console.log(json);
}

fetch('https://www.breakingbadapi.com/api/characters?page=1')
  .then(response => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      //console.log(data[i]);
      
      let container = document.createElement("div");
      container.innerHTML=`
      <img id='image' src=${data[i].img}>
      <p>${data[i].name}</p>
      <p>${data[i].birthday}</p>
      <p>${data[i].status}</p>
      `;
      document.querySelector(".container").appendChild(container);
    }
  })


