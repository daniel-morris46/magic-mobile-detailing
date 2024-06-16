var page = 1;
var pageSize = 12;

var numPages = 1;

var photoCount = 1;
$('.photo-thumbnail').each(function(i, obj) {
    if (photoCount <= pageSize) {
        $(this).addClass('page' + numPages);
    }
    if (numPages > 1) {
        $(this).hide();
    }
    if (photoCount == pageSize) {
        numPages += 1;
        photoCount = 1;
    } else {
        photoCount += 1;
    }
});

$("#page-count-label").text("Page " + page + " / " + numPages);

$('.next').on('click', function() {
  if (page < numPages) {
    $("#wrap > .photo-thumbnail:visible").hide();
    $('.page' + ++page).show();
    $("#page-count-label").text("Page " + page + " / " + numPages);
  }
})
$('.prev').on('click', function() {
  if (page > 1) {
    $("#wrap > .photo-thumbnail:visible").hide();
    $('.page' + --page).show();
    $("#page-count-label").text("Page " + page + " / " + numPages);
  }
})