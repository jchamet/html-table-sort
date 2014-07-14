document.querySelector('th').onclick = function() {
    counter = 0;
    while (table.tagName != "TABLE" || counter > 10) {
      var table = this.parentElement;
    }
    if (counter > 10) {
      console.log("Failed to find nesting table");
    }
    else {
      debugger
      var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
      this.asc = !this.asc
      if (!this.asc){rows = rows.reverse()}
      for (var i = 0; i < rows.length; i++){table.append(rows[i])}
  }
};

function comparer(index) {
    return function(a, b) {
        var valA = getCellValue(a, index), valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
    }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).html() }


