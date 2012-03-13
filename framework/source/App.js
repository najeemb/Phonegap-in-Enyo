enyo.kind({
    name: "enyo.article.main",
    nodeTag: "div",
    tag: "div",
    kind: enyo.Control,
    components: [
      { nodeTag: "div", tag: "div", kind: "enyo.article.accelerometer", name: "axlrmtr" },
      { nodeTag: "div", tag: "div", kind: "enyo.article.geolocation", name: "geoloc" },
      { nodeTag: "div", tag: "div", kind: "enyo.article.camera", name: "cam" }
    ],
    create: function () {
      this.inherited(arguments);
    },
    initAcceleration: function() {
      this.$.axlrmtr.watchAcceleration();
    },
    initCamera: function () {
      this.$.cam.setMediaPath();
    },
    initGeolocation: function () {
      this.$.geoloc.watchGeolocation();
    }
});