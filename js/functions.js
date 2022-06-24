function calculateContent(images) {
    var content = '<div class="row">';
    images.forEach(function(img){
        content += '<div class="col-3 p-3"> <a href="#"> <img src="' + img.src + '" class="img-thumbnail" alt="' + img.alt + '"> </a> </div>';
    });

    content += '</div><div class="row">';
    // for(var i = 0; i < images.length; i++) { // for qe kontrollon images.length eshte ekuivalente me forEach
    for(var i = 0; i < 4; i++) {
        content += '<div class="col-3 p-3"> <a href="#"> <img src="' + images[i].src + '" class="img-thumbnail" alt="' + images[i].alt + '"> </a> </div>';
    }
    content += '</div>';
    return content;
}