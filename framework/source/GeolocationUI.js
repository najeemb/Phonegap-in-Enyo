enyo.kind({
  name: "enyo.article.geolocation",
  kind: enyo.Control,
  nodeTag: "div",
  tag: "div",
  style: "",
  frequency: 2000,
  components: [
    { nodeTag: "div", tag: "div", content: "PhoneGap Geolocation API" },
    { name: "geoloc_output_box",
      nodeTag: "div",
      tag: "div",
      caption: "Waiting for geolocation...",
      content: "Waiting for geolocation...",
      style: "border-style:solid;border-width:2px;padding:10px;margin:10px;min-height:50px;"
    }
  ],
  create: function () {
    this.inherited(arguments);
  },
  watchGeolocation: function () {
    var options = {frequency:  this.$.frequency };
    navigator.geolocation.watchPosition(enyo.hitch(this, "onSuccess"), enyo.hitch(this, "onError"), options);
  },
  onSuccess: function (position) {
    this.$.geoloc_output_box.setContent('Latitude: ' + position.coords.latitude + '\n' +
                        'Longitude: ' + position.coords.longitude + '\n');
  },
  onError: function (error) {
    this.$.geoloc_output_box.setContent('code: ' + error.codev+ '\n' + 'message: ' + error.message + '\n');
  }
});