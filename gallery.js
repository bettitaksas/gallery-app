$(document).ready(function(){
    $('.fa-circle-right').on('click', function(){
        var currentImg = $('.current');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('current').css('z-index', -10);
            nextImg.addClass('current').css('z-index', 10);
        }
    })

    $('.fa-circle-left').on('click', function(){
        var currentImg = $('.current');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('current').css('z-index', -10);
            prevImg.addClass('current').css('z-index', 10);
        }
    })

});