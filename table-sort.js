var tableHeaders = document.querySelectorAll('th');
var sortAsc = true;
var sortEnabled = true;

for (j = 0; j < tableHeaders.length; ++j) {
  tableHeaders.item(j).onclick = function() {

    var tableObj = findParentNode('TABLE',this);
    var index = [].indexOf.call(this.parentNode.children, this);
    var nodeList = tableObj.querySelectorAll('tr');
    var nodeArray = [].slice.call(nodeList);

    // Remove from selection up to and including clicked TR
    while (nodeArray[0] != findParentNode('TR',this)){
      nodeArray.splice(0,1);
    }
    nodeArray.splice(0,1);

    nodeArray.sort(function(a, b) {
      a = a.querySelectorAll('td').item(index);
      b = b.querySelectorAll('td').item(index);
      return sortAlphaNum(a.textContent,b.textContent);
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

var reParts = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)([^0-9]*)$/;
function sortAlphaNum(a,b) {
    function compare(a, b) {
        return a == b ? 0 : a > b ? 1 : -1;
    }
    var aParts = reParts.exec(a);
    var bParts = reParts.exec(b);
    if (aParts && bParts) {
        return compare(aParts[1], bParts[1]) ||
            compare(aParts[3], bParts[3]) ||
            compare(parseFloat(aParts[2]), parseFloat(bParts[2]));
    }
    return compare(a, b);
}
