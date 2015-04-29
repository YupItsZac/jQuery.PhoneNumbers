// jQuery.PhoneNumbers 
// Author: YupItsZac
// Github: https://github.com/YupItsZac/jQuery.PhoneNumbers
// Web: http://www.yupitszac.com
// Demo: http://www.yupitszac.com/demo/jquery-phone-numbers
// Support: @YupItsZac - Twitter, or fb.me/yupitszac
// Version 1.0.2 April 29, 2015

(function( $ ) {

	$.fn.PhoneNumbers = function(options) {
		var defaults = {
			pattern: /((\d{1} ((\(\d{3}\)|\d{3})| (\(\d{3}\))) |(\(\d{3}\)) ?)|(\d{3}-))?\d{3}-\d{4}/g,
			protocol: 'tel://',
			linkColor: '#ffffff',
			linkDecoration: 'underline',
			target: [],
			mobileOnly: false
		}

		jQuery.options = $.extend({}, defaults, options);

		detectNumbers();
	},

	detectNumbers = function() {

		if(jQuery.options.mobileOnly) {
			if(window.matchMedia("only screen and (max-width: 760px)").matches) {
				jQuery.options.execute = true;

			} else {
				jQuery.options.execute = false;
			}
		} else {
			jQuery.options.execute = true;
		}

		if(jQuery.options.execute) {

			$.each(jQuery.options.target, function(index, value) {

				var text = $(value).html();

				text = text.replace(jQuery.options.pattern, "<a style='color: "+jQuery.options.linkColor+"; text-decoration: "+jQuery.options.linkDecoration+"' href='"+jQuery.options.protocol+"$&'>$&</a>");

				$(value).html(text);

			});
		}

	};

})( jQuery );