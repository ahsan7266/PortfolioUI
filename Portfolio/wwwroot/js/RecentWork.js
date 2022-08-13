/*blog-filter-menu----------------------------*/
$(document).on('click', '.work-filter li', function () {
    $(this).addClass('work-filter-active').siblings().removeClass('work-filter-active')
});

/*Work-filter---------------------------------*/
$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.work-box').show('1000');
        }
        else {
            $('.work-box').not('.' + value).hide('1000');
            $('.work-box').filter('.' + value).show('1000');
        }
    });
});