$(document).ready(function () {
    
    // 子選單 有時會怪怪的
    $('.select1 li').hover(function () { $(this).find('ol').slideToggle(350) })
    $('.select2 li').hover(function () { $(this).find('ol').slideToggle(300) })
    // .css('display', 'block')


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

    // 商品數量
    let minus = document.querySelectorAll(".minus"); /* 減少購買的數量 */
    let plus = document.querySelectorAll(".plus"); /* 增加購買的數量 */
    let count = document.querySelectorAll(".count"); /* 購買的數量 */

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", function (e) {
            // e.preventDefault();
            if(count[i].innerHTML >= 20){
            } else{
                count[i].innerHTML++;
            }
        });
    }

    // 減少數量
    for (let i = 0; i < plus.length; i++) {
        minus[i].addEventListener("click", function (e) {
            // e.preventDefault();

            if (count[i].innerHTML <= 1) {
            } else {
                count[i].innerHTML--;
            }
        });
    }


    // 加入購物車通知
    $('.add_cart').click(function (e) {
        let name = $(this).parents().siblings('.product_table').find('.product_name').text()

        let count = $(this).siblings('.count').text()
        // console.log(name);
        alert(`${name} ${count}份 成功加入購物車`)
    })
 

    

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