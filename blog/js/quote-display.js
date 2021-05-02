function setHTMLContentOfENQuote(data) {
  document.getElementById('content').innerText = data['content'];
  document.getElementById('mean').innerText = data['mean'];
  document.getElementById('example').innerText = data['example'];
}

function setHTMLContentOfJPQuote(data) {
  document.getElementById('content').innerText = data['content'];
}

function displayQuoteOf(quoteType) {
  let fileURL = '';
  switch (quoteType) {
    case 'EN': {
      fileURL = 'https://tuananhhedspibk.github.io/blog/data/quotes-en.json';
      break;
    }
    case 'JP': {
    }
    default: {
      fileURL = 'https://tuananhhedspibk.github.io/blog/data/quotes-jp.json';
      break;
    }
  }

  let rawFile = new XMLHttpRequest();
  rawFile.open('GET', fileURL, false);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        let data = JSON.parse(rawFile.responseText);

        let randomIndex = Math.floor(Math.random() * data['quotes'].length);

        switch (quoteType) {
          case 'EN': {
            setHTMLContentOfENQuote(data['quotes'][randomIndex]);
            break;
          }
          case 'JP': {
          }
          default: {
            setHTMLContentOfJPQuote(data['quotes'][randomIndex]);
            break;
          }
        }
      }
    }
  }
  rawFile.send(null);
}
