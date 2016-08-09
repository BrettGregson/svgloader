## Animated SVG Sequence

Animated SVG sequence for loaders. Draws and animates between multiple SVG files to create a sequence of loading image. Built on top of [vivus.js](https://github.com/maxwellito/vivus) and jQuery. 

![Example](blob:http://imgur.com/0d8c8369-e974-423a-ae84-cb3ebe70790b


**Demo:**
http://brettgregson.com/dev/svg/

**Usage:**

```html
<script src="jquery.min.js"></script>
<script src="vivus.min.js"></script>
<script src="sveegee.js"></script>
```

````html
<div id="loader" style="width:80px; height: 80px;"></div>
````

```javascript
// create an array of resources that we are going to use
var resources = [
	"resources/0.svg",
	"resources/1.svg",
	"resources/2.svg?i",
	"resources/3.svg",
	"resources/4.svg",
	"resources/5.svg",
	"resources/6.svg",			
	"resources/7.svg",
	"resources/8.svg",
	"resources/9.svg",
];

// configure the plugin
var params = {
	resources		: resources,
	speed			: 50,
	displayTime		: 500,
	fadeTime		: 250,
	shuffleArray	: true,
}

// assign to element
var sveegee = $("#loader").sveegee(params);
```

| Property        | Description | Default |
| ------------- |:-------------:|:-------------:|
| resources      | Array of SVG paths |[]|
| speed      | The speed of the animation       |50|
| displayTime | Time in MS that completed SVG is diplayed      |500|
| fadeTime      | Time in MS of fadeOut effect |250|
| shuffleArray      | Bool, should array be shuffled or not |false|

**SVG Properties:**

Properties such as stroke thickness, color and linejoin need to be configured per SVG on the SVG file itself, for example:
```html
<svg  stroke="black" stroke-width="5" stroke-linejoin="round"
```

**Methods:**

```javascript
sveegee.stopSVG(500);
```

Stops the SVG sequence and fades out in speficied milliseconds (Default is 500 if not provided)

