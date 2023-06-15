function generateTable() {
    var input = document.getElementById("inputArray").value;
    var array = input.split(",");

    var maxNumber = Math.max.apply(null, array.map(Number)); // Maximum number from input array
    var maxRows = maxNumber + 1; // Number of rows based on the maximum number
    var maxColumns = array.length; // Length of array elements

    var table = document.getElementById("myTable");
    table.innerHTML = "";

    var row, cell;
    for (var i = 0; i < maxRows; i++) {
        row = table.insertRow(i);

        for (var j = 0; j < maxColumns; j++) {
            cell = row.insertCell(j);

           
        }
    }
}

