enyo.kind({
  name: "enyo.article.camera",
  kind: enyo.Control,
  nodeTag: "div",
  tag: "div",
  style: "",
  pictureSource: null,
  destinationType: null,
  components: [
    { nodeTag: "div", tag: "div", content: "PhoneGap Camera API" },
    { nodeTag: "div", tag: "div", name: "message", content: "Error message area..." },
    { nodeTag: "button", tag: "button", content: "Capture Photo", onclick: "capturePhoto" },
    { nodeTag: "div", tag: "div", components: [
        { nodeTag: "div", tag: "div", content: "", name: "smallImage", style: "width:60px;height:60px;" },
      ]
    }
  ],
  create: function () {
    this.inherited(arguments);
  },
  setMediaPath: function () {
     this.$.pictureSource=navigator.camera.PictureSourceType;
     this.$.destinationType=navigator.camera.DestinationType;
  },
  capturePhoto: function () {
	    navigator.camera.getPicture(enyo.hitch(this, "onPhotoDataSuccess"), enyo.hitch(this, "onFail"), { quality: 50 });
  },
  onPhotoDataSuccess: function (imageData) {
    this.$.smallImage.setContent("data:image/jpeg;base64," + imageData);
  },
  onFail: function (message) {
    this.$.message.setContent("Failed because: " + message);
  }
});