/*global $*/
jQuery(function($) {
    "use strict";
    /*==================================
        * Author        : SAMUEL EFFIONG
    ==================================== */

    var $grid = $('.grid'),
        $blogGrid = $('.blog-grid');
    $(window).on('load', function() {
        /*--------------------------------
            01. Preloader
        ----------------------------------*/
        setTimeout(function() {
            $('.startLoad').fadeOut('slow');
        }, 600);
    }); //--- window(load) ---//
    //-- filter items on button click --//
    $('.ul-filter li').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        $(this).addClass('active_filter').siblings().removeClass('active_filter');
        $grid.isotope({ filter: filterValue });
    });
    /*--------------------------------
        03. Functions 
    ----------------------------------*/
    var intro = '.intro',
        page_right = '.page-right',
        body = 'body',
        splitlayout = '#splitlayout',
        menu__a = '#menu a',
        home__type = '.home_type';

    function set_height(select_element) {
        if ($(select_element).length) {
            $(select_element).height($(window).height());
        }
    }
    set_height(".full-height");

    function mob_menu_toggle() {
        $(".mob-menu .navbar-toggle").toggleClass("collapsed");
        $('.mob-menu-overlay').fadeToggle();
        $('.side-right').toggleClass('right-zero');
    }
    /*--------------------------------
        04. Menu
    ----------------------------------*/
    $('.mob-menu .navbar-toggle,.mob-menu-overlay').on('click', function() {
        mob_menu_toggle();
    });
    if ($(".big_menu .home__menu").length) {
        var menuItemInnerHtml = '<a href="#home"><svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><path id="arrow-right-2" d="M37.333 10.667q1.125 0 1.896 0.771l18.667 18.667q0.771 0.771 0.771 1.896t-0.771 1.896l-18.667 18.667q-0.771 0.771-1.896 0.771-1.146 0-1.906-0.76t-0.76-1.906q0-1.125 0.771-1.896l14.125-14.104h-41.563q-1.104 0-1.885-0.781t-0.781-1.885 0.781-1.885 1.885-0.781h41.563l-14.125-14.104q-0.771-0.771-0.771-1.896 0-1.146 0.76-1.906t1.906-0.76z"></path></svg></a>';
        $(body).addClass("home___menu");
        $(".menu_list").prepend('<li><span class="home-item">' + menuItemInnerHtml + '</span></li>');
        $('.menu_list span:not(.home-item) a[href="#home"]').addClass("hide");
    }
    $(".big_menu .menu_list a:not(.home-item)").each(function() {
        $(this).attr("data-hover", $(this).text());
    })
    /*--------------------------------
        05. Window Resize
    ----------------------------------*/
    $(window).on("resize", function() {
        set_height(".full-height");
    });
    /*--------------------------------
        07. Type Plugin
    ----------------------------------*/
    var type_d = "#typed";
    if ($(type_d).length) {
        var typed = new Typed(type_d, {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            backSpeed: 0,
            backDelay: 1500,
            startDelay: 1000,
            fadeOut: false,
            loop: true
        });
    }
    /*--------------------------------
        12. Scroll
    ----------------------------------*/
    var $pt__page = $(".pt-perspective section.pt-page");
    if ($pt__page.length) {
        $pt__page.parents(".pt-perspective").addClass('overFlowHidden');
        $pt__page.each(function() {
            $(this).wrapInner('<div class="scroll___content"></div>');
        });
    }
    /*--------------------------------
        13. Form Validation
    ----------------------------------*/
    $('.contact form .submit').on('click', function() {
        $('.contact form .form-control').removeClass("errorForm");
        $('.msg_success,.msg_error').css("display", "");
        var error = false,
            name = $('.contact form input[type="text"]');
        if (name.val() === "" || name.val() === " ") {
            error = true;
            $(name).addClass("errorForm");
        }
        var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
            email = $('.contact form input[type="email"]');
        if (email.val() === "" || email.val() === " ") {
            $(email).addClass("errorForm");
            error = true;
        } else if (!email_compare.test(email.val())) {
            $(email).addClass("errorForm");
            error = true;
        }
        var msg = $('.contact form textarea');
        if (msg.val() === "" || msg.val() === " ") {
            error = true;
            $(msg).addClass("errorForm");
        }
        if (error === true) {
            return false;
        }
        var data_string = $('.contact form').serialize();
        $.ajax({
            type: "POST",
            url: $('.contact form').attr('action'),
            data: data_string,
            success: function(message) {
                if (message === 'SENDING') {
                    $('.msg_success').fadeIn('slow');
                } else {
                    $('.msg_error').fadeIn('slow');
                }
            }
        });
        return false;
    });
});
