function genPostsPreviewFromSource(fileURL) {
    $.getJSON(fileURL, function (data) {
        console.log(data);
    });
}

genPostsPreviewFromSource('https://tuananhhedspibk.github.io/blog/data/posts_preview.json');
