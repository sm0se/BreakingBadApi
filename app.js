
let pagenr = 1;


async function bb(pagenr){
    const response = await fetch(`https://www.breakingbadapi.com/api/characters/${pagenr}`);
    const json = await response.json();
    console.log(json);

    const box = document.createElement("div");
        box.innerHTML=`
        <img src=${JSON.img}>
        <h2>${JSON.char_id}</h2>
        <p>${JSON.name}</p>
        <p>${JSON.birthday}</p>
        <p>${JSON.nickname}</p>

        `;
    document.querySelector(".box").appendChild(box);
    
}
for (i = 1 ; i < 100 ; i++)
{
    bb(pagenr);
    pagenr++;
}
