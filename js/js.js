$(document).ready(function () {
    



    // 漢堡
    $('.fa-solid').click(function () {
        $(this).siblings('.select1').fadeToggle(200)
        $(this).siblings('.select2').fadeToggle(200)

    })
    // $('body').not(this).click(function (e) {
    //     e.stopPropagation();
    //     console.log(1);
    //     $('.select1').css('display','none');
    // });

    // 收藏按鈕 謝謝李偉銘老師
    $('.bi').click(function (e) {
        const like = e.target;
        if (like.classList.contains("bi-heart")) {
            // console.log(this);
            this.classList.remove("bi-heart");
            this.classList.add("bi-heart-fill");
        } else {
            // console.log(this);
            this.classList.remove("bi-heart-fill");
            this.classList.add("bi-heart");
        }
    });

    

    

    // 捲軸偵測距離頂部超過 ＊ 才顯示按鈕
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            if ($(".back-top").hasClass("hide")) {
                $(".back-top").toggleClass("hide");
            }
        } else {
            $(".back-top").addClass("hide");
        }
    });

    // 點擊按鈕回頂部
    $(".back-top").on("click", function (event) {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            500 // 回頂部時間為 500 毫秒
        );
    });

  

});