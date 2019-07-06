function highlightCode() {
    var pres = document.querySelectorAll("pre>code");
    for (var i = 0; i < pres.length; i++) {
        hljs.highlightBlock(pres[i]);
    }
}

function showMarkdownFromFileAt(fileURL) {
    var rawFile = new XMLHttpRequest();
    rawFile.open('GET', fileURL, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var converter = new showdown.Converter();
                document.getElementById('content').innerHTML = converter.makeHtml(allText);
                highlightCode();
            }
        }
    }
    rawFile.send(null);
}
