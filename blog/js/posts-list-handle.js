var numberPosts = 0;
var lastDisplayElementIndex = 0;

function genPostsPreviewFromSource(fileURL) {
    $.getJSON(fileURL, function (data) {
        var postsList = [];
        var counter = 0;
        $.each(data, function (key, val){
            var representClassName = counter <= 4 ? 'display-element' : 'hide-element';
            lastDisplayElementIndex = counter <= 4 ? counter : lastDisplayElementIndex;
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
                `<hr id="hr_${counter}" class="${representClassName}">`
            );
            counter++;
        });
        numberPosts = counter;
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
    // Init variable value
    var upperBound = 0;

    if (lastDisplayElementIndex == numberPosts - 1) {
        return;
    }
    else if (lastDisplayElementIndex + 5 < numberPosts) {
        upperBound = lastDisplayElementIndex + 6;
    }
    else {
        upperBound = numberPosts;
    }

    for (var i = lastDisplayElementIndex + 1 ; i < upperBound; i++) {
        $(`#post_${i}`).removeClass('hide-element').addClass('display-element');
        $(`#hr_${i}`).removeClass('hide-element').addClass('display-element');
    }

    lastDisplayElementIndex = upperBound - 1;
}
