
var tableHeaders = document.querySelectorAll('th');
var sortAsc = true;
var sortEnabled = true;

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

      // TODO: Fix this to remove titles AND headers, right now it removes first row which is not... correct, maybe a fix is to iremove while first node has a nested <th> tag
      nodeArray.splice(0,1);

      nodeArray.sort(function(a, b) {
        a = a.querySelectorAll('td').item(index);
        b = b.querySelectorAll('td').item(index);
        return a.innerHTML == b.innerHTML
          ? 0
          : (a.innerHTML > b.innerHTML ? 1 : -1);
      });

      tableObj = findParentNode('TABLE',this);

      if (sortEnabled) {
        if (sortAsc) {
          for (i = 0; i < nodeArray.length; ++i) {
            tableObj.appendChild(nodeArray[i]);
          }
        }
        else {
          for (i = nodeArray.length -1; i > -1; --i) {
            tableObj.appendChild(nodeArray[i]);
          }
        }
        sortAsc = !sortAsc;
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

