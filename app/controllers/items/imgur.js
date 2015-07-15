import Item from '../../models/item';

export default Ember.Controller.extend({
  init: function() {
    var c = this, itemClass = Item;
    $.
      getJSON('http://api.reddit.com')
    .then(function(response) {
      var elements =  response
      .data
      .children.filter(function(f){
        return !!f.data.domain.match(/imgur.com$/);
      })
      .map(function(x) {
        return itemClass.create(x.data);
      });
      c.set('model', elements);
    });
  }
})

