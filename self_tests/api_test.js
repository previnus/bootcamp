fetch('https://www.freeforexapi.com/api/live?pairs=EURUSD')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output the parsed JSON data to the console
    // You can access individual fact data by iterating through the array:
/* ß */
  })
  .catch(error => console.error(error)); // Handle any errors that occur during the request