var LazyLoad = function(opts) {
  var opts = opts || {};
  this.options = {
    parent: opts.parent || '.lazyload',
    childs: opts.childs || 'img',
    attr: opts.attr || 'data-src',
    offset: opts.offset || 200
  }
  this.parent = document.querySelector(this.options.parent);
  this.childs = this.parent.querySelectorAll(this.options.childs);
}

LazyLoad.prototype.init = function() {
  this.checkOffset();
  this.bindScroll();
}
LazyLoad.prototype.checkOffset = function() {  
  var viewportHeight = window.innerHeight;
  var windowOffset = (window.scrollY > 0) ? window.scrollY : 0;
  var childs = this.childs;
  var offsetBounce = viewportHeight;
  var childsLen = this.childs.length;
  
    if(this.parent.offsetTop - offsetBounce <= windowOffset) {
      for(var i = 0; i <=  childsLen - 1, cur = childs[i]; i++) {
        // check if the current element needs to be displayed.
        if(cur.offsetTop - offsetBounce <= windowOffset) {
          if(cur.dataset.src !== '') {
            cur.src = cur.dataset.src;
            cur.dataset.src = '';
          }
        }
      }
    }
}
LazyLoad.prototype.bindScroll = function() {
  window.addEventListener('scroll', function() {
    this.checkOffset();
  }.bind(this))
}