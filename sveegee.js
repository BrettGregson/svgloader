$(function(){
	
	$.sveegee = function(element, options) {  
		var _self = this;
		_self.currentElement = 0;
		_self.$element = $(element);
		
		// animates an avg in
		_self.svgIn = function(svg, speed){
			var id = _self.$element .attr("id");
			new Vivus(id, {duration: speed, file: svg}, _self.done);
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
		
		
		// shiffles the resources array
		_self.shuffle = function(a){
			var j, x, i;
			for (i = a.length; i; i--) {
				j = Math.floor(Math.random() * i);
				x = a[i - 1];
				a[i - 1] = a[j];
				a[j] = x;
			}
		}
		
		if ( options.shuffleArray ){
			_self.shuffle(options.resources);
		}
		_self.svgIn(options.resources[_self.currentElement], options.speed );
	};
	
	$.fn.sveegee = function(options) {
		return new $.sveegee(this, options)
    };
});