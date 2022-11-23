  const fs = require('fs');

  const breedDetailsFromFile = function(breed, callback) {
    console.log("breedDetailsFromFile: Calling readFile...");
    fs.readFile(`./data/${breed}.txt`, `utf8`, (error, data) => {
      console.log("In readFile's callback, it has the data.");
      // returning from *inner* callback function, not breedDetails from file

      // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
      
      if (!error) callback(data);
      else callback();
    });
      // ISSUE: Attempting to return data out here will also not work.
      // Currently not returning anything from here
  };

  const printOutCatBreed = (breed) => {
    console.log('Return value ' + breed); 
  }

  const bombay = breedDetailsFromFile('Bombay', printOutCatBreed);

  module.exports = breedDetailsFromFile;