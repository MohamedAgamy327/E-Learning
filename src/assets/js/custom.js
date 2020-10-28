

//delete row
$(".close-tr").click(function () {
    $(this).closest("tr").remove();
});

//checked all
$(document).ready(function () {
    'use strict';

    //checked all add people
    $(".CheckAll").click(function () {
        $(this).parents(".item").find(".check").prop('checked', $(this).prop('checked'));
    });



    //checked all
    $(".CheckAll").click(function () {
        $(this).parents(".nav-item").find(".check").prop('checked', $(this).prop('checked'));
    });

    $(".check").click(function () {
        var IsSelected = $($(this).parents("ul.flex-column.nav")[0]).find(".check:checked");
        if (IsSelected.length > 0) {
            $($(this).parents("li.nav-item").find(".checkmark")[0]).addClass("CheckX");
        }
        else {
            $($(this).parents("li.nav-item").find(".checkmark")[0]).removeClass("CheckX");
        }
    });

    //plus-minuse - Counter
    $('#count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('#count').val(parseInt($('#count').val()) + 1);

        var count = $(this).parent("div.counter.counter-table").find(".count");
        count.val(parseInt($(count).val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        var count = $(this).parent("div.counter.counter-table").find(".count");
        if (parseInt($(count).val()) > 1) {
            $('#count').val(parseInt($('#count').val()) - 1);
            count.val(parseInt($(count).val()) - 1);
        }
    });


    //student-dailytask owl-carousel
    $(".owl-carousel").owlCarousel({
        rtl: true,
        stopOnHover: true,
        autoPlay: 3000,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        center: true,
        nav: true,
        dots: true,
        loop: true,
        responsive: {
            600: {
                items: 3
            }
        }
    });

});
//for verify mobile code
$(document).ready(function () {
    'use strict';

    // text captcha  reload image
    $('#captcha_reload').on('click', function (e) {
        e.preventDefault();
        var d = new Date();
        var src = $("img#captcha_image").attr("src");
        src = src.split(/[?#]/)[0];
        $("img#captcha_image").attr("src", src + '?' + d.getTime());
    });

    // Focus next input once reaching maxlength 
    $(".verify-input").bind("input", function () {
        var $this = $(this);
        setTimeout(function () {
            if ($this.val().length >= parseInt($this.attr("maxlength"), 10)) {
                $this.next("input").focus();
            }
        }, 0);
    });

    //dropdown-toggle close searchBox
    $('.xbardown').on('click', function () {
        $('.TopBarSearch').removeClass('barDown');
        $('.TopBarBtns').removeClass('barDown');
    });
    $('.dropdown-toggle').on('click', function () {
        $('.TopBarSearch').removeClass('barDown');
    });

    // button dots drop subMenu Top Bar Button
    $('.icoBtn').on('click', function () {
        $('.TopBarBtns').toggleClass('barDown');
        $('.TopBarSearch').removeClass('barDown');
    });

    // button search drop subMenu Top Bar searchBox
    $('.icoBtn2').on('click', function () {
        $('.TopBarSearch').toggleClass('barDown');
        $('.TopBarBtns').removeClass('barDown');
    });

    // validations
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
    //end validation

    // checkbox-choose-one
    $('.checkbox').click(function () {
        $('.checkbox').not(this).prop('checked', false);
    });



    // active-topics-div
    $(".div-contain").click(function () {
        $(".div-contain").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });

    // button dots drop subMenu topics Button


    $('.icoBtn3').on('click', function () {
        var $dots = $(this).parent().find('.sub-text-link-group');
        $(this).parent().find('.sub-text-link-group').toggleClass('barDown3');
        $('.sub-text-link-group').not($dots).removeClass('barDown3');
        //$('.sub-text-link-group').not(this).removeClass('barDown3');


    });


    // menu dots drop sub Top Bar Button
    /*$('.live-chat').on('click', function () {
       $('#LiveChatPop').toggleClass('livechatwin');
       if ($("#LiveChatPop").css('display') === 'none') {
           $("#LiveChatPop").css("display", "block");
       } 
       else {
           $("#LiveChatPop").css("display", "none");
       }
   });*/


}); // End (document ).ready(function()

//wizard-steps
$(document).ready(function () {
    'use strict';
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('active').addClass('btn-circle');
            $item.addClass('active');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='checkbox'],input[type='url']"),
            isValid = true;

        $(".answer").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".answer").addClass("has-error");
            }
        }

        if (isValid) {
            nextStepWizard.removeAttr('disabled').trigger('click');
        }
    });

    $('div.setup-panel div a.active').trigger('click');
});








