export default Ember.Controller.extend({
  init: function() {
    var c = this;
    $.
      getJSON('http://api.reddit.com')
    .then(function(response) {
      var elements =  response
      .data
      .children.map(function(f){
        return f.data;
      });
      c.set('model', elements);
    });
  }
})

