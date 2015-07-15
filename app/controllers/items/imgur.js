export default Ember.Controller.extend({
  init: function() {
    var c = this;
    $.
      getJSON('http://api.reddit.com')
    .then(function(response) {
      var elements =  response
      .data
      .children.filter(function(f){
        return !!f.data.domain.match(/imgur.com$/);
      })
      .map(function(x) {
        return x.data;
      });
      c.set('model', elements);
    });
  }
})

