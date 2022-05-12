const data = require('./listen_history.json');

//get list of all times in listen history
const timeList = data.map(x => x.time);
let timeConvert = [];
let dateOccurences;

//For loop iterating over the arrays of ISO dates
for(let i = 0; i <timeList.length; i++) {
  //taking the value at that index and converting that
  //taking iso string and converting it to readable date
  let newDate = new Date(timeList[i]);
  //Gets the month from newDate
  let fullDate = newDate.getMonth()
  // pushing it into timeConvert container
  timeConvert.push(fullDate);
  
}


const freq = () => {
  //initiate map object to hold our values
  let myMap = new Map();
  //loop to iterate over map values
  for( let i = 0; i < timeConvert.length; i++ ) {
    //check if value is a repeat occurence
    //if repeated add one to previous value
    if (myMap[timeConvert[i]]) myMap[timeConvert[i]]++;
    //otherwise set initial value to 1
    else myMap[timeConvert[i]] = 1; 
  }
  //set occurence map
  dateOccurences = myMap;
}
//call function to populate occurence map
freq();

console.log(dateOccurences)

// By looking at the occurences that happens in each much, you can see how many songs was listened to in that month. 
