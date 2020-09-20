function listTags() {
  const fileURL = 'https://tuananhhedspibk.github.io/knowledges/data/tags.json';
  const rawFile = new XMLHttpRequest(fileURL);

  rawFile.open('GET', fileURL, false);

  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const tags = JSON.parse(rawFile.responseText).tags;
        tags.forEach(tag => {
          $('#main').append(`<a class="label" id="${tag.label}" href="${tag.url}" target="_blank">${tag.label}</a>`);
        });
      }
    }
  }
  rawFile.send(null);
}

listTags();
