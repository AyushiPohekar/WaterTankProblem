function generateTable() {
  var input = document.getElementById("inputArray").value;
  var array = input.split(",");

  var maxNumber = Math.max.apply(null, array.map(Number)); // Maximum number from input array
  var maxRows = maxNumber + 1; // Number of rows based on the maximum number
  var maxColumns = array.length; // Length of array elements

  var table = document.getElementById("myTable");
  table.innerHTML = "";

  var row, cell;
  var count = 0;
  var s_wall = 0;

  var c_wall = 0;
  var p_wall = 0;

  var water = new Array(array.length).fill(0);

  for (var j = 0; j < maxColumns; j++) {
    if (array[j] != 0) {//  wall
      if (count === 0) {//first wall
        s_wall = j;
        count = count + 1;//like flag,count become one only once so only one wall is starting wall
        c_wall = j;
        //console.log("current wall", c_wall);
      } else {
        c_wall = j;//inner wall,now count=1
        //console.log("current wall", c_wall);

        for (var l = p_wall + 1; l < c_wall; l++) {
          water[l] = Math.min(array[c_wall], array[p_wall]);//calculation for array of water,minimum of both walls
        }
      }
    } else array[j] == 0;//water
    {
      if (count != 0) {//innerwater
        p_wall = c_wall;//previouswall becomes current
       // console.log("previous_wall", p_wall);
      } else {//first water
        p_wall = 0;//no change
      }
    }
  }

  for (var i = 0; i < maxRows; i++) {
    row = table.insertRow(i);

    for (var j = 0; j < maxColumns; j++) {
      cell = row.insertCell(j);

      if (i >= maxRows - array[j]) {
        cell.classList.add("yellow");
      }

      if (i >= maxRows - water[j]) {
        cell.classList.add("blue");
      }
    }
  }
}
