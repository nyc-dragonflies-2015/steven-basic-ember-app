export default Ember.Object.extend({
  previewHeight: function() {
    return this.preview.images[0].resolutions[2].height;
  }.property(),

  previewWidth: function() {
    return this.preview.images[0].resolutions[2].width;
  }.property(),
})


