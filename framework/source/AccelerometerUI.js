enyo.kind({
  name: "enyo.article.accelerometer",
  kind: enyo.Control,
  nodeTag: "div",
  tag: "div",
  style: "",
  frequency: 2000,
  components: [
    { nodeTag: "div", tag: "div", content: "PhoneGap Accelerometer API" },
    { name: "accel_output_box",
      nodeTag: "div",
      tag: "div",
      caption: "Waiting for accelerometer...",
      content: "Waiting for accelerometer...",
      style: "border-style:solid;border-width:2px;padding:10px;margin:10px;min-height:50px;"
    }
  ],
  create: function() {
    this.inherited(arguments);
  },

  watchAcceleration: function () {
    var options = { frequency: this.$.frequency };
    navigator.accelerometer.watchAcceleration(enyo.hitch(this, "onSuccess"), enyo.hitch(this, "onError"), options);
  },

  onSuccess: function(acceleration) {
    this.$.accel_output_box.setContent('Acceleration X: ' + acceleration.x + '\n' +
                                       'Acceleration Y: ' + acceleration.y + '\n' +
                                       'Acceleration Z: ' + acceleration.z + '\n' +
                                       'Timestamp: '      + acceleration.timestamp + '\n');
  },
  onError: function () {
    this.$.accel_output_box.setContent('onError!');
  }
});