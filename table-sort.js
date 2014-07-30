
var tableHeaders = document.querySelectorAll('th');
var sortAsc = true;
var sortEnabled = true;

for (j = 0; j < tableHeaders.length; ++j) {
  tableHeaders.item(j).onclick = function() {

    var tableObj = findParentNode('TABLE',this);
    var index = [].indexOf.call(this.parentNode.children, this);
    var nodeList = tableObj.querySelectorAll('tr');
    var nodeArray = [].slice.call(nodeList);

    // TODO: Fix this to remove titles AND headers, right now it removes first row which is not... correct, maybe a fix is to iremove while first node has a nested <th> tag
    nodeArray.splice(0,1);

    nodeArray.sort(function(a, b) {
      a = a.querySelectorAll('td').item(index);
      b = b.querySelectorAll('td').item(index);
      return a.innerHTML == b.innerHTML ? 0 : (a.innerHTML > b.innerHTML ? 1 : -1);
    });

    if (!sortAsc) {
      nodeArray.reverse();
    }
    sortAsc = !sortAsc;

    if (sortEnabled) {
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

