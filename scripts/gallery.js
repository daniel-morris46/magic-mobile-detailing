

function clickedImage() {
    console.log("htest");
    debugger;
    $('.lb-container').prepend('<img id="theImg" src="images/galleries/gallery/before/1-before.jpg" />');
    $('#theImg').css('width', '609px');
    $(".lb-container").twentytwenty();
}