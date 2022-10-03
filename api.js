const movie= document.querySelector("#movies");
fetch('https://k2maan-moviehut.herokuapp.com/api/random').then(response =>{
    return response.json();
}).then(data =>{
    movie.innerHTML=data.name;
})