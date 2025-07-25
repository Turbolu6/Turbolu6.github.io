// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
  // This function will query the PostgreSQL database and return grade data
console.log("Fetching grade data...");
}
/ TODO: Populate the table with grade data
function populateGradebook(data) {
  // This function will take the fetched grade data and populate the table
  console.log("Populating gradebook with data:", data);
}
// TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE
function fetchGradeData() { 
  // this function will query the PostgreSQL database and return grade data
  console.log("fetching grade data...")
  // Create a new request for HTTP data
  let xhr = new XMLHttpRequest(); 
  // This is the address status we run this anonymous function 
  xhr.onreadystatechange = function(){
     let results; 
    // check if we're done
    if(xhr.readystate === xhr.DONE){
      // check if we're successful
      if(xhr.status !==200){
        console.error(`Could not get grades.
           status: ${xhr.status}`);
      }
      // And Then call the function to update the HTML with our data
      populateGradebook(JSON.parse(xhr.responseText));
    }
  }.bind(this);
  xhr.open("get", apiroute, true);
  xhr.send();
}
  
