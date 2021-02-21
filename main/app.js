
function myfunction() {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
    .then((data) => data.json())
    .then((data) => {
        document.getElementById("theTextarea").innerHTML = data.quotes[0].text;
        document.getElementById("theTextarea2").innerHTML = data.quotes[0].author;
    });   
   }  
