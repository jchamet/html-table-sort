
document.querySelector('th').onclick = function() {
    counter = 0;
    myTable = this.parentElement;
    while (myTable.tagName != "TABLE" || counter > 10) {
      myTable = myTable.parentElement;
      counter += 1;
    }
    if (counter > 10) {
      console.log("Failed to find nesting table");
    }
    else {
      var rows = myTable.querySelectorAll('tr')

      debugger
var array = $.map(myObj, function(value, index) {
    return [value];
});

/*
      var rows = myTable.find('tr:gt(0)').toArray().sort(comparer(this.rowIndex))
      this.asc = !this.asc
      if (!this.asc){rows = rows.reverse()}
      for (var i = 0; i < rows.length; i++){
        myTable.append(rows[i])
      }
*/
  }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function comparer(index) {
    return function(a, b) {
        var valA = getCellValue(a, index), valB = getCellValue(b, index)
        return isNumber(valA) && isNumber(valB) ? valA - valB : valA.localeCompare(valB)
    }
}

function getCellValue(row, index) { 
  return $(row).children('td').eq(index).html() 
}

