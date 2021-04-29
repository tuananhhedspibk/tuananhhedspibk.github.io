var rawFile = new XMLHttpRequest();
rawFile.open('GET', 'https://tuananhhedspibk.github.io/blog/data/quotes.json', false);
rawFile.onreadystatechange = function () {
  if(rawFile.readyState === 4) {
    if (rawFile.status === 200 || rawFile.status == 0) {
      var data = JSON.parse(rawFile.responseText);

      var randomIndex = Math.floor(Math.random() * data['quotes'].length);

      document.getElementById('quote-content').innerText = data['quotes'][randomIndex]['content'];
    }
  }
}
rawFile.send(null);
