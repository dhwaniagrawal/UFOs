// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    /*let city    = d3.select("#city");
    let state   = d3.select("#state");
    let country = d3.select("#country");
    let shape   = d3.select("#shape");*/
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    /*let city_val    = city.property("value");
    let state_val   = state.property("value");
    let country_val = country.property("value");
    let shape_val   = shape.property("value");*/
    let element_val = changedElement.property('value');

    // 4c. Save the id of the filter that was changed as a variable.
    /*let city_id    = city.attr('id');
    let state_id   = state.attr('id');
    let country_id = country.attr('id');
    let shape_id   = shape.attr('id');*/
    let element_id = changedElement.attr('id');
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    /*if (city_val) {
        filters[city_id] = city_val;
    }
    else {
        delete filters[city_id];
    };

    if (state_val) {
        filters[state_id] = state_val;
    }
    else {
        delete filters[state_id];
    };

    if (country_val) {
        filters[country_id] = country_val;
    }
    else {
        delete filters[country_id];
    };

    if (shape_val) {
        filters[shape_id] = shape_val;
    }
    else {
        delete filters[shape_id];
    };*/
    if (element_val) {
        filters[element_id] = element_val;
    }
    else {
        delete filters[element_id];
    };

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  };
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.keys(filters).forEach((val) => {
        filteredData = filteredData.filter(row => row[val] === filters[val])
    });

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);

  };
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
