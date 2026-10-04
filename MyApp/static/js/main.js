(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // ProductList carousel
    $(".productList-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // ProductList categories carousel
    $(".productImg-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        items: 1,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Single Products carousel
    $(".single-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        dotsData: true,
        loop: true,
        items: 1,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // ProductList carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });


    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   

})(jQuery);






// baseForm design

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.btn-password-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const inputField = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (inputField.type === 'password') {
                inputField.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                inputField.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
});




                    // Our Products Filtering

function initProductFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    if (!filterButtons.length || !productItems.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // 1. Active Class Toggle
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('text-secondary');
            });
            this.classList.add('active');
            this.classList.remove('text-secondary');

            // 2. Filter Logic
            const filterValue = this.getAttribute('data-filter');

            productItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.4s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Page পুরোপুরি লোড হলে রান হবে
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductFilter);
} else {
    initProductFilter();
}








document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('#product-grid .product-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.remove('hide-item');
                } else {
                    item.classList.add('hide-item');
                }
            });
        });
    });
});




    $(document).ready(function(){
        // Carousel Initialize
        var $carousel = $(".offer-carousel");
        
        $carousel.owlCarousel({
            autoplay: true,
            autoplayTimeout: 3500, // ৩.৫ সেকেন্ড পরপর
            autoplayHoverPause: true,
            smartSpeed: 800,
            loop: true,
            margin: 24,
            dots: true,
            nav: false,
            responsiveRefreshRate: 100,
            responsive: {
                0: { items: 1 },    // মোবাইলে ১টি
                768: { items: 2 }   // বড় স্ক্রিনে ২টি (৩টি থাকলে স্লাইড করে ৩য়টি দেখাবে)
            }
        });

        // Force refresh to handle dynamic Django elements
        setTimeout(function(){
            $carousel.trigger('refresh.owl.carousel');
        }, 300);
    });





function shareProduct() {
    const shareData = {
        title: "{{ product.title|escapejs }}",
        text: "Check out this product: {{ product.title|escapejs }}",
        url: window.location.href
    };

    // মোবাইল বা ব্রাউজার নেটিভ শেয়ার সাপোর্ট করলে
    if (navigator.share) {
        navigator.share(shareData)
            .catch((err) => console.log('Share canceled', err));
    } else {
        // ডেস্কটপে লিঙ্ক অটো কপি হয়ে যাবে
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Product link copied to clipboard! You can share it anywhere.');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}



// Spinner hide logic
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();





$(document).ready(function(){
    $(".productImg-carousel").each(function(){
        var $carousel = $(this);
        var categoryId = $carousel.data("category");
        
        $carousel.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: false,
            smartSpeed: 400,
            responsive: {
                0: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        // Top Custom Nav Click Handler
        $("#nav-" + categoryId + " .custom-prev").off('click').on("click", function(e){
            e.preventDefault();
            $carousel.trigger('prev.owl.carousel');
        });

        $("#nav-" + categoryId + " .custom-next").off('click').on("click", function(e){
            e.preventDefault();
            $carousel.trigger('next.owl.carousel');
        });
    });
});






$(document).ready(function(){
    $(".promo-banner-carousel").owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
});