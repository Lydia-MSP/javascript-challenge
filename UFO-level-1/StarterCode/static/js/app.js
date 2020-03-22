// from data.js
var tableData = data;

// YOUR CODE HERE!

console.log(tableData);
// Get a reference to the table body
var tablebody = d3.select("tbody");
// UFO Sighting values for each column
tableData.forEach(function(ufoData) {
    console.log(ufoData);
    // Append one table row `tr` for each UFO Sighting object
    var row = tablebody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var button = d3.select("#filter-btn");
button.on("click", function() {
console.log("buttonclicked")
  // Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  console.log(filteredData);

  tablebody.html("");
  filteredData.forEach(function(ufoData) {
    console.log(ufoData);
    // Append one table row `tr` for each UFO Sighting object
    var row = tablebody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


});
