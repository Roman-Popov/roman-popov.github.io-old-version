
$(document).ready(function () {

    const MENU = $('#menu');
    const HAMBURGER = $('#hamburger-icon');
    const ARROW = $('.arrow');
    const ABOUT = $('#about');
    const EMAIL = $('#email-adr');

    function toggleMenu () {
        HAMBURGER.toggleClass('active-menu');
        if (window.innerWidth > 1199) {
            if (MENU.hasClass('sidebar')) {
                setTimeout(function () { MENU.toggle(); }, 750);
            } else {
                MENU.toggle();
            }
        } else {
            MENU.slideToggle();
        }
        setTimeout(function () { MENU.toggleClass('sidebar'); }, 1);
    }


    //
    // It slows FF too much :(
    //
    // function parallaxScroll() {
    //     let scrolled = $(window).scrollTop();
    //     $('.header').css({ 'background-position': 'center calc(50% + ' + (scrolled / 3) + 'px)'} );
    // }

    function printingWords() {
        let i = 0;
        const WORDS = "Hello, my name is Roman.>> Currently I'm a student of Udacity> Front-End Web Developer> Nanodegree Program.";
        let introText = '';
        while (i < WORDS.length) {
            if (WORDS[i] === '>') {
                introText += '<br>';
            } else {
                introText += '<i>' + WORDS[i] + '</i>';
            }
            i++;
        }
        $('.intro p').html(introText);
        i = 0;
        let interval = setInterval(function () {
            $('.intro p i:nth-child(' + i + ')').css({ 'opacity': '1' });
            i++;
            if (i > WORDS.length) clearInterval(interval);
        }, 50);
    }

    //
    // Another version of "printingWords" function. I think that first one is faster
    //
    // function printingWords() {
    //     $('.intro p:last-child').html('');
    //     let i = 0;
    //     const WORDS = "Hello, my name is Roman.>> Currently I'm a student of Udacity> Front-End Web Developer> Nanodegree Program.";
    //     let interval = setInterval(function () {
    //         if (WORDS[i] === '>') {
    //             $('.intro p:last-child').html($(('.intro p:last-child')).html() + '<br>');
    //         } else {
    //             $('.intro p:last-child').html($(('.intro p:last-child')).html() + WORDS[i]);
    //         }
    //         i++;
    //         if (i >= WORDS.length) clearInterval(interval);
    //     }, 50);
    // }


    function setSelection() {
        let target = EMAIL[0];
        let rng, sel;
        if (document.createRange) {
            rng = document.createRange();
            rng.selectNode(target)
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(rng);
        } else {
            let rng = document.body.createTextRange();
            rng.moveToElementText(target);
            rng.select();
        }
        document.execCommand('copy');
        sel.removeAllRanges();
        EMAIL.addClass('success');
        setTimeout(function () { EMAIL.removeClass('success'); }, 1500);
    }

    MENU.hide();
    MENU.css({ 'top': '0' });

    printingWords();

    ARROW.click(function (e) {
        $('html, body').stop().animate({ scrollTop: ABOUT.offset().top }, 1000);
        e.preventDefault();
    })

    // $(window).scroll(function () {
    //     parallaxScroll();
    // });

    $('#hamburger-icon, .nav-item').click(function () {
        toggleMenu();
    });

    EMAIL.click(function () {
        setSelection();
    });

})


