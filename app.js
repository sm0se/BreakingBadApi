let pagenr = 1;
async function bb(pagenr){
 

    const data = await fetch('https://www.breakingbadapi.com/api/characters?page=1');
    const json = await data.json();
    console.log(json);


    const box = document.createElement("div");
    box.classList.add("box");
    document.body.appendChild(box);
    box.appendChild(document.createElement("img")).src = json[pagenr].img;

    const box2 = document.createElement("div");
    box.classList.add("box2");
    document.body.appendChild(box2);
    box.appendChild(document.createElement("h1")).innerHTML = json[pagenr].name;
    box.appendChild(document.createElement("p")).innerHTML = json[pagenr].status;
    box.appendChild(document.createElement("p")).innerHTML = json[pagenr].nickname;
    box.appendChild(document.createElement("p")).innerHTML = json[pagenr].appearance;
    box.appendChild(document.createElement("p")).innerHTML = json[pagenr].portrayed;
    box.appendChild(document.createElement("p")).innerHTML = json[pagenr].category;
    box.appendChild(document.createElement("p")).innerHTML = json[pagenr].better_call_saul_appearance;

    document.querySelector(".box").appendChild(box);
    document.querySelector(".box2").appendChild(box2);
    
}
for (i = 1 ; i < 100 ; i++)
{
    bb(pagenr);
    pagenr++;
}
