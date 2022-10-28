$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots: true,
});

$('.slider-servis').slick({
        arrows:false,
        dots: true,
});
    


    
        /*Открыть модальное окно*/
         $('.js-open-modal').click(function(){
            $('.modal').css({'visibility': 'visible', 'opacity': 1});
        });
        /*Закрыть модальное окно*/
        $('.js-modal-close').click(function(){
            $('.modal').css({'visibility': 'hidden', 'opacity': 0});
        });
    });  