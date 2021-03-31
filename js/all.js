$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "150px 0px"
    });
    observer.observe();
    // 立即購買btn動態
    $('.offerbtn, .offerbtn_m').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        }, 900);
    });
    // 立即訂購btn動態
    $('.buybtn,a[href="#size"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        }, 900);
    });

    //偵測sns line btn 手機版還是電腦版，連結不同
    var vw = $(window).width();
    if (vw <= 768) {
        $(".line_link").attr("href", "https://bit.ly/2YszXqD");
    } else {
        $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    }

    //購物車下拉選單判斷預購
    // $('select[data-name="size-selector"], select[name="color-selector').change(function (e) {
    //     e.preventDefault();
    // });
    var size = document.querySelector('select[data-name="size-selector"]').value;
    var color = document.querySelector('select[name="color-selector"]').value;
    var $element = $('<span>', {text: '(預購)',style: 'color: red;'});
    if ((color == "天空藍" && size == "M") || (color == "櫻花粉" && size == "M") || (color == "櫻花粉" && size == "M/L") || (color == "海軍藍" && size == "M") || (color == "薰衣草紫" && size == "M") || (color == "寧靜灰" && size == "S") || (color == "異色黑" && size == "S") || (color == "異色黑" && size == "M/L")) {
        console.log("預購")
        $('select[data-name="size-selector"]').parent().after($element);
    } else {
        $('.form-group > span').empty();
    }
    // 天空藍：M
    // 櫻花粉：M、M / L
    // 海軍藍：M
    // 薰衣草紫：M
    // 寧靜灰: S
    // 異色黑: S、M / L
});