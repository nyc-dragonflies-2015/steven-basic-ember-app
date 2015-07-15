export default Ember.Object.extend({
  previewImage: function() {
    var size = this.preview.images[0].resolutions[2],
      imgTag = "<img src='" + this.url + "' height='" + size.height + "' width='" + size.width + "'></image>";
    return imgTag.htmlSafe();
  }.property()
})


