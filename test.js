var _this = this;
_this.normal.visible = window.normal;
_this.whatsup.visible = window.normal;

_this.smile.visible = window.smile;
_this.hithere.visible = window.smile;

_this.ouch.visible = window.surprise;
_this.surprise.visible = window.surprise;

// nose → whatsup
_this.nose.on('click', function () {
    _this.normal.visible = true;
    _this.whatsup.visible = true;

    _this.smile.visible = false;
    _this.hithere.visible = false;

    _this.surprise.visible = false;
    _this.ouch.visible = false;

    window.normal = true;
    window.smile = false;
    window.surprise = false;

});

// foundation → smile
_this.foundation.on('click', function () {

    _this.normal.visible = false;
    _this.whatsup.visible = false;

    _this.smile.visible = true;
    _this.hithere.visible = true;

    _this.surprise.visible = false;
    _this.ouch.visible = false;

    window.normal = false;
    window.smile = true;
    window.surprise = false;


});
// eyes → surprise
_this.eyes.on('click', function () {
    _this.normal.visible = false;
    _this.whatsup.visible = false;

    _this.smile.visible = false;
    _this.hithere.visible = false;

    _this.surprise.visible = true;
    _this.ouch.visible = true;

    window.normal = false;
    window.smile = false;
    window.surprise = true;

});





