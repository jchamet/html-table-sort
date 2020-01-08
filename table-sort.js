const tableHeaders = Array.from(document.querySelectorAll('TABLE'), table => {
  let THs = table.querySelectorAll("TH");
  if (THs.length) return [...THs]
  let TRs = table.querySelectorAll("TR");
  if (TRs.length > 5) {
    return [...TRs[0].querySelectorAll("TD")]
  }
}).filter(Boolean).flat(Infinity);
var sortAsc = Array(tableHeaders.length).fill(1);
for (j = 0; j < tableHeaders.length; ++j) {
  tableHeaders[j].onclick = function() {

    var tableObj = findParentNode('TABLE',this);
    var index = [].indexOf.call(this.parentNode.children, this);
    var global_index = [].indexOf.call(tableHeaders, this);
    var nodeList = tableObj.querySelectorAll('tr');
    var nodeArray = [].slice.call(nodeList);

    // Remove from selection up to and including clicked TR
    while (nodeArray[0] != findParentNode('TR',this)){
      nodeArray.splice(0,1);
    }
    nodeArray.splice(0,1);

    stableSort(nodeArray,function(a, b) {
      a = a.querySelectorAll('td').item(index);
      b = b.querySelectorAll('td').item(index);
      return sortAsc[global_index]*sortAlphaNum(a.innerText,b.innerText);
    });

    sortAsc[global_index] *= -1;

    chrome.storage.local.get('sortEnabled', function (result) {
      if (result.sortEnabled) {
        for (i = 0; i < nodeArray.length; ++i) {
          tableObj.appendChild(nodeArray[i]);
        }
      }
    });
  }
}

function stableSort(arr, compare) {
    var original = arr.slice(0);

    arr.sort(function(a, b){
        var result = compare(a, b);
        return result === 0 ? original.indexOf(a) - original.indexOf(b) : result;
    });

    return arr;
}

function findParentNode(parentName, childObj) {
  var testObj = childObj.parentNode;
  while(testObj.tagName != parentName) {
    testObj = testObj.parentNode;
  }
  return testObj;
}

var reA = /[^a-zA-Z]/g;
var reN = /[^-.0-9]/g;
function sortAlphaNum(a,b) {
    var aA = a.replace(reA, "");
    var bA = b.replace(reA, "");
    if(aA === bA) {
        var aN = parseFloat(a.replace(reN, ""));
        var bN = parseFloat(b.replace(reN, ""));
        if (isNaN(aN)){
          aN = 0;
        }
        if (isNaN(bN)){
          bN = 0;
        }
        return aN === bN ? 0 : aN > bN ? 1 : -1;
    } else {
        return aA > bA ? 1 : -1;
    }
}
