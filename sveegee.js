$(function(){
	
	$.sveegee = function(element, options) {  
		var _self = this;
		var vivus;
		var stopLoader = false;
		_self.currentElement = 0;
		_self.$element = $(element);
		
		// load defaults
		options = $.extend({},$.sveegee.defaultOptions, options);
		
		// animates an svg in
		_self.svgIn = function(svg, speed){
			if ( !stopLoader ){
				var id = _self.$element .attr("id");
				vivus = new Vivus(id, {duration: speed, file: svg}, _self.done);
			}
		}
	
		// an svg is finished drawing, load the next
		_self.done = function(){
			_self.$element.delay(options.displayTime).fadeOut(options.fadeTime, function(){
				$(this).html("").show();
				if ( _self.currentElement == options.resources.length - 1 ){
					_self.currentElement = 0;
				} else {
					_self.currentElement++;
				}
				_self.svgIn(options.resources[_self.currentElement], options.speed );
			});
		}
		
		// shuffles the resources array
		_self.shuffle = function(a){
			var j, x, i;
			for (i = a.length; i; i--) {
				j = Math.floor(Math.random() * i);
				x = a[i - 1];
				a[i - 1] = a[j];
				a[j] = x;
			}
		}
		
		// stops the loader from running
		_self.stopSVG = function(hideSpeed){
			if ( hideSpeed == "" ){
				hideSpeed == 500	;
			}

			vivus.stop();
			stopLoader = true;
			_self.$element.fadeOut(hideSpeed);
		}
		
		// shuffle the array if needed
		if ( options.shuffleArray ){
			_self.shuffle(options.resources);
		}
		_self.svgIn(options.resources[_self.currentElement], options.speed );
	};
	
	// default options
	$.sveegee.defaultOptions = {
        resources		: [],
		speed			: 50,
		displayTime		: 500,
		fadeTime		: 250,
		shuffleArray	: false,
    };
	
	$.fn.sveegee = function(options) {
		return new $.sveegee(this, options)
    };
});
