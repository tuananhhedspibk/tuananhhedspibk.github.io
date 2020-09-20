function listTags() {
  const rawFile = new XMLHttpRequest("https://tuananhhedspibk.github.io/knowledges/data/tags.json");
  rawFile.open('GET', fileURL, false);

  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        console.log(rawFile);
      }
    }
  }
  rawFile.send(null);
}

listTags();
