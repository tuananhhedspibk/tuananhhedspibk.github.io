function showData(fileURL) {
  const rawFile = new XMLHttpRequest(fileURL);

  rawFile.open('GET', fileURL, false);

  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const data = JSON.parse(rawFile.responseText).data;
        const treePlugin = new d3.mitchTree.boxedTree()
          .setData(data)
          .setElement(document.getElementById("visualisation"))
          .setIdAccessor(function(data) {
              return data.id;
          })
          .setChildrenAccessor(function(data) {
              return data.children;
          })
          .setBodyDisplayTextAccessor(function(data) {
              return data.description;
          })
          .setTitleDisplayTextAccessor(function(data) {
              return data.name;
          })
          .initialize();
      }
    }
  }
  rawFile.send(null);
}
