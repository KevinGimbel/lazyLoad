# LazyLoad.js
### Super basic LazyLoading of Images*
###### *everything

LazyLoad.js is a small, single purpose JavaScript to lazy load assets like images once they're inside the viewport.

### Setup

Default Usage: 

```html
<script type="text/javascript" src="lazyload.min.js"></script>
<script type="text/javascript">
  var slowpoke = new Lazyload().init();
</script>

<div class="my-images lazyload">
  <img src="" data-src="path/to/img1.jpg">
  <img src="" data-src="path/to/img2.jpg">
  <img src="" data-src="path/to/img3.jpg">
  <img src="" data-src="path/to/img4.jpg">
  <img src="" data-src="path/to/img5.jpg">
  <img src="" data-src="path/to/img6.jpg">
  <img src="" data-src="path/to/img7.jpg">
  <img src="" data-src="path/to/img8.jpg">
  <img src="" data-src="path/to/img9.jpg">
  <img src="" data-src="path/to/img10.jpg">
</div>
```

LazyLoad will load the images in the example above by replacing the `src` Attribute when the image is inside the viewport. That's it. You can also pass in some options before calling the `init` function.

```js
// these are default values
var options = {
  parent: '.lazyload',
  childs: 'img',
  attr: 'data-src',
  offset: 200
}

var another_slowpoke = new LazyLoad(options).init();
```

Here's another example of lazy loading iFrames that are used to embed SoundCloud Tracks.

```js
var soundcloud_options = {
  childs: 'iframe',
  parent: '.playlist'
}
var soundcloud_slowpoke = new LazyLoad(options).init();
```
```html
<div class="playlist">
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="" data-src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/186211537&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="" data-src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/116098730&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
</div>
```

There's a working example [on CodePen](http://s.codepen.io/kevingimbel/full/45f9d5ec398ce9a477361f0c854bcd4b)