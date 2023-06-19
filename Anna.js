import { data } from '/data.js';
const PROFESSIONALS = data.professionals; //need it for movies function
const MOVIES = data.movies;

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  // Write your JavaScript code after this line
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");
  
  if (page === "movies"){
    MOVIES.forEach(movie => { //info per movie save into a div
    let divElement = document.createElement("div");
    let movieTitle = `<h2>${movie["title"]}</h2>`;
    let movieYear = `<p><b>Year:</b> ${movie["year"]}</p>`;
    let movieRuntime = `<p><b>Runtime:</b> ${movie["runtime"]} Minutes</p>`;
    let movieRelease = `<p><b>Release date:</b> ${movie["release-date"]}</p>`;

    let movieProfessionals = getProfessionals(movie);
    let movieWirters = `<p><b>Writers:</b> ${movieProfessionals.writers.join(", ")}</p>`;
    let movieActors = `<p><b>Actors:</b> ${movieProfessionals.actors.join(", ")}</p>`;
    let movieDirectors = `<p><b>Directors:</b> ${movieProfessionals.directors.join(", ")}</p>`;
    
    //to capitalize first letter
    let genres = [];
    for (let genre of movie["genres"]){
      genres.push(genre.charAt(0).toUpperCase() + genre.slice(1));
    }
    let movieGenres = `<p><b>Genres:</b> ${genres.join(", ")}</p>`;

    //check if description is storyline or description -.-
    let movieDescription = "";
      if (movie["storyline"] !== undefined){
        movieDescription = `<p><b>Description:</b> ${movie["storyline"]}</p>`;
      }
      else if (movie["description"] !== undefined){ //else doesn't work
        movieDescription = `<p><b>Description:</b> ${movie["description"]}</p>`;
      }

    divElement.insertAdjacentHTML("beforeend", movieTitle);
    divElement.insertAdjacentHTML("beforeend", movieDescription);
    divElement.insertAdjacentHTML("beforeend", movieYear);
    divElement.insertAdjacentHTML("beforeend", movieRuntime);
    divElement.insertAdjacentHTML("beforeend", movieGenres);
    divElement.insertAdjacentHTML("beforeend", movieRelease);
    divElement.insertAdjacentHTML("beforeend", movieWirters);
    divElement.insertAdjacentHTML("beforeend", movieActors);
    divElement.insertAdjacentHTML("beforeend", movieDirectors);
    rootElement.appendChild(divElement);
    })
  }
  else if (page === "actors"){
    let actorsArray = getAllProfessionals("Actor");
    actorsArray.forEach(actor =>{
      let divElement = document.createElement("div");
      //let headerActors = `<h2>Here are all actors!</h2>`;
      let nameOfActor = `<h3>${actor}</h3>`;

      //divElement.insertAdjacentHTML("beforeend", headerActors);
      divElement.insertAdjacentHTML("beforeend", nameOfActor);
      rootElement.appendChild(divElement);
      })
  }
  else if (page === "writers"){
    let writersArray = getAllProfessionals("Writer");
    writersArray.forEach(writer =>{
      let divElement = document.createElement("div");
      //let headerWriter = `<h2>Here are all writers!</h2>`;
      let nameOfWriter = `<h3>${writer}</h3>`;

      //divElement.insertAdjacentHTML("beforeend", headerWriter);
      divElement.insertAdjacentHTML("beforeend", nameOfWriter);
      rootElement.appendChild(divElement);
    })
  }
  else if (page === "directors"){
    let directorsArray = getAllProfessionals("Director");
    directorsArray.forEach(director =>{
      let divElement = document.createElement("div");
      //let headerDirectors = `<h2>Here are all directors!</h2>`;
      let nameOfDirector = `<h3>${director}</h3>`;

      //divElement.insertAdjacentHTML("beforeend", headerDirectors);
      divElement.insertAdjacentHTML("beforeend", nameOfDirector);
      rootElement.appendChild(divElement);
  })
  }
}

function getAllProfessionals(role){
  let actors = [];
  let writers = [];
  let directors = [];

  for (let professional of PROFESSIONALS){
    for (let roleOfArray of professional["roles"]){
      if (roleOfArray === "Actor"){
        actors.push(professional["name"]);
      }
      else if (roleOfArray === "Writer"){
        writers.push(professional["name"]);
      }
      else if (roleOfArray === "Director"){
        directors.push(professional["name"]);
      }
    }
  }

  if (role === "Actor"){
    return (actors);
  }
  if (role === "Writer"){
    return (writers);
  }
  if (role === "Director"){
    return (directors);
  }
}

function getProfessionals (specificMovie){
  let allprofessionals = PROFESSIONALS; //obj with names, ids and roles
  
  let professionalsObjTemp = {
    writers: [],
    actors: [],
    directors: []
  }

  //check if id is identical, if so, push into the temp obj array
  for (let elem of allprofessionals){
    for (let role of elem.roles){
      if (role === "Writer"){
        if (findId(elem.id, "writers", specificMovie)){
          professionalsObjTemp.writers.push(elem["name"]);
        }
      }
      else if (role === "Actor"){
        if (findId(elem.id, "actors", specificMovie)){
          professionalsObjTemp.actors.push(elem["name"]);
        }
      }
      else if (role === "Director"){
        if (findId(elem.id, "directors", specificMovie)){
          professionalsObjTemp.directors.push(elem["name"]);
        }
      }
    }
  }
  return professionalsObjTemp;
}

function findId(id, role, specificMovie){
  for (let prof of specificMovie[role]){
    if (prof === id){
      return true;
    }
  }
}

// Write your JavaScript code before this line
window.addEventListener("load", loadEvent);
