console.log('***** Music Collection *****')

let collection = [];

console.log(collection, 'I have', collection.length, 'records in my collection');

function addToCollection (record) {
  collection.push(record);
  console.log(record,'added. I now have', collection.length, 'records in my collection');
  return true;
}

//Record List
let record0 = {
  title: 'Costello Music',
  artist: 'The Fratellis',
  yearPublished: 2007,
}

let record1 = {
  title: 'El Camino',
  artist: 'The Black Keys',
  yearPublished: 2011,
}

let record2 = {
  title: 'Brothers',
  artist: 'The Black Keys',
  yearPublished: 2010,
}

let record3 = {
  title: 'Heart It Races',
  artist: 'Dr Dog',
  yearPublished: 2007,
}

let record4 = {
  title: 'Classics',
  artist: 'Ratatat',
  yearPublished: 2006,
}

let record5 = {
  title: 'My First Car',
  artist: 'Vulfpeck',
  yearPublished: 2013,
}

let record6 = {
  title: 'Black Sands',
  artist: 'Bonobo',
  yearPublished: 2010,
}

addToCollection(record0);
addToCollection(record1);
addToCollection(record2);
addToCollection(record3);
addToCollection(record4);
addToCollection(record5);
addToCollection(record6);
