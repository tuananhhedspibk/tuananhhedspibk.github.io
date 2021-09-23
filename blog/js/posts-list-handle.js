var numberPosts = 0;
var lastDisplayElementIndex = 0;
var nonTechTagValues = [
  "Translation",
  "Experience",
  "Tip & Trick",
  "Summary",
  "Grammar",
  "Note",
];
var languagesTagValues = [
  "english",
  "japanese",
  "vietnamese",
  "vietnamese2",
];
var rootBaseURL = "https://tuananhhedspibk.github.io/blog";

function genPostsPreviewFromSource(fileURL) {
  $.getJSON(fileURL, function (data) {
    var postsList = [];
    var counter = 0;
    $.each(data, function (key, val) {
      console.log("val", val);

      var representClassName = counter <= 7 ? "" : " hide-element";
      var valuesOfTags = val["tags"];
      var tagElements = [];
      var statusIcon;
      valuesOfTags.forEach((tagValue) => {
        var classOfTag = "tech-tag";

        if (languagesTagValues.indexOf(tagValue) !== -1) {
          let flagCSSClass = "";

          if (tagValue == "japanese") {
            flagCSSClass = " border-flag";
          }

          tagElements.push(`
            <img class="flag${flagCSSClass}"
                src="${rootBaseURL + "/img/" + tagValue}.svg"></img>
          `);
          return;
        }
        if (nonTechTagValues.indexOf(tagValue) !== -1) {
          classOfTag = "non-tech-tag";
        }
        tagElements.push(`
          <a class="${classOfTag}">${tagValue}</a>
        `);
      });
      if (val["status"] == "in_progress") {
        statusIcon = "<i class='fas fa-hourglass-half'></i>";
      } else if (val["status"] == "done") {
        statusIcon = "<i class='fas fa-check-circle'></i>";
      }
      lastDisplayElementIndex =
        counter <= 4 ? counter : lastDisplayElementIndex;
      postsList.push(
        `<div class="post-preview${representClassName}" id="post_${counter}">` +
          `<a href="https://tuananhhedspibk.github.io/blog/posts/${key}.html">` +
          '<div class="post-title-wrapper">' +
          '<p class="post-title">' +
          val["title"] +
          "</p>" +
          statusIcon +
          '</div>' +
          '<h3 class="post-subtitle">' +
          val["description"] +
          "</h3>" +
          "</a>" +
          '<div class="tags">' +
          tagElements.join("") +
          "</div>" +
          '<p class="post-meta">' +
          val["posted_at"] +
          "</p>" +
          "</div>" +
          `<hr id="hr_${counter}" class="${representClassName}">`
      );
      counter++;
    });
    numberPosts = counter;
    postsList.push(
      '<div class="clearfix">' +
        '<a class="btn btn-primary float-right"' +
        ' id="older_posts_display_btn" onClick="displayOlderPosts()">Older Posts &rarr;</a>' +
        "</div>"
    );

    $("<div/>", {
      html: postsList.join(""),
    }).appendTo("#posts-list");
  });
}

genPostsPreviewFromSource(
  "https://tuananhhedspibk.github.io/blog/data/posts_preview.json"
);

function displayOlderPosts() {
  var upperBound = 0;

  if (lastDisplayElementIndex == numberPosts - 1) {
    return;
  } else if (lastDisplayElementIndex + 5 < numberPosts) {
    upperBound = lastDisplayElementIndex + 6;
  } else {
    $("#older_posts_display_btn").hide(500);
    upperBound = numberPosts;
  }

  for (var i = lastDisplayElementIndex + 1; i < upperBound; i++) {
    $(`#post_${i}`).removeClass("hide-element", 1000, "easeOutBounce");
    $(`#hr_${i}`).removeClass("hide-element", 1000, "easeOutBounce");
  }

  lastDisplayElementIndex = upperBound - 1;
}
