jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },1000);
});

$(document).ready(function(){
    $('.skillbar').hover(
        function(e)
        {
            $(this).find('.skillbar-bar').stop().animate({
                width: 0
            },1000);
        },
        function(e)
        {
            $(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },1000);
        }
    );
})