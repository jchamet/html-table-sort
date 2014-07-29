
var tableHeaders = document.querySelectorAll('th');
var sortAsc = true;

for (j = 0; j < tableHeaders.length; ++j) {
  tableHeaders.item(j).onclick = function() {
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
      var index = [].indexOf.call(this.parentNode.children, this);

      var rows = myTable.querySelectorAll('tr');
      var nodeList = rows, nodeArray = [].slice.call(nodeList);
      nodeArray.splice(0,1);

      nodeArray.sort(function(a, b) {
        a = a.querySelectorAll('td').item(index);
        b = b.querySelectorAll('td').item(index);
        return a.innerHTML == b.innerHTML && sortAsc
          ? 0
          : (a.innerHTML > b.innerHTML ? 1 : -1);
      });

      sortAsc = !sortAsc;

      tableObj = findParentNode('TABLE',this);

      for (i = 0; i < nodeArray.length; ++i) {
        tableObj.appendChild(nodeArray[i]);
      }
    }
  }
}

function findParentNode(parentName, childObj) {
  var testObj = childObj.parentNode;
  while(testObj.tagName != parentName) {
    testObj = testObj.parentNode;
  }
  return testObj;
}

