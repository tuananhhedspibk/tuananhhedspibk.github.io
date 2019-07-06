var numberPosts = 0;

function genPostsPreviewFromSource(fileURL) {
    $.getJSON(fileURL, function (data) {
        var postsList = [];
        var counter = 1;
        $.each(data, function (key, val){
            var representClassName = counter <= 5 ? 'display-post' : 'hide-post';
            postsList.push(
                `<div class="post-preview ${representClassName}" id="post_${counter}">` +
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
            counter++;
        });
        numberPosts = counter - 1;
        postsList.push(
            '<div class="clearfix">' +
                '<a class="btn btn-primary float-right" onClick="displayOlderPosts()">Older Posts &rarr;</a>' +
            '</div>'
        );

        $('<div/>', {
            html: postsList.join('')
        }).appendTo('#posts-list');
    });
}

genPostsPreviewFromSource('https://tuananhhedspibk.github.io/blog/data/posts_preview.json');

function displayOlderPosts () {
    console.log(numberPosts);
}
