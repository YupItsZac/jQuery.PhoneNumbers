jQuery PhoneNumbers
===

The jQuery.PhoneNumbers plugin automatically detects phone numbers on the page and makes them clickable for dialing. This functionality is primarily useful for mobile, but jQuery.PhoneNumbers also supports any platform. Fully customizable, easy to use and setup, very lightweight.  

This plugin is distributed as is, and does not include any official support. However, if you come across an issue or need any assistance deploying exLink, just let me know! I'd be happy to help.

Also, if you'd like to contribute to the plugin, that's cool too. Just fork and start creating!

**Current Version:** 1.0.1

**Release Date:** April 28, 2015


Usage
===

PhoneNumbers is incredibly light weight, and very easy to setup. This plugin will function without anything beyond jQuery.



1). Include the required Javascript.

```javascript

<script type="text/javascript" src="/PhoneNumbers/jquery.PhoneNumbers.min.js"></script>


```

To download using npm, just run this command from your project directory:

```javascript

sudo npm install phonenumbers

```

2). After the required files have been included in your document, usage is incredibly easy! For the default case, just initiate the jQuery.PhoneNumbers plugin. This uses all of the default options. 

```javascript

$.fn.PhoneNumbers();

```

If you'd like to customize the plugin (which most people do), then you'll need to specify the options you want to change. Here is an initialization with ALL possible options. 

```javascript

$.fn.PhoneNumbers({
 	pattern: /((\d{1} ((\(\d{3}\)|\d{3})| (\(\d{3}\))) |(\(\d{3}\)) ?)|(\d{3}-))?\d{3}-\d{4}/g,
	protocol: 'tel://',
	linkColor: '#ffffff',
	linkDecoration: 'underline',
	target: 'body',
	mobileOnly: true
});

```

Options
===

######Functionality Options

**pattern** - The PhoneNumbers plugin uses a RegEx to detect all phone numbers listed on the page in many of the most popular US formats. You can use a custom RegEx with jQuery.PhoneNumbers by passing your RegEx through this option.

**protocol** - This determines which telephone protocol to use for the link. tel:, or tel://. This is a string, set to tel:// by default. Ex: protocol: 'tel://'

**target** - The object you want to scan for phone numbers. This is useful if you only want the numbers in a specific div to be clickable. This is a string value set to body by default. Ex: target: 'body'

**mobileOnly** - This option determines which platform you want th elinks to be clickable on. If set to false, the plugin will ignore the platform and make all numbers call links. If set to true, the plugin will only initialize if the user is on a mobile device. This is a boolean value set to true by default. Ex: mobileOnly: true


######Visual Options

**linkColor** - The color of the call link. This is a string (containing a hex value) left blank by default. Ex: linkColor: '#fff'

**linkDecoration** - Set the style of the link decoration. This is a string value set to underline by default. All CSS values accepted. Ex: linkDecoration: 'underline'

Connect & Support Stuffs
==


If you find this plugin useful (or don't), need some help with it or just want to connect with me, please do so!

- [Github](http://www.github.com/YupItsZac)
- [Twitter](http://www.twitter.com/YupItsZac)
- [LinkedIn](http://www.linkedin.com/in/yupitszac)
- [Facebook](http://www.fb.me/yupitszac)


