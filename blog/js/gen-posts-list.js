function genPostsPreviewFromSource(fileURL) {
    $.getJSON(fileURL, function (data) {
        var postsList = [];
        $.each(data, function (key, val){
            postsList.push(
                '<div class="post-preview">' +
                    `<a href="https://tuananhhedspibk.github.io/blog/posts/${key}.html">` +
                        '<h2 class="post-title">' +
                            val['title'] +
                        '</h2>' +
                        '<h3 class="post-subtitle">' +
                            val['sub_title'] +
                        '</h3>' +
                    '</a>' +
                    '<p class="post-meta">' + val['posted_at'] + '</p>' +
                '</div>' +
                '<hr>'
            );
        });
        $('<div/>', {
            html: postsList.join('')
        }).appendTo('#posts-list');
    });
}

genPostsPreviewFromSource('https://tuananhhedspibk.github.io/blog/data/posts_preview.json');
