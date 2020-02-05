        $(document).ready(function ($) {
            // delegate calls to data-toggle="lightbox"
            $(document).on('click', '[data-toggle="lightbox"]:not([data-gallery="navigateTo"]):not([data-gallery="example-gallery-11"])', function (event) {
                event.preventDefault();
                return $(this).ekkoLightbox({
                    onShown: function () {
                        if (window.console) {
                            return console.log('Checking our the events huh?');
                        }
                    },
                    onNavigate: function (direction, itemIndex) {
                        if (window.console) {
                            return console.log('Navigating ' + direction + '. Current item: ' + itemIndex);
                        }
                    }
                });
            });
            /**
                            // disable wrapping
                            $(document).on('click', '[data-toggle="lightbox"][data-gallery="example-gallery-11"]', function(event) {
                                event.preventDefault();
                                return $(this).ekkoLightbox({
                                    wrapping: false
                                });
                            });
            */

            //Programmatically call
            $('#open-image').click(function (e) {
                e.preventDefault();
                $(this).ekkoLightbox();
            });
            $('#open-youtube').click(function (e) {
                e.preventDefault();
                $(this).ekkoLightbox();
            });

            // navigateTo
            $(document).on('click', '[data-toggle="lightbox"][data-gallery="navigateTo"]', function (event) {
                event.preventDefault();

                return $(this).ekkoLightbox({
                    onShown: function () {

                        this.modal().on('click', '.modal-footer a', function (e) {

                            e.preventDefault();
                            this.navigateTo(2);

                        }.bind(this));

                    }
                });
            });
        });
