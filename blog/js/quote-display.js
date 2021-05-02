function setHTMLContentOfENQuote(data) {
  document.getElementById('content').innerHTML = data['content'];
  document.getElementById('mean').innerHTML = data['mean'];
  document.getElementById('example').innerHTML = data['example'];
}

function setHTMLContentOfJPQuote(data) {
  document.getElementById('quote-content').innerHTML = data['content'];
}

function setHTMLContentOfProverb(data) {
  document.getElementById('content').innerHTML = data['content'];
  document.getElementById('mean').innerHTML = data['mean'];
  document.getElementById('proverb-link').innerHTML = `<a href="${data['link']}">Link</a>`;
}

function displayQuoteOf(quoteType) {
  let fileURL = '';

  switch (quoteType) {
    case 'PROVERB': {
      fileURL = 'https://tuananhhedspibk.github.io/blog/data/proverbs.json';
      break;
    }
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

        let randomIndex = 0;

        switch (quoteType) {
          case 'PROVERB': {
            randomIndex = Math.floor(Math.random() * data['proverbs'].length);
            setHTMLContentOfProverb(data['proverbs'][randomIndex]);
            break;
          }
          case 'EN': {
            randomIndex = Math.floor(Math.random() * data['quotes'].length);
            setHTMLContentOfENQuote(data['quotes'][randomIndex]);
            break;
          }
          case 'JP': {
          }
          default: {
            randomIndex = Math.floor(Math.random() * data['quotes'].length);
            setHTMLContentOfJPQuote(data['quotes'][randomIndex]);
            break;
          }
        }
      }
    }
  }
  rawFile.send(null);
}
