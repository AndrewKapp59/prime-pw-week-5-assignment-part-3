console.log('***** Music Collection *****')

let collection = [];

console.log(collection, 'I currenlty have', collection.length, 'records in my collection');

function addToCollection (title, artist, yearPublished) {
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(record)
  return console.log(record,'added. I now have', collection.length, 'records in my collection');
}

//Adding 7 records
addToCollection('Costello Music','The Fratellis', 2007);
addToCollection('El Camino', 'The Black Keys', 2011);
addToCollection('Brothers', 'The Black Keys', 2010);
addToCollection('Heart It Races', 'Dr Dog', 2007);
addToCollection('Classics', 'Ratatat', 2006);
addToCollection('My First Car', 'Vulfpeck', 2013);
addToCollection('Black Sands', 'Bonobo', 2010);

console.log(collection, 'I currently have', collection.length, 'records in my collection');

function showCollection(rcollection) {
  console.log('I currently have', rcollection.length, 'records in my collection');
  for (let i = 0; i < rcollection.length; i++) {
    console.log(rcollection[i].title, 'by',rcollection[i].artist, 'published in', rcollection[i].yearPublished);
  }
}

showCollection(collection);

function findByArtist(artist) {
  let artistArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist) {
      artistArray.push(collection[i]);
    }
  }
  console.log( artistArray.length, 'matches were found for', artist, artistArray);
}

findByArtist('The Black Keys');
findByArtist('Spoon')
