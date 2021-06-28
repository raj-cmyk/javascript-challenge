// from data.js
var tableData = data;
console.log(tableData);

// reference table body
var tbody = d3.select("tbody");


// sightings table
tableData.forEach(function(ufoSighting) {
    
    // write sighting to web console
    console.log(ufoSighting);

    // append row (array) to body
    var row = tbody.append("tr");

    // return array, output to web console
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // append cell value to row
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // filter button
var button = d3.select("#filter-btn");
button.on("click", function() {

    // group body content
    tbody.html("");

    // retrieve date input, output to web console
    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // filter data where date input = row key, output to web console
    var filteredData = tableData.filter(
      sighting => sighting.datetime === inputValue ||
      sighting.shape === inputValue ||
      sighting.city === inputValue ||
      sighting.state === inputValue ||
      sighting.country === inputValue
      );
    console.log(filteredData);

    // write data to web console
    filteredData.forEach(function(selections) {    
    console.log(selections);

    // append row (array) to body
    var row = tbody.append("tr");

    // return array, write to web console
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        // append cell value to row
        var cell = row.append("td");
        cell.text(value);
    });
});
});