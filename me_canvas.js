(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"me_canvas_atlas_", frames: [[807,515,160,38],[969,468,35,47],[946,354,66,112],[807,468,157,45],[969,517,35,47],[0,0,678,882],[680,0,159,176],[680,178,158,174],[680,594,253,33],[841,0,159,176],[840,178,158,174],[680,354,264,103],[680,459,125,133]]}
];


// symbols:



(lib.LeftEyebrow = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LeftPupil = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Nose = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.RightEyebrow = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.RightPupil = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.facebackground = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.LeftBlink = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.LeftEyeball = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Neutral = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.RightBlink = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.RightEyeball = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Smile = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Surprised = function() {
	this.initialize(ss["me_canvas_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.surprise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.Surprised();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.surprise, new cjs.Rectangle(0,0,125,133), null);


(lib.smile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.Smile();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile, new cjs.Rectangle(0,0,264,103), null);


(lib.nosenose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.Nose();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nosenose, new cjs.Rectangle(0,0,66,112), null);


(lib.nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.facebackground();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(0,0,678,882), null);


(lib.normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.Neutral();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.normal, new cjs.Rectangle(0,0,253,33), null);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.RightPupil();
	this.instance.setTransform(62,63);

	this.instance_1 = new lib.RightEyeball();

	this.instance_2 = new lib.LeftPupil();
	this.instance_2.setTransform(305,63);

	this.instance_3 = new lib.LeftEyeball();
	this.instance_3.setTransform(243,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(0,0,401,174), null);


(lib.eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.LeftEyebrow();
	this.instance.setTransform(271,0);

	this.instance_1 = new lib.RightEyebrow();
	this.instance_1.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrows, new cjs.Rectangle(0,0,431,50), null);


(lib.closedeyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.RightBlink();

	this.instance_1 = new lib.LeftBlink();
	this.instance_1.setTransform(243,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.closedeyes, new cjs.Rectangle(0,0,402,176), null);


(lib.foundation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.nose();
	this.instance.setTransform(339,441,1,1,0,0,0,339,441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foundation, new cjs.Rectangle(0,0,678,882), null);


(lib.me = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72));

	// eyebrows
	this.eyebrows = new lib.eyebrows();
	this.eyebrows.name = "eyebrows";
	this.eyebrows.setTransform(334.5,386,1,1,0,0,0,215.5,25);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(72));

	// surprise
	this.surprise = new lib.surprise();
	this.surprise.name = "surprise";
	this.surprise.setTransform(334.5,784.5,1,1,0,0,0,62.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.surprise).wait(72));

	// smile
	this.smile = new lib.smile();
	this.smile.name = "smile";
	this.smile.setTransform(335,755.5,1,1,0,0,0,132,51.5);

	this.timeline.addTween(cjs.Tween.get(this.smile).wait(72));

	// normal
	this.normal = new lib.normal();
	this.normal.name = "normal";
	this.normal.setTransform(332.5,733.5,1,1,0,0,0,126.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.normal).wait(72));

	// _Nose
	this.nose = new lib.nosenose();
	this.nose.name = "nose";
	this.nose.setTransform(333,615,1,1,0,0,0,33,56);

	this.timeline.addTween(cjs.Tween.get(this.nose).wait(72));

	// base
	this.foundation = new lib.foundation();
	this.foundation.name = "foundation";
	this.foundation.setTransform(339,441,1,1,0,0,0,339,441);

	this.timeline.addTween(cjs.Tween.get(this.foundation).wait(72));

	// hithere
	this.hithere = new cjs.Text("Hi, there!", "bold 67px 'PT Mono'", "#FFCC33");
	this.hithere.name = "hithere";
	this.hithere.lineHeight = 77;
	this.hithere.lineWidth = 532;
	this.hithere.parent = this;
	this.hithere.setTransform(755.5,441.85);

	this.timeline.addTween(cjs.Tween.get(this.hithere).wait(72));

	// whatsup
	this.whatsup = new cjs.Text("What's up?", "bold 67px 'PT Mono'", "#0066CC");
	this.whatsup.name = "whatsup";
	this.whatsup.lineHeight = 77;
	this.whatsup.lineWidth = 492;
	this.whatsup.parent = this;
	this.whatsup.setTransform(751,441.85);

	this.timeline.addTween(cjs.Tween.get(this.whatsup).wait(72));

	// ouch
	this.ouch = new cjs.Text("Ouch!", "bold 67px 'PT Mono'", "#FF3366");
	this.ouch.name = "ouch";
	this.ouch.lineHeight = 77;
	this.ouch.lineWidth = 416;
	this.ouch.parent = this;
	this.ouch.setTransform(782.8,441.3);

	this.timeline.addTween(cjs.Tween.get(this.ouch).wait(72));

	// closedeyes
	this.instance = new lib.closedeyes();
	this.instance.setTransform(335,510,1,1,0,0,0,201,88);

	this.closedeyes = new lib.closedeyes();
	this.closedeyes.name = "closedeyes";
	this.closedeyes.setTransform(335,510,1,1,0,0,0,201,88);
	this.closedeyes.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.closedeyes}]},1).to({state:[{t:this.closedeyes}]},70).wait(1));

	// eyes
	this.eyes = new lib.eyes();
	this.eyes.name = "eyes";
	this.eyes.setTransform(335.5,509,1,1,0,0,0,200.5,87);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1289,882);


(lib.Chadコピーpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Chad___コピー_psd
	this.me = new lib.me();
	this.me.name = "me";
	this.me.setTransform(960,515,1,1,0,0,0,339,441);

	this.timeline.addTween(cjs.Tween.get(this.me).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(621,74,1289,882);


// stage content:
(lib.abater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.Chadコピーpsd("synched",0);
	this.instance.setTransform(340.35,199.6,0.4395,0.4395,0,0,0,959.6,514.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(541.5,206,216.60000000000002,187.7);
// library properties:
lib.properties = {
	id: '191F5F9BB917814D964F81865ED2CBEA',
	width: 700,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/me_canvas_atlas_.png", id:"me_canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['191F5F9BB917814D964F81865ED2CBEA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;