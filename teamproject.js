import * as fs from 'node:fs';

import { type } from 'node:os';

const movieDB = {
	professionals: [],
@@ -11,50 +11,68 @@ const movieDB = {

//const fs = require('fs');

const dataRead = (err, data) => {
  if (err){
    console.error(err);
    return;
  } else {
		const moviesObject = JSON.parse(data);
		createMovieBDObject(moviesObject.movies); //start the programm
	}
try {
  const data = fs.readFileSync('data.json', 'utf8');
  //console.log(data);
    const moviesObject = JSON.parse(data);
    console.log(createMovieBDObject(moviesObject.movies));


} catch (err) {
  console.error(err);
}

fs.readFile('data.json', 'utf8', dataRead);


let createObject = function(name, role, id) {

	let object = {
		id: id,
		name: name,
		roles: [role]
	}

	return object;

};

function createMovieBDObject(movieArray) {


	movieArray.forEach(element => {

		element.writers.forEach(writerName => {
			//console.log(writerName)
			//console.log(typeof writerName)
			//createObject(writerName, "Writer") //geht hier nicht weil das Object erst spöter erstellt wird!!
			checkIfPersonExists(writerName, "Writer" )


		});

		element.actors.forEach(actorsName =>  {
			checkIfPersonExists(actorsName, "Actor" )

		});

		element.directors.forEach(directorsName => {
			checkIfPersonExists(directorsName, "Director" )
		});

	});
	//console.log(movieDB)
	return ;

};



let checkIfPersonExists = function(name, role) {
function checkIfPersonExists(name, role) {
	// wenn der name nicht existiert beim durchgehen, dann wird an der stelle hier das object erst erstellt!!!
	//wenn der name schon existiert, muss die rolle geprüft werden -> ist diese Doppelt oder nicht?
	// wenn nicht, muss die rolle dazugegeben werden an der stelle wo der Name ist.


	let array = [];


	if (!array.includes) {
    push
    erstellen object
  
			console.log(name)


			movieDB.professionals.push(createObject(name, role, movieDB.professionals.length + 1));
			array.push(name)

			console.log("HERE")
  } else {
			console.log("Hello")
			for (let key of movieDB.professionals) {
let checkIfPersonExists = function(name, role) {



function createMovieBDObject(movieArray) {


	movieArray.forEach(element => {

		element.writers.forEach(writerName => {

			//createObject(writerName, "Writer") //geht hier nicht weil das Object erst spöter erstellt wird!!
			checkIfPersonExists(writerName, "Writer" )

		});

		element.actors.forEach(actorsName =>  {
			checkIfPersonExists(actorsName, "Actor" )

		});
let createObject = function(name, role, id) {

		element.directors.forEach(directorsName => {
			checkIfPersonExists(directorsName, "Director" )
		});
	let object = {
		id: id,
		name: name,
		roles: [role]
	}

	});
	//console.log(movieDB)
	return ;
	return object;

};

