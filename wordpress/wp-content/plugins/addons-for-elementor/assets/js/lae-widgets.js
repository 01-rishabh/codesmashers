(function ($) {

    var WidgetLAETestimonialsSliderHandler = function ($scope, $) {

        var slider_elem = $scope.find('.lae-testimonials-slider').eq(0);

        var rtl = slider_elem.attr('dir') === 'rtl';

        var settings = slider_elem.data('settings');

        slider_elem.flexslider({
            selector: ".lae-slides > .lae-slide",
            animation: settings['slide_animation'],
            direction: settings['direction'],
            slideshowSpeed: settings['slideshow_speed'],
            animationSpeed: settings['animation_speed'],
            namespace: "lae-flex-",
            pauseOnAction: settings['pause_on_action'],
            pauseOnHover: settings['pause_on_hover'],
            controlNav: settings['control_nav'],
            directionNav: settings['direction_nav'],
            prevText: "Previous<span></span>",
            nextText: "Next<span></span>",
            smoothHeight: settings['smooth_height'],
            animationLoop: true,
            slideshow: true,
            rtl: rtl,
            easing: "swing",
            controlsContainer: "lae-testimonials-slider"
        });


    };

    var WidgetLAETabSliderHandler = function ($scope, $) {

        var slider_elem = $scope.find('.lae-tab-slider').eq(0);

        if (slider_elem.length > 0) {

            var rtl = slider_elem.attr('dir') === 'rtl';

            var settings = slider_elem.data('settings');

            var autoplay = settings['autoplay'];

            var adaptive_height = settings['adaptive_height'];

            var infinite = settings['infinite_looping'];

            var autoplay_speed = parseInt(settings['autoplay_speed']) || 3000;

            var animation_speed = parseInt(settings['animation_speed']) || 300;

            var pause_on_hover = settings['pause_on_hover'];

            var pause_on_focus = settings['pause_on_focus'];

            slider_elem.slick({
                arrows: false,
                dots: true,
                customPaging: function(slider, index) {
                    return $(slider.$slides[index]).find('.lae-tab-slide-nav');
                },
                infinite: infinite,
                autoplay: autoplay,
                autoplaySpeed: autoplay_speed,
                speed: animation_speed,
                fade: false,
                pauseOnHover: pause_on_hover,
                pauseOnFocus: pause_on_focus,
                adaptiveHeight: adaptive_height,
                slidesToShow: 1,
                slidesToScroll: 1,
                rtl: rtl,
            });
        }

    };

    var WidgetLAEStatsBarHandler = function ($scope, $) {

        $scope.find('.lae-stats-bar-content').each(function () {

            var dataperc = $(this).data('perc');

            $(this).animate({"width": dataperc + "%"}, dataperc * 20);

        });

    };

    var WidgetLAEStatsBarHandlerOnScroll = function ($scope, $) {

        $scope.livemeshWaypoint(function (direction) {

            WidgetLAEStatsBarHandler($(this.element), $);

            this.destroy(); // Done with handle on scroll

        }, {
            offset: (window.innerHeight || document.documentElement.clientHeight) - 150
        });

    };

    var WidgetLAEPiechartsHandler = function ($scope, $) {

        $scope.find('.lae-piechart .lae-percentage').each(function () {

            var track_color = $(this).data('track-color');
            var bar_color = $(this).data('bar-color');

            $(this).easyPieChart({
                animate: 2000,
                lineWidth: 10,
                barColor: bar_color,
                trackColor: track_color,
                scaleColor: false,
                lineCap: 'square',
                size: 220

            });

        });

    };

    var WidgetLAEPiechartsHandlerOnScroll = function ($scope, $) {

        $scope.livemeshWaypoint(function (direction) {

            WidgetLAEPiechartsHandler($(this.element), $);

            this.destroy(); // Done with handle on scroll

        }, {
            offset: (window.innerHeight || document.documentElement.clientHeight) - 100
        });

    };

    var WidgetLAEOdometersHandler = function ($scope, $) {

        $scope.find('.lae-odometer .lae-number').each(function () {

            var odometer = $(this);

            setTimeout(function () {
                var data_stop = odometer.attr('data-stop');
                $(odometer).text(data_stop);

            }, 100);

        });

    };

    var WidgetLAEOdometersHandlerOnScroll = function ($scope, $) {

        $scope.livemeshWaypoint(function (direction) {

            WidgetLAEOdometersHandler($(this.element), $);

            this.destroy(); // Done with handle on scroll

        }, {
            offset: (window.innerHeight || document.documentElement.clientHeight) - 100
        });
    };

    var WidgetLAECarouselHandler = function ($scope, $) {

        var carousel_elem = $scope.find('.lae-carousel, .lae-posts-carousel, .lae-posts-multislider').eq(0);

        if (carousel_elem.length > 0) {

            var rtl = carousel_elem.attr('dir') === 'rtl';

            var settings = carousel_elem.data('settings');

            var arrows = settings['arrows'];

            var dots = settings['dots'];

            var autoplay = settings['autoplay'];

            var adaptive_height = settings['adaptive_height'];

            var autoplay_speed = parseInt(settings['autoplay_speed']) || 3000;

            var animation_speed = parseInt(settings['animation_speed']) || 300;

            var fade = settings['fade'];

            var pause_on_hover = settings['pause_on_hover'];

            var display_columns = parseInt(settings['display_columns']) || 4;

            var scroll_columns = parseInt(settings['scroll_columns']) || 4;

            var tablet_width = parseInt(settings['tablet_width']) || 800;

            var tablet_display_columns = parseInt(settings['tablet_display_columns']) || 2;

            var tablet_scroll_columns = parseInt(settings['tablet_scroll_columns']) || 2;

            var mobile_width = parseInt(settings['mobile_width']) || 480;

            var mobile_display_columns = parseInt(settings['mobile_display_columns']) || 1;

            var mobile_scroll_columns = parseInt(settings['mobile_scroll_columns']) || 1;

            carousel_elem.slick({
                arrows: arrows,
                dots: dots,
                infinite: true,
                autoplay: autoplay,
                autoplaySpeed: autoplay_speed,
                speed: animation_speed,
                fade: false,
                pauseOnHover: pause_on_hover,
                adaptiveHeight: adaptive_height,
                slidesToShow: display_columns,
                slidesToScroll: scroll_columns,
                rtl: rtl,
                responsive: [
                    {
                        breakpoint: tablet_width,
                        settings: {
                            slidesToShow: tablet_display_columns,
                            slidesToScroll: tablet_scroll_columns
                        }
                    },
                    {
                        breakpoint: mobile_width,
                        settings: {
                            slidesToShow: mobile_display_columns,
                            slidesToScroll: mobile_scroll_columns
                        }
                    }
                ]
            });
        }

    };

    var WidgetLAEPortfolioHandler = function ($scope, $) {

        if ($().isotope === undefined) {
            return;
        }

        var portfolioElem = $scope.find('.lae-portfolio:not(.lae-custom-grid)');
        if (portfolioElem.length === 0) {
            return; // no items to filter or load and hence don't continue
        }

        var rtl = portfolioElem.attr('dir') === 'rtl';

        var isotopeOptions = portfolioElem.data('isotope-options');

        portfolioElem.isotope({
            // options
            itemSelector: isotopeOptions['itemSelector'],
            layoutMode: isotopeOptions['layoutMode'],
            originLeft: !rtl,
        });

        // layout Isotope after each image load
        portfolioElem.imagesLoaded().progress( function() {
            portfolioElem.isotope('layout');
        });

        /* -------------- Taxonomy Filter --------------- */

        $scope.find('.lae-taxonomy-filter .lae-filter-item a').on('click', function (e) {
            e.preventDefault();

            var selector = $(this).attr('data-value');
            portfolioElem.isotope({filter: selector});
            $(this).closest('.lae-taxonomy-filter').children().removeClass('lae-active');
            $(this).closest('.lae-filter-item').addClass('lae-active');
            return false;
        });

    };

    var WidgetLAEPostsSliderHandler = function ( $scope, $ ) {

        var slider_elem = $scope.find( '.lae-posts-slider' ).eq( 0 );

        if (slider_elem.length > 0) {

            var rtl = slider_elem.attr( 'dir' ) === 'rtl';

            var settings = slider_elem.data( 'settings' );

            var sliderId = settings['slider_id'];

            var arrows = settings['arrows'];

            var dots = settings['dots'];

            var autoplay = settings['autoplay'];

            var autoplay_speed = parseInt( settings['autoplay_speed'] ) || 3000;

            var animation_speed = parseInt( settings['animation_speed'] ) || 300;

            var fade = settings['fade'];

            var pause_on_hover = settings['pause_on_hover'];

            var centerMode = settings['center_mode'];

            var centerPadding = settings['center_padding'] + '%';

            var thumbnail_nav = settings['thumbnail_nav'];

            if (thumbnail_nav) {

                var thumb_slider = slider_elem.parent().find( '.lae-thumbnail-slider' );

                slider_elem.slick( {
                    arrows: arrows,
                    dots: false, // disable dots for thumbnail sliders
                    infinite: true,
                    autoplay: autoplay,
                    autoplaySpeed: autoplay_speed,
                    speed: animation_speed,
                    fade: false,
                    pauseOnHover: pause_on_hover,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rtl: rtl,
                    asNavFor: '#lae-thumbnail-slider-' + sliderId,
                    centerMode: centerMode,
                    centerPadding: centerPadding
                } );

                thumb_slider.slick( {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    asNavFor: '#lae-posts-slider-' + sliderId,
                    dots: false,
                    arrows: false,
                    focusOnSelect: true
                } );

            } else {

                slider_elem.slick( {
                    arrows: arrows,
                    dots: dots,
                    infinite: true,
                    autoplay: autoplay,
                    autoplaySpeed: autoplay_speed,
                    speed: animation_speed,
                    fade: false,
                    pauseOnHover: pause_on_hover,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rtl: rtl,
                    centerMode: centerMode,
                    centerPadding: centerPadding
                } );
            }


        }

    };

    var WidgetLAEPostsGridBoxSliderHandler = function ( $scope, $ ) {

        var slider_elem = $scope.find( '.lae-posts-gridbox-slider' ).eq( 0 );

        if (slider_elem.length > 0) {

            var rtl = slider_elem.attr( 'dir' ) === 'rtl';

            var settings = slider_elem.data( 'settings' );

            var arrows = settings['arrows'];

            var dots = settings['dots'];

            var autoplay = settings['autoplay'];

            var autoplay_speed = parseInt( settings['autoplay_speed'] ) || 3000;

            var animation_speed = parseInt( settings['animation_speed'] ) || 300;

            var fade = settings['fade'];

            var pause_on_hover = settings['pause_on_hover'];

            slider_elem.slick( {
                arrows: arrows,
                dots: dots,
                infinite: true,
                autoplay: autoplay,
                autoplaySpeed: autoplay_speed,
                speed: animation_speed,
                fade: false,
                pauseOnHover: pause_on_hover,
                slidesToShow: 1,
                slidesToScroll: 1,
                rtl: rtl,
            } );
        }
    };

    // Make sure you run this code under Elementor..
    $(window).on('elementor/frontend/init', function () {

        elementorFrontend.hooks.addAction('frontend/element_ready/lae-testimonials-slider.default', WidgetLAETestimonialsSliderHandler);

        if (elementorFrontend.isEditMode()) {

            elementorFrontend.hooks.addAction('frontend/element_ready/lae-stats-bars.default', WidgetLAEStatsBarHandler);

            elementorFrontend.hooks.addAction('frontend/element_ready/lae-piecharts.default', WidgetLAEPiechartsHandler);

            elementorFrontend.hooks.addAction('frontend/element_ready/lae-odometers.default', WidgetLAEOdometersHandler);
        }
        else {

            elementorFrontend.hooks.addAction('frontend/element_ready/lae-stats-bars.default', WidgetLAEStatsBarHandlerOnScroll);

            elementorFrontend.hooks.addAction('frontend/element_ready/lae-piecharts.default', WidgetLAEPiechartsHandlerOnScroll);

            elementorFrontend.hooks.addAction('frontend/element_ready/lae-odometers.default', WidgetLAEOdometersHandlerOnScroll);
        }

        elementorFrontend.hooks.addAction('frontend/element_ready/lae-tab-slider.default', WidgetLAETabSliderHandler);

        elementorFrontend.hooks.addAction('frontend/element_ready/lae-posts-carousel.default', WidgetLAECarouselHandler);

        elementorFrontend.hooks.addAction('frontend/element_ready/lae-portfolio.default', WidgetLAEPortfolioHandler);

        elementorFrontend.hooks.addAction('frontend/element_ready/lae-carousel.default', WidgetLAECarouselHandler);

        elementorFrontend.hooks.addAction( 'frontend/element_ready/lae-posts-slider.default', WidgetLAEPostsSliderHandler );

        elementorFrontend.hooks.addAction( 'frontend/element_ready/lae-posts-multislider.default', WidgetLAECarouselHandler );

        elementorFrontend.hooks.addAction( 'frontend/element_ready/lae-posts-gridbox-slider.default', WidgetLAEPostsGridBoxSliderHandler );


    });

})(jQuery);