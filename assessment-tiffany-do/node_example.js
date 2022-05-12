const data = require('./listen_history.json');

//get list of all titles in listen history
const titleList = data.map(x => x.title);
//initiate variable for occurence map
let titleOccurences;

const freq = () => {
  //initiate map object to hold our values
  let myMap = new Map();
  //loop to iterate over map values
  for( let i = 0; i < titleList.length; i++ ) {
    //check if value is a repeat occurence
    //if repeated add one to previous value
    if (myMap[titleList[i]]) myMap[titleList[i]]++;
    //otherwise set initial value to 1
    else myMap[titleList[i]] = 1; 
  }
  //set occurence map
  titleOccurences = myMap;
}
//call function to populate occurence map
freq();


// Pull out the values in the key value pairs in the hash map
let values = (Object.values(titleOccurences));

// Sort those values from descending order (highest to lowest)
let sortDesc = values.sort(function(a,b){ 
  return b - a; 
});

// Using slice, it will get the top 10 values
const topTenValues = sortDesc.slice(0,10)
  //Output: [20, 19, 18, 17, 16, 5, 15, 15, 14, 13]


// Find the key using the values. 
const findKey = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}
console.log(findKey(titleOccurences, 20))
// Output: Watched Motion Sickness

console.log(findKey(titleOccurences, 19))
// Output: Watched Paprika

console.log(findKey(titleOccurences, 18))
// Output: Watched Be Sweet

console.log(findKey(titleOccurences, 17))
// Output: Watched Kyoto

console.log(findKey(titleOccurences, 16))
// Output: Watched Faith Healer

console.log(findKey(titleOccurences, 15))
// // Output: Watched Hardline


// Watched Ringside, Watched BUZZCUT other two with 15 occurences

console.log(findKey(titleOccurences, 14))
// Output: Watched This Life

console.log(findKey(titleOccurences, 13))
// // Output: Watched Valentine


//TOP 10 MOVIES:
// Watched Motion Sickness
// Watched Paprika
// Watched Be Sweet
// Watched Kyoto
// Watched Faith Healer
// Watched Hardline
// Watched Ringside
// Watched BUZZCUT
// Watched This Life
// Watched Valentine

