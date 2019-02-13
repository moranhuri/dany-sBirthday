(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"testing size_atlas_", frames: [[0,3012,1280,853],[0,3867,32,32],[0,2016,1280,994],[0,0,1985,2014]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["testing size_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ComboB = function() {
	this.spriteSheet = ss["testing size_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lion1840092_1280 = function() {
	this.spriteSheet = ss["testing size_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.purimjpgcopy = function() {
	this.spriteSheet = ss["testing size_atlas_"];
	this.gotoAndStop(3);
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


(lib.walking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#581E06").s().p("AmHFvQgUgmgZhEQhCizAGhjQgGgDgGACQgMAFgDAaQgCARgBgXQgCgXABgfQAFhdAZAAQAZAAAShIIAMhHQAghCA4gRQATgGAbgCIApgCIBugLQB4gIAxATQAvARA9gDQBVgFAHAAQAYADAngKQAegIABAGIAdgGIg3BMIAFAOQANAOAsAAQAsAAA+gPQAfgHAXgIIAAARQgDATgKAJQgSAPggAhQglAnAAAGQAAAGAzgGIBFgKQAdgChbBJQhaBHgmgEQgfgDAQATQAIAKAOAKIAhAMQAFAagogHQgpgGAAABQACgBgaB9QgKAvgEAhIAEBEQgMgMAIg4QgHhegKgoQgWhag4AIQAEgIg+gPQhDgShIgGQjQgUgQBUQgdgDgfAhQglAnAVAyQgugCgNAXQgbAyAzCnQAAAJgDAAQgGAAgNgYg");
	this.shape.setTransform(77.2,39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9A890").s().p("AhOBVQgTgbgMgcQgKgbAFgGIgIiLIDzBIIACBTQg4Bhg5AcQgIAFgIAAQggAAgog6g");
	this.shape_1.setTransform(66.8,113);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D36851").ss(0.5).p("AAChpQAFABAYBKQAZBKgCAQQgFAlgqAHQgoAHgVgh");
	this.shape_2.setTransform(79.7,74.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D0F14").s().p("AgHAdQgMgDgGgLQgGgLADgLQADgMALgGQALgGALADQAMADAGALQAGALgDALQgDAMgLAGQgHAEgIAAIgHgBg");
	this.shape_3.setTransform(93.4,65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#141D2A").s().p("AgDAhQgNgBgIgLQgJgLACgNQABgNALgJQALgJAMACQANABAJALQAIALgCAMQgBAOgLAJQgJAHgLAAIgDAAg");
	this.shape_4.setTransform(58.6,65.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D55043").s().p("AhnACQgLgGgEgEQgHgHgFgOQCdBUBmhSQAFAMgGAIIgNAJQhFAaguABIgDABQgxAAgzgcg");
	this.shape_5.setTransform(73.8,91.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D1505").s().p("ABLAfQgggPgYgEQgdgFgbALQgfANgMgJQgLgJAGgfQACgGAHgBIAMgEQAigIAaAJIAuAVQAaAMAQAQQAEADAAAEQAAABAAABQgBABAAAAQAAABAAAAQAAAAgBAAQgCACgDAAQgDAAgDgDg");
	this.shape_6.setTransform(94.8,52.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#421707").s().p("Ah2AiIgBgQQAngTAYgJQAkgOAegFQAxgKApAKQAQAJADAPQACAJgCAUIgbAAQg8gEgjABQg1ACgqAMIgUgBg");
	this.shape_7.setTransform(55.3,54.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9A890").s().p("ABlGGQiDgChdgzQh5hDgqiTQgmAIgggfQgcgbgNguQgOgsAIgjQAIgnAegFQApB9AeAoQAPAUAFgFQhKibBMiEQBDh2CSgvQCSgvB3A8QCHBDAYCwQA5gJgVBKQgOAxgZAlQgGBqhLB0QhUCBheAAIgCAAg");
	this.shape_8.setTransform(67.9,68.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A4A6AB").s().p("AiUBAQgOgKgagZQgZgagCgFQADAHBHgCQBGgCBRgKQDEgZAFgjIAFAfQAAAogmAPQgxATh/AVQhQANgmAAQgZAAgHgGg");
	this.shape_9.setTransform(110.5,297.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDC294").s().p("Ah3CdQgIgLgKgMQgdgkg+hBIg5g5QAEgpAJgoQAShQAZAGQAbAGAdAVQAZASAEAKQACAEAwggQA1giATACQAQACCGB2QCEBxAKgEQAIgEAFANQAFAPgGASQgQA1hVARQiDAchLAAQhMAAgSgcg");
	this.shape_10.setTransform(103.4,284.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A4A6AB").s().p("AAFA9QhMgEgaAFIhygVQhIgNgLgoQgDgMADgKQAEgLgBAMQACAJB+AVQCCAUAggJQAuAIBpglQBtgoAJAAQAVABAGANQAGAOgOAQQgaAdg0AVQhHAdhhAAIgkgBg");
	this.shape_11.setTransform(58.6,299.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EDC294").s().p("AkXCSQgahSAziXQAUg7ASgWQAVgYAGAmQAXBCBbgnIBCgeQAggMALAOQAXAcBDA5QBEA6A0AiQA2AkgLAnQgJAgg0AbQgqAWjMAAQjWAAgtggg");
	this.shape_12.setTransform(58,285.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9A890").s().p("AgqFnQgBgQgCgLQgDgUgPgUQglgzAWg4QAUgzAtgLIiWlZIgUhxIArgSQAygTAlAAQAkA4A4DcQA3DQACACQAVARAlA7QAuBKgZAYQgRAUgbAVQg3ApgyADIgUAAQgtAAgDgOg");
	this.shape_13.setTransform(112.8,178.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9A890").s().p("AihFPQg8hNAtg6QAcgfAMgRQAXgeACgfQAFhoA/iyIA9idQAsg6BIAoQAkAUAbAgIjGHBIA0A5QAvA3ghgFQghgGARAuQAJAXAPAYQglAegvAPQgeAKgZAAQg6AAglgxg");
	this.shape_14.setTransform(19.6,178.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#36637D").s().p("AlFFgQBah0AHlbIAAjYQAAhXANAIQBtAwB2APQCVATBjguQApgOARFLQAGBtACB3QABBpgCACQgzALgZAeQgJALgGACQgJAEgVgHQgTgTgPgJQgTgLgRACQADhRgHhkQgPjIgzhgQggg9gYBFQgQAwgUCOQgbDCgGAgQgUBsgYABQhPABgmAcQgTANgEAOQgogDgog1g");
	this.shape_15.setTransform(68,237.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FE304E").s().p("AAMG/QhEgPhPgaIg0gSIgok5QAHgEgKgiQgRg4gGg2QgJhMhUgKQgagEgeAEIgZAEQAzh2B/hGQAYgOA4gZQAhgOgBgHIAoglIAPAbQATAfAUAVQA/BEAwg/QAwg/gHgcQgBgFgDgEQB4BEBjBRQCDBqghAlQgsgLgRALQgnAYgPAEQgiCSABCbQABCeAlBOQgsA/h1AAQg8AAhPgRgABdnPIAHACIAFAFIgMgHg");
	this.shape_16.setTransform(65.2,158.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C1615").s().p("AgEAAQgCgWgGgQIARADQgBAFAIAhQAGAYgUAMIgCgng");
	this.shape_17.setTransform(98.8,61.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#581E06").s().p("AmHFvQgUgmgZhEQhCizAGhjQgGgDgGACQgMAFgDAaQgCARgBgXQgCgXABgfQAFhdAZAAQAZAAAShIQAIgjAEgkQAghCA4gRQATgGAbgCIApgCIBugLQB4gIAxATQAvARA9gDQBVgFAHAAQAYADAngKQAegIABAGIAdgGIg3BMIAFAOQANAOAsAAQAsAAA+gPQAfgHAXgIIAAARQgDATgKAJQgSAPggAhQglAnAAAGQAAAGAzgGIBFgKQAdgChbBJQhaBHgmgEQgfgDAQATQAIAKAOAKIAhAMQAFAagogHQgpgGAAABQACgBgaB9QgKAvgEAhIAEBEQgMgMAIg4QgHhegKgoQgWhag4AIQAEgIg+gPQhDgShIgGQjQgUgQBUQgdgDgfAhQglAnAVAyQgugCgNAXQgbAyAzCnQAAAJgDAAQgGAAgNgYg");
	this.shape_18.setTransform(78.2,39);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C1615").s().p("AgEAAQgCgWgGgQIARADQgBAFAIAgQAGAZgUAMIgCgng");
	this.shape_19.setTransform(99.8,61.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9A890").s().p("AhOBVQgTgbgMgcQgKgbAFgGIgIiLIDzBIIACBTQg5Bhg4AcQgIAFgIAAQggAAgog6g");
	this.shape_20.setTransform(66.8,113);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A4A6AB").s().p("AgMAyQiHgFgPgRQgMgMgUgdQgTgegBgHQABAIBGAMQBEAMBSAFQDGANAKghIAAAfQgIAognAHQgkAGhHAAIhJgBgAjXgyIABAAIgBAAg");
	this.shape_21.setTransform(107.4,299.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EDC294").s().p("AiECTIgEgNQgDgIgFgFQhLg3gqhDQgrhDAtAFQAMgnAQgmQAhhKAXAKQAZALAZAbQAVAWADALQABAEA1gWQA6gXARAGQAQAFBuCOQBqCIALgDQAJgCACAPQADAPgJARQgbAwhWABIgZAAQj3AAgXg7g");
	this.shape_22.setTransform(101,282.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9A890").s().p("AgqFnQgBgQgCgLQgDgUgPgUQglgzAWg4QAUgzAtgLIiWlZIgUhxIArgSQAygTAlAAQAkA4A4DcQA3DQACACQAVARAlA7QAuBKgZAYIgsApQg3ApgyADIgUAAQgtAAgDgOg");
	this.shape_23.setTransform(112.8,178.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#36637D").s().p("AmoFgQBZh0AHlbIAAjYQABhXANAIQBtAwB3APQCTATBjguQB8BAA9A5QBEBAAKBHQAVCNjbD/QgzALgYAeQgJALgGACQgKAEgUgHQgUgTgOgJQgTgLgRACQCwj7hFiCQgZgxg5gaQgtgUgxgBIg6EJQhEELgsABQhPABgnAcQgTANgDAOQgogDgog1g");
	this.shape_24.setTransform(77.9,237.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FE304E").s().p("AAMG8QhEgPhPgaIg0gSIgok5QAHgEgKgiQgRg4gGg2QgJhMhUgKQgagEgeAEIgZAEQAzh2B/hGQBygwgCgMIAoglIAPAbQATAfAUAVQA/BEAwg/QAwg/gHgcQgBgGgDgEQB4BFBjBRQCDBqghAlQgsgLgRALQgnAYgPAEQgiCSABCbQABCeAlBOQgsA/h1AAQg8AAhPgRg");
	this.shape_25.setTransform(65.2,158.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0D0F14").s().p("AgDAeQgMgCgIgKQgHgKACgLQABgNAKgHQAKgIALACQANACAHAKQAHAKgBALQgCANgKAHQgIAGgJAAIgEAAg");
	this.shape_26.setTransform(99.2,60.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#141D2A").s().p("AgWAYQgJgKAAgOQgBgNAKgJQAJgKANAAQANgBAKAKQAJAKAAANQABAOgKAJQgJAKgOAAQgMAAgKgJg");
	this.shape_27.setTransform(64.8,65.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#581E06").s().p("AlmGDQgXgkgehCQhOiuAAhlIgMAAQgMAGgBAbQAAARgEgXQgDgXgBgfQgChdAZgCQAZgBANhJQAHgkABgkQAbhEA3gVQAfgLA3gFIBtgSQB3gPAzAPQAwAOA8gIQBUgKAIAAQAYABAngNQAdgKABAGIAdgHIgyBPIAGAOQAOANArgDQAsgDA9gTQAfgJAWgJIABAQQgBATgKAKQgQAQgfAkQgiAoAAAHQABAGAzgKIBDgOQAdgEhWBOQhVBOgmgCQgfgBARASQAJAJAPAJIAhAMQAIAYgpgDQgqgEAAABQADAAgSB9QgHAxgCAhIAJBCQgMgLADg3QgNhggMgmQgchYg3AMQADgIg/gMQhEgNhIgCQjRgGgLBVQgdgBgdAjQgiApAYAxQguABgLAYQgYA0A/CiQAAAJgDAAQgFAAgPgWg");
	this.shape_28.setTransform(80.1,38.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#D36851").ss(0.5).p("AgIhpQAFAAAcBIQAeBJgBAQQgDAmgpAJQgoAKgXgf");
	this.shape_29.setTransform(86.1,73.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D55043").s().p("AhlAMQgMgHgDgDQgJgGgFgNQCiBJBghYQAGALgFAIIgMALQhEAeguAEIgPABQgrAAgugVg");
	this.shape_30.setTransform(80.7,90.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3D1505").s().p("AhOAcQgMgIADgfQACgGAHgCIAMgEQAggLAbAHIAwASQAbALARAPQAEACAAAEQAAABgBABQAAABAAAAQAAABAAAAQAAAAAAABQgHAEgFgFQhFgbgrAWQgTAJgMAAQgHAAgEgDg");
	this.shape_31.setTransform(99.4,51);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#421707").s().p("Ah1AoIgBgQQAngWAWgJQAigRAegHQAvgNArAHQAQAIAFAPQACAJgBAUIgbACQg7gBgkAEQg0AFgqAPg");
	this.shape_32.setTransform(60.1,55.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F9A890").s().p("AhhFeQh9g7gziQQgmAKgigdQgdgZgRgtQgQgrAFgjQAGgnAdgIQAyB6AgAnQAQATAFgGQhUiWBCiJQA7h6CPg4QCOg5B7A0QCLA6AkCuQA5gNgRBMQgLAygWAmQACBrhEB4QhLCHhfAFIgnACQhqAAhTgng");
	this.shape_33.setTransform(73.1,68.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1C1615").s().p("AgDAAQgEgWgHgQIARACQAAAFAKAgQAIAYgVAOIgDgng");
	this.shape_34.setTransform(103.8,59.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F9A890").s().p("AhOBVQgUgbgKgcQgLgbAFgGIgJiLID0BIIACBTQg4Bhg5AcQgIAFgIAAQggAAgog6g");
	this.shape_35.setTransform(70.4,112.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A4A6AB").s().p("ADMCCQhGgLilg5Qiug8gSgXQg0gtgGglQgBgMACgJIAEgHIEbB8QEJBrAKgfIAAAHQgBAOgGAMQgOAeglAAQgJAAgLgCg");
	this.shape_36.setTransform(99.7,288.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC294").s().p("ACbDbQhDgMh3hFQgwgcgUgGQgdgLgLAPQgUAcglgHQgkgHgagiQgdglABgwQABg4Asg3QARgiAVgfQArg+AWAPQAZAPAWAdQASAZABAKQABAKBfgTIB2CYQB6CaAOgBQAJAAAAANQABAOgMAOQgXAcg0AAQgVAAgZgFg");
	this.shape_37.setTransform(100.8,275.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A4A6AB").s().p("AgUBKQhHgZgagDQgCAAhkgyQhAggABgqQAAgNAGgIQAHgKgEAMQgBAIBxA3QB1A3AhABQApATBtgIQBxgIAJADQAUAHACAOQACAPgSAMQgiAWg2AFQgSACgSAAQhKAAhZgfg");
	this.shape_38.setTransform(44,298.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC294").s().p("AgqCsQjNg8gjgsQgChVBciDQAjg0AYgPQAbgRgFAmQAEBFBigMIBGgJQAjgDAHAQQAOAhAxBKQAxBJAoAxQApAygUAiQgSAdg5ALIgQABQg6AAipgxg");
	this.shape_39.setTransform(44.2,285.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F9A890").s().p("AgMGAQhBgIgBgSIACgaQAAgVgLgWQgcg5AfgzQAcgvAvgDQARiWhqjYIguhNIgOgbIB8gtQArgCA6EGQAWBkALBQQAKBTgKACQgEABANAYIAbA5QAnBVgbASQgUARgfAPQgzAbgsAAIgOgBg");
	this.shape_40.setTransform(113.9,177.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F9A890").s().p("AhPFxQhRg3AZhEQARgmAHgVQAMgjgIgeQgbhmAFi7IALipQAYhFBRARQAnAIAkAWIg0HoIBFAlQA9AnghAFQghAEAfAnQAPATAWASIgSAYQgYAbgZATQgsAfgpAAQgjAAgigXg");
	this.shape_41.setTransform(38.1,178.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#36637D").s().p("AmtFIQBrhpA3k+QARhkAKhtIAGhYQAGAFA2AKQBEALBUAIQDlAVARgjQCSAgArBuQAiBZgiCDQgaBig5BiQgzBYgIgMQglArgsgSQgcgKg0gxQAvg1AchSQAdhTgHhDQgIhLgygYQg6gdhpAvIhPD7QhYD7gqgFQhKgKgoAVQgNAHgHAIIgFAIQglgJgeg4g");
	this.shape_42.setTransform(72.9,235.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FE304E").s().p("AAMG/QhxgYhWgjIgok5QAHgEgKgiQgRg4gGg2QgJhMhUgKQgpgGgoAKQAzh2B/hGQBygwgCgMIAoglIAPAbQATAfAUAVQA/BEAwg/QAwg/gHgcQgBgFgDgEQB4BEBjBRQCDBqghAlQgsgLgRALQgnAYgPAEQgiCSABCbQABCeAlBOQgsA/h1AAQg8AAhPgRgABdnPIAHACIAFAFIgMgHg");
	this.shape_43.setTransform(68.8,157.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#581E06").s().p("AlLGVQgZgjghhBQhXiqgGhkIgLAAQgMAHAAAbQABARgFgXQgEgXgCgfQgHhcAZgDQAYgDAKhJIAEhJQAYhFA1gYQAegNA3gHIBsgYQB2gWA0ANQAxAMA7gLQBVgPAGAAQAZgBAmgPQAcgLABAGIAdgJIguBSIAGANQAPANArgGQAsgFA8gWQAegLAWgKIACARQAAASgKALQgQARgbAlQghAqABAHQABAGAygNIBDgRQAdgFhSBSQhRBSgmAAQgfABASAQQAJAJAPAIIAiAKQAJAZgogCQgrgCAAACQADgBgMB+QgEAwAAAhIAMBDQgMgKAAg5QgShegOglQgghXg3APQADgIhAgJQhEgJhJACQjRAFgGBWQgdAAgbAkQggArAbAwQgvAEgJAYQgVA0BHCgQABAJgEAAQgFAAgQgVg");
	this.shape_44.setTransform(71,38.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#D36851").ss(0.5).p("AgRhoQAEgBAgBHQAiBHAAAQQgBAmgoALQgoAMgYge");
	this.shape_45.setTransform(79.8,72.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3D1505").s().p("AhOAdQgMgHACgfQABgHAHgCIAMgFQAfgMAcAGIAwAPQAcAKASANQAEADAAAEQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQgGAFgFgFQghgLgZgBQgegBgZAOQgUALgMAAQgGAAgEgDg");
	this.shape_46.setTransform(91.6,49.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#421707").s().p("Ah2AeQBKgwAwgOQAtgQAtAFQAQAHAGAPQADAJAAAUIgbADQg7ADgkAFQg0AIgoARIgVABg");
	this.shape_47.setTransform(52.6,55.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9A890").s().p("AhMFmQiAg0g7iNQglAMgjgbQgfgXgTgsQgSgrADgkQAEgmAcgJQA5B3AiAkQARATAEgGQhciRA8iNQA0h9CMg/QCLhAB+AtQCNAyAtCsQA4gQgMBNQgIAxgVApQAHBqg9B8QhECLhfAKQgiAEggAAQhaAAhJgeg");
	this.shape_48.setTransform(65.9,67.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1C1615").s().p("AgDAAQgEgWgJgPIASAAQgBAFANAgQAJAXgUAPIgGgmg");
	this.shape_49.setTransform(96.3,57.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A4A6AB").s().p("AixB8QhGgDgbgZQgJgIgEgJIgBgIIEqhQQEUhTgOggIAFAHQAIAMADANQAJAogvAaQg+AiilA8QiZA5goAAIgHgBg");
	this.shape_50.setTransform(140.3,301);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC294").s().p("Ai0C0QgugLgegmQgigsgBhHQgIgkgCglQgGhLAbgDQAcgEAjAJQAeAIAHAHQAIAHA+hKIC8AsQC+ArALgJQAHgGAIALQAKAKgBASQgBAzhPAqQg7AhiJAWQg2AIgTAHQgeAKABASQACAjghASQgVAKgYAAQgOAAgPgDg");
	this.shape_51.setTransform(137.1,294.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F9A890").s().p("AgaF1QhXgpAMhIQALgoAEgVQAGglgNgcQgrhggai6IgRioQAMhIBUADQAoABAoAQIAbHqIBJAaQBDAcggAKQggAKAlAhQASARAYAOIgNAaQgTAfgXAXQguAugyAAQgbAAgbgNg");
	this.shape_52.setTransform(43,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#36637D").s().p("AClACQhjjAhVgGIhuD8Qh2D7gqgGQhKgJgoAUQgMAHgIAJIgFAHQgkgIgeg5QBrhoA3k/QARhjAKhuIAGhXQAGAFA1AJQBEAMBVAIQDlAVARgjQChB7BoFbQA0CuATCWIiWBVQhrkxhJiPg");
	this.shape_53.setTransform(76.7,242.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F9A890").s().p("AhLFxQg9gYAEgSIAIgZQAFgUgFgYQgMg+ArgpQAngmAuAJQA3iMgvjtIgZhXIgHgdICCgMQArAJgKEMQgEBmgLBRQgLBSgKAAQgBAAAPBYQAQBcgeALQgYALgiAIQgeAHgYAAQggAAgagLg");
	this.shape_54.setTransform(92.8,179.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#581E06").s().p("AkUGyQgdgggng9QhmihgQhjIgMACQgLAHADAbQACARgGgWQgHgXgFgfQgQhbAYgFQAZgGAChJIgDhJQARhHAzgdQAdgQA2gMIBpgjQBzggA1AHQAxAHA7gQIBZgYQAYgDAkgTQAcgNACAFIAbgLIglBWIAHAMQAQALAqgKQArgJA6gcQAdgOAUgMIAEARQACATgJALQgNARgZApQgcAtABAGQABAGAxgRIBBgYQAdgIhKBaQhJBZgmAEQgfAEAUAPQAKAHAQAHIAjAHQALAXgpADQgqACABABQACgBABB+QABAzADAhQgbhcgSgmQgphSg1ATQACgIhAgDQhFgChIAJQjPAZACBWQgdADgYAnQgcAuAgAtQguAIgHAZQgQA2BWCYQACAJgEAAQgFAAgRgTgAFHCeIARA/QgMgIgFg3g");
	this.shape_55.setTransform(70.9,39.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#D36851").ss(0.5).p("AgihoQAFgBAmBDQApBEABAQQADAmgnAPQgmAQgbgc");
	this.shape_56.setTransform(85,72.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0D0F14").s().p("AAAAeQgNAAgIgKQgIgJAAgLQABgNAJgIQAJgJALABQANABAIAJQAIAJAAALQgBANgJAIQgIAIgMAAIAAAAg");
	this.shape_57.setTransform(94.9,60.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#141D2A").s().p("AgTAaQgLgJgBgOQgCgMAJgLQAIgLAOgBQAMgCAKAJQALAJABAOQACAMgJALQgIALgNABIgEAAQgKAAgJgHg");
	this.shape_58.setTransform(61.1,68.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3D1505").s().p("AhLAgQgMgGgCgfQABgHAGgDIAMgFQAdgQAdAEIAxAKQAdAHATANQAFACAAADQAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQgFAFgGgEQgigIgYABQgeACgYARQgVAOgMAAQgEAAgEgCg");
	this.shape_59.setTransform(93.9,49.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#421707").s().p("Ah0AnQAhgbAWgNQAggVAdgMQArgUAsABQARAFAHAOQAEAIACAWIgaAEQg7AJgjAJQgzAMgnAWIgUADg");
	this.shape_60.setTransform(55.9,59);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F9A890").s().p("AgkFzQiEgohIiHQgkAQgmgXQghgVgXgqQgXgpAAgkQAAgnAcgLQBDBxAmAhQATARAEgHQhqiIAuiQQAoiCCFhNQCEhNCBAhQCSAkA+CnQA2gVgGBOQgDA0gQAoQARBogxCCQg2CQhdAUQg+ANg3AAQg9AAg1gQg");
	this.shape_61.setTransform(69.6,68.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1C1615").s().p("AgCAAQgHgVgJgOIASgCQAAAFAPAfQALAWgTARIgJgmg");
	this.shape_62.setTransform(99.3,56.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A4A6AB").s().p("ABkDBQhSgkhMhZQgyg5gVgOIg/hfQgng8AWgkQAGgLAJgFQAMgFgKAIQgFAHBHBoQBJBrAcAQQAaAmBjAvQBmAyAGAGQAOAQgFANQgGAOgVABIgHABQgmAAgtgUg");
	this.shape_63.setTransform(26.2,289.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC294").s().p("AB0ELQgtgQiNiTQiViZgIg2QAphMCRhFQA3gbAdgCQAfgBgXAfQgfA9BbAnIBDAbQAfAPgCARQgEAlAGBXQAGBZAKA9QALBAgiAUQgOAIgUAAQgWAAgegLg");
	this.shape_64.setTransform(27.1,282.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F9A890").s().p("AhHFzQhSgzAVhGQAPgmAGgVQALgkgJgdQgghlgEi7IADipQAUhGBSAMQAoAHAlAUIgdHqIBGAiQA/AkghAGQghAHAhAlQAQASAWARIgRAZQgWAcgYAUQgtAkgrAAQghAAghgVg");
	this.shape_65.setTransform(40.7,181.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#36637D").s().p("ACjAVQhrjQhQgKQALC7hsCgQgrBCg0ApQgxAogmACQhPADgpAPIgaAPQgQgEgdhhIgbhfQAnAYA2g5QAzg2AnhiQAqhoAHhpQAJhygmhQQAKAFAyAJQBIAMBZAIQDxAYASgjQCDCAB4FiIBHDhQAdBdAJgDIieBUQiLk0g+h7g");
	this.shape_66.setTransform(76.6,243.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F9A890").s().p("Ag1F9QhAgPABgSQAEgPABgLQACgVgIgXQgWg7AlgvQAhgsAvACQAhiThRjiIglhSIgLgdIB/geQAsACAdELQALBmABBRQABBTgKABIAbBWQAdBYgdAPQgWAPggAMQgrARgkAAQgRAAgPgEg");
	this.shape_67.setTransform(107.6,180.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:58}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:67.9}},{t:this.shape_7,p:{x:55.3}},{t:this.shape_6,p:{x:94.8}},{t:this.shape_5,p:{x:73.8,y:91.2}},{t:this.shape_4,p:{x:58.6}},{t:this.shape_3,p:{x:93.4}},{t:this.shape_2,p:{x:79.7}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25,p:{x:65.2,y:158.7}},{t:this.shape_24},{t:this.shape_14},{t:this.shape_23},{t:this.shape_12,p:{x:59}},{t:this.shape_11},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:66.8,y:113}},{t:this.shape_19},{t:this.shape_8,p:{x:68.9}},{t:this.shape_7,p:{x:56.3}},{t:this.shape_6,p:{x:95.8}},{t:this.shape_5,p:{x:74.8,y:91.2}},{t:this.shape_4,p:{x:59.6}},{t:this.shape_3,p:{x:94.4}},{t:this.shape_2,p:{x:80.7}},{t:this.shape_18}]},5).to({state:[{t:this.shape_43,p:{x:68.8,y:157.8}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:44.2,y:285.7}},{t:this.shape_38,p:{x:44,y:298.4}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:70.4,y:112.4}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:64.8,y:65.2}},{t:this.shape_26,p:{x:99.2,y:60.4}}]},7).to({state:[{t:this.shape_54},{t:this.shape_43,p:{x:66.1,y:159}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_39,p:{x:41.5,y:286.9}},{t:this.shape_38,p:{x:41.2,y:299.6}},{t:this.shape_51,p:{x:137.1,y:294.9}},{t:this.shape_50,p:{x:140.3,y:301}},{t:this.shape_35,p:{x:67.6,y:113.6}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_5,p:{x:75.6,y:91.7}},{t:this.shape_27,p:{x:57,y:66.4}},{t:this.shape_26,p:{x:91.4,y:61.5}},{t:this.shape_45},{t:this.shape_44}]},6).to({state:[{t:this.shape_67},{t:this.shape_25,p:{x:68.6,y:160.6}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_51,p:{x:139.6,y:296.2}},{t:this.shape_50,p:{x:142.8,y:302.3}},{t:this.shape_20,p:{x:70.2,y:114.9}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_5,p:{x:78.2,y:93}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.1,306);


(lib.cir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.408)").ss(1,1,1).p("ACIAAQAAA4goAoQgoAog4AAQg3AAgogoQgogoAAg4QAAg3AogoQAogoA3AAQA4AAAoAoQAoAoAAA3g");
	this.shape.setTransform(0.3,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AADiHQA2ABAnAnQAoAoAAA3QAAA4goAoQgoAog4AAQg3AAgogoQgogoAAg4QAAg3AogoQAogoA3AAQABAAABAA");
	this.shape_1.setTransform(0.3,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009900").ss(3,1,1).p("ABdADIAAgDQAAgOABhPQAAgCAAgCQAAgBAAAAQAAgIAAgJQAAgBAAgBQABg7ABg6Qh7BXgsAeIgXARgABeCCQAAgKAAgMQAAgGAAgFQAAgFAAgEIAAgKQgBgFAAgFQAAgaAAgcQAAgCAAgCQAAgEAAgDABeCfQgBgOABgPABgDrQAAAAgBhMQAAgNgBgQ");
	this.shape_2.setTransform(-8.9,-30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAAAAQAAAAABAA");
	this.shape_3.setTransform(0.5,-14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("AhfAPIAYgQICmh1IgBB1IAAABIAAARIAAABIgBAEIAABeIAAADg");
	this.shape_4.setTransform(-8.9,-41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-15.3,29.2,29.2);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D8AF9").s().p("AoFFoIAArPIQKAAIgELPg");
	this.shape.setTransform(65.6,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(13.8,8,103.5,72), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F6CF4").p("Aozh8IAAD5IRnAAIAAj5g");
	this.shape.setTransform(70.6,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D8AF9").s().p("AozB9IAAj5IRnAAIAAD5g");
	this.shape_1.setTransform(70.6,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(13.2,8,114.9,27), null);


(lib.dog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232020").s().p("AgIAxQgKgCgFgKIgFgUQgDgPAIgVQAGgOAFgHQAIgJAMABQANACAFANQADAHABAQIgCATQgCAKgEAIQgIANgEAEQgGAFgHAAIgFAAg");
	this.shape.setTransform(23.4,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6A36B").s().p("ABVCIQgkgDAAgdIAOgZIARgOQAJgJgEgNQgHgdgFgOQgIgZgSgPQgfgagcgFQgegEgkAQQgbAMg0ACIgBgOIgCgdQgBgRAFgIQAGgJAPAFQAWAGAEAAQAZgEAdgGIAqgMQAigHAQAHQAPAGATAeQAjA4A4AfIgEB4QgLAUgWAGQgHABgLAAIgWgBg");
	this.shape_1.setTransform(68.9,91.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D89F5B").s().p("AgoATQAIgNARgRIAageQAMgPAKAGQAMAHgGAQQgQA1gaAbQgPgTgWgPg");
	this.shape_2.setTransform(93.6,54.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232020").s().p("AAQBFQgXgHgDgXQgCgRgIgJQgIgKgPgEQgSgbAFgQQAGgQAegKIAeAFQAaAIADAWQACAUgXANIgPAJQgGAHADAMQADANAIAHQAHAFAOADIAOAAQAIAAAEAGQgNALgQAAQgGAAgHgCg");
	this.shape_3.setTransform(5.8,49.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D89F5B").s().p("AhIgEQgPgTADgZIAaABQAQABAJAEQAZAKARgHQAQgHAPgWQABgCAHgFQAXAPAOATQguArAlA5QADAEABAMQhcAAg8hPg");
	this.shape_4.setTransform(84.7,64.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A87139").s().p("AhpBUQgJgMABgVQAFg4ARgnQAOgfAVgNQAVgNAhADQBKAJAqAwIggACQhigBglBZIgVAzQgVgCgKgOg");
	this.shape_5.setTransform(20.2,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6A36B").s().p("Ag+B/QgIgqAigRQALgGAEgJQADgIgBgNQgDhLgRhhIAnAMQAWAHAQgBQAOgBADAQIAKBFIgMCUIABgBIgFAMIgGAGQgeAOgZAAQgbAAgXgOg");
	this.shape_6.setTransform(34.7,90.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A87139").s().p("AhmB8QgbgIgKgPQgLgQAFgbIAGgcIAag5QAQghARgWQA3hEBPAhQAkAPAlAgQAVATAAAZQAAAagUATQgQARglATIgaAMQgOAJgIAKIgbASIgdAQQgTAJgWAAQgQAAgQgFg");
	this.shape_7.setTransform(47.8,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5B076").s().p("AhHDbQhggdgLhbQAQAEAIAKQAHAKADARQADAXAXAHQAXAHAUgQQgFgGgIgBIgOAAQgNgCgHgGQgJgGgDgNQgDgNAGgGIAQgLQAXgNgDgTQgCgWgagIIgfgGIAUgPQA8geAJhOIAVgzQAlhaBiABQgwAmgdAnQghAugOA1QgHAcAGAXQAGAVAVATQAXAXA4AiQAfATAcAfQATAWAdAoQhEAhhLAAQgzAAg4gQg");
	this.shape_8.setTransform(19.3,39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C98D4C").s().p("AgcCeQgdgfgfgTQg4gigYgXQgUgTgGgWQgGgWAHgcQANg1AiguQAdgnAwgmIAhgDIAWADIgGAcQgFAbALAQQAKAPAaAIQAoALAhgPIAdgQIAcgSQAeAaAKAoQAHAdgCAxQgCAlgSAoIgTAlQgJAVADAUQACANgSARQg4Ayg+AAQgbgogTgVgAiDhEQgGAHgFAPQgJAVADAQIAFASQAFAKALACQALADAIgIQAEgEAHgMQAEgHACgLIADgTQgCgRgDgHQgEgNgOgCIgDAAQgKAAgHAIg");
	this.shape_9.setTransform(35.3,37.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D89F5B").s().p("AjEEQQgggBgLgOQgLgNAGgfIAFgHQAHgEgBgGQAPgEAFgCQAJgGgBgNIgGg+QgEglgHgaIgKhDQgDgQgOABQgRABgXgHIgmgMQgJgXgDhAIgBg6ICeg1IARgEQgDgyAQBzQAQB2gDgCQASAIAVgTQAIgGAHgMQAfg2A+gYQAhgMASggQApgEAbADQgEAZAQATQA7BQBdAAQAVAwALA9QAHApAGBJQADAiADBGQgMAXgWAGQgNADgggCQgrgCAGgoQAbgUADgbQADgYgQgfQgGgNgEgGQgGgJgMgCQg4gegjg4QgSgdgQgHQgPgGgjAHIgqALQgdAHgZADQgEABgWgHQgPgFgGAJQgEAIAAAQIACAdIABAPIgMCVQgHAOACAMQAGAogsAJQgLACgPAAIgLAAgAjpDDIAAABIgBAAg");
	this.shape_10.setTransform(63.6,82);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D89F5B").s().p("AhQBvQgUgIgBgcQAAgPgIhAIgIg+IAsguQgBAIA+AcIAvARQA2ASAdACQgSAfgiAMQg/AYgdA2QgIALgHAHQgPANgOAAQgFAAgFgCg");
	this.shape_11.setTransform(57.7,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dog, new cjs.Rectangle(0,0,97.7,109.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בחר", "19px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50.1,5.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AoWCgIAAk/IQtAAIAAE/g");
	this.shape.setTransform(52.5,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,1.1,107,32), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.playAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("שחק שוב", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(1.5,-10.1,0.486,0.495);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A1ABA0").s().rr(-27.95,-9.3,55.9,18.6,5.6);
	this.shape.setTransform(1.6,-0.9,1.433,1.338);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.playAgain, new cjs.Rectangle(-38.5,-13.3,80.3,24.8), null);


(lib.nextTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("המשך", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(1.6,-9.9,0.467,0.486);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A1ABA0").s().rr(-27.95,-9.3,55.9,18.6,5.6);
	this.shape.setTransform(1.6,-0.9,1.461,1.316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nextTime, new cjs.Rectangle(-39.2,-13,81.7,24.4), null);


(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("המשך", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(1.8,-10.7,0.504,0.525);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A1ABA0").s().rr(-27.95,-9.3,55.9,18.6,5.6);
	this.shape.setTransform(1.7,-1,1.578,1.421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.next, new cjs.Rectangle(-42.4,-14.1,88.2,26.4), null);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgjAoIAkgoIAjApAABAAIAjgoAgggnIAhAn");
	this.shape.setTransform(-0.3,0.2,1.377,1.377);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#011627").p("ABQAAQAAAQgGAOQgGAOgLALQgLALgPAGQgPAGgQAAQgPAAgPgGQgPgGgLgLQgLgLgGgOQgGgOAAgQQAAgPAGgPQAGgOALgKQALgLAPgGQAPgGAPAAQAQAAAPAGQAPAGALALQALAKAGAOQAGAPAAAPg");
	this.shape_1.setTransform(-0.1,0,1.387,1.387);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBHQgOgFgMgMQgKgKgGgOQgHgPAAgPQAAgPAHgOQAGgPAKgKQAMgLAOgGQAPgFAPAAQAQAAAPAFQAOAGAMALQAKAKAHAPQAGAOAAAPQAAAPgGAPQgHAOgKAKQgMAMgOAFQgPAHgQAAQgPAAgPgHg");
	this.shape_2.setTransform(-0.1,0,1.387,1.387);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.exit, new cjs.Rectangle(-12.8,-12.2,25.3,24.5), null);


(lib.endBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("סיום", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(1.5,-10.1,0.486,0.495);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A1ABA0").s().rr(-27.95,-9.3,55.9,18.6,5.6);
	this.shape.setTransform(1.6,-0.9,1.433,1.338);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endBtn, new cjs.Rectangle(-38.5,-13.3,80.3,24.8), null);


(lib.check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("בדיקה", "bold 30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(1.8,-10.7,0.504,0.525);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A1ABA0").s().rr(-27.95,-9.3,55.9,18.6,5.6);
	this.shape.setTransform(1.7,-1,1.578,1.421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.check, new cjs.Rectangle(-42.4,-14.1,88.2,26.4), null);


(lib.recWhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.91)").s().p("EgjDANOQiPAAgViUQgEgZAAgeIAA0GQAAgeAEgZQAIg5AbgjQApg3BYAAMBGGAAAQBYAAAqA3QAnAyAABhIAAUGQAADLipAAg");
	this.shape.setTransform(-0.9,-0.1,1.54,1.485);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.recWhite, new cjs.Rectangle(-372.2,-125.7,742.6,251.3), null);


(lib.zoomIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191919").s().p("As9OUIhWhVQgKgKAAgOQAAgNAKgJIJypzQAKgJANAAQANAAAKAJIAQAQIA+g+Qiki3AIj4QAHj4CvivQBahZBzgwQBxgtB7AAQB6AABxAtQB0AwBaBZQC3C2AAEDQAAEDi3C2QivCvj4AHQj4AIi3ikIg+A+IAPARQAKAJAAANQAAAOgKAJIpxJyQgKAKgNAAQgNAAgKgKgAB/rZQhWAihCBEQiHCIgBC+QABDACHCHQCHCIDAAAQC/AACIiIQCIiHAAjAQAAi+iIiIQhDhEhWgiQhUgjhaABQhbgBhUAjg");
	this.shape.setTransform(0.4,-1.1,0.053,0.053);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191919").s().p("AjFa2QldgokwisQklimjSkIQjTkKhflDQhilPAoldQAoldCskwQClklEKjSQEIjTFDhfQFQhiFcAoQFdAoExCsQEkClDUEKQDSEIBfFDQBiFQgoFcQgoFdisExQimEkkIDUQkKDSlDBfQjuBGj1AAQhjAAhmgMgAm63mQkmBXjyC/QjxDAiXELQicEVglE9QgkE9BZExQBXEnC/DxQDADxELCWQEVCdE9AlQE9AkExhZQEnhXDxjAQDxi/CWkLQCdkUAlk/QAkk8hZkxQhXkmjAjyQi/jxkLiXQkUick/glQhcgKhaAAQjfAAjYA/g");
	this.shape_1.setTransform(0.1,-0.8,0.053,0.053);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgQhLQAJgCAJAAQAMAAAMADQABABACAAQARAGAOANQAZAXAAAfQAAAggZAWQgYAYgiAAQgCAAAAAAQgBAAgCAAQghAAgYgXQgYgXAAggQAAgfAYgWQATgSAZgEgAAABOQgggCgYgWQgNgLgGgQQgFgNAAgOQAAgOAFgMQAGgQANgMQAOgNASgGQACAAABgBQADAAACgB");
	this.shape_2.setTransform(0,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBQQgggBgXgWQgNgMgGgPQgFgNAAgPQAAgNAFgNQAGgPANgNQAOgNASgFIADgBIAEgBQAJgCALAAQAMAAAKADIAEABQAQAFAOANQAZAXAAAfQAAAggZAXQgYAXggAAIgEAAgAgaBQQghAAgXgXQgYgWAAggQAAgfAYgXQATgSAYgDIgEABIgDABQgSAFgOANQgNANgGAPQgFANAAANQAAAPAFANQAGAPANAMQAXAWAgABIgDAAgABrhPIAAACIAAAZIAAABgAgnhIIAAAAg");
	this.shape_3.setTransform(2.2,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.027)").s().p("AAAgMIAAAHIABABIAAAEQAAAHgBAGg");
	this.shape_4.setTransform(-14.2,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoomIn, new cjs.Rectangle(-14.3,-9.9,27.3,18.2), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFBfQh7iUAvhSQBOiIBNBEQAmAiAVA9QATg0AhgjQBChGBJBXQBKBWiBCoQhABVhOBDQhHg6g9hLg");
	this.shape.setTransform(22.2,22.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,44.6,45.5), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqBMQhih2AlhCQA/htA9A3QAfAbARAxQAOgqAagcQA1g4A7BGQA7BFhnCGQgzBDg/A2Qg4gugxg8g");
	this.shape.setTransform(17.8,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,35.7,36.3), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieCBQihi0A3hrQBbiuBjBSQAyApAeBLQAUhCAogtQBPhbBhBpQBgBqiZDZQhNBthgBXQhahFhQhag");
	this.shape.setTransform(27.9,28.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,-0.1,55.7,57.7), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80C41C").s().p("AARIxQAzhZAEg9QAJiHgygSIg0gJQgkgGgYgUQgbgXAEghQADgYAZgvQAhhAAKgZQAXg4ABg1QADiLgxhZQg9hviTg7Qg3gXgZgrQAcguA3gUIAQARQARggAKgOQASgYAWgLQAJAZAQAZIAZAjQAXAmgLA7IAigwQBzAcA5BgQA9Bmg9BpQA5BKAKAdQASAygYBNQBbApAoBVQAqBegwBdQBIA3gGBBQgFA7hCA7Qg8A3hdAoQhcAohaAMIBQiIg");
	this.shape.setTransform(34.4,69.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,68.8,139.3), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80C41C").s().p("AAQIOQAwhTAEg5QAJh/gwgRIgwgIQgigGgXgTQgagVAFggQACgWAYgsQAfg8AJgXQAWg1ABgyQADiBgvhVQg4hniKg4Qg0gVgXgpQAagrAzgSIAPAQQAQgfAKgNQARgWAUgKQAJAYAPAWIAXAiQAVAkgKA2IAggtQBsAaA2BaQA5Bgg5BiQA1BHAKAbQAQAugWBJQBVAlAlBRQAoBYgtBXQBEAzgGA+QgFA3g9A3Qg5AzhXAmQhXAlhUALQAyhRAZgug");
	this.shape.setTransform(32.2,65.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,64.5,130.7), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80C41C").s().p("AAQIOQAwhTAEg5QAJh/gwgRIgwgIQgigGgXgTQgagVAFggQACgWAYgsQAfg8AJgXQAWg1ABgyQADiBgvhVQg4hniKg4Qg0gVgXgpQAagrAzgSIAPAPQAQgeAKgNQARgWAUgKQAJAYAPAWIAXAiQAVAkgKA2IAggtQBsAaA2BaQA5Bgg5BiQA1BHAKAbQAQAugWBIQBVAmAlBRQAoBYgtBXQBEAzgGA+QgFA3g9A3Qg4AzhYAmQhXAlhUALQAyhRAZgug");
	this.shape.setTransform(32.2,65.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,64.5,130.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/BmQiAiQAthUQBJiMBOBCQAoAhAXA9QARg1AfgkQA/hJBNBUQBOBUh7CtQg9BXhNBGQhIg4hAhIg");
	this.shape.setTransform(22.3,22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,44.6,45.9), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai8BuQiJjHBFhiQBwihBYBdQAsAvAVBPQAcg/AtgoQBahQBSB0QBSB1izDDQhaBjhpBLQhShQhEhkg");
	this.shape.setTransform(28,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,-0.1,56,58), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiWBYQhuifA3hOQBbiBBFBLQAjAmAQA/QAXgzAkggQBIg/BDBdQBBBciPCcQhIBPhUA8QhChAg2hQg");
	this.shape.setTransform(22.4,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,44.8,46.3), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak0CgIgqjXICAjHID9hGIDJAzIB3FJIhAD1IoDAYg");
	mask.setTransform(35.1,32.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8000").s().p("AjMDZQhZhWgDh9QgCh7BVhaQBUhaB7gDQB6gCBZBWQBYBWADB8QADB8hVBaQhVBZh7ADIgGABQh2AAhWhUg");
	this.shape.setTransform(34.6,38.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(4.9,8.4,59.3,56.6), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al6DSIhAkMICXkAIE6hjID/A3ICkGXIhDE2IqFA3g");
	mask.setTransform(44.3,41.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4FA0CA").s().p("Aj2EaQhzhogJicQgJibBmh1QBmh0CagJQCZgJBzBnQBzBoAJCcQAJCahmB1QhmB0iaAKIgYABQiLAAhphfg");
	this.shape.setTransform(43.9,48.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(6.8,10.8,74.3,72), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak/F6IhSjXIgekSIC2jrIFEg6ID2BWIBvGoIhqErg");
	mask.setTransform(43.2,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F75E8A").s().p("AgYF4QiagKhlh1Qhlh2AKiaQAKicB1hnQBzhnCZALQCaAKBlB1QBmB1gLCbQgLCbh0BnQhpBdiJAAIgaAAg");
	this.shape.setTransform(41.9,47.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(4.7,10,74.4,71), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak0CgIgqjXICAjHID9hGIDJAzIB3FJIhAD1IoDAYg");
	mask.setTransform(35.1,32.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGAzQhAhOAZgsQAphIAoAkQAUASAKAgQAKgbARgTQAjgkAmAtQAoAvhEBYQgiAsgpAjQglgegggng");
	this.shape.setTransform(34,36.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(22.3,24.4,23.4,24), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al6DSIhAkMICXkAIE6hjID/A3ICkGXIhDE2IqFA3g");
	mask.setTransform(44.3,41.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTBDQhVheAdg4QAwhcA1AsQAaAVAPAoQALgjAVgYQAqgvAyA3QA0A3hRByQgpA5gzAuQgvgkgqgwg");
	this.shape.setTransform(42.9,45.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(28.2,30.5,29.5,30.3), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak/F6IhSjXIgekSIC2jrIFEg6ID2BWIBvGoIhqErg");
	mask.setTransform(43.2,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjA6QhIhoAkg0QA8hVAuAxQAXAZAKAqQAPghAYgVQAwgqArA9QArA9hfBnQgvAzg3AoQgrgqgkg1g");
	this.shape.setTransform(42.1,44.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(27.3,29.4,29.6,30.6), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArWFrIhan6IE0nKIJWiXIHTCCIEEMJIigI4Iy1Adg");
	mask.setTransform(81.7,75.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4136B").s().p("Ak8EEQgsjQBNj4QA3izBui0QA2hbAsg2QHuJsjGHEQg+COh8BsQg9A2gxAaQjxi2g3kEg");
	this.shape.setTransform(82.3,89.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#40A8A8").s().p("AjqJuQB8hsA9iOQDFnEntpsQEfAADJDNQDLDOAAEhQAAEjjLDOQjJDNkfAAQAxgaA+g2g");
	this.shape_1.setTransform(114.8,89.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFC53F").s().p("ABNKGQh8g1hghhQjLjNAAkjQAAkiDLjOQDKjNEgAAQgsA3g3BaQhtC1g3CyQivI5G2FKQiNAAiBg4g");
	this.shape_2.setTransform(45.5,89.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(10.9,19.5,138.6,131), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#715732").s().p("AhZABIgUgHQAWAIBVAAQBdAAATgIQgKAFgLACQgWAGhEAAQhDAAgVgGg");
	this.shape.setTransform(11.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0.2,0,22.1,1.5), null);


(lib.Group_1_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B896").s().p("AAAACIgHgCIAHgBQAEgBADABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgFgBg");
	this.shape.setTransform(15.4,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B896").s().p("AAAAGQgLgBgBgBQgDgBAAgDIACgDQAEgCAIgBQAHgBAFABQAEACABAEQgDAHgBAAIgBABIgLgCg");
	this.shape_1.setTransform(15,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5B896").s().p("AgLAJIgCgBQgGgFAAgDQAAgDAFgEIAZgCIAJAJQgBAIgGACIgDAAIgVgBg");
	this.shape_2.setTransform(15,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5B896").s().p("AABAMIgMgBQgDgBgDgCQgFgEAAgEQAAgDAFgFIADgCIANgBQAHgBAFABQAGABAGAKQgBAJgJADIgIAAIgEAAg");
	this.shape_3.setTransform(15,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5B896").s().p("AgLANQgFgBgFgEQgFgFAAgDQAAgEAFgEQAEgEACAAQASgCAHABQAFABAGAFQAFAEAAACQABADgEAEQgDAGgHABIgJABIgPgBg");
	this.shape_4.setTransform(15,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5B896").s().p("AgKAQQgIgCgHgGQgIgHAIgJQAGgFAEAAQANgDAMACQAFABAHAEQAHAGABADQABADgEAEIgOAJg");
	this.shape_5.setTransform(15,21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B5B896").s().p("AgKARQgEgBgIgEIgGgEQgJgIAJgIQAGgGAHgCQAKgCAPABIALAFQALAGABAFQADAJgXAJIgNABIgKgBg");
	this.shape_6.setTransform(15,21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5B896").s().p("AgKATQgIgCgIgEIgGgFQgFgFACgFQABgEACgCQAHgHAKgDQAMgCANACQACAAALAFQAMAGACAGQABAFgJAIQgIAFgIABIgOACIgJgBg");
	this.shape_7.setTransform(15,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5B896").s().p("AgJAVQgTgFgHgHQgEgFAAgEQAAgCAEgFQACgEANgGQAFgCANgBQALAAAFACQARAIAEADQAHAGgEAIQgBADgLAFQgKAFgDAAIgRABIgFAAg");
	this.shape_8.setTransform(15,21.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5B896").s().p("AgJAVQgYgFgGgIQgLgNAagNQAGgDADAAQAZgBAIADQAOAFAFAEQAJAHgFAJQgEAJgXAGIgMABIgFAAIgGgBg");
	this.shape_9.setTransform(15,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5B896").s().p("AgIAXQgZgDgJgMQgHgIAJgJQAFgGAIgDQALgFAMAAQAOgBANAFQAdAKgIAPQgCAFgEACQgFADgTAHIgLABIgLgBg");
	this.shape_10.setTransform(15,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5B896").s().p("AgtAJQgFgHADgGQAEgIAJgFQAdgOAdALQAeALgHAPQgCAGgGAEQgEACgLAEQgJADgXABQgbgDgKgOg");
	this.shape_11.setTransform(15,21.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5B896").s().p("AgwAKQgFgHAEgIQADgHAIgEQALgGAMgDQAPgDAKADQATAGAIAEQASAKgFAMQgDAIgRAHQgKAEgFABIgWABQgfgDgKgPg");
	this.shape_12.setTransform(15,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B896").s().p("AgZAaQgTgGgHgLQgFgJAFgIQAFgHAHgDQAPgHAJgCQAQgDAKADQAyANgIAUQgDALgOAFIgTAGIgXABQgJAAgKgDg");
	this.shape_13.setTransform(14.9,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B896").s().p("AgwARQgJgIABgKQACgNAPgHQAjgQAhANQAhANgGARQgGATgnAFIgPABQgbAAgRgOg");
	this.shape_14.setTransform(14.9,21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5B896").s().p("Ag1AOQgLgOAJgLQAGgIAKgEQAfgPAlAMQAkANgGATQgGAVgsAFIgPABQggAAgPgTg");
	this.shape_15.setTransform(14.9,21.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B5B896").s().p("Ag4ARQgJgKADgLQAFgNATgJQAegOAmAMQAnAMgGAVQgFAXgtAGIgRABQghAAgTgSg");
	this.shape_16.setTransform(14.8,21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5B896").s().p("Ag6A7IARgaIA4hAIAngjQACgCAJgBQgYASgdAbQgzAxgZAtg");
	this.shape_17.setTransform(8,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B5B896").s().p("Ag8ARQgKgLAFgLQAFgMATgKQAdgPApALQArAMgFAYQgFAZgyAGIgRABQglAAgSgUg");
	this.shape_18.setTransform(14.7,21.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5B896").s().p("AhBARQgSgYAkgVQAggSAtANQAuANgFAZQgGAcg4AFIgPABQgqAAgRgWg");
	this.shape_19.setTransform(14.6,21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5B896").s().p("AhGAQQgKgPALgPQALgOAWgHQApgNApARQApASgQAYQgQAbg1ADIgLABQgtAAgQgag");
	this.shape_20.setTransform(14.6,21.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B5B896").s().p("AhKBRIACgEIAEgJIACgFIABgCIgBACIgCAFIgEAJIgCAEIgBAGgAg5ArIARgaIA4hAIAngjQAEgDARgBQhtBTggBAg");
	this.shape_21.setTransform(7.9,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5B896").s().p("AhHAWQgMgMAFgPQAFgPAQgJQAngXAzANQAzAOgEAbQgEAdg6ALQgQADgNAAQgmAAgWgXg");
	this.shape_22.setTransform(14.5,22);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5B896").s().p("AhNAWQgJgMACgLQADgYAsgQQAogPAuATQAuAUgNAaQgOAeg6AIIgVACQgsAAgWgbg");
	this.shape_23.setTransform(14.3,22.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B5B896").s().p("AhSAWQgKgOAEgPQAHgVAigOQAygUAxAWQAvAVgLAbQgOAig+AIQgMACgMAAQgvAAgXgeg");
	this.shape_24.setTransform(14.2,22.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B5B896").s().p("AglA0QgbgIgRgQQgOgOABgPQABgQARgOQAOgMAagHQAdgIAaAEIAnANQAmARgBAYQgBARgaARQgYAQgdAFQgKABgJAAQgQAAgRgEg");
	this.shape_25.setTransform(14,22.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B5B896").s().p("AhVAcQgQgRADgRQAEgWAcgPQA1gcA9AVQA8AUgKAkQgKAnhCAMQgQADgNAAQgwAAgeggg");
	this.shape_26.setTransform(13.9,22.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B5B896").s().p("AAFCUIAGgDQBAgogWg+QgJgdiDiiIgCgCQAoABAGAFIACABIAIAHIAnAmIAJAKIAnAuIAXAmIAJAZIADAMIABAMIgBAPIgFASIgHAOIgJAMIgVAVIgXAQIgVAKQAAAAABgBQAAAAABgBQAAAAAAAAQAAgBAAAAg");
	this.shape_27.setTransform(30.6,15.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B5B896").s().p("AAMCVQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAAAIAAgBIAEgCQAigZAGgdQAEgTgLgcQgCgGhOhgIg+hYIgBgCQA1ABAHAFIAwAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_28.setTransform(29.9,15.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B5B896").s().p("AAUCVQABgDgJgCIABAAIAEgDQA1gpgVgxQgGgQgLgNQgJgLgogsQgmgqgPgXIghgyIgBgCIANAAQA4AAAHAGIAwAuIAKAKIAmAuIAXAmIAKAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_29.setTransform(29.1,15.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B5B896").s().p("ABxCVQAAgDgNgDIABgBIADgCQA0gogZg1QgGgNgRgUQgNgOgcgcIgqgrQgWgbgFgJQgSgbgFgDQgUgLhIBDQhKBGgGA2IABgMIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_30.setTransform(19.8,15.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B5B896").s().p("ABxCVQABgEgUgDIABgBIADgCQAfgYACgdQACgTgKgSQgTgmiKh9QgdgMhCBAQhFBCACAzIgBgKIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_31.setTransform(19.8,15.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B5B896").s().p("ABxCVQACgFgbgDIAAgBIAEgCQAigagCghQgBgSgOgXQgFgJhBg5QhCg8gOgFQghgKhAA6QhDA9ALA0QgDgKAAgNIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_32.setTransform(19.8,15.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B5B896").s().p("ABxCVQABgFghgEIABAAIADgDQAfgYAAgdQACgTgMgSQgQgbg9guQg4grgUgGQgPgEgcAMQgcAMgaAXQhBA4ATA5QgHgSAAgSIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_33.setTransform(19.8,15.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B5B896").s().p("ABxCVQABgGgogEIABAAIADgDQBJg5hdhMQgvgkg+gbQgSgEgdAMQgeAMgZAWQg+A3AiA6QgQgXAAgbIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_34.setTransform(19.8,15.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B5B896").s().p("ABxCVQACgHgwgDQBLg1hQhFQgcgXgngVQghgRgQgDQgWgFghANQggAOgWAXQg6A8A7A7QgjggAAgoIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_35.setTransform(19.8,15.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B5B896").s().p("ABxCVQACgHg4gEIAJgHQBAg2hQg/QgegWgogQQglgPgWABQgdACgeATQggASgOAbQgQAeAKAaQgJgSAAgVIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_36.setTransform(19.8,15.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B5B896").s().p("ABxCVQABgIg/gDQAOgJAJgLQAogyhIg2QhDgzhBALQgeAFgbASQgaASgKAZQgZA9BdArIAEACQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_37.setTransform(19.8,15.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B5B896").s().p("ABxCVQACgIhJgEQAWgNAKgSQAbgyhMgtQhIgrg5AQQhCARgNAyQgNA4BTAkIAEACQgDACAAABQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_38.setTransform(19.8,15.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B5B896").s().p("ABxCVQABgJhRgDQAYgOAJgRQAbgwhFgqQhDgpg/AQQhGASgGAyQgGA1BTAgQgIACABACQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_39.setTransform(19.8,15.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B5B896").s().p("ABxCVQABgFgagDQgZgDgngBQAXgNALgSQAdgvhDgoQhAgmhAARQhFASgBAyQgBAzBNAaQgLADABACQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_40.setTransform(19.8,15.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B5B896").s().p("ABxCVQACgFgegDQgcgEgsAAQAagOAMgSQAggwhCgkQg+gihAAQQg+ARgFAsQgEAwBOAcIAGACQgPADgBADQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_41.setTransform(19.8,15.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B5B896").s().p("ABxCVQABgFgggEQghgDgxgBQAggMAQgZQAagrg+ghQg9gfg9ARQhCATAEAtQAFAuBOAWQgXADAAAEQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_42.setTransform(19.8,15.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B5B896").s().p("ABxCVQABgFgggEQghgDgvgBIgRABQAdgLASgSQAMgLAEgMQAOglg+gbQg+gag6AXQg/AaATAqQARAnA+AOIAHABQgiADAAAFQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_43.setTransform(19.8,15.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B5B896").s().p("ABxCVQABgFgggEQghgDgvgBQgcAAgXACQAxgFAagaQAUgUgCgRQgDgrhFgNQhGgNgsAiQgqAgAkAkQAhAiA5ABIAIAAQg+ADAAAHQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_44.setTransform(19.8,15.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B5B896").s().p("ABxCVQABgFghgEQgggDgvgBQguAAgiAEQgiADgBAFQgggOgVgVQgfgeAAgmIABgOIADgMIAKgZQAJgTAOgTQAbghAMgMQAggiAagVQAHgGA5AAQA4AAAHAGQAfAaAcAeQAQARAWAdQAPAUAIASQAKATADASQAFAjgWAeQgXAggvAVg");
	this.shape_45.setTransform(19.8,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_62, new cjs.Rectangle(0,0,39.6,30.3), null);


(lib.Group_1_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B08A53").s().p("AAAFXIAAqsIABAAIgBKsg");
	this.shape.setTransform(1.7,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B08A53").s().p("AAAlWIADAAIgCKsIgBAAIgCAAg");
	this.shape_1.setTransform(1.5,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B08A53").s().p("AgBFWIABqsIACABIgCKrg");
	this.shape_2.setTransform(0.2,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_61, new cjs.Rectangle(0,0.1,1.9,68.6), null);


(lib.Group_1_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B08A53").s().p("AAAFWIAAqsIABABIgBKsIAAgBg");
	this.shape.setTransform(0.1,34.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_60, new cjs.Rectangle(0,0,0.3,68.6), null);


(lib.Group_1_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B08A53").s().p("AAAlVIAAgBIADAAIgCKsIgBAAIgCAAg");
	this.shape.setTransform(0.7,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B08A53").s().p("AAAFWIgBAAIABqsIABAAIABABIgBKsg");
	this.shape_1.setTransform(2.1,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_59, new cjs.Rectangle(0.4,0,1.9,68.7), null);


(lib.Group_1_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6824E").s().p("AAAlVIABAAIACgBIgCKsIgBAAIgCABg");
	this.shape.setTransform(1.5,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6824E").s().p("AgBFWIABqsIACABIgCKrg");
	this.shape_1.setTransform(0.2,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_58, new cjs.Rectangle(0,0.1,1.8,68.6), null);


(lib.Group_1_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6824E").s().p("AAAFWIAAqsIABABIgBKsIAAgBg");
	this.shape.setTransform(0.1,34.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_57, new cjs.Rectangle(0,0,0.3,68.6), null);


(lib.Group_1_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6824E").s().p("AgBFXIACqsIABAAIgCKsg");
	this.shape.setTransform(0.5,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6824E").s().p("AAAlVIADAAIgCKrIgBAAIgCABg");
	this.shape_1.setTransform(0.7,34.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A6824E").s().p("AAAFWIgBAAIABqsIABABIABABIgBKrg");
	this.shape_2.setTransform(2.1,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_56, new cjs.Rectangle(0.3,0.1,2,68.7), null);


(lib.Group_1_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AAXAaQAAgRg1gjQAJAFA0AAIgBABQgIAGACAQQACAYgBABg");
	this.shape.setTransform(3.1,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AAHAaQAAgKgbgWIgagUIAZABQAWABARADQAGACAJgBIAOgBIgGABQgRANgGAKQgFAHgCAKIgBAHg");
	this.shape_1.setTransform(4.7,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AgDABQAKgJAAgBQAHgBACgBQgSAMgNALIAMgLg");
	this.shape_2.setTransform(11.5,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AgPALQAJgKACgGQACgDgBgCQgCgCgGAAQAbgBAGgEQgdATgOAQIAGgHg");
	this.shape_3.setTransform(11.1,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQgrAcgJATIAIgOQAFgHABgEQAAgBAAgBQgBAAAAgBQAAAAgBAAQgBgBAAAAQgEgCgGADIgIADQgHAFgCAFQgCAGgCAHIgCAIIgEgBg");
	this.shape_4.setTransform(6.6,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQgkAYgMAPQADgGAAgEQgBgFgJADQgLADgEANIAAACQABAGgEACQgEAAgBgBg");
	this.shape_5.setTransform(6.6,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQgoAagKARIAAgBQADgFgCgDQgCgDgFABIgFACQgGAFgCAHIgDAHQgFAAgBgBg");
	this.shape_6.setTransform(6.6,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQgrAcgIARQABgEgCgDQgBgDgFACIgEABQgDADgCAFIgDADIgCAEQgFAAgBgBg");
	this.shape_7.setTransform(6.6,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg0AigBARIAAgLQgEgDgFAEIgFAGQgBAFgDABQgGAAgBgBg");
	this.shape_8.setTransform(6.6,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgBgBIAAgIIgCgCQgDgBgGAFIgCAEQgBADgCABg");
	this.shape_9.setTransform(6.6,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgBAAQgBgHgBgBQgDgDgGAGQgBAEgEACQgHAAgBgBg");
	this.shape_10.setTransform(6.6,2.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgBgBQgBgIgGACIgFAEIgDAEg");
	this.shape_11.setTransform(6.6,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgBAAIAAgBQgEgLgIAKIgDADg");
	this.shape_12.setTransform(6.6,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgBAAIgBgBQgCgFgFACQgEACAAABIgCACQgJAAgBgBg");
	this.shape_13.setTransform(6.6,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgCAAIAAgBQgCgEgEABQgDAAgCACIgCADIgKgBg");
	this.shape_14.setTransform(6.6,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgCAAQgCgEgDAAIgEACIgDADQgKAAgBgBg");
	this.shape_15.setTransform(6.6,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgCABIgBgBQgDgDgDAAIgDACIgCACQgKAAgBgBg");
	this.shape_16.setTransform(6.6,2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgDABIAAgBQgCgCgEAAIgEADIgGAAQgEAAgCgBg");
	this.shape_17.setTransform(6.6,2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgDABIgBgBQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAIgEADQgKAAgCgBg");
	this.shape_18.setTransform(6.6,2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgEABIAAgBIgDgBIgGACIgFAAQgFAAgCgBg");
	this.shape_19.setTransform(6.6,2.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIAAgBQgCgBgGACQgKAAgCgBg");
	this.shape_20.setTransform(6.6,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARIgFABIgBAAQgDgCgDACIgBAAQgKAAgCgBg");
	this.shape_21.setTransform(6.6,2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AAAAbQgKAAgCgBQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARQgBABgFAAIgBgBQgCgBgDACg");
	this.shape_22.setTransform(6.6,2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARQgBABgGAAIAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAIgBAAQgKAAgCgBg");
	this.shape_23.setTransform(6.6,2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFEFEF").s().p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARQgCABgLAAQgKAAgCgBg");
	this.shape_24.setTransform(6.6,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_55, new cjs.Rectangle(0,0,13.3,5.5), null);


(lib.Group_1_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_54, null, null);


(lib.Group_1_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_53, null, null);


(lib.Group_1_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_52, null, null);


(lib.Group_1_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_51, null, null);


(lib.Group_1_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#88693E").s().p("AAAgFIABgCIAAANIgBABg");
	this.shape.setTransform(0.1,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88693E").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_1.setTransform(0.3,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#88693E").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_2.setTransform(0.5,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88693E").s().p("AgBgFIADgCIAAANIgDACg");
	this.shape_3.setTransform(0.8,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#88693E").s().p("AgBgFIADgBIAAAMIgDABg");
	this.shape_4.setTransform(1.1,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#88693E").s().p("AgBgFIADgCIAAAOIgDABg");
	this.shape_5.setTransform(1.5,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#88693E").s().p("AgBgGIADgBIAAANIgDACg");
	this.shape_6.setTransform(2,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88693E").s().p("AgCgFIAFgBIAAAMIgFABg");
	this.shape_7.setTransform(2.5,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#88693E").s().p("AgCgFIAFgCIAAAOIgFABg");
	this.shape_8.setTransform(3.1,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#88693E").s().p("AgDgGIAHgBIAAANIgHACg");
	this.shape_9.setTransform(3.8,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#88693E").s().p("AgDgFIAHgBIAAAMIgHABg");
	this.shape_10.setTransform(4.6,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#88693E").s().p("AgEgFIAJgCIAAANIgJABg");
	this.shape_11.setTransform(5.5,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#88693E").s().p("AgFgFIALgBIAAAMIgLABg");
	this.shape_12.setTransform(6.6,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#88693E").s().p("AgGgFIANgBIAAAMIgNABg");
	this.shape_13.setTransform(7.9,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#88693E").s().p("AgGgFIANgCIAAAOIgNABg");
	this.shape_14.setTransform(9.3,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#88693E").s().p("AgGgGIANAAIAAAMIgNACg");
	this.shape_15.setTransform(10.7,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#88693E").s().p("AgFgGIALAAIAAAMIgLABg");
	this.shape_16.setTransform(12,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#88693E").s().p("AgFgFIALgBIAAANIgLAAg");
	this.shape_17.setTransform(13.3,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#88693E").s().p("AgHgGIAPAAIAAAMIgPABg");
	this.shape_18.setTransform(14.8,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#88693E").s().p("AgQgFIAigBIAAAMIgiABg");
	this.shape_19.setTransform(17.3,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#88693E").s().p("AgFAHIAAgMIALgBIAAANg");
	this.shape_20.setTransform(19.7,0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#88693E").s().p("AgEgGIAJAAIAAANIgJAAg");
	this.shape_21.setTransform(20.8,0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_22.setTransform(21.7,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_23.setTransform(22.5,0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_24.setTransform(23.3,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_25.setTransform(24.1,0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_26.setTransform(24.9,0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_27.setTransform(25.7,0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_28.setTransform(26.5,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANIgJAAg");
	this.shape_29.setTransform(27.4,0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#88693E").s().p("AgEAHIAAgNIAJABIAAAMg");
	this.shape_30.setTransform(28.4,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_31.setTransform(29.4,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_32.setTransform(30.4,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#88693E").s().p("AgEAGIAAgMIAJAAIAAANg");
	this.shape_33.setTransform(31.5,0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#88693E").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_34.setTransform(32.6,0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_35.setTransform(33.8,0.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#88693E").s().p("AgFAHIAAgNIAKAAIAAANg");
	this.shape_36.setTransform(34.9,0.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#88693E").s().p("AgFAHIAAgNIALABIAAAMg");
	this.shape_37.setTransform(36,1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#88693E").s().p("AgFAGIAAgMIALAAIAAANg");
	this.shape_38.setTransform(37.1,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#88693E").s().p("AgFAHIAAgNIALABIAAAMg");
	this.shape_39.setTransform(38.3,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#88693E").s().p("AgFAGIAAgMIALABIAAAMg");
	this.shape_40.setTransform(39.5,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#88693E").s().p("AgGAGIAAgMIANABIAAAMg");
	this.shape_41.setTransform(40.8,1.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#88693E").s().p("AgHAGIAAgNIAPACIAAANg");
	this.shape_42.setTransform(42.3,1.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#88693E").s().p("AgaAAIAAgOQA1AIAAAHIAAAOQAAgJg1gGg");
	this.shape_43.setTransform(45.8,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_50, new cjs.Rectangle(0.1,0,48.4,3.9), null);


(lib.Group_1_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBBBBB").s().p("AAAALIAAgVIAAAVg");
	this.shape.setTransform(1,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CDCDCD").s().p("AAAgKIAAAAIAAAVg");
	this.shape_1.setTransform(0.6,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1D1D1").s().p("AAAALIAAgVIAAAVg");
	this.shape_2.setTransform(1,68.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEDEDE").s().p("AAAALIAAgVIAAAVg");
	this.shape_3.setTransform(0.9,68.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("AAAALIAAgVIAAAVg");
	this.shape_4.setTransform(0.9,68.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AAAALIAAgVIAAAVg");
	this.shape_5.setTransform(0.8,68.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_49, new cjs.Rectangle(0.6,0,0.5,70), null);


(lib.Group_1_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AgKACQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAIACgCIAZABQgEACgIABIgFABIgHgBg");
	this.shape.setTransform(24.1,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AgRgBQABgDAFgBIAYABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACACgFADIgYADQgHgEAAgDg");
	this.shape_1.setTransform(24.1,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AgOAGIgEgDQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAgCADgCQADgCADAAIAYAAQAHABABAEQABADgFADQgCACgZAAg");
	this.shape_2.setTransform(24.1,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AgKAJIgHgCQgHgGAAgBIANgIIAXABQALABABAFQACACgGAFIgFACIgWABIgDAAg");
	this.shape_3.setTransform(24.1,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AgJAKQgGAAgFgDQgHgDAAgEQAAAAAHgEQAHgEACAAQASgCAFABQAIACAIAGQACADgFAEQgDACgHABIgRABIgHAAg");
	this.shape_4.setTransform(24.1,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AgJALQgKgBgFgCQgHgEAAgDQABgBAIgFQAHgEAEAAQASgCAFABQAOADAGAHQABADgFADQgFAFgRAAIgPAAg");
	this.shape_5.setTransform(24.1,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AgJAMQgMgBgGgDQgIgEABgDQAAgCAJgFQAJgFAFAAIALgBQAIAAAEABIANAEQAJAEABADQABADgEADQgEADgNADIgPABIgJgBg");
	this.shape_6.setTransform(24.1,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AgJANQgNgBgJgEIgFgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgDAIgEQAKgGAIAAQASgBAIABQAMACAKAIIACABIgBABQgBAFgCABQgEAEgQADIgOABIgKgBg");
	this.shape_7.setTransform(24.1,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AgJAPQgNgBgNgGQgGgCAAgFQAAgDAHgDIAWgIQARgCAGABIAKADQALADAEADIAFAFQABADgEADIgXAIIgOABIgKAAg");
	this.shape_8.setTransform(24.1,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AgJAQQgXgEgGgDQgFgCAAgFIACgDQACgEACgBIAZgIQARgCAFABIAPAEIAMAEQAHAEAAADQACADgEAEQgDADgMADQgNADgOAAIgJAAg");
	this.shape_9.setTransform(24.1,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AgKARQglgDAAgMQAAgGARgHIARgFQAkgEASANQAFAEABADQABACgDAEQgLAMgiAAIgKgBg");
	this.shape_10.setTransform(24.2,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AgKASQgngEAAgMQgBgHASgGQAJgEAKgCQAXgCATAFQAMAEADADQALAHgHAHQgEADgJADQgPAGgUAAIgKgBg");
	this.shape_11.setTransform(24.2,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AgKAUQgqgEAAgNQgBgIAUgHQAJgEAKgCQAbgDAUAHQAKADAFAEQAJAIgGAGQgDAEgKADQgQAGgWAAIgKAAg");
	this.shape_12.setTransform(24.2,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AgKAVQgsgEgBgOQgBgIAUgIQAMgFAKgBQAcgDATAGQAMAEAGAGQAIAGgFAHQgEAEgKAEQgSAGgZAAIgHAAg");
	this.shape_13.setTransform(24.2,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("Ag2ALQgMgKAWgLQAXgNAbABQAWABAQAIQASAIgEAIQgGASguACIgGAAQgnAAgPgMg");
	this.shape_14.setTransform(24.2,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEFEF").s().p("AgMAZQgxgEgBgQQgCgPAngKQApgKAiASQAUALgLAKQgPAQgvAAIgJAAg");
	this.shape_15.setTransform(24.4,8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AgIAaQg3gBgCgTQgCgJATgKQAQgIAOgCQAtgHAdASQAQAMgIAJQgQARgwAAIgIAAg");
	this.shape_16.setTransform(24.4,8.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEFEF").s().p("AgbAaQgdgEgJgIQgPgOAggPQAhgRAlAGQAQACAQAJQARAJgBAIQAAAKgTAHQgQAHgYACIgKABQgMAAgQgDg");
	this.shape_17.setTransform(24.5,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEFEF").s().p("AgaAcQgggFgKgIQgRgOAjgRQAjgSAiAEQAXADASALQAQAKgCAIQgCAOgfAJIgeAHIgEAAQgKAAgXgEg");
	this.shape_18.setTransform(24.6,8.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AgPAjQgkgIgLgEQgIgDgEgEQgPgOAigTQAjgUAiACQAZADAVAMQAWANgDAKQgEAVhCAMIgJAAQgHAAgIgBg");
	this.shape_19.setTransform(24.8,8.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFEFEF").s().p("AgRAnQg3gOgHgHQgQgOAlgWQAlgXAeABQAYABAaAPQAcAPgCANQgCAMgcAMQgZALgWABIgJABQgIAAgIgCg");
	this.shape_20.setTransform(24.9,8.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEFEF").s().p("AglAmIghgKQgogRAtgcQAWgPAfgMQAZgHAlARQAiAQAFARQAFATgrAQIgtAMIgDABQgLAAgdgJg");
	this.shape_21.setTransform(25,7.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AgCA1QgSgCgagKQgmgPgGgEQgGgEADgKQAEgLAdgWQAbgVAPgEQAZgIAqAVQAoAUAFARQACAIgEAGQgDAEgIAGQgwAYgDABQgOAEgMAAIgGAAg");
	this.shape_22.setTransform(25.1,7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("AgLA6QgMgCgYgKQglgPgHgFQgJgGACgKQAEgNAdgZQAbgZAPgEQAZgIAuAYQAsAXAGATQADAIgEAHIgJAJIgRAJQgaASgRAFQgKADgLAAQgIAAgKgCg");
	this.shape_23.setTransform(25.2,7.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFEFEF").s().p("AAoCRIgqglIgWgXIghgsIgQgeIgEgKIgHgaIgEghIABgHIAAgBQAEgZAjgbQAXgRAdgPIABABQgoAXgRAYQgNASADANQATAzAgAuQANAWAkAoQAkApAPAWQgtgCgEgEg");
	this.shape_24.setTransform(8.9,15.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFEFEF").s().p("ABgCXQg5AAgHgGIgpglIgXgXIghgsIgPgeIgFgKIgHgaIgEghIABgHIAAgBQAEgZAjgbQAXgRAegPQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQghAUgQAXQgOAVAEAOQAJATAOAXQAaAwAZAdQArAvAQAVQAQATAGAOg");
	this.shape_25.setTransform(9.7,15.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EFEFEF").s().p("AAVCRIgpglIgWgXIghgsIgQgeIgEgKIgIgaIgDghIAAgHIAAgBQAEgZAkgbQAWgRAfgPQgBACAIACQhDAsAQApIAxBOQANASA8BBQAWAYAUAaIgWABQg4AAgIgGg");
	this.shape_26.setTransform(10.7,15.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFEFEF").s().p("AgeAgQAsgjAbgiIADgFIgDAFIgGAHIgUAXIg1AwIgFACg");
	this.shape_27.setTransform(29.8,25.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("Ag0A9QAvgkAbgfQAPgRALgRIACgEIACgCIAJgSIgJASIgCACIgCAEIgIAOIgIALIgJALIgKAKIg/A9QgDACgKABgABAhFIgBACIgCADIADgFg");
	this.shape_28.setTransform(31,23.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFEFEF").s().p("AhKBWQB/hRAXhZIABgCIgBACIgDANIgHATIgQAeIgHALIglAsIg1AwQgFAEgXACg");
	this.shape_29.setTransform(30.7,21.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EFEFEF").s().p("Ag/CRIg2gxIgsg3IgQgeIgEgKIgJgjIgCgYIABgHIAAgBQAEgZAjgbQAXgRAegPQgBADAOACIgEADQglAbgJAXQgGAPAFALIApA/QAQAXATAVQBSBbAVgCQCKhCANhnIgBAIIgFAYIgHASIgQAeIgsA3Ig2AxQgHAGg7AAQg4AAgHgGg");
	this.shape_30.setTransform(19.3,15.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EFEFEF").s().p("AhACRIg2gxIgsg3IgQgeIgEgKIgHgaIgEghIABgHIAAgBQAEgZAjgbQAXgRAegPQAAADASADQgZATgNARQgSAaALAXIABABIAIAIQAHAFACADQAEAGAHAOIAMAUIAIAJQAQAVAZAYQAoAoAXANQANAIAMgBQApgDA1g8QAhgmALggIgDAOIgHASIgQAeIgsA3Ig2AxQgHAGg6AAQg5AAgHgGgAC/gfIACgeQACASgGAVg");
	this.shape_31.setTransform(19.4,15.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFEFEF").s().p("Ag/CRIg2gxIgsg3IgQgeIgEgKIgHgaIgEghIABgHIAAgBQAEgZAjgbQAXgRAegPQgBAEAYADIgDADQgjAcgHAWQgFAQAIAPIABACIAJAIQAHAFACADIAMAUIANATIAIAKQAVAYAXAUQA0AvAdgDQAxgCAyhCQAdgkAGgeIgBAHIgFAYIgHASIgQAeIgsA3Ig2AxQgHAGg7AAQg4AAgHgGg");
	this.shape_32.setTransform(19.3,15.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFEFEF").s().p("AhACRIg2gxIgsg3IgPgeIgFgKIgJgjIgCgYIABgHIAAgBQAEgZAjgbQAXgRAegPQAAAFAdADQgdAWgMAYQgJATAHAMIA6BJQAPASAbAWQAvAlAfgBQAegDAmggQAogjAMgmQALgigFgSIgCgFIABADIADAGIABAGIABAPIgBADIAAAJIgHAgIgHASIgQAeIgsA3Ig2AxQgHAGg6AAQg5AAgHgGg");
	this.shape_33.setTransform(19.4,15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AhACRIg2gxIgsg3IgPgeIgFgKIgHgaIgEghIABgHIAAgBQAEgZAjgbQAXgRAegPQAAAFAjAEIgDACQgkAfgFAYQgCANAIANIABACIAKAIQAHAFADADIAPAUQAIAOAFAFIAKAKQASATAMAHQAwAmAigCQAggCAigdQAmggAMgnQAJgegFgQQgCgHgFgHIAFAHIAGAMIABAGIABAPIgBADIAAAJIgHAgIgHASIgQAeIgsA3Ig2AxQgHAGg6AAQg5AAgHgGgAC1hbIAAAAIgBgCIABACIAAAAg");
	this.shape_34.setTransform(19.4,15.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQgBAGAqADQgdAZgJAWQgKAUAIAMQBLBRAJAGQAYASAQAIQAZALAWgBQAggCAhgdQAigcALgjQAJgfgFgQQgCgGgFgHIAHAKIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHgACzhdIgDgDIgCgDIACADIADADgACEiEQgNgIgSgJIgBgCIAeARIAaARIALAKIAHAIQgOgQgcgRg");
	this.shape_35.setTransform(19.4,15.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFEFEF").s().p("AhACSIg2gxIgsg4IgPgeIgFgJIgJgjIgCgZIABgGIAAgBQAEgZAjgbQAXgRAegPQgBAGAxADQgaAYgLAVQgKAVAHAMIA8A+IAQAOIAYARIAWALQAZAKAUgBQAfgCAegZQAggZAMgmQAJgcgFgOQgIgWgsgbIgfgSQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIAfARIAaARIALALIAPARIAEAGIAGAMIABAGIABAPIgBADIAAAIIgHAgIgHASIgQAeIgsA4Ig2AxQgHAGg6AAQg5AAgHgGg");
	this.shape_36.setTransform(19.4,15.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQAAAIA2ACQgkAigEAYQgDANAIANIBCA8IAZASQAMAHAPAGQAXAHARgBQAYgCAYgPQApgZASg7QALgfhAgnQgOgIgRgKIABgBIgBgCIAeARIAaARIALAKIAPASIAEAGIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHg");
	this.shape_37.setTransform(19.4,15.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQgBAIA+ACQgkAkgEAXQgDANAJANQBOBBAFADQAlAVAggCQAjgCAbgaQAcgYANgnQAJgfg9gnIghgRQABgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAIgBgCIAeARIAaARIALAKIAPASIAEAGIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHg");
	this.shape_38.setTransform(19.4,15.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQgBAJBGACQgiAhgHAYQgDANAEAHQADAFAIAFIAsAmQAXASAEAAQAkAWAjgCQAtgEAfgqQAQgVAHgUQADgKgJgNQgLgUgkgWIghgSQAFgBABgCIgBgCIAeARIAaARIALAKIAPASIAEAGIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHg");
	this.shape_39.setTransform(19.4,15.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQAAAFAWACQAVADAhABIgCADQgjAkgFAWQgCANAJAMIAHAFIBFAwQAkARAegCQApgEAgglQAOgUAIgTQACgKgIgMQgOgWgngXIgagNQAHgCABgCIgBgCIAeARIAaARIALAKIAPASIAEAGIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHg");
	this.shape_40.setTransform(19.4,15.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQAAAFAYACQAYAEAlAAIgDADQgjAkgFAXQgEANAHAKIAaATQAhAXAhANIANAFQASADAQgCQAmgEAegiQAPgRAIgQQAFgghIgmIgUgKQANgDAAgCIgBgCIAeARIAaARIALAKIAPASIAEAGIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHg");
	this.shape_41.setTransform(19.4,15.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQAAAFAbADQAbADApAAQgnAmgIAXQgEANAHALIBWAyIANAEQASABARgBQAegDAdgbQAZgYADgPQABgIgKgMQgQgWgsgXIgTgJQARgDAAgDIgBgCIAeARIAaARIALAKIAPASIAEAGIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHg");
	this.shape_42.setTransform(19.4,15.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQAAAFAdADQAdADApAAIAFAAIgBADQgKAJgVAXQgbAgAGAKQARAYBFAcIAPADQASADAPgDQAZgEAdgXQAcgXAAgOQABgOgYgTQgVgRgggPIgOgHQAXgCABgEIgBgCIAeARIAaARIALAKIAPASIAEAGIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHg");
	this.shape_43.setTransform(19.4,15.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFEFEF").s().p("AhACRIg2gwIgsg4IgPgeIgFgKIgJgjIgCgYIABgGIAAgBQAEgaAjgaQAXgRAegQQAAAFAdADQAdADApAAIAUAAIgDADQgQAMgUAVQgbAdAEAMQAFAPApASQAnAQAUACQAhAAAjgXQARgMALgNQAQgRgigbQgQgNgagMQgUgKgMgDQAigDABgFIgBgCIAeARIAaARIALAKIAPASIAEAGIAGAMIABAGIABAOIgBAEIAAAIIgHAgIgHASIgQAeIgsA4Ig2AwQgHAHg6AAQg5AAgHgHg");
	this.shape_44.setTransform(19.4,15.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFEFEF").s().p("AhACSQgkgegSgTQgbgcgRgcQgQgZgHgXQgFgSgBgIQgCgSABgNQAEgaAjgbQAXgRAegPQAAAEAdAEQAdADApAAQApAAAegDQAegDAAgFQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQA2AbAXAdQALAMADAMQAEANgDATQgFAtgfAuQgRAYgUAVQgWAWggAbQgHAGg6AAQg5AAgHgGg");
	this.shape_45.setTransform(19.4,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_48, new cjs.Rectangle(0,0.1,38.8,30.4), null);


(lib.Group_1_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_47, null, null);


(lib.Group_1_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(6.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AAAgBIABAAIABACIgCABQAAgBAAgBQAAAAgBAAQAAAAABgBQAAAAAAAAg");
	this.shape_1.setTransform(6.8,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIABAAIABACIAAACIgCABIAAgDg");
	this.shape_2.setTransform(6.8,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AgBAAIABgDIABABQABABAAADIAAABIgCABg");
	this.shape_3.setTransform(6.9,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AgBgBIAAgBIABgCIAAAAIACADIAAADIAAACIgCABQgBgDAAgDg");
	this.shape_4.setTransform(6.9,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AgCgBIACgEIAAAAIACAEIABADIgBADIgCAAQgBgBgBgFg");
	this.shape_5.setTransform(6.9,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AgBACIgBgDIACgEIABAAQACACAAAFIAAAEIgDAAIgBgEg");
	this.shape_6.setTransform(6.9,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AAAAHIgCgGIAAgCQAAgFABAAIABAAQADACAAADIAAACIAAAGg");
	this.shape_7.setTransform(6.9,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AAAAHIgBgCIgBgEIgBgDIACgFIABAAQADADABAFQAAAGgBAAIgBABIgCgBg");
	this.shape_8.setTransform(6.9,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AAAAIQgDgEAAgEQgBgGADgBIABAAQACAAABAHQABAFgBADIgBAAIgCAAg");
	this.shape_9.setTransform(6.9,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AAAAJQgDgEAAgFQgBgFADgDIABAAQACABACAHQABAGgCADIgBAAIgCAAg");
	this.shape_10.setTransform(6.9,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AAAAKQgDgEgBgGIAAgEQABgEACgBIABAAQACABACAIQACAHgCADIgCAAIgCAAg");
	this.shape_11.setTransform(6.9,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AAAALQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgDgEAAgFIAAgEQAAgEACgBIACAAIABACIADAHQACAJgCADIgCAAIgCAAg");
	this.shape_12.setTransform(7,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AAAAMQgDgDgCgLIAAgEQABgEACgBIACAAQABAAADAJQAEALgEADIgBAAIgDAAg");
	this.shape_13.setTransform(7,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AAAANQgFgGAAgKQgBgLAGABQACAAACAKQACAGAAAFIgBAGIgBAAIgEgBg");
	this.shape_14.setTransform(7,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEFEF").s().p("AAAAOIgEgIQgEgKADgIQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQACgBABAEIAEALQACAGAAAFIgCAGIgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_15.setTransform(7.1,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AABAQIgFgJQgGgRAFgGQAEgDACAEIAFAMQADAJAAAHIgDAFIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_16.setTransform(7.1,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEFEF").s().p("AAAASIgFgKQgEgLAAgIQABgGACgCQADgDADAEQABACAEALQAEAJABAIIAAAFIgBACIgCACg");
	this.shape_17.setTransform(7.3,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEFEF").s().p("AgBATQgEgFgDgGQgDgJAAgKQgBgJADgDIACgBIADAAQACACAFANQAJATAAAGIAAAGIgFADQgEAAgEgGg");
	this.shape_18.setTransform(7.5,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AAHAdQgHgBgHgKQgLgTADgUQABgFADgCIAEAAQACACAFANIAPAdQADAKgEACIgFABIgCAAg");
	this.shape_19.setTransform(7.9,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFEFEF").s().p("AgaAbQAyglAAgRIADABIgBADQgHAOgTARIgWASIgCACg");
	this.shape_20.setTransform(2.7,2.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEFEF").s().p("AgbAaQAzglAAgRIAEABIgCADQgJAXgkAbIgDACQgFgBAAgBg");
	this.shape_21.setTransform(2.8,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AgbAaQAzglgBgRIAFABIAAACQgHAOgSASIgXAWQgHgCAAgBg");
	this.shape_22.setTransform(2.8,2.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("AgcAaQAzglAAgRIAFABIgBADQgDAIgNAQQgNAQgNALIgCACQgLgCAAgBg");
	this.shape_23.setTransform(2.9,2.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFEFEF").s().p("AgcAZQAzgkAAgRIAGABIgBABQgGANgKANQgMAPgMAMIgCACQgOgCAAgCg");
	this.shape_24.setTransform(2.9,2.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFEFEF").s().p("AgcAZQAzgkgBgRIAHABIAAACIgBABQgGAMgJAMIgPATIgIAIIgCACQgQgBAAgDg");
	this.shape_25.setTransform(2.9,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EFEFEF").s().p("AgcAZQAyglAAgRIAHABIAAABQgHAQgHALIgYAeQgTgCAAgDg");
	this.shape_26.setTransform(2.9,3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFEFEF").s().p("AgdAZQAzglAAgRIAIABIgBADQgKATgEAGQgGAJgQAVQgWgDAAgCg");
	this.shape_27.setTransform(3,3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("AgdAZQAzglgBgRIAJACIgBABIgBACQgHAQgKAQIgPAWQgZgCAAgDg");
	this.shape_28.setTransform(3,3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFEFEF").s().p("AgdAZQAyglAAgRIAJACIAAAAQgIASgFAJQgFAKgMASIgBACQgcgDAAgCg");
	this.shape_29.setTransform(3,3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EFEFEF").s().p("AALAJIgWgSIAXASIgBAAg");
	this.shape_30.setTransform(11.8,4.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EFEFEF").s().p("AgeAZQAzglAAgRIAKACIgBABIAAABQgKAXgGAKIgNAWQgegBgBgEg");
	this.shape_31.setTransform(3.1,3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFEFEF").s().p("AAZAbQgfgYgNgQQgGgJAAgEIAAgBQAAARA0AlIgBABg");
	this.shape_32.setTransform(10.3,2.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFEFEF").s().p("AgeAYQAzgkAAgRIAKABIgBACIgOAiIgMAWQgigCAAgEg");
	this.shape_33.setTransform(3.1,3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AgQgKQgLgOABgCIACgBQAAARAzAlQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgagUgPgSg");
	this.shape_34.setTransform(10.3,2.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFEFEF").s().p("AgeAYQAzgkgBgRIALABIgBABIgLAeIgMAbQglgBAAgFg");
	this.shape_35.setTransform(3.1,3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFEFEF").s().p("AAXAcQgegagNgQQgGgIAAgEIACgBQAAARAzAlIgDABg");
	this.shape_36.setTransform(10.3,2.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFEFEF").s().p("AgeAYQAygkAAgRQACABAJAAIgBACIgUA4QgogBAAgFg");
	this.shape_37.setTransform(3.1,3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFEFEF").s().p("AAXAcQgfgbgMgPQgGgJAAgDIACgBQAAARAzAkQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_38.setTransform(10.2,2.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EFEFEF").s().p("AgfAYQAzgkAAgRQABABAKAAIAAACIgBAAIgQA4QgsgBgBgFg");
	this.shape_39.setTransform(3.2,3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFEFEF").s().p("AAVAcQgvgqAAgNIACgBQAAARAzAlQAAABgFABg");
	this.shape_40.setTransform(10.2,2.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EFEFEF").s().p("AgfAYQAzglAAgRQACACAKAAIgCADIgNA4QgwgCAAgFg");
	this.shape_41.setTransform(3.2,3.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EFEFEF").s().p("AATAcQgTgTgMgNQgGgHgFgJIgDgHIACgBQAAARA0AlQgBABgHACg");
	this.shape_42.setTransform(10.2,2.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EFEFEF").s().p("AgQAcQgPgBAAgDQAzglgBgRQADACAKAAIAAAAQgGAKgGAxQgUgBgQgCg");
	this.shape_43.setTransform(3.2,3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFEFEF").s().p("AASAcIgdggIgQgXIAEgBQAAARAzAlQAAABgKACg");
	this.shape_44.setTransform(10.2,2.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFEFEF").s().p("AgfAYQAzglgBgRQADACAKAAIAAABQgGAJgBAxQg4gBAAgGg");
	this.shape_45.setTransform(3.2,3.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EFEFEF").s().p("AAQAdIgYgdQgMgNgEgKIgDgEQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAQAAARAzAlQAAABgMACg");
	this.shape_46.setTransform(10.1,2.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EFEFEF").s().p("AgfAYQAyglAAgRQADACAKAAIgBABIAAAAQgDAFgBAWQgBAXACAIQg7gBAAgGg");
	this.shape_47.setTransform(3.2,3.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EFEFEF").s().p("AAMAdIgng4IAEgBQAAARA0AkQgBADgPABg");
	this.shape_48.setTransform(10.1,2.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EFEFEF").s().p("AAfAfQg/gBAAgGQAzglAAgRQACACALAAIAAAAIgBABIAAABQgCAFgBAKQgCAUAGAWg");
	this.shape_49.setTransform(3.3,3.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFEFEF").s().p("AAIAdIgDgGIgSgbIgMgTQgBgEgCgBQAFAAABgBQAAARAzAlQgBADgTACg");
	this.shape_50.setTransform(10.1,3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFEFEF").s().p("AAdAfQg/gBAAgGQAzglAAgRQACACALAAIABAAQgGAGACAVQABAUAFAKIACACg");
	this.shape_51.setTransform(3.5,3.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EFEFEF").s().p("AADAdQgBgFgDgHIgZgqIgCgDQAFAAABgBQAAARAzAlQgBADgZACg");
	this.shape_52.setTransform(10,3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EFEFEF").s().p("AAaAfQg/gBAAgGQAzglAAgRQACACALAAIABAAQgGAIADAUQADATAIAJIACADg");
	this.shape_53.setTransform(3.8,3.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EFEFEF").s().p("AhAAYQA0glAAgRIAAAAQACACAKAAQALAAACgCQAAARA0AlQgBAGhAABQhAgBAAgGg");
	this.shape_54.setTransform(6.5,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_46, new cjs.Rectangle(0,0,13,6.1), null);


(lib.Group_1_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_45, null, null);


(lib.Group_1_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AACAFIgBgDIgCgGQADAGAAADg");
	this.shape.setTransform(5.1,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AAIAMIAAgDIgBgCIgBgBQgEgHgJgKQAPAOAAAJg");
	this.shape_1.setTransform(4.5,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AAOARQgCgJgMgMIgNgMQAbAVAAAMg");
	this.shape_2.setTransform(3.9,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_44, new cjs.Rectangle(2.6,1.9,2.8,3.5), null);


(lib.Group_1_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_43, null, null);


(lib.Group_1_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_42, null, null);


(lib.Group_1_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_41, null, null);


(lib.Group_1_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_40, null, null);


(lib.Group_1_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_39, null, null);


(lib.Group_1_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_38, null, null);


(lib.Group_1_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_37, null, null);


(lib.Group_1_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_36, null, null);


(lib.Group_1_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9A9A9").s().p("AAAALIAAgVIAAAVg");
	this.shape.setTransform(0.8,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0A0A0").s().p("AAAALIAAgVIAAAVg");
	this.shape_1.setTransform(0.9,68.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B9B9B").s().p("AAAALIAAgVIAAAVg");
	this.shape_2.setTransform(0.9,68.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_35, new cjs.Rectangle(0.8,67.8,0.1,2.2), null);


(lib.Group_1_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_34, null, null);


(lib.Group_1_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AAiA6IgIgHIAHAGIARALQAKAHADAHIAAABgAAEAdIgHgJIgIgJIgCgCIACACIAIAJIAHAJIAWAWIgWgWgAgUAAIgHgIIAOARgAgdgLIgBgCIgDgFIADAFIABACIACADgAgqgeIgOgeIgDgKQAJAaARAagAg+hSIADAMIgDgMg");
	this.shape.setTransform(6.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_33, new cjs.Rectangle(0.5,4.6,12.6,16.5), null);


(lib.Group_1_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_32, null, null);


(lib.Group_1_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_31, null, null);


(lib.Group_1_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_30, null, null);


(lib.Group_1_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AgDAJQgFgDgEgGQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAQADgEAIgCQAGgDAFABQADABABAKQABALgDABIgCAAQgFAAgIgDg");
	this.shape.setTransform(15.2,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AABATQgGgCgFgDQgCgBgBgFQgEgIABgIQABgGABgBQAEgDAIgBQAGgBAFACQACAAACAGIADAIQACASgFAFIgFABIgHgBg");
	this.shape_1.setTransform(15.2,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AACAZQgFgBgFgDIgIgNQgEgJACgKQABgIADgCQAEgCAIgBQAGgBAFACQACABAEAHQAEAHABAEQACAVgIAHIgGABIgGAAg");
	this.shape_2.setTransform(15.2,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AADAeQgGgBgEgDQgCAAgEgHQgFgHgCgFQgEgKADgMQACgJAEgCQAEgCAIgBQAHgBAFACQACABAGAIQAFAKABAEQACAXgLALQgDABgEAAIgEAAg");
	this.shape_3.setTransform(15.2,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AgGAgQgLgKgFgPQgGgOAGgNIAHgKQAMgFAMAEQADABAGAIQAIAKAAAHQADAXgOAQg");
	this.shape_4.setTransform(15.2,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AgFAkQgOgNgHgRQgGgRAHgNIAJgLQANgFAMAEQADABAIAJQAJALABAJQABAPgHAQQgEAIgEAEQgEACgEAAQgGAAgHgDg");
	this.shape_5.setTransform(15.2,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AAFAqQgFAAgEgCQgSgQgHgSQgHgRAIgPQAFgKAHgDQAMgEAMADIAMALQAMAMABAKQABASgJARQgEAIgFAFQgDABgFAAIgDAAg");
	this.shape_6.setTransform(15.2,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AgDAsQgVgPgIgYQgEgKABgLQACgKADgDQALgNACgBQAMgEANAEIANAKQAOANABAMQABAOgEAKQgCAIgHAKIgIALQgDABgFAAQgFAAgGgCg");
	this.shape_7.setTransform(15.2,16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AgBAwQgGgEgIgIQgOgPgGgRQgIgXAMgOIAHgIQAEgEAEgCQAMgEAMAEIAPAKQAPANABAPQABASgDAHQgGAQgNAQQgFACgEAAQgGAAgEgCg");
	this.shape_8.setTransform(15.2,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AAAA0QgHgFgIgIQgQgRgHgTQgFgQAEgMQADgHAIgKQAGgIAGgBQAOgDAKADIAQAKQAQAOABARQADAYgNAVQgGALgHAGQgEACgFAAIgJgCg");
	this.shape_9.setTransform(15.2,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AAAA4QgWgPgNgaQgGgMgCgLQgCgQAGgLQAJgNANgHQALgEAOAEIARAKQARAOACAUQACAZgNAYQgHALgHAHQgEACgFAAIgKgCg");
	this.shape_10.setTransform(15.2,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AACA8QgFgEgJgHQgQgQgKgUQgGgLgBgLQgDgTAJgNQACgEAJgHIAMgHQAKgEAPAEIASALQASAOACAVQACAagOAaQgHANgIAIQgEACgFAAIgJgCg");
	this.shape_11.setTransform(15.1,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AAEBBQgGgEgKgJQgSgRgLgXQgQghAQgZQADgEAJgGQAIgGAFgBQAJgEAQAEIATALQATAPACAXQADAbgPAcQgIAOgIAJQgEACgFAAIgIgBg");
	this.shape_12.setTransform(15.1,16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AAGBGQgHgFgLgKQgVgUgKgZQgSgnAUgYQATgXAfAIIAUALQAVAQACAZQAFApgiArQgFADgGAAIgGgBg");
	this.shape_13.setTransform(15.1,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AAIBLQgIgEgMgNQgXgWgLgbQgTgqAXgZQAVgWAeAIIAVALQAWARADAaQAEAqgjAxQgFACgHAAIgEAAg");
	this.shape_14.setTransform(15.1,17.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEFEF").s().p("AALBQQgHgBgRgTQgXgYgOgeQgOgeAMgaQAKgYAagFQAZgFAWARQATAPAGAUQAIAegSAqQgKAVgLAQQgFAEgGAAIgDgBg");
	this.shape_15.setTransform(15,17.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AAPBWQgKgBgWgbQgZgcgLgaQgPghAPgbQANgYAZgEQAYgFAXAQQAVAQAGAWQAIAfgSAtQgKAYgLARQgFAEgGAAIgCAAg");
	this.shape_16.setTransform(14.9,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEFEF").s().p("AgPA+QgdghgMgdQgIgRAAgSQABgjAggPQAigRAkAaQAnAdgTBIQgIAbgMAVQgMAUgHAAQgJAAgagfg");
	this.shape_17.setTransform(14.8,18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEFEF").s().p("AgIBHQgfghgPgeQgJgRgEgTQgGgnAfgWQAhgXAuAZQAPAJAJATQAJATgBAUQgCAZgRAwQgRAwgIAAIgBAAQgGAAgageg");
	this.shape_18.setTransform(14.8,18.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AA4CWIARgPQA+g9APg6QAKglgKggQgJgchPgdQg+gYghgEQg6gGg3AcQgaAOgRAPIALgLIAZgUIApgXIAEgCQASgIBVAAQBQAAARAIIAEACIAjATIAfAYIAQARIAJASIACAHIAAAJIgCAZIgFAWIgSAnIgNAVIgyA4IgqAkQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAg");
	this.shape_19.setTransform(20.6,15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFEFEF").s().p("AA6CVIAQgQQBGhJAEhEQACgjgMgVQgPgTgtgRQgtgRgzgGQiEgQgrBBIABgCIAIgLIALgLIAZgUIApgXIAEgCQARgIBVAAQBRAAARAIIAEACIAjATIAfAYIAQARIAJASIACAHIAAAJIgCAZIgGAWIgRAnIgNAVIgyA4IgrAkQABgBgGgCg");
	this.shape_20.setTransform(20.1,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEFEF").s().p("AA6CVIAPgQQBEhNABhEQABgigOgTQgOgRgwgQQgxgQg2gEQiKgLgWBFIABgDIAGgNIAIgLIALgLIAZgUIApgXIAEgCQARgIBUAAQBSAAARAIIAEACIAjATIAfAYIAQARIAJASIACAHIAAAJIgCAZIgGAWIgRAnIgNAVIgyA4IgrAkQABgCgJgBg");
	this.shape_21.setTransform(19.8,15.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AA3CUIAPgQQBBhMgBhEQgBgjgOgTQgQgSgygNQgxgOg2gCQiJgEgKBCIABgGIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgCgNgCg");
	this.shape_22.setTransform(19.8,15.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("AA0CUIADgDIALgNQA/hOgEhDQgBgjgPgTQgNgNg5gQQhIgUhBAIQhjANABA7IgBgOIABgHIABgGIAGgNIAJgLIAKgLIATgPIAvgcIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQAAgDgPgBg");
	this.shape_23.setTransform(19.8,15.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFEFEF").s().p("AAxCTIADgCIALgOQA8hPgGhCQgFgxgbgNQgigQg5gJQhFgLguAMQg7APgMAZQgIAQAJAnQgGgWAAgXIABgHIABgGIAGgNIAJgLIAKgLIAZgUIAugZQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQAAgCgSgDg");
	this.shape_24.setTransform(19.8,15.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFEFEF").s().p("AAuCTIANgQQAuhCAEgyQAEhNgrgQQhTgYhIAAQiRACAxB4IAAAAQgQgiAAgkIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgDgWgCg");
	this.shape_25.setTransform(19.8,15.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EFEFEF").s().p("AArCTIAMgRQAagnALggQALghgCggQgCgpgQgRQgJgKgegJQhVgZhPAOQhXAOAPBFQgFgUAAgTIABgHIABgGIAGgNIAJgLIAKgLIAZgUIAugZQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgDgZgCg");
	this.shape_26.setTransform(19.8,15.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFEFEF").s().p("AAoCSIACgCIAJgOQAmg8AFgwQADgigOgmQgGgOgQgJQgdgQhEgGQicgMgBBPQAAALADALQgHgWAAgWIABgHIABgGIAGgNIAJgLIAKgLIAZgUIAugZQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQAAgDgbgDg");
	this.shape_27.setTransform(19.8,15.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("AAlCSQAcgsALgiQAWg+gUgwQgJgVgTgLQgigShNgBQiYgCAcBeQAWBIBhBRIAAAAQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQAAgDgegDg");
	this.shape_28.setTransform(19.8,15.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFEFEF").s().p("AAiCSQAgg3AKgrQAJgqgLgkQgJgfgPgKQgVgNhBgFQgzgEgqAKQgyALgFAYQgHAjATAoQAYA1BDA6IAPAOQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgEgigCg");
	this.shape_29.setTransform(19.8,15.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EFEFEF").s().p("AAfCSQAWgrAKgdQASg4gLglQgMgogOgKQgRgMg/gGQgxgEgqAKQgyAKgEAWQgQBVB1BmIAOAOQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQAAgEgkgCg");
	this.shape_30.setTransform(19.8,15.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EFEFEF").s().p("AAcCSQAdg9AIgnQAHgngLglQgIgdgPgJQgTgMg4gEQglgDgjAEQg/AJgGAeQgPBQByBlIAPANIgCACQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgFgogBg");
	this.shape_31.setTransform(19.8,15.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFEFEF").s().p("AAZCSQAUgvAIgeQAPg2gKgjQgLgogUgLQgPgIgxgEQgygDghAHQgxAKgFAdQgIAoAYAqQAXAsA5AzIAPANIgDACQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgFgrgBg");
	this.shape_32.setTransform(19.8,15.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFEFEF").s().p("AAVCRQAYg9AHgiQAIgogIgeQgKgmgVgMQgPgIgrgDQiggLAaBeQATBBBLBGIAPANIgEACQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgFgvgCg");
	this.shape_33.setTransform(19.8,15.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AASCRQAVg+AHgaQAKgqgGgYQgLgsgVgOQgOgJgpgDQgSgBgUABQgnACgbAJQgKAEgEAFQgIAIgDATQgIAqAgAyQAWAiAtAqIAOANIgFADQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAggYIAngVQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgFgygCg");
	this.shape_34.setTransform(19.8,15.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFEFEF").s().p("AA0CUQgPgCgXgBQAZhRAFgWQAGgcgGgXQgKgrgWgOQgNgJgkgCQiVgLAZBcQASBABGBEIAOANQgHABAAACQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgCgQgCg");
	this.shape_35.setTransform(19.8,15.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFEFEF").s().p("AAzCUQgQgCgYgBQAfh2gDgmQgFg8hHgFQiFgJANBSQAKA+BMBMIAOAOQgIABgBACQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgCgRgCg");
	this.shape_36.setTransform(19.8,15.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFEFEF").s().p("AAyCUQgRgCgagBIAPg0QAKghADgUQAGgfgEgSQgIgngbgQQgOgJgZgCQhxgIgCBEQgDA9BXBZIANANQgKACgBACQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgCgSgCg");
	this.shape_37.setTransform(19.8,15.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFEFEF").s().p("AAxCTQgSgCgbAAQADgRALgkQAKgiAEgTQAGgZgFgXQgDgUgMgQQgTgZgkgDQhfgIgNA3QgPA6BfBmIANAOQgNABgBADQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgDgTgCg");
	this.shape_38.setTransform(19.8,15.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EFEFEF").s().p("AAwCTQgTgCgdAAQACgOATg5QAOgsgEgcQgDgagQgUQgPgVgWgFQgdgIgeAHQghAIgOAWQgmA5BsB2IANANQgSADAAACQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgDgUgCg");
	this.shape_39.setTransform(19.8,15.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFEFEF").s().p("AAwCTQgTgCgcAAIgEAAQACgQASg3QAPgsgEgcQgDgVgLgRQgPgagggIQgegHgdAKQgnAQgDAwQgBAeAaAoQAQAYAxA4QgWACAAADQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgDgUgCg");
	this.shape_40.setTransform(19.8,15.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EFEFEF").s().p("AAwCTQgTgCgcAAIgJAAQADgPASg4QAQgsgEgcQgDgXgPgTQgQgXgcgGQgOgCgXAFQgeAGgOASQgqA0BwB9IAKALQgbADgBADQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgDgUgCg");
	this.shape_41.setTransform(19.8,15.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EFEFEF").s().p("AAwCTQgTgCgcAAIgPAAQAohpgEgmQgDgZgRgTQgQgTgXgFQgagFgXAKQgZALgIAXQgUA9BlBmIAJAKQgkABgBAFQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIAZgUIApgXIAFgCQARgIBUAAQBRAAARAIIAFACIAiATIAgAYIAPARIAKASIABAHIABAJIgDAZIgFAWIgSAnIgNAVIgyA4IgqAkQABgDgUgCg");
	this.shape_42.setTransform(19.8,15.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EFEFEF").s().p("ABDCYQABgDgUgCQgTgCgcAAQgaAAgUACQgUACgBADQiDhoAAhjIABgGQACgMAFgHQAHgLAMgLQAcgZArgUQARgIBUgBQBRABARAIQA4AaAaAeQAKAMAEAMQADAMgCAUQgFAsghAvQgQAWgWAWQgVAWgiAbg");
	this.shape_43.setTransform(19.8,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_29, new cjs.Rectangle(0,0,39.6,30.5), null);


(lib.Group_1_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AAAABIAAgBIAAAAIABAAIAAACg");
	this.shape.setTransform(6.4,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AAAADQAAgBAAgBQgBAAAAgBQAAAAAAAAQAAAAABgBIABgBQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAABIgBACg");
	this.shape_1.setTransform(6.3,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AAAADIgBgCIAAgDIABAAIACADIgBADg");
	this.shape_2.setTransform(6.4,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AAAAEQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgCIAAgCIABgBQACACAAADQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgBABIAAgBg");
	this.shape_3.setTransform(6.3,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AAAAFIAAAAIgBgEQgCgDACgCIABAAIADAFIgCAEIAAAAIgBAAg");
	this.shape_4.setTransform(6.3,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AAAAGIAAgBIgCgDIABgGQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIADAGQAAABgBAAQAAABAAAAQAAABAAAAQAAABgBAAg");
	this.shape_5.setTransform(6.3,5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AAAAGIgCgEIAAgEIAAgDIACAAIACAEIABADQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIAAAAIgBAAg");
	this.shape_6.setTransform(6.3,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AAAAHIgCgDQgBgDABgEIAAgCIACgBIADAFIAAAEQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAg");
	this.shape_7.setTransform(6.3,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AAAAHIgBgCQgCgFAAgDIABgEIACAAIADAGIABAEQgBAEgBAAIgBABIgBgBg");
	this.shape_8.setTransform(6.3,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AAAAIIgBgBIgCgHQAAgHABAAQAAAAABAAQAAgBAAAAQABAAAAABQAAAAAAAAIACADIACAEQABAHgDABg");
	this.shape_9.setTransform(6.3,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AgBAHQgCgCAAgFIABgIIACAAIACADIACAFQAAAIgCABIgCAAg");
	this.shape_10.setTransform(6.3,4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AAAAKIgBgCQgDgEAAgGQAAgGABgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIACADQACAEABADIgBAHIgCACg");
	this.shape_11.setTransform(6.3,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AABALIgCgCQgDgFAAgGQgBgIACgBIADABIAAABQAFAGAAAIQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIAAgBg");
	this.shape_12.setTransform(6.2,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AgCAHQgDgHAAgFQAAgDABgCIABgCIADABIACADQADAEAAADQADAJgDADIgDACQgCAAgCgGg");
	this.shape_13.setTransform(6.2,4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AgBAKIgEgKIgBgEQgBgJADAAIAEABIAEAHQAFAMgEAGIgDABQgCAAgBgEg");
	this.shape_14.setTransform(6.2,4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEFEF").s().p("AgCAKQgFgKAAgGIAAgFQAAgEADAAQACgBACADIAFAIQAGAOgFAGIgDABQgDAAgCgGg");
	this.shape_15.setTransform(6.1,4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AgBAMQgHgOAAgHQgBgJAEAAIAFADQAGAEACAOQADAPgGAAIgBAAIgBABQgDgCgBgFg");
	this.shape_16.setTransform(6,4.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEFEF").s().p("AAAAPQgJgQgBgJIAAgJQABgCADAAIAHAEIADAFIAEAIQADAIAAAJQAAAHgDACIgBAAIgDABQgCgBgCgHg");
	this.shape_17.setTransform(5.8,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEFEF").s().p("AACAUIgPghQgCgGACgGQADgCAEABIAIAGIAJAQQAEAJAAAJQAAAKgEADIgEAAQgCAAgDgHg");
	this.shape_18.setTransform(5.5,3.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AgbAbQAGgTAvgjIABAAIABACQg1AkAAARg");
	this.shape_19.setTransform(10.6,3.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFEFEF").s().p("AgcAcQADgKANgOQAPgPATgOIACgDQAFACAAACQg1AkAAARg");
	this.shape_20.setTransform(10.5,3.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEFEF").s().p("AgcAcQAIgWApghIABgBQAHACAAACQg1AkAAARIgEgBg");
	this.shape_21.setTransform(10.5,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AgdAcQAKgZAmgeIAAgBQALACAAACQg1AkAAARg");
	this.shape_22.setTransform(10.5,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("AgdAcQAFgMAKgMQAJgLAVgVQAOABAAADQg1AkAAARQgBgBgFAAg");
	this.shape_23.setTransform(10.4,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFEFEF").s().p("AgdAdQADgKAKgPQAKgKAUgXQAQADAAADQg1AkAAARQgBgBgFAAg");
	this.shape_24.setTransform(10.4,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFEFEF").s().p("AgeAdQAOgdAbgcIAAgBQAUACAAAEQg1AkAAARQgBgBgHAAg");
	this.shape_25.setTransform(10.4,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EFEFEF").s().p("AgeAdQAMgcAZgdIABgBQAXADAAADQg1AkAAARg");
	this.shape_26.setTransform(10.3,3.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFEFEF").s().p("AgeAdIAOgcQAHgLANgSIABgBQAaACAAAEQg1AkAAARQgBgBgHAAg");
	this.shape_27.setTransform(10.3,3.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("AgeAdIARghIAPgYIAAgBQAdADAAADQg1AkAAARQgBgBgHAAg");
	this.shape_28.setTransform(10.3,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFEFEF").s().p("AgeAcIAMgcIASgdQAfABABAFQg1AkAAARg");
	this.shape_29.setTransform(10.3,3.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EFEFEF").s().p("AgTgOIACgBQAXARANAOQgNgNgZgRg");
	this.shape_30.setTransform(2,2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EFEFEF").s().p("AgfAdIAMgdIAPgdIABAAQAjACAAAEQg1AkAAARg");
	this.shape_31.setTransform(10.2,3.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFEFEF").s().p("AgbgaIACgBQAsAgAJAVIAAABIgCABQAAgRg1glg");
	this.shape_32.setTransform(2.8,3.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFEFEF").s().p("AgfAdQADgFADgKIAFgOIANgdIAAAAQAnABAAAFQg1AkAAARg");
	this.shape_33.setTransform(10.2,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AgbgZIADgCQApAfALAWIAAACIgCAAQAAgRg1gkg");
	this.shape_34.setTransform(2.8,3.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFEFEF").s().p("AgfAdIAVg6IAAAAQAqABAAAFQg1AkAAARg");
	this.shape_35.setTransform(10.2,3.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFEFEF").s().p("AgbgZQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQAoAeALAYIAAABIgCAAQAAgRg1gkg");
	this.shape_36.setTransform(2.8,3.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFEFEF").s().p("AgfAdQAFgJANgxIAAgBQAtACABAGQg1AkAAARIgLgCg");
	this.shape_37.setTransform(10.2,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFEFEF").s().p("AgcgZIAHgDQAjAdAOAbIgCABQgBgRg1glg");
	this.shape_38.setTransform(2.9,3.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EFEFEF").s().p("AggAdQAGgLAJgvIAAgBQAyACAAAGQg1AkAAARQgCgCgKAAg");
	this.shape_39.setTransform(10.1,3.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFEFEF").s().p("AgcgZQABgBAHgCQAcAXAVAgIAAABIgEABQAAgRg1glg");
	this.shape_40.setTransform(2.9,3.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EFEFEF").s().p("AggAdQAEgEAEgZQADgWAAgHIAAgBQAWABARACQAPACAAADQg1AkAAARQgCgCgKAAg");
	this.shape_41.setTransform(10.1,3.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EFEFEF").s().p("AgcgZQABgCAKgBQARATANAOQAHAHAJAPIAAABIgEABQAAgRg1glg");
	this.shape_42.setTransform(2.9,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EFEFEF").s().p("AggAdQAEgFACgVQACgUgBgNQA6ABAAAHQg1AkAAARQgBgCgLAAg");
	this.shape_43.setTransform(10.1,3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFEFEF").s().p("AgdgYQABgCANgCIAeAiIAOAWIABAAIgFABQgBgRg1gkg");
	this.shape_44.setTransform(3,3.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFEFEF").s().p("AggAdQACgEACgKQADgRgFgcQAbAAASACQASADAAADQg1AkAAARQgBgCgLAAg");
	this.shape_45.setTransform(10.1,3.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EFEFEF").s().p("AgdgYQABgCAQgDQAZAeAKARIAGAKIABABIgGABQAAgRg1glg");
	this.shape_46.setTransform(3,3.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EFEFEF").s().p("AgfAdIgBAAQAEgEABgKQACgTgIgZIgBgBIAEAAQAbAAATACQASADABADQg1AkAAARQgCgCgLAAg");
	this.shape_47.setTransform(10,3.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EFEFEF").s().p("AgdgYQABgCAVgDIAXAjIAGALIAIALIAAABIgGABQAAgRg1glg");
	this.shape_48.setTransform(3,3.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EFEFEF").s().p("AgcAdIgBAAQAGgDgCgYQgBgJgFgNIgFgJIAAgBIAJAAQAbAAATACQASADABADQg1AkAAARQgCgCgLAAg");
	this.shape_49.setTransform(9.7,3.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFEFEF").s().p("AgdgYQABgEAcgBQAAAGAFAIIAZArIAAABIgGABQAAgRg1glg");
	this.shape_50.setTransform(3,3.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFEFEF").s().p("AgYAdIgCAAQAEgCABgLQgBgJgCgKQgCgJgFgIQgEgGgDgCIgCgBIAAAAIAAgBIARAAQAaAAAUACQASADABADQg1AkAAARQgCgCgLAAg");
	this.shape_51.setTransform(9.3,3.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EFEFEF").s().p("AAAAdQgKAAgBACIgBAAQAAgRg2glQABgDAUgCQAUgCAaAAQAcAAATACQATADAAADQg2AkAAARQgBgCgMAAg");
	this.shape_52.setTransform(6.7,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_28, new cjs.Rectangle(0,0,13.4,6.1), null);


(lib.Group_1_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_27, null, null);


(lib.Group_1_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_26, null, null);


(lib.Group_1_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_25, null, null);


(lib.Group_1_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_24, null, null);


(lib.Group_1_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AAMgJIgQAQIAAABIgHACQANgKAKgJg");
	this.shape.setTransform(1.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AAWgTIgNARIgJAMQgBACAAAEQgQABgEADQAfgXAMgQg");
	this.shape_1.setTransform(2.3,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AgbAVQAGgBgBgQIgEgVQAAgEABgFIAAAAIADABQAAARAyAjQgIgFgvgBg");
	this.shape_2.setTransform(10.1,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AgXAVIgOAAQALgDAFgLQADgGABgKIABgQIABgBIADABQAAARAyAjQgJgGg0AAg");
	this.shape_3.setTransform(9,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AgQgPIgFAJQgLAQAEADQADACAHgCQAJgCAIgIQADgDADgKIADgPIABgBIAEABQAAARAzAjQgJgGg2AAQg3AAgJAGQAkgZALgRg");
	this.shape_4.setTransform(6.4,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AgNgWQgBAFgDAHQgHAKAEACQACACAFgBQAGgCAGgFIAJgWIAFABQAAARAzAjQgJgGg2AAQg3AAgJAGQAtgfAFgSg");
	this.shape_5.setTransform(6.4,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AgNgUIgBAEQgEAKADADIAHAAQAIgEAHgSIAAgBQAFAAABABQAAARAzAjQgJgGg2AAQg3AAgJAGQAsgeAGgRg");
	this.shape_6.setTransform(6.4,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AgNgUIgBADQgBAEABADIAGADQAHgCAHgRIABAAQAFAAABABQAAARAzAjQgJgGg2AAQg3AAgJAGQArgeAHgRg");
	this.shape_7.setTransform(6.4,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AgMgVIgBACQgBAEACACQACADAFgCQAFgDAFgKIABgBQAGAAABABQAAARAzAjQgJgGg2AAQg3AAgJAGQAtgfAGgRg");
	this.shape_8.setTransform(6.4,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AgMgZIAAAFIABAFIAFABQAGgBAFgKIAAgBIAIABQAAARAzAjQgJgGg2AAQg3AAgJAGQAzgjAAgRg");
	this.shape_9.setTransform(6.4,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AgLgaQAAAHABABQABADAEgBQAFgBAFgJQAHAAABABQAAARAzAjQgJgGg2AAQg3AAgJAGQAzgjABgSg");
	this.shape_10.setTransform(6.4,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AgMgZIABgBIACAHQACADAEgCQADgCADgFIABgBQAIAAABABQAAARAzAjQgJgGg2AAQg3AAgJAGQAzgjAAgRg");
	this.shape_11.setTransform(6.4,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AgMgZIABAAIABAEIADADQAFAAAFgHIABgBIAJABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_12.setTransform(6.4,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AgMgZIABAAIABACQACAEAEgBQAEAAADgGIAAAAIAKABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_13.setTransform(6.4,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AgMgZIACAAIAAABQACAFAFgCQADgBACgDIABgBIAKABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_14.setTransform(6.4,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEFEF").s().p("AgMgZIACAAQADAIAIgIIABgBIALABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_15.setTransform(6.4,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AgMgZIACAAQAFAGAGgGIABgBIALABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_16.setTransform(6.4,2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEFEF").s().p("AgMgZIADgBQAEAHAGgHIAAAAQAKAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_17.setTransform(6.4,2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEFEF").s().p("AgMgZIADgBQAFAFAEgEIABgBQAKAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_18.setTransform(6.4,2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AgMgZIAEgBQAEAEAEgDIAAgBQALAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_19.setTransform(6.4,2.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFEFEF").s().p("AgMgZQAAAAABAAQAAAAABgBQAAAAABAAQABAAABAAQADADAEgCIAAgBQALAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_20.setTransform(6.4,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEFEF").s().p("AgMgZIAFgBQADADAEgDIAAAAQALAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_21.setTransform(6.4,2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AgMgZQABgBAFAAQADACACgBIABgBIAAAAQALAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_22.setTransform(6.4,2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("AgMgZQABgBAFAAQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIABgBIAAAAQALAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_23.setTransform(6.4,2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFEFEF").s().p("AgMgZQACgBAKAAQALAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	this.shape_24.setTransform(6.4,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_23, new cjs.Rectangle(0.1,0,12.8,5.5), null);


(lib.Group_1_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_22, null, null);


(lib.Group_1_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AAAACIgHgCIAHgBQAEgBADABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgFgBg");
	this.shape.setTransform(15.4,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AAAAGQgLgBgBgBQgDgBAAgDIACgDQAEgCAIgBQAHgBAFABQAEACABAEQgDAHgBAAIgBABIgLgCg");
	this.shape_1.setTransform(15,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AgLAJIgCgBQgGgFAAgDQAAgDAFgEIAZgCIAJAJQgBAIgGACIgDAAIgVgBg");
	this.shape_2.setTransform(15,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AABAMIgMgBQgDgBgDgCQgFgEAAgEQAAgDAFgFIADgCIANgBQAHgBAFABQAGABAGAKQgBAJgJADIgIAAIgEAAg");
	this.shape_3.setTransform(15,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AgLANQgFgBgFgEQgFgFAAgDQAAgEAFgEQAEgEACAAQASgCAHABQAFABAGAFQAFAEAAACQABADgEAEQgDAGgHABIgJABIgPgBg");
	this.shape_4.setTransform(15,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AgKAQQgIgCgHgGQgIgHAIgJQAGgFAEAAQANgDAMACQAFABAHAEQAHAGABADQABADgEAEIgOAJg");
	this.shape_5.setTransform(15,21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AgKARQgEgBgIgEIgGgEQgJgIAJgIQAGgGAHgCQAKgCAPABIALAFQALAGABAFQADAJgXAJIgNABIgKgBg");
	this.shape_6.setTransform(15,21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AgKATQgIgCgIgEIgGgFQgFgFACgFQABgEACgCQAHgHAKgDQAMgCANACQACAAALAFQAMAGACAGQABAFgJAIQgIAFgIABIgOACIgJgBg");
	this.shape_7.setTransform(15,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AgJAVQgTgFgHgHQgEgFAAgEQAAgCAEgFQACgEANgGQAFgCANgBQALAAAFACQARAIAEADQAHAGgEAIQgBADgLAFQgKAFgDAAIgRABIgFAAg");
	this.shape_8.setTransform(15,21.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AgJAVQgYgFgGgIQgLgNAagNQAGgDADAAQAZgBAIADQAOAFAFAEQAJAHgFAJQgEAJgXAGIgMABIgFAAIgGgBg");
	this.shape_9.setTransform(15,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AgIAXQgZgDgJgMQgHgIAJgJQAFgGAIgDQALgFAMAAQAOgBANAFQAdAKgIAPQgCAFgEACQgFADgTAHIgLABIgLgBg");
	this.shape_10.setTransform(15,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AgtAJQgFgHADgGQAEgIAJgFQAdgOAdALQAeALgHAPQgCAGgGAEQgEACgLAEQgJADgXABQgbgDgKgOg");
	this.shape_11.setTransform(15,21.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AgwAKQgFgHAEgIQADgHAIgEQALgGAMgDQAPgDAKADQATAGAIAEQASAKgFAMQgDAIgRAHQgKAEgFABIgWABQgfgDgKgPg");
	this.shape_12.setTransform(15,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AgZAaQgTgGgHgLQgFgJAFgIQAFgHAHgDQAPgHAJgCQAQgDAKADQAyANgIAUQgDALgOAFIgTAGIgXABQgJAAgKgDg");
	this.shape_13.setTransform(14.9,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AgwARQgJgIABgKQACgNAPgHQAjgQAhANQAhANgGARQgGATgnAFIgPABQgbAAgRgOg");
	this.shape_14.setTransform(14.9,21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEFEF").s().p("Ag1AOQgLgOAJgLQAGgIAKgEQAfgPAlAMQAkANgGATQgGAVgsAFIgPABQggAAgPgTg");
	this.shape_15.setTransform(14.9,21.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("Ag4ARQgJgKADgLQAFgNATgJQAegOAmAMQAnAMgGAVQgFAXgtAGIgRABQghAAgTgSg");
	this.shape_16.setTransform(14.8,21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEFEF").s().p("Ag6A7IARgaIA4hAIAngjQACgCAJgBQgYASgdAbQgzAxgZAtg");
	this.shape_17.setTransform(8,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEFEF").s().p("Ag8ARQgKgLAFgLQAFgMATgKQAdgPApALQArAMgFAYQgFAZgyAGIgRABQglAAgSgUg");
	this.shape_18.setTransform(14.7,21.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AhBARQgSgYAkgVQAggSAtANQAuANgFAZQgGAcg4AFIgPABQgqAAgRgWg");
	this.shape_19.setTransform(14.6,21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFEFEF").s().p("AhGAQQgKgPALgPQALgOAWgHQApgNApARQApASgQAYQgQAbg1ADIgLABQgtAAgQgag");
	this.shape_20.setTransform(14.6,21.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEFEF").s().p("AhKBRIACgEIAEgJIACgFIABgCIgBACIgCAFIgEAJIgCAEIgBAGgAg5ArIARgaIA4hAIAngjQAEgDARgBQhtBTggBAg");
	this.shape_21.setTransform(7.9,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AhHAWQgMgMAFgPQAFgPAQgJQAngXAzANQAzAOgEAbQgEAdg6ALQgQADgNAAQgmAAgWgXg");
	this.shape_22.setTransform(14.5,22);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("AhNAWQgJgMACgLQADgYAsgQQAogPAuATQAuAUgNAaQgOAeg6AIIgVACQgsAAgWgbg");
	this.shape_23.setTransform(14.3,22.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFEFEF").s().p("AhSAWQgKgOAEgPQAHgVAigOQAygUAxAWQAvAVgLAbQgOAig+AIQgMACgMAAQgvAAgXgeg");
	this.shape_24.setTransform(14.2,22.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFEFEF").s().p("AglA0QgbgIgRgQQgOgOABgPQABgQARgOQAOgMAagHQAdgIAaAEIAnANQAmARgBAYQgBARgaARQgYAQgdAFQgKABgJAAQgQAAgRgEg");
	this.shape_25.setTransform(14,22.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EFEFEF").s().p("AhVAcQgQgRADgRQAEgWAcgPQA1gcA9AVQA8AUgKAkQgKAnhCAMQgQADgNAAQgwAAgeggg");
	this.shape_26.setTransform(13.9,22.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFEFEF").s().p("AAFCUIAGgDQBAgogWg+QgJgdiDiiIgCgCQAoABAGAFIACABIAIAHIAnAmIAJAKIAnAuIAXAmIAJAZIADAMIABAMIgBAPIgFASIgHAOIgJAMIgVAVIgXAQIgVAKQAAAAABgBQAAAAABgBQAAAAAAAAQAAgBAAAAg");
	this.shape_27.setTransform(30.6,15.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("AAMCVQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAAAIAAgBIAEgCQAigZAGgdQAEgTgLgcQgCgGhOhgIg+hYIgBgCQA1ABAHAFIAwAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_28.setTransform(29.9,15.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFEFEF").s().p("AAUCVQABgDgJgCIABAAIAEgDQA1gpgVgxQgGgQgLgNQgJgLgogsQgmgqgPgXIghgyIgBgCIANAAQA4AAAHAGIAwAuIAKAKIAmAuIAXAmIAKAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_29.setTransform(29.1,15.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EFEFEF").s().p("ABxCVQAAgDgNgDIABgBIADgCQA0gogZg1QgGgNgRgUQgNgOgcgcIgqgrQgWgbgFgJQgSgbgFgDQgUgLhIBDQhKBGgGA2IABgMIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_30.setTransform(19.8,15.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EFEFEF").s().p("ABxCVQABgEgUgDIABgBIADgCQAfgYACgdQACgTgKgSQgTgmiKh9QgdgMhCBAQhFBCACAzIgBgKIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_31.setTransform(19.8,15.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFEFEF").s().p("ABxCVQACgFgbgDIAAgBIAEgCQAigagCghQgBgSgOgXQgFgJhBg5QhCg8gOgFQghgKhAA6QhDA9ALA0QgDgKAAgNIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_32.setTransform(19.8,15.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFEFEF").s().p("ABxCVQABgFghgEIABAAIADgDQAfgYAAgdQACgTgMgSQgQgbg9guQg4grgUgGQgPgEgcAMQgcAMgaAXQhBA4ATA5QgHgSAAgSIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_33.setTransform(19.8,15.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("ABxCVQABgGgogEIABAAIADgDQBJg5hdhMQgvgkg+gbQgSgEgdAMQgeAMgZAWQg+A3AiA6QgQgXAAgbIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_34.setTransform(19.8,15.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFEFEF").s().p("ABxCVQACgHgwgDQBLg1hQhFQgcgXgngVQghgRgQgDQgWgFghANQggAOgWAXQg6A8A7A7QgjggAAgoIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_35.setTransform(19.8,15.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFEFEF").s().p("ABxCVQACgHg4gEIAJgHQBAg2hQg/QgegWgogQQglgPgWABQgdACgeATQggASgOAbQgQAeAKAaQgJgSAAgVIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_36.setTransform(19.8,15.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFEFEF").s().p("ABxCVQABgIg/gDQAOgJAJgLQAogyhIg2QhDgzhBALQgeAFgbASQgaASgKAZQgZA9BdArIAEACQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_37.setTransform(19.8,15.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFEFEF").s().p("ABxCVQACgIhJgEQAWgNAKgSQAbgyhMgtQhIgrg5AQQhCARgNAyQgNA4BTAkIAEACQgDACAAABQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_38.setTransform(19.8,15.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EFEFEF").s().p("ABxCVQABgJhRgDQAYgOAJgRQAbgwhFgqQhDgpg/AQQhGASgGAyQgGA1BTAgQgIACABACQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_39.setTransform(19.8,15.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFEFEF").s().p("ABxCVQABgFgagDQgZgDgngBQAXgNALgSQAdgvhDgoQhAgmhAARQhFASgBAyQgBAzBNAaQgLADABACQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_40.setTransform(19.8,15.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EFEFEF").s().p("ABxCVQACgFgegDQgcgEgsAAQAagOAMgSQAggwhCgkQg+gihAAQQg+ARgFAsQgEAwBOAcIAGACQgPADgBADQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_41.setTransform(19.8,15.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EFEFEF").s().p("ABxCVQABgFgggEQghgDgxgBQAggMAQgZQAagrg+ghQg9gfg9ARQhCATAEAtQAFAuBOAWQgXADAAAEQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_42.setTransform(19.8,15.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EFEFEF").s().p("ABxCVQABgFgggEQghgDgvgBIgRABQAdgLASgSQAMgLAEgMQAOglg+gbQg+gag6AXQg/AaATAqQARAnA+AOIAHABQgiADAAAFQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_43.setTransform(19.8,15.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFEFEF").s().p("ABxCVQABgFgggEQghgDgvgBQgcAAgXACQAxgFAagaQAUgUgCgRQgDgrhFgNQhGgNgsAiQgqAgAkAkQAhAiA5ABIAIAAQg+ADAAAHQghgOgVgVQgfgeAAgmIABgOIAHgZIAegyIA4hBIAogjQAHgGA5AAQA4AAAHAGIAxAuIAKAKIAmAuIAYAmIAJAZIADAMIABAMIgCAPIgEASIgHAOIgJAMIgVAVIgYAQIgVAKg");
	this.shape_44.setTransform(19.8,15.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFEFEF").s().p("ABxCVQABgFghgEQgggDgvgBQguAAgiAEQgiADgBAFQgggOgVgVQgfgeAAgmIABgOIADgMIAKgZQAJgTAOgTQAbghAMgMQAggiAagVQAHgGA5AAQA4AAAHAGQAfAaAcAeQAQARAWAdQAPAUAIASQAKATADASQAFAjgWAeQgXAggvAVg");
	this.shape_45.setTransform(19.8,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_21, new cjs.Rectangle(0,0,39.6,30.3), null);


(lib.Group_1_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#715732").s().p("AhZABIgUgHQAWAIBVAAQBdAAATgIQgKAFgLACQgWAGhEAAQhDAAgVgGg");
	this.shape.setTransform(11.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_20, new cjs.Rectangle(0.2,0,22.1,1.5), null);


(lib.Group_1_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#957445").s().p("AgKgCIABgBIABAAQAOAFAFAAQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAg");
	this.shape.setTransform(1.1,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#997747").s().p("AgMgCIACgCQAQAGAHgBQgGACgBACg");
	this.shape_1.setTransform(1.3,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C7948").s().p("AgOgBQAAgCAEgBQARAFAIAAQgLACAAACg");
	this.shape_2.setTransform(1.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F7C4A").s().p("AgSgBQAAgBAHgDQATAGALgBQgTADAAADg");
	this.shape_3.setTransform(1.9,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A37F4C").s().p("AgaAAQABgDAKgCIACAAQASAFAWAAQgiACAAAEg");
	this.shape_4.setTransform(2.7,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#745A34").s().p("AgKAFIATgIIABgBIABABIgEACIgFABIgBABIgEACIgBAAIgBABIgBAAIgBAAIgCABg");
	this.shape_5.setTransform(21.8,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#785D36").s().p("AgKAGQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAPgHIABgBQAAAAABAAQABABAAAAQABABAAAAQAAAAAAABIgDACIgGABIgBABIgDACIgBAAIgCABIgBAAIgBAAIgCABg");
	this.shape_6.setTransform(21.8,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C6038").s().p("AgKAHQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIAEgCIAIgFIABgBQAIACAAACIgDACIgGACIgBABIgDABIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_7.setTransform(21.8,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#80633A").s().p("AgIAIQABAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgCgHgDIAMgHIAAgBQAOADAAADIgEACIgFACIgBABIgEABIgBABIgCAAIAAABIgBAAIgCABg");
	this.shape_8.setTransform(21.5,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#83663C").s().p("AgFAIQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABgDgPgCIANgHIABgBQATADAAAEIgEABIgFACIgBABIgFACIgBAAIgBABIAAAAIgBAAIgCABg");
	this.shape_9.setTransform(21.2,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#87693E").s().p("AgBAJQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgEgUgDIANgHIABgBQAZAEAAAEIgEABIgFACIgBABIgFACIgBABIgBAAIgBABIgBAAIgBABg");
	this.shape_10.setTransform(20.9,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8A6B3F").s().p("AACAJQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBAAAAQABgEgcgDQADAAALgIIABAAQAhADgBAFIgEACIgFACIgBABIgFABIgBABIgBAAIgBABIgBAAIgCABg");
	this.shape_11.setTransform(20.5,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8E6E41").s().p("AAGAJQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQACgFglgCQAHgBAIgHIABAAQAoADgBAFIgEACIgFACIgBABIgFACIgBAAIgBABIgBAAIgBAAIgCABg");
	this.shape_12.setTransform(20.1,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#927143").s().p("AAKAKQABAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABgGgtgCQAGgBAMgIQAuAEgBAFIgDADIgFACIgCABIgEABIgBABIgCAAIgBABIgBAAIgBABg");
	this.shape_13.setTransform(19.6,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#957445").s().p("AAPAKQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABgHg3gCQAHAAANgIQA2AEgBAFIgDADIgFACIgCABIgEABIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_14.setTransform(19.1,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#997747").s().p("AAVAKQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQACgHhDgCQALAAAMgIQA/ADgBAHIgEACIgFACIgBABIgFACIgBAAIgBABIgBAAIgBAAIgCABg");
	this.shape_15.setTransform(18.6,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C7948").s().p("AAbAKQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQABgEgXgCQgVgCgigBQANAAAOgIQAeABAUADQAUADAAADIgEACIgFACIgBABIgFACIgBAAIgBABIgBAAIgBAAIgCABg");
	this.shape_16.setTransform(18,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9F7C4A").s().p("AAiALQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABgFgcgCQgagCgnAAQARgCAPgHQBQACgBAIIgDACIgFACIgCABIgEACIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_17.setTransform(17.2,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A37F4C").s().p("AAtALQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQABgEgbgDQgagCgoAAIgVAAQARgBAJgCIASgHQAnABAZAEQAZADAAADIgEADIgFACIgBABIgFABIgBABIgBAAIgBABIgBAAIgCABg");
	this.shape_18.setTransform(16.2,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A6824E").s().p("ABcALQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgEgcgDQgbgCgnAAIgnAAQAggCASgIQArABAeADQAdAEgBADIgDADIgFACIgCABIgEABIgBABIgCAAIgBABIgBAAIgCABgAhxABQAAgCAQgDQAWAEAdAAIgTABQgcADgBAEg");
	this.shape_19.setTransform(11.4,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AA844F").s().p("ABcALQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgEgcgDQgbgCgnAAQgmgBgdACQgcADgBAEIgTgHQABgDAWgDQAuAJAsgOIACAAQAvAAAhAEQAhADgBAEIgDADIgFACIgCABIgEABIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_20.setTransform(11.4,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AD8751").s().p("ABcALQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgEgcgDQgbgCgnAAQgmgBgdACQgcADgBAEIgTgHQABgEAhgDIAEAAQAaAEAjgIIAQAAQAvAAAhAEQAhADgBAEIgDADIgFACIgCABIgEABIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_21.setTransform(11.4,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AD8751").s().p("ABfAIQABgEgcgDQgbgCgnAAQgmAAgdACQgcADgBAEIgTgIQABgEAigDQAhgDAvAAQAvAAAhADQAhAEgBAEIgDACQgKAFgLADQAFgBAAgCg");
	this.shape_22.setTransform(11.4,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_19, new cjs.Rectangle(0,0,22.9,2.3), null);


(lib.Group_1_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#957445").s().p("AgKgCIABgBQAQAFAEAAQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAg");
	this.shape.setTransform(1.1,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#997747").s().p("AgMgCIACgCQARAGAGgBQgGACgBACg");
	this.shape_1.setTransform(1.3,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C7948").s().p("AgOgBQAAgCAEgBQARAFAIAAIAAAAQgLACAAACg");
	this.shape_2.setTransform(1.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F7C4A").s().p("AgSgBQAAgBAHgDQATAGALgBQgTADAAADg");
	this.shape_3.setTransform(1.9,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A37F4C").s().p("AgaAAQABgDAKgCQANAEAHABQAHAAAOAAIABAAQgiACAAAEg");
	this.shape_4.setTransform(2.7,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#745A34").s().p("AgKAFIATgIIABgBIABABIgEACIgBABIgEAAIgBABIgEACIgBAAIgBABIgBAAIgBAAIgCABg");
	this.shape_5.setTransform(21.8,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#785D36").s().p("AgKAGQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAPgHIABgBQAAAAABAAQABABAAAAQABABAAAAQAAAAAAABIgDACIgCAAIgEABIgBABIgDACIgBAAIgCABIgBAAIgBAAIgCABg");
	this.shape_6.setTransform(21.8,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C6038").s().p("AgKAHQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIAMgHIABgBQAIACAAACIgDACIgCABIgEABIgBABIgDABIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_7.setTransform(21.8,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#80633A").s().p("AgIAIQABAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgCgHgDIAMgHIAAgBQAOADAAADIgEACIgCABIgDABIgBABIgEABIgBABIgCAAIAAABIgBAAIgCABg");
	this.shape_8.setTransform(21.5,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#83663C").s().p("AgFAIQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABgDgPgCIANgHIABgBQATADAAAEIgEABIgCABIgDABIgBABIgFACIgBAAIgBABIAAAAIgBAAIgCABg");
	this.shape_9.setTransform(21.2,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#87693E").s().p("AgBAJQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgEgUgDQAJgDAEgEIABgBQAZAEAAAEIgEABIgBABIgEABIgBABIgFACIgBABIgBAAIgBABIgBAAIgBABg");
	this.shape_10.setTransform(20.9,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8A6B3F").s().p("AACAJQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBAAAAQABgEgcgDQAFgBAKgHQAhADgBAFIgEACIgBABIgEABIgBABIgFABIgBABIgBAAIgBABIgBAAIgCABg");
	this.shape_11.setTransform(20.5,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8E6E41").s().p("AAGAJQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQACgFglgCQAFgBALgHQAoADgBAFIgEACIgBABIgEABIgBABIgFACIgBAAIgBABIgBAAIgBAAIgCABg");
	this.shape_12.setTransform(20.1,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#927143").s().p("AAKAKQABAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABgGgtgCQAHAAALgJQAuAEgBAFIgDADIgCABIgDABIgCABIgEABIgBABIgCAAIgBABIgBAAIgBABg");
	this.shape_13.setTransform(19.6,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#957445").s().p("AAPAKQABAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABgGg3gDQAIAAAMgIQA2AEgBAFIgDADIgCABIgDABIgCABIgEABIgBABIgCAAIgBABIgBAAIgBABg");
	this.shape_14.setTransform(19.1,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#997747").s().p("AAVAKQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQACgHhDgCQAKAAANgIQA/ADgBAHIgEACIgBABIgEABIgBABIgFACIgBAAIgBABIgBAAIgBAAIgCABg");
	this.shape_15.setTransform(18.6,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C7948").s().p("AAbAKQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABgEgXgCQgWgCgigBQAOAAANgIQAfABAUADQAUADgBADIgDACIgCABIgDABIgCABIgEACIgBAAIgCABIgBAAIgBAAIgCABg");
	this.shape_16.setTransform(17.9,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9F7C4A").s().p("AAiALQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABgFgcgCQgagCgnAAQAQgBAQgIQBQACgBAIIgDACIgCABIgDABIgCABIgEACIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_17.setTransform(17.2,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A37F4C").s().p("AAuALQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQABgEgbgDQgagCgoAAIgXAAQATgBAJgCQAIgCAKgFQAnABAZAEQAZADAAADIgEADIgBABIgEABIgBABIgFABIgBABIgBAAIgBABIgBAAIgCABg");
	this.shape_18.setTransform(16.1,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A6824E").s().p("ABcALQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgEgcgDQgbgCgnAAIgnAAQAggCASgIQArABAeADQAdAEgBADIgDADIgCABIgDABIgCABIgEABIgBABIgCAAIgBABIgBAAIgCABgAhxABQAAgCAQgDQAWAEAdAAIgTABQgcADgBAEg");
	this.shape_19.setTransform(11.4,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AA844F").s().p("ABcALQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgEgcgDQgbgCgnAAQgmgBgdACQgcADgBAEIgTgHQABgDAWgDQAbAFAfgDQAUgCALgEIABgBIACAAQAvAAAhAEQAhADgBAEIgDADIgCABIgDABIgCABIgEABIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_20.setTransform(11.4,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AD8751").s().p("ABcALQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgEgcgDQgbgCgnAAQgmgBgdACQgcADgBAEIgTgHQABgEAhgDQAfADAigHIAQAAQAvAAAhAEQAhADgBAEIgDADIgCABIgDABIgCABIgEABIgBABIgCAAIgBABIgBAAIgCABg");
	this.shape_21.setTransform(11.4,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AD8751").s().p("ABfAIQABgEgcgDQgbgCgnAAQgmAAgdACQgcADgBAEIgTgIQABgEAigDQAhgDAvAAQAvAAAhADQAhAEgBAEIgDACQgKAFgLADQAFgBAAgCg");
	this.shape_22.setTransform(11.4,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_18, new cjs.Rectangle(0,0,22.9,2.3), null);


(lib.Group_1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#927143").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape.setTransform(1.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#957445").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape_1.setTransform(1.2,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#997747").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape_2.setTransform(1.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C7948").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape_3.setTransform(1.2,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F7C4A").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape_4.setTransform(1.2,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A37F4C").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape_5.setTransform(1.2,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A6824E").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape_6.setTransform(1.2,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA844F").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape_7.setTransform(1.2,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AD8751").s().p("AALAFIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBgBIgCAAIgEgBQAAgBgBAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIASAGQAAACAFABg");
	this.shape_8.setTransform(1.2,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD8751").s().p("AgJgCQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABQgHgBgPgGg");
	this.shape_9.setTransform(1.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_17, new cjs.Rectangle(0,0,2.5,1.1), null);


(lib.Group_1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#927143").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape.setTransform(1.3,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#957445").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape_1.setTransform(1.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#997747").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape_2.setTransform(1.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C7948").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape_3.setTransform(1.3,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F7C4A").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape_4.setTransform(1.3,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A37F4C").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape_5.setTransform(1.3,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A6824E").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape_6.setTransform(1.3,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA844F").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape_7.setTransform(1.3,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AD8751").s().p("AAMAFIgBAAIgBAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgCgBIgBgBIgDgBIgDgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	this.shape_8.setTransform(1.3,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD8751").s().p("AgJgCQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABQgHgBgPgGg");
	this.shape_9.setTransform(1.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_16, new cjs.Rectangle(0,0,2.5,1.1), null);


(lib.Group_1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#997747").s().p("AAAAHIAAgNIAAANg");
	this.shape.setTransform(1,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6824E").s().p("AAAAHIAAgNIAAANg");
	this.shape_1.setTransform(1,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1975B").s().p("AAAAHIAAgNIAAANg");
	this.shape_2.setTransform(0.8,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C79C5E").s().p("AAAAHIAAgNIABAAIAAANg");
	this.shape_3.setTransform(0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_15, new cjs.Rectangle(0.6,0,0.5,1.4), null);


(lib.Group_1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C79C5E").s().p("AAAAHIAAgNIABAAIAAANg");
	this.shape.setTransform(0.7,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#745A34").s().p("AAAAHIAAgNIAAAAIAAANg");
	this.shape_1.setTransform(0.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_14, new cjs.Rectangle(0,0,0.7,1.4), null);


(lib.Group_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_13, null, null);


(lib.Group_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_12, null, null);


(lib.Group_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#88693E").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape.setTransform(48.3,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88693E").s().p("AAAgFIABgCIAAANIgBABg");
	this.shape_1.setTransform(48.2,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#88693E").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_2.setTransform(47.9,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88693E").s().p("AAAgFIABgCIAAANIgBACg");
	this.shape_3.setTransform(47.7,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#88693E").s().p("AgBgFIADgBIAAAMIgDABg");
	this.shape_4.setTransform(47.3,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#88693E").s().p("AgBgGIADAAIAAAMIgDACg");
	this.shape_5.setTransform(46.9,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#88693E").s().p("AgCgFIAFgCIAAAOIgFABg");
	this.shape_6.setTransform(46.5,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88693E").s().p("AgCgFIAFgBIAAAMIgFABg");
	this.shape_7.setTransform(45.9,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#88693E").s().p("AgCgFIAFgBIAAAMIgFABg");
	this.shape_8.setTransform(45.4,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#88693E").s().p("AgDgFIAHgBIAAAMIgHACg");
	this.shape_9.setTransform(44.7,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#88693E").s().p("AgDgFIAHgBIAAAMIgHABg");
	this.shape_10.setTransform(43.9,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#88693E").s().p("AgEgFIAJgBIAAAMIgJABg");
	this.shape_11.setTransform(43,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#88693E").s().p("AgFgGIALgBIAAANIgLABg");
	this.shape_12.setTransform(41.8,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#88693E").s().p("AgGgFIANgCIAAANIgNABg");
	this.shape_13.setTransform(40.5,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#88693E").s().p("AgGgGIANgBIAAANIgNACg");
	this.shape_14.setTransform(39.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#88693E").s().p("AgGgGIANgBIAAAOIgNABg");
	this.shape_15.setTransform(37.7,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#88693E").s().p("AgGgFIANgBIAAANIgNAAg");
	this.shape_16.setTransform(36.4,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#88693E").s().p("AgFgGIALAAIAAAMIgLABg");
	this.shape_17.setTransform(35.1,2.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#88693E").s().p("AgHgFIAPgBIAAANIgPAAg");
	this.shape_18.setTransform(33.7,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#88693E").s().p("AgQgFIAigBIAAAMIgiABg");
	this.shape_19.setTransform(31.2,3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#88693E").s().p("AgFgGIALAAIAAAMIgLABg");
	this.shape_20.setTransform(28.8,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_21.setTransform(27.7,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#88693E").s().p("AgDAHIAAgMIAHgBIAAANg");
	this.shape_22.setTransform(26.8,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_23.setTransform(25.9,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_24.setTransform(25.1,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_25.setTransform(24.4,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_26.setTransform(23.6,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_27.setTransform(22.8,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#88693E").s().p("AgEAHIAAgNIAIAAIAAANg");
	this.shape_28.setTransform(21.9,3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#88693E").s().p("AgEAHIAAgNIAIABIAAAMg");
	this.shape_29.setTransform(21,3.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#88693E").s().p("AgEAGIAAgMIAJAAIAAANg");
	this.shape_30.setTransform(20.1,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_31.setTransform(19.1,3.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_32.setTransform(18,3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#88693E").s().p("AgEAHIAAgNIAKABIAAAMg");
	this.shape_33.setTransform(16.9,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#88693E").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_34.setTransform(15.8,3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#88693E").s().p("AgFAHIAAgNIAKAAIAAANg");
	this.shape_35.setTransform(14.7,3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_36.setTransform(13.6,2.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#88693E").s().p("AgFAGIAAgMIALAAIAAANg");
	this.shape_37.setTransform(12.5,2.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#88693E").s().p("AgFAHIAAgNIALABIAAAMg");
	this.shape_38.setTransform(11.3,2.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#88693E").s().p("AgFAGIAAgMIALAAIAAANg");
	this.shape_39.setTransform(10.2,2.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#88693E").s().p("AgFAGIAAgMIALABIAAAMg");
	this.shape_40.setTransform(8.9,2.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#88693E").s().p("AgGAGIAAgNIANACIAAAMg");
	this.shape_41.setTransform(7.6,2.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#88693E").s().p("AgHAGIAAgNIAPACIAAANg");
	this.shape_42.setTransform(6.2,2.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#88693E").s().p("AgaAAIAAgOQAAAJA1AGIAAAOQg1gHAAgIg");
	this.shape_43.setTransform(2.7,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_11, new cjs.Rectangle(0,0,48.4,3.9), null);


(lib.Group_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_10, null, null);


(lib.Group_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_9, null, null);


(lib.Group_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_8, null, null);


(lib.Group_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#997747").s().p("AAAgGIAAAAIAAANg");
	this.shape.setTransform(0,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6824E").s().p("AAAgGIAAAAIAAANg");
	this.shape_1.setTransform(0.1,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A6824E").s().p("AAAgGIAAAAIAAANg");
	this.shape_2.setTransform(0.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#745A34").s().p("AAAAHIAAgNIABAAIAAANg");
	this.shape_3.setTransform(1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_7, new cjs.Rectangle(0,0,1.1,1.5), null);


(lib.Group_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_6, null, null);


(lib.Group_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A6B3F").s().p("AgkAAQABgCAHgCIBBAIIgCABg");
	this.shape.setTransform(3.7,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E6E41").s().p("Ag1gBQAcgGA7ABIAUAAIgQAMIgFAAQgQAAgGACg");
	this.shape_1.setTransform(6.3,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8A6B3F").s().p("AgbAHIARgNIAmACIgtALg");
	this.shape_2.setTransform(12.8,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87693E").s().p("AgiAGIAtgMQARACAHACIg/AJg");
	this.shape_3.setTransform(14.5,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83663C").s().p("AgkAEIA/gIQAJABABADIhHAFQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_4.setTransform(15.3,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#80633A").s().p("AgfADIBHgGIgBAAQAAADgbADIgyABg");
	this.shape_5.setTransform(15.1,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#83663C").s().p("AgHABQgUgBgIgBIBAACIAHABg");
	this.shape_6.setTransform(4.5,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#87693E").s().p("AgbABQgIgBgBgDIBHAGIACABg");
	this.shape_7.setTransform(3.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_5, new cjs.Rectangle(0,0,19.1,1.8), null);


(lib.Group_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A6B3F").s().p("AgkAAQABgCAHgCIBBAIIgCABg");
	this.shape.setTransform(3.7,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E6E41").s().p("Ag1gBQAcgGA7ABIAUAAIgQAMIgFAAQgQAAgGACg");
	this.shape_1.setTransform(6.3,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8A6B3F").s().p("AgbAHIARgNIAmACIgtALg");
	this.shape_2.setTransform(12.8,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87693E").s().p("AgiAGIAtgMQARACAHACIg/AJg");
	this.shape_3.setTransform(14.5,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83663C").s().p("AgkAEIA/gIQAJABABADIhHAFQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_4.setTransform(15.3,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#80633A").s().p("AgfADIBHgGIgBAAQAAADgbADIgyABg");
	this.shape_5.setTransform(15.1,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C6038").s().p("AgfABIA/gCQgWABghACg");
	this.shape_6.setTransform(13.1,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#83663C").s().p("AgHABQgUgBgIgBIBAACIAHABg");
	this.shape_7.setTransform(4.5,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#87693E").s().p("AgbABQgIgBgBgDIBHAGIACABg");
	this.shape_8.setTransform(3.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_4, new cjs.Rectangle(0,0,19.1,2), null);


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape.setTransform(0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0.6,0.1,0.1,0.2), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87693E").s().p("AAAgFIABgCIAAANIgBACg");
	this.shape.setTransform(0.1,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8A6B3F").s().p("AAAgGIABgBIAAANIgBABg");
	this.shape_1.setTransform(0.3,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E6E41").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_2.setTransform(0.5,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#927143").s().p("AgBgFIADgBIAAAMIgDABg");
	this.shape_3.setTransform(0.8,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#957445").s().p("AgBgFIADgBIAAAMIgDACg");
	this.shape_4.setTransform(1.1,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#997747").s().p("AgBgFIADgBIAAAMIgDABg");
	this.shape_5.setTransform(1.5,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9C7948").s().p("AgBgFIADgBIAAAMIgDABg");
	this.shape_6.setTransform(2,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9F7C4A").s().p("AgCgFIAFgBIAAANIgFABg");
	this.shape_7.setTransform(2.5,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A37F4C").s().p("AgCgFIAFgBIAAAMIgFACg");
	this.shape_8.setTransform(3.1,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A6824E").s().p("AgDgFIAHgCIAAAOIgHABg");
	this.shape_9.setTransform(3.8,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AA844F").s().p("AgDgGIAHgBIAAANIgHACg");
	this.shape_10.setTransform(4.6,1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AD8751").s().p("AgEgFIAJgCIAAANIgJABg");
	this.shape_11.setTransform(5.5,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B08A53").s().p("AgFgGIALgBIAAANIgLACg");
	this.shape_12.setTransform(6.6,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B48C54").s().p("AgGgFIANgBIAAAMIgNABg");
	this.shape_13.setTransform(7.9,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B78F56").s().p("AgGgFIANgBIAAAMIgNABg");
	this.shape_14.setTransform(9.3,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BA9258").s().p("AgGgFIANgBIAAAMIgNABg");
	this.shape_15.setTransform(10.7,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BD9459").s().p("AgFgFIALgBIAAANIgLAAg");
	this.shape_16.setTransform(12,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C1975B").s().p("AgFgGIALAAIAAAMIgLABg");
	this.shape_17.setTransform(13.3,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4995D").s().p("AgHgFIAPgBIAAAMIgPABg");
	this.shape_18.setTransform(14.8,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C79C5E").s().p("AgQgFIAigBIAAAMIgiABg");
	this.shape_19.setTransform(17.3,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C4995D").s().p("AgFgGIALAAIAAANIgLAAg");
	this.shape_20.setTransform(19.7,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C1975B").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_21.setTransform(20.8,0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BD9459").s().p("AgDAHIAAgMIAHgBIAAANg");
	this.shape_22.setTransform(21.7,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BA9258").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_23.setTransform(22.5,0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B78F56").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_24.setTransform(23.3,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B48C54").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_25.setTransform(24.1,0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B08A53").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_26.setTransform(24.9,0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AD8751").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_27.setTransform(25.7,0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA844F").s().p("AgDAHIAAgNIAHABIAAAMg");
	this.shape_28.setTransform(26.5,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A6824E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_29.setTransform(27.4,0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A37F4C").s().p("AgEAHIAAgNIAJAAIAAANIgJAAg");
	this.shape_30.setTransform(28.4,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9F7C4A").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_31.setTransform(29.4,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9C7948").s().p("AgEAGIAAgMIAJAAIAAANg");
	this.shape_32.setTransform(30.4,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#997747").s().p("AgEAHIAAgNIAJABIAAAMg");
	this.shape_33.setTransform(31.5,0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#957445").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_34.setTransform(32.6,0.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#927143").s().p("AgEAGIAAgMIAJABIAAAMg");
	this.shape_35.setTransform(33.8,0.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8E6E41").s().p("AgFAHIAAgNIAKAAIAAANg");
	this.shape_36.setTransform(34.9,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8A6B3F").s().p("AgFAGIAAgMIALAAIAAANg");
	this.shape_37.setTransform(36,1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#87693E").s().p("AgFAHIAAgNIALABIAAAMg");
	this.shape_38.setTransform(37.1,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#83663C").s().p("AgFAGIAAgMIALAAIAAANg");
	this.shape_39.setTransform(38.3,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#80633A").s().p("AgFAGIAAgMIALABIAAAMg");
	this.shape_40.setTransform(39.5,1.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7C6038").s().p("AgGAGIAAgNIANABIAAAOg");
	this.shape_41.setTransform(40.8,1.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#785D36").s().p("AgHAGIAAgNIAPACIAAANg");
	this.shape_42.setTransform(42.3,1.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#745A34").s().p("AgaAAIAAgOQA1AIAAAHIAAAOQAAgJg1gGg");
	this.shape_43.setTransform(45.8,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0.1,0,48.4,3.9), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_1_1, null, null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7B7B7").s().p("AgMAAQAGgBAOAAIAFAAIgEADIgBAAIgFAAg");
	this.shape.setTransform(1.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("AgGACIAEgDIAJABIgLACg");
	this.shape_1.setTransform(3.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEAEAE").s().p("AgIABIALgCIAGABIgPACg");
	this.shape_2.setTransform(3.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0.2,0,4.2,0.4), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AgEAJQgBgBgBgIIABgIQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAABQAEADACAEQADAEgDADQgBACgEAAIgEAAg");
	this.shape.setTransform(24,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AgJAPQgGgCAAgNQAAgNADgBQAEgCAIACQAHABAEADQAIATgEACQgFADgHABIgFABIgHgBg");
	this.shape_1.setTransform(24.6,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AgJAUQgHgCgBgIIgBgPIABgIQABgFADgCIAXADQAFADADAOQAEAOgHADQgEADgIABIgFAAIgHgBg");
	this.shape_2.setTransform(24.6,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AgJAaQgEgCgEgFQgDgEgBgEIgBgOIAIgWQAKgEAMAGQACABAKARQACAFABAKQABAJgIAEQgFADgIABIgEAAQgFAAgDgBg");
	this.shape_3.setTransform(24.6,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AgJAfQgDgCgHgIIgFgHQgEgJAGgQQAEgQAEgBQAEgCAHABIAKADQAGACAKAWQACACABAKQABAGgJAMQgCADgSAAIgHAAg");
	this.shape_4.setTransform(24.6,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AgIAhQgHgCgHgIIgGgJQgEgJAIgTQAGgSADgBIAVABQADABAIAMQAJANABAEIACAHIABAIQgBAJgHAGQgDAEgDAAQgLACgGAAIgHgBg");
	this.shape_5.setTransform(24.6,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AgIAmQgEAAgHgFQgHgGgFgKQgCgFABgKQAAgEAHgRQAHgQACgBQAEgCAHABQAFAAAFACQAEACAMASQAOATgCALQgCASgOAEQgHACgIAAIgKgBg");
	this.shape_6.setTransform(24.6,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("AgIAqQgHgCgHgGQgHgFgFgKQgCgGABgKQAAgGAIgSQAIgSADgBQAEgCAGAAQAGABAEACQAjAkgCAUQgCAUgSAEQgGACgIAAIgLgBg");
	this.shape_7.setTransform(24.6,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AgIAuQgJgCgJgIQgOgLACgUQADgaASgXQAIgEALAEQAnAmgBAZQAAAJgGAGQgHAIgKADQgHACgHAAIgLgBg");
	this.shape_8.setTransform(24.6,14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AgIAyQgNgEgKgIQgTgPAOglQAHgSALgQQADgCAGAAQAGAAADACIAWAYQAVAaAAATQgBALgEAEQgJAKgMADQgHACgHAAIgLgBg");
	this.shape_9.setTransform(24.6,14.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AgIA2QgOgDgNgKQgRgOANgnQALgkAIgEQAJgFAKAEQAvAvgBAdQgBANgDADQgDADgVAMIgQACIgJgCg");
	this.shape_10.setTransform(24.7,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AgIA7IgcgOQgTgMAOgtQAMgpAIgEQAIgEAKADQA0AzgBAgQAAANgIAHQgQAMgHABQgHACgHAAIgLgBg");
	this.shape_11.setTransform(24.7,13.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEFEF").s().p("AglAzQgWgPAPgwQAMgsAKgFQAHgFAJADQA5A4AAAjQgBAYgbAKQgJADgKAAQgTAAgWgOg");
	this.shape_12.setTransform(24.7,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AgkA5QgbgSARg1QAIgcAOgYQAHgFAJACQA9BAABAkQAAAcgfAIQgKADgKAAQgTAAgUgNg");
	this.shape_13.setTransform(24.7,13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AglA/QgdgTARg7QAIgeAPgaQAHgFAHABQBDBGABAoQABAdgiAJQgLADgJAAQgVAAgTgNg");
	this.shape_14.setTransform(24.8,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEFEF").s().p("AglBHQgXgPACgcQAAgMADgMIALglQAHgXAJgUQAGgGAHABQBLBRgBAoQAAAggnAIQgLACgJAAQgVAAgQgLg");
	this.shape_15.setTransform(24.8,12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AgmBPQgZgOABggQABgNADgMIANgvQAKgiAEgJQAGgGAFAAQAIACAkAzQAoA2gBAZQgBAgglAKQgMADgMAAQgUAAgTgKg");
	this.shape_16.setTransform(24.9,11.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEFEF").s().p("AgqBUQgLgJgFgHQgJgMACgSQAGgiAIggQAPhCAMgBQAIAAAnA4QAsA8AAAcQAAAigsAKQgOADgLAAQgYAAgQgMg");
	this.shape_17.setTransform(24.9,11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEFEF").s().p("AhhCPIgKgEIgcgRIgXgUIgOgSIgHgOIgEgPIgCgRIABgMIABgCQAIgvA9hDQAegiAigbQgBAAABAAQAAABAAAAQABAAAAABQABAAABAAQgiAegcAnQg5BNAVAxQASAtBGAdQBBAaBCgDQAogCAggOQAYgKAQgQIgGAGIgLAKIgXAQIgWAKQgTAJheAAQhWAAgWgJg");
	this.shape_18.setTransform(18.6,15.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AhqCPIgKgEIgdgRIgWgUIgPgSIgGgOIgFgPIgCgRIABgMIABgCQAIgvA9hDQAfgiAhgbQgBABAHACIgCABQilCnB6BLQApAZBDAKQAzAIAbgEQBWgLAWgzIgDAHIgLARIgFAGIgWAUIgoAVQgTAJhdAAQhXAAgVgJg");
	this.shape_19.setTransform(19.6,15.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFEFEF").s().p("AhsCPIgKgEIgdgRIgWgUIgPgSIgGgOIgFgPIgCgRIABgMIABgCQAIgvA9hDQAfgiAhgbQgBACAKABQiLCHBPBVQAfAiA7APQA4APA5gIQAkgFAZgMQAigRALgcIAAgBIAAAAIACgEIgCAEIAAAAIAAABIgBAEIgHAOIgJAMIgFAGIgWAUIgoAVQgTAJhdAAQhXAAgVgJg");
	this.shape_20.setTransform(19.8,15.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBACANACQiKCPBZBPQAiAeA8ANQA0AMAwgHQAmgFAagPQAngWADgnIAAAFIgBAFIgFASIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_21.setTransform(19.9,15.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAADAOABQiFCUBcBLQAiAcA6ALQAzAKAsgGQAogGAagRQAqgagGguIABAGIAAAIIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_22.setTransform(19.9,15.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAACARADQh8CTBZBIQAhAbA3ALQAyAJAqgGQAygHAagXQAngigbg8QAGAKADANIADAMIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_23.setTransform(19.9,15.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBADAVACQh+CgBnBBQAlAYA7AGQAwAGAjgHQBpgVgZhRIgGgPIAFAJIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJgACzgZIgjgxIg4g5QBJBAAYA3g");
	this.shape_24.setTransform(19.9,15.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAADAXACIgBACQggAvgRAqQgZBAAWAhQAdArBHAQQA+AOA1gNQBngagnhWIgKgVIAEAGIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_25.setTransform(19.9,15.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBAEAbABIgBACQh2C6CAAuQBAAYBagPQBggagmhUQgHgOgJgPIAMARIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJgACngqIgKgOIAKAOg");
	this.shape_26.setTransform(19.9,15.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAADAdADQhuCsBwA1QAkASA5ABQArABAXgHQBrgehBhmQgSgbgZgbIATATIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJgAB9hdIgFgGIgIgIQgRgSgUgRQAUARARASIAIAIIAFAGgABBiXIABABIAJAIIgKgJg");
	this.shape_27.setTransform(19.9,15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBAEAhACIgBACQhKCGAlAzQAYAiA8AOQA+APA0gQQBkgehAhkQgRgbgagcIAXAWIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJgAB5hgQgSgTgVgUQAVAUASATgABAiWIABgBIABABIAQAPIgSgPg");
	this.shape_28.setTransform(19.9,15.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAAEAjACQgZAtgMAqQgUBDAXAhQAVAfA9AOQA9ANAxgPQBdgeg5hdQgUghghgiIAgAfIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJgABwhpIgFgEIgMgMIgDgEIADAEIAMAMIAFAEgABAiWIABgBIAbAaIgcgZg");
	this.shape_29.setTransform(19.9,15.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBAFAnABQgXAtgLAqQgTBEAXAhQATAbA5ANQA9AOAwgQQBWgdgyhWQgfg1hHg+IACgCIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_30.setTransform(19.9,15.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBAFAqABQgXAxgKArQgPBBAWAfQATAaA4AMQA7ALAugQQBNgcgshQQgdg0hJhBIADgCIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_31.setTransform(19.9,15.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBAFAtABQgXA1gJArQgMA+AWAfQARAZA4AKQA7AKAqgSQBDgcgmhJQgbgzhJhEQABAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_32.setTransform(19.9,15.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAAFAvACQgXA0gIAsQgLA9AWAfQAOAUAyAKQA7AMAvgUQA8gZghhCQgZg0hLhHQAFgCAAgBIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_33.setTransform(19.9,15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAAFAyACIAAABQggBjgBApQgBAYAQAXQAOAUA0AIQA6AKApgUQAjgSgBgeQgBg4hshqQAHgBAAgCIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_34.setTransform(19.9,15.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBAGA3ABIgBABQgdBigCAnQgCAbAOATQARAXAxAHQA3AIAqgVQBUgrihiiQAJgBAAgCIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_35.setTransform(19.9,15.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBAGA6ABIgBABQgZBagFAqQgDAdAHALQAcAnA8ABQAwAAAdgQQAmgWgSgvQgTgxhOhSQALgCAAgCIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_36.setTransform(19.9,15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQgBAGA9ABIgBABQgbBhgDApQgCAXAHALQAVAhA2AEQAwAEAbgQQAkgUgHgjQgKgyhXhgQANgCAAgCIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_37.setTransform(19.9,15.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAADASACQASACAbAAQgaBpgDAYQgFAcAJAQQAQAcAxAGQAvAHAbgQQAggUgCgdQgDgyhbhmQAPgBABgDIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_38.setTransform(19.9,15.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAADASACQATACAbAAIACAAIgBACQgZBzgDAVQgDAVAIAOQAQAbAsAGQAsAGAegSQAtgbglhFQgYgug0g2QAUgCABgDIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_39.setTransform(19.9,15.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAADASACQATACAbAAIAFAAIAAABQgpCDASApQAIATAjAJQAjAJAegKQBHgXg1haQgagugrgrQAZgBABgEIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_40.setTransform(19.9,15.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAADASACQATACAbAAIAKAAIAAABQgaBhgEAgQgDAWAIAVQAIATAiAIQAjAIAcgKQBAgYg2hZQgagtgpgpQAfgCABgEIABABIBOBMIAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_41.setTransform(19.9,15.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EFEFEF").s().p("AhuCPIgKgEIgdgRIgWgUIgOgSIgHgOIgFgPIgBgRIABgMIAAgCQAIgvA9hDQAfgiAhgbQAAADASACQATACAbAAIATgBIAAACQgMAKgOBDQgOBBAEAPQAGAbAcAKQAWAJAagDQBXgJgyhcQgQgfgcgiQgXgcgIgEIgEgEQApgBABgFIABABIAWATIA4A5IAjAxIAMAZIAHAZIABANIgDAWIgDAKIgDAHIgNATIgFAGIgQAPIgYAQIgVAKQgUAJhcAAQhYAAgVgJg");
	this.shape_42.setTransform(19.9,15.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EFEFEF").s().p("AhuCQQgwgWgXggQgWgdAGglQAIgvA9hCQAfgjAhgbQAAADASACQATACAbAAQBAAAABgHIgBgBQAlAdAhAnQA5A/AHAvQAGAigWAeQgXAggwAWQgUAJhcAAQhYAAgVgJg");
	this.shape_43.setTransform(19.9,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,39.9,30.5), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AisAMQhFgIAAgJIAAgOQAAALBFAHQBGAHBjAAQBjAABIgHQBIgHACgKIAAAOQgCAJhIAIQhIAGhjAAQhkAAhFgHg");
	mask.setTransform(24.2,2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#88693E").s().p("AAAgFIABgCIAAANIgBACg");
	this.shape.setTransform(48.3,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88693E").s().p("AAAgFIABgCIAAAOIgBAAg");
	this.shape_1.setTransform(48.2,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#88693E").s().p("AAAgFIABgCIAAANIgBACg");
	this.shape_2.setTransform(47.9,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88693E").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_3.setTransform(47.7,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#88693E").s().p("AgBgFIADgBIAAAMIgDABg");
	this.shape_4.setTransform(47.3,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#88693E").s().p("AgBgFIADgBIAAAMIgDACg");
	this.shape_5.setTransform(46.9,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#88693E").s().p("AgCgFIAFgBIAAAMIgFABg");
	this.shape_6.setTransform(46.5,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88693E").s().p("AgCgFIAFgBIAAAMIgFABg");
	this.shape_7.setTransform(45.9,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#88693E").s().p("AgCgFIAFgBIAAAMIgFABg");
	this.shape_8.setTransform(45.4,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#88693E").s().p("AgDgFIAHgCIAAANIgHABg");
	this.shape_9.setTransform(44.7,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#88693E").s().p("AgDgFIAHgBIAAAMIgHABg");
	this.shape_10.setTransform(43.9,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#88693E").s().p("AgEgGIAJgBIAAANIgJACg");
	this.shape_11.setTransform(43,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#88693E").s().p("AgFgFIALgCIAAAOIgLAAg");
	this.shape_12.setTransform(41.8,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#88693E").s().p("AgGgFIANgCIAAANIgNACg");
	this.shape_13.setTransform(40.5,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#88693E").s().p("AgGgFIANgBIAAAMIgNABg");
	this.shape_14.setTransform(39.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#88693E").s().p("AgGgFIANgBIAAAMIgNABg");
	this.shape_15.setTransform(37.7,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#88693E").s().p("AgGgGIANAAIAAAMIgNABg");
	this.shape_16.setTransform(36.4,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#88693E").s().p("AgFgFIALgBIAAANIgLAAg");
	this.shape_17.setTransform(35.1,2.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#88693E").s().p("AgHgGIAPAAIAAANIgPAAg");
	this.shape_18.setTransform(33.7,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#88693E").s().p("AgQgGIAigBIAAANIgiACg");
	this.shape_19.setTransform(31.2,3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#88693E").s().p("AgFAHIAAgMIALgBIAAANg");
	this.shape_20.setTransform(28.8,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_21.setTransform(27.7,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#88693E").s().p("AgDgGIAHAAIAAANIgHAAg");
	this.shape_22.setTransform(26.8,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_23.setTransform(25.9,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_24.setTransform(25.1,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_25.setTransform(24.4,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_26.setTransform(23.6,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#88693E").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_27.setTransform(22.8,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#88693E").s().p("AgEAHIAAgNIAIAAIAAANg");
	this.shape_28.setTransform(21.9,3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#88693E").s().p("AgEAHIAAgNIAIAAIAAANg");
	this.shape_29.setTransform(21,3.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#88693E").s().p("AgEAHIAAgNIAJABIAAAMg");
	this.shape_30.setTransform(20.1,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#88693E").s().p("AgEAGIAAgMIAJAAIAAANIgJgBg");
	this.shape_31.setTransform(19.1,3.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#88693E").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_32.setTransform(18,3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#88693E").s().p("AgEAHIAAgNIAKAAIAAANg");
	this.shape_33.setTransform(16.9,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#88693E").s().p("AgFAGIAAgMIALABIAAAMg");
	this.shape_34.setTransform(15.8,3.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#88693E").s().p("AgFAHIAAgNIAKAAIAAANIgKAAg");
	this.shape_35.setTransform(14.7,3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#88693E").s().p("AgEAGIAAgMIAJABIAAAMg");
	this.shape_36.setTransform(13.6,3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#88693E").s().p("AgFAHIAAgNIALABIAAAMg");
	this.shape_37.setTransform(12.5,2.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#88693E").s().p("AgFAGIAAgMIALAAIAAANg");
	this.shape_38.setTransform(11.3,2.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#88693E").s().p("AgFAGIAAgMIALABIAAAMg");
	this.shape_39.setTransform(10.2,2.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#88693E").s().p("AgFAGIAAgMIALABIAAAMg");
	this.shape_40.setTransform(8.9,2.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#88693E").s().p("AgGAGIAAgNIANACIAAAMg");
	this.shape_41.setTransform(7.6,2.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#88693E").s().p("AgHAGIAAgNIAPACIAAANg");
	this.shape_42.setTransform(6.2,2.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#88693E").s().p("AgaAAIAAgOQAAAJA1AGIAAAOQg1gHAAgIg");
	this.shape_43.setTransform(2.7,1.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(0,0,48.4,3.9), null);


(lib.endtxtB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4FAFC").s().p("EgkRADuQhOAAAAhhIAAkZQAAhhBOAAMBIkAAAQBNAAAABhIAAEZQAABhhNAAg");
	this.shape.setTransform(-0.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.endtxtB, new cjs.Rectangle(-240.7,-20.7,480.1,47.6), null);


(lib.gameEnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.resultTxt = new cjs.Text("", "bold 18px 'Arial'");
	this.resultTxt.name = "resultTxt";
	this.resultTxt.textAlign = "right";
	this.resultTxt.lineHeight = 22;
	this.resultTxt.lineWidth = 93;
	this.resultTxt.parent = this;
	this.resultTxt.setTransform(207.5,-42.3,1.541,1.541);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232020").s().p("AgKA1QgSgIgDgSQgCgIACgZIACgJQAIgVAFgGQAJgNAOACQAQACAGAQQADAJABAVIgCAMQgFAZgMANQgJAKgIAAQgEAAgDgCg");
	this.shape.setTransform(-180.2,76.9,0.522,0.522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#232020").s().p("AgHA2QgMgBgFgKQgEgGgCgOIgBgQQACgoAYgQQAFgFAHAAQAHABAFAFQALANACARQAAALgDAVQgBAGgFALQgGANgGAFQgGAGgIAAIgEgBg");
	this.shape_1.setTransform(-167.6,78.8,0.522,0.522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C98D4C").s().p("AgUAIQgWgIgJgOQALgCAoAIQAgAGAUgMQgLAVgTAGQgGACgIAAQgMAAgQgHg");
	this.shape_2.setTransform(-176.9,91.7,0.522,0.522);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232020").s().p("AAIBIQgogIgLACQgWgTgDgFQgEgGgBgOQAIABAGAIQAHAKAEACQANAIAEABQALADAEgHQAGgKgBgLQgCgNgLgIIgNgHQgOgLgFgJQgHgMAEgOQAIgYAlgBQAXgBAVAIQAQAGAHAHQAKAKAAAPQAAAOgKAKQgJAHgOADQgUAEgHAHQgJAKAIARQAIAQAQAAQAIgBAVgIIAHgFQAFgDAGABQADAHgFAGIgMAIQgNAIgSAAQgKAAgKgCg");
	this.shape_3.setTransform(-177.3,87.5,0.522,0.522);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6A36B").s().p("ABWCOQglgDgDgfIASgcIARgLQAKgIgEgMIgKgvQgGgagTgNQgegUgQgPQgLgLgQACQgIABgWAHQg+AWg1ADIgBgSQgBgoAHgGQAGgGAoABQAKAAAggHIA1gOQAlgJARAHQAQAGAWAhQAVAgAUAUQAZAZAeAMIgFA/QgDAmACAZQgMAVgVAGQgJADgNAAIgVgCg");
	this.shape_4.setTransform(-156,107.7,0.522,0.522);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D89F5B").s().p("AgUAlQgLgLgKgFQAIgOASgTIAdghQAKgNAKAGQAKAFgDAQQgKAxggAlIgTgSg");
	this.shape_5.setTransform(-142.3,88.4,0.522,0.522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D89F5B").s().p("AgOAzQgzgdgRglQgJgTACgQQApgBAZAJQATAHALgEQAOgEAKgRQACgEAHgGIAKgIQAKAFALAKIATATQgcAXAAAcQAAAYASAhQADAEABALIgFAAQgtAAgwgcg");
	this.shape_6.setTransform(-147.2,93.6,0.522,0.522);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6A36B").s().p("Ag8CKQgUgrArgXQAMgHAEgJQAEgHgBgOQgJh6gOg8IAqAOQAaAHATgBQAMAAACAQIAHBCIgHCiQgBAGgIAGQgIAGgCAFQggAHgSABIgFAAQgZAAgVgKg");
	this.shape_7.setTransform(-174.2,108,0.522,0.522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C98D4C").s().p("AhUA8QgOhDAEgyIBIgmQApgXAdgTQANgJAGgGQAJgJABgNIASAAQAIBrgjCIQgPA9g6AUQgLAEgPAIIgaANQgThNgIgmgAgLgMQgEAGgIAUIgDAJQgBAaABAIQAEASARAIQAMAGAMgOQAMgNAFgZIADgNQgCgVgDgIQgFgQgQgCIgEgBQgMAAgIAMg");
	this.shape_8.setTransform(-180.5,75.3,0.522,0.522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A87139").s().p("Ah1BgQgSgNACggQABgtASglQAWgtAngSQApgRAuAQQAwARALAGQAfARAKAfQgBAMgJAKQgGAEgNAJQgdATgqAXIhHAnIggAJQgMADgKAAQgQAAgKgIg");
	this.shape_9.setTransform(-183.5,67.5,0.522,0.522);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A87139").s().p("AA/ByIgrgWQhZhOgrguQgNgOgEgJQgGgOAEgPQAmgfBFgBQBEgBAnAeQAlAcAKA6QALA6gZAnQgNAVgWAAQgIAAgKgDg");
	this.shape_10.setTransform(-161,71.6,0.522,0.522);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C98D4C").s().p("AhhBcQgggaACguQADiABQhrQAHgBAOAGQgEAPAGAOQAFAJAMAOQAqAvBaBOQgJAjgVArQgJASghA4QgIANgtBVQgrhOg5gvgAgWgmQgYAQgCAoIABAQQACAOAEAGQAFAKAMABQALACAIgHQAFgFAGgNQAFgLABgGQADgWAAgKQgCgRgLgNQgEgFgHgBQgHAAgGAFg");
	this.shape_11.setTransform(-166.7,78.2,0.522,0.522);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5B076").s().p("AghEHQgtgFgjggQgigfgLgtQgDgNgBgSIABggIAagNQAPgIALgDQA7gVAPg8QAjiJgIhqQA6gLBBAYQhQBsgDCBQgCAsAgAbQA5AuAsBOQgiAzg1ATQggAMgoAAQgRAAgUgDgAhvC6QAEAGAVASQAJAPAWAJQAYALATgGQASgGALgWIALgJQAFgFgDgIQgFgBgFADIgIAFQgUAJgIAAQgQABgIgQQgIgSAJgJQAHgIAVgEQANgCAIgIQALgKAAgPQAAgOgKgKQgIgIgPgGQgUgIgZABQgkABgIAYQgFAOAIANQAFAJAOAKIAMAIQAMAIABAOQABALgGAKQgEAHgKgEQgEgBgOgIQgDgCgIgKQgGgIgHgBQABAPADAFg");
	this.shape_12.setTransform(-175.1,79.9,0.522,0.522);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D89F5B").s().p("AjNEdQghgBgLgOQgMgPAFggIAGgHQAHgEgBgGQAQgEAFgDQAJgGgBgNIgGhCQgEgmgIgbIgKhGQgDgSgOABQgSACgYgIIgogMQgJgZgEhCIgCg9ICng4IASgDQgEg2ARB5QARB8gDgCQATAIAVgTQALgJAFgKQAgg5BBgZQAkgNATghQAngFAfAEQgEAaAQAUQA/BUBhAAQAWAyALBAQAHArAHBMIAGBtQgMAYgYAGQgNADgigCQgtgCAHgqQAcgVAEgcQACgZgRggQgGgOgEgGQgHgKgMgCQg7gfgkg7QgUgfgQgGQgQgHglAHIgqAMQglAIgUACQgGABgVgHQgQgEgGAJQgGAIABARIACAeIABAPIgNCdQgGAMACAOQAFAqgtAKQgLACgRAAIgLAAg");
	this.shape_13.setTransform(-158.6,103.3,0.522,0.522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D89F5B").s().p("AhUB0QgUgJgBgcQgBgQgIhDIgJhBIAvgwQAAAEAfARIAgAQIAxASQA5ASAfACQgTAhgkANQhCAZgfA4QgFAKgKAJQgPAOgPAAQgGAAgFgCg");
	this.shape_14.setTransform(-161.8,93.2,0.522,0.522);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#581E06").s().p("AmHFvQgUgmgZhEQhCizAGhjQgGgDgGACQgMAFgDAaQgCARgBgXQgCgXABgfQAFhdAZAAQAZAAAShIIAMhHQAghCA4gRQATgGAbgCIApgCIBugLQB4gIAxATQAvARA9gDQBVgFAHAAQAYADAngKQAegIABAGIAdgGIg3BMIAFAOQANAOAsAAQAsAAA+gPQAfgHAXgIIAAARQgDATgKAJQgSAPggAhQglAnAAAGQAAAGAzgGIBFgKQAdgChbBJQhaBHgmgEQgfgDAQATQAIAKAOAKIAhAMQAFAagogHQgpgGAAABQACgBgaB9QgKAvgEAhIAEBEQgMgMAIg4QgHhegKgoQgWhag4AIQAEgIg+gPQhDgShIgGQjQgUgQBUQgdgDgfAhQglAnAVAyQgugCgNAXQgbAyAzCnQAAAJgDAAQgGAAgNgYg");
	this.shape_15.setTransform(-225.2,-36.5,0.585,0.585);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9A890").s().p("AhOBVQgTgbgMgcQgKgbAFgGIgIiLIDzBIIACBTQg4Bhg5AcQgIAFgIAAQggAAgog6g");
	this.shape_16.setTransform(-231.3,6.8,0.585,0.585);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D36851").ss(0.5).p("AAChpQAFABAYBKQAZBKgCAQQgFAlgqAHQgoAHgVgh");
	this.shape_17.setTransform(-223.7,-15.9,0.585,0.585);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D0F14").s().p("AgHAdQgMgDgGgLQgGgLADgLQADgMALgGQALgGALADQAMADAGALQAGALgDALQgDAMgLAGQgHAEgIAAIgHgBg");
	this.shape_18.setTransform(-215.7,-21.3,0.585,0.585);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#141D2A").s().p("AgDAhQgNgBgIgLQgJgLACgNQABgNALgJQALgJAMACQANABAJALQAIALgCAMQgBAOgLAJQgJAHgLAAIgDAAg");
	this.shape_19.setTransform(-236,-20.9,0.585,0.585);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D55043").s().p("AhnACQgLgGgEgEQgHgHgFgOQCdBUBmhSQAFAMgGAIIgNAJQhFAaguABIgDABQgxAAgzgcg");
	this.shape_20.setTransform(-227.2,-6,0.585,0.585);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D1505").s().p("ABLAfQgggPgYgEQgdgFgbALQgfANgMgJQgLgJAGgfQACgGAHgBIAMgEQAigIAaAJIAuAVQAaAMAQAQQAEADAAAEQAAABAAABQgBABAAAAQAAABAAAAQAAAAgBAAQgCACgDAAQgDAAgDgDg");
	this.shape_21.setTransform(-214.9,-28.3,0.585,0.585);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#421707").s().p("Ah2AiIgBgQQAngTAYgJQAkgOAegFQAxgKApAKQAQAJADAPQACAJgCAUIgbAAQg8gEgjABQg1ACgqAMIgUgBg");
	this.shape_22.setTransform(-238,-27.4,0.585,0.585);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9A890").s().p("ABlGGQiDgChdgzQh5hDgqiTQgmAIgggfQgcgbgNguQgOgsAIgjQAIgnAegFQApB9AeAoQAPAUAFgFQhKibBMiEQBDh2CSgvQCSgvB3A8QCHBDAYCwQA5gJgVBKQgOAxgZAlQgGBqhLB0QhUCBheAAIgCAAg");
	this.shape_23.setTransform(-230.6,-19.1,0.585,0.585);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A4A6AB").s().p("AiUBAQgOgKgagZQgZgagCgFQADAHBHgCQBGgCBRgKQDEgZAFgjIAFAfQAAAogmAPQgxATh/AVQhQANgmAAQgZAAgHgGg");
	this.shape_24.setTransform(-205.7,114.7,0.585,0.585);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EDC294").s().p("Ah3CdQgIgLgKgMQgdgkg+hBIg5g5QAEgpAJgoQAShQAZAGQAbAGAdAVQAZASAEAKQACAEAwggQA1giATACQAQACCGB2QCEBxAKgEQAIgEAFANQAFAPgGASQgQA1hVARQiDAchLAAQhMAAgSgcg");
	this.shape_25.setTransform(-209.9,107,0.585,0.585);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A4A6AB").s().p("AAFA9QhMgEgaAFIhygVQhIgNgLgoQgDgMADgKQAEgLgBAMQACAJB+AVQCCAUAggJQAuAIBpglQBtgoAJAAQAVABAGANQAGAOgOAQQgaAdg0AVQhHAdhhAAIgkgBg");
	this.shape_26.setTransform(-236.1,116,0.585,0.585);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDC294").s().p("AkXCSQgahSAziXQAUg7ASgWQAVgYAGAmQAXBCBbgnIBCgeQAggMALAOQAXAcBDA5QBEA6A0AiQA2AkgLAnQgJAgg0AbQgqAWjMAAQjWAAgtggg");
	this.shape_27.setTransform(-236.4,107.8,0.585,0.585);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9A890").s().p("AgqFnQgBgQgCgLQgDgUgPgUQglgzAWg4QAUgzAtgLIiWlZIgUhxIArgSQAygTAlAAQAkA4A4DcQA3DQACACQAVARAlA7QAuBKgZAYQgRAUgbAVQg3ApgyADIgUAAQgtAAgDgOg");
	this.shape_28.setTransform(-204.4,44.9,0.585,0.585);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F9A890").s().p("AihFPQg8hNAtg6QAcgfAMgRQAXgeACgfQAFhoA/iyIA9idQAsg6BIAoQAkAUAbAgIjGHBIA0A5QAvA3ghgFQghgGARAuQAJAXAPAYQglAegvAPQgeAKgZAAQg6AAglgxg");
	this.shape_29.setTransform(-258.8,45.2,0.585,0.585);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#36637D").s().p("AlFFgQBah0AHlbIAAjYQAAhXANAIQBtAwB2APQCVATBjguQApgOARFLQAGBtACB3QABBpgCACQgzALgZAeQgJALgGACQgJAEgVgHQgTgTgPgJQgTgLgRACQADhRgHhkQgPjIgzhgQggg9gYBFQgQAwgUCOQgbDCgGAgQgUBsgYABQhPABgmAcQgTANgEAOQgogDgog1g");
	this.shape_30.setTransform(-230.6,79.8,0.585,0.585);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FE304E").s().p("AAMG/QhEgPhPgaIg0gSIgok5QAHgEgKgiQgRg4gGg2QgJhMhUgKQgagEgeAEIgZAEQAzh2B/hGQAYgOA4gZQAhgOgBgHIAoglIAPAbQATAfAUAVQA/BEAwg/QAwg/gHgcQgBgFgDgEQB4BEBjBRQCDBqghAlQgsgLgRALQgnAYgPAEQgiCSABCbQABCeAlBOQgsA/h1AAQg8AAhPgRgABdnPIAHACIAFAFIgMgHg");
	this.shape_31.setTransform(-232.2,33.3,0.585,0.585);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1C1615").s().p("AgEAAQgCgWgGgQIARADQgBAFAIAhQAGAYgUAMIgCgng");
	this.shape_32.setTransform(-212.6,-23.2,0.585,0.585);

	this.timeTxt = new cjs.Text("", "bold 18px 'Arial'");
	this.timeTxt.name = "timeTxt";
	this.timeTxt.textAlign = "right";
	this.timeTxt.lineHeight = 22;
	this.timeTxt.lineWidth = 115;
	this.timeTxt.parent = this;
	this.timeTxt.setTransform(34.2,-42.3,1.541,1.541);

	this.titleTxt = new cjs.Text("", "bold 20px 'Arial'");
	this.titleTxt.name = "titleTxt";
	this.titleTxt.textAlign = "center";
	this.titleTxt.lineHeight = 24;
	this.titleTxt.lineWidth = 343;
	this.titleTxt.parent = this;
	this.titleTxt.setTransform(6.3,-150.2,1.541,1.541);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F5D62C").s().p("EgppAZvQhYABg+gxQg8guAAhEMAAAgucQAAhAA8gxQA+guBYAAMBTSAAAQBZAAA9AuIARAOQAsAqAAA5MAAAAucQAABEg9AuQg9AxhZgBg");
	this.shape_33.setTransform(-1.7,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.titleTxt},{t:this.timeTxt},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.resultTxt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameEnd, new cjs.Rectangle(-289.3,-186.8,575.2,329.5), null);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DDDAD1","#CFCEC8","#9C9999"],[0,0.498,1],0,0,0,0,0,4.6).s().p("AgcAdQgLgMgBgRQABgQALgMQAMgMAQAAQARAAAMAMQAMAMgBAQQABARgMAMQgMAMgRgBQgQABgMgMg");
	this.shape.setTransform(13.5,-26.2,0.188,0.188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#DDDAD1","#CFCEC8","#9C9999"],[0,0.498,1],0,0,0,0,0,4.6).s().p("AgbAdQgNgMAAgRQAAgPANgMQAMgNAPAAQARAAALANQAMAMAAAPQAAARgMAMQgLALgRAAQgPAAgMgLg");
	this.shape_1.setTransform(-13.5,-26.1,0.188,0.188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AL/FEIjdiHQgWgGgCgJQgBgGAHgJIAIgJQAHgLAIgTQAQgnAFgnQAQh5hghUQgbgYgzgVQgzgUhBgOQiCgdilgBQiigBiDAaQhCANgzAUQgyAUgcAYQhgBUAQB5QAFAnAQAmQAIATAHAMQARAPgCAJQgDAJgWAGIjkCHQgKAGgLgDQgMgDgGgJQgFgKADgMQADgLAJgGIDPh6QgYgwgIg5QgIhAATg9QAYhKBBg4QBEg6CYgfQCKgbCnABQClABCNAeQCYAhBDA7QBAA4AYBKQATA8gJBAQgGA3gYAyIDHB6QAKAGADAMQAEAMgGAJQgGAKgMADIgIABQgHAAgHgFg");
	this.shape_2.setTransform(0.2,-29.6,0.188,0.188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#363634").s().p("AmdPTQi+hQiUiTQiTiThQjAQhUjEAAjZQAAjXBUjGQBQi/CTiTQCUiTC+hQQDGhUDXAAQDYAADGBUQC+BQCTCTQCUCTBRC/QBTDGAADXQAADZhTDEQhRDAiUCTQiTCTi+BQQjGBUjYAAQjXAAjGhUgAlvtlQipBHiDCDQiDCDhHCqQhKCvAAC/QAADABKCvQBHCqCDCDQCDCDCpBHQCvBLDAgBQDAABCwhLQCphHCDiDQCDiDBHiqQBLivAAjAQAAi/hLivQhHiqiDiDQiDiDiphHQiwhLjAABQi/gBiwBLg");
	this.shape_3.setTransform(0,-1.4,0.188,0.188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#363634","#3B3B3B"],[0,1],-45.2,15.9,33.7,-29.2).s().p("AlzAjQBEiFCrhiQCrhiCWAJQCXAKBDB0IsMG+QhDh0BFiIg");
	this.shape_4.setTransform(-10.8,-21.3,0.188,0.188);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DDDAD1","#CFCEC8","#9C9999"],[0,0.498,1],-3.4,2,3.5,-1.9).s().p("AgFA7IgwhSQgEgGAKgGIAqgXQAIgGADAGIAwBTQADAGgJAFIgqAXQgDADgDAAQgEAAgBgDg");
	this.shape_5.setTransform(-10,-19.2,0.188,0.188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#363634","#3B3B3B"],[0,1],45.3,15.9,-33.7,-29.2).s().p("AmWifQBCh0CYgKQCWgJCqBiQCsBiBECFQBFCIhDB0g");
	this.shape_6.setTransform(10.9,-21.3,0.188,0.188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DDDAD1","#CFCEC8","#9C9999"],[0,0.498,1],3.5,2,-3.4,-1.9).s().p("AgFA7IgqgXQgJgGADgFIAwhTQADgFAJAFIApAXQAKAGgEAGIgvBSQgCADgDAAQgDAAgEgDg");
	this.shape_7.setTransform(10,-19.2,0.188,0.188);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1A1A1A").ss(0.9,1,1).p("ALRm2IArBQIAiBVIAZBYIAQBZIAFBbIgcABIAcABIgEBaIgPBaIgXBYIgiBVIgqBRIgzBMIg7BGIhCA/IhIA4IhOAwIhTAmIhWAeIhZAUIhbALIhbAAIhbgJIhZgUIhXgcIhTgmIhPgvIhJg3IhCg+Ig8hFIg0hMIgrhQIgihVIgZhXIgPhaIgGhbIAEhcIAPhaIAYhYIAhhVIAqhQIAzhNIA7hGIBCg/IBIg3AKomeIApgYAKdoCIA0BMAIAphIAfgkIBCA+IA8BFAHWq8IBJA3AIAphIhFg0IAbgnAEirkIASgtIBTAlIBPAwAFxrAIhPgkIhSgcIANguIBXAdAFxrAIAWgsAI/omIAighAJ3nkIg4hCIg/g7AG7qVIhKgrALxkCIgghQIArgUALxkCIAtgPAMJiuIAugLAMJiuIgYhUAMcgEIAUAAIgUABIAAgBIgFhVIgOhVAMYBRIAEhUAMXhZIAwgHAMYBRIAwAGALRlSIgphMIgxhGIAmgeAgytJIBbgBIBbAJIBZATAp8ndIgmgdAp8ndIgvBHIgqgXArTlJIggBQIgXBUIgNBVIgEBUIgwACAsXhQIgwgGAsWBaIgvAHAsbAEIAFBWIAOBWIAYBTIAhBQIgsAUAsKilIgugLArzj5IgtgPAqrmWIgoBNIgsgUADQsAIhUgRIAIgwAB8sRIhWgJIhUAAIhWAKIgJgvIBbgKAjYr9IgOguIBZgUAk8sNIBWgeAjYr9IhSAcIgSgsAkqrhIhOAlIhJAsIhFA1IgfgkAnBqQIgcgmIBPgxAl4q8IgWgrIBSgmAoGpbIg+A8IgjghAiEsQIhUATAAmsaIADgwAgusaIgEgvApEofIg4BCAo+InIBAA7IggAkAjPMBIgNAtAlwLCIBPAjIgSAtAkhLlIBSAcIBUASIgIAvAm5KWIgcAnAlwLCIgWAqAm5KWIBJAsACFMRIBVgTIANAuACFMRIAJAvAAvMaIAEAxAAvMaIBWgJAh7MTIBWAIIgDAwAglMbIBUgBAn+JiIBFA0Ap2HlIgmAeAqnGfIAxBGIA4BCIgiAhAqnGfIgpAYArPFTIAoBMArwEDIgtAPAsICwIguALAMLCmIAuALAL0D6IAXhUIANhVAL0D6IAuAPALVFKIArAUALVFKIAfhQAKtGXIApAYAJ9HeIAwhHIAohNAJ9HeIAmAdAIHJcIAfAkAIHJcIA+g8IAjAhAErLiIASAsAErLiIBPglIAWArAF6K9IBIgsIAcAnAHCKRIBFg1AJFIgIA4hCADaL+IBRgc");
	this.shape_8.setTransform(0,-1.4,0.188,0.188);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DDDAD1","#CFCEC8","#9C9999"],[0,0.498,1],0.1,4.2,0,-4.1).s().p("AhnAvQgHAAAAgKIAAhKQAAgJAHAAIDPAAQAHAAAAAJIAABKQAAAEgCADQgCADgDAAg");
	this.shape_9.setTransform(0,-25.8,0.188,0.188);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#DDDAD1","#CFCEC8","#9C9999"],[0,0.498,1],-2.4,0,2.4,0).s().p("AgQBuQgDAAgCgCQgCgDAAgEIAAjJQAAgDACgDQACgDADAAIAiAAQACAAACADQACACAAAEIAADJQAAAJgGAAg");
	this.shape_10.setTransform(0,-23,0.188,0.188);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmEOZQi0hMiKiKQiKiKhMi0QhOi6AAjLQAAjKBOi6QBMi0CKiKQCKiKC0hMQC6hPDKAAQDMAAC5BPQC0BMCKCKQCKCKBMC0QBOC6ABDKQgBDLhOC6QhMC0iKCKQiKCKi0BMQi5BPjMAAQjKAAi6hPg");
	this.shape_11.setTransform(0,-1.4,0.188,0.188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(-19.9,-35.8,40,54.4), null);


(lib.bigSize = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5D62C").s().p("A5UDFIAAk1QAAgjAZgYQAYgZAjAAMAwBAAAQAjAAAYAZQAZAYAAAjIAAE1g");
	this.shape.setTransform(2.6,-88.3,0.804,0.752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3).p("AXsTMMgvXAAAQgyAAgjgjQgjgkAAgxMAAAginQAAgxAjgjQAjgkAyAAMAvXAAAQAyAAAjAkQAjAjAAAxMAAAAinQAAAxgjAkQgjAjgyAAg");
	this.shape_1.setTransform(2.6,-12,0.804,0.752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAFAFA").s().p("A3rTLQgyAAgjgiQgjgkAAgyMAAAgimQAAgxAjgjQAjgkAyABMAvXAAAQAygBAjAkQAjAjAAAxMAAAAimQAAAygjAkQgjAigyAAg");
	this.shape_2.setTransform(2.6,-12,0.804,0.752);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bigSize, new cjs.Rectangle(-130.5,-105.7,266.3,187.5), null);


(lib.wrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("wrongwav");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.2,1,1).p("AAfAsIgfgsIgeAsAAdgrIgdArIgZgi");
	this.shape.setTransform(63.9,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AlOEGIAAoLIKbAAIgeAsIgZgiIAZAiIAegsIACAAIAABYIAAGzgAFPitIgfgsIgfAsIAfgsgAFNkFg");
	this.shape_1.setTransform(33.5,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlOEGIAAoLIKbAAIACAAIAABYIAAGzgAFPitIgfgsIgfAsIAfgsgAEvjZIAegsIgeAsIgZgig");
	this.shape_2.setTransform(33.5,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.1,68.2,53.5);


(lib.correct = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("correctwav");
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(2,1,1).p("AgyAFIAdAtIBIhj");
	this.shape.setTransform(61.9,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AlOEGIAAoLIKdAAIhJBjIgdgsIAdAsIBJhjIAAILgAFPkFg");
	this.shape_1.setTransform(33.5,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,68.1,53.4);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.149)").ss(1.5,1,1).p("ACqAAQAABHgyAxQgxAyhHAAQhGAAgygyQgxgxAAhHQAAhGAxgyQAygxBGAAQBHAAAxAxQAyAyAABGg");
	this.shape.setTransform(0,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah4B4QgxgxAAhHQAAhFAxgzQAzgxBFAAQBHAAAxAxQAyAzAABFQAABHgyAxQgxAyhHAAQhFAAgzgyg");
	this.shape_1.setTransform(0,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#595959").ss(2,1,1).p("ACqAAQAABHgyAxQgxAyhHAAQhGAAgygyQgxgxAAhHQAAhGAxgyQAygxBGAAQBHAAAxAxQAyAyAABGg");
	this.shape_2.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-19,36,36);


(lib.purim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.purimjpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(-30,-31,0.031,0.031);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.purim, new cjs.Rectangle(-30,-31,61.3,62.2), null);


(lib.matza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663E08").ss(0.8).p("AiPAAIEfAA");
	this.shape.setTransform(-20.5,16.6,0.084,0.084);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663E08").ss(0.8).p("AiZAAIEzAA");
	this.shape_1.setTransform(-16.7,16.6,0.084,0.084);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663E08").ss(0.8).p("AiLAAIEXAA");
	this.shape_2.setTransform(-12.8,16.6,0.084,0.084);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_3.setTransform(-9.1,16.6,0.084,0.084);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663E08").ss(0.8).p("AiAAAIEBAA");
	this.shape_4.setTransform(-5.4,16.6,0.084,0.084);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663E08").ss(0.8).p("AiEAAIEJAA");
	this.shape_5.setTransform(-1.9,16.6,0.084,0.084);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_6.setTransform(1.7,16.6,0.084,0.084);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_7.setTransform(5.2,16.6,0.084,0.084);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#663E08").ss(0.8).p("AiSAAIElAA");
	this.shape_8.setTransform(8.9,16.6,0.084,0.084);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#663E08").ss(0.8).p("Ah7AAID2AA");
	this.shape_9.setTransform(12.6,16.6,0.084,0.084);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#663E08").ss(0.8).p("Ah5AAIDyAA");
	this.shape_10.setTransform(16,16.6,0.084,0.084);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#663E08").ss(0.8).p("Ah8AAID5AA");
	this.shape_11.setTransform(19.4,16.6,0.084,0.084);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#663E08").ss(0.8).p("AhuABQBKgBCTgB");
	this.shape_12.setTransform(22.8,16.5,0.084,0.084);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#663E08").ss(0.8).p("AiPAAIEfAA");
	this.shape_13.setTransform(-20.8,18.2,0.084,0.084);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663E08").ss(0.8).p("AiZAAIEzAA");
	this.shape_14.setTransform(-16.9,18.2,0.084,0.084);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#663E08").ss(0.8).p("AiLAAIEXAA");
	this.shape_15.setTransform(-13.1,18.2,0.084,0.084);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_16.setTransform(-9.4,18.2,0.084,0.084);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#663E08").ss(0.8).p("AiAAAIEBAA");
	this.shape_17.setTransform(-5.7,18.2,0.084,0.084);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#663E08").ss(0.8).p("AiEAAIEJAA");
	this.shape_18.setTransform(-2.1,18.2,0.084,0.084);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_19.setTransform(1.5,18.2,0.084,0.084);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_20.setTransform(4.9,18.2,0.084,0.084);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#663E08").ss(0.8).p("AiSAAIElAA");
	this.shape_21.setTransform(8.6,18.2,0.084,0.084);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#663E08").ss(0.8).p("Ah7AAID2AA");
	this.shape_22.setTransform(12.3,18.2,0.084,0.084);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#663E08").ss(0.8).p("Ah5AAIDyAA");
	this.shape_23.setTransform(15.8,18.2,0.084,0.084);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#663E08").ss(0.8).p("Ah8AAID5AA");
	this.shape_24.setTransform(19.2,18.2,0.084,0.084);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#663E08").ss(0.8).p("AhuABQBKgBCTgB");
	this.shape_25.setTransform(22.5,18.1,0.084,0.084);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#663E08").ss(0.8).p("AiPAAIEfAA");
	this.shape_26.setTransform(-20.6,19.8,0.084,0.084);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#663E08").ss(0.8).p("AiZAAIEzAA");
	this.shape_27.setTransform(-16.8,19.8,0.084,0.084);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#663E08").ss(0.8).p("AiLAAIEXAA");
	this.shape_28.setTransform(-12.9,19.8,0.084,0.084);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_29.setTransform(-9.2,19.8,0.084,0.084);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#663E08").ss(0.8).p("AiAAAIEBAA");
	this.shape_30.setTransform(-5.5,19.8,0.084,0.084);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#663E08").ss(0.8).p("AiEAAIEJAA");
	this.shape_31.setTransform(-1.9,19.8,0.084,0.084);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_32.setTransform(1.6,19.8,0.084,0.084);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_33.setTransform(5.1,19.8,0.084,0.084);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#663E08").ss(0.8).p("AiSAAIElAA");
	this.shape_34.setTransform(8.8,19.8,0.084,0.084);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#663E08").ss(0.8).p("Ah7AAID2AA");
	this.shape_35.setTransform(12.5,19.8,0.084,0.084);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#663E08").ss(0.8).p("Ah5AAIDyAA");
	this.shape_36.setTransform(15.9,19.8,0.084,0.084);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#663E08").ss(0.8).p("Ah8AAID5AA");
	this.shape_37.setTransform(19.4,19.8,0.084,0.084);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#663E08").ss(0.8).p("AhuABQBKgBCTgB");
	this.shape_38.setTransform(22.7,19.8,0.084,0.084);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_39.setTransform(-21.1,-20.9,0.084,0.084);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_40.setTransform(-17.3,-20.9,0.084,0.084);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_41.setTransform(-13.5,-20.9,0.084,0.084);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_42.setTransform(-9.8,-20.9,0.084,0.084);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_43.setTransform(-6.2,-20.9,0.084,0.084);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_44.setTransform(-2.6,-20.9,0.084,0.084);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_45.setTransform(0.9,-20.9,0.084,0.084);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#663E08").ss(0.8).p("Ah2AAIDtAA");
	this.shape_46.setTransform(4.4,-20.9,0.084,0.084);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_47.setTransform(8,-20.9,0.084,0.084);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_48.setTransform(11.7,-20.9,0.084,0.084);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_49.setTransform(15.1,-20.9,0.084,0.084);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_50.setTransform(18.5,-20.9,0.084,0.084);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_51.setTransform(21.8,-21,0.084,0.084);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#663E08").ss(0.8).p("AiOAAIEdAA");
	this.shape_52.setTransform(-20.9,-19.3,0.084,0.084);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_53.setTransform(-17.1,-19.3,0.084,0.084);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_54.setTransform(-13.3,-19.3,0.084,0.084);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_55.setTransform(-9.6,-19.3,0.084,0.084);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_56.setTransform(-6,-19.3,0.084,0.084);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_57.setTransform(-2.4,-19.3,0.084,0.084);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_58.setTransform(1.1,-19.3,0.084,0.084);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_59.setTransform(4.6,-19.3,0.084,0.084);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_60.setTransform(8.2,-19.3,0.084,0.084);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_61.setTransform(11.8,-19.3,0.084,0.084);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_62.setTransform(15.3,-19.3,0.084,0.084);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_63.setTransform(18.7,-19.3,0.084,0.084);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_64.setTransform(22,-19.4,0.084,0.084);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_65.setTransform(-21.2,-17.7,0.084,0.084);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_66.setTransform(-17.4,-17.7,0.084,0.084);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_67.setTransform(-13.6,-17.7,0.084,0.084);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_68.setTransform(-9.9,-17.7,0.084,0.084);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_69.setTransform(-6.2,-17.7,0.084,0.084);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_70.setTransform(-2.7,-17.7,0.084,0.084);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_71.setTransform(0.9,-17.7,0.084,0.084);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#663E08").ss(0.8).p("Ah2AAIDtAA");
	this.shape_72.setTransform(4.3,-17.7,0.084,0.084);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_73.setTransform(7.9,-17.7,0.084,0.084);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_74.setTransform(11.6,-17.7,0.084,0.084);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_75.setTransform(15,-17.7,0.084,0.084);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_76.setTransform(18.4,-17.7,0.084,0.084);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_77.setTransform(21.7,-17.7,0.084,0.084);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_78.setTransform(-21,-16.1,0.084,0.084);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_79.setTransform(-17.2,-16.1,0.084,0.084);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_80.setTransform(-13.4,-16.1,0.084,0.084);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_81.setTransform(-9.7,-16.1,0.084,0.084);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_82.setTransform(-6.1,-16.1,0.084,0.084);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_83.setTransform(-2.5,-16.1,0.084,0.084);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_84.setTransform(1,-16.1,0.084,0.084);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#663E08").ss(0.8).p("Ah2AAIDtAA");
	this.shape_85.setTransform(4.5,-16.1,0.084,0.084);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_86.setTransform(8.1,-16.1,0.084,0.084);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_87.setTransform(11.8,-16.1,0.084,0.084);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_88.setTransform(15.2,-16.1,0.084,0.084);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_89.setTransform(18.6,-16.1,0.084,0.084);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_90.setTransform(21.9,-16.1,0.084,0.084);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#663E08").ss(0.8).p("AiOAAIEdAA");
	this.shape_91.setTransform(-20.9,-14.8,0.084,0.084);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_92.setTransform(-17.1,-14.8,0.084,0.084);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_93.setTransform(-13.3,-14.8,0.084,0.084);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_94.setTransform(-9.6,-14.8,0.084,0.084);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_95.setTransform(-6,-14.8,0.084,0.084);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_96.setTransform(-2.4,-14.8,0.084,0.084);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_97.setTransform(1.1,-14.8,0.084,0.084);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_98.setTransform(4.6,-14.8,0.084,0.084);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_99.setTransform(8.2,-14.8,0.084,0.084);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_100.setTransform(11.8,-14.8,0.084,0.084);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_101.setTransform(15.3,-14.8,0.084,0.084);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_102.setTransform(18.7,-14.8,0.084,0.084);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_103.setTransform(22,-14.9,0.084,0.084);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_104.setTransform(-20.8,-13.2,0.084,0.084);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_105.setTransform(-17,-13.2,0.084,0.084);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_106.setTransform(-13.2,-13.2,0.084,0.084);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_107.setTransform(-9.5,-13.2,0.084,0.084);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_108.setTransform(-5.8,-13.2,0.084,0.084);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_109.setTransform(-2.3,-13.2,0.084,0.084);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_110.setTransform(1.3,-13.2,0.084,0.084);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_111.setTransform(4.7,-13.2,0.084,0.084);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_112.setTransform(8.4,-13.2,0.084,0.084);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_113.setTransform(12,-13.2,0.084,0.084);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_114.setTransform(15.4,-13.2,0.084,0.084);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_115.setTransform(18.8,-13.2,0.084,0.084);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_116.setTransform(22.2,-13.3,0.084,0.084);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_117.setTransform(-21,-11.6,0.084,0.084);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_118.setTransform(-17.2,-11.6,0.084,0.084);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_119.setTransform(-13.4,-11.6,0.084,0.084);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_120.setTransform(-9.7,-11.6,0.084,0.084);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_121.setTransform(-6.1,-11.6,0.084,0.084);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_122.setTransform(-2.5,-11.6,0.084,0.084);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_123.setTransform(1,-11.6,0.084,0.084);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#663E08").ss(0.8).p("Ah2AAIDtAA");
	this.shape_124.setTransform(4.5,-11.6,0.084,0.084);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_125.setTransform(8.1,-11.6,0.084,0.084);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_126.setTransform(11.8,-11.6,0.084,0.084);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_127.setTransform(15.2,-11.6,0.084,0.084);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_128.setTransform(18.6,-11.6,0.084,0.084);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_129.setTransform(21.9,-11.7,0.084,0.084);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#663E08").ss(0.8).p("AiOAAIEdAA");
	this.shape_130.setTransform(-20.9,-10,0.084,0.084);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_131.setTransform(-17.1,-10,0.084,0.084);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_132.setTransform(-13.2,-10,0.084,0.084);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_133.setTransform(-9.6,-10,0.084,0.084);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_134.setTransform(-5.9,-10,0.084,0.084);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_135.setTransform(-2.4,-10,0.084,0.084);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_136.setTransform(1.2,-10,0.084,0.084);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_137.setTransform(4.6,-10,0.084,0.084);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_138.setTransform(8.3,-10,0.084,0.084);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_139.setTransform(11.9,-10,0.084,0.084);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_140.setTransform(15.4,-10,0.084,0.084);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_141.setTransform(18.8,-10,0.084,0.084);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_142.setTransform(22.1,-10.1,0.084,0.084);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_143.setTransform(-20.8,-8.4,0.084,0.084);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_144.setTransform(-17,-8.4,0.084,0.084);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_145.setTransform(-13.2,-8.4,0.084,0.084);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_146.setTransform(-9.5,-8.4,0.084,0.084);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_147.setTransform(-5.8,-8.4,0.084,0.084);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_148.setTransform(-2.3,-8.4,0.084,0.084);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_149.setTransform(1.3,-8.4,0.084,0.084);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_150.setTransform(4.7,-8.4,0.084,0.084);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_151.setTransform(8.4,-8.4,0.084,0.084);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_152.setTransform(12,-8.4,0.084,0.084);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_153.setTransform(15.4,-8.4,0.084,0.084);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_154.setTransform(18.8,-8.4,0.084,0.084);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_155.setTransform(22.2,-8.5,0.084,0.084);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_156.setTransform(-20.6,-6.8,0.084,0.084);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_157.setTransform(-16.8,-6.8,0.084,0.084);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_158.setTransform(-13,-6.8,0.084,0.084);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_159.setTransform(-9.3,-6.8,0.084,0.084);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_160.setTransform(-5.7,-6.8,0.084,0.084);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_161.setTransform(-2.1,-6.8,0.084,0.084);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_162.setTransform(1.4,-6.8,0.084,0.084);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_163.setTransform(4.9,-6.8,0.084,0.084);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_164.setTransform(8.5,-6.8,0.084,0.084);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_165.setTransform(12.2,-6.8,0.084,0.084);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_166.setTransform(15.6,-6.8,0.084,0.084);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_167.setTransform(19,-6.8,0.084,0.084);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_168.setTransform(22.3,-6.9,0.084,0.084);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#663E08").ss(0.8).p("AiOAAIEdAA");
	this.shape_169.setTransform(-20.9,-5.2,0.084,0.084);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_170.setTransform(-17.1,-5.2,0.084,0.084);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_171.setTransform(-13.2,-5.2,0.084,0.084);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_172.setTransform(-9.6,-5.2,0.084,0.084);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_173.setTransform(-5.9,-5.2,0.084,0.084);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_174.setTransform(-2.4,-5.2,0.084,0.084);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_175.setTransform(1.2,-5.2,0.084,0.084);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_176.setTransform(4.6,-5.2,0.084,0.084);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#663E08").ss(0.8).p("AiQAAIEhAA");
	this.shape_177.setTransform(8.3,-5.2,0.084,0.084);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_178.setTransform(11.9,-5.2,0.084,0.084);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_179.setTransform(15.4,-5.2,0.084,0.084);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_180.setTransform(18.8,-5.2,0.084,0.084);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_181.setTransform(22.1,-5.2,0.084,0.084);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_182.setTransform(-20.7,-3.6,0.084,0.084);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_183.setTransform(-16.9,-3.6,0.084,0.084);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_184.setTransform(-13.1,-3.6,0.084,0.084);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_185.setTransform(-9.4,-3.6,0.084,0.084);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_186.setTransform(-5.7,-3.6,0.084,0.084);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_187.setTransform(-2.2,-3.6,0.084,0.084);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_188.setTransform(1.4,-3.6,0.084,0.084);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_189.setTransform(4.8,-3.6,0.084,0.084);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_190.setTransform(8.4,-3.6,0.084,0.084);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_191.setTransform(12.1,-3.6,0.084,0.084);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_192.setTransform(15.5,-3.6,0.084,0.084);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_193.setTransform(18.9,-3.6,0.084,0.084);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_194.setTransform(22.2,-3.6,0.084,0.084);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_195.setTransform(-20.6,-2.3,0.084,0.084);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_196.setTransform(-16.8,-2.3,0.084,0.084);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_197.setTransform(-13,-2.3,0.084,0.084);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_198.setTransform(-9.3,-2.3,0.084,0.084);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_199.setTransform(-5.7,-2.3,0.084,0.084);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_200.setTransform(-2.1,-2.3,0.084,0.084);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_201.setTransform(1.4,-2.3,0.084,0.084);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_202.setTransform(4.9,-2.3,0.084,0.084);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_203.setTransform(8.5,-2.3,0.084,0.084);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_204.setTransform(12.2,-2.3,0.084,0.084);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_205.setTransform(15.6,-2.3,0.084,0.084);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_206.setTransform(19,-2.3,0.084,0.084);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_207.setTransform(22.3,-2.4,0.084,0.084);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#663E08").ss(0.8).p("AiOAAIEdAA");
	this.shape_208.setTransform(-20.4,-0.7,0.084,0.084);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_209.setTransform(-16.6,-0.7,0.084,0.084);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_210.setTransform(-12.8,-0.7,0.084,0.084);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_211.setTransform(-9.1,-0.7,0.084,0.084);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_212.setTransform(-5.5,-0.7,0.084,0.084);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_213.setTransform(-1.9,-0.7,0.084,0.084);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#663E08").ss(0.8).p("AiBAAIEEAA");
	this.shape_214.setTransform(1.6,-0.7,0.084,0.084);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_215.setTransform(5.1,-0.7,0.084,0.084);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_216.setTransform(8.7,-0.7,0.084,0.084);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_217.setTransform(12.3,-0.7,0.084,0.084);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_218.setTransform(15.8,-0.7,0.084,0.084);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_219.setTransform(19.2,-0.7,0.084,0.084);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_220.setTransform(22.5,-0.8,0.084,0.084);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_221.setTransform(-20.7,0.9,0.084,0.084);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_222.setTransform(-16.9,0.9,0.084,0.084);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_223.setTransform(-13.1,0.9,0.084,0.084);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_224.setTransform(-9.4,0.9,0.084,0.084);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_225.setTransform(-5.7,0.9,0.084,0.084);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_226.setTransform(-2.2,0.9,0.084,0.084);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_227.setTransform(1.4,0.9,0.084,0.084);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_228.setTransform(4.8,0.9,0.084,0.084);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_229.setTransform(8.4,0.9,0.084,0.084);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_230.setTransform(12.1,0.9,0.084,0.084);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_231.setTransform(15.5,0.9,0.084,0.084);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_232.setTransform(18.9,0.9,0.084,0.084);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_233.setTransform(22.2,0.8,0.084,0.084);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_234.setTransform(-20.5,2.5,0.084,0.084);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_235.setTransform(-16.7,2.5,0.084,0.084);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_236.setTransform(-12.9,2.5,0.084,0.084);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_237.setTransform(-9.2,2.5,0.084,0.084);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_238.setTransform(-5.6,2.5,0.084,0.084);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_239.setTransform(-2,2.5,0.084,0.084);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#663E08").ss(0.8).p("AiBAAIEEAA");
	this.shape_240.setTransform(1.5,2.5,0.084,0.084);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#663E08").ss(0.8).p("Ah2AAIDtAA");
	this.shape_241.setTransform(5,2.5,0.084,0.084);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_242.setTransform(8.6,2.5,0.084,0.084);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_243.setTransform(12.3,2.5,0.084,0.084);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_244.setTransform(15.7,2.5,0.084,0.084);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_245.setTransform(19.1,2.5,0.084,0.084);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_246.setTransform(22.4,2.4,0.084,0.084);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_247.setTransform(-20.6,4.1,0.084,0.084);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_248.setTransform(-16.8,4.1,0.084,0.084);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_249.setTransform(-13,4.1,0.084,0.084);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_250.setTransform(-9.3,4.1,0.084,0.084);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_251.setTransform(-5.7,4.1,0.084,0.084);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_252.setTransform(-2.1,4.1,0.084,0.084);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_253.setTransform(1.4,4.1,0.084,0.084);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_254.setTransform(4.9,4.1,0.084,0.084);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_255.setTransform(8.5,4.1,0.084,0.084);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_256.setTransform(12.2,4.1,0.084,0.084);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_257.setTransform(15.6,4.1,0.084,0.084);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_258.setTransform(19,4.1,0.084,0.084);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_259.setTransform(22.3,4,0.084,0.084);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#663E08").ss(0.8).p("AiOAAIEdAA");
	this.shape_260.setTransform(-20.4,5.7,0.084,0.084);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_261.setTransform(-16.6,5.7,0.084,0.084);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_262.setTransform(-12.8,5.7,0.084,0.084);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_263.setTransform(-9.1,5.7,0.084,0.084);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_264.setTransform(-5.5,5.7,0.084,0.084);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_265.setTransform(-1.9,5.7,0.084,0.084);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#663E08").ss(0.8).p("AiBAAIEEAA");
	this.shape_266.setTransform(1.6,5.7,0.084,0.084);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_267.setTransform(5.1,5.7,0.084,0.084);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_268.setTransform(8.7,5.7,0.084,0.084);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_269.setTransform(12.3,5.7,0.084,0.084);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_270.setTransform(15.8,5.7,0.084,0.084);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_271.setTransform(19.2,5.7,0.084,0.084);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_272.setTransform(22.5,5.6,0.084,0.084);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_273.setTransform(-20.7,7.3,0.084,0.084);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_274.setTransform(-16.9,7.3,0.084,0.084);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_275.setTransform(-13.1,7.3,0.084,0.084);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_276.setTransform(-9.4,7.3,0.084,0.084);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_277.setTransform(-5.7,7.3,0.084,0.084);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_278.setTransform(-2.2,7.3,0.084,0.084);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#663E08").ss(0.8).p("AiCAAIEFAA");
	this.shape_279.setTransform(1.4,7.3,0.084,0.084);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_280.setTransform(4.8,7.3,0.084,0.084);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_281.setTransform(8.4,7.3,0.084,0.084);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_282.setTransform(12.1,7.3,0.084,0.084);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_283.setTransform(15.5,7.3,0.084,0.084);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_284.setTransform(18.9,7.3,0.084,0.084);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_285.setTransform(22.2,7.3,0.084,0.084);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_286.setTransform(-20.5,8.9,0.084,0.084);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_287.setTransform(-16.7,8.9,0.084,0.084);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_288.setTransform(-12.9,8.9,0.084,0.084);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_289.setTransform(-9.2,8.9,0.084,0.084);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_290.setTransform(-5.6,8.9,0.084,0.084);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_291.setTransform(-2,8.9,0.084,0.084);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#663E08").ss(0.8).p("AiBAAIEEAA");
	this.shape_292.setTransform(1.5,8.9,0.084,0.084);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#663E08").ss(0.8).p("Ah2AAIDtAA");
	this.shape_293.setTransform(5,8.9,0.084,0.084);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_294.setTransform(8.6,8.9,0.084,0.084);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_295.setTransform(12.3,8.9,0.084,0.084);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_296.setTransform(15.7,8.9,0.084,0.084);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_297.setTransform(19.1,8.9,0.084,0.084);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_298.setTransform(22.4,8.9,0.084,0.084);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#663E08").ss(0.8).p("AiOAAIEdAA");
	this.shape_299.setTransform(-20.4,10.2,0.084,0.084);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_300.setTransform(-16.6,10.2,0.084,0.084);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_301.setTransform(-12.8,10.2,0.084,0.084);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_302.setTransform(-9.1,10.2,0.084,0.084);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_303.setTransform(-5.5,10.2,0.084,0.084);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_304.setTransform(-1.9,10.2,0.084,0.084);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#663E08").ss(0.8).p("AiBAAIEEAA");
	this.shape_305.setTransform(1.6,10.2,0.084,0.084);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_306.setTransform(5.1,10.2,0.084,0.084);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_307.setTransform(8.7,10.2,0.084,0.084);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_308.setTransform(12.3,10.2,0.084,0.084);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_309.setTransform(15.8,10.2,0.084,0.084);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#663E08").ss(0.8).p("Ah7AAQCkAABTAA");
	this.shape_310.setTransform(19.2,10.2,0.084,0.084);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_311.setTransform(22.5,10.1,0.084,0.084);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#663E08").ss(0.8).p("AiOAAIEdAA");
	this.shape_312.setTransform(-20.3,11.8,0.084,0.084);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_313.setTransform(-16.5,11.8,0.084,0.084);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_314.setTransform(-12.7,11.8,0.084,0.084);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_315.setTransform(-9,11.8,0.084,0.084);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_316.setTransform(-5.3,11.8,0.084,0.084);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_317.setTransform(-1.8,11.8,0.084,0.084);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#663E08").ss(0.8).p("AiBAAIEEAA");
	this.shape_318.setTransform(1.8,11.8,0.084,0.084);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_319.setTransform(5.2,11.8,0.084,0.084);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_320.setTransform(8.9,11.8,0.084,0.084);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_321.setTransform(12.5,11.8,0.084,0.084);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_322.setTransform(15.9,11.8,0.084,0.084);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#663E08").ss(0.8).p("Ah7AAID3AA");
	this.shape_323.setTransform(19.3,11.8,0.084,0.084);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCTgB");
	this.shape_324.setTransform(22.7,11.7,0.084,0.084);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_325.setTransform(-20.5,13.4,0.084,0.084);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_326.setTransform(-16.7,13.4,0.084,0.084);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_327.setTransform(-12.9,13.4,0.084,0.084);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_328.setTransform(-9.2,13.4,0.084,0.084);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_329.setTransform(-5.6,13.4,0.084,0.084);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEGAA");
	this.shape_330.setTransform(-2,13.4,0.084,0.084);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#663E08").ss(0.8).p("AiBAAIEEAA");
	this.shape_331.setTransform(1.5,13.4,0.084,0.084);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#663E08").ss(0.8).p("Ah2AAIDtAA");
	this.shape_332.setTransform(5,13.4,0.084,0.084);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_333.setTransform(8.6,13.4,0.084,0.084);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_334.setTransform(12.3,13.4,0.084,0.084);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_335.setTransform(15.7,13.4,0.084,0.084);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#663E08").ss(0.8).p("Ah7AAID3AA");
	this.shape_336.setTransform(19.1,13.4,0.084,0.084);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_337.setTransform(22.4,13.3,0.084,0.084);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#663E08").ss(0.8).p("AiNAAIEbAA");
	this.shape_338.setTransform(-20.4,15,0.084,0.084);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#663E08").ss(0.8).p("AiYAAIExAA");
	this.shape_339.setTransform(-16.5,15,0.084,0.084);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#663E08").ss(0.8).p("AiKAAIEVAA");
	this.shape_340.setTransform(-12.7,15,0.084,0.084);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#663E08").ss(0.8).p("AiJAAIETAA");
	this.shape_341.setTransform(-9.1,15,0.084,0.084);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#663E08").ss(0.8).p("Ah/AAID/AA");
	this.shape_342.setTransform(-5.4,15,0.084,0.084);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#663E08").ss(0.8).p("AiDAAIEHAA");
	this.shape_343.setTransform(-1.9,15,0.084,0.084);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#663E08").ss(0.8).p("AiBAAIEEAA");
	this.shape_344.setTransform(1.7,15,0.084,0.084);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#663E08").ss(0.8).p("Ah3AAIDvAA");
	this.shape_345.setTransform(5.1,15,0.084,0.084);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#663E08").ss(0.8).p("AiRAAIEjAA");
	this.shape_346.setTransform(8.8,15,0.084,0.084);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#663E08").ss(0.8).p("Ah6AAID1AA");
	this.shape_347.setTransform(12.4,15,0.084,0.084);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#663E08").ss(0.8).p("Ah4AAIDxAA");
	this.shape_348.setTransform(15.9,15,0.084,0.084);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#663E08").ss(0.8).p("Ah7AAID3AA");
	this.shape_349.setTransform(19.3,15,0.084,0.084);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#663E08").ss(0.8).p("AhtABQBJgBCSgB");
	this.shape_350.setTransform(22.6,14.9,0.084,0.084);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#663E08").ss(0.8).p("EgrqgnhMBXVAAAMAAABPDMhXVAAAg");
	this.shape_351.setTransform(0.6,-0.7,0.084,0.084);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#F9D395").s().p("EgrqAniMAAAhPDMBXVAAAMAAABPDg");
	this.shape_352.setTransform(0.6,-0.7,0.084,0.084);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.matza, new cjs.Rectangle(-24,-23,49.2,44.7), null);


(lib.lion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lion1840092_1280();
	this.instance.parent = this;
	this.instance.setTransform(-24,-17,0.035,0.035);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lion, new cjs.Rectangle(-24,-17,45.1,35), null);


(lib.karpas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-30,-19,0.045,0.045);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.karpas, new cjs.Rectangle(-30,-19,58.1,38.7), null);


(lib.hipo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AAGgFQgCABgDACQgEAEgCAE");
	this.shape.setTransform(17.9,-13.7,0.153,0.153);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AALgCQgFAAgFABQgIABgDAD");
	this.shape_1.setTransform(17.8,-13.3,0.153,0.153);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AAMgGQgFAAgGACQgKADgCAH");
	this.shape_2.setTransform(17.8,-12.9,0.153,0.153);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AAchCQgIAFgKALQgSAUgIAZIgIAZQgHAdAJAS");
	this.shape_3.setTransform(18,-13.4,0.153,0.153);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59433C").ss(0.4,1,0,2.4).p("ADJjNQghgCgwAOQhiAdhPBWQgZAWgeAvQg8BdgcB6");
	this.shape_4.setTransform(6.9,-10.7,0.153,0.153);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#514438").ss(0.1,1,0,2.4).p("AAIADQgLgDgEgC");
	this.shape_5.setTransform(12.3,-7.8,0.153,0.153);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#514438").ss(0.1,1,0,2.4).p("AAeADQgLADgNAAQgZABgKgN");
	this.shape_6.setTransform(13.1,-6.6,0.153,0.153);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#514438").ss(0.1,1,0,2.4).p("AgCgEIAFAJ");
	this.shape_7.setTransform(14.4,-6.8,0.153,0.153);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#514438").ss(0.1,1,0,2.4).p("AgIgGIAIAGQAHAHACAA");
	this.shape_8.setTransform(14.4,-6.9,0.153,0.153);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#514438").ss(0.1,1,0,2.4).p("ABBAoQgdgvgEgFQgagegfADQgaABgNAM");
	this.shape_9.setTransform(13.6,-7.7,0.153,0.153);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3D332A").ss(0.4,1,0,2.4).p("AgGgZIACAXQAEAWAHAG");
	this.shape_10.setTransform(-19,14.7,0.153,0.153);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3D332A").ss(0.4,1,0,2.4).p("AgCgXIAFAv");
	this.shape_11.setTransform(-17.8,14.6,0.153,0.153);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#3D332A").ss(0.4,1,0,2.4).p("AAIAWQgKgKgFgh");
	this.shape_12.setTransform(-9.8,12.1,0.153,0.153);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#3D332A").ss(0.4,1,0,2.4).p("AAKAVQgNgmgGgC");
	this.shape_13.setTransform(-8.7,12,0.153,0.153);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3D332A").ss(0.4,1,0,2.4).p("AAIAYQgNgggCgP");
	this.shape_14.setTransform(8.5,15,0.153,0.153);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#3D332A").ss(0.4,1,0,2.4).p("AAIAUQgMgmgDgB");
	this.shape_15.setTransform(9.5,14.8,0.153,0.153);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3D332A").ss(0.4,1,0,2.4).p("AAGAXQgPgZAFgU");
	this.shape_16.setTransform(1.5,17.8,0.153,0.153);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3D332A").ss(0.4,1,0,2.4).p("AADAUQAAgggFgH");
	this.shape_17.setTransform(3.1,17.6,0.153,0.153);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#847B7B").s().p("AAZAbQgHAAgGgCIgOgHQgJgEgGgFIgLgJQgHgFgDgHQgEgJAIgEQAGgCAFABIAJAAQAPgCANAEIAIAEQAIAFACAGQAEAHADAOQADAKgEAEQgDACgEAAIgGgBg");
	this.shape_18.setTransform(-10.5,12.1,0.153,0.153);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAtAGQgBgDgFgCQgJgEgOABQgBABgUAAQgXgBgRgD");
	this.shape_19.setTransform(-19.8,14.2,0.153,0.153);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8E8584").s().p("AAEAaQgcgPgIgOQgGgLgBgEQgBgHAHgBQANgCAUgBQAcAAAGAHQAKAugHADQgHACgIABQgLgBgHgDg");
	this.shape_20.setTransform(-19.7,14.7,0.153,0.153);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ADA1A0").s().p("AgKgIQgCgFACgGQABgGACAGIAOAaQAIAQgGAAQgPgCgEgdg");
	this.shape_21.setTransform(1,17.9,0.153,0.153);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ADA1A0").s().p("AgEABQgFgUAGgBQADgBAEAVQAGAUgEABIAAAAQgGAAgEgUg");
	this.shape_22.setTransform(8.3,15.1,0.153,0.153);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8E8584").s().p("AgBAaIgRgHQgKgFgDgEQgFgKAAgJQAAgOAMAAQARAAAMgCQADAAAJgDQAEABADAEQAEAFAAAEIAGAUQAFARgGADQgHADgLAAQgKAAgGgDg");
	this.shape_23.setTransform(8,15.1,0.153,0.153);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAnAHQgLgHgPACQgPACgVgHIgPgD");
	this.shape_24.setTransform(0.8,17.4,0.153,0.153);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8E8584").s().p("AAAAYQgNgFgNgMQgRgOgFgRQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQADgDAIACIAYAGQAMADAFAAQAdAAADAEIAEALQADAIACACQAEAGAAAIQgBAKgHABIgGABQgQAAgUgHg");
	this.shape_25.setTransform(0.7,17.8,0.153,0.153);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AACgJIgDAT");
	this.shape_26.setTransform(18.9,1.7,0.153,0.153);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgCgLIAFAX");
	this.shape_27.setTransform(19.5,2,0.153,0.153);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgEgFIAJAL");
	this.shape_28.setTransform(19.8,1.6,0.153,0.153);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgFgDIALAH");
	this.shape_29.setTransform(23.3,-0.8,0.153,0.153);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgEgFIAJAL");
	this.shape_30.setTransform(23.4,0.4,0.153,0.153);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgFgHQALAMAAAD");
	this.shape_31.setTransform(24.2,1,0.153,0.153);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgEgGIAKAN");
	this.shape_32.setTransform(24,0.4,0.153,0.153);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgIgIIAHAGQAGAGAEAF");
	this.shape_33.setTransform(24.4,0.5,0.153,0.153);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgIgEIAHADQAHADADAD");
	this.shape_34.setTransform(24.4,-0.2,0.153,0.153);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgEgDIAJAH");
	this.shape_35.setTransform(23.8,-0.6,0.153,0.153);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgJgCIAIACQAIABADAC");
	this.shape_36.setTransform(24.4,-0.5,0.153,0.153);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgJgCIAJABQAIABACAD");
	this.shape_37.setTransform(24.3,-1.1,0.153,0.153);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AgMAAIAKgBQAKABAFAC");
	this.shape_38.setTransform(24.4,-1.7,0.153,0.153);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAQADQgXgHgIAD");
	this.shape_39.setTransform(15.2,-1.6,0.153,0.153);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAHgJQgDADgEAEQgGAHAAAF");
	this.shape_40.setTransform(14.1,1.8,0.153,0.153);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AADgNIgDAKQgCAKAAAH");
	this.shape_41.setTransform(16.1,2.5,0.153,0.153);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAHgLQgDAEgDAFQgFAJgBAF");
	this.shape_42.setTransform(16.3,0.8,0.153,0.153);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAEgNIgEALQgDAMAAAE");
	this.shape_43.setTransform(14.7,2.1,0.153,0.153);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAMgGQgRAGgGAG");
	this.shape_44.setTransform(15.2,0,0.153,0.153);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AADgGIgFAN");
	this.shape_45.setTransform(15.6,1.5,0.153,0.153);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAIgNQgEAFgEAHQgHALAAAE");
	this.shape_46.setTransform(14.8,1.1,0.153,0.153);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAFgHIgJAP");
	this.shape_47.setTransform(14.1,1,0.153,0.153);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AALgOQgFAGgGAGQgKAMAAAF");
	this.shape_48.setTransform(13.8,0.6,0.153,0.153);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAMgHQgGACgGADQgKAEgBAG");
	this.shape_49.setTransform(14.4,0.1,0.153,0.153);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AAMgDQgQABgHAG");
	this.shape_50.setTransform(14.1,-0.4,0.153,0.153);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#B7AA8E").ss(1,1,0,2.4,true).p("AASgEQgKAAgLAEQgNACgBAD");
	this.shape_51.setTransform(14.4,-0.9,0.153,0.153);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCCCCC").s().p("AgoAAIAXgCQAcgBAXAEIAIACQgogDgqAAg");
	this.shape_52.setTransform(12,-13.8,0.153,0.153);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCCCCC").s().p("Ag1ALQAJgHAPgHQAPgIBIgDQgbAJgKAAQgKAAgRAFQgUAEgTAIIgLADQgDAAAGgEg");
	this.shape_53.setTransform(6.9,-13.8,0.153,0.153);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CCCCCC").s().p("AAeAMIgIgEQgUgNgKgCIgTgDQgJgCARABQAKABANAFQARAFAHAIIADAEIgBAAg");
	this.shape_54.setTransform(8.6,-12.6,0.153,0.153);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AgwgaIAOAFQAPAFAFAGQAIAKATAOQAYAQAMgF");
	this.shape_55.setTransform(9.1,-10.1,0.153,0.153);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AAJgKQgLAVgGAB");
	this.shape_56.setTransform(8.4,-11.2,0.153,0.153);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AAgAcQgfgPgFgMQgFgPgDgHQgHgLgMAK");
	this.shape_57.setTransform(8.7,-11.2,0.153,0.153);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AgzhZIASAFQAUAHAGAMIADAIQAEAMAAALQAAAQAIASQAIAUAIAGQAMAIAHANQAMATgFAY");
	this.shape_58.setTransform(9,-10.9,0.153,0.153);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("AANgRQgUAjgFgB");
	this.shape_59.setTransform(-1.2,7.5,0.153,0.153);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#514438").ss(0.4,1,0,2.4).p("ACNAvIAehOQADgEgBgDQgCgEgDAAQgbgIggAGQgVAFgyAEQguADgJgBQgLgBg7AMQhAANgVAJ");
	this.shape_60.setTransform(3.1,6.3,0.153,0.153);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#6B4E48").ss(0.4,1,0,2.4).p("AgOAhIAIggQACgHAGgMQAHgMAGgC");
	this.shape_61.setTransform(-16.7,4.1,0.153,0.153);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#6B4E48").ss(0.4,1,0,2.4).p("AhDALIATABQAUABALgEQAKgEAmgIQAUgEARgE");
	this.shape_62.setTransform(-14.3,4.4,0.153,0.153);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#6B4E48").ss(0.4,1,0,2.4).p("AAmgcQgQAJgTAMQgjAXgFAN");
	this.shape_63.setTransform(-2.8,6.6,0.153,0.153);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#6B4E48").ss(0.4,1,0,2.4).p("AgfAgQAhgaADgGQACgFAJgLQAJgLAHgE");
	this.shape_64.setTransform(-1.9,6.7,0.153,0.153);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#6B4E48").ss(0.4,1,0,2.4).p("ABFgJQgRAHgZAEQgyALgtgF");
	this.shape_65.setTransform(10.7,2.5,0.153,0.153);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6F5D4D").s().p("AgDABQACgDAFgCQABAAAAAAQAAABAAAAQAAABAAABQgBAAgBABIgGAFQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBg");
	this.shape_66.setTransform(14.4,-1.1,0.153,0.153);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6F5D4D").s().p("AgDABQACgEAEgBIAAAAQABAAAAAAQABABAAAAQAAABgBABQAAAAgBABQgDAEgCABQgBAAAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBg");
	this.shape_67.setTransform(15.3,-1.9,0.153,0.153);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6F5D4D").s().p("AgDAAQACgDAEAAQAFgBgKAIQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBABgBg");
	this.shape_68.setTransform(16.8,-2,0.153,0.153);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6F5D4D").s().p("AAAAEQgFgCAAgEQABgDAFADQAGACgCADQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgDgBg");
	this.shape_69.setTransform(20.1,-2.3,0.153,0.153);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6F5D4D").s().p("AAAAEQgFgCAAgEQABgEAFAEQAGACgCAEQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_70.setTransform(19.7,-2,0.153,0.153);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6F5D4D").s().p("AgDAAQAAgEAEAAIAAAAQAEAAgBAEQgCAFgCAAQgDABAAgGg");
	this.shape_71.setTransform(16,-1.7,0.153,0.153);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6F5D4D").s().p("AAAAFQgDAAAAgEQAAgEAEgCQAEAAgBAFQgBAGgDAAIAAgBg");
	this.shape_72.setTransform(15.3,-1.2,0.153,0.153);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6F5D4D").s().p("AgCACQgCgDAEgDQADgCABAGQABAFgDABIgBAAQgCAAgBgEg");
	this.shape_73.setTransform(14.5,1.4,0.153,0.153);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6F5D4D").s().p("AgDACQgBgEAEgCIAAgBQADgBABAGQAAAFgDAAIgBABQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBgBg");
	this.shape_74.setTransform(14.3,-0.1,0.153,0.153);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6F5D4D").s().p("AgCACQgCgDAEgDQADgCABAGQABAFgEABIgBAAQgBAAgBgEg");
	this.shape_75.setTransform(14.9,-0.4,0.153,0.153);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6F5D4D").s().p("AgDACQgBgEAEgCIAAAAQADgCABAGQABAFgDABIgBAAQgCAAgCgEg");
	this.shape_76.setTransform(14.5,0.5,0.153,0.153);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6F5D4D").s().p("AgDACQgBgEAEgCIAAAAQADgCABAGQAAAEgDACIgBAAQgBAAgCgEg");
	this.shape_77.setTransform(15.2,0.3,0.153,0.153);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6F5D4D").s().p("AgCACQgCgDAEgDQADgCABAGQABAEgDABIgCABQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_78.setTransform(15.1,1.2,0.153,0.153);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6F5D4D").s().p("AgCACQgDgDAFgCIAAgBQACgCACAFQABAFgDABIgBAAQgBAAgCgDg");
	this.shape_79.setTransform(15.7,2.3,0.153,0.153);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6F5D4D").s().p("AgCACQgCgEAEgCQADgCABAGQABAEgDABIgCABQgBAAgBgEg");
	this.shape_80.setTransform(15.3,1.7,0.153,0.153);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6F5D4D").s().p("AgDACQgBgDAEgDQADgCABAGQABAFgEABIgBAAQgBAAgCgEg");
	this.shape_81.setTransform(16.1,1.6,0.153,0.153);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6F5D4D").s().p("AgDABQgBgDAEgCQAEgCAAAGQAAAFgEAAQgCAAgBgEg");
	this.shape_82.setTransform(15.7,0.9,0.153,0.153);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6F5D4D").s().p("AgDAAQAAgEAEAAQAEAAgBAEQgBAFgDAAQgDAAAAgFg");
	this.shape_83.setTransform(15.7,-0.2,0.153,0.153);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6F5D4D").s().p("AgDAAQAAgDAEgBQAEgBgBAFQgBAFgDAAQgDAAAAgFg");
	this.shape_84.setTransform(16.1,0.2,0.153,0.153);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6F5D4D").s().p("AgDAAQAAgEAEgBQAEAAgBAFQgBAGgDAAQgDgBAAgFg");
	this.shape_85.setTransform(16.1,-0.9,0.153,0.153);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6F5D4D").s().p("AgDABQAAgFAEAAQAEgBgBAFQgBAGgDAAQgDAAAAgFg");
	this.shape_86.setTransform(16.8,-1.3,0.153,0.153);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6F5D4D").s().p("AgCACQgCgEAEgDQADgBABAGQABAFgEAAIgBABQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAgBAAgBg");
	this.shape_87.setTransform(17.1,-0.8,0.153,0.153);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6F5D4D").s().p("AgDACQgBgDAEgDQADgCABAGQABAFgEABIgBAAQgCAAgBgEg");
	this.shape_88.setTransform(16.5,-0.5,0.153,0.153);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6F5D4D").s().p("AgCACQgCgEAEgDQADAAABAFQABAFgEAAIgBABQgBAAgBgEg");
	this.shape_89.setTransform(17,0.1,0.153,0.153);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6F5D4D").s().p("AgCACQgCgEAEgCQADgCABAGQABAEgDACIgBAAQgCAAgBgEg");
	this.shape_90.setTransform(16.7,0.8,0.153,0.153);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6F5D4D").s().p("AgCADQgDgDAFgEIAAAAQACgCACAGQABAEgDACIgBAAQgCAAgBgDg");
	this.shape_91.setTransform(16.9,2.5,0.153,0.153);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6F5D4D").s().p("AgDACQgBgEAFgBIAAgBQADgBAAAFQAAAFgDAAIgBAAQgCAAgBgDg");
	this.shape_92.setTransform(17.1,1.7,0.153,0.153);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgCQADAAAAAFQAAAGgDAAQgDAAgBgFg");
	this.shape_93.setTransform(17.4,0.8,0.153,0.153);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6F5D4D").s().p("AgDABQgBgEAEgBQAEgCAAAGQAAAFgEABQgCAAgBgFg");
	this.shape_94.setTransform(17.7,-1,0.153,0.153);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6F5D4D").s().p("AgDACQgBgEAFgCIAAgBQADAAAAAFQAAAFgDAAIgBABQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_95.setTransform(17.8,-0.3,0.153,0.153);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgBQADgBAAAFQAAAFgDAAIgBAAQgCAAgBgEg");
	this.shape_96.setTransform(18.4,-0.6,0.153,0.153);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6F5D4D").s().p("AgDACQAAgEAEgDQADgBAAAGQAAAGgEAAQgCAAgBgEg");
	this.shape_97.setTransform(19.6,-0.2,0.153,0.153);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6F5D4D").s().p("AgDABQgBgDAEgCQAEAAAAAEQgBAEgDABQgCAAgBgEg");
	this.shape_98.setTransform(18.9,0,0.153,0.153);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgCQADgBAAAGQAAAFgEAAIAAABQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgCg");
	this.shape_99.setTransform(18.2,0.4,0.153,0.153);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6F5D4D").s().p("AgDABQgBgEAFgBQADgBAAAFQAAAFgDABQgDAAgBgFg");
	this.shape_100.setTransform(17.8,1.8,0.153,0.153);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6F5D4D").s().p("AgDACQgBgEAFgDQADAAAAAFQAAAGgDAAQgDAAgBgEg");
	this.shape_101.setTransform(17.8,2.6,0.153,0.153);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6F5D4D").s().p("AgDABQgBgEAFgBQADgBAAAFQAAAFgDAAQgDAAgBgEg");
	this.shape_102.setTransform(18.5,2.1,0.153,0.153);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgCQADAAAAAFQAAAFgDAAIgBABQgCAAgBgFg");
	this.shape_103.setTransform(18.4,1.2,0.153,0.153);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6F5D4D").s().p("AgDABQAAgDAEgCIAAAAQADgBAAAFQAAAFgDABQgDAAgBgFg");
	this.shape_104.setTransform(18.9,0.8,0.153,0.153);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6F5D4D").s().p("AgDABQAAgDADgBQAEgCAAAFQgBAEgDAAIgBABQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_105.setTransform(19.2,2.2,0.153,0.153);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6F5D4D").s().p("AgDABQAAgDAEgCQADAAgBAEQAAAFgDAAQgCAAgBgEg");
	this.shape_106.setTransform(19.6,0.4,0.153,0.153);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6F5D4D").s().p("AgDABQAAgDAEgCQADgCAAAGQAAAFgDABQgDAAgBgFg");
	this.shape_107.setTransform(19.1,1.5,0.153,0.153);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6F5D4D").s().p("AgDABQAAgEAFgBIAAgBQADAAgBAFQgBAFgDAAIAAABQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAgBAAgBg");
	this.shape_108.setTransform(19.8,1.8,0.153,0.153);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6F5D4D").s().p("AgDABQgBgDAFgBQAEgCgBAFQAAAEgEAAIAAABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_109.setTransform(19.9,0.9,0.153,0.153);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6F5D4D").s().p("AgDACQAAgFAEgBIAAAAQADgCAAAGQgBAGgDAAIgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQAAAAAAgBg");
	this.shape_110.setTransform(20.4,1,0.153,0.153);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgBQADgBAAAFQgBAFgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBg");
	this.shape_111.setTransform(20.7,1.6,0.153,0.153);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgCQAEAAgBAFQgBAGgDAAQgDAAAAgFg");
	this.shape_112.setTransform(21.1,1.1,0.153,0.153);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6F5D4D").s().p("AgDACQAAgFAEgBQADgCgBAGQAAAGgDAAIAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAgBgBg");
	this.shape_113.setTransform(21.9,1.1,0.153,0.153);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6F5D4D").s().p("AgDABQAAgFAFgBQADAAgBAFQgBAGgDAAQgDAAAAgFg");
	this.shape_114.setTransform(20.3,0.1,0.153,0.153);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgCQAEAAgBAFQgBAGgDAAQgDAAAAgFg");
	this.shape_115.setTransform(20.8,0.4,0.153,0.153);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgBIAAgBQADgBgBAGQgBAGgCAAQgDAAAAgFg");
	this.shape_116.setTransform(20.9,-0.2,0.153,0.153);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgBQADgCAAAGQgBAFgDAAIAAABQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBgBAAgBg");
	this.shape_117.setTransform(21.3,0.2,0.153,0.153);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgBQAEgCgBAGQgBAFgDAAQgDAAAAgEg");
	this.shape_118.setTransform(21.7,0.6,0.153,0.153);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6F5D4D").s().p("AAAAEQgGgCABgEQABgEAFAEQAGACgBADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_119.setTransform(20.4,-1.8,0.153,0.153);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6F5D4D").s().p("AAAAEQgGgDACgDQABgFAEAFQAGADgCADQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDgBg");
	this.shape_120.setTransform(21.1,-1.9,0.153,0.153);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6F5D4D").s().p("AgBAEQgFgEADgDQABgEAEAFQAFAEgDADIgCABQgBAAgCgCg");
	this.shape_121.setTransform(21,-1.5,0.153,0.153);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6F5D4D").s().p("AgCADQgDgEAEgEQACgCACAGQADAFgEACIgBABQgBAAgCgEg");
	this.shape_122.setTransform(21.2,-0.9,0.153,0.153);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6F5D4D").s().p("AgCADQgDgDADgFQACgCADAFQADAFgCADIgCABQgCAAgCgEg");
	this.shape_123.setTransform(21.5,-1.3,0.153,0.153);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6F5D4D").s().p("AgCADQgDgEAEgEQACgCACAGQADAFgEACIgBABQgBAAgCgEg");
	this.shape_124.setTransform(21.6,-0.5,0.153,0.153);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6F5D4D").s().p("AgDACQAAgFAEgCQADgBgBAGQAAAGgDABQgCAAgBgFg");
	this.shape_125.setTransform(23.4,0.9,0.153,0.153);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgCQADgBAAAGQAAAGgEAAIAAAAQgDAAAAgFg");
	this.shape_126.setTransform(22.6,0.9,0.153,0.153);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6F5D4D").s().p("AgBAEQgEgEADgFQACgCADAFQADAFgCACIgCACQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_127.setTransform(22.2,-2.5,0.153,0.153);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6F5D4D").s().p("AAAAEQgFgEABgEQABgDAEAFQAFADgBADQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgDgCg");
	this.shape_128.setTransform(21.9,-2.2,0.153,0.153);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6F5D4D").s().p("AgCADQgCgDADgFIAAAAQABgCADAGQACAEgDACIgBABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAgBgBgBg");
	this.shape_129.setTransform(22.4,-2,0.153,0.153);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6F5D4D").s().p("AgDABQgBgEAFgBQADgBAAAFQAAAFgDABQgCAAgCgFg");
	this.shape_130.setTransform(22,0.1,0.153,0.153);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6F5D4D").s().p("AgDACQAAgFAEgBQAEgCgCAGQgBAGgCAAIgBAAQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBg");
	this.shape_131.setTransform(22.2,0.5,0.153,0.153);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6F5D4D").s().p("AgCADQgDgFAFgDQABgCACAGQACAFgCACIgCABQgBAAgCgEg");
	this.shape_132.setTransform(22.2,-1.5,0.153,0.153);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6F5D4D").s().p("AgCADQgDgFAFgEQABgBACAGQACAFgCACIgBABQgCAAgCgEg");
	this.shape_133.setTransform(22.4,-0.9,0.153,0.153);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#6F5D4D").s().p("AgDABQAAgFAEgBQADgBAAAGQAAAGgEAAIAAAAQgDAAAAgFg");
	this.shape_134.setTransform(22.4,-0.2,0.153,0.153);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#6F5D4D").s().p("AgDABQAAgEAEgCQADgBAAAGQAAAGgEAAQgCAAgBgFg");
	this.shape_135.setTransform(22.6,0.2,0.153,0.153);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#6F5D4D").s().p("AgDABQAAgFAEgCQADgBAAAHQgBAGgDAAIAAABQgCAAgBgGg");
	this.shape_136.setTransform(23.1,0.5,0.153,0.153);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#6F5D4D").s().p("AgDABQAAgFAEgBQADgBAAAGQgBAGgDABQgCAAgBgGg");
	this.shape_137.setTransform(23.7,0.4,0.153,0.153);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#6F5D4D").s().p("AgDACQgBgEAEgDQACgBABAGQACAGgEAAIgBAAQgBAAgCgEg");
	this.shape_138.setTransform(23.1,-0.1,0.153,0.153);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#6F5D4D").s().p("AgCADQgCgEADgDIAAAAQABgEADAHQACAFgDADIgBAAQgBAAgCgEg");
	this.shape_139.setTransform(22.8,-0.5,0.153,0.153);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6F5D4D").s().p("AgBACQgDgEADgDQACgCACAGQACAFgCACIgBAAQgCAAgBgEg");
	this.shape_140.setTransform(22.6,-1.4,0.153,0.153);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6F5D4D").s().p("AgCADQgDgEAEgEQACgCACAGQADAFgEACIgBABQgBAAgCgEg");
	this.shape_141.setTransform(23,-0.9,0.153,0.153);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6F5D4D").s().p("AgCADQgDgFAFgDIgBAAQACgDACAHQACAFgDACIgCABQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBg");
	this.shape_142.setTransform(23.4,-0.6,0.153,0.153);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6F5D4D").s().p("AgCACQgCgEAEgCQADgCABAGQABAGgDAAIgBAAQgCAAgBgEg");
	this.shape_143.setTransform(23.5,-0.1,0.153,0.153);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6F5D4D").s().p("AgCADQgDgEADgEQACgCADAGQADAFgEACIgBABQgBAAgCgEg");
	this.shape_144.setTransform(23.1,-1.4,0.153,0.153);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6F5D4D").s().p("AgCAAQABgFABgBQAEAAgBAGQgBAGgDABQgCAAABgHg");
	this.shape_145.setTransform(24.2,0.6,0.153,0.153);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6F5D4D").s().p("AgDABQAAgFAEgBQADgBAAAGQgBAGgDABQgCAAgBgGg");
	this.shape_146.setTransform(24.1,0.2,0.153,0.153);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6F5D4D").s().p("AgCABQgBgFADgBQADgBAAAGQABAFgEACQgBAAgBgGg");
	this.shape_147.setTransform(24.3,-0.1,0.153,0.153);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6F5D4D").s().p("AgCACQgCgFAEgCQACgCABAHQABAFgDACIAAAAQgBAAgCgFg");
	this.shape_148.setTransform(24,-0.3,0.153,0.153);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6F5D4D").s().p("AgCABQAAgGACgBQADAAAAAGQAAAGgDAAIAAABQgCAAAAgGg");
	this.shape_149.setTransform(24.1,-0.8,0.153,0.153);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6F5D4D").s().p("AgCABQAAgGACgBQADAAAAAGQAAAFgDABIAAABQgCAAAAgGg");
	this.shape_150.setTransform(24.1,-1.4,0.153,0.153);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6F5D4D").s().p("AgCACQgCgFAEgDQADgBABAHQABAGgEAAIgBABQgBAAgBgFg");
	this.shape_151.setTransform(23.8,-0.8,0.153,0.153);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6F5D4D").s().p("AgCACQgCgFAEgCQADgCABAGQABAGgEACIgBAAQgBAAgBgFg");
	this.shape_152.setTransform(23.8,-1.3,0.153,0.153);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#6F5D4D").s().p("AgCACQgDgEAFgDIgBAAQADgCABAGQACAFgDACIgBAAQgBAAgCgEg");
	this.shape_153.setTransform(23.5,-1.1,0.153,0.153);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C2A38B").s().p("AAPAKQgYgDgRgFQgRgEgJgFQgIgFAKACIAmAKQAfAHAPABQARABAFACQAEABgMAAQgNAAgUgCg");
	this.shape_154.setTransform(-20.8,9.9,0.153,0.153);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C2A38B").s().p("AAjAPQgogDgUgIQgNgDgQgLQgIgFAEAAQAFABASAJQARAIAeAEIAlADQATAGgOAAIgTgBg");
	this.shape_155.setTransform(-20.2,8.8,0.153,0.153);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#C2A38B").s().p("AgcADQgOgBgBgCQgCgDAMABQAOACATgBIAfgCQAcgBggAEQgVAEgRAAIgRgBg");
	this.shape_156.setTransform(-19.3,12.2,0.153,0.153);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#59433C").ss(0.4,1,0,2.4).p("AAZBxQgIgWgHgaQgNg1ACgYQAAgJABgKQABgTACgEQACgJgFgRQgHgWgQgK");
	this.shape_157.setTransform(13.2,-1.3,0.153,0.153);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAXgGIgGAHQgMAHgbgC");
	this.shape_158.setTransform(-9.8,9.2,0.153,0.153);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABdAHQgSAIghABQhCADhEgj");
	this.shape_159.setTransform(-11.5,7.6,0.153,0.153);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AA4gFQgIAFgTADQgjAHgxgI");
	this.shape_160.setTransform(-10,10.9,0.153,0.153);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("Ag5gPIAXAOQAiANA6AE");
	this.shape_161.setTransform(-12,9.4,0.153,0.153);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABcgLQgDAIgQAGQghANhEgHIg/gF");
	this.shape_162.setTransform(-10.6,10,0.153,0.153);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAuANQgQgBgUgEQglgIgRgM");
	this.shape_163.setTransform(-20.9,9.3,0.153,0.153);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABcgJQgFAGgOAFQgaALglgEQgngCgUgCQgjgDgHgD");
	this.shape_164.setTransform(-19,13.3,0.153,0.153);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AhCgTIAvAUQA1AUAhgB");
	this.shape_165.setTransform(-21.1,11.1,0.153,0.153);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgygZIAXAZQAfAXAvAC");
	this.shape_166.setTransform(-21.7,10,0.153,0.153);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABKgGQgNAHgZAEQgyAIg7gR");
	this.shape_167.setTransform(-19.5,12,0.153,0.153);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgtgqIAXAgQAeAiAnAT");
	this.shape_168.setTransform(-21.8,6.6,0.153,0.153);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AhDgwIAmAkQAvAoAyAV");
	this.shape_169.setTransform(-22,3.8,0.153,0.153);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ACBAmQgJAGgSADQgkAIgogMQgugNgpgXQgvgagUge");
	this.shape_170.setTransform(-20.2,6.3,0.153,0.153);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#7A6654").s().p("AAKA5QgagCgLgEQgJgDADAAIAsACQAlACAPgNQAKgQAGgGQAGgIgDgCIgDgBQgEAEgKAEQgSAJgaABQgYABghgMIgbgMQgGgDAMAEIAOAFQAqAOAggFQATgCANgKQAHgDAFgFQAFgHgJABQgJADgfgBQgegBgRgDQgZgEgQgKQgOgIgPgSQgHgIALAHQAXARAPAIQAVALAhACQAZABATgEQAQgEALgKIAIgKQgFALADAVQADAVgBADQgIAigcAHQgKACgQAAIgRAAg");
	this.shape_171.setTransform(-19.9,9,0.153,0.153);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C2A38B").s().p("AgZAGQgOgBgJgEQgJgDARACQAlADAkgGQAjgGgeAJQgTAGgfAAIgNAAg");
	this.shape_172.setTransform(7.5,8.7,0.153,0.153);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#C2A38B").s().p("AgMAFQgPgBgJgCQgbgEAwACQAUACAJgCIAYgDQAOgDgIAEQgIADgSADIgSABIgMAAg");
	this.shape_173.setTransform(8.1,13,0.153,0.153);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C2A38B").s().p("AgeABQg+gRA4APQAYAEAPABQATABAfgDIAAAAQAUgCgTAEQgPAEgbAAIgDABQgNAAgagIg");
	this.shape_174.setTransform(1.6,15.4,0.153,0.153);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C2A38B").s().p("AgpAKQgbgCgIgEQgIgDAcADQAvACAxgIQBOgShRAWQgeAJgdAAIgTgBg");
	this.shape_175.setTransform(1.9,9,0.153,0.153);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C2A38B").s().p("AgjAEQAQgBAggFQAcgGAIAAQARADgnAGQglAIgSAAQgwAAApgFg");
	this.shape_176.setTransform(2.1,7.9,0.153,0.153);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#9E846D").s().p("Ag5AuIgTgJQgRgKgEgKQgPgiARAHQAMAFAdADQAeADAGgEQAFgEgFgJQgGgKgNgDQgLgBgOgLQgQgMANAGQALAFAhAEQAiAFASgDQAMgCASgGQAMgFADADIAAAAQAHAGAMAWQAOAYgFAIQgEAGgXAFQgcAFgLAGQgYAOgkAAQgaAAgJgEg");
	this.shape_177.setTransform(7.9,13.6,0.153,0.153);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#9E846D").s().p("AgEAeQgjgFgZgUQgSgOgIgQQgBgCAAgBQgBAAAAgBQAAgBABAAQAAAAABAAIAOAGQAjAMAsAAQARgBAdgGQAagGAJABQAJABAAAKQAAALgKAKQgWAXgrAAIgWgBg");
	this.shape_178.setTransform(7.5,11.8,0.153,0.153);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#9E846D").s().p("AgcAfQAHgQAXgeQAZgfACAJQADAJgFAXQgHAZgLAJQgNAKgOABIgEAAQgKAAAEgJg");
	this.shape_179.setTransform(8.7,10.4,0.153,0.153);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#9E846D").s().p("AhqCwQgbgMgFgRQgFgRATAIQArASAogLQAUgGAMgJIAXghQASgggaAHQgnAJgdgBQgrgCgegXQgRgNAFgKQAEgKANAEQAUAFApgBQAygBARgOQARgOgSgHQgOgHgOAAQgOAAgmgKQgqgLARgIQAUgLAjgJQAlgJAYAAQAbAAAigTQAjgUgVgHQgNgFgigBQgWAAAKgIQAZgRAogTQA1gYAFAOQAIAWgRBJQgTBVgqA+IgfArQgHAFgIAIQgPAPgFAPQgGATgoAJQgSAEgPAAQgVAAgRgHg");
	this.shape_180.setTransform(8.1,7.5,0.153,0.153);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#9E846D").s().p("AgVAJQgmgMgLgNQgHgJAVAIIAnAPQALACAegBQAegCALADQAJACgCAIQgCAJgZACIgFABQgaAAgjgNg");
	this.shape_181.setTransform(0.5,12.8,0.153,0.153);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#9E846D").s().p("AgEArQgygFgYgeQgLgOgGgZQgCgJAVAAQAOABA0AFQAkADAdgGQAPgDAHgDIABAAQAJgDAJA2QADAQgXALQgUAJgjAAIgZgBg");
	this.shape_182.setTransform(1.7,16.2,0.153,0.153);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#9E846D").s().p("AgxAPQg2gOAEgRQABgJAQAGIAoAPQAWAGAsgDQAqgEATgIQAIgEAFADQAEADgCAHQgGAQghAGQgUAEggAAQglAAgVgHg");
	this.shape_183.setTransform(1.4,14.5,0.153,0.153);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#9E846D").s().p("AhOBwQgfgHgNgWQgNgVAHghQAIgfAVgEQAKgCAPgKIAagUQAHgHgjgBQgqgCgGgIQgIgNAPgEQARgFAxAFQAqAFBBgUQAhgLAYgLIAAABQAbgQgMApQgGAVgeBFQgSAsgnAgQggAbgbAFIgXABQgRAAgOgDg");
	this.shape_184.setTransform(2.2,10.2,0.153,0.153);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#9E846D").s().p("AhYBHQgRgBAQgZQAJgNASgXQAGgIgggTQgdgTAKgGQAYgOBWgIQA9gFAnAAQANAAgJAmQgIAkgMAOQgdAeg6AOQgnAJgiAAIgPAAg");
	this.shape_185.setTransform(3.3,7.1,0.153,0.153);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#9E846D").s().p("AiVAVQAXgTA+gMQAjgHA/gKQAigHAqAFQAgAEALAHQAVAKghgBIg8gEQgSgBg/AKQhIAKgLABQgQABgsASIgRAGQgCgBANgKg");
	this.shape_186.setTransform(3.2,5.3,0.153,0.153);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#ADA1A0").s().p("AgCAFQgEgVAEgCQADgCADAOQACANgCAKQAAAAgBABQAAABAAAAQAAAAAAAAQAAABgBAAQgBAAgDgPg");
	this.shape_187.setTransform(9.9,14.6,0.153,0.153);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#ADA1A0").s().p("AgDABQgGgXAGAAQADABAEAVQAFAXgDAAIgBAAQgEAAgEgWg");
	this.shape_188.setTransform(9.3,15,0.153,0.153);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#ADA1A0").s().p("AALAYQgKAAgHgKQgJgKgBgKQgCgGACgHQADgIADAGIAAAAQADAHATAVQANARgMAAIgCAAg");
	this.shape_189.setTransform(2.2,17.9,0.153,0.153);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ADA1A0").s().p("AgCAVQgFgDADgOQADgPgBgCQgDgEABgDQABgCADADQAHAEgCAUQgBARgEAAIgCgBg");
	this.shape_190.setTransform(3.6,17.6,0.153,0.153);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#ADA1A0").s().p("AgDAfQgIgBACgLIAEgVQAAgHACgMQABgHgCgCIAAAAQAHAKAFAYQAGAbgOAAIgDAAg");
	this.shape_191.setTransform(-18.1,14.7,0.153,0.153);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#ADA1A0").s().p("AABAaQgCgEAAgQIAAgSQgCgGAAgFQAAgFADAEQADAGABAYQAAAVgCAAIgBgBg");
	this.shape_192.setTransform(-17.5,14.5,0.153,0.153);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#8E8584").s().p("AAPAiQgQAAgYgJQgLgFgDgUQgCgJACgEQAAgJAIgCIAVgFQAYgHANAGIAFACQAEAEABAGQACAGACANQABAOgBAEQgCAKgHADQgEACgHAAIgGAAg");
	this.shape_193.setTransform(-18.4,14.7,0.153,0.153);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#807777").s().p("AAEAcQgEgDgCgKIgCgIIAAgQQAAgRAEgCIgBARQgBATAEAMQAEAJgBAAIgBgBg");
	this.shape_194.setTransform(-17.7,14.5,0.153,0.153);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#8E8584").s().p("AgFAoQgDgBgFgLIgFgMQgBgaADgHQACgFAGgCIAJgEQAGgEABgIIAAAAIAHAUQAGAWgEAUQgBAGgHAIQgGAFgEAAIgEgBg");
	this.shape_195.setTransform(-17.5,14.4,0.153,0.153);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#807777").s().p("AgGAGIgBgKQAAgJADgDIABAMQACAOAJAIQgOgJAAgDg");
	this.shape_196.setTransform(3.3,17.7,0.153,0.153);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#847B7B").s().p("AAHAdIgPgEQgMgDgFgEQgEgCgEgHQgFgJgBgFQgCgKAJgGIAIgFIAHgBQAUgEAJAEIAIADQAIAEACAGQAKATAAAHQADARgZAAIgGABIgFgBg");
	this.shape_197.setTransform(-9.2,12.1,0.153,0.153);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#7A7171").s().p("AAHAWQgFgCgCgGIgCgHIgGgQQgFgQAGAEIgBAAIAEAPQAEAQAKAJQAAABABABQAAABAAAAQAAABAAAAQAAAAgBAAIgDgBg");
	this.shape_198.setTransform(-8.6,12,0.153,0.153);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#847B7B").s().p("AgMATQgMgUAEgHQADgFAEgDIALgGQAGgEAFgJIAHAPQAGARAAALQAAAFgHALQgHALgFABIgBAAQgGAAgIgRg");
	this.shape_199.setTransform(-8.4,11.8,0.153,0.153);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#8E8584").s().p("AgFAdQgJgEgFgEIgEgDQgEgDgEgNQgFgNAFgDIAHgIQAHgHALgDQAXgEAFAJIAAAAIAGAOQAGAOAAAJQABAQgDADQgFAEgKABIgCAAQgKAAgKgFg");
	this.shape_200.setTransform(9,15,0.153,0.153);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#807777").s().p("AgEAFIgDgWIAEAPQAGAPAGAGQgLgGgCgIg");
	this.shape_201.setTransform(9.6,14.9,0.153,0.153);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#8E8584").s().p("AgMAXQgCgCgBgNIgCgNQAAgKAEgBIALgGQAHgEACgIIAFAKQAFAOABAMIgCAOQgDAOgKAFQgFgBgKgLg");
	this.shape_202.setTransform(9.8,14.6,0.153,0.153);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#8E8584").s().p("AgNAcQgLgFgHgHQgNgKgFgMQgHgSAXgCIAjgBIAUgEQAOgCADADIAHAFQAGAFAAAGQAAASgCADIgEAHQgDAGgEACQgKALgTgBIgCABQgJAAgMgFg");
	this.shape_203.setTransform(2.2,17.9,0.153,0.153);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#8E8584").s().p("AgQAgQgJgFAAgDQgBgFADgWQABgFAagLQAOgGADgLQAJAhgIATQgCAGgJAIQgKAHgGAAQgCAAgJgFg");
	this.shape_204.setTransform(3.5,17.5,0.153,0.153);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABNgLIgLAJQgQAKgUACQgPABgDABQgNAAgMgCQgGgCgZgCQgXgCgJgD");
	this.shape_205.setTransform(-18.8,13.7,0.153,0.153);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAkACQAAgCgEgCQgJgFgUABQgSADgBAAQgIACgLAI");
	this.shape_206.setTransform(-18.4,14.1,0.153,0.153);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgNAQQAAgEABgEQADgIAHgBQAEgCAEgCQAEgCAEgI");
	this.shape_207.setTransform(-17.6,13.9,0.153,0.153);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABCgNIgFAJQgJAJgWAEQgBAAgMACQgLADgNgBQgqAAgPgD");
	this.shape_208.setTransform(-9.5,11.2,0.153,0.153);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABNAIQgFgEgJgCQgPgFgNADQgPAEgogCQgqgCgOgH");
	this.shape_209.setTransform(-10,11.6,0.153,0.153);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgNARQAAgDABgEQACgHAFAAQAFgBAGgFQAGgFABgI");
	this.shape_210.setTransform(-8.6,11.4,0.153,0.153);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABXgOIgJAKQgMAKgSACQgHADgGACQgLADgOgCQgDAAgtABQgnABgJgC");
	this.shape_211.setTransform(2.2,17,0.153,0.153);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAyAEQgEgDgGgCQgMgFgNADQgJADgZAAQgWAAgIAF");
	this.shape_212.setTransform(2.3,17.4,0.153,0.153);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgSARQABgDACgEQAFgHAEgBQAHgBAHgDQAKgGABgI");
	this.shape_213.setTransform(3.4,17.2,0.153,0.153);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAqgLQgfADgRAIQgTAKgQAC");
	this.shape_214.setTransform(8.8,14.3,0.153,0.153);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgMAPQAAgCABgBQABgEAEgCQAKgFADgCQAEgEACgJ");
	this.shape_215.setTransform(9.6,14.2,0.153,0.153);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABNgGQgFgEgOADQg9AOgFABQgTADgTgCQgVgCgJgG");
	this.shape_216.setTransform(8.1,14.5,0.153,0.153);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgogVIASAUQAZATAmAE");
	this.shape_217.setTransform(6.7,13,0.153,0.153);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgrgPIAUAPQAbAQAoAA");
	this.shape_218.setTransform(6.7,12.2,0.153,0.153);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAggJQgDAGgJAFQgUALgfgE");
	this.shape_219.setTransform(8.7,12.6,0.153,0.153);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgWgLIAMAKQAPAJASAE");
	this.shape_220.setTransform(6.1,10.8,0.153,0.153);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AApABQgPAJgXgDQgjgHgHgG");
	this.shape_221.setTransform(6.7,11.1,0.153,0.153);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAdADQghAFgYgM");
	this.shape_222.setTransform(6.8,9.2,0.153,0.153);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AhRgOIAwAUQA7ARA4gP");
	this.shape_223.setTransform(6.9,8.8,0.153,0.153);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("Ag3gMIAkAMQAqANAhAB");
	this.shape_224.setTransform(6.2,7.3,0.153,0.153);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AhQANIAZgIQAbgHANAAQBNgGATgE");
	this.shape_225.setTransform(7.9,6,0.153,0.153);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("Ai0BdQAMgKByg4QANgIAugrIASgJQAYgKAcgEQBRgRAZgc");
	this.shape_226.setTransform(8.1,5.5,0.153,0.153);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#7A6654").s().p("AgRAIQADgCAJAAQAKgBAOgNQgKAPgJACIgNAAIgDAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQABgBAAAAg");
	this.shape_227.setTransform(8.7,11.1,0.153,0.153);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7A6654").s().p("AhMBcQgGgEAWgJQAVgLAWgaQATgYACgNQAJgdAcgQQAOgHAUgoIADgFQgMAfgLAgQgVAYgNAIQgJAGgMASQgMAQgGANQgNAVAEANQABAEgJgEQgNgGgJAEQgKAFgFAAIgEgBg");
	this.shape_228.setTransform(8.4,9.9,0.153,0.153);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#7A6654").s().p("AgRAGQgFgCAIAAQANAAAVgLQgPAOgJABQgHgBgGgBg");
	this.shape_229.setTransform(2.5,14.1,0.153,0.153);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#7A6654").s().p("AgjBRQgHgMgEAFQgEAGgMACIgWAEQgEABAVgOQAagRgCgFQgCgHARgKQAQgKAMgBQAKgCAMgSIAPgWQAEgCgBgIQAAgHAIgDQALgEASgdIAJgQQgTAtgPAYQgEAIAIANQAAAOgsALQgPAEgLAHQgMAJAAAHQAAAEgEAOQgDALABAGIgDgIg");
	this.shape_230.setTransform(2.3,12.4,0.153,0.153);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABagQQgfAMglAIQhLATgkgJ");
	this.shape_231.setTransform(2.1,8,0.153,0.153);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgpANIAhgLQAjgMAPgC");
	this.shape_232.setTransform(-0.5,7.4,0.153,0.153);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AA0gNQgFAKgPAHQgfAPg0gI");
	this.shape_233.setTransform(2.2,13.9,0.153,0.153);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABOgNQgIAMgYAHQguARhNgU");
	this.shape_234.setTransform(1.9,15.1,0.153,0.153);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("Ag+gQIAfAUQAoATA2gI");
	this.shape_235.setTransform(0.1,13.3,0.153,0.153);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgvgRIAVASQAdASAtgC");
	this.shape_236.setTransform(0.1,12.1,0.153,0.153);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AAmgRQgHAHgNAJQgZARgeAC");
	this.shape_237.setTransform(2.8,11.8,0.153,0.153);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("ABHgYQgEANgUAMQgnAbhOgD");
	this.shape_238.setTransform(2.1,12.2,0.153,0.153);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("AgtgRQAFAMAWAKQAaANAnAA");
	this.shape_239.setTransform(-0.3,9.5,0.153,0.153);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#7A6654").s().p("AgnAXQgmgHgegSQgVgOgFgJIAbAQQAgAQAWAEQAmAHAcABQAtACAmgIQAdgGAHABQAGACgNAFQgSAGgxADQgaACgWAAQgcAAgWgDg");
	this.shape_240.setTransform(0.9,8.3,0.153,0.153);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#7A6654").s().p("Ag+APIgYgBIAcgDQAhgDAXgEQAOgDArgJQAdgIABADQADAFgBACQgCADgMACQgfAHg7AIIgfABIgOAAg");
	this.shape_241.setTransform(0.2,7.5,0.153,0.153);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#7A6654").s().p("AjRAeQArgxBYgTIAygNQAkgIAegDQAVgCA+gDQAzgCAQgEQASgEAPACQAHABAEACQAHABgDAJQgCAHgEAGQgDACgPAlIgQAjIAHgYQAIgZAIgRQAJgRgRgDIgfgBIg9AHQg2AGgOAAQgzAAgzANQhnAZgzAuQgaAXgFATQAFgWAWgZg");
	this.shape_242.setTransform(2.2,6.6,0.153,0.153);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#A57970").s().p("AgWAhQACgfAKgJQAJgLAOgNQAQgOgJAOQgJAOgGAaQgFAYABAEQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgFAAgRgGg");
	this.shape_243.setTransform(-16.5,3.9,0.153,0.153);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#A57970").s().p("AghAZQgmgPgKAAIAugIQA0gIAigMQAhgKgDAFQgDAGgbALQgGADgMADQgNACgQAIQgRAQgOAAIgGgBg");
	this.shape_244.setTransform(-13.8,4.3,0.153,0.153);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#A57970").s().p("AgpAYQAMgLBDglQBEgmgXATQgcAPgdATQg5AkgHATIgGgFIgrAKQAggOAOgNg");
	this.shape_245.setTransform(-2.7,6.4,0.153,0.153);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#A57970").s().p("AgBgIQAIgKAUgMIAZgOQARgJgYASIgkAbQgEADgOAcQgNAYgEgEIABAAQgCgDgQAEIgPAEg");
	this.shape_246.setTransform(-1.6,6.4,0.153,0.153);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#A57970").s().p("AkCD1QANgUASgDQASgEAzghIA9grQAMgIgJAAQgQABgLgBQgLgCASgFQAfgJALgGQAIgEAvgHQAvgIAjgSQAggQAMgaIAKghQAHgSgRAFQgLAEgPABIgtABQgbAAgTgGQgXgGAfAEQAuAEBAgNQAfgGAWgZQAOgRAGgUQALgdg6gjIhFgjQgSgKgQgNIgWgVQgcgcAQABQAOAAApAeQAZASBDAMQAwAJAjgCQAWgBACADIAQAfQgIgEgFAAIgFACQgCABgCAGIgHAVQgFANgRAUIgbAjQgKANgUAQIgXAQQgEADgBANIgCALQADAbgZAdQgWAageAQQgIAEgqAKQgpALgDACIgXAHQgUAIgUAUQguAug8AWQgJACgbAPIgaAOg");
	this.shape_247.setTransform(9.4,2.8,0.153,0.153);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#9A816A").s().p("AhfGaQjhg4hZjIQgehCg5goQgjgZhBgXQg+gYgRgOQgdgZALgtQACgXAbgoQA2hRB+hUQCAhXDugHQEJgIFeBfQBYAZAuAWQBcAugjAuQgpA5gUAyQgNAiggBiQg9CzgbAxQhFCAhuATQh4AVhnAAQhmAAhVgVg");
	this.shape_248.setTransform(-10,-8.8,0.153,0.153);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#987F69").s().p("AhrG5Qjqg6hejEQgdg/g6gpQghgYhFgeQg9gbgTgRQgegdAKgvQACggAcgxQA4hjCEhZQCMheD1gHQEUgJFvBpQBeAaAqAUQBeAtghAvQgtA+gYA4QgTAugdBmQg1C8geA5QhHCMh/AUQh4AThoAAQhvAAhdgWg");
	this.shape_249.setTransform(-9.9,-8.6,0.153,0.153);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#967E68").s().p("Ah4HWQjzg6hhjBQgdg8g7grQgegWhKgkQg9gdgUgXQgfggAKgzQABgnAeg6QA6hzCKheQCXhlD8gJQEegLGBByQBlAcAlARQBhAsghAxQgvBEgbA+QgfBFgWBdIgeCBQgVBRgbA3QhKCYiQAUQh2AShnAAQh6AAhngZg");
	this.shape_250.setTransform(-9.9,-8.4,0.153,0.153);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#947C66").s().p("AiDH0Qj8g7hki8Qgeg6g8grQgagUhPgrQg+ghgWgaQggglAJg2QABgvAfhDQA9iFCRhiQCihtECgKQEqgMGSB7QB3AjAVAKQBkAsghAyQg0BPgdA+QgoBVgSBbQghDLglBRQhMCliiAVQhzAPhmAAQiGAAhxgbg");
	this.shape_251.setTransform(-9.9,-8.2,0.153,0.153);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#927A65").s().p("AiPISQkFg9hni4Qgfg2g9gtQgSgNhZg1Qg9glgYgfQghgqAIg4QACg3AghLQA/iXCXhlQCsh1EKgLQE0gNGlCEIA7AQQAxAOAhAOQBmArgfA0Qg8BegcA6QgxBkgNBaQgcDYgmBYQhNCwizAUQhxAOhmAAQiQAAh7gcg");
	this.shape_252.setTransform(-9.8,-8,0.153,0.153);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#907863").s().p("AiaIwQkPg/hrizQgeg0g+gtIhuhHQg9gpgZgiQgiguAIg8QACg/AghUQBCipCdhpQGRkOMsEEQALAEAxAMQAzAOAhAOQBpAqggA1QhKB8gUAoQg5BygJBaQgUDggpBjQhPC9jFAVQhuAMhkAAQibAAiFgeg");
	this.shape_253.setTransform(-9.8,-7.8,0.153,0.153);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#8E7762").s().p("AimJOQkZhAhuivQgegxg/gvQhLgygjgZQg/gsgagmQgjgzAHg/QABhHAihdQBFi5CjhvQDEiDEWgNQFJgQHICWIA9AQQA0AOAiANQBrArgeA1QhBBqgkBFQhBCAgFBbQgNDqgrBsQhRDJjWAWQhqALhhAAQipAAiRghg");
	this.shape_254.setTransform(-9.8,-7.6,0.153,0.153);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#8E7762").ss(1.2,1,0,2.4).p("AHiDZQAEgmAUguQAnhcBOgoQApgVAFgPQAIgVhCAAQgPAAgUADQgqAFggAPQh1A0APgUQACgDAzgpQAggaADgMQAGgUhPAdQgyASh/AUQiJAVg/gFQg/gEhDgLQg5gKgKgCQhvgQASgJQAKgEAugEQCPgchXgYQgfgIgxgFQgsgEgSABQgeAEg9ABQg9ABgEgCQgZgIAKgJQAVgUgJgWQgMgdhbAgQggAMgeAkQgeAkABAZQAEAxgWBZQgVBZAGA8");
	this.shape_255.setTransform(-8.4,5.3,0.153,0.153);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#947966").ss(1,0,0,4).p("AHmDRQAEgjARgrQAjhUBFgjQAngVAEgPQAEgThCAFQg3AEgzAVQhmArAKgTQADgGApghQAhgbAEgLQAHgThPAeQgyASh8ARQiGAUhBgHQg9gFhCgMQg5gLgKgCQhwgTAHgKQABgDAqgIQCRgbhNgTQhIgTg7AHQgfADg8AAQg7AAgEgDQgGgCgFgDQgJgFAGgGQASgUgFgTQgHgbhQAeQggALgcAiQgcAhAAAZQADAtgTBTQgUBWACA3");
	this.shape_256.setTransform(-8.5,5.3,0.153,0.153);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#9B7D6B").ss(1,0,0,4).p("AHqDGQADggAPgmQAfhNA8ggQAmgUABgOQABgRhBAIQg2ALgyAQQhXAkAFgRQADgJAigbQAigcAEgJQAIgShPAdQgyASh6AQQiEARg/gIQg8gGhCgNQg6gMgKgCQhxgUgEgMQgCgHAjgGQCRgZhCgRQg8gPg/AFQgeADg6AAQg6gBgFgDQgYgHAKgIQATgTgDgSQgDgZhGAaQgfAMgbAgQgaAgABAZQACAogRBMQgTBUgBAx");
	this.shape_257.setTransform(-8.6,5.2,0.153,0.153);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#A48170").ss(1,0,0,4).p("AHsC7QADgdANgjQAbhFAzgcQAlgUgCgMQgBgPhAALIhmAeQhKAcABgQQAAgLAdgWQAjgdAEgHQAIgRhOAdQgyASh3AOQiBAPhAgJQg6gIhCgOQg5gNgKgCQhzgVgOgPQgJgJAegGQCUgXg6gOQg2gMg7AGQgfADg4gCQg5gBgEgDQgYgHAKgIQARgTABgPQABgWg6AVQgfANgZAeQgYAdAAAYQABAlgPBFQgRBVgEAp");
	this.shape_258.setTransform(-8.7,5.2,0.153,0.153);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#A88072").ss(1,0,0,4).p("AHxCvQACgaALgeQAWg9AqgXQAkgVgEgMQgFgNg+APQg3AWgvALQg7AVgEgOQgDgLAYgUQAlgcAEgGQAKgQhPAdQgyARh1AMQh/AOg/gMQg4gJhCgOQg6gOgJgCQh0gXgZgRQgSgMAcgEQCUgXgwgKQgsgKg6AGQgeADg4gCQg3gCgFgDQgXgHAIgJQASgTADgLQAGgUgvASQggAOgWAbQgXAbAAAYQAAAjgLA9QgHAjgRBS");
	this.shape_259.setTransform(-8.9,5.2,0.153,0.153);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#B08377").ss(1,0,0,4).p("AH0CkQACgXAJgaQARg1AjgTQAigVgIgLQgIgLg+ATQg3AbgrAJQgtAMgJgMQgHgLAUgSQAogeACgDQALgPhPAdQgxAShzALQh8ALg/gNQg3gKhCgRQg5gOgKgCQh2gZgjgSQgbgOAZgEQCVgWglgHQgigHg7AHQgdADg4gDQg2gDgEgEQgGgBgFgDQgJgGAGgGQA1g1g5AYQggAOgUAYQgVAYAAAZQAABFgjB9");
	this.shape_260.setTransform(-9,5.1,0.153,0.153);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#B7857C").ss(1.2,1,0,2.4).p("AH3CXQACgUAHgXQANgtAZgPQAigVgLgJQgMgLg8AYQgOAIgSAJQgmASgaAEQggAEgNgLQgMgKASgPQAkgZAGgIQAMgNhOAcQgyAShwAJQh5AKg+gOQg2gMhCgSQhDgRAAAAQh4gbgugUQgkgRAXgDQCXgUgcgEQgVgDg+AFQgcADg3gDQg0gEgEgDQgGgCgFgDQgKgFAFgHQA2gugpASQgfAPgSAWQgTAXAAAZQgDAugFAaQgJA4gTAv");
	this.shape_261.setTransform(-9.1,5.1,0.153,0.153);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#B7857C").s().p("AHPCdIgQgKQgEgDgGgUQgCgGgQAGIgQAHQgOAJgXgKIgUgLQhZAXh9AAIhrgFQhRgHhMglIg8gkQghgXhPgjIhIggQgTgIgTgDIgPgCQgXAEgRgZIgWgsIgDgEQAIACAqAFQAUADBogHQBVgFAYAPQAXAOhhAIQhgAIASAKQAQAJBLAQQBcASBJAZQBeAhCXgLQCEgKBKgdQA9gaAJAOQAKAOgzAfQguAeArAAQAsAAAcgTQAXgQAigJQAggIA4gIQAvgHghAWQg3AigXATQgfAXgJAuQgEAXABATQgCgEgPgKgApMAhQAJgYADglIAFg6QAEgZAcgWQAYgUAlgNQAfgLgJATQgJAQgVAOQgJAFgBAEQgIgKgGAGQgKAKgRA+QgdBtgbA4QgNAcgIAGQANhLANgogAnvh0QAAAAgBAAQAAgBAAAAQgBgBABAAQAAgBAAAAIACAEIgBgBg");
	this.shape_262.setTransform(-8.7,5.2,0.153,0.153);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#503D36").ss(0.4,1,0,2.4).p("Ag8glIgBAEQgBAEADADQAFAEAiAOQAmAQAOAHQAEADANAKQAMAKABAA");
	this.shape_263.setTransform(19.5,-1.5,0.153,0.153);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#503D36").ss(0.4,1,0,2.4).p("AAWgpIgDANQAAAVgQAKQgLAKgHALQgIANAEAF");
	this.shape_264.setTransform(23.4,-2.6,0.153,0.153);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AAEgHQgDAMgEAD");
	this.shape_265.setTransform(24,-1.9,0.153,0.153);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AAGAFIgLgJ");
	this.shape_266.setTransform(20,-7.7,0.153,0.153);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AgVAOIASgMQATgMAGgC");
	this.shape_267.setTransform(15.2,-2.2,0.153,0.153);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AAWg3QgGAfgEAJIghBH");
	this.shape_268.setTransform(15,-2.8,0.153,0.153);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AA5hEQglA7gPALQgjAogHAFQgDACgIALIgIAJ");
	this.shape_269.setTransform(14.8,-2.1,0.153,0.153);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AAEgZIgHAz");
	this.shape_270.setTransform(8.7,-8.5,0.153,0.153);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AAdgxQgGAVgFADQgEACgRAcQgTAdgGAQ");
	this.shape_271.setTransform(8.4,-8.5,0.153,0.153);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AgHgaIAEAHQADAHAAAFQgBAHABALQADAOAFAC");
	this.shape_272.setTransform(8.9,-9,0.153,0.153);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("ABvAnQgCgGgGgHQgLgPgOgDQgEgCgGgHQgMgRgHgeQgDgTgNgRQgagkgwAFQgQAAgRAMQgiAXgCA5IAFAbQAIAfARANIALAIQANAJAKAAQASABAaAhQALAPAVAC");
	this.shape_273.setTransform(8.8,-11.1,0.153,0.153);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("AANAFQgNgJgMAA");
	this.shape_274.setTransform(10.4,-10.8,0.153,0.153);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#59433C").ss(0.4,1,0,2.4).p("AAVgdQgIAJgJALQgSAXgGAQ");
	this.shape_275.setTransform(10.5,-11.4,0.153,0.153);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#59433C").ss(0.4,1,0,2.4).p("ABMgHQgQgEgbAAQg0ABg4AW");
	this.shape_276.setTransform(13.5,-13,0.153,0.153);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#6F5D4D").ss(0.8,1,0,2.4).p("Ag3CnQAgirAqhiQAOgfANgUQAGgKAEgD");
	this.shape_277.setTransform(4.3,-8.4,0.153,0.153);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#736050").ss(1,0,0,4).p("Ag1CwQAVinAshqQAPgiAPgXQAHgMAFgF");
	this.shape_278.setTransform(4.2,-8.2,0.153,0.153);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#7A6654").ss(1,0,0,4).p("AgyC3QAJihAuhzQAPgkARgcQAIgNAGgH");
	this.shape_279.setTransform(4.1,-7.9,0.153,0.153);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#7E6957").ss(1,0,0,4).p("AgwC+QgDicAzh8QAPgnATggQAJgPAHgI");
	this.shape_280.setTransform(4,-7.6,0.153,0.153);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#846E5B").ss(1,0,0,4).p("AgsDEQgOiWA0iEQAPgqAVgjQALgSAHgJ");
	this.shape_281.setTransform(3.9,-7.3,0.153,0.153);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#8A735F").ss(1,0,0,4).p("AgnDLQgZiRA2iOQAQgtAWgnQAMgUAIgK");
	this.shape_282.setTransform(3.8,-7,0.153,0.153);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#8E7762").ss(0.8,1,0,2.4).p("AghDQQgliMA4iYQAQgvAZgrQAMgWAJgM");
	this.shape_283.setTransform(3.6,-6.7,0.153,0.153);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#1A1211").ss(0.4,1,0,2.4).p("AAOg4IgRAbQgQAkAJAy");
	this.shape_284.setTransform(13.8,-0.3,0.153,0.153);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#624A42").ss(0.4,1,0,2.4).p("Agjh4QAPAEAVAbQAdAkgCAoIgCAMQgDAPgGATQgIAdAJAXQAFANANAX");
	this.shape_285.setTransform(13.3,-2.8,0.153,0.153);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#9E846D").s().p("Ai4A7QAZgnAxgjQAyglAqgLQAvgKBEgEQBNgHAUAOQADACgvADQg9AEgiAIQgpALgmATQgTAJgfARIhZA/QgVAOgGAAQgIAAAOgVg");
	this.shape_286.setTransform(6.3,-12.9,0.153,0.153);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#9E846D").s().p("AAFAWIgEgSQgCgMgCgDQgDgDgCgFQgCgFAFACQAEADAEAIQAHAKAAAEQAAAUgDAAIgCgBg");
	this.shape_287.setTransform(10.2,-10.4,0.153,0.153);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#9E846D").s().p("AgDAgIAAgLQADgZgCgJIgEgOQgCgIADADQAHAHAEAVQAEAVgGALQgEAGgCAAIgBgCg");
	this.shape_288.setTransform(10.7,-10.1,0.153,0.153);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#9E846D").s().p("AAgAgQgEgEgHgNQgHgOgIgHQgGgIgSgKIgQgJIAMACQAdAIANAVQAJAQAEAMQADAIgCAAIgCgCg");
	this.shape_289.setTransform(9,-12.3,0.153,0.153);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#9E846D").s().p("ACJA1QgJgSgMgPQgMgPgKgFIgogTQghgPgSgEIhNgOQgwgIgXAAIA6gEQAUgBApAJQArAIATAKIAtAUQAbAMAEADQAPAJAHAOQAIAVACALQADAHgBAFIgBABQgCAAgGgMg");
	this.shape_290.setTransform(15.7,-12.1,0.153,0.153);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#9E846D").s().p("AAcgHQgKgKgXgFQgagDgGgCQgLgEgBgCQgCgDAOABQAUACAjAMQAYAKAJAvQgHgcgQgPg");
	this.shape_291.setTransform(19.6,-9.4,0.153,0.153);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#7A6654").s().p("AAmBVIgMgOQgFgEgGgQIgIgWQgEgFACgJIADgHQAGgWgNgGQgNgIgagiQgFgIAJAJIAPAPQAHAIAEACQAHADAHgDQAMgFANgtQAEAKgYA7QAFALABAPQAAANgDAJQgBAFALATQAOAXABAFIABAEIgCgCg");
	this.shape_292.setTransform(19.9,-7.4,0.153,0.153);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#7A6654").s().p("AgEAfIgCgIQgCgLACgOQAEgXAKgFIgFAOQgFAQAAAQQAAAPgBAAIgBAAg");
	this.shape_293.setTransform(21.7,-3.5,0.153,0.153);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#7A6654").s().p("AhpAQQAIgFAhgNQAigPAuAAQAnAAAMAGQAFADAhAJQAQAGg3gMQg7gOg3AOQggAHgcAQg");
	this.shape_294.setTransform(17.9,-3,0.153,0.153);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#7A6654").s().p("AgHABQgKgFADAAIAOAAQALAAAEgCQgJALgFACIgIgGg");
	this.shape_295.setTransform(17.7,-12.2,0.153,0.153);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#7A6654").s().p("AgEAuIgLgEIgHgCQgHgCABgCQACgDAEABQANAFAAgDQACgDgHgDIAAgCQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAIAAADgJIAKgaQAJgYAKgNQADgEgLAXQgNAcgCAKQgFAUAEALIAEAHIgCABQgDAAgHgDg");
	this.shape_296.setTransform(17.1,-13.1,0.153,0.153);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#976E66").s().p("AgUBDQgEgCgDgMQgCgMACgLQACgMAIgUQAJgXAIgNQAQgYANgFQgOALgGAIIgGAKQgDAFAAADQAAADAHgDIADgCQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBACgDACIgGACIgEAMQgEAJAAAEQAAAAABAAQAAAAAAAAQABABAAAAQABAAABAAIAGgBQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgDAAgFAEQgGAFgDAFQgBABAAABQAAABAAAAQAAABABAAQAAABABAAIANgBQAJABgLAFQgMAFgBAHQgBAJADAOQAAAGgDAAIgEgBg");
	this.shape_297.setTransform(18,-13.4,0.153,0.153);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#976E66").s().p("AAdBRQgWgQgGgDQgFgBgEgJQgEgJgOgHQgagMAEgCQAEgCAKAGQAIAFARAEQgCgVgIgJIgGgHIAAgOQAAgIgGAHQgHAJgBgDQgDgEAFgJQAGgKgBgEQAAgGgJAEIgMAFQgDgCALgIQALgJAGADQAFABAEAIQAEAGAAAHQAAAHACADQACAFAHAFQAGAFAAgFIgBgSQAAgXgPgWQgIgKgSgDIgRgBQAXgFATAMQAPAKACAOQAJAtAGAQQAEAMAcAYQAFAEADAQQACAQgDAGQgDAFgGAAQgHAAgLgIg");
	this.shape_298.setTransform(8.9,-10.9,0.153,0.153);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#E6E6E6").s().p("AAAAFQgFgDAAgDQABgDAFAAQAFAAgBAFQAAAEgEAAIgBAAg");
	this.shape_299.setTransform(13.5,-7.5,0.153,0.153);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#1D1813").s().p("AAMAbQgRgBgNgHQgVgKAAgOQAAgLAJgGQAGgDAKgBQANgBAGAEQAIAEALAJQALAJAEAFQABAEgBAHQgBAIgEADQgFABgIAAIgJAAg");
	this.shape_300.setTransform(13.3,-7.4,0.153,0.153);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#655240").ss(0.4,0,0,2.4).p("AAzAXQgHgMgNgNQgVgVgPgEQgWgCgNAHIgKAHQgBADADAIQAEAKAIAIQAXARAogDQAagCgCgDg");
	this.shape_301.setTransform(13.4,-7.4,0.153,0.153);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#A28467").s().p("AgkAOQgIgIgEgKQgDgIABgDIAKgHQANgHAWACQAPAEAVAVQANANAHAMQACADgaACIgMABQgfAAgUgPg");
	this.shape_302.setTransform(13.4,-7.4,0.153,0.153);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#926A62").s().p("AAKAKIgCgHQgBgDgEgCQgDgDgGgDIgHgDIALADQAJAEADAFQADAHAAADIAAABIgDgCg");
	this.shape_303.setTransform(12.2,-7.1,0.153,0.153);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#CCCCCC").s().p("AAOAQQgFgKgDgDQgGgJgJgHQgGgDABgBIACAAQAFABAJAMQALALACAJIAAACIgBgCg");
	this.shape_304.setTransform(13.4,-4.9,0.153,0.153);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#CCCCCC").s().p("AgEAQIAEgJQAEgVgCgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABABQAAAAABAAQAAABAAAAQAAABAAABQAAAKgDALQgDAMgEADIgBABQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABgBg");
	this.shape_305.setTransform(23.3,-3.3,0.153,0.153);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#CCCCCC").s().p("AAZAXQgLgEgQgIQgQgIgFgDQgFgEABgJQAAgIAGgBQAEgBgHAHQgEAJAPAIIAdAOQAPAIgDAAIgDAAg");
	this.shape_306.setTransform(18.4,-1.9,0.153,0.153);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#CCCCCC").s().p("AAkAhQgEgMgPgUQgRgXgNgFIgZgLQgFgDAIACQAQADALAIQARALARAYQANATACAJQABAGgBAAQgBAAgEgIg");
	this.shape_307.setTransform(14.3,-8.4,0.153,0.153);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#6F5D4D").s().p("AA/BQIgXgjQgUgbgkgQQgbgLgKgKQgMgLgBgTQgBgQAEgJIAEgGQgHAKADAUQAEAXARAJQANAHApAQQAmAWARAmQAAAQgCAAIgCgBg");
	this.shape_308.setTransform(12.6,-4.2,0.153,0.153);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#A28870").s().p("AAjAZQgFgLgLgMQgNgPgLgEIgdgKQgNgFAMgCQANgCAWAOQAZAPAJAUQAJAWgBAAIAAAAQgBAAgGgKg");
	this.shape_309.setTransform(13.1,-4.9,0.153,0.153);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#A28870").s().p("AAJALQACgLgYgSQANAFAIAJQAIAHgDAIQgBAHgCAAIgBABQgBAAABgIg");
	this.shape_310.setTransform(20.6,-1.1,0.153,0.153);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#A28870").s().p("AgbgDQgNgHABgJIADgIQADgDACAIQADAKADAEQAJAIAoASQAPAHABACQABACgGAAQgGAAg4ggg");
	this.shape_311.setTransform(18.7,-1.8,0.153,0.153);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#A28870").s().p("AgHASQABgFAGgGQAFgHACgUQAEARgFAJIgKAMIgDADQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAgBg");
	this.shape_312.setTransform(23.8,-2.5,0.153,0.153);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#A28870").s().p("AAIA7QgJgDgGgEQgHgEgDgOQgEgPAHgKQAYglABgHQAJggAAAKQAAAIgEANQgEAQgHAJQgKAOgDATQgDAXAOAIQAKAHgCAAIgDgBg");
	this.shape_313.setTransform(23,-2.6,0.153,0.153);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#9C826C").s().p("AARBLQgFgDAAgaQAAgagOghQgNgdgLgLQgYgZAaAEQAaAFAWAaQAQATgCAlQgBAcgJAWQgFANgEAAIgCgBg");
	this.shape_314.setTransform(21.6,-1.2,0.153,0.153);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#B7857C").s().p("AgXA/QgPgCAYg+QAWg/ARACQANABgVA+QgTA+gVAAIAAAAg");
	this.shape_315.setTransform(18,-13.4,0.153,0.153);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#AE8175").s().p("AgYBDQgSgBAahEQAahFASAFQAMACgUBBQgUBCgYAAIAAAAg");
	this.shape_316.setTransform(18,-13.4,0.153,0.153);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#A68070").s().p("AgRgCQAdhLASAGQANAEgTBEQgTBHgeAAQgWAAAehKg");
	this.shape_317.setTransform(18,-13.5,0.153,0.153);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#9E7D6C").s().p("AgSgDQAfhRAUAKQAMAEgRBHQgSBLgkAAQgZAAAhhPg");
	this.shape_318.setTransform(18,-13.5,0.153,0.153);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#967A67").s().p("AgTgDQAjhYAUANQAEABgBAZQgBAbgGAbQgRBNgoACIgCAAQgaAAAihUg");
	this.shape_319.setTransform(18,-13.6,0.153,0.153);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#8E7762").s().p("AgTgEQAlheAWAPIAAAAQAICmhJADIgBAAQgeAAAlhag");
	this.shape_320.setTransform(17.9,-13.6,0.153,0.153);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#7A6654").s().p("AivB5QAHgaARgbQAegvA2gvQA6g0A0gVQA8gaArgCQAVgBAJAEQgTAAgaADQg0AIghASQg7AigtAlQhEA3gZA1QgVAsgDAAQgBAAABgHg");
	this.shape_321.setTransform(7.4,-11.9,0.153,0.153);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#7A6654").s().p("AhhCHQgGhAAag9QANgaAVghQAPgWAKgNQALgQgIgXIgLgUIAVAVIAAAAQAGAGARAAQAFAAAHADQAIADACAFQADAGgGgBQgGgBgGgDIgGgDQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAVAFAEQAGAGAEABQAHAEAMgCQAQgDAQgKQALgIAGgGQgIAJgLAJQgYATgWgEQgEgBgGgEQgKgHgFgNQgDgOgEAKQgDALACAFQACACAOAWQASASAbgNQgFAEgHACQgPAFgLgFQgXgOgHgXQgEgIgDAPQgCALAAAKIgGAZQgFAWAAAIQABAIgDADQgEADAAAKIgCAlQABAZAJAWQAGAMgCAAQgCABgFgLQgNgeABgpQABgmAKgiQAHgeAAgDQgBgHgFAHQgFAHgBAHQgCALgTAYQgJANgKATQgNAbgBAQIgGA8QgDAXgBAAQgBAAAAgJg");
	this.shape_322.setTransform(8.9,-7.6,0.153,0.153);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#7A6654").s().p("AhkBbQAAgfgNgMQgLgLgIgCQgHgBgFgHQgHgIgEgOIgCgLIAIAPQAJAQAHABQAGACADgEIAEgKQACgBAOgVQAWgcApgcQAvghBCgPQBAgPAWAPQgfgFguAJQhaARhEBCIgPATQgQAUgBAKQgBAKAGAFQAFAEAFgCQAGgDALATQAMAVgFAcQgBgMgEgOQgGgbgNgEQgNgEADAFIAJALQACAIAAASQgBAWgJALQADgNAAgQg");
	this.shape_323.setTransform(12,-11.5,0.153,0.153);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#B7857C").s().p("AAuBSQgcgEgegYQgVgQgQgUQgQgUgBgnQgBgrAbADIAbAEQASAHANAWQAQAdAOAjQANAXAEARQAHAagUAAIgGAAg");
	this.shape_324.setTransform(8.8,-10.9,0.153,0.153);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#AE8175").s().p("AA1BZQgfgDgegYIgmgkQgagSgBgwQgBgyAjACIAAAAQATAAAMAEQATAIAMAWQAKASAJAWIAMAaQAOAaAEAUQAHAfgWAAIgEAAg");
	this.shape_325.setTransform(8.8,-10.9,0.153,0.153);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#A68070").s().p("AA8BhQgigCgfgZQgcgbgJgHQgmgQAAg5QAAg6ArAAQATgBAQAHQAVAJALAVQAQAfANAmQAOAcAGAWQAJAlgaAAIgCAAg");
	this.shape_326.setTransform(8.7,-11,0.153,0.153);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#9E7D6C").s().p("ABCBpQglgBgfgaQgbgcgKgFQgwgPAAhAQAAhCA0gDQAUgBASAIQAWAKAKAVQAKASAIAZQAJAYADAFQAOAbAGAcQAKArgdAAIAAAAg");
	this.shape_327.setTransform(8.7,-11,0.153,0.153);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#967A67").s().p("AAABWQgagcgLgEQgbgHgQgaQgOgXAAgfQAAgfAPgVQARgYAcgCQAWgCAVALQAXALAJAUQAKATAIAaIALAeQAPAbAHAgQAKAxgeAAQgpAAgfgag");
	this.shape_328.setTransform(8.7,-11,0.153,0.153);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#8E7762").s().p("AADBfIglggQgggGgSgdQgRgZAAghQABgiARgYQATgaAggEQAXgDAYANQAXAMAKATQAKAUAHAbQAIAbACAFQAPAXAJAoQALA2geABIgGAAQgpAAgegZg");
	this.shape_329.setTransform(8.6,-11,0.153,0.153);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#926A62").s().p("AAKAMIgCgHQgBgEgDgBIgRgNIALAFQAKAGACAFQAEAHAAADIgBABIgDgCg");
	this.shape_330.setTransform(12.1,-7.7,0.153,0.153);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#926A62").s().p("AgmAEQgKgGgCgIQgBgEAGAHQAIAIAHAEQAIAFATgBQAQgBAIgDIAegEQgkAKgYABIgDAAQgOAAgMgIg");
	this.shape_331.setTransform(13.3,-6.6,0.153,0.153);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#926A62").s().p("ABPArQgMgWgGgKQgfgtgVgFQgZgIgYAKIgQAIIgPAIQgEADgHAAQgCAAgBAAQgBAAAAAAQAAAAAAAAQAAAAABgBIAKgDQAJgDAEgEQALgLAdgJQALgDANACQAQACAKAIQAKAHANASQALAPAFALQADAIAJARIAIAQIgIgJg");
	this.shape_332.setTransform(13.4,-7.6,0.153,0.153);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#926A62").s().p("ABGAuQgJgDgHgMIgJgPQgDgBgHABIgHAAQgRADgTgBIgSgCQgSgEgLgNQgIgJgCgJQgBgEgEgFIgHgHQAAAAgBgBQAAAAAAAAQgBgBABAAQAAAAAAAAIAJABQAJABAQgIQARgGANAEQAGABAEADQAMAGATAVQAMANAIALQAFAJANAHIAPAHIgTgFIACAGQADAGAHAEQAFAEgCAAIgGgCg");
	this.shape_333.setTransform(13.6,-7.2,0.153,0.153);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#7A6654").s().p("AgKAQQAEgKAAgCQAAgGAGgJQAFgJAHAAIgEAFQgFAFgBAEIgEAOQgEALgDACIgBAAQgCAAACgFg");
	this.shape_334.setTransform(22.9,-3.4,0.153,0.153);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#7A6654").s().p("ABBA2QgPgEgMgLQgPgOg3gWIgggNQgWgLgHgGQgKgLAOgOQABgBABgBQAAAAABAAQAAgBAAABQAAAAAAAAIgBALQAAAKAQANQARAOASAFQAQADAVAKIAaAOIARALQALAJAHACQAMAGAZgGIAAABQgKAGgMAAQgGAAgGgBg");
	this.shape_335.setTransform(19.1,-1.3,0.153,0.153);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#7A6654").s().p("AgIAMIAIgJQAEgGADgLIADAGQgCAGgFAGQgFAHgFADIgCABQAAAAAAAAQgBgBABAAQAAAAAAgBQAAAAABgBg");
	this.shape_336.setTransform(24,-1.8,0.153,0.153);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#7A6654").s().p("AgTAqQgHgHAFgJIAhgjQAEgEACgPQADgQABgBQACgBAAAZQAAAHgGANQgCACgMAKQgLALgCADQgCADABAHQACAHgCACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgCAAgEgEg");
	this.shape_337.setTransform(23.3,-2.6,0.153,0.153);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#7A6654").s().p("AA3AjIgNgJIgMgKQgIgGgMgEIg8gaQgPgGAAgGQgCgGAEgBQAEgBAEAHQACAEALAGQAJAFAFABIAbAMQAYAMAOAIQAMAIARARQgGgBgFgEg");
	this.shape_338.setTransform(19.6,-1.5,0.153,0.153);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#7A6654").s().p("AhJCEQgLgZgDgOQgCgLgBgNIgBgXIABgYQABgUgBgKQgBgTgOgRIgOgNQAKgHARAXIASAXQAMgEADghQABgTgKgWIgLgTQgUgagXgHQgRgFADgNQADgNAZAQQAWAOAMAVQAJAQALAmQAGATgMAdIgVAsQgNAcANAqQACAOAFAKQAHAMAEgPQAFgRAMgSQAJgOAIgFQAEgDAOgOIAQgTQAEgEAJgTIALgYQAFgHAHgTQAIgTACgKQADgPgJgSQgFgNAKARQAHAMAAAKQAAAKgJAYQgJAYgEAEQgFAFgFAOQgGAOAFgCQAGgCAig8QAQgbATgWQATgWALgEQANgFgIAGQgTAIghAxQghA0gIAKQgMARg8A/QgUAVgHAlQgEAYABAZQgIgngEgCg");
	this.shape_339.setTransform(14.6,-2.2,0.153,0.153);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#7A6654").ss(0.8,1,0,2.4).p("AAbARQACAFACAFQAEAHACAHAAbARQgJgPgNgMIgQgNQgSgFgFgFIgBgEQAVgLAbAsQAIAKAGALg");
	this.shape_340.setTransform(13.1,-4.1,0.153,0.153);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#7E6957").ss(0.9,0,0,4).p("AAgAkQgIgWgSgRIgRgNQgbgKgBgIIAEgGQAcgIAaAvQANAWAIAZ");
	this.shape_341.setTransform(13.1,-4.1,0.153,0.153);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#806B58").ss(0.9,0,0,4).p("AAjAoQgHgVgTgTIgRgNQglgNACgKIALgIQAhgFAZAxQAMAYAGAZ");
	this.shape_342.setTransform(13,-4.2,0.153,0.153);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#846E5B").ss(0.9,0,0,4).p("AAnAvQgIgVgTgTIgSgOQgvgSAHgNIAPgJQAogBAYAyQAMAZADAa");
	this.shape_343.setTransform(13,-4.2,0.153,0.153);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#88725E").ss(1,0,0,4).p("AAsA1QgIgVgVgTIgSgOQg5gVALgRIAVgMQAuACAWA1QALAbABAa");
	this.shape_344.setTransform(12.9,-4.2,0.153,0.153);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#8A735F").ss(1.1,0,0,4).p("AAvA7QgIgVgVgUIgTgQQhDgZAPgSQAHgKAVgEQA0AGAUA2QAKAcAAAa");
	this.shape_345.setTransform(12.9,-4.3,0.153,0.153);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#8E7762").ss(1.2,1,0,2.4).p("AAyA+QgHgWgWgUIgVgQQhLgdASgVQAJgKAYgFQA6AIAUA5QAJAcgCAb");
	this.shape_346.setTransform(12.8,-4.3,0.153,0.153);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#6F5D4D").s().p("ACNBdQgSgOgMglQgMgkgVgdQgbgngfgPQgMgGgRgEQgjgIgaALIgUAMQgUAOgEAHQgFAIgRADQgQADAGgJQAFgHAOgDQAPgEAIgHQAogjA0AHQBFAMAtBJIAJAIIATAQQAJAHgEASQgGAUACADQACADAFAOQADALAEADQAGADgCABIgBAAQgDAAgEgEg");
	this.shape_347.setTransform(13.8,-8,0.153,0.153);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#B7857C").s().p("AArA1QgRgFgNABQgjADgYgPQgbgQgCgjQAAgKANgNQAHgHAHgFQARgKAhALQAlANASAaQAOARAEAWQADATgHADQgJADgIAAQgGAAgFgCg");
	this.shape_348.setTransform(13.4,-7.6,0.153,0.153);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#B08377").s().p("AAwA9QgUgGgOABQglAEgagQQgfgSgCglQgBgPAQgQQAIgJAIgFQATgMAhALQAlAKAVAcQAPAUAHAbQAGAbgJAEQgJAEgJAAQgGAAgGgCg");
	this.shape_349.setTransform(13.4,-7.6,0.153,0.153);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#A88072").s().p("AA2BFQgVgGgRACQglADgfgRQgjgUgDgmQgBgUATgUQAKgKAKgGQATgNAhAJQAkAKAWAcQAUAXAJAhQAJAhgLAHQgJAEgJAAQgHAAgGgCg");
	this.shape_350.setTransform(13.4,-7.6,0.153,0.153);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#A48170").s().p("AA7BOQgZgIgRACQgnAEghgSQgngVgEgoQgCgZAXgXQALgMAMgHQAUgNAiAHQAjAIAZAcQAWAaALAnQAMAogMAJQgKAGgKAAQgHAAgHgCg");
	this.shape_351.setTransform(13.5,-7.6,0.153,0.153);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#9B7D6B").s().p("ABBBWQgcgIgSACQgoADglgSQgsgXgDgqQgDgdAZgbQAMgOANgIQAXgNAgAGQAkAHAaAdQAaAbAOAuQAOAugOAMQgJAGgLAAQgHAAgHgCg");
	this.shape_352.setTransform(13.5,-7.6,0.153,0.153);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#947966").s().p("ABHBeQgfgJgTACQgpAFgogUQgxgYgEgsQgDgiAcgfQAOgPAPgIQAXgPAgAFQAkAFAcAeQAdAdARA1QARA1gRANQgIAHgMAAQgHAAgIgCg");
	this.shape_353.setTransform(13.5,-7.6,0.153,0.153);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#8E7762").s().p("ABMBmQghgKgUADQgpAEgsgUQg2gZgEgvQgEgmAfgiQAPgQAQgKQAagPAfADQAjAEAfAdQAgAhATA7QATA8gRAQQgJAHgMAAQgIAAgJgDg");
	this.shape_354.setTransform(13.5,-7.7,0.153,0.153);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#8E7762").ss(1.2,1,0,2.4).p("AjZH2IAehYQAWgkgJgfQgKglAFgQQAHgVhBgnIhCgiQgfgPAUgXQAOgQAlgRIBcgtQA1gfABhZQAFiBArh1QAhhaAmgxQBviQAFByQADA2gOAwQgWCLAzB1QASAoAXAdQASAYAIABQAoAIAHgKQAFgIgJgPQgLgSAQgxQAGgUgEgYQgDgXgIgPQgKgRAdAFQAeAGAUAdQAKAPgIAcQgEARgLAoQgEAUAKAlQAIAeALAX");
	this.shape_355.setTransform(8.6,-0.9,0.153,0.153);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#947966").ss(1,0,0,4).p("AjcHvIAfhVQAWgkgHgfQgJgkAGgQQAHgWg8gjIg9gfQgfgRAQgWQALgNAhgUQADgDArgWQAWgLAVgLQA2ggABhYQAEh2AnhxQAchRAng9QBliLAIBiQAEAwgOA8QgVCHA0BxQASAoAZAdQAUAYAMABQAnAGAJgJQAFgIgJgOQgKgQAPg2QAGgUgDgXQgDgXgKgOQgIgRAbAFQAbAFATAcQAKAPgHAbQgFARgLAoQgDAUAJAkQAIAgALAW");
	this.shape_356.setTransform(8.7,-0.8,0.153,0.153);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#967A67").ss(1,0,0,4).p("AjfHmIAghTQAYgjgGgeQgIgkAFgOQAIgWg3ghIg5gdQgggSAOgVQAIgLAfgTQABgGAqgYQAVgMAUgLQA2gfAChXQADhtAjhsQAYhNAmhFQBdiFAKBSQAFAqgNBHQgVCCA0BuQAUApAaAbQAXAYAQABQBCAKgVgfQgFgJABgXQACgVAGgVQAHgTgDgYQgDgVgJgQQgKgQAZAFQAZAFASAaQAKAPgHAbQgEAPgMAoQgDAUAJAmQAIAeALAX");
	this.shape_357.setTransform(8.9,-0.7,0.153,0.153);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#9B7D6B").ss(1,0,0,4).p("AjjHdIAihQQAXgjgEgeQgFgjAGgPQAIgVgzgfIg1gaQgfgTALgUQAFgKAbgSQAAgHAogZQAUgNAUgLQA3ggAChWQAFi0BWirQBUiBAMBDQAEAYgLBeQgVB+A1BqQAVApAbAaQAaAZATABQBDAIgTgdQgGgJACgYQABgVAHgXQAGgSgDgYQgDgUgIgQQgLgPAXAEQAXAFARAZQAJAPgGAaQgEAPgLAnQgEAUAKAmQAIAfALAX");
	this.shape_358.setTransform(9,-0.6,0.153,0.153);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#9F7E6D").ss(1,0,0,4).p("AjnHVIAlhNQAXgjgDgdQgDgjAGgOQAIgWgugbIgvgXQghgWAIgTQAEgIAXgSQgBgIAmgbQAUgNATgMQA5giAAhUQAEimBOitQBMh9AOA0QAHAdgNBgQgUB4A2BnQAvBbA2ABQAmAEAKgGQAIgEgGgMQgGgJABgaQACgYAHgWQAGgSgEgXQgDgUgJgPQgJgQAUAFQATAEARAZQAKANgGAZQgEAPgLAnQgEAUAJAmQAIAfALAX");
	this.shape_359.setTransform(9.1,-0.5,0.153,0.153);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#A47E6F").ss(1,0,0,4).p("AjrHOIAnhNQAXgigBgcQgCghAGgPQAJgVgogZIgqgUQgigXAEgRQACgGASgSQgCgKAlgdQATgPATgMQA6ghAAhUQACidBGiqQBFh7APAnQAJAagPBnQgSB0A2BjQAxBcA+AAQAlAEALgEQAJgEgGgKQgHgKACgcQACgZAGgWQAFgTgDgWQgDgUgJgPQgJgPASAEQARAFAPAXQAKAOgGAYQgEAOgLAnQgDAUAJAmQAIAgALAW");
	this.shape_360.setTransform(9.2,-0.4,0.153,0.153);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#A88072").ss(1,0,0,4).p("AjtHHIAphKQAWgiABgbQABghAGgOQAJgVgkgWIgmgSQgigYACgRQAAgDAOgTQgEgLAkgfQASgPATgNQA7gggChVQACiXA+ikQA9h4AQAaQAMAVgQByQgQBvA1BgQAzBbBEAAQAnACAKgCQAKgCgHgKQgGgKACgeQABgcAGgVQAGgTgDgVQgDgTgJgPQgIgQAPAFQAPAEAOAVQAKAPgGAXQgEAOgLAlQgDAVAJAmQAIAhAKAW");
	this.shape_361.setTransform(9.3,-0.4,0.153,0.153);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#AE8476").ss(1,0,0,4).p("AjwHBIArhHQAXgiACgbQABggAHgOQAKgVgggSIghgPQgigagCgQQAGgPACgFQgEgNAiggQASgQASgOQA6ggAAhUQAAiWA3iZQA2h4AQAPQAQAOgSB/QgQBpA1BcQA2BcBKgBQAoACAJgBQAKgCgFgJQgGgKABgfQABgfAHgUQAFgSgDgVQgDgSgJgQQgJgPANAEQAMAEAOAUQAKAPgGAWQgDAOgKAlQgFAVAKAmQAIAgALAX");
	this.shape_362.setTransform(9.5,-0.3,0.153,0.153);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#B08377").ss(1,0,0,4).p("AjyG9IArhHQAYghADgZQAFgiAGgNQAKgTgagQIgcgMQgjgcgFgPQACgNAAgFQgGgOAhgiQAQgQASgOQA8ghgBhTQAAhHAHg3QAKhSAchUQAuh4ATAEQASAFgUCNQgPBkA2BaQA3BbBRgBQAYAAAZABQAMAAgFgIQgGgKABghQABgfAGgVQALgogVghQgHgOAKAEQAKAEAMATQAKAOgFAWQgEANgKAlQgEAUAJAnQAIAgAKAW");
	this.shape_363.setTransform(9.6,-0.3,0.153,0.153);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#B7857C").ss(1.2,1,0,2.4).p("AjyG3IAuhEQAYghAFgZQAGggAHgNQAJgUgVgNIgYgJQgjgdgHgOQgDgLgCgFQgHgQAggjQAQgSASgOQAfgSAPgdQAOgcgBgoQgDhBAEguQAHhRAchYQAkh5AVgGQAXgGgXCdQgOBfA2BXQA6BbBWgCQAYAAAaADQANAAgFgIQgGgKABgiQABgiAGgVQAMgjgVgjQgIgPAHAEQAJAEALASQAKAOgGAVQgEAMgKAlQgEAUAKAnQAJAiAKAV");
	this.shape_364.setTransform(9.6,-0.2,0.153,0.153);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#B7857C").s().p("AjPF0QAcgSADghQgCgoADgXQADgUg0gpIg0gmQASgJAegeQAegdACgBQAdgKANgdIAIgcQgJgXAVhiQAXhqgDgZQgFg0Aag8QAYg3AjgfQAighAVARQAXATgJBRQgGAyAIBAQAIA7ARA4QAEAPANASQANATASAPQAgAcAwACQAtACgHgNQgGgKABgYQABgXAGgVQAFgTgCgZQgCgZgJgOQgIgOAOAEQAOAEANARQAJAPgHAZIgQA1QgFAbAUA2QAKAaALAVQgYgMgCAXQgBAOgVAdQgfApgSARQgNAMgSAJQgLAGAAAbQAAAngoAfIgpAXQg2AQgfAMQg4AWgYAdQgYAcg0AXIgvASg");
	this.shape_365.setTransform(9.3,-0.3,0.153,0.153);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#A28870").s().p("AgUB5QgSgTgLgbQgUg2AjhQQAjhRAmALQATAFgBALIgNBPQgKBagUA6QgGASgJAAQgIAAgLgLg");
	this.shape_366.setTransform(17.1,-0.1,0.153,0.153);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#9E846D").s().p("AgaCDQgXgRgLgZQgbg3AohcQAoheA0ANQAZAHACATQABAHgJBRQgQB7geAdQgJAOgMAAQgKAAgNgKg");
	this.shape_367.setTransform(17.1,-0.1,0.153,0.153);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#9C826C").s().p("AgjCOQgagPgNgXQgPgaAEguQADgsATgsQAthrBEAPQAeAHAGAbQAEAXgJBLQgQCIgtAUQgMALgOAAQgOAAgPgJg");
	this.shape_368.setTransform(17.2,-0.1,0.153,0.153);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#987F69").s().p("AgrCYQgfgNgOgUQgRgZADgzQADgwAUgxQAzh5BSARQAjAIAKAkQAJAhgIBIQgIBFgUArQgUArgdAHQgPAIgPAAQgRAAgTgJg");
	this.shape_369.setTransform(17.2,-0.1,0.153,0.153);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#947C66").s().p("Ag0CiQgkgKgOgSIAAABQgUgaACg2QACg2AXg0QAYg6AlggQAqgjAzAJQBMAOgSCZQgIBHgXAsQgZAvglADQgQAFgQAAQgVAAgXgIg");
	this.shape_370.setTransform(17.2,-0.1,0.153,0.153);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#927A65").s().p("Ag9CtQgpgJgNgPQgXgZABg7QACg5AYg5QAahAAqgiQAwgoA6ALQAsAIATA1QASAxgJBIQgIBLgbAuQgeAygsABQgQABgOAAQgdAAgcgGg");
	this.shape_371.setTransform(17.3,-0.1,0.153,0.153);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#8E7762").s().p("AAbC+QiFgEgXgXQgagZABg+QAAg+Aag+QAdhGAvglQA1grBCALQAwAIAYA+QAXA6gJBJQgJBLgfAxQgiA0gxAAIgDAAg");
	this.shape_372.setTransform(17.3,0,0.153,0.153);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#9E846D").s().p("Ai2AOQAYgLAegIQAngLCOgFQAUAAAKABIAoAGIAwAJQASAFAFAGQACAEgigEQgjgDgLgDQgMgGgUgBQgbgDhAABQg7ACgyAKQgwANgRADIgLADQgFAAAPgIg");
	this.shape_373.setTransform(11,-13.5,0.153,0.153);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#9E846D").s().p("AhoCPQAZg2ANgjQARgsAlg5QAkg8AWgQQAoghAUgEQAUgFg7AsQgSAOgpA6QgrA+gJAcQgTA5grA6IgEAFQgCAAAIgSg");
	this.shape_374.setTransform(9.2,-10.1,0.153,0.153);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#9E846D").s().p("AggAhQABgQAXggQAYgiAOAIQAHAEgGAaQgHAagRANQgSAOgLACIgDAAQgJAAACgLg");
	this.shape_375.setTransform(2.7,13.3,0.153,0.153);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#9E846D").s().p("AgSDoQgRgvgBh3QgBhwgNgZQgmhKgWhRQgehpBFA6QBJA9A5BfQBdCZgwCEQgpBzgeALIgGABQgYAAgVg/g");
	this.shape_376.setTransform(-20.6,1.7,0.153,0.153);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#9A816A").s().p("AgqDTQgNgugGh4QgFhtgNgbQgihBgPhdQgThsBGA7QELDhhID1QgoCAgvASQgGACgGAAQgoAAgVhtg");
	this.shape_377.setTransform(-20.6,1.6,0.153,0.153);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#967E68").s().p("AhCC9QgIglgLiAQgJhpgPgdQgfg+gGhjQgGhwBGA8IA9AyQA1AvAkA1QBxCggvC9QgRA+gcAuQgdAugdALQgKAEgIAAQg5AAgWicg");
	this.shape_378.setTransform(-20.7,1.5,0.153,0.153);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#927A65").s().p("AhZCoIgTilQgNhlgQgfQgKgWgIgwQgIg0ACgqQAFhzBGA8IBAAwQA5AvAnA1QB6CjgvDaQgOBAgiA0QgiA2glAOQgMAFgLAAQhJAAgXjKg");
	this.shape_379.setTransform(-20.7,1.4,0.153,0.153);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#8E7762").s().p("Ag0FlQgqg8gPiWQgZjtgcg8QgLgUgEgyQgEgzAGgsQARh2BHA7QAKAJA5AmQA8AtAqA1QCECngvD3QgMBBgmA8QgpA+grARQgOAGgNAAQggAAgagmg");
	this.shape_380.setTransform(-20.8,1.3,0.153,0.153);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#9E846D").s().p("AgLA5QgOgTgFgcQgGgjAOgiQAEgIALAZQAMAfAJAGQAMAFAEASQADAIAAAIIgRATQgKAJgHAAQgGAAgEgFg");
	this.shape_381.setTransform(-21.9,8.2,0.153,0.153);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#9E846D").s().p("AArBxQglgFgUgKQgQgHAEgNQADgNARgFQAMgDgQgKIgjgTQgPgJAKgEQAIgCAZAAQASAAgZgNQgYgNgWgGQgSgFgEgLQgEgKAIgIQAMgKgpgYQg/gvBVAjQA4AWBJgEQAngCAogHQANgCgMAqQgNAqAEABQALACgDASIABARQAEATAIAFQAPAHAEAQQAEAUgeALQgTAHgbAAQgOAAgQgCg");
	this.shape_382.setTransform(-20.2,11.4,0.153,0.153);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#9E846D").s().p("AAeAtQghgCgogYQgjgVgWgbQgSgVAqAHQAnAGARAMQANAIAZAIQAdAJAhADQARACAHAHQAFAIgHAIQgOASgpAAIgRgBg");
	this.shape_383.setTransform(-20.3,7.6,0.153,0.153);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(0.4,0,0,2.4).p("ASnriQAEAEAIASQAIASAEAFQAFAFAJAOQALALANACQATACAUAGQAZAHAKAJQAMAKAHAdQAGAdgGAMQgFAKgIAaQgDANgDALIADAJQADALgCALQgDAYAKALQAGAHAXAhQAbAlAJAQQAJARANALQALAJAIABQAIABAZANQAdAQAIAMQAGAJAKACIANACQANAJAFAQIABACQABADADABQARAFACAcIACALQABAMgBAKQgBAIADAIQAFAKAAADQABAFACALQABALgBAOQgDAiAGAJQAHAMABAjQABAtgVAOQgcATgIADQgOAEgpgEQg/ANgfAOQgRAIg1AUQgxASgFADQgTALggAKQgxAPglgGQgQgCgngIQgRgEgTABQgaABgngVQgpgWgLgaQgYg3gEgWQgCgJgIgHQgIgHgFACQgEACgDAKQgFARgHALQgKATgcAgQgeAggSALQgPAIAAASQAAAXgDAFQgHAPgEAHQgIAOgNALQgNAMgDAJQAAACAAANQgLCTgpBGIgTApQgTAtAAAVQgCAqgIAZQgEAOgGAMIAGASQAEAVgFAMQgCAFAFAHQAGAIgBAHQgBAKAGASQAGAPAGAIQAHAJgFAVIAXAsQAVAwgNAUQgNAVgCAAQgCgHgHgHQgEgFAAAHQABAEABAEIgBAKQgDAKgKAAQgLABgEAAQgGAAgPgFQgDAAgGgEQgEgCAAACQAAANgagCQgfgCgjgZQgRgKgHgFQgMgJgTgcQgEgFgIgcQgHgagBgIQgBgXAAgSQgBgjgHgIQgPgRAAgnQAAgpgCgDQghg2AAhcQAGhTgDgDQgDgEgZBJQgNAlgNAmIgHAoQgNAugYAZQgWAXgBAZQAAAZgJAJQgDADADAPQAFASgDALQAAAFgCAQQgCAQgGAKQgCAEAGAZQAGAZgHAVQgDAJAJAgQABAAAGAXQAFASAEADQA+Bog2AYQgLAHgKgHQgHgEgEgBIgCgBIgDAHQgDAIgDAEQgFAHgSAFQgYAGgVgMQgJgFgDgBQgCAAgEgDQgCgCgDAAQgDABgBABQgEAJgVgBQgXgBgXgOQgJgFgIgIQgIgLgGgHQgNgRgIgiQgHglgDgMQgBgHABgwQAAgogGgJQgagnACgpQACgmgDgDQgMgPAOgYQAMgXgCgBQgWgKgChSQADhXgBgMQgBgTgJgUQgJgXgKgGQgOgHgGgEQgIgFgCgMQgBgLgOAFQgPAIgEAAQggAHgYgVQg+AQgxADQhpAGg+gDQiSgHhHgvQhMgzhZgqQhMgjgXgCQgGgBgxADQgqACgUgIIgaBVQgfBbgXAeQgXAdAAAkQAAATACATQgDAKAEA4QAEA/ALAgQAJAZArBXQAhBOgeASQgDAEgGACQgLADgIgIIgDAMQgFAKgUAAQgHAAgkgHQgWAEgRgBQgegCgjgrQgGgHgXgIQgSgHgFgUQgCgNgSgcQgzhiACgmQAAgWgRgaQgSgaAAgCQADgNABgOQACgdgIgKQgNgSATiZQAGgngIgsQgLgwgEgXQgIgrgKgxIgJgoQgahfgNg5QgThHgOhUQgbilAPh9QAOhAAchQQA6ifBNhSQBQhWBMg7QArghBGgsQAwgeB4glQB6glBpgQQBegOBvANQBAAHCJAdQBCAOBcAdQALADCaAyQAHACC5AvQCJAiAzAdQAvAbBmgFQBpgFAXAMQAhARBAgFQBMgGALADQAWAEA0AHQAvALAeAcIAZAHQAeAEAGACQAlAHAfAOIAEAAQAGgBAFgBQADgBAEgPQAGgWAEgKQAMgXAfgaQAHgFALgMQALgLAFgIQAGgJAMgIQAPgJgCAPQAAALAAAzQgBAxgOAVQgNAVgRATIgNAPIADAFQAFAGACAIQACANAJATg");
	this.shape_384.setTransform(-0.2,0,0.153,0.153);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#8E7762").s().p("ACJSrQgJgFgDgBIgGgDQgCgCgDAAIgEACQgEAJgVgBQgXgBgXgOQgJgFgIgIIgOgSQgNgRgIgiIgKgxQgBgHABgwQAAgogGgJQgagnACgpQACgmgDgDQgMgPAOgYQAMgXgCgBQgWgKgChSIAChjQgBgTgJgUQgJgXgKgGIgUgLQgIgFgCgMQgBgLgOAFQgPAIgEAAQggAHgYgVQg+AQgxADQhpAGg+gDQiSgHhHgvQhMgzhZgqQhMgjgXgCQgGgBgxADQgqACgUgIIgaBVQgfBbgXAeQgXAdAAAkQAAATACATQgDAKAEA4QAEA/ALAgQAJAZArBXQAhBOgeASQgDAEgGACQgLADgIgIIgDAMQgFAKgUAAQgHAAgkgHQgWAEgRgBQgegCgjgrQgGgHgXgIQgSgHgFgUQgCgNgSgcQgzhiACgmQAAgWgRgaQgSgaAAgCQADgNABgOQACgdgIgKQgNgSATiZQAGgngIgsIgPhHQgIgrgKgxIgJgoQgahfgNg5QgThHgOhUQgbilAPh9QAOhAAchQQA6ifBNhSQBQhWBMg7QArghBGgsQAwgeB4glQB6glBpgQQBegOBvANQBAAHCJAdQBCAOBcAdIClA1IDAAxQCJAiAzAdQAvAbBmgFQBpgFAXAMQAhARBAgFQBMgGALADIBKALQAvALAeAcIAZAHIAkAGQAlAHAfAOIAEAAIALgCQADgBAEgPQAGgWAEgKQAMgXAfgaQAHgFALgMQALgLAFgIQAGgJAMgIQAPgJgCAPIAAA+QgBAxgOAVQgNAVgRATIgNAPIADAFQAFAGACAIQACANAJATIgBAAQAEAEAIASQAIASAEAFIAOATQALALANACQATACAUAGQAZAHAKAJQAMAKAHAdQAGAdgGAMQgFAKgIAaIgGAYIADAJQADALgCALQgDAYAKALIAdAoQAbAlAJAQQAJARANALQALAJAIABQAIABAZANQAdAQAIAMQAGAJAKACIANACQANAJAFAQIABACQABADADABQARAFACAcIACALQABAMgBAKQgBAIADAIIAFANIADAQQABALgBAOQgDAiAGAJQAHAMABAjQABAtgVAOQgcATgIADQgOAEgpgEQg/ANgfAOQgRAIg1AUQgxASgFADQgTALggAKQgxAPglgGIg3gKQgRgEgTABQgaABgngVQgpgWgLgaQgYg3gEgWQgCgJgIgHQgIgHgFACQgEACgDAKQgFARgHALQgKATgcAgQgeAggSALQgPAIAAASQAAAXgDAFIgLAWQgIAOgNALQgNAMgDAJIAAAPQgLCTgpBGIgTApQgTAtAAAVQgCAqgIAZQgEAOgGAMIAGASQAEAVgFAMQgCAFAFAHQAGAIgBAHQgBAKAGASQAGAPAGAIQAHAJgFAVIAXAsQAVAwgNAUQgNAVgCAAQgCgHgHgHQgEgFAAAHIACAIIgBAKQgDAKgKAAIgPABQgGAAgPgFQgDAAgGgEQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAABAAAAQAAANgagCQgfgCgjgZQgRgKgHgFQgMgJgTgcQgEgFgIgcQgHgagBgIIgBgpQgBgjgHgIQgPgRAAgnQAAgpgCgDQghg2AAhcQAGhTgDgDQgDgEgZBJIgaBLIgHAoQgNAugYAZQgWAXgBAZQAAAZgJAJQgDADADAPQAFASgDALIgCAVQgCAQgGAKQgCAEAGAZQAGAZgHAVQgDAJAJAgIAHAXQAFASAEADQA+Bog2AYQgLAHgKgHIgLgFIgCgBIgDAHQgDAIgDAEQgFAHgSAFQgJACgIAAQgPAAgNgIg");
	this.shape_385.setTransform(-0.2,0,0.153,0.153);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#8C7561").s().p("AhPATQAmgQAkgIQAbgIANgBQAGAAAggLQAdgJADADQAEAEgEAGQgFAHgQACIhGANQhNAVgKAEQgLAGgRABIgBAAQgOAAAlgOg");
	this.shape_386.setTransform(22.2,1.6,0.153,0.153);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(0.4,0,0,2.4).p("AEshDQAKAFgOANQgOAOgUAFQglAMgiADQgSADhMAZQhRAcgcARQgOAGgWAFQgsALglgEQg2gFg4gSQg8gUgEgRQgFgVEVgrQEXgsA0AZg");
	this.shape_387.setTransform(19.4,2.1,0.153,0.153);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#7A6654").s().p("AiBBMQg2gFg4gSQg8gUgEgRQgFgVEVgrQEXgsA0AZQAKAFgOANQgOAOgUAFQglAMgiADQgSADhMAZQhRAcgcARQgOAGgWAFQghAIgdAAIgTgBg");
	this.shape_388.setTransform(19.4,2.1,0.153,0.153);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#8E7762").s().p("AgJDDQgLgLgHgNQgOgZAUgFQAIgBgGgCIgTgGQgkgMgIgXQgBgFAQgKQAKgFgcgMQgIgDgIgnQgIgmAEgOQADgNgBgJQgCgJgIgOQgSgggRgoQgYg7ANgGQAKgDAgAFQAlAFAkAMQBlAjASBBIACASQAAATgKAFQgLAFAEAOQAEAOAIADQALAFAHAcQAJAegPAGQgJAEAHAIQAHAIAMADQAQAFAAATQAAAWgeALQgEACAagFQAegDAEAKQACAJALAPQAJANgBAGQgEARglAKQgSAEgVAAQgpAAg0gSg");
	this.shape_389.setTransform(-11.2,8.2,0.153,0.153);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(0.4,0,0,2.4).p("ACfkiQgfBhgbAfQgXAfACAkQAAARAIAWQAQAmAOBbQAPBfAGASQAHATAyBgQAaAzgVAUQgCAEgEACQgJAFgKgGIgCAIQgFALgLABQgHABgEAAQgHABgOgEQgGgBgHgCQgHgDgFgBQgGgCgBAEQgDAEgFABQgPAGgugZQgRgLgFgEQgGgFgSgVIgdglQgSgZgVgiQghg1gDgVQgBgIgRg1QgPgtABgpQgKgPgLgVQgWgqgEgcQgMhHAPhZQABgIARg+QALgtgCggIFNBpg");
	this.shape_390.setTransform(-11.2,6.5,0.153,0.153);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#846E5B").s().p("AB+GKIgNgDIgMgEQgGgCgBAEQgDAEgFABQgPAGgugZIgWgPQgGgFgSgVIgdglQgSgZgVgiQghg1gDgVQgBgIgRg1QgPgtABgpQgKgPgLgVQgWgqgEgcQgMhHAPhZQABgIARg+QALgtgCggIFNBpIAAAAQgfBhgbAfQgXAfACAkQAAARAIAWQAQAmAOBbQAPBfAGASQAHATAyBgQAaAzgVAUQgCAEgEACQgJAFgKgGIgCAIQgFALgLABIgLABIgCAAQgHAAgMgDg");
	this.shape_391.setTransform(-11.2,6.6,0.153,0.153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hipo, new cjs.Rectangle(-25.7,-19.4,51.4,38.8), null);


(lib.elephent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4AB95").s().p("AgyAnIgwhaQAlgWAqAHQA7AIA7A/IgdAUQg7ArgKABIAAAAQgHAAgsgeg");
	this.shape.setTransform(-9.8,22.7,0.082,0.082);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4AB95").s().p("AhPAUQgagyAngiQAfgaAvAFQAkADArAUQgSAbgKASQgZApgVAZQgRAWgXAQQgngigRghg");
	this.shape_1.setTransform(-8.4,21.8,0.082,0.082);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#302F30").s().p("AhoAtQgqgHglAWIgOgbQBEgdAhAKQApAMBIAnQgQgQgPgdQgZgvASgdQAVghAugRQAtgPAjAIQAaAHAvARIgQAWQgrgUglgDQgvgFggAaQglAiAZAyQAQAhAnAiQgPALgmAYQg6hAg8gIg");
	this.shape_2.setTransform(-9.1,21.8,0.082,0.082);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4AB95").s().p("AgfAlQgUgfALgmQARg/BEAeQgNAzgGAgQgGAfgLAbQgagQgOgXg");
	this.shape_3.setTransform(-7.2,19.9,0.082,0.082);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#302F30").s().p("AgtA6QgaglALgiQASg6AJgOQAKgPAYgEQAVgDArAMIgIAhQhFgegRA/QgKAmATAfQAOAXAaAQQgHAPgHALQgggWgTgZg");
	this.shape_4.setTransform(-7.2,19.8,0.082,0.082);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4D").s().p("AhcDvQgggKhFAdIhLiMQgPgkgXgqQAShHAyg5QA/hHBsgrQDKhPCmgJQAJAPgFAaQgGAiADAVQAFAngJApQgrgNgUADQgZAEgKAPQgKAOgSA6QgLAjAbAkQASAaAhAVQgKAQgaAiQgugRgagHQgkgIgsAQQgwAQgTAhQgSAdAZAxQAPAcAQARQhJgngpgNg");
	this.shape_5.setTransform(-9.2,20,0.082,0.082);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4AB95").s().p("Ag8gvQAwgQAhAOQAuASALBHIibAQQAGgyALg1g");
	this.shape_6.setTransform(2.9,19.9,0.082,0.082);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4AB95").s().p("AAFgkQA5AGAcAyIizASQAahTBEAJg");
	this.shape_7.setTransform(5,19.8,0.082,0.082);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4D").s().p("AATJ5QhMgohOgGQA/hSAMheQAZizAGjGQAIjhgYhJQgPgshEhtQhIhzgrhxIgKgaQBgAfBOA2QB6BWAeB0QASBFAnBVIBCCPQBKCmgUCBQgSBtgTCLQgOBYgbAXQgqAjgyBGQgWgTgngUg");
	this.shape_8.setTransform(5.6,12.1,0.082,0.082);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4AB95").s().p("Ag3gFQAIgYAYgFQAjgHAwAwQgcARhbAMQgCgZAGgQg");
	this.shape_9.setTransform(7.1,19.6,0.082,0.082);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7CEB5").s().p("AhBgHQAOgjAjgEQAsgGAuBAQgqAThpAQQgBggAJgWg");
	this.shape_10.setTransform(24,17.6,0.082,0.082);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#414141").s().p("AASAkIgjgrIADgcIADAEQARAZANAqg");
	this.shape_11.setTransform(-6.2,0.3,0.082,0.082);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBCBCB").s().p("AoGIBQgJgTCNhnQDViXCNhnQCchzCPjxQBWiRA9iZQAwA3ApAHQAEAcAGAaQAPA8gWBaIhFBtIhNBeQjFDshwBfQhmBXjqBXQhcAihEARQgpAKgSAAQgMAAgCgFgAFBkAIhXC0QggAziRCGQhLBHhQBGQgMAKh9BcQhvBWApgIQAxgKDoitQDlirA7hFQA7hEA9idQA9iegiAAQggAAg6B4g");
	this.shape_12.setTransform(-25.3,0.7,0.082,0.082);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CBCBCB").s().p("AgFgDIAMgDIgNANg");
	this.shape_13.setTransform(-13,-4,0.082,0.082);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595959").s().p("AkUG0QASheADhBICUihIDlk1IBPkOIBLE3QAHBag0CEQg+CfhaBsQhhB1hfAJIgLABQhRgfhHADg");
	this.shape_14.setTransform(-9.9,-7.4,0.082,0.082);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3C3C").s().p("AgXgQQhTgXg1AKIAcgGQAmgHAngBQB9gFBZAwIgcAtQhVgqhGgTg");
	this.shape_15.setTransform(-19.9,0.3,0.082,0.082);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4D").s().p("AjiPdQhvhqgohcQg3iABCksQAYhwAyiuIBZk3QBBjiAknCQAqhAAhhAQAfg+APgsQALAaASAYQAlAvAyAwIBPBLQBVBSAdBYQAZBLAkBRQAVA8gMBKQgIAxiNE7QiIEugFBTQgLCfADB2QAFCqAhAhQATATAPA6QASBDgHA9QgTCujKABQh9hhg/g7g");
	this.shape_16.setTransform(-12.7,9.4,0.082,0.082);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C0708").s().p("AAIBoQAGgRAGgHQADgEgngeQgtghgGgUQgJgfBLhCQAGADgCAJQgDAPgSAhQgOAfASARQAOAPAxAmQAjAggaAMQgLAEgSAAIgVgBg");
	this.shape_17.setTransform(-17.2,17.4,0.082,0.082);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C7C7C").s().p("AADgPIAWgDQgXAQgaAUQANgfAOgCg");
	this.shape_18.setTransform(-9.3,-19.7,0.082,0.082);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#282828").s().p("AgBgFIACgGIABAWg");
	this.shape_19.setTransform(-8.6,-15.7,0.082,0.082);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBCBCB").s().p("AASBCQgLgugMgVQgMgVgNAFIgCgDIA+hFIAAAzQAABJADA3g");
	this.shape_20.setTransform(-13.3,-3.2,0.082,0.082);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C3C3C").s().p("AhegmIA7AAQBLAKA4AuIgNAVQhOg/hjgOg");
	this.shape_21.setTransform(-22.1,4.3,0.082,0.082);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBCBCB").s().p("AgigNIANgOIAvgJIAJAxQgjAGgiASg");
	this.shape_22.setTransform(-12.7,-3.9,0.082,0.082);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#575757").s().p("AmyGSIAPgvIhWmUIgBgXIAKgWIAchkQAUhGAbgtQAgg2ApgdQAlgZA3gMQAhgHCNAQQBkALCJAUQBFAwBxBwQBUBTArAyQAXAcAUBQQh6CQiABoQjOCniYAEIg2ABQijAAh0geg");
	this.shape_23.setTransform(-4.5,-15.2,0.082,0.082);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7C7C7C").s().p("AgPgKIAAgBIAfgXQgJAbgIApg");
	this.shape_24.setTransform(-9.7,-19.2,0.082,0.082);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7C7C7C").s().p("AuefEQgfhjBDlwQAvj/BYlfQBNiDAthcQA+h/AXhcQAXhbgPg7QgGgagFgdQgGgpgCgpQgFhRAEhhQADhOAIhDQAEghAEgPQAbgiALgZQAWgwAJhuQAKh+gdgyQgcgwgZhzQgIgpgdioQgOhSBLh3IAzhOQAYgkgDgLQgEgRgjhPIg2h8QAJACAEADQADhZAmhkQBNjGCygxQCsgwBGAZQAJAEAmAVQAbAPAcABQAeACA1gdQAfgSBHgsQCPhTBmAnQBdAjB9BQQBjBABOBAIgIAFIgWADQgOACgNAgIgkAcIAAABIAPAuQgJAtgIBBIgJgGQhGgmhQAFQhdAFiJA9QjQBdEFEZQA3A6g1AZQgQAIghAGIgoAJQggAOg8A6QhGBEgSA2QgKAegNFcQgNFfgeBhQgXBJh8DZQhmC0iaD3QhZgxh+AFQgnABgmAHIgdAGQA2gKBTAXQBHAUBVAqQhOB7g+BfQhNg3hZgLQgcgDgYABQgaACAJAAQBkAEB4BVQg8BcgoA6QgaAkgWAmQg4gvhMgKIg7AAQBkAOBOBAQhSCJhMCyQg5CGgfBgQgQA1gYC7QgMA+gOAFIgDABQgQAAgVhEg");
	this.shape_25.setTransform(-16.7,-5.2,0.082,0.082);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C7C7C").s().p("AgdAQQAbgUAWgQIAMAAIAAABIgGABIg5Ang");
	this.shape_26.setTransform(-9.3,-19.7,0.082,0.082);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#595959").s().p("AgaAyIgKgNQgrg0AihfQAJBMAUAoQAbA7AqgkQACApAHApQgpgGgvg3g");
	this.shape_27.setTransform(-21.7,-3.9,0.082,0.082);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBCBCB").s().p("AglibQAfAwAsA8QgEBzgIA1QgCAPgHAVQgshmgKjSg");
	this.shape_28.setTransform(-12.7,-1.2,0.082,0.082);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5B5B5B").s().p("AC2DXIARgoQgxhMk9gHQjUgFknAZQBDi9AAgpQAAgOgNg4QEkAsEcgHQHPgMEAidQhrDaiZEQQgkAThxBBQhJAqg3AYQAWg3AWgyg");
	this.shape_29.setTransform(9.6,2.3,0.082,0.082);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#575757").s().p("AgEDYQgVhxgRlIIBVGTIgPAwg");
	this.shape_30.setTransform(-8.3,-13.7,0.082,0.082);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CBCBCB").s().p("AgxCEQAchqAQhsQAPhugHgkIgLg5IAOAYIAAABQAKDTAtBlQgPAsggA+QggBAgqBAg");
	this.shape_31.setTransform(-13.1,-0.4,0.082,0.082);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3C3C3C").s().p("AgugnIANgVQA1AtAbBMQgvg9gugng");
	this.shape_32.setTransform(-21,4.9,0.082,0.082);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3C3C3C").s().p("AgSg2QAHAEAMADQADASAEAOIALAfIgLAng");
	this.shape_33.setTransform(-8.3,-11.6,0.082,0.082);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#686868").s().p("ACUEqQifhTiTiHQhyhphiiDQADhEAChfIABguIAKgDQA5gPBpgKQCYA5C4CoQB0BsBvCDIglFDg");
	this.shape_34.setTransform(-9.4,-0.3,0.082,0.082);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5B5B5B").s().p("AgWCdQi0gCkNhiQAohoAehXQEngaDTAFQE+AHAxBNIgRAnQgWAxgWA4QhiAshiAUQhiAUh1AAIgWAAg");
	this.shape_35.setTransform(7.3,4.3,0.082,0.082);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7C7C7C").s().p("AAzC5QgVgtgZgiIg7i2QAIgqAKgbIA6goIAGgBIAbFtIgDAIg");
	this.shape_36.setTransform(-9.2,-18.3,0.082,0.082);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DBDBDB").s().p("AgJjjIAXAnIAMA4QAHAlgQBsQgQBugcBpQAPjxADjWg");
	this.shape_37.setTransform(-13.2,-1.2,0.082,0.082);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CBCBCB").s().p("AgxBdQgKhigZhUQANgTASgWQAageBwgYIgBALIg/BEIACADIgCABQgYAMACDPIgHAAIgkBDQAAgsgFgwg");
	this.shape_38.setTransform(-13.7,-2.6,0.082,0.082);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C7C7C").s().p("AASgNIgDAFIggAWIAjgbg");
	this.shape_39.setTransform(-9.7,-19.5,0.082,0.082);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5B5B5B").s().p("AmVVTQgkgXgzBVQgIhCAfg9QASglAegYQAMgLAogZQBCgpARhEQAShIgZhwQBRACBdgkQBhgkBMhBQBvhdgQh6QgFgrgZhKQgihigIghQgwi1gUiFQgcjDAHjUQAHi/Bti4QAQgcBdiOQBKhyAvhZQBojGAsiSQAVDJgNBFQgYB0iHEgQgZACgfATIgaAUIgdA7QggBPgNBgQgYC0AeMRQAKEFBxF3IAbBWQAmB7ACARQADAkgaAVQgNALg2AYQg1gxhFAPQguAJgRAiQgNAZAEAkIghAHQgpAAg9AJQhDhAhRgDQg0gBgVArQgPAcACAuQgkAAgcADQgZh2gigWg");
	this.shape_40.setTransform(-0.6,11.1,0.082,0.082);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#302F30").s().p("Agag1IA1AUIggBXQgMgwgJg7g");
	this.shape_41.setTransform(3.2,5.1,0.082,0.082);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#686868").s().p("EgU8AlXQgMg1gchXIgxiXQgfhngpkeQg4mGgWh9QgmjPgbjqQgPiGgGhXQAsAVgtgYIABADIgQgHQAIjZghhwQgNgrgRgZIgEgEQhDhdgKgYQgQgoAbgwQAmhEARjBQAVjzgxjpIBThZQA9hBBGgdQAUgIAsgPQAqgQAjgSQBFgkBHhdICijSQBbhpAUg0QAGgPABgPQABgOACgFQAEgGgBgUQgBgmgOg5QgThRgXgcQgrgyhVhTQhwhwhFgwIgYgPQgrgZikgdIACgMQBhAQBUACIAxAAQA2gBAzgIIACgBIALgBIABgBIAZgFIABAAIAmgJQCRgoB+g1ICbhBQBEgXBKAFQBQAGCVArQDgBBDgCJQCPBXAlAUQBsA8BwApQBUAfBcAIQAbADCFADQBjACBJAPQBmAVBtA2QCjDWA1E5QAbCdgGBxIA1EIQA+E2AtDlQANBEAKBSQgmgkgbgOIgTgIQgRAWABAoQABAlARAuQAQAqAYApQAQAaAtAhQAGBvAKDeIgGA9QggELBKEwQAZBmAoB0QAVA+AgBZQAmB0gJBiQgLBlg6APQhPAag6AMQhrAXhVgZQgIg8gWhsQgWhsgEggQgNhbhSi3QhIiihSiLQgvhPhriHQgug6h0iKQBfjdBDjkQBYkoAAi7QgmCRiLEaQkACdnRAMQkaAHkkgtQgeh/helBIhdk2IAcCzQAeDGAOCPQgsCRhoDGQgvBZhKBxQhdCPgQAbQhuC5gHC/QgHDTAdDEQAUCGAwC0QAIAhAiBjQAZBKAFArQAQB5hvBeQhNBBhhAkQhWAhhNAAIgLAAg");
	this.shape_42.setTransform(7.9,-1,0.082,0.082);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#282828").s().p("AgmiGQgJgjgKggQBiCGAOBiQAFAngDAxIhKBSQAZiZgui2g");
	this.shape_43.setTransform(-12.5,-6.1,0.082,0.082);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3C3C3C").s().p("AgGAHIADgyIABACIACgJIAHBlg");
	this.shape_44.setTransform(-8.8,-16.5,0.082,0.082);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E7CEB5").s().p("AhrAwQAGgjAPgXQAYgjAqgDIAqACQAyAMAkAxQgnALg8ANQgyAKgoAAIgagBg");
	this.shape_45.setTransform(21.8,18.1,0.082,0.082);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#282828").s().p("AAVDeIg9j8IAJiLQAWgnAJgVIAEASQAQFIAVBxQgNgEgHgEg");
	this.shape_46.setTransform(-8.7,-13.9,0.082,0.082);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C7C7C").s().p("AgFADIAHgFIAEADIAAACg");
	this.shape_47.setTransform(-9.1,-19.9,0.082,0.082);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231815").s().p("AhJAcQgDgRATgPQAUgRAggHQAhgIAbAHQAPAFAFAHIg+gNIgwATIgbAdIgIAQg");
	this.shape_48.setTransform(-12.6,-12.6,0.082,0.082);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#302F30").s().p("AhUAWQAHgeAWgYIBnAdQAqANgGAMQgCAFgHAGQg9gDhigIg");
	this.shape_49.setTransform(26.6,2.1,0.082,0.082);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DBDBDB").s().p("AgLgEIAAgdQAMAWALAtg");
	this.shape_50.setTransform(-13.2,-3,0.082,0.082);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#595959").s().p("AhGgZQBGgDBRAeQhpAKg4APg");
	this.shape_51.setTransform(-11.6,-3.6,0.082,0.082);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#282828").s().p("AgQgXQARgEAQAAIgKAzIgOAFg");
	this.shape_52.setTransform(-12.3,-3.6,0.082,0.082);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E7CEB5").s().p("AgSBKIgfgIQgFgHgFgNQgKgbgDgcQAzhUAjAWQAjAXAYB1IgUADQgSAEgUAAQgPAAgSgCg");
	this.shape_53.setTransform(-4.1,22.8,0.082,0.082);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#686868").s().p("ADQKPQAHgfhLgwIAAixQgFgpgDg9QgHh6AJhoQAIhnh1AmQgjAMgtAZQgWANgPAKQAdggAfg3QA9hyAJh+QAGhkh/gKQhKgGiOAcIAYgkQAQgYAGgeQAIglAEgIQAWgyB9g/QBrg1BdgIQA6gFArANIA2B8QAjBQAEARQADAKgYAkIgzBOQhLB4AOBRQAdCnAIAqQAZByAcAxQAdAygKB9QgJBugWAwQgLAZgbAig");
	this.shape_54.setTransform(-22.8,-12.1,0.082,0.082);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E7CEB5").s().p("AhWgGQARgiAtgJQBFgPA1AwIgmARQg7AfhhAWQgDgkANgYg");
	this.shape_55.setTransform(0.9,22.4,0.082,0.082);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3C3C3C").s().p("Ah0gqQgJgBAagCQAZgBAcAEQBYALBNA2IgPAXQh4hUhkgEg");
	this.shape_56.setTransform(-20.9,2.2,0.082,0.082);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3C3C3C").s().p("AhIgyIAPgWQBKA1A4BdQhWhRg7grg");
	this.shape_57.setTransform(-19.5,3,0.082,0.082);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#282828").s().p("AgVAgIgTADIAHgiIBKhSQgDBCgRBdQgQAAgRAEg");
	this.shape_58.setTransform(-12.3,-4.4,0.082,0.082);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5B5B5B").s().p("AFCD9Qg3gLgeAAQmdAAjwl2QC4CbBRA6QCZBygQhBQgJgighgyQgpg3gTgfQhGhyAghyIALAUQBTCMBZBYQBsBmBYgDQA1gDBAgLQAugIAIADQhLBCAJAfQAGAVAtAhQAoAegEAEQgFAIgHAQQgPgChEgOg");
	this.shape_59.setTransform(-20.5,16,0.082,0.082);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#282828").s().p("AhXAcIAMgLQALAIAUACQAVACAXgFQAfgHAUgRQAUgQgEgQIgCgGIAXAJIAAABQgBAJgFAJQgFAKgbAPQgbAQgXAGQgKACgMAAQgbAAgmgLg");
	this.shape_60.setTransform(-12.5,-12.4,0.082,0.082);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DBDBDB").s().p("AgMgVQANgFAMAVIgBAcIgYgsg");
	this.shape_61.setTransform(-13.4,-3.2,0.082,0.082);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#302F30").s().p("AAAgRIAEADIgHAgg");
	this.shape_62.setTransform(-6.6,3,0.082,0.082);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#302F30").s().p("AgYCRQhUhcgIg3QgDA/gUASQgGAFgHAAIgGgBQgbgfgcguQg4hZgChEQA/AKAugJQAkgGASgRQAHgGACgFQAGgMgqgOIhogcQAJgJAIgHIAagJQA4gSAvgHQBGgKAgATQg/AQgaANIgNAKIAhAHQAoAJAlAQQB5AzAvBgQgfgXgegQIgXgLIBWCHQBVCbAABZQgcg0gxhWIgshKIgDAoQgEAtACAVIhGh7IAEBkQALBsAjAuQh1hughgmg");
	this.shape_63.setTransform(28.1,3.7,0.082,0.082);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#302F30").s().p("AhQAOQAAgTACgNQBiAIA+ADQgTAQgkAGQgVAEgYAAQgdAAghgFg");
	this.shape_64.setTransform(26.5,2.4,0.082,0.082);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#686868").s().p("ACvAsQhWgPiwgtQiRgmg6gDQA7gEDWA6QCzAwCBAOQg3gFg9gKg");
	this.shape_65.setTransform(-6.5,-19.4,0.082,0.082);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DBDBDB").s().p("AjQHYQgDgJBfhhIBohpQA6g8AXgcQAsg0AbiIQAVhpAAhEIgBg/QgDjQAZgMIACgBIAZAtQgDDWgODxQgbBhgbA0QgrBSiXB2Qg5AsguAdQgmAXgJAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_66.setTransform(-15,0.5,0.082,0.082);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#414141").s().p("AgjCgIAjlCIAkAsIhDEZg");
	this.shape_67.setTransform(-6.3,1.6,0.082,0.082);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E7CEB5").s().p("AgIAxIg9gEIgJgEQAPgoASgXQAagiAaAIQAuANAaBVIgYABQgaAAglgCg");
	this.shape_68.setTransform(19.7,18,0.082,0.082);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7C7C7C").s().p("ADuG8IgZgMQgngKgcgnQg3hNgLgNQglgogfgTQgtgdgfgbQhHg7gBgCQgPgSgQhCQgMgvAWgJQAGgDgEgFIgkggIhXhKQgUgbAQg4QANgvAqhDQAKgQBEhkQCOgdBKAGQCAAKgHBkQgIB/g+BxQgfA5geAfQAPgKAXgMQAsgZAlgMQB1gngJBnQgIBnAGB7QAEA9AFAoIAACyQgYgQgdgPg");
	this.shape_69.setTransform(-24,-11.3,0.082,0.082);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#686868").s().p("AA1E2Qi4ipiXg5IALgBQBfgJBih0QBYhsA+ifQA0iFgHhaIgCgRIAXBVQAVBKAKAOQAJAMARgLQAPgKAigjQAxDpgVDyQgRDBgmBEQgbAwAQApQAKAYBDBdIgDAcQhuiFh1hrg");
	this.shape_70.setTransform(-8.6,-4.3,0.082,0.082);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#686868").s().p("AgCAWQiFgVgngLQgUgGgEgFQgHgJgfgaIAIAAQA6ADCRAlQCwAuBWAPIgCANIjtgkg");
	this.shape_71.setTransform(-7,-19.4,0.082,0.082);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#302F30").s().p("AkpTNQgRgThNg7QDKgBAUiuQAHg9gShDQgQg6gSgTQghghgFiqQgDh2ALifQAFhTCIkuQCLk7AJgxQAMhKgVg8QgkhRgZhLQgdhYhUhSIhPhLQgygwglgvQgSgYgLgaQAHgUACgQQAIg1ADh0QBjCDByBqQCRCHChBTIC6BgIgEAkIgaBkQgeBpgvB5Qg3CJhFCEQifEvgtBlQh/EdAUB1QATByDKBlQA5AeBiAnQBaAkATAKQAlAVAMARQinAIjKBQQhsAqg+BHQgzA5gSBJQgphOggglg");
	this.shape_72.setTransform(-9.8,9.3,0.082,0.082);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#575757").s().p("AnkASIAPg1QCGAiDHgFQCYgEDNioQCAhoB6iPQAOA4ABAmQgjA5g6BMIhHBbQguA8hMBOQhnBug+AnQg2AhhZAtQhjAygfARQg7AigZAvQgEAIgDAHIgCAFQhvkbgqh9g");
	this.shape_73.setTransform(-4.2,-11.6,0.082,0.082);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E7CEB5").s().p("Ah0A5QgCgtAPgcQAVgrA0ACQBQACBDBAQgkAGghAIIiNAjIgXgBg");
	this.shape_74.setTransform(-2,22.9,0.082,0.082);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#282828").s().p("AgdBaQgTgfgZg4QALgTgCgpQgCgpAFgJIABgEQAxCmAPgoQANggA0hnQAFAxAAAsQg7BwgLAeQgCAGgDAAQgJAAgTgfg");
	this.shape_75.setTransform(-14.7,-0.8,0.082,0.082);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CBCBCB").s().p("AkAEFQgHgMAjgkQBNhJBOhRIAXALQhfBhADAIQADAGAugcQAugdA4gsQCYh0ArhTQAbgzAbhhIgLCaQg5BXg7BBQhCBKg5AhQh+BMg8AbQgqATgUAAQgMAAgEgHg");
	this.shape_76.setTransform(-15.6,2.9,0.082,0.082);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CBCBCB").s().p("AgnAXIAAgBQgCg2AAhJQAigTAkgGIAJA2IAEgBIgBAuQgCBegDBEQgrg8gggwg");
	this.shape_77.setTransform(-12.7,-2.7,0.082,0.082);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3C3C3C").s().p("AhMgUIAdgtQBRAtArBWQhFguhUgog");
	this.shape_78.setTransform(-18.2,0.8,0.082,0.082);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3C3C3C").s().p("AlLDAIgIhmQAThEALg/QAUhzgLhJQAnAMCFAUIDtAkQCkAdArAZIAYAPQiJgUhlgLQiNgQggAHQg3AMglAZQgpAdggA2QgbAsgUBGIgcBkIgKAWIgDAGg");
	this.shape_79.setTransform(-6,-17.6,0.082,0.082);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3C3C3C").s().p("AgFhGIANAsIAIAlQgKAVgVAng");
	this.shape_80.setTransform(-8.8,-15.8,0.082,0.082);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7C7C7C").s().p("Agii2IAEAAQAeAaAHAJQAEAFAUAGQALBJgUByQgLBAgSBEg");
	this.shape_81.setTransform(-8.7,-18.4,0.082,0.082);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#231815").s().p("AhBAIQAbg6AggKQAUgHAZADQASACAeAJIgCAIQgbgHgjAIQgeAHgVARQgTAQAEAQIACAGIgJARIAGACQgTASgXALQAIgcANgeg");
	this.shape_82.setTransform(-12.8,-12.4,0.082,0.082);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#414141").s().p("AgvB1IBDkYIABAAQAhBwgIDXg");
	this.shape_83.setTransform(-6.2,1.9,0.082,0.082);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4D4D4D").s().p("ACVB4Qkohwh+hQIgChTIAXAUQBVBMCZBRQClBbBaAHIAjAEQgDAMAAAUQg6gKhCgag");
	this.shape_84.setTransform(23.6,1.2,0.082,0.082);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#231815").s().p("AAOATIgdgNIABgHIgbgGQgFgGgPgFIADgJIAmALQAWAGASADQAxAHgIASQgFAKgNAAQgLAAgSgJg");
	this.shape_85.setTransform(-11.6,-12.7,0.082,0.082);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#414141").s().p("AhRGTQgGgMgjAOQgfAMhBAjQCakRBqjYQCLkbAmiRQAAC7hYEoQhDDkheDdQgwg6gDgGg");
	this.shape_86.setTransform(14.7,0,0.082,0.082);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7C7C7C").s().p("AglASQAHhAAJgtIA7C3QglgygmgYg");
	this.shape_87.setTransform(-9.5,-18.2,0.082,0.082);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#686868").s().p("AglAuQgRgugBglQgCgoASgWIATAIQAZAOAmAkQAIBDAGBKQgughgwgVg");
	this.shape_88.setTransform(20.7,-1,0.082,0.082);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3C3C3C").s().p("AAkAPQgKhGg0g3Ig0goQCbAdACCKQABBGgeBAQACgVgQhzg");
	this.shape_89.setTransform(-11.2,-13.1,0.082,0.082);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CBCBCB").s().p("AiVErQAwgxBAhFQCRifgCkHIAkhDIAHAAIABA/QAABEgUBpQgbCIgsA0QgYAcg6A8IhoBpg");
	this.shape_90.setTransform(-14.9,0.9,0.082,0.082);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5B5A5B").s().p("Ah3OcQgMgDgFAFQgEAEgUACQgbhXgtgNQgcgHgaAiQgSAYgPAoQgWgNgVgZQgbggACgZQABgYAqg0QA5hHAYgqQAeg1gViXQBVAYBrgWQA6gMBOgbQA6gOALhmQAJhigmh0QgghXgVg/Qgoh0gYhlQhKkxAgkLIAGg9QAHCOAKBhQANB6AVBYQAvC9AfBKQAUAxA1BbQAnBLAaCdIAbCtQCRHXgMAaQgDAHgPAHQgvhBgtAFQgjAEgOAkQgJAXABAgIgOACQgRAKg7AQQgjgxgzgNIgrgCQgpAEgXAjQgQAYgFAjQgMgCgYgHg");
	this.shape_91.setTransform(21.6,10.8,0.082,0.082);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#595959").s().p("AikHQQgOhjhjiGIgQgrQBBAkBAAIQBnAOBGhEQBVhUA0izQAniGAGh+IAOjOIBZFrIhPENIjlE2IiUChQADgxgFgng");
	this.shape_92.setTransform(-10.7,-9.6,0.082,0.082);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#797979").s().p("AWLF6QhJgPhjgCQiFgEgbgCQhcgJhUgfQhwgphsg7QglgViPhWQjhiIjghBQiUgshQgGQhKgFhEAXIibBBQh+A1iRAnIgmAKIgBAAIgMACIgBABIgMACIgBAAIgLACIgCAAIgkAFQi2AUkRhLIi4gyQhagWgwAIIAAABIgEgDQAtgfAkgRQAsgUAUADQAwAHAkgCIDHgKQCigPDlg3QDgg1CahDQBWgmCPhGQBzgwEjBcQEFBTEMCSQBbAxB0A2QB6A5AsAXQCxBeDrDWQA8A2A1BFQhtg1hmgVg");
	this.shape_93.setTransform(4.3,-19.4,0.082,0.082);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#414141").s().p("Ag1BMQgJg6gEg3IgDgsICLgOQgeBXgoBog");
	this.shape_94.setTransform(3.5,4,0.082,0.082);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgMANgEIAGAAQAFABAFAFQAEAEAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_95.setTransform(-12.3,-12.6,0.082,0.082);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5B5B5B").s().p("AgGA8QgGhIgIhEQAOAMAWAZIAFB8g");
	this.shape_96.setTransform(21.2,-0.7,0.082,0.082);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2C0708").s().p("AhAAcQAHgVAGhJIAEhGIA1AMQAIgPAQgXQAZBUAKBiQg0BngNAgQgCAIgEAAQgTAAgniHg");
	this.shape_97.setTransform(-14.6,-2,0.082,0.082);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7B7B7B").s().p("AgZCEQgTgpgKhMQAehVBPhiQgIBDgEBPQgDBgAEBRQgPAOgOAAQgWAAgSglg");
	this.shape_98.setTransform(-21.6,-5,0.082,0.082);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7B7B7B").s().p("AASgTIgHAhIgcAGg");
	this.shape_99.setTransform(-12.8,-4.3,0.082,0.082);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#231815").s().p("AgJgBIgDgFIAaAGIgBAHg");
	this.shape_100.setTransform(-11.9,-12.7,0.082,0.082);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7B7B7B").s().p("Ah2GDQgsjTAokAQAJg/AXhqQARhQAAgVQAAgbAOgIQAOgIAWANQA1AhAvBzIAQArQAKAfAJAjQAvC2gaCaIglAoIgNADQhvAYgaAeQgTAWgMATQgQAXgIAPg");
	this.shape_101.setTransform(-13.7,-6.2,0.082,0.082);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#302F30").s().p("AmoNUQghgOgxAQQAWhkAZgcQAFgHBRg+QBMg7Asg4QBOAFBNApQAnAUAWATQAxhGAqgkQAbgWAOhYQATiLAShuQAUiAhKinIhCiOQgmhWgShEQgeh0h7hWQhOg2hgggQgWhAgQhIIAihYQENBiCzACQCDACBrgWQBigUBigsQilGWgwERQggC3gdHIQgYGCgVAfIgZAmQgMARgQAJQgwgygkAIQgYAFgIAYQgGARACAYIg7AHIg4AGQgdgzg5gGQhFgJgaBUIhWAJQgKhIgvgSg");
	this.shape_102.setTransform(6.5,12.5,0.082,0.082);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#414141").s().p("AiBJDQgKgDgOABQCHkgAWh0QANhFgTjIQgPiPgdjGIgdizIBcE2QBfFBAdCAQANA4AAAOQAAAphDC+IiLAPIADAsQAEA3AJA6g");
	this.shape_103.setTransform(3.3,-0.4,0.082,0.082);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#686868").s().p("AgWhAQAYAhAVAtIgEAzg");
	this.shape_104.setTransform(-9,-16.9,0.082,0.082);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3C3C3C").s().p("AAaD6QgKgOgUhKIgXhVIACARIhLk2IAMgnQAqB9BuEbIACgGQADgHAEgHIALAAIARBJQgiAjgPAKQgIAFgHAAQgGAAgFgGg");
	this.shape_105.setTransform(-7.4,-9.4,0.082,0.082);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#231815").s().p("AgIAHIAIgQQADAFAGAEIgLAKg");
	this.shape_106.setTransform(-13.2,-12.2,0.082,0.082);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#686868").s().p("AgJAMQgZgogPgqQAxAVAtAhIAFBXQgtghgOgag");
	this.shape_107.setTransform(20.8,-0.1,0.082,0.082);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3C3C3C").s().p("AmJFNIgKAAQAZgwA7ghQAfgSBjgyQBZgsA2giQA+gnBnhtQBLhOAvg9IBHhaQA6hNAig4QABAUgDAGQgDAFgBAOQgBAOgGAPQgUA1haBpIijDRQhHBchEAkQgjATgpAPQgsAQgUAIQhGAcg+BCIhTBYIgRhIg");
	this.shape_108.setTransform(-3.5,-11,0.082,0.082);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3E3A39").s().p("AgoAlQgUgCgLgIIAigjQATgTAPgFQAJgEALgBQgNAEAAANQAAAHAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgHQAAgHgEgEQgFgFgGgBQAUAAAaAJIACAGQAEAQgUAQQgUARggAHQgPAEgQAAIgMgBg");
	this.shape_109.setTransform(-12.5,-12.4,0.082,0.082);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#231815").s().p("AhKAcIAJgQIAbgcIAwgUIA9ANIAEAFQgagJgUAAIgCgBIgEABQgLABgKADQgOAGgTARIgiAlQgGgEgDgFg");
	this.shape_110.setTransform(-12.6,-12.5,0.082,0.082);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#575757").s().p("AgJAAQgEgNgDgSIAhAKIgQA1g");
	this.shape_111.setTransform(-8.2,-11.7,0.082,0.082);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#797979").s().p("AEgA/QiRgEjkg9QjWg6g7ADIgKAAIgCgCIAAgBQAwgIBaAVIC4AyQD3BECsgJIgiABg");
	this.shape_112.setTransform(-6,-19.4,0.082,0.082);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5B5B5B").s().p("ADlDHQhagHilhbQiYhShWhLIgXgUIgFh9QAWAXAfAmQBUBmCNBJQBSAqCFAtQAwAPAsALQgWAXgHAgg");
	this.shape_113.setTransform(23.7,0.6,0.082,0.082);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#DBDBDB").s().p("AkgFFQB9hcAMgKQBQhGBLhHQCRiGAggzIBXi0QA6h4AgAAQAiAAg9CeQg9Cdg7BFQg7BEjlCrQjoCtgxAKIgGABQgZAABlhPg");
	this.shape_114.setTransform(-24.9,0.9,0.082,0.082);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4D4D4D").s().p("AgJAkIgFhXIAbAVIACBSIgYgQg");
	this.shape_115.setTransform(21.2,0.2,0.082,0.082);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#686868").s().p("EgI9AhBQhQg7i5ibQgegvgdg5QijlBBYnPQAgisBAiqQA0iKA2hbIA5hiQhXFggvD/QhEFvAfBjQAXBLARgHQAOgGAMg+QAYi6ARg2QAehgA5iFQBMizBSiJQAvAnAwA+QgchMg2gtQAXgmAaglQAog5A8hcQA7AqBXBSQg4hehLg1QA+hfBNh8QBVAqBFAuQgrhYhSgtQCaj1Bli0QB9jaAWhJQAehiAOleQANldAKgeQASg1BGhEQA7g7AhgNIAogJQAggHAQgHQA1gZg2g7QkFkYDPhdQCKg+BcgFQBQgEBGAmIAKAFQAnAYAmAyIAqCCIggHnQgHB+gmCFQg0C1hWBUQhGBEhogOQhAgIhBgkQguhyg2ghQgWgOgPAIQgOAJAAAbQAAAVgRBQQgWBpgKBAQgnEBArDSIgtgJIgEBGQgFBKgHAVIgCAEQgEAJACApQACApgLAUIgHAKQgTAWgNA8QgHAfgDAZIhtDQQgSAdgfApQgXAijbD0QjfEBhCB9QhPCXgSDTQgSDZA+B+QggBzBGByQATAeAoA5QAhAxAKAjQAGAXgRAAQgcAAhjhIgAKw5zQA1A3AKBHQAQBzgCAVQAehAgBhGQgCiLicgdgAH93sQggAKgbA7QgNAegIAcQAXgLATgSQA4AQAfgHQAYgGAbgQQAbgPAFgLQAFgJABgJIAdANQAmARAJgTQAJgSgxgHQgSgDgXgGIgngLQgdgJgTgCIgOgBQgRAAgPAFg");
	this.shape_116.setTransform(-17,-0.5,0.082,0.082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.elephent, new cjs.Rectangle(-29.5,-23,59.8,46.5), null);


(lib.egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("EAAugwPQudAIq9ReQnALLlFRjQiPHvA8IyQBBJYEbHgQE8IYIUEVQJZE4Mvg3QJzANHukDQHSj0EmnHQEem5BSo8QBSpBiNpkQhfmijInuQjlo2kdnDQlNoQljkYQmclEmbAlg");
	this.shape.setTransform(0.3,-0.5,0.066,0.066);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("EgTYAsLQoUkVk8oYQkbnghBpYQg8oyCPnvQFFxjHArLQK9xeOdgIQGbglGcFEQFjEYFNIQQEdHDDlI2QDIHuBfGiQCNJkhSJBQhSI8keG5QkmHHnSD0QnuEDpzgNQh7AIh1AAQqaAAn+kJg");
	this.shape_1.setTransform(0.3,-0.5,0.066,0.066);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.egg, new cjs.Rectangle(-17,-22.5,34.6,43.5), null);


(lib.chicken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6D1A0").s().p("AgUADQASgOAXALIgYAFg");
	this.shape.setTransform(8.4,-8.1,0.085,0.085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5D09F").s().p("AgsADQAVgKAXAAQAYAAAVAKQgXAFgWAAQgWAAgWgFg");
	this.shape_1.setTransform(9.5,-8,0.085,0.085);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0CD9C").s().p("AgJgEQAAgMATgIIAAAxQgTgTAAgKg");
	this.shape_2.setTransform(17,-14.6,0.085,0.085);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1CD9D").s().p("AgKACIAMgaIAJAAIAAAxQgXgHACgQg");
	this.shape_3.setTransform(16.9,-16.3,0.085,0.085);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FADAAB").s().p("Au5NrQIJnmgDgOII9pcQhPhPgphXQgrhdgDhsQAGgagGgbQgDgYAIgXQACABABAIIAAgHQAAgEgDgDQAQiNBZhuQBwiOChggQADADAIAAIgCgEQACgDAIgBQAHgBABgGIAGAAQAIAHALAAQALAAAIgHIBCAAQAGAHAKgBIARgDQAwgBAxASQApAOAwAeQB+BNBDCWQBECXgYCTQgDAXgMARIgbAZIw1R5QgCgBoLHfg");
	this.shape_4.setTransform(14.5,-15.3,0.085,0.085);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4C294").s().p("AxYKuIIln6IQMxMIATgUQAMgMAMgDQATgKAXACQATAEATgHQDCgPCXCKQBmBaAtCCQAIAVAEAdIAEA0IgCATQgBALAKAIIABBPQgSAQAOASIAAAGQgGAAgCABQgDACAAAGQgHB1hYB0Qg4BPhSAxQhUAyhfAOIgnABQgZgHgYAHIgXABQgNgBgKgFIADgEQgIAAgEADQiZgVh0h9QgNgOgHAAQgIAAgMAOQhzB5jtDwIjVDXInuHZg");
	this.shape_5.setTransform(18.1,-11.4,0.085,0.085);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A8815A").s().p("A5ddXIgcgYQjCiwiBjjQh2jMg0jjQgIgfgEhBQgEg/gIggIAAhBQANgbgNgcIAAi5QAFgGABgIQAAgIgGgGIAAAAIAAgvQAPgUAFghQACgmAEgTQChtFMkohQOZpwR+i4QGFg+FeAnQAVACAagBQAVAFANAQIGuF4IAaAXQANAOgCAQQgFAOgPAOIgbAWMg5aAyFIgdAYQgPAPgBAQIgHABQgRAAgOgKg");
	this.shape_6.setTransform(-7.5,5.6,0.085,0.085);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A8815A").s().p("AoRfEQgegMgeAMIjSAAQgjgMgjAMIgeAAQgcgFg9gDQg6gEgegFQodhll+ldQgZgUgNgeQgGgZAZgbMA2Ug0VIAfgfQATgSASgHQAIgCAHACQAXAJARATIGtGgQAOALAFARQgDAYAIA1QAHAygEAbQgFAdADAvQAEA/AAANIgGA2QgEAhAIAVQgECUgcCiQgZCMguCjQkEOapGK3QowKctKCdQgNADhSAKQg6AHgkANg");
	this.shape_7.setTransform(-4.1,9,0.085,0.085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chicken, new cjs.Rectangle(-26,-25,53.6,51), null);


(lib.camel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CED5D6").s().p("AgCARQgQgFADgLIAHgLQAIgLABABQAEAAAHAQQAHAQgFAJQgJgBgHgDg");
	this.shape.setTransform(-16.4,22.9,0.115,0.115,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3CACC").s().p("AgDAVQgWgGAHgOIAKgMQAJgNADAAQADAAAJATQAJAUgGAKQgMgBgKgDg");
	this.shape_1.setTransform(-16.5,22.9,0.115,0.115,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7C1C3").s().p("AgGAZQgbgHAKgRIAMgOQAMgPACAAQAHAAAKAWQALAXgIAMQgQAAgNgEg");
	this.shape_2.setTransform(-16.5,22.9,0.115,0.115,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ACB6B9").s().p("AgIAeQghgIAQgUIANgRQAOgSADAAQAHACALAZQANAagIAOQgUAAgQgEg");
	this.shape_3.setTransform(-16.5,22.8,0.115,0.115,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AgdABQAIgJAIgKQAPgTAEABQAIACANAaQAPAcgJARQgXAAgTgEQgngJATgXg");
	this.shape_4.setTransform(-16.6,22.8,0.115,0.115,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A2ACAF").s().p("AgJAhQgngJATgXIAQgTQAPgTAEABQAIACANAaQAPAcgJARQgXAAgTgEg");
	this.shape_5.setTransform(-16.6,22.8,0.115,0.115,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E8789").s().p("AAFgUQAHAMgCALQgBAHgCAEQgFAFgMACQAIgHAHgig");
	this.shape_6.setTransform(-16.3,22.6,0.115,0.115,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AgBgeIAOAKQAPANACAQQADAWgRAFQgDAAgYAAQgiAAAbgtQAJgOAIgHg");
	this.shape_7.setTransform(-16.1,22.4,0.115,0.115,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A2ACAF").s().p("AgSgLQAJgOAIgHIAAgBIAOAKQAPAOACAQQADAVgRAFIgbABQgiAAAbgtg");
	this.shape_8.setTransform(-16.1,22.5,0.115,0.115,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#534121").s().p("AgFAKIAAgKIgDgJQgBgFAKACIAHAEQAFAHgMALQgCADgCAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_9.setTransform(22.6,-22.5,0.115,0.115,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CED5D6").s().p("AgCASQgRgGAEgLIAAAAIAIgKQAHgMABABQAEABAHAPQAIARgGAIQgJAAgHgDg");
	this.shape_10.setTransform(4.2,24.4,0.115,0.115,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3CACC").s().p("AgEAVQgWgFAHgOIAKgMQAJgOACAAQAFACAJASQAJATgFAKQgNAAgLgEg");
	this.shape_11.setTransform(4.2,24.3,0.115,0.115,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B7C1C3").s().p("AgFAZQgcgHALgRIAMgOQALgQADABQAGAAAKAWQALAWgHANQgQAAgNgEg");
	this.shape_12.setTransform(4.1,24.3,0.115,0.115,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ACB6B9").s().p("AgHAdQgigIAPgTIAOgQQAOgSADAAQAHACAMAYQANAZgJAOQgTAAgQgEg");
	this.shape_13.setTransform(4.1,24.3,0.115,0.115,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AgdADQAIgJAIgKQAQgUAEAAQAHACAOAaQAOAdgJAQQgYAAgSgEQgngIATgWg");
	this.shape_14.setTransform(4,24.2,0.115,0.115,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A2ACAF").s().p("AgJAhQgngIATgWIAQgTQAQgUAEAAQAHACAOAaQAOAdgJAQIgGAAQgUAAgQgEg");
	this.shape_15.setTransform(4,24.2,0.115,0.115,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E8789").s().p("AAGgUQAKAUgJAPQgFAGgMAAQAHgGAJgjg");
	this.shape_16.setTransform(4.3,24,0.115,0.115,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AAHgfIAKAJQAKAMACAPQACAXgRAEQgBAAgZAAQgNAAgCgFQgEgIASgaQAMgSAIgGg");
	this.shape_17.setTransform(4.5,23.9,0.115,0.115,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A2ACAF").s().p("AgMAgQgNAAgCgFQgEgIASgaQAMgSAIgGIAKAJQAKAMACAPQACAXgRAEIgaAAg");
	this.shape_18.setTransform(4.5,23.9,0.115,0.115,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("Ai5i6QABACAAACIAAgNIABAFQABAGAAACQAAACABgDQABgCAAABQAAABACABQABABAAABIACAQIABgJIABACQABACAAACQAAACACAFQACAGAAABQAAABACAGQACAGAAABQAAACABAAQABABAAABQAAABAAAIQABAHAAABIABgBQAAgBABABQAAABADAOQADAOACAEQAEAHACAEQAFAHAIAHIAEAFQAEAFABADIAAgGIACABQACABABADQACACAEACQADABABACIADAGIAAgDIAEABQAEADACAFQACAEACADQACADABABQABACAEAIQAEAIAGAEIAIAEQAIAFACADQAFAIAEALQAHAQAAAMQAAAEAEAQQADAQAAAFQgBANAAAIQAAAPADAGIAEASIADAeIgBAHQgBAIgCAFQgBAGABAEQAAABADAGIgDADQgCAEgCACQgDAAgCABQgGACgCADIgFAFQgFAFACABIAAAAQABABADAAIAAABQAAABACABQAFACASgDIAIgCQAJgCACgEQABAAAAgCQABgDgEgHQgBgCgBgCQgBgEAAgCQADgGgEgQQAAgNAAgQQgBgeACgHQACgFABgHQABgPgFgPQgBgKAAgOQgBgaACgLQADgJAAgDQAAgEAAgBQABgDABAFIAAgKIAEAAQABAAADgBQACAAABABQABAAADgBQADgCADACQADACAEgBQAEgBACAAIABgBQACgBADABIAAgCQABgBAFADIACgCQACgBACABQACABABAAQABgCADAAQArgEAwgZIADgEIgBAFIAGgKIAAAFIAFgHIABAAQACAAABABQABADABAJIACgBIABAOQACAOADAEIAAgDIABACQAAACACADQAGAKARAOIALAMQALANABAEQACAFADAIQACAKAAAGQAAAFgEATQgCAKgEAOQgCALgFAQQgHAUgEAEIgDAGQgDAGABAEIgCADQgBADgCAAQgEACgHAEQgKAGgCAEIAAADQABADADAAIgBABQAAABACABQAFADAYgCQADgBACgBQAGgEgBgEQgBgEAAgDQgCgIABAAQADgCADgEQAEgFAAgIQAEgPAEgPQAJgeACgDQABgCAIgXQAIgXACgCQADgEAAgJQAAgKgEgFQgHgMgIgYQgMghADgUQAEgcgDgUQgDgZgNgMQgEgGgHgHQgOgNgRgDQgKgDgMgEQgYgJgGgEQgFgDgGgEQgFgDgCgBQgCgBgBgBQgCgBgDgCQAAAAgBAAQgCAAgBgBQgBgBgBAAQgBABgBgCQgCgCgBABQgBABgCgDQAAACAAABQgBABgDgGQAAACgBAAQgBACgBgDQAAgBAAgBQgBgBgCADQgBABgBAAQgCABgCgDQAAAAgBgBQgBgBAAgBIgBAEQAAAAgBAAQgBgBAAgBQAAgBAAgCIgBgBIgBAFIgCgCQAAAEgBAAQAAAAgCgBIgBgCIAAACIgCgBQAAABgBABIgGACQgHACgCABQgCABgGAEQgFADgDADQgFADgKAFQgMAGgFABQgBAAgBAAQgCAAgBABQgCACgCAAQgCAAABgBQABgCgDABQgCAEgCAAQgIABgCABQgQAJgIAHQgDADgCADQgGAFAAABIACAAQAAABgBABQgBACgCABQgCABgBABQgBACAAABQgBABgCAAIgBAAQgBABgCAAQgCABgBABQAAAAgDAAQgEgBgBABQgBAAgBgBQgDgBgBAAQgBgBgBgBQgCgBgBAAQgDgFgCAAQAAgEgCAAQgBAAAAgCQgBgCAAgBQABgBgDgFQAAgCgBgCQgBgDAAgBQgBgBgBgDQAAgCgBgBQgBgBgDgKQgCgLAAgBIABABQAAgHgBgBIABgBQgBgCgBgBQgCgEAAgBIACAAQgCgDgBgCIADgBQgBAAgBgCQgDgDgBgFIACACQgBgIgCgCQgBgCgBAAQgBgBACABQACABABACQAAgBgBgCQgBgDgBgBIADABQgEgEgBgCQAAgBACAAQADAAAAAAQgEgCgBgCQAAgBABAAQABAAAAABQgCgDAAAAQAAgBABAAQABAAAAAAIABgBQACgBAAABQgBgCgCABIAAgBQABgBABAAQAAABABAAQAAgBgBAAQgBgBgCABQgBgBgBgBQgBgCABABQADAAABABQgEgFgBAAQgBAAAEgGQAFgIAAgGQAAAAAAgBQgBAAgBAAQgCABgDAAQgDABgCgBQgBAAgCABQgEAAgBABQgDAAgEgBQgHgBgFABQgFABgCAAIgCAAIgCABQgCgBgCAAQgGAAgEAEQgGAAgIABQgPACgHACQgGABgDACQgDACgDADQgCACgBACQAAAAgBACQAAAAgDAGQgDAFABACQACACABABQACACADgBIABABQACACACAAIAAABQABACABAAIABACQABACABABQAEAEAHgGIAEgCIAHAAQAHAAAEADQAEACADADQACACABAAIACAGQABgBAAgCIADAFQgBgBABgCQAAgDABAAQAAABABADQAAACAAACQABACABgIQABAFAAADIAAgBQABgFAAAAIABAGQAAABAAABgAi7i8QAAACACAA");
	this.shape_19.setTransform(-0.2,0.1,0.94,0.94,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B39144").ss(1.4,1,0,2.4).p("AAEjxIgMCEQgBAJgZBFQgVA6AEAUQAGAbAZAvQAcA4AtBB");
	this.shape_20.setTransform(-21.5,-0.4,0.115,0.115,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAHgBQgIAFgFgE");
	this.shape_21.setTransform(18.5,-23,0.115,0.115,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAHABQgJABgEgC");
	this.shape_22.setTransform(18.5,-23,0.115,0.115,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAJABQgMADgFgF");
	this.shape_23.setTransform(18.4,-23,0.115,0.115,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAKADQgOAAgFgF");
	this.shape_24.setTransform(18.3,-23,0.115,0.115,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AALAEQgSgCgDgF");
	this.shape_25.setTransform(18.2,-23.1,0.115,0.115,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAJAEQgLgCgGgF");
	this.shape_26.setTransform(18.1,-23,0.115,0.115,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAIAEQgMgCgDgF");
	this.shape_27.setTransform(18,-23,0.115,0.115,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAHAEQgKgBgDgF");
	this.shape_28.setTransform(17.9,-23,0.115,0.115,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAJADQgLAAgGgF");
	this.shape_29.setTransform(17.7,-23,0.115,0.115,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAJADQgNgBgEgE");
	this.shape_30.setTransform(17.6,-23,0.115,0.115,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAIADQgKgDgFgD");
	this.shape_31.setTransform(17.5,-23,0.115,0.115,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAGADQgGAAgGgF");
	this.shape_32.setTransform(17.4,-22.9,0.115,0.115,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1A130B").ss(1,1,0,2.4,true).p("AAEADQgEABgDgG");
	this.shape_33.setTransform(17.3,-22.9,0.115,0.115,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#483A1B").ss(1,1,0,2.4,true).p("Ag5k7QAQADAYAoQgGgGgZgEQgIgBALAOQAGAIAIAHQASgJAKAIQADACgBACQgCACgFgDQgJgGgEAKIgDAKQAWgGAHAKQACAIgFgFQgDgGgJAHIgIAIQgGgBgGABQgMABABAEQABAGAUATQgGgDgFgCQgKgDAEAJQAJAQAeAOQgEAEgWACQgRABAEAJQAJAOAcAeIgagHQAJADALAcQAGAPACAOQgJgQgRgOQgMgKAHAJQADAFAOARQALAQAJBBIgQgVQALAtAUAZQAKAMAIADIgXAHQALASANAZIgNAAQgEAJAPAbQAHAOAIAMIgIAIQALAIADA3IgMgHQgCAHAIAmQglh2gDgVQgujdgHgLQgEgHABALQAAAGABAHQgGgRgFgZQgLgyACgsQAJhlgGghg");
	this.shape_34.setTransform(12.7,-18.8,0.115,0.115,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7D662F").s().p("AAPCtQgujcgHgLQgEgIABAMIABAMQgGgQgFgZQgLgyACgsQAJhlgGgiQAQAEAYAnQgGgGgZgEQgIgBALAPIAOAPQASgJAKAHQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQgCACgFgEQgJgFgEAKIgDAKQAWgGAHAKQACAIgFgFQgDgGgJAHIgIAIIgMAAQgMABABAEQABAGAUASIgLgEQgKgDAEAJQAJAQAeAOQgEAEgWABQgRACAEAIQAJAPAcAeIgagHQAKADAKAcQAGAPACAOQgJgQgRgOQgMgKAHAJIARAWQALAQAJBAIgQgUQALAtAUAZQAKAMAIADIgXAHQALASANAZIgNAAQgEAJAPAbQAHAOAIAMIgIAIQALAIADA3IgMgHQgCAHAIAmQglh2gDgWg");
	this.shape_35.setTransform(12.7,-18.8,0.115,0.115,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgGgSIAGAgIAGgi");
	this.shape_36.setTransform(16.4,-17,0.115,0.115,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgKgQQAQAbAAAFQABAGAFgd");
	this.shape_37.setTransform(17.4,-18.4,0.115,0.115,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgHgiQAKA+AAAGQAAAGAFgl");
	this.shape_38.setTransform(16.8,-17.9,0.115,0.115,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAXgSQgGAhgLACQgBAAgNACQgJACgFgE");
	this.shape_39.setTransform(21.3,-20.7,0.115,0.115,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAvgMQgKALgSAGQghAQgggO");
	this.shape_40.setTransform(17.7,-22.1,0.115,0.115,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAFAEQgJgEAAgD");
	this.shape_41.setTransform(14.7,-22.6,0.115,0.115,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AA7AAQgJAJgNAHQgaAPgVgJQgcgQgGgFQgIgLgBgDQgDgLgCAA");
	this.shape_42.setTransform(14,-22.4,0.115,0.115,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAGAEQgGAAgGgH");
	this.shape_43.setTransform(14.7,-23.1,0.115,0.115,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("ABggrQgDAFgPAGQgkAEggAIQgSAFgKAGIgFAEIACADQACACAGACQABAAgIgBQgRgBgDADQgEADgIAFQgIAFgCABQgPAKABAKQABAIgCgBQgEgEgDgDQgFgEgEgCIgDgB");
	this.shape_44.setTransform(13.8,-23.6,0.115,0.115,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgEgGQAAAFAAABQACAEAHAD");
	this.shape_45.setTransform(15,-23.5,0.115,0.115,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAbgYQgdAYgDABQgRAKgCAAIgBACQgBADABACQABABACADQADADADAA");
	this.shape_46.setTransform(14.8,-23.7,0.115,0.115,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAOgGQgTAJgIAD");
	this.shape_47.setTransform(18.7,-23.6,0.115,0.115,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgZgJIAPAIQARAIATAD");
	this.shape_48.setTransform(17,-23.9,0.115,0.115,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAgAQQgMACgOgDQgbgHgKgY");
	this.shape_49.setTransform(18.1,-22.4,0.115,0.115,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AA9gWQgFARgQAMQgfAbgzgSQgLgGgHgN");
	this.shape_50.setTransform(17.7,-22.4,0.115,0.115,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAQgSQgIgBgIAHIgIAIQgEAEgCAKQgBAFAAAE");
	this.shape_51.setTransform(18.3,-23.2,0.115,0.115,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAuAOQABgHgDgCQhIgXgRAH");
	this.shape_52.setTransform(17.7,-23.1,0.115,0.115,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgDgIIAEAEQAFAFgEAI");
	this.shape_53.setTransform(22.3,-22.6,0.115,0.115,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AAwgPQgFAFgJAFQgSAJgPgDQgIgCgPAFQgQAHgJAF");
	this.shape_54.setTransform(22.9,-22.2,0.115,0.115,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgMALQAWgNADgI");
	this.shape_55.setTransform(21.3,-19.7,0.115,0.115,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgMAUQAQgJAJgTIAAgL");
	this.shape_56.setTransform(21.4,-19.8,0.115,0.115,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AgMAEIAFgDQAFgBADgCQAHAAAFgB");
	this.shape_57.setTransform(22.9,-20.1,0.115,0.115,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#3F3117").ss(0.1,1,0,2.4).p("AhbAXQAegCAegKQAIgBAUgKIATgFQAYgGAVABQAQAAAPgM");
	this.shape_58.setTransform(22.4,-20.6,0.115,0.115,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,0,2.4,true).p("AgGguIAEBWQABgMABgMQAEgYADgC");
	this.shape_59.setTransform(-23.8,1.4,0.115,0.115,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,0,2.4,true).p("AAAgqQAHA/gEARQgFARgBgm");
	this.shape_60.setTransform(-24,-2.5,0.115,0.115,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,0,2.4,true).p("AgEApQgBAJgCAFAgEApQABgCAAgCQAKgnABgGAgEg2QADBDgDAc");
	this.shape_61.setTransform(-23.7,-1,0.115,0.115,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#5B492A").ss(0.7,1,0,2.4).p("AkHAJQB+AQDVgTQBrgJBRgN");
	this.shape_62.setTransform(-3.2,-0.1,0.115,0.115,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#63502D").ss(0.9,0,0,4).p("AkAAMQB/AMDNgTQBngJBOgM");
	this.shape_63.setTransform(-3.1,0,0.115,0.115,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#69552F").ss(1.1,0,0,4).p("Aj5ANQB/AKDGgTQBjgIBKgM");
	this.shape_64.setTransform(-2.9,0,0.115,0.115,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#725E32").ss(1.2,0,0,4).p("AjxAPQCAAIC9gUQBggIBFgM");
	this.shape_65.setTransform(-2.8,0.1,0.115,0.115,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#7A6535").ss(1.4,1,0,2.4).p("AjpAQQCAAGC2gTQBbgIBCgL");
	this.shape_66.setTransform(-2.6,0.1,0.115,0.115,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#B39144").ss(2.2,1,0,2.4).p("ACyE0QgZg/gQgXIgMgLQgMgBgLgSIgIgSQgMgkgVgWIgUgPQgXgFgQgXIgKgVQgEgJgKgGIgJgFQhCgTgEhkQgCgfgHgIIgHgBQgNAQADgiIAGglQgMi4gYBWQgLArgJBQ");
	this.shape_67.setTransform(6.2,-2.5,0.115,0.115,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#AA8940").ss(1,0,0,4).p("AC0E5Qgfg/gRgXIgLgKQgMAEgLgUIgIgUQgNgkgWgXIgUgPQgXgEgPgWIgLgVQgHgQgJgDIgHgBQgWAAgUgeQgYgigEg5QgDgjgHgFIgFABQgOAVACgnIAEgrQgHi5gVBTQgLApgJBO");
	this.shape_68.setTransform(6.1,-2.3,0.115,0.115,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#A1823D").ss(1,0,0,4).p("AC3E8QgkhAgTgWIgMgKQgLAIgLgUIgKgWQgLglgXgWIgUgQQgWgDgQgWIgLgWQgJgVgIgCIgGADQgSAKgWgiQgYgkgGg7QgGgngGgEIgFAFQgOAZABgsIAEgxQgBi7gVBPQgKAogLBN");
	this.shape_69.setTransform(6.1,-2.2,0.115,0.115,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#987B39").ss(1,0,0,4).p("AC4E/QgphAgVgVIgMgIQgJAMgMgXIgLgYQgLglgXgXIgUgPQgWgDgQgXIgLgVQgNgbgGABIgEAGQgMARgZgnQgZgngIg6QgGgsgHgBIgGAIQgMAfAAgxIACg3QAFi+gUBMQgJAmgLBM");
	this.shape_70.setTransform(6.1,-2,0.115,0.115,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#8F7436").ss(1,0,0,4).p("AC6FCQguhBgXgTIgOgHQgIAPgMgZIgLgbQgMgkgVgVIgUgPQgWgEgQgXIgLgVQgPgggGACIgDAKQgJAYgZgqQgagpgKg8QgJgwgGABIgEALQgMAjgBg2IACg9QAJi/gSBJQgKAkgLBL");
	this.shape_71.setTransform(6,-1.9,0.115,0.115,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#866C33").ss(2.2,1,0,2.4).p("AC7FFQg0hBgYgTIgOgGQgGATgNgaIgMgeQgMgjgWgWIgTgPQgWgEgQgXIgLgVQgSgmgFAFQgDADABAKQgEAfgagtQgbgsgNg9QgJgzgHACIgEANQgMAqgCg7IABhEQAQjBgSBFQgIAigMBJ");
	this.shape_72.setTransform(6,-1.8,0.115,0.115,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#8F7436").ss(1.4,1,0,2.4).p("AgsAeQAMAOARgNQAIgHAMgLQABgBAPgBQAIAAgEgEQgGgFAIgFQALgKABgDQAKgQgGgEIgIAA");
	this.shape_73.setTransform(13.9,-23.3,0.115,0.115,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#8A6F35").ss(1,0,0,4).p("AgrAeQAKALARgNQAIgGAMgLIADAAQACAAANAAQAFAAgDgDQgGgGAHgGQAEgDAIgIQAGgJAAgDQAEgIgLAB");
	this.shape_74.setTransform(14,-23.4,0.115,0.115,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#876C34").ss(1,0,0,4).p("AgqAeQAJAIAQgMQATgQABAAIADAAQACAAAMAAQAGAAgFgDQgFgFAGgGQADgDAIgIQAGgFACgFQAFgHgKAA");
	this.shape_75.setTransform(14,-23.4,0.115,0.115,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#836833").ss(1,0,0,4).p("AgpAdQAIAFAPgKQATgOABgBIADAAQAFgBAJAAQAGABgDgDQgGgEAEgGQADgDAIgHQADgEAEgFQAHgHgIAA");
	this.shape_76.setTransform(14,-23.4,0.115,0.115,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#7F6532").ss(1,0,0,4).p("AgnAdQAFACAPgJQASgMADgBIACgBQAEgBAKABQAFABgDgDQgFgEADgGQACgDAHgHIAIgGQAJgFgHgD");
	this.shape_77.setTransform(14,-23.4,0.115,0.115,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#7C6131").ss(1.4,1,0,2.4).p("AgmAcQACgBAQgJQARgKAFgCQAGgBAIABQAFABgDgCQgHgGAHgIQAGgGAKgDQAKgFgIgE");
	this.shape_78.setTransform(14,-23.4,0.115,0.115,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E6E6E6").s().p("AABAHQgFgKADgEQADgEAAAPQABAFAAAAIgCgCg");
	this.shape_79.setTransform(18.2,-22.8,0.115,0.115,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.1,1,0,2.4).p("Ag4gWIAMgEQASgDAcAGQAvAJAFgDQgJARgQANQggAbgmgXQgFgFgFgHQgIgOADgNg");
	this.shape_80.setTransform(17.8,-22.7,0.115,0.115,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgWAIQgIgBAAgHQAAgGAFgBIACgCQAHgBAQABIAOACQAPACACACQAAAGgEADQgQAEgNAAQgLAAgJgCg");
	this.shape_81.setTransform(17.9,-22.9,0.115,0.115,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#332011").s().p("AgeAIQgJgCgBgOIgBgDQADgDAYADQAXAFAhADQgKAGgPAFQgPAFgLAAQgLAAgKgFg");
	this.shape_82.setTransform(17.7,-22.8,0.115,0.115,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#392714").s().p("AggAKQgLgHAAgNIABgEQAGgDAYAEQAaAEAeADQgKAIgPAHQgQAHgMAAQgNAAgKgGg");
	this.shape_83.setTransform(17.7,-22.8,0.115,0.115,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3F2E16").s().p("AggAMQgPgKACgOIADgEQAJgDAZAEQAeAGAZACQgKAKgPAHQgQAIgOAAQgNAAgLgGg");
	this.shape_84.setTransform(17.7,-22.8,0.115,0.115,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#463619").s().p("AgjAMQgOgMABgOIAGgEQALgDAaAEQAjAGATACQgKALgPAJQgPAJgPAAQgOAAgPgIg");
	this.shape_85.setTransform(17.8,-22.8,0.115,0.115,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4C3F1D").s().p("AgkAOQgRgOADgQIAHgEQANgEAcAFQAnAHAPgBQgKANgPALQgRAMgRAAQgOAAgPgJg");
	this.shape_86.setTransform(17.8,-22.7,0.115,0.115,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#534920").s().p("AgmAQQgFgFgEgHQgIgMAEgLIAJgEQAPgDAcAFQArAIAKgCQgJAPgQAMQgSANgRAAQgQAAgQgJg");
	this.shape_87.setTransform(17.8,-22.7,0.115,0.115,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,0,2.4,true).p("Ag4gWIAMgEQASgDAcAGQAvAJAFgDQgJARgQANQggAbgmgXQgFgFgFgIQgIgOADgMg");
	this.shape_88.setTransform(17.8,-22.7,0.115,0.115,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#595323").s().p("AgnARQgFgFgFgIQgIgOADgMIAMgEQASgDAcAGQAvAJAFgDQgJARgQANQgSAPgSAAQgRAAgRgLg");
	this.shape_89.setTransform(17.8,-22.7,0.115,0.115,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7C6131").s().p("AgvAVIAAgJQAFgMAfgRIAQABQAIgCAMgGQAOgHAGAGQAGAGgGACIgJgBQgFAAgFAEQgPAQARAGQAJADgIgBIgOgBIgNAAQgHAAgCAGQgCAIgRAFIgIABQgKAAgDgIg");
	this.shape_90.setTransform(14.1,-23.4,0.115,0.115,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8F7436").s().p("AgOACIgPgGIAGABIAPgCQANgDAZAIIgUgCQgJAAABACQAAAAAAAAQAAAAABABQAAAAABAAQABAAAAAAQACAAAAABQABAAABAAQAAABAAAAQABABgBAAQAAACgFABIgCAAQgEAAgMgFg");
	this.shape_91.setTransform(16.8,-23.9,0.115,0.115,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8F7436").s().p("AgYATQgGgCAIgJIAMgLQAPgVAXAJQgpAigKAAIgBAAg");
	this.shape_92.setTransform(14.8,-23.8,0.115,0.115,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#8F7436").s().p("AgdA6QgKgDgRgVIgOgUIAAgIQABgHAGgFQAFgGAOgGQASgJANABQAJAAgNgEQgHgIApgLQAXgGAQgCQARgCgBAFQgUAMgKAAQgGAAADADIAIAHIAHAGQACACAGAAQAHgBACACQACADgGABQgcAAgGAEQgEAEAAADQAAADAGAEQAEAEABAFQACAFgFgCQgJgCgGAGQgCADgKACQgIACABADQABAHgJAOQgLANgJAAIgEgBg");
	this.shape_93.setTransform(13.8,-23.3,0.115,0.115,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8F7436").s().p("AhFA2IAKgeQADgIADgVQAEgXAAgHQAAgHAFgMQAEgNAEgDQADgDAIAGQAQAMALAGQATALAcgOQAOgHAKgKQACACgBAbQgCAcADAHQADAGgFAGIgNAKQgDADADAPQADAMgKgBQgKgBgFgcIgDggQgDgMgTgGQgJgEgRATQgRASgDARQgCAPgSATIgVAVIgBAAIAGgSg");
	this.shape_94.setTransform(14.2,-21.6,0.115,0.115,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8F7436").s().p("AgPAwIAFgOQABgGABgMIAAgLIADgFQAEgFACAAIgDgDQgHgEADgCIAMgHQgLgDAAgDIgDgOQgBgNAHADIAGAGQAGAHADAGQAEAHAAAGQgBAGgFAIIgLAeQgIAYgFACIgCABQgBAAAAAAQAAAAAAgBQAAAAABgBQAAgBAAgBg");
	this.shape_95.setTransform(15.1,-22.5,0.115,0.115,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8F7436").s().p("AAJAjQgEgEgCgJIgDgMQgSgOgRgLQghgWgOALQgbAdAAgEIARgWQAVgTASAMQA1AjAJABQACABAQgGQAPgEAOADQAQAGAGAAIAWAAQASAAgNAPQgNAPgMgHQgKgGACgFQAAgBABAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIgRgFQgLgEgEAEQgDAEgJgCQgHgDgCAHIgGAQQAAABAAAAQgBABAAABQgBAAAAAAQAAABgBAAIgBgBg");
	this.shape_96.setTransform(17.2,-23.2,0.115,0.115,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#8F7436").s().p("AAVAJQgBgEgLABQgWACgQgBQgZgBALgEIAUgEIAXgEIAYgEQAHgDAQABQgDABgDAKIgEAOIgHAAQgIAAgBgEg");
	this.shape_97.setTransform(19.3,-22.9,0.115,0.115,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8F7436").s().p("AgqAjQgUgBgDgDQgCgDAJgCIATgBQAKgCgCgFQgBgFgGgDQgCgCAIABQAKACAVgCQAUgDALgEQAQgGAOgcQANgLgPA4QgBAEgQAGQgRAFgOAAQgJgBgNAEQgLAEgNAAIgGAAg");
	this.shape_98.setTransform(17.7,-22.3,0.115,0.115,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6B5729").s().p("AgoAVIAjgZQAkgZAIAEQAQAIgOAQQgFAEgJABQgIABgCgEQgBgBAEgIQACgGgEACQgGACgYAPIgZAQIgJAFIAGgFg");
	this.shape_99.setTransform(23,-22.3,0.115,0.115,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#866C33").s().p("AgpAPQAVgLAHAAIAIgBQACgBADACQADAEAXgIQA1gngmAfQgWASgTAFQgHADgCgDQAAgDgCgCQgEgGgpASIAPgHg");
	this.shape_100.setTransform(22.9,-22.2,0.115,0.115,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#866C33").s().p("AgIAGQgNgGAEgMIAEgFIAIAHQAiAdgPAAQgOgKgIgDg");
	this.shape_101.setTransform(21.5,-21.6,0.115,0.115,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#866C33").s().p("AACgNIAFAGQAIAPgXAGQAKgTAAgIg");
	this.shape_102.setTransform(21.1,-20.7,0.115,0.115,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#866C33").s().p("AgmAEQgNgIANgEQAkAHAUgFQARgEAIACQAHABgJAEIgfAEQgWADgGAEQgDACgDAAQgHAAgHgGg");
	this.shape_103.setTransform(22.8,-20.2,0.115,0.115,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#866C33").s().p("AhtAUQgWgTABgVIAEgSIgCAJQgBALADAJQAFAQANAIQATAKAggPQAGgCAUgDIAZgCQAKAAApgPIAggEQAWgCAPgMQAGgGAHAFQAHAFgFAGQgWAVgMgHQgHgGgaAEQgRADgQAFQgRAHgZAHQgUAGgiAGQgEABgPALIAAABQgCAAgVgTg");
	this.shape_104.setTransform(22.7,-20.7,0.115,0.115,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#866C33").s().p("ABJCOQgQgqAAgTQgCgYgEgNIgHgNQgCgEgEgmIgCgeQgDAIgOAdIgYAtQgHAQgEAyQgIgeALgjQAFgPAMgaQAKgQAAgWQAAgHgMAOIgTAWIgNAJQgHADgIgCQgHAAgBgFIABgGQAJAHAUgSQALgJAPgSQAFgFAOgJQAKgKgCgUQgEgUgFAGQgKASgLANQgbAfgRACQgMACgDgKQgDgFAIABQALACAGgDQAJgDAQgUQANgQAGgLQAHgLACgKQADgNgSANQguAkghACQgSABAIgEQAJgEAIAAQAHAAAFgSIACAHQAEAJAFgCIALgOQAJgJAGAEQAEADAFgHQAIgMAMgHQANgIASgcQAPgXAAAEQAAAKgdAwQgDAIAEAFQAEAEAIAAQAHAAAUgmQAHgKABAHQACAHgHAKQgMAJgFAHQgHAKABAdQACAbADAKIAIAKQADADABAaIACAsQABAPAHAZIAQBAQAHAkgDARQgBAIgDABQABgQgPgng");
	this.shape_105.setTransform(16,-17.5,0.115,0.115,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#866C33").s().p("AhTBcQAUhhAKgWQAMgXgUgBQgUgBgMAdQgPAigFAPIAHgbQAMgtAIgKQALgOgRgMQgQgLgNAUQgOATgEAQIAEgSQAGgfAFgCQAFgEgIgRQgHgSgHAJQgKALgKATIAGgXQAHgXAFgDQALgHADABQAIAAAFAVIADAJQADAJAGAAIAJAIQALALAIAOIAQAFQARAHAJAOIAOABQASAFAPAOIAXgFQAZgDAOAHIAUgMQAXgNARAAIAbgEIgIAiQgHAbAAAOIgDg2QAAgGgIgBQgIAAgHAHQgHAHgFAZQgEAUAAARQAAAUgCAKQgChFgJgCQgVgLAAAUIgCArIAAATIgEgSQgKg1ADgIQAEgKgOADQgOAEgGANQgGAQgIApIgDAZIgBgPQgCg6AFgKQAIgTgOASQgMAPgDAWQgIAggPApIANg9QANg8gDgBIgUgHQgOgBgHAUIgcBPIgGAUIgLA2QgDgMAOgqg");
	this.shape_106.setTransform(9.2,-9.4,0.115,0.115,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7D662F").s().p("ACcAvQgHgEgDADQgCADgKgHQgTgOhUgLQgGgBACAFQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAgBQgDgDgbgDQgXgCgOAAQgtAAgRgJQgIgEgrAJIggAGQAkgRgSADQgLACgcAAIgaAAQAlgKAIgFQAIgEAAgPIAOAPIADgQIAIAMQAIAMAGgDQAHgCADgcIANAKIALgoIAEAMIAEAYQABAOAPAAIADgdQAAAJAJAIQAHAGAGAEQALASAVgGQAKgDAIgHQAMgVAGAJQADAEAAAIQAFAYALgKQAHgGAEgKQATArAIgLQAEgGAAgOQAKAWALgIQAMgJAKAOQAOAUAIgGQAIgEAFAIQAGAMAQACQAIABAHgCQAOAOALAHQAIAFANAFQg4gQgVgIg");
	this.shape_107.setTransform(-7.2,-17.2,0.115,0.115,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#866C33").ss(0.9,0,0,4).p("AAxBHQgNgvgsgyIgqgp");
	this.shape_108.setTransform(-3.2,-12.5,0.115,0.115,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#8F7436").ss(1.2,0,0,4).p("AAvBIQgNgvgpgzIgpgr");
	this.shape_109.setTransform(-3.3,-12.3,0.115,0.115,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#987B39").ss(1.5,0,0,4).p("AAuBKQgMgvgpg1Igngs");
	this.shape_110.setTransform(-3.5,-12.1,0.115,0.115,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#A1823D").ss(1.8,0,0,4).p("AAsBLQgLgvgog1Igmgt");
	this.shape_111.setTransform(-3.6,-11.9,0.115,0.115,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#AA8940").ss(2.2,0,0,4).p("AArBNQgKgxgng2Igmgt");
	this.shape_112.setTransform(-3.8,-11.7,0.115,0.115,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#866C33").ss(0.9,0,0,4).p("ABJBdQgTg8hBhDIg/g4");
	this.shape_113.setTransform(-5.1,-12.2,0.115,0.115,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#8F7436").ss(1.2,0,0,4).p("ABGBgQgTg9g+hFIg8g6");
	this.shape_114.setTransform(-5.2,-12,0.115,0.115,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#987B39").ss(1.5,0,0,4).p("ABCBhQgTg9g6hGIg4g7");
	this.shape_115.setTransform(-5.4,-11.8,0.115,0.115,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#A1823D").ss(1.8,0,0,4).p("ABABkQgTg8g4hJIg2g+");
	this.shape_116.setTransform(-5.6,-11.6,0.115,0.115,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#AA8940").ss(2.2,0,0,4).p("AA8BmQgTg9g1hLIgyhA");
	this.shape_117.setTransform(-5.8,-11.4,0.115,0.115,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#866C33").ss(0.9,0,0,4).p("ABdByQgOghhXhjIhVhe");
	this.shape_118.setTransform(-6.8,-12.1,0.115,0.115,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#8F7436").ss(1.2,0,0,4).p("ABdByQgPghhXhjIhUhe");
	this.shape_119.setTransform(-7,-11.9,0.115,0.115,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#987B39").ss(1.5,0,0,4).p("ABdBzQgOghhXhkIhVhe");
	this.shape_120.setTransform(-7.1,-11.7,0.115,0.115,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#A1823D").ss(1.8,0,0,4).p("ABdBwQgQghhWhjIhVhe");
	this.shape_121.setTransform(-7.3,-11.4,0.115,0.115,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#AA8940").ss(2.2,0,0,4).p("ABbBwQgOgihWhjIhUhe");
	this.shape_122.setTransform(-7.5,-11.2,0.115,0.115,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#866C33").ss(0.9,0,0,4).p("ACdCBQgug6iKhoIiChe");
	this.shape_123.setTransform(-8.1,-11.9,0.115,0.115,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#8F7436").ss(1.2,0,0,4).p("ACdCBQgvg7iKhoIiBhd");
	this.shape_124.setTransform(-8.4,-11.7,0.115,0.115,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#987B39").ss(1.5,0,0,4).p("ACcCCQgug7iJhoIiChe");
	this.shape_125.setTransform(-8.6,-11.5,0.115,0.115,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#A1823D").ss(1.8,0,0,4).p("ACcCCQgug6iKhpIiBhe");
	this.shape_126.setTransform(-8.9,-11.3,0.115,0.115,0,0,180);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#AA8940").ss(2.2,0,0,4).p("ACcCBQgtg6iKhoIiChd");
	this.shape_127.setTransform(-9.1,-11.1,0.115,0.115,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#B39144").ss(2.4,1,0,2.4).p("AAqBLQgJgwglg3Iglgu");
	this.shape_128.setTransform(-3.9,-11.4,0.115,0.115,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#B39144").ss(2.4,1,0,2.4).p("AA6BmQgSg+gyhMIgwhB");
	this.shape_129.setTransform(-5.9,-11.2,0.115,0.115,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#B39144").ss(2.4,1,0,2.4).p("ABeByQgQghhWhkIhVhe");
	this.shape_130.setTransform(-7.7,-11,0.115,0.115,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#B39144").ss(2.4,1,0,2.4).p("ACdCBQgug7iJhoIiChd");
	this.shape_131.setTransform(-9.3,-10.8,0.115,0.115,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(0.4,0,0,2.4).p("AgxAnQAIgKAMgMQAYgYAYgNIgGAAQACgCAEgCQAHgEAGgCQALgDgLAAQANgDAEgC");
	this.shape_132.setTransform(-17.2,21.9,0.115,0.115,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CED5D6").s().p("AgBASQgRgEACgMIAHgKQAHgMACAAQACAAAJAQQAJAQgEAJQgJAAgIgDg");
	this.shape_133.setTransform(5.4,23.1,0.115,0.115,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C3CACC").s().p("AgDAWQgXgEAGgOIAJgNQAJgOACAAQAEgBAKATQALATgEAKIgFAAQgKAAgJgCg");
	this.shape_134.setTransform(5.4,23.1,0.115,0.115,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B7C1C3").s().p("AgFAaQgcgEAJgRIALgQQAMgQACAAQAFAAAMAVQANAWgGAMIgJAAQgLAAgKgCg");
	this.shape_135.setTransform(5.3,23,0.115,0.115,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#ACB6B9").s().p("AgGAeQgjgFAPgUIAMgSQANgSACgBQAHAAAOAYQAOAZgGAPIgNAAQgNABgKgDg");
	this.shape_136.setTransform(5.3,23,0.115,0.115,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AgeAFQAGgJAHgKQAPgVAEAAQAIAAAPAaQARAbgIARQgXACgTgCQgogGASgYg");
	this.shape_137.setTransform(5.3,23,0.115,0.115,0,0,180);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#A2ACAF").s().p("AgIAjQgogGASgYIANgTQAPgVAEAAQAIAAAPAaQARAbgIARIgUABIgWgBg");
	this.shape_138.setTransform(5.3,23,0.115,0.115,0,0,180);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7E8789").s().p("AAHgTQAHANgEALQgBAGgDAEQgEAFgMAAQAHgGAKghg");
	this.shape_139.setTransform(5.6,22.8,0.115,0.115,0,0,180);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AAIggIAKALQAJANAAAPQABAWgRADQgEABgWgDQgJAAgBgIQgDgMAUgXQAIgNAIgGg");
	this.shape_140.setTransform(5.8,22.6,0.115,0.115,0,0,180);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A2ACAF").s().p("AgPAeQgJAAgBgIQgDgMAUgXQAIgNAIgGIAAAAIAKALQAJANAAAPQABAWgRADIgCABIgYgDg");
	this.shape_141.setTransform(5.8,22.6,0.115,0.115,0,0,180);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#B5BBBD").s().p("AgCASQgRgHAEgLIAHgJQAIgMABAAQAEABAHAQQAHARgEAIQgJgBgIgCg");
	this.shape_142.setTransform(-12.6,21,0.115,0.115,0,0,180);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#AAB1B3").s().p("AgEAVQgWgHAHgNIAKgNQAJgNACABQAFAAAJATQAJATgFALQgNAAgLgEg");
	this.shape_143.setTransform(-12.6,21,0.115,0.115,0,0,180);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#9FA8AA").s().p("AgGAZQgbgHAMgRIALgOQALgPACAAQAHAAAKAWQALAXgIAMQgQAAgNgEg");
	this.shape_144.setTransform(-12.6,21,0.115,0.115,0,0,180);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#949DA0").s().p("AgIAeQghgIAQgUIANgRQAOgTADABQAHACALAYQANAagIAPQgUAAgQgEg");
	this.shape_145.setTransform(-12.7,21,0.115,0.115,0,0,180);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AgdACQAIgJAIgKQAQgUAEAAQAIACANAbQAOAdgJARQgXAAgTgEQgngKATgWg");
	this.shape_146.setTransform(-12.7,20.9,0.115,0.115,0,0,180);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#8A9396").s().p("AgJAiQgngJATgXIAQgTQAQgUAEAAQAIACANAbQAOAdgJARQgXAAgTgEg");
	this.shape_147.setTransform(-12.7,20.9,0.115,0.115,0,0,180);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#686F70").s().p("AAFgUQAHANgCAMQgBAGgCAEQgFAGgLAAQAHgGAHgjg");
	this.shape_148.setTransform(-12.4,20.7,0.115,0.115,0,0,180);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AAFgfIAKAHQAKAKABAPQADAXgPAGQgEABgVAAQgPgCABgHQAAgCAMgcQALgQAHgHg");
	this.shape_149.setTransform(-12.2,20.6,0.115,0.115,0,0,180);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#8A9396").s().p("AgZAXQAAgDAMgcQALgQAHgGIAKAHQAKAJABAQQADAWgPAGQgEABgVABQgPgDABgGg");
	this.shape_150.setTransform(-12.2,20.6,0.115,0.115,0,0,180);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(0.4,0,0,2.4).p("AgwAkQAJgIANgKQAagUAXgJIgGAAQABgCACgDQAEgFAGgBQAKgBgOgBIAZgM");
	this.shape_151.setTransform(-13.3,20.1,0.115,0.115,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2C2316").s().p("Ag0AkIABgHQACgcAygWQAagMAagGQggARghAfQgRAQgMAMIAAABIgGACQgEAAgBgEg");
	this.shape_152.setTransform(-12.9,20.5,0.115,0.115,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2C2316").s().p("AgxApIABgHQACgcAvgbIAxgWQgfARgfAjQgQATgKAPIgGABQgEAAgBgDg");
	this.shape_153.setTransform(-16.9,22.2,0.115,0.115,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#745B2E").s().p("AgFACQANgjAEgEQAFgFgGAhIgHAgQgLAQgEAAQgGAAAMglg");
	this.shape_154.setTransform(-16.2,16.6,0.115,0.115,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#745B2E").s().p("AACATQgBgJgWgHQgWgFgBgFQgBgIAPgHIAagIIAxgUIgSAXQgQAUgEABQgFABAFAcIAFAcQgHgQgDgQg");
	this.shape_155.setTransform(-15.6,19.4,0.115,0.115,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A1823D").s().p("Ag9AXQgFgCAKgLQANgNABgDQADgMACgCQAHgFATAJQASAKAegDQAPgCAMgEIgPAQQgNAOgJAEQgNADgOAAQgTAAgLgGQgHgEgKAGQgIAFgEAAIgCAAg");
	this.shape_156.setTransform(-19.6,20.5,0.115,0.115,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A1823D").s().p("Ag2DBQgKgFAAgRQAAgQAIgXIAMgpQAEgTA1iGIA0iDIg3CwQg2C1AAAeIgDAAIgHgBg");
	this.shape_157.setTransform(-21.2,16.5,0.115,0.115,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A1823D").s().p("AAEBQQAPgugJgLIAAAAQgThIgQgbQgLgSABgRQAAgSAGAKQADAEAPAkQAQAlAJANQARAYADALQAHAWgOAWQgMAVgPAcIgMAYQAKgUAGgXg");
	this.shape_158.setTransform(-23.7,7.6,0.115,0.115,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#7A6535").s().p("AjFDQIAHgLQAygTALgNQAFgHAYgPQAYgQAHgJQAGgHASgMQATgNALgPQAIgKAqgcQAjgWADgQQAEgQANgEQANgEABgMQADgNAOgNQAPgOABgHIACgVQABgMADgHQAYgoAAgQQgBgQABgEQABgHALAKQAMAKAFAgQAFAggLAXQgIAVgBAdQAAAYAEAPQACAOgFAeQgVgggfAgIgbAoIABgpIgyBQIAKgnQgNAdgjAQQg+AZg/AgQhIAlgOAAIgCAAg");
	this.shape_159.setTransform(-13.4,-3.1,0.115,0.115,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#866C33").s().p("ADfElIgfghQgLgNACANQhFg2gfgKQgSgDgbgUQgzgmgqhRQgohQgSgaQgOgPgIgLQgJgZgRgaQgig0gkgEIgRgPQgQgQABgDQgDgMABgFQABgJAXARQAQAMAaAKQATAIAMAQIAbAwQAKAQgCgfQgBgagIg0QgGgnADgCQAFgCAEALIALAoIAIAZIAMAZQADglAFgnQALhOALgJQAHgGgKBcQgMBwARAqQAEgZAGgJQANgTAKBNIAIAkQAMAoAVAdQASAXAEgYQACgLACABQAFAAAKAVQASAnAUANQAKAGAKADIAAgBIAWASQAWAUAFASQADAVAKAPIAMASQAEAFABgHQABgGAEAGQADAEAOAEQANADAGANQASAlASAOQARAPgKAcQgOgSgagWg");
	this.shape_160.setTransform(7,-1.6,0.115,0.115,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A1823D").s().p("AgNB8QgGi5gCgFQgHgaAFg0QAEgvALgnQAKgjAPAEQAQAEgPAlQgSAuADDdQACBvAGBmQgCADgCAAQgPAAgFiLg");
	this.shape_161.setTransform(1.2,5.6,0.115,0.115,0,0,180);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#7A6535").s().p("AnsEUQACgKgCgGQgDgFADgMQACgKAEAIQADAGABgXQABgZAEgBQACAAACAFIALAKQgEgDADgLQAFgUAkg5QAjg5AKguIAEgiQALg+ACALQAFAcADgBQAJgCAKgmQAJgjAEgnQADgfAHgUIAFgOQAIA3gXBiQgLAxgOAlQA5g5Anh8IAbhyQAVgUgZB0QgYBygOAYQgZAfgIAMQgOAVAjgSQAigRAihRQAJgWAZhLQAGgRgHAhQgFAegJAjQgGAaggA4IgnBDQgIARA3ALQAcAGAdACQA3AFgOADIgZACQg0AHhdgBIhUgDQg+AjCegCQBrgBBYgKIAzgIQAigGAfABQAgACAqgKQAVgFAPgGQAsAEBcgTQAugJAlgKQgMAGgyANQg+ARgsAEQgqADgQAJIgJAJQgFAHAvgBIAwgBIAngHIAuAEQAqADBAgNQAhgGAYgHQAogMgNAIQgNAJg4AVQg+AWg/AQQg/APgGACQgVAHhYAMIhUAKQgTABgIAJIgFAKQgfgTgUAJIgNANQglgVgOAKIgHAOQgRgHgPAHIgMAKQgHgGgKAEQgoAQgVgEIgOgIQgfgRgdAIIgYALQgKgMggAHQglAHgHgCIgUgEQgCAZgEgDQgEgCAAgTQAAgNgUAiQgPAYgCAAIAAgCg");
	this.shape_162.setTransform(-4.8,-1.4,0.115,0.115,0,0,180);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#7A6535").ss(1.8,1,2).p("AhTgIQgIACgIADQgQAEAFAEQAOALDQgO");
	this.shape_163.setTransform(-1.5,-0.3,0.115,0.115,0,0,180);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#836C38").ss(1,0,0,4).p("AhagIQgHACgGADQgMAEAHADQAWAKDKgO");
	this.shape_164.setTransform(-1.8,-0.3,0.115,0.115,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#8C743A").ss(1,0,0,4).p("AhjgHQgGACgEADQgJADAKADQAeAJDFgO");
	this.shape_165.setTransform(-2.1,-0.3,0.115,0.115,0,0,180);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#95793C").ss(1,0,0,4).p("AhsgFQgFABgCADQgGADAMACQAmAHDCgP");
	this.shape_166.setTransform(-2.4,-0.3,0.115,0.115,0,0,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#9F803E").ss(1,0,0,4).p("Ah0gFIgEAEQgCADAOACQAuAGC8gP");
	this.shape_167.setTransform(-2.7,-0.3,0.115,0.115,0,0,180);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#A78841").ss(1,0,0,4).p("Ah7gCIgBACQABADARACQA2AFC3gP");
	this.shape_168.setTransform(-2.9,-0.3,0.115,0.115,0,0,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#B39144").ss(1.8,1,2).p("AiEAAIABACQAFAEATABQA+AECygS");
	this.shape_169.setTransform(-3.2,-0.4,0.115,0.115,0,0,180);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#7A6535").ss(1.1,1,0,2.4).p("AGOBFQgzAcjPAlQjXAmh5gCQhpgBgOgXQgEgHAFgJQADgEAEgDQA0hHAVg1IALgpQgrCHg8AQQgTAFgDgIIABgJQA0g9AahsIAJg0IAHgtAkEh8QgNA+gfBDQgiBMgaAaQgQARgFgFIgBgJQAXg4AMhIIAHg9QgVCSgSAGQgGABgFgMIgDgN");
	this.shape_170.setTransform(-5.2,-2.4,0.115,0.115,0,0,180);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#826C38").ss(1,0,0,4).p("AkLiZQgMBIgiBTQgjBUgYAYQgRARgFgFIgBgIQAXg4ALhMIAGhDQgSCRgTAMQgGADgGgKIgEgLAGbBDQg1AejZAnQjeAnh8gBQhogCgOgXQgFgHAGgJQACgEAEgDQA1hGAVg9IAKgwQgVBNgdAsQgaAlgbAGQgTAGgDgIIABgJQA1g+AZhxIALhOIAEgZ");
	this.shape_171.setTransform(-5.3,-2.5,0.115,0.115,0,0,180);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#866F39").ss(1,0,0,4).p("AkSi4IgCASQgMBOgjBaQgjBdgXAVQgRARgEgEIgBgIQAYg4AJhSIAFhIQgSCPgUATQgGAGgFgHIgEgJAGlBCQg0AhjjApQjlAqh9gBQhqgBgNgYQgFgIAGgIQADgFADgDQA0hFAVhEIALg3QgUBPgeAxQgbAsgaAHQgTAFgDgJIABgJQA0g8AYh5IAMhb");
	this.shape_172.setTransform(-5.5,-2.7,0.115,0.115,0,0,180);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#8E743A").ss(1,0,0,4).p("AGwBMQgzAjjvArQjrAriBgBQhpgBgOgYQgEgHAFgJQADgFAEgDQA0hFAUhMIALg9QgSBRgeA3QgcAygaAIQgTAFgDgIIABgJQA0g/AXh+IAMhyQgLBWglBpQgiBkgWAWQgRAQgFgFIgBgIQAXg4AIhXIADhMQgPCNgUAaQgGAIgGgEIgEgG");
	this.shape_173.setTransform(-5.6,-3,0.115,0.115,0,0,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#95793C").ss(1,0,0,4).p("AkFg+QgOBQggA8QgdA4gaAGQgTAFgDgIIABgJQA0g9AWiFIALh5QgLBZgkBuQgiBqgWAUQgQARgEgEIgBgIQAWg4AHhcIAChRQgNCLgUAgQgJARgIgMAG8BNQg2Alj5AtQjzAtiCgBQhpgCgOgYQgEgHAFgJQADgEAEgDQA0hFAUhTIAKhAAkEhCIgBAE");
	this.shape_174.setTransform(-5.8,-3.1,0.115,0.115,0,0,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#9B7E3E").ss(1,0,0,4).p("AkPg/QgNBNgeBAQgeA/gaAHQgUAEgDgIIABgJQA0g9AViLIALiAQgMBagiBzQgiBxgUAUQgRARgEgFIgBgIQAXg4AFhgIABhXQgMCKgUAoQgKAUgIgHAHGBOQg1AnkDAwQj6AtiDgBQhqgBgOgYQgFgHAGgJQACgEAEgDQA0hGAVhZIAIhBAkOhJIgBAK");
	this.shape_175.setTransform(-5.9,-3.3,0.115,0.115,0,0,180);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#A48540").ss(1,0,0,4).p("Akag9QgLBKgeBBQgfBFgaAHQgTAFgDgIIABgJQA0g+AUiRIAJiGQgLBcgiB3QghB4gUAUQgRAQgEgFIgBgIQAXg4AFhlIgBhbQgKCIgVAuQgKAXgJgEAHSBOQg4ApkMAyQkCAviGgBQhpgBgOgYQgEgHAFgJQADgFAEgDQA0hFAUhhIAHg9AkYhRIgCAU");
	this.shape_176.setTransform(-6.1,-3.4,0.115,0.115,0,0,180);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#AA8941").ss(1,0,0,4).p("Akkg4QgKBFgcBBQggBLgbAHQgUAFgDgJIABgJQA1g9ASiXIAIiMQgLBdggB8QghB+gTATQgRARgEgFIgBgIQAXg4ADhqIgBhfQgJCGgVA1QgLAbgJgBAHcBPQg4ArkWAzQkJAxiIgBQhpAAgOgYQgEgIAFgJQADgEADgDQA1hGAUhnIAGg4IADgh");
	this.shape_177.setTransform(-6.2,-3.6,0.115,0.115,0,0,180);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#B39144").ss(1.1,1,2).p("Akxg0QgJA8gZA8QghBRgbAHQgTAEgDgIIABgJQA0g9ARidIAHiSQgMBigeB9QggCFgTASQgRARgEgFIgBgIQAYg4ABhvIgDhlQgGCFgWA8QgLAegKAEAHnBFQg6AtkgA2QkRAyiIgBQhqgBgOgYQgEgHAFgJQADgEAEgDQA0hGAThuIAEgpIAFg4");
	this.shape_178.setTransform(-6.4,-3.6,0.115,0.115,0,0,180);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(0.4,0,0,2.4).p("AgwAhQAIgIANgLQAZgTAWgLIgGAAIAHgEQAIgEAHgBQAKgDgKAAIARgE");
	this.shape_179.setTransform(4.7,22.2,0.115,0.115,0,0,180);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#2C2316").s().p("Ag0AlIABgHQACgcAzgXQAZgMAagGQgfARgiAfQgRAQgMANIgHACQgDAAgBgDg");
	this.shape_180.setTransform(5.1,22.5,0.115,0.115,0,0,180);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(0.4,0,0,2.4).p("AgvAkQAIgJAMgLQAYgWAXgLIgGAAQACgCADgDQAIgEAHgBQAKgDgMAAIATgG");
	this.shape_181.setTransform(3.5,23.4,0.115,0.115,0,0,180);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#2C2316").s().p("AgxApIABgHQACgcAwgbIAwgWQgfARgfAjQgQATgKAPIgGABQgEAAgBgDg");
	this.shape_182.setTransform(3.9,23.8,0.115,0.115,0,0,180);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#A1823D").s().p("AgYAPQgKgKAAgBQAAgBAUgBQARgBASgPIAOgPQAAAagKAQQgIAMgKAEIgHABQgMAAgMgPg");
	this.shape_183.setTransform(1.1,21.7,0.115,0.115,0,0,180);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A1823D").s().p("AgKAbQgFgCAAgGQAAgFAFgGQADgCgMgQQgLgQANgDIADAHQAFAJAPAKQARAIACAHQACAGgJgCQgJgEgEABQgFAAAEAIQAEAJgHAAQgDAAgIgDg");
	this.shape_184.setTransform(3.5,20.8,0.115,0.115,0,0,180);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#A1823D").s().p("AgFAnQgIgDAAgLIgCgUQABgNALgGQAKgIAJgRQgHAVgDAmQgDAUgFAAIgDgBg");
	this.shape_185.setTransform(1,13.6,0.115,0.115,0,0,180);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#A1823D").s().p("AAHBMIgVhRQgNhVgKgFIAOAFQASAKAUAUQAVAXACAGQAAAFgGALQgJARAEAqQAEAXgHAUQgCAJgEAAQgEAAgHgUg");
	this.shape_186.setTransform(2.2,14.3,0.115,0.115,0,0,180);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#B59644").ss(1,0,0,4).p("AAdhTQgRArgHACQgEABgBAHQgDAKgBACQgLARgJAkQgMAwAagCIANgEQAPgDAKAB");
	this.shape_187.setTransform(23,-21.6,0.115,0.115,0,0,180);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#B89B45").ss(1,0,0,4).p("AAhhVQgYAugGADQgDACgCAHQgCAJgCACQgOAVgIAfQgOAvAgAAIAPgEQATgEAJAB");
	this.shape_188.setTransform(23.1,-21.6,0.115,0.115,0,0,180);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#BAA046").ss(1,0,0,4).p("AAnhXIglA0QgCADgDAHQgCAHgCADQgRAagIAZQgPAvAlACIASgFQAVgFAJAA");
	this.shape_189.setTransform(23.2,-21.6,0.115,0.115,0,0,180);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#BDA547").ss(1,0,0,4).p("AAqhYQgKAMgKANQgVAZgBAEQgEAIgGAMQgCAEgZAwQgQAvArADQAKgDAKgDQAWgGAJAB");
	this.shape_190.setTransform(23.3,-21.6,0.115,0.115,0,0,180);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#8F7436").s().p("AAGAOIgRgIIALADQAMACAFgBQAEgBgCgJQgDgKgIgJQgFgGgOACQgRABgEgEQgGgEAYgBIAYABIAHAJQAHALAAAIQAAAMAKAWQgJgJgTgJg");
	this.shape_191.setTransform(19.4,-19.9,0.115,0.115,0,0,180);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#866C33").s().p("ABcA7QgKgMgigWQghgYgggIQg6gOhPATIAUgWIACgQQAAgKAIgCQAGgBARgJQASgHAPACQAPACgHABIgVAEQgPAFgLAIQgNAKACAHQACAFgHAFQgEAEAEAAQAFABBAgDQBIAHA8AvIAaAQQAfAQAUABQgxgCgOgIg");
	this.shape_192.setTransform(19.7,-19.5,0.115,0.115,0,0,180);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("A394GQAAgCABgCQAHgrAAgDQAAgGAIA2QADAbAEAcIAFhvIAIAuQAHAxAAAQQAAAPAJgYQAIgTgCAIQgBANANAGQAOAGABAFIAJCDIALhDIAIAMQAIAPACATQABARAPAsQAQAuABAHQABAJAQAwQAPAvACANQABAMAFAGQAFAGACAJQABAFACBCQADA6AEAIQADAGAEgNQAEgMAGAMQACAHAZBzQAYByAPAgQAcA3AXAgQAnA4BAA8IAgAnQAgAtAGAXIAGgvIALADQAPAIAOAXQAMASAfAQQAcAOAGAPIAbAvIAAgbIAdANQAhAVASAnQARAkASAWQATAXAGANQAJARAfA/QAjA/AuAtIBAAfQBFAlARAdQAlBAAjBaQA1CFACBeQAAAhAfCGQAdB/gDArQgKBpAABEQgBB3AYAuIAlCYIAUDxIgHA7QgJBDgLAsQgLAuAHAfQACAJAWAwIgSAcQgWAfgRAOQgTAEgXAHQgtAQgUAUIgnAoQglAqANAIIAAAEQAGAEAfACIgBAJQABAJANAGQAqASCOgaIBGgOQBIgUAOggQAJAAACgMQAFgYggg9QgHgOgGgSQgNgjAGgQQATgygah8QgFhxgBh8QgEj5ARg6QAPgjAHg8QAMh4gsh6QgGhZgDhrQgGjWAShYQARhQAAgYQAAgaAGgQQAGgTAKAjIABhNIAhAAQAGAAAcgIQASgFAKAKQAGAGAXgMQAagNAZAPQAZAQAdgIQAogKANACIAIgKQANgIAZAIIACgOQAKgJAqAUIANgLQAQgKAVALQAQAIAEgHQAIgMAZgCQFfgfGKjWIAageIgNArIA1hTIgDAoIAog2IAOgFQAPgCAGAOQAKAXAFBGIARgGIALB1QAPB6AWAdIAFgXIACAOQAFAUAQAZQAyBRCKBuIBWBlQBYBrANAeQATArARBBQAVBOAAAyQAAAugiCYQgSBRgcB2QgUBagpCAQg2CkggAhIgaAvQgZA0ADAcIgJAXQgMAYgOAGQgmAQg5AiQhOAwgPAgIABAWQAFAXAWACIgEAJQgCAJAPAHQAvAXC+gPQAXgGAXgOQAtgcgEgjQgIgcgHgeQgMg8AKgGQAagQAUgcQAhgvgCg+QAgh3Ajh7QBGj4ARgZQALgRBEi9QBBi4AQgUQAYgdgChLQgDhNgdgvQg6hbhEjIQhckRAYirQAfjigWilQgbjGhphlQgggyg6g1Qh1hsiFgVQhYgdhigjQjEhGgyggQgkgXg2gkQgkgYgOgHQgWgLgKgFQgQgIgSgQQgHABgIgBQgQgCgGgMQgEgIgIAFQgJAFgOgSQgLgRgLAKQgKAJgKgWQgBAOgEAGQgIAKgTgsQgEALgGAGQgMAMgFgZQAAgJgDgFQgFgIgOAWQgIAGgKACQgUAGgMgSQgGgEgHgGQgIgIgBgIQAAgEABgDAIQ4TIgDAeQgEAAgEgCQgHgEgBgKQgBgJgDgNIgDgMIgMAoIgNgKQgCAagIAEQgFACgJgNIgIgMIgDAQIgNgNQAAANgJAEQgDACgzAQQg1ASgQAIQgTAKgzAgQgmAYgdAUQgpAchNAnQhnA2gtADQgHgBgIABQgRABgKAKQgNALgPACQgQADAGgLQAFgNgUAIQgVAcgMACQhAAFgXAPQiABFhBA9QgVAVgWAXQgrAvAAAJIAPgFQgCAIgFAJQgKASgQAIQgQAJgHAKQgHAMgFAIQgGAJgOACIgMAAQgKADgLADQgVAHgEAGQgCAEgagDQgdgCgMAHQgHgGgKgGQgUgLgLADQgFgIgIgGQgPgOgOAFQgagogKABQgFghgMgBQgJgBgFgQQgEgOACgIQADgIgVgqQgFgTgDgOQgGgagGgJQgFgIgGgXQgGgVgGgGQgIgJgVhTQgXhUADgMIAMAHQgDg4gLgHIAIgJQgIgLgHgOQgPgbAEgJIANAAQgNgagLgRIAXgHQgIgDgKgNQgUgYgMguIARAVQgKhBgLgQQgOgRgDgGQgHgIAMAKQARAOAKAQQgDgPgGgOQgKgcgJgDIAZAHQgcgegJgPQgEgIARgCQAWgBAFgEQgfgPgJgPQgEgJAKADQAFABAGADQgUgSgBgGQgBgFAMgBQAGAAAGAAIAIgIQAJgGAEAGQAFAFgCgIQgIgKgWAFIADgKQAEgJAJAFQAFADACgBQABgCgDgDQgKgHgSAJQgIgIgGgIQgMgPAJACQAZAGAGAEQgagogOgDQgEgBAggxQAng9ADguQgBgEgDgDQgGgHgKAEQgMAFgaAEQgcAEgOgDQgMAAgOADQgdAEgJAKIAAAAQgYgHgggGQhAgKglAKQgmAKgVABIgOgBIgSAJQgOgGgVAAQgqgBghAcQg1AFhAAIQh/APg0AOQguALgbAOQgbAPgXAYQgTAWgFAKQgEAGgDAJQgEAHgYAsQgWAsAKAPQALATAJAHQATAPAbgLIAHAQQAKAOARgHIAHAOQAHAOAGACQACABAHAPQAIARAJAIQAeAbA2gwIAogKIAzgDQA7ABAlAWQAfATAYAWQAQAOALACIAOAwQAKgIAAgMIARAqQAAgOABgNQACgaAGADQAGAFAEAZQACANACAWQAFANAFhEQAKAtACAXQABAQgDAH");
	this.shape_193.setTransform(-0.2,0.2,0.115,0.115,0,0,180);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#B39144").s().p("EgF+AhKQgNgGgBgJIABgJQgfgCgGgEIAAgEQgNgIAlgqIAngoQAUgUAtgQQAXgHATgEQARgOAWgfIASgcQgWgwgCgJQgHgfALguQALgsAJhDIAHg7IgUjxIgliYQgYguABh3QAAhEAKhpQADgrgdh/QgfiGAAghQgCheg1iFQgjhaglhAQgRgdhFglIhAgfQgugtgjg/IgohQQgGgNgTgXQgSgWgRgkQgSgnghgVIgdgNIAAAbIgbgvQgGgPgcgOQgfgQgMgSQgOgXgPgIIgLgDIgGAvQgGgXgggtIgggnQhAg8gng4QgXgggcg3QgPgggYhyQgZhzgCgHQgGgMgEAMQgEANgDgGQgEgIgDg6QgChCgBgFQgCgJgFgGQgFgGgBgMQgCgNgPgvQgQgwgBgJQgBgHgQguQgPgsgBgRQgCgTgIgPIgIgMIgLBDIgJiDQgBgFgOgGQgNgGABgNQACgIgIATQgJAYAAgPQAAgQgHgxIgIguIgFBvIgHg3QgIg2AAAGIgHAuIgBAEQgCgXgKgtQgFBEgFgNIgEgjQgEgZgGgFQgGgDgCAaQgBANAAAOIgRgqQAAAMgKAIIgOgwQgLgCgQgOQgYgWgfgTQglgWg7gBIgzADIgoAKQg2AwgegbQgJgIgIgRQgHgPgCgBQgGgCgHgOIgHgOQgRAHgKgOIgHgQQgbALgTgPQgJgHgLgTQgKgPAWgsIAcgzIAHgPQAFgKATgWQAXgYAbgPQAbgOAugLQA0gOB/gPIB1gNQAhgcAqABQAVAAAOAGIASgJIAOABQAVgBAmgKQAlgKBAAKQAgAGAYAHIAAAAQAJgKAdgEQAOgDAMAAQAOADAcgEQAagEAMgFQAKgEAGAHQADADABAEQgDAugnA9QggAxAEABQAOADAaAoQgGgEgZgGQgJgCAMAPIAOAQQASgJAKAHQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQgCABgFgDQgJgFgEAJIgDAKQAWgFAIAKQACAIgFgFQgEgGgJAGIgIAIIgMAAQgMABABAFQABAGAUASIgLgEQgKgDAEAJQAJAPAfAPQgFAEgWABQgRACAEAIQAJAPAcAeIgZgHQAJADAKAcQAGAOADAPQgKgQgRgOQgMgKAHAIIARAXQALAQAKBBIgRgVQAMAuAUAYQAKANAIADIgXAHQALARANAaIgNAAQgEAJAPAbQAHAOAIALIgIAJQALAHADA4IgMgHQgDAMAXBUQAVBTAIAJQAGAGAGAVQAGAXAFAIQAGAJAGAaIAIAhQAVAqgDAIQgCAIAEAOQAFAQAJABQAMABAFAhQAKgBAaAoQAOgFAPAOQAIAGAFAIQALgDAUALQAKAGAHAGQAMgHAdACQAaADACgEQAEgGAVgHIAVgGIAMAAQAOgCAGgJIAMgUQAHgKAQgJQAQgIAKgSQAFgJACgIIgPAFQAAgJArgvIArgsQBBg9CAhFQAXgPBAgFQAMgCAVgcQAUgIgFANQgGALAQgDQAPgCANgLQAKgKARgBQAIgBAHABQAtgDBng2QBNgnApgcQAdgUAmgYQAzggATgKQAQgIA1gSQAzgQADgCQAJgEAAgNIANANIADgQIAIAMQAJANAFgCQAIgEACgaIANAKIAMgoIADAMQADANABAJQABAKAHAEQAEACAEAAIADgeQABAIAIAIQAHAGAGAEQAMASAUgGQAKgCAIgGQAOgWAFAIQADAFAAAJQAFAZAMgMQAGgGAEgLQATAsAIgKQAEgGABgOQAKAWAKgJQALgKALARQAOASAJgFQAIgFAEAIQAGAMAQACQAIABAHgBQASAQAQAIIAgAQQAOAHAkAYIBaA7QAyAgDEBGQBiAjBYAdQCFAVB1BsQA6A1AgAyQBpBlAbDGQAWClgfDiQgYCrBcERQBEDIA6BbQAdAvADBNQACBLgYAdQgQAUhBC4QhEC9gLARQgRAZhGD4QgjB7ggB3QACA+ghAvQgUAcgaAQQgKAGAMA8QAHAeAIAcQAEAjgtAcQgXAOgXAGQi+APgvgXQgPgHACgJIAEgJQgWgCgFgXIgBgWQAPggBOgwQA5giAmgQQAOgGAMgYIAJgXQgDgcAZg0IAagvQAgghA2ikQApiAAUhaIAujHQAiiYAAguQAAgygVhOQgRhBgTgrQgNgehYhrIhWhlQiKhugyhRQgQgZgFgUIgCgOIgFAXQgWgdgPh6IgLh1IgRAGQgFhGgKgXQgGgOgPACIgOAFIgoA2IADgoIg1BTIANgrIgaAeQmKDWlfAfQgZACgIAMQgEAHgQgIQgVgLgQAKIgNALQgqgUgKAJIgCAOQgZgIgNAIIgIAKQgNgCgoAKQgdAIgZgQQgZgPgaANQgXAMgGgGQgKgKgSAFQgcAIgGAAIghAAIgBBNQgKgjgGATQgGAQAAAaQAAAYgRBQQgSBYAGDWQADBrAGBZQAsB6gMB4QgHA8gPAjQgRA6AED5QABB8AFBxQAaB8gTAyQgGAQANAjQAGASAHAOQAgA9gFAYQgCAMgJAAQgOAghIAUIhGAOQhTAPgxAAQgiAAgSgHg");
	this.shape_194.setTransform(-0.2,0.2,0.115,0.115,0,0,180);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A1823D").s().p("AgHAiIgPgzQgCgFgLgKQgDgDALgMQANgMAKgPIAGgNQA3AyggBMQgPAlgRAMQAIgOgIgog");
	this.shape_195.setTransform(2.4,21.5,0.115,0.115,0,0,180);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#8F7436").s().p("ACtNJQgPgKgLhWQgIg/AAgcQghkygHgpIgNhYQgKhBgNgmQgPgpAAhTQgBhKAJgpQAGgdgfirIgpjdQgIgug4hRIhFhdQgNgRgPggIgMgcQDegOBIIbQAYCvAEDQQADCcgGAsQgHA4AbEgQALBhAPBhQAFAmgJAAIgFgCg");
	this.shape_196.setTransform(4.2,10.2,0.115,0.115,0,0,180);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AjgvrIBiE1QBhFGAABXQAABHgCBaQACA/AaAqQAYAoABBEQABAiAAAnQAIAZAIC5QAJDKgSAwQgUA1AAAsQAAApAQAUIgdAyQg4AegeAFQgXAGgeAcQgfAdAEAPQACAMAMAFQAGADAFAAIAEAQQAJAQAXABQAFAABCAAQAhAAAOAEQALADArgTQAygWAogfQByhbhBhhQhNh0ADr8QABjvAJkUIAIjjIlyiAg");
	this.shape_197.setTransform(4,11.8,0.115,0.115,0,0,180);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B39144").s().p("AAJPsQgOgEghAAIhHAAQgXgBgJgQIgEgQQgFAAgGgDQgMgFgCgMQgEgPAfgdQAegcAXgGQAegFA4geIAdgyQgQgUAAgpQAAgsAUg1QASgwgJjKQgIi5gIgZIgBhJQgBhEgYgoQgagqgCg/QAChaAAhHQAAhXhhlGIhik1IABAAIFyCAIgIDjQgJEUgBDvQgDL8BNB0QBBBhhyBbQgoAfgyAWQglAQgOAAIgDAAg");
	this.shape_198.setTransform(4,11.8,0.115,0.115,0,0,180);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#403227").ss(3.5,1,0,2.4).p("AjdmXIAFAyQAIA/APA7QAuC9BeBUQBrBiBNBkQBJBggFAdQgFAXAOAPQAGAHAIAC");
	this.shape_199.setTransform(-17.9,1,0.115,0.115,0,0,180);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#473829").ss(3.2,0,0,4).p("AjVmkIAEAwQAHA7ANA4QAsC1BiBZQBsBkBMBjQBJBfgFAdQgEAXAHAaQAEANAEAI");
	this.shape_200.setTransform(-17.8,1.6,0.115,0.115,0,0,180);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#4D3D2B").ss(3,0,0,4).p("AjRmhIADAtQAGA3ANA2QAqCsBlBcQBsBlBNBjQBKBggGAbQgHAlAGA4");
	this.shape_201.setTransform(-17.6,2,0.115,0.115,0,0,180);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#54432C").ss(2.7,0,0,4).p("AjRmmIACAqQAFAzANAzQApCkBoBjQBsBlBNBiQBJBfgEAcQgHAlgHBP");
	this.shape_202.setTransform(-17.5,2.4,0.115,0.115,0,0,180);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#5B482E").ss(2.4,0,0,4).p("AjRmrIACAmQAEAwAMAxQAoCbBsBmQBsBnBMBgQBKBggGAcIgZCL");
	this.shape_203.setTransform(-17.4,2.9,0.115,0.115,0,0,180);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#624F30").ss(2.1,0,0,4).p("AjRmwIABAjQADAtAMAuQAmCTBvBqQBsBpBLBgQBKBegEAdQgHAjgfB9");
	this.shape_204.setTransform(-17.4,3.3,0.115,0.115,0,0,180);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#695430").ss(1.8,1,0,2.4).p("AjQm0IAAAhQACAoALArQAkCLBzBvQBsBoBLBgQBLBggFAbQgGAkgsCU");
	this.shape_205.setTransform(-17.3,3.8,0.115,0.115,0,0,180);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#695430").s().p("AAnJYIAShNQAFgQAojRQgChkgKhJQgEgcgOhJQgIgkhZhtIhYhnQhIgjgshRIgkhWQgHgOABgpQABgrALgJQALgIAOhEIAMhDQAPguAYAOQAMAHAJARQGeKnAOAkQAKAWgIAaQgEANgGAIQgSAEgdA+QgOAfgLAeQgDARgnBlQgmBmgRAlQgHARgkBrIgiBoIAbhwg");
	this.shape_206.setTransform(-17.5,5.2,0.115,0.115,0,0,180);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("AiDwHIgKBEQgNBLgRAiQgSAjAZBdQASBDAcBAQAGALBYCBQBNBxAPA5QAeBqAACeQAAAlhNEiQhOEqgYAgQgmA2gUAiQghA6AEAeIgPAeQgSAegNAEQgEACgVADQgNACgMALQgmAdgdAcQgzAwAIAPQAIAOAPAEQAHABAGgBIgHAIQgEAJAIAGQAbAUCWgQQCfgQAFgJQACgEgNgPQgRgVgGgRQgJgSgGgVQgMgqARgRQAcgaAQgfQAXgrgFgvQAoiUAvicQBck4AgglQAXhHAchIQA2iTATgKQATgLADgfQABgPgDgoQgCgQhHiLQhQidhRiHQjrmPgjCEg");
	this.shape_207.setTransform(-16.3,9.1,0.115,0.115,0,0,180);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#866C33").s().p("AlVQfQgIgGAEgJIAHgIQgGABgHgBQgPgEgIgOQgIgPAzgwQAdgcAmgdQAMgLANgCIAZgFQANgEASgeIAPgeQgEgeAhg6QAUgiAmg2QAYggBOkqQBNkiAAglQAAiegehqQgPg5hNhxQhYiBgGgLQgchAgShDQgZhdASgjQARgiANhLIAKhEIAAgBQAjiEDrGPQBRCHBQCdQBHCLACAQQADAogBAPQgDAfgTALQgTAKg2CTQgcBIgXBHQggAlhcE4QgvCcgoCUQAFAvgXArQgQAfgcAaQgRARAMAqQAGAVAJASQAGARARAVQANAPgCAEQgFAJifAQQhBAHgqAAQg2AAgQgLg");
	this.shape_208.setTransform(-16.3,9.1,0.115,0.115,0,0,180);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("Ah/oqIA7BSQBABiAUBNQAaBiAsBfQAXAwARBRIgihPIADBLQABBWgHAwQgQB8AJAjQAHAYAKA4IgUgrIgLBIQgIBQAMApQAIAcgGgPQgFgOgJggQgchiAAhLQAAg9gKhAQgIgwAFgXQAHgdACgeIABgZIgXA5QAKgvAAhLQAAgygOhhQgJhEgKgxQgEgagghJQgihRgQgDQgPgFgGgwg");
	this.shape_209.setTransform(-23.1,-2.1,0.115,0.115,0,0,180,0,0.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(0.4,1,0,2.4).p("Ah/oqIA7BSQBABiAUBNQAaBiAsBfQAXAwARBRIgihPIADBLQABBWgHAwQgQB8AJAjQAHAYAKA4IgUgrIgLBIQgIBQAMApQAIAcgGgPQgFgOgJggQgchiAAhLQAAg9gKhAQgIgwAFgXQAHgdACgeIABgZIgXA5QAKgvAAhLQAAgygOhhQgJhEgKgxQgEgagghJQgihRgQgDQgPgFgGgwg");
	this.shape_210.setTransform(-23.2,-2.2,0.115,0.115,0,0,180);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#5C4626").s().p("ABLIqQgFgOgJggQgchjAAhKQAAg+gKg/QgIgwAFgXQAHgeACgeIABgYIgXA5QAKgvAAhLQAAgygOhhQgJhEgKgyQgEgZgghKQgihQgQgEQgPgEgGgwIgDgwIA7BTQBABhAUBNQAaBiAsBfQAXAxARBRIgihPIADBLQABBWgHAwQgQB7AJAjQAHAZAKA4IgUgrIgLBIQgIBQAMApIAFASIgDgFg");
	this.shape_211.setTransform(-23.2,-2.1,0.115,0.115,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.camel, new cjs.Rectangle(-25.6,-25.4,50.9,51.1), null);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D38002").ss(1,0,0,4,true).p("AAkhjQANgMATABQATABAGASIgIAEQgsAMgjAsQgNARgoBBIgVAXQgMAOgIAKQAqiBBShEg");
	this.shape.setTransform(8.9,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D38002").s().p("AAihcQANgNASACQAUABAGARIgIAEQgsANgjArQgNASgoBBIgVAXQgNANgHAKQAqiBBShDg");
	this.shape_1.setTransform(9.2,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(-0.9,-0.9,20.2,22.8), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E2AD1B").ss(1,0,0,4,true).p("AgXrWIATgRQgIBVAAB+QAABHABCMQgBA3ACBuQACBtgBA2QAJBoAECOQABBSACCkQAAAJAMBuQAIBHgOAvQgIhLgFh8QgFiXgEgvQgCgygBhjQACg8gJheQgCh4AAkFQABj4gDiFg");
	this.shape.setTransform(2.4,74.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2AD1B").s().p("AABIdQgFiXgEgvQgCgygBhjQACg8gJheQgCh4AAkFQABj4gDiFIATgRQgIBVAAB+IABDTQgBA3ACBuQACBtgBA2QAJBoAECOIADD2QAAAJAMBuQAIBHgOAvQgIhLgFh8g");
	this.shape_1.setTransform(2.3,74.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(-1,-0.9,6.6,150), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#825500").ss(1,0,0,4,true).p("AgDhWQAJBegCA7QgKhLADhOg");
	this.shape.setTransform(0.5,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825500").s().p("AgChMQAIBegCA7QgKhNAEhMg");
	this.shape_1.setTransform(0.5,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(-0.9,-1,2.9,17.4), null);


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#581E06").s().p("AmHFvQgUgmgZhEQhCizAGhjQgGgDgGACQgMAFgDAaQgCARgBgXQgCgXABgfQAFhdAZAAQAZAAAShIIAMhHQAghCA4gRQATgGAbgCIApgCIBugLQB4gIAxATQAvARA9gDQBVgFAHAAQAYADAngKQAegIABAGIAdgGIg3BMIAFAOQANAOAsAAQAsAAA+gPQAfgHAXgIIAAARQgDATgKAJQgSAPggAhQglAnAAAGQAAAGAzgGIBFgKQAdgChbBJQhaBHgmgEQgfgDAQATQAIAKAOAKIAhAMQAFAagogHQgpgGAAABQACgBgaB9QgKAvgEAhIAEBEQgMgMAIg4QgHhegKgoQgWhag4AIQAEgIg+gPQhDgShIgGQjQgUgQBUQgdgDgfAhQglAnAVAyQgugCgNAXQgbAyAzCnQAAAJgDAAQgGAAgNgYg");
	this.shape.setTransform(10.7,-119.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9A890").s().p("AhOBVQgTgbgMgcQgKgbAFgGIgIiLIDzBIIACBTQg4Bhg5AcQgIAFgIAAQggAAgog6g");
	this.shape_1.setTransform(0.3,-45.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D36851").ss(0.5).p("AAChpQAFABAYBKQAZBKgCAQQgFAlgqAHQgoAHgVgh");
	this.shape_2.setTransform(13.2,-84.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D0F14").s().p("AgHAdQgMgDgGgLQgGgLADgLQADgMALgGQALgGALADQAMADAGALQAGALgDALQgDAMgLAGQgHAEgIAAIgHgBg");
	this.shape_3.setTransform(26.9,-93.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#141D2A").s().p("AgDAhQgNgBgIgLQgJgLACgNQABgNALgJQALgJAMACQANABAJALQAIALgCAMQgBAOgLAJQgJAHgLAAIgDAAg");
	this.shape_4.setTransform(-7.9,-92.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D55043").s().p("AhnACQgLgGgEgEQgHgHgFgOQCdBUBmhSQAFAMgGAIIgNAJQhFAaguABIgDABQgxAAgzgcg");
	this.shape_5.setTransform(7.3,-67.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D1505").s().p("ABLAfQgggPgYgEQgdgFgbALQgfANgMgJQgLgJAGgfQACgGAHgBIAMgEQAigIAaAJIAuAVQAaAMAQAQQAEADAAAEQAAABAAABQgBABAAAAQAAABAAAAQAAAAgBAAQgCACgDAAQgDAAgDgDg");
	this.shape_6.setTransform(28.3,-105.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#421707").s().p("Ah2AiIgBgQQAngTAYgJQAkgOAegFQAxgKApAKQAQAJADAPQACAJgCAUIgbAAQg8gEgjABQg1ACgqAMIgUgBg");
	this.shape_7.setTransform(-11.2,-103.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9A890").s().p("ABlGGQiDgChdgzQh5hDgqiTQgmAIgggfQgcgbgNguQgOgsAIgjQAIgnAegFQApB9AeAoQAPAUAFgFQhKibBMiEQBDh2CSgvQCSgvB3A8QCHBDAYCwQA5gJgVBKQgOAxgZAlQgGBqhLB0QhUCBheAAIgCAAg");
	this.shape_8.setTransform(1.4,-89.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A4A6AB").s().p("AiUBAQgOgKgagZQgZgagCgFQADAHBHgCQBGgCBRgKQDEgZAFgjIAFAfQAAAogmAPQgxATh/AVQhQANgmAAQgZAAgHgGg");
	this.shape_9.setTransform(44,139.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDC294").s().p("Ah3CdQgIgLgKgMQgdgkg+hBIg5g5QAEgpAJgoQAShQAZAGQAbAGAdAVQAZASAEAKQACAEAwggQA1giATACQAQACCGB2QCEBxAKgEQAIgEAFANQAFAPgGASQgQA1hVARQiDAchLAAQhMAAgSgcg");
	this.shape_10.setTransform(36.9,126.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A4A6AB").s().p("AAFA9QhMgEgaAFIhygVQhIgNgLgoQgDgMADgKQAEgLgBAMQACAJB+AVQCCAUAggJQAuAIBpglQBtgoAJAAQAVABAGANQAGAOgOAQQgaAdg0AVQhHAdhhAAIgkgBg");
	this.shape_11.setTransform(-7.9,141.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EDC294").s().p("AkXCSQgahSAziXQAUg7ASgWQAVgYAGAmQAXBCBbgnIBCgeQAggMALAOQAXAcBDA5QBEA6A0AiQA2AkgLAnQgJAgg0AbQgqAWjMAAQjWAAgtggg");
	this.shape_12.setTransform(-8.5,127.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9A890").s().p("AgqFnQgBgQgCgLQgDgUgPgUQglgzAWg4QAUgzAtgLIiWlZIgUhxIArgSQAygTAlAAQAkA4A4DcQA3DQACACQAVARAlA7QAuBKgZAYQgRAUgbAVQg3ApgyADIgUAAQgtAAgDgOg");
	this.shape_13.setTransform(46.3,19.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9A890").s().p("AihFPQg8hNAtg6QAcgfAMgRQAXgeACgfQAFhoA/iyIA9idQAsg6BIAoQAkAUAbAgIjGHBIA0A5QAvA3ghgFQghgGARAuQAJAXAPAYQglAegvAPQgeAKgZAAQg6AAglgxg");
	this.shape_14.setTransform(-46.9,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#36637D").s().p("AlFFgQBah0AHlbIAAjYQAAhXANAIQBtAwB2APQCVATBjguQApgOARFLQAGBtACB3QABBpgCACQgzALgZAeQgJALgGACQgJAEgVgHQgTgTgPgJQgTgLgRACQADhRgHhkQgPjIgzhgQggg9gYBFQgQAwgUCOQgbDCgGAgQgUBsgYABQhPABgmAcQgTANgEAOQgogDgog1g");
	this.shape_15.setTransform(1.5,79.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FE304E").s().p("AAMG/QhEgPhPgaIg0gSIgok5QAHgEgKgiQgRg4gGg2QgJhMhUgKQgagEgeAEIgZAEQAzh2B/hGQAYgOA4gZQAhgOgBgHIAoglIAPAbQATAfAUAVQA/BEAwg/QAwg/gHgcQgBgFgDgEQB4BEBjBRQCDBqghAlQgsgLgRALQgnAYgPAEQgiCSABCbQABCeAlBOQgsA/h1AAQg8AAhPgRgABdnPIAHACIAFAFIgMgHg");
	this.shape_16.setTransform(-1.3,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C1615").s().p("AgEAAQgCgWgGgQIARADQgBAFAIAhQAGAYgUAMIgCgng");
	this.shape_17.setTransform(32.3,-96.6);

	this.instance = new lib.walking();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-5.3,1,1,0,0,0,66,153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-158.3,132.1,306);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F93F2E").ss(19).p("AAAFmIAArL");
	this.shape.setTransform(8.3,66.9);

	this.instance = new lib.Path_17();
	this.instance.parent = this;
	this.instance.setTransform(7.9,66.6,1,1,0,0,0,65.5,44);
	this.instance.shadow = new cjs.Shadow("rgba(117,115,115,0.71)",2,7,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F93F2E").ss(19).p("AAACIIABkO");
	this.shape_1.setTransform(-20.8,-48,1,1,-60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F93F2E").s().p("AgcAQQgGgFgBgHQgCgHAEgHQAGgMASAAIAfAAQAPAAAAAPQAAAOgPAAIgIAAQACAMgNADIgMABQgMAAgHgHg");
	this.shape_2.setTransform(-38.6,-66.1,1,1,-60);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F93F2E").s().p("AgOAAQAAgOAOAAQAOAAAAAOQAAAPgOAAQgOAAAAgPg");
	this.shape_3.setTransform(-30.5,-58.2,1,1,-60);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F93F2E").s().p("AgXAhQgpgegQgwQgFgOAPgDQAOgEAFANQAMAnAiAXQAgAYApABQAOAAAAAPQAAAPgOAAQgzgBgogeg");
	this.shape_4.setTransform(-43.4,-47.5,1,1,-60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F93F2E").s().p("Ag6AOQgOgBAAgOQAAgPAOABQA4AFA9gEQAOgBAAAPQAAAOgOABQgcABgaAAQggAAgfgCg");
	this.shape_5.setTransform(-36.8,-49,1,1,-60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F93F2E").s().p("AgFA1QgOgEACgPQAHghgBgnQgBgOAOAAQAPAAABAOQABApgIAnQgCALgJAAIgFAAg");
	this.shape_6.setTransform(-38.4,-55.3,1,1,-60);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F93F2E").s().p("AA7A1QgLgvgjgXQglgbgsARQgOAFgEgOQgEgPAOgFQA3gUAxAhQAuAfANA5QAEAOgPAEIgGABQgJAAgCgLg");
	this.shape_7.setTransform(-47.8,-52.6,1,1,-60);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F93F2E").s().p("AgUA7QgRAGgUgBQgOAAAAgPQAAgPAOAAQAjABAWgYQAVgYgHgjQgCgKAKgGQAJgHAIAJIAEAEIADgEQAKgKALALQALAKgLAKQgEAEAAASIABAYQgDATgKAOQgVAcgkACIgBAAQgJAAgEgJg");
	this.shape_8.setTransform(-30.9,-66.9,1,1,-60);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F93F2E").s().p("Ag8AlQgEgPAOgFIAwgSQAbgOAHgVQAEgNAPAEQAOADgEAOQgJAdghATQgMAGgxAUIgHABQgIAAgDgKg");
	this.shape_9.setTransform(-27.8,-67.5,1,1,-60);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F93F2E").s().p("AgfAwQACg5AkguQAJgLAKAKQALALgJALQgcAkgBAuQgBAOgPAAQgPAAABgOg");
	this.shape_10.setTransform(-34.9,-61.2,1,1,-60);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F93F2E").s().p("AgsAzQAAgPAOgBQAwgGgEhOQAAgPAPAAQAPAAAAAPQACAtgPAdQgTAjgqAFIgDAAQgLAAAAgOg");
	this.shape_11.setTransform(-29.1,-67.6,1,1,-60);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F93F2E").s().p("AgjBOIgFgHQgJgKAIgKQgDgsAJgdQAPgyAugJQAPgCAEAOQAEAPgPACQgjAHgJApQgFAYAGAvQABAJgKAFIgHABQgGAAgEgEg");
	this.shape_12.setTransform(-50.5,-47.2,1,1,-60);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F93F2E").s().p("AgbAkIAAgBQgGgCgDgGQgDgIADgHQANgcAbgQIAFgIQAJgMANAIQANAHgJAMIgEAHQAAADgEAEQgJAOgHAJIgIAKQACADAAAGQAAAPgNACIgDAAQgMAAgEgMg");
	this.shape_13.setTransform(-54.3,-47.6,1,1,-60);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F93F2E").s().p("AgBBVIgbgVQgQgOgHgMQgJgPAAgjQAAgfAEgQQAIgeAWABQAOABABAOQADAzAIAYQAPAqAkAMQAOAEgEAPQgEAOgOgFQgKgDgJgFQAAAHgHAEQgFACgDAAQgGAAgEgEg");
	this.shape_14.setTransform(-45.8,-44.6,1,1,-60);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F93F2E").ss(6).p("AhVBDIAOACQAZADAvADQArADAbgYQAYgUAAgXQAAgjglgeQgugkg9AbQgkAQgHA9QgDAWADASQACAQAFgDg");
	this.shape_15.setTransform(-32.1,-65.5,1,1,-60);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F93F2E").ss(6).p("ABpBnQgLAEheAIQg0AEgigkQgcgegBgkQAAg3AugtQA3g3BLApQAsAYAJBeQADAigDAbQgDAagGgFg");
	this.shape_16.setTransform(-46,-49.4,1,1,-60);

	this.instance_1 = new lib.Path_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.6,-47.3,1,1,-60,0,0,70.5,21.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(117,115,115,0.71)",2,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-112.2,154.6,241.8);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F93F2E").ss(19).p("AAAFmIAArL");
	this.shape.setTransform(0.5,39.4);

	this.instance = new lib.Path_17();
	this.instance.parent = this;
	this.instance.setTransform(0.1,39.2,1,1,0,0,0,65.5,44);
	this.instance.shadow = new cjs.Shadow("rgba(117,115,115,0.71)",2,7,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F93F2E").ss(19).p("AAACIIABkO");
	this.shape_1.setTransform(0.5,-40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F93F2E").s().p("AgcAQQgGgFgBgHQgCgHAEgHQAGgMASAAIAfAAQAPAAAAAPQAAAOgPAAIgIAAQACAMgNADIgMABQgMAAgHgHg");
	this.shape_2.setTransform(7.2,-65.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F93F2E").s().p("AgOAAQAAgOAOAAQAOAAAAAOQAAAPgOAAQgOAAAAgPg");
	this.shape_3.setTransform(4.5,-54.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F93F2E").s().p("AgXAhQgpgegQgwQgFgOAPgDQAOgEAFANQAMAnAiAXQAgAYApABQAOAAAAAPQAAAPgOAAQgzgBgogeg");
	this.shape_4.setTransform(-11.3,-60.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F93F2E").s().p("Ag6AOQgOgBAAgOQAAgPAOABQA4AFA9gEQAOgBAAAPQAAAOgOABQgcABgaAAQggAAgfgCg");
	this.shape_5.setTransform(-6.7,-55.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F93F2E").s().p("AgFA1QgOgEACgPQAHghgBgnQgBgOAOAAQAPAAABAOQABApgIAnQgCALgJAAIgFAAg");
	this.shape_6.setTransform(-2.1,-59.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F93F2E").s().p("AA7A1QgLgvgjgXQglgbgsARQgOAFgEgOQgEgPAOgFQA3gUAxAhQAuAfANA5QAEAOgPAEIgGABQgJAAgCgLg");
	this.shape_7.setTransform(-9.1,-66.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F93F2E").s().p("AgUA7QgRAGgUgBQgOAAAAgPQAAgPAOAAQAjABAWgYQAVgYgHgjQgCgKAKgGQAJgHAIAJIAEAEIADgEQAKgKALALQALAKgLAKQgEAEAAASIABAYQgDATgKAOQgVAcgkACIgBAAQgJAAgEgJg");
	this.shape_8.setTransform(11.7,-59.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F93F2E").s().p("Ag8AlQgEgPAOgFIAwgSQAbgOAHgVQAEgNAPAEQAOADgEAOQgJAdghATQgMAGgxAUIgHABQgIAAgDgKg");
	this.shape_9.setTransform(13.8,-56.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F93F2E").s().p("AgfAwQACg5AkguQAJgLAKAKQALALgJALQgcAkgBAuQgBAOgPAAQgPAAABgOg");
	this.shape_10.setTransform(4.8,-59.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F93F2E").s().p("AgsAzQAAgPAOgBQAwgGgEhOQAAgPAPAAQAPAAAAAPQACAtgPAdQgTAjgqAFIgDAAQgLAAAAgOg");
	this.shape_11.setTransform(13.2,-58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F93F2E").s().p("AgjBOIgFgHQgJgKAIgKQgDgsAJgdQAPgyAugJQAPgCAEAOQAEAPgPACQgjAHgJApQgFAYAGAvQABAJgKAFIgHABQgGAAgEgEg");
	this.shape_12.setTransform(-15.1,-66.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F93F2E").s().p("AgbAkIAAgBQgGgCgDgGQgDgIADgHQANgcAbgQIAFgIQAJgMANAIQANAHgJAMIgEAHQAAADgEAEQgJAOgHAJIgIAKQACADAAAGQAAAPgNACIgDAAQgMAAgEgMg");
	this.shape_13.setTransform(-16.7,-69.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F93F2E").s().p("AgBBVIgbgVQgQgOgHgMQgJgPAAgjQAAgfAEgQQAIgeAWABQAOABABAOQADAzAIAYQAPAqAkAMQAOAEgEAPQgEAOgOgFQgKgDgJgFQAAAHgHAEQgFACgDAAQgGAAgEgEg");
	this.shape_14.setTransform(-15,-60.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F93F2E").ss(6).p("AhVBDIAOACQAZADAvADQArADAbgYQAYgUAAgXQAAgjglgeQgugkg9AbQgkAQgHA9QgDAWADASQACAQAFgDg");
	this.shape_15.setTransform(9.9,-59.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F93F2E").ss(6).p("ABpBnQgLAEheAIQg0AEgigkQgcgegBgkQAAg3AugtQA3g3BLApQAsAYAJBeQADAigDAbQgDAagGgFg");
	this.shape_16.setTransform(-11,-63.5);

	this.instance_1 = new lib.Path_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-40.5,1,1,0,0,0,70.5,21.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(117,115,115,0.71)",2,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-88.2,148,190.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F93F2E").ss(19).p("AAAFmIAArL");
	this.shape.setTransform(0.4,23.8);

	this.instance = new lib.Path_17();
	this.instance.parent = this;
	this.instance.setTransform(0,23.6,1,1,0,0,0,65.5,44);
	this.instance.shadow = new cjs.Shadow("rgba(117,115,115,0.71)",2,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-21.4,138,107);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F93F2E").ss(19).p("AAAFmIAArL");
	this.shape_1.setTransform(92.1,170.8);

	this.instance = new lib.Path_17();
	this.instance.parent = this;
	this.instance.setTransform(91.7,170.5,1,1,0,0,0,65.5,44);
	this.instance.shadow = new cjs.Shadow("rgba(117,115,115,0.71)",2,7,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F93F2E").ss(19).p("AAACIIABkO");
	this.shape_2.setTransform(34.2,56,1,1,-90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F93F2E").s().p("AgcAQQgGgFgBgHQgCgHAEgHQAGgMASAAIAfAAQAPAAAAAPQAAAOgPAAIgIAAQACAMgNADIgMABQgMAAgHgHg");
	this.shape_3.setTransform(9.6,49.3,1,1,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F93F2E").s().p("AgOAAQAAgOAOAAQAOAAAAAOQAAAPgOAAQgOAAAAgPg");
	this.shape_4.setTransform(20.6,52,1,1,-90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F93F2E").s().p("AgXAhQgpgegQgwQgFgOAPgDQAOgEAFANQAMAnAiAXQAgAYApABQAOAAAAAPQAAAPgOAAQgzgBgogeg");
	this.shape_5.setTransform(14.8,67.8,1,1,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F93F2E").s().p("Ag6AOQgOgBAAgOQAAgPAOABQA4AFA9gEQAOgBAAAPQAAAOgOABQgcABgaAAQggAAgfgCg");
	this.shape_6.setTransform(19.7,63.1,1,1,-90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F93F2E").s().p("AgFA1QgOgEACgPQAHghgBgnQgBgOAOAAQAPAAABAOQABApgIAnQgCALgJAAIgFAAg");
	this.shape_7.setTransform(15.2,58.5,1,1,-90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F93F2E").s().p("AA7A1QgLgvgjgXQglgbgsARQgOAFgEgOQgEgPAOgFQA3gUAxAhQAuAfANA5QAEAOgPAEIgGABQgJAAgCgLg");
	this.shape_8.setTransform(8.5,65.6,1,1,-90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F93F2E").s().p("AgUA7QgRAGgUgBQgOAAAAgPQAAgPAOAAQAjABAWgYQAVgYgHgjQgCgKAKgGQAJgHAIAJIAEAEIADgEQAKgKALALQALAKgLAKQgEAEAAASIABAYQgDATgKAOQgVAcgkACIgBAAQgJAAgEgJg");
	this.shape_9.setTransform(15.9,44.7,1,1,-90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F93F2E").s().p("Ag8AlQgEgPAOgFIAwgSQAbgOAHgVQAEgNAPAEQAOADgEAOQgJAdghATQgMAGgxAUIgHABQgIAAgDgKg");
	this.shape_10.setTransform(18.3,42.6,1,1,-90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F93F2E").s().p("AgfAwQACg5AkguQAJgLAKAKQALALgJALQgcAkgBAuQgBAOgPAAQgPAAABgOg");
	this.shape_11.setTransform(15.3,51.6,1,1,-90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F93F2E").s().p("AgsAzQAAgPAOgBQAwgGgEhOQAAgPAPAAQAPAAAAAPQACAtgPAdQgTAjgqAFIgDAAQgLAAAAgOg");
	this.shape_12.setTransform(17.1,43.2,1,1,-90);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F93F2E").s().p("AgjBOIgFgHQgJgKAIgKQgDgsAJgdQAPgyAugJQAPgCAEAOQAEAPgPACQgjAHgJApQgFAYAGAvQABAJgKAFIgHABQgGAAgEgEg");
	this.shape_13.setTransform(8.8,71.5,1,1,-90);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F93F2E").s().p("AgbAkIAAgBQgGgCgDgGQgDgIADgHQANgcAbgQIAFgIQAJgMANAIQANAHgJAMIgEAHQAAADgEAEQgJAOgHAJIgIAKQACADAAAGQAAAPgNACIgDAAQgMAAgEgMg");
	this.shape_14.setTransform(5.3,73.1,1,1,-90);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F93F2E").s().p("AgBBVIgbgVQgQgOgHgMQgJgPAAgjQAAgfAEgQQAIgeAWABQAOABABAOQADAzAIAYQAPAqAkAMQAOAEgEAPQgEAOgOgFQgKgDgJgFQAAAHgHAEQgFACgDAAQgGAAgEgEg");
	this.shape_15.setTransform(14.2,71.5,1,1,-90);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F93F2E").ss(6).p("AhVBDIAOACQAZADAvADQArADAbgYQAYgUAAgXQAAgjglgeQgugkg9AbQgkAQgHA9QgDAWADASQACAQAFgDg");
	this.shape_16.setTransform(15.6,46.5,1,1,-90);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F93F2E").ss(6).p("ABpBnQgLAEheAIQg0AEgigkQgcgegBgkQAAg3AugtQA3g3BLApQAsAYAJBeQADAigDAbQgDAagGgFg");
	this.shape_17.setTransform(11.6,67.4,1,1,-90);

	this.instance_1 = new lib.Path_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.6,56.5,1,1,-90,0,0,70.5,21.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(117,115,115,0.71)",2,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(-13.1,-9.5,178.2,243), null);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.Symbol1();
	this.startbtn.name = "startbtn";
	this.startbtn.parent = this;
	this.startbtn.setTransform(4,23.9,0.944,0.883,0,0,0,52.4,17.2);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, חגים ומעדים בישראל, 1, בעלי חיים, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(0,-21.9,1.46,1.46,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-73.7,-38.7,147.5,76.6), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak0CgIgqjXICAjHID9hGIDJAzIB3FJIhAD1IoDAYg");
	mask.setTransform(35.1,32.5);

	// Layer_3
	this.instance = new lib.Path_4();
	this.instance.parent = this;
	this.instance.setTransform(33.7,38,1,1,0,0,0,22.2,22.7);
	this.instance.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(11.5,15.2,44.6,45.5), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al6DSIhAkMICXkAIE6hjID/A3ICkGXIhDE2IqFA3g");
	mask.setTransform(44.3,41.4);

	// Layer_3
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(42.3,47.4,1,1,0,0,0,27.9,28.7);
	this.instance.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(14.4,18.6,55.7,57.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak/F6IhSjXIgekSIC2jrIFEg6ID2BWIBvGoIhqErg");
	mask.setTransform(43.2,40.5);

	// Layer_3
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(41.9,46.2,1,1,0,0,0,28,28.9);
	this.instance.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(13.9,17.2,56,58), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak0CgIgqjXICAjHID9hGIDJAzIB3FJIhAD1IoDAYg");
	mask.setTransform(35.1,32.5);

	// Layer_3
	this.instance = new lib.Path_3();
	this.instance.parent = this;
	this.instance.setTransform(33.6,35.1,1,1,0,0,0,17.8,18.1);
	this.instance.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(15.7,17,35.7,36.3), null);


(lib.ClipGroup_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Al6DSIhAkMICXkAIE6hjID/A3ICkGXIhDE2IqFA3g");
	mask_1.setTransform(44.3,41.4);

	// Layer_3
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(42.2,44,1,1,0,0,0,22.3,22.9);
	this.instance.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_1, new cjs.Rectangle(19.9,21.1,44.6,46), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak/F6IhSjXIgekSIC2jrIFEg6ID2BWIBvGoIhqErg");
	mask.setTransform(43.2,40.5);

	// Layer_3
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(42,42.9,1,1,0,0,0,22.4,23.1);
	this.instance.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(19.5,19.7,44.8,46.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhK/AuGMAAAhcLMCV/AAAMAAABcLg");
	mask.setTransform(536.2,390.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6CB9A").s().p("ABICDQgogGgagNQgPgJgwAAIhKACQgYAAgNghIgIghIAUggQAXglAQgdQATgjAngVQAmgVAiAFIA0AIQAhAEAgBFQARAmAXBBQANAegMAQIgiAaQgLAIgYAAQgNAAgRgCg");
	this.shape.setTransform(900.9,416.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7298A7").s().p("AEWOdIgZgUIon8aIAbgUQIzcoAHAaQACAJgFAAQgFAAgNgJg");
	this.shape_1.setTransform(939,519.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CBACB").s().p("ADyOlIgNgNIo687IBcgOIJOdCQACAJgFAHQgKARghAAQghAAgUgNg");
	this.shape_2.setTransform(941.7,516);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78A0B0").s().p("AAILSQgCgSgBg1QAAg1gm0nIAUAHIAJFlQALFuAEA6QAHBcAQIzg");
	this.shape_3.setTransform(908.1,494.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D1F03").s().p("AgLGEQAdhwgGiWQgDhQgXjEIgOgWQhmgzgpg5QgyhEBFgyQAwAfAzA3IBVBbQAyhaBfgiQgFB3ABBXQAABoAIBvQAZCDgZBYQgdBohfAAQgfAAglgLg");
	this.shape_4.setTransform(962.8,503.8);

	this.instance = new lib.Path_1_2();
	this.instance.parent = this;
	this.instance.setTransform(968.3,429.7,1,1,0,0,0,34.4,69.7);
	this.instance.alpha = 0.57;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#40A629").s().p("AjZJyQhbA+g5gaQg6gbA9heQgXhXAkhMQAmhOBVgjQg2gHguggQgtgfgWgsQg1hnBfhPQhDhSAyhdQAthSBtg0QhWhAAGhhQAFhiBigjIAQARQARggAKgPQASgXAWgLQAJAZAQAZIAZAjQAXAmgLA7IAigxQBzAcA5BhQA9Bmg9BoQA5BLAKAdQASAxgYBOQBbAoAoBWQAqBegwBdQBlBMgzBgQgtBTiJBCQiEA/h7AEIgOABQh9AAglhJg");
	this.shape_5.setTransform(961.4,429.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D1F03").s().p("AgKFsQAbhpgFiNQgDhOgWi1IgNgUQhggwgng1QguhBBAguQAuAdAwAzIBPBWQAvhVBZggQgEBxAABRQABBiAHBnQAXB8gXBSQgbBhhaAAQgdAAgigKg");
	this.shape_6.setTransform(164.8,494.9);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.9,425.3,1,1,0,0,0,32.2,65.3);
	this.instance_1.alpha = 0.57;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#40A629").s().p("AjLJLQhWA7g1gZQg3gZA5hYQgVhSAihHQAjhJBQghQgzgGgrgeQgqgdgVgqQgyhhBahKQg/hNAvhWQAqhNBngxQhRg8AFhbQAFhdBcggIAPAQQAQgfAKgNQAQgWAVgKQAJAYAOAWIAXAiQAWAkgKA2IAfgtQBtAaA1BaQA5Bgg5BiQA2BHAJAbQARAugXBJQBWAlAlBRQAoBYguBXQBgBIgxBZQgqBOiAA+Qh8A8h0ADIgLAAQh2AAgjhEg");
	this.shape_7.setTransform(163.5,425.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D1F03").s().p("AgKFsQAbhpgGiNQgDhOgVi1IgOgVQhggwgmg0QgvhBBBguQAtAdAwAzIBQBVQAvhUBYggQgEBxABBRQAABhAHBoQAYB7gXBTQgbBhhaAAQgdAAgigKg");
	this.shape_8.setTransform(109.6,501.3);

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(114.8,431.7,1,1,0,0,0,32.3,65.3);
	this.instance_2.alpha = 0.57;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40A629").s().p("AjLJLQhWA7g1gZQg3gZA5hYQgVhSAihHQAjhJBQghQgzgHgrgdQgqgdgVgqQgyhhBahKQg/hNAvhWQAqhNBngxQhRg8AFhcQAFhcBcggIAPAPQAQgeAKgNQAQgWAVgKQAJAYAOAWIAXAiQAWAkgKA2IAfgtQBtAaA1BaQA5Bgg5BiQA2BHAJAbQARAugXBIQBWAmAlBRQAoBYguBXQBgBHgxBaQgqBOiAA+Qh8A7h0AEIgNAAQh1AAgihEg");
	this.shape_9.setTransform(108.2,431.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#41AA54").s().p("AhjgKIDIgGIgCAcIjDAEg");
	this.shape_10.setTransform(454.8,302.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#41AA54").s().p("AhqgNIDVgIIgDAjIjNAIg");
	this.shape_11.setTransform(454.6,297.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#41AA54").s().p("AhxgMIDjgIIgDAjIjbAGg");
	this.shape_12.setTransform(454.4,291.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9CD7A2").s().p("AhmgFIDNgIIgBAUIjIAGg");
	this.shape_13.setTransform(454.7,300.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9CD7A2").s().p("AhtgHIDbgGIgBAUIjWAIg");
	this.shape_14.setTransform(454.5,294.6);

	this.instance_3 = new lib.ClipGroup_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(454.8,242,1,1,0,0,0,35.1,32.5);

	this.instance_4 = new lib.ClipGroup_1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(454.8,242,1,1,0,0,0,35.1,32.5);

	this.instance_5 = new lib.ClipGroup_2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(454.8,242,1,1,0,0,0,35.1,32.5);

	this.instance_6 = new lib.ClipGroup_3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(454.8,243.8,1,1,0,0,0,35.1,34.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9CD7A2").s().p("Ah2hYIDtgFIgPC2IjCAFg");
	this.shape_15.setTransform(454.3,294.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D1F03").s().p("Ah2hYIDtgFIgPC2IjCAFg");
	this.shape_16.setTransform(454.3,294.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D1F03").s().p("AgnDHIBLmNIAEAAIhLGNg");
	this.shape_17.setTransform(468.1,267.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D1F03").s().p("AgvjDIAEgBIBbGIIgEACg");
	this.shape_18.setTransform(440.1,267.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D1F03").s().p("AAEDpIgKnRIAEAAIAJHRg");
	this.shape_19.setTransform(454.5,268.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#41AA54").s().p("Ah9gGID7gSIgCAjIj0AOg");
	this.shape_20.setTransform(632.5,213.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#41AA54").s().p("AiFgLIELgTIgCAsIkBASg");
	this.shape_21.setTransform(632,207.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#41AA54").s().p("AiOgLIEdgUIgDAsIkRATg");
	this.shape_22.setTransform(631.4,199.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9CD7A2").s().p("AiAgDIEBgSIgBAZIj7ASg");
	this.shape_23.setTransform(632.3,210.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9CD7A2").s().p("AiIgDIERgTIgBAbIkLATg");
	this.shape_24.setTransform(631.7,203.6);

	this.instance_7 = new lib.ClipGroup_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(629.7,138.2,1,1,0,0,0,44.3,41.4);

	this.instance_8 = new lib.ClipGroup_1_0_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(629.7,138.2,1,1,0,0,0,44.3,41.4);

	this.instance_9 = new lib.ClipGroup_2_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(629.7,138.2,1,1,0,0,0,44.3,41.4);

	this.instance_10 = new lib.ClipGroup_3_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(629.7,139.8,1,1,0,0,0,44.3,43);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9CD7A2").s().p("AiThpIEngRIgKDmIjzAPg");
	this.shape_25.setTransform(631,203.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4D1F03").s().p("AiThpIEngRIgKDmIjzAPg");
	this.shape_26.setTransform(631,203.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D1F03").s().p("AgnD7IBKn2IAFABIhKH1g");
	this.shape_27.setTransform(647.4,168.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4D1F03").s().p("AhEjzIAFgCICEHqIgEABg");
	this.shape_28.setTransform(612.5,170.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4D1F03").s().p("AAQElIgipIIAFAAIAgJIg");
	this.shape_29.setTransform(630.5,171.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#41AA54").s().p("Ah7AIIgCggID7AOIgGAjg");
	this.shape_30.setTransform(800,225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#41AA54").s().p("AiDAPIgCgsIELAPIgIAsg");
	this.shape_31.setTransform(800.5,218.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#41AA54").s().p("AiKAOIgEgsIEcAQIgHAsg");
	this.shape_32.setTransform(800.8,211.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9CD7A2").s().p("Ah+AGIgCgZIEBAOIgEAZg");
	this.shape_33.setTransform(800.1,221.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9CD7A2").s().p("AiHAGIgBgbIERAQIgEAag");
	this.shape_34.setTransform(800.6,214.8);

	this.instance_11 = new lib.ClipGroup_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(806.5,149.4,1,1,0,0,0,43.1,40.5);

	this.instance_12 = new lib.ClipGroup_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(806.5,149.4,1,1,0,0,0,43.1,40.5);

	this.instance_13 = new lib.ClipGroup_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(806.5,149.4,1,1,0,0,0,43.1,40.5);

	this.instance_14 = new lib.ClipGroup_3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(806.5,151.5,1,1,0,0,0,43.1,42.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9CD7A2").s().p("AiFBrIgOjmIEoATIgnDkg");
	this.shape_35.setTransform(801.1,215.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D1F03").s().p("AiFBrIgOjmIEoATIgnDkg");
	this.shape_36.setTransform(801.1,215.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4D1F03").s().p("AhHD0ICKnoIAFABIiKHog");
	this.shape_37.setTransform(820.4,182.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4D1F03").s().p("Aglj6IAFgBIBGH2IgGABg");
	this.shape_38.setTransform(785.4,179.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4D1F03").s().p("AgWEjIAopGIAFABIgoJGg");
	this.shape_39.setTransform(803.2,182.8);

	this.instance_15 = new lib.ClipGroup_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(277.7,207.9,1,1,0,0,0,81.7,80);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEC76D").s().p("Aj4AcIgLAGIgIg/IBIgXIBMAmIBRgvIBQAvIBMgvIArApIBMgyIAfAaIgKBvIg3gcIhCAbIhIgkIheAmIhMgjIhCAng");
	this.shape_40.setTransform(274.5,317.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEC76D").s().p("AjsAjIgJhJIAvgOIBMAnIBRgwIBQAwIBLgwIAsApIBMgyIAMAJIgMB7IgigXIhCAbIhJgkIhdAmIhMgkIhCAng");
	this.shape_41.setTransform(274.9,338);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FE7917").s().p("AjfDWIg1mrIIpAAIgtGrg");
	this.shape_42.setTransform(274.4,327.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D1F03").s().p("AjfDWIg1mrIIpAAIgtGrg");
	this.shape_43.setTransform(274.4,327.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D1F03").s().p("AhlHPIDCueIAJACIjCOdg");
	this.shape_44.setTransform(307.5,263.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D1F03").s().p("AhlnNIAJgCIDCOeIgJABg");
	this.shape_45.setTransform(242.2,263.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D1F03").s().p("AgEIhIAAxBIAIAAIAARBg");
	this.shape_46.setTransform(275.7,266.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgUD8Qg9gPgXgvQgJgSAAgTQggAQgugMQgzgNgegoQgigtAKg9QAUhKBFgSQA5gPA0AgQAIg5AWgIQAYgIAsAsQgYg+AOgsQAMgnAigEQAjgFAfAjQAjApAKBOQAAhNAogpQAjgkAlANQAnANgFA0QgGA9hHBVQBFAcAMA8QAKA1gjAtQgjAugvgJQg2gKgmhVQAYBggsArQgZAagnAAQgPAAgTgFg");
	this.shape_47.setTransform(200.8,281.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTD9Qg9gPgYgwQgJgSAAgTQggAQgugMQgzgNgegnQgiguAKg8QAVhLBEgRQA5gPA0AfQAIg5AWgIQAYgIAsAsQgYg+AOgsQAMgnAigEQAjgFAfAjQAjApAKBOQAAhNAogpQAjgkAlANQAnANgFA0QgGA9hHBVQBFAcAMA8QAKA1gjAtQgjAugugJQg3gKgmhVQAYBhgrAqQgaAagnAAQgPAAgSgEg");
	this.shape_48.setTransform(886.7,96.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgTD9Qg9gPgYgwQgJgSAAgTQggAQgugMQgzgNgegnQgiguAKg8QAVhLBEgRQA5gPA0AfQAIg5AWgIQAYgIAsAsQgYg+AOgsQAMgnAigEQAjgFAfAjQAjApAKBOQAAhNAogpQAjgkAlANQAnANgFA0QgGA9hHBVQBFAcAMA8QAKA1gjAtQgjAugugJQg3gKgmhVQAYBhgrAqQgaAagnAAQgPAAgSgEg");
	this.shape_49.setTransform(734.2,91.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaFUQhSgUgfhAQgNgZABgZQgsAWg+gQQhEgSgog1Qgvg9AOhSQAdhkBbgYQBMgUBGApQALhLAegLQAggMA7A7QgghTASg6QARg1AugGQAvgHApAwQAvA3AOBoQAAhnA2g3QAvgwAyASQA0ARgHBGQgHBThgBxQBdAmAPBRQAOBIgvA8QgvA9g/gMQhJgNgzhzQAgCCg6A6QgjAjg0AAQgVAAgYgGg");
	this.shape_50.setTransform(884,227);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABvDBQgugagOhPQgCBTgxASQgoAQg1ghQgzghgKgsQgDgRAEgPQghACgmgZQgrgcgSgoQgUgvAXgsQAlgzBBAKQA2AJAoApQAUgpAWABQAYABAcAyQgIg4AXgdQAVgaAgAIQAgAJAUAmQAVArgIBAQASg8AtgRQAogQAeAXQAgAXgRAmQgTAuhTAoQA3AtgEAzQgEAtgpAXQgVAMgVAAQgUAAgUgMg");
	this.shape_51.setTransform(538.3,241.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ADGFZQhTgvgZiNQgCCVhYAhQhJAcheg7Qhbg6gShQQgGgfAIgaQg7ADhFguQhMgxgghIQgkhUAqhPQBBhaB1ARQBiAPBGBLQAkhJAnACQApADA0BXQgNhkApg0QAkguA5AOQA7APAiBEQAnBOgQByQAhhqBRggQBHgcA2ApQA4ApgdBFQgjBSiVBIQBiBSgGBbQgHBPhKApQglAVgkAAQglAAgkgVg");
	this.shape_52.setTransform(342.7,189.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgVEOQhBgQgZgzQgJgTAAgUQgjARgxgNQg2gOghgrQgkgwALhBQAWhQBJgSQA9gQA4AhQAJg8AXgIQAagKAuAvQgZhCAPgvQAMgpAlgFQAmgGAgAmQAmAsALBTQAAhSArgrQAlgnAoAOQApAOgFA3QgGBChMBaQBJAfAMBAQALA5glAwQgmAwgygJQg6gLgohbQAZBoguAtQgbAcgpAAQgRAAgUgFg");
	this.shape_53.setTransform(180.2,142.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D8B881").s().p("AglBKQAAgHADgCIADgCIAAhYQAAgQACgGQADgQAKgFIAVgLQAJgEAEAHQAHALAAAyIAHAIQAGAHAAAEQAAAHgJAFQgKAEgHgKQgEgHgBgeQgBgagFABQgEACgCANIAAAWIAAA8IAGAKQAGAKgEAGQgEAJgSABIgEAAQgOAAAAgHg");
	this.shape_54.setTransform(190.5,546.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4C7486").s().p("AgbAhIAHgOQAHgOAGgDQAJgEgCgdIAIgFQAJgEAGADQANAIgTAgQgRAfgKAEIgGABQgGAAgFgGg");
	this.shape_55.setTransform(192.5,550.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6EA3BB").s().p("Ak9AGIgNgCIARgNIKEAPIprADQgNAAgQgDg");
	this.shape_56.setTransform(189.9,545.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C4A876").s().p("AlcECQATgHATgaIDmmyQAMgOARgOQAjgcAXAAQAZAAAmAkQATASAOARIDeGXQAMATAPANQAOAMgkACQgjACgSgJQgNgGAOgTIAQgSIjQmKQgMgKgPgLQgggWgTAAQgRAAggAWIgdAVIjRGKIAPAPQAMASgKAKQgNANguAAIgKABQglAAAUgIg");
	this.shape_57.setTransform(260.3,578.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D8B881").s().p("AmYETQAAgQASgRIARgPIEVnqIAigPQAmgPAYAAQAZAAAmAPQATAIAOAHIEWHqIASAPQARARAAAQQAAATg/gBQg+AAgOgOQgLgKANgSIAPgPIjQmKQgMgKgPgLQgggWgTAAQgSAAgfAWIgeAVIjRGKIAQAPQAMASgLAKQgNAPg+AAQg/AAAAgTg");
	this.shape_58.setTransform(261.1,575.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D8B881").s().p("AglBKQgBgHAEgCIADgCIAAhYQAAgRABgFQADgQALgFIAUgLQAKgEAEAHQAHAMAAAxIAHAIQAGAHAAAEQAAAHgKAFQgKAEgGgKQgEgHgBgeQgCgagEABQgFACgBANIAAAWIAAA8IAGAKQAGAKgEAGQgFAJgRABIgEAAQgOAAAAgHg");
	this.shape_59.setTransform(326.9,550);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4C7486").s().p("AgbAhIAGgOQAIgOAGgDQAJgEgCgdIAHgFQAKgEAGADQAMAIgSAgQgRAfgKAEIgGABQgGAAgFgGg");
	this.shape_60.setTransform(329,554);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6190A5").s().p("AxHAUIAthcMAhiAA2IgtBbg");
	this.shape_61.setTransform(261.8,552);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#476D7E").s().p("AxHAjIAAhZMAhiAA2IAthYIAABwIgtBBg");
	this.shape_62.setTransform(261.8,559);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D8B881").s().p("AglBNQABgIACgDIADgCIAAhYQAAgRABgFQADgQALgGIAUgMQAKgFAEAHQAIALgBAyIAHAHQAGAIAAADQAAAHgJAGQgLAFgGgKQgFgHgBgdQAAgagFABQgFACgBANIAAAWIAAA8IAGAJQAGAKgEAHQgFAJgRADIgIAAQgKAAAAgGg");
	this.shape_63.setTransform(328.6,532.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4C7486").s().p("AgbAjIAGgOQAIgPAGgDQAJgEgCgeIAHgGQAKgFAGAEQAMAHgSAhQgRAfgKAGQgEACgDAAQgGAAgEgGg");
	this.shape_64.setTransform(330.6,535.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6190A5").s().p("AwSB5MAhIgFWIgiBkMghJAFWg");
	this.shape_65.setTransform(263.5,546.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#476D7E").s().p("Aw8CfMAhLgE5IAjhfIALBwIglBJMghLAE6g");
	this.shape_66.setTransform(264.2,550.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B1976A").s().p("AluECQATgHATgaIDmmyQAMgOARgOQAigcAZAAQAiAAAvAdQAXAPAQAOIDhGYQAWAhAPANQANAMg3AAQg2ABgSgJQgOgGAOgTIARgRIjRmKQgMgLgQgLQgfgWgSAAQgTAAgfAWQgQALgMALIjQGKIAPAPQAMASgKAKQgNANguAAIgKABQglAAAUgIg");
	this.shape_67.setTransform(255.2,557.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E2C99A").s().p("AgUAIQgIgDAAgFQAAgEAIgDQAJgDALAAQAdAAAAAKQAAAFgIADQgJADgMAAQgLAAgJgDg");
	this.shape_68.setTransform(625.4,471.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E2C99A").s().p("AgTAIQgJgEAAgEQAAgDAJgDQAIgEALAAQAMAAAIAEQAJADAAADQAAAEgJAEQgIADgMAAQgLAAgIgDg");
	this.shape_69.setTransform(549,463.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E2C99A").s().p("AgTAIQgJgDAAgFQAAgEAJgDQAIgDALAAQAMAAAIADQAJADAAAEQAAAFgJADQgIADgMAAQgLAAgIgDg");
	this.shape_70.setTransform(473,455.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E2C99A").s().p("AgTAIQgJgDAAgFQAAgEAJgDQAIgDALAAQAMAAAJADQAIADAAAEQAAAFgIADQgJADgMAAQgLAAgIgDg");
	this.shape_71.setTransform(398.1,455.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#929467").s().p("AhlA0IgNgFQgJgDgGgBQgGgBgHgFQgHgFgGgBIgogCIAIgJQAJgJAHABQAGABABgFQABgGAGgCIASgGIgjgTQgCgBAOABQAQABAFgBQAFgBAAgLQAAgIAEADIAMAKQAGAEAGgCIAMgFQAHgDAHABQAHABAFAKQAFAIAEAAQAEAAANgKQAJgJAAAFIgBANQAAAGAGAAQAFAAAOgOQALgNAAADQAAAHAIAMQAggrgFAKQgDAGgBALIgBAJIAHgEQAIgFAEAAQAEAAgBAGQgBAGADAAQAEAAAIAHQAIAHAGABIAQgBQAIgBAIAHQAPAOAPAFQAEACAfABQAZABgIAEIgWAMQgOAGgJgEQgIgFgbACIgiADQgEAAgTAJQgRAIgHgDQgMgFglAAIgWgCQgRgBgLAFQgLAEgKAAQgHAAgHgCg");
	this.shape_72.setTransform(554,537);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D8B881").s().p("AmYETQAAgQASgRIARgPIEVnqIAigPQAngPAXAAQAZAAAmAPQATAIAOAHIEWHqIASAPQARARAAAQQAAATg/gBQg+AAgOgOQgLgKANgSIAPgPIjQmKQgMgKgPgLQgggWgTAAQgSAAgfAWIgeAVIjRGKIAQAPQAMASgLAKQgNAPg+AAQg/AAAAgTg");
	this.shape_73.setTransform(253.1,553.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7298A7").s().p("AktOkQgKgKEiujIEiuiIAhAUIo6c7QgEAEgGACIgHACQgIAAgIgIg");
	this.shape_74.setTransform(864.3,516.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8CBACB").s().p("AlROhIgDgQIJO9CIBbAOIo5c7QgDAGgKAHQgUANghAAQghAAgKgRg");
	this.shape_75.setTransform(860.1,516);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#86B1C2").s().p("AAfAbQiwgngPgFQgSgEgMgNQgOgNgCgTIAMAAQAOAAAKADQAKAFC5AsIC2AqIAAAnIiwgog");
	this.shape_76.setTransform(871.6,407.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#929467").s().p("AgFAzQgbgDgGABQgGABghgEQgggEgLAEQgPAGgRgJQgRgJAQgIQAXgLAKAAQAAgGgCgIQgFgPgNgJQgOgKACgLQACgKAKAFQAFADAEAPQAEANANAAQALABABgLQABgKALAEIAWAMQAIAEAMgDIAggMQAQgFAHAHIALARQAHAKAMADQAUABATANIAKgiIAAAMQABANAGAGQAFAFAIgNQAKgRAKgEQAUgHAQgDIgQANQgPAPgCAHQgBAGANAIQAKAHgJAFQgKAHgKABIgXgBQgcAAgmAKQgJADgNAAIgQgBg");
	this.shape_77.setTransform(980.2,614.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#929467").s().p("AhlAzIgNgEQgJgEgGgBQgGgBgHgEQgHgFgGgCIgYgBIgQgBIAIgJQAJgJAHABQAGABABgEQABgHAGgBIASgGIgjgTQgCgBAOABQARABAEgBQAFgBAAgLQAAgJAFAEIALAJQAGAEAHgBIAMgFQAHgDAHABQAGABAFAJQAFAJAEAAQAFAAAMgLQAJgIAAAFIgBANQAAAGAGAAQAFAAAOgPQALgMAAADQAAAHAHAMQAhgrgFAKQgDAGgBAKIgBAKIAHgFQAIgEAEAAQAEAAgBAGQgBAGADAAQADAAAIAGQAJAHAGABIAQgBQAIgBAHAHQAPAOAQAGQAEACAfABQAZAAgIAEQgOAJgIADQgOAGgJgEQgIgEgbABIgiADQgEAAgTAJQgRAIgHgDQgMgFglAAIgWgBQgRgBgLAEQgLAFgKAAQgHAAgHgDg");
	this.shape_78.setTransform(833.4,612.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8CBACB").s().p("AC8BiImjhoQgagHgBgZQAAgVARgXQAMgQATgDQAKgCAIACIGnBfIATANQAQAVgMAlQgNAlgcABg");
	this.shape_79.setTransform(877.2,405.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7298A7").s().p("AAvBUIgShdQgDgOgFgLQgGgOgHAAIgLABIgEACIgPAcQgNAWgGACQgEACgCAlIgBAmIgMAAIABgsQACgrAFgHIAbgpQAWggAIABQAEAAAKATQALAVADADQAEAFALAlQALAkAAALQAAANACAVg");
	this.shape_80.setTransform(910,572.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7298A7").s().p("AAvBUIgSheQgHgngNAAQgIAAgDACIgDACQgaAwgJADQgEACgCAmIgBAmIgNAAIABgsQACgsAFgGIAbgpQAWghAHABQAFABAKATQALAVADACQAEAFALAlQALAlgBAKQABANACAWg");
	this.shape_81.setTransform(892.8,562.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CDA880").s().p("AiXgwICAgDICvBjIiAAEg");
	this.shape_82.setTransform(901.2,575.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A68968").s().p("AiXggIAAghICAAEICvBcIAAAgIiAAEg");
	this.shape_83.setTransform(901.2,577.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#78A0B0").s().p("AgLLAIgCgUIAE16IAJgCQALABAAAVIgDFmQgCFUAFAlQAFA7gCJEIgBAmQgCADgMAEIgBAAQgFAAgEgRg");
	this.shape_84.setTransform(893.2,486.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7298A7").s().p("AAwBUIgSheQgDgOgFgLQgHgOgHAAQgHAAgEACIgCACQgaAwgJADQgEACgDAmIgBAmIgLAAIAAgsQACgsAGgGIAagpQAWghAHABQAFABAKATQALAVACACQAGAFAKAlQALAlAAAKQAAANABAWg");
	this.shape_85.setTransform(874.4,559.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7298A7").s().p("AAwBUIgShdQgDgOgFgLQgGgOgHAAQgJAAgDABIgDACIgQAcQgNAVgGADQgFACgCAlIgBAmIgKAAIABgsQACgsAFgGIAagpQAWggAIABQAEAAAKATQALAVADADQAFAFAKAlQAKAkAAALQAAANACAVg");
	this.shape_86.setTransform(857.4,548.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CDA880").s().p("AiXgwICAgDICvBjIiAAEg");
	this.shape_87.setTransform(865.7,561.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A68968").s().p("AiXghIAAggICAADICvBdIAAAhIiAACg");
	this.shape_88.setTransform(865.7,563.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#78A0B0").s().p("AAILSQgDgSAAg0QAAg2gm0nIATAHIAKFkQAKFwAFA5QAHBcAQIzg");
	this.shape_89.setTransform(872.8,480.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#78A0B0").s().p("AgKK/IgDgUIAF15IAIgCQAKABABAUIgDFnQgCFUAFAkQAFA7gCJEQAAAjgBADQgBAEgMAEIgBAAQgGAAgDgSg");
	this.shape_90.setTransform(857.8,472.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E6CB9A").s().p("ABICDQgogGgZgNQgQgJgvAAIhKACQgZAAgNghIgIghIAUggQAXglAQgdQATgjAngVQAngVAhAFIA1AIQAgAEAgBFQASAmAXBBQANAegMAQIgiAaQgMAIgXAAQgOAAgRgCg");
	this.shape_91.setTransform(852.9,405.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7298A7").s().p("AECOOIom8DIAbgbIItchg");
	this.shape_92.setTransform(891,505.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7298A7").s().p("AlVNwQACgoFJtsIFHtlIAZAOIqAbdQgLAUgLALQgIAJgFAAQgJAAABgag");
	this.shape_93.setTransform(815.5,503.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8CBACB").s().p("ADyOlIgNgNIo687IBcgOIJOdCQACAIgFAJQgKAQghAAQghAAgUgNg");
	this.shape_94.setTransform(893.7,504.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8CBACB").s().p("AlMOLQghgBgJgQIgDgRIKY7zIBbAQIqDbuQgEAHgJAGQgTAKgcAAIgHAAg");
	this.shape_95.setTransform(812.4,502.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D4866F").s().p("AgUAyQgIgCgEgEQgFgFACgGIAFgNQAEgHAAgHQAAgTgHgQQgDgHAEgHQAFgHAHAAIAQABIAVABQAPAEAAASQAAAFgDAJQgDAKAAAHQAAAJADADIAGAHQADAGgDAJQgCAJgFAAQgaADgMAAIgKgBg");
	this.shape_96.setTransform(806,410.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D4866F").s().p("AgUAyQgIgCgEgEQgFgFACgGQAAgDAFgKQAEgHAAgHQAAgUgHgPQgDgHAEgHQAFgHAHAAIAPABIAWABQAPAEAAASQAAAFgDAJQgDAKAAAHQAAAJADADIAGAHQADAGgDAJQgDAJgEAAQgaADgMAAIgKgBg");
	this.shape_97.setTransform(767.3,410.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D4866F").s().p("Ai/ASIAKgjIF1AAIAAAjg");
	this.shape_98.setTransform(786.7,392.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D4866F").s().p("Ai/ASIAKgjIF1AAIAAAjg");
	this.shape_99.setTransform(786.7,378.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D4866F").s().p("ACvD3IAAkaQgCgegIgiQgRhDgigRQgigRgrgIIglgFQgOABgWAEQgrAIgiARQghARgSBEQgIAhgCAeIAAEaIgjAAIAAkXQACgkAKgoQAVhRAogVQAogUA1gKQAagFARgBIAtAGQA0AKAoAUQApAUAUBRQAKAoACAlIAAEXg");
	this.shape_100.setTransform(786.7,385.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EBE0D5").s().p("AvFJ/QABgOAEgOQAHgdAQgGQAMgECdgCQCmgCAegEQAngFA1gdQAbgOATgOIMVuzICRiJQAkgiB6gLQBBgGBjgDQAxgGA8AXQATAHALAGQAMAHgOgGQgYgKiMAFQiRAFgyAPQghAJhVBPIhNBOImUHgQmZHpgiAkQgiAkg5APIgyAHg");
	this.shape_101.setTransform(704.7,463.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C17B65").s().p("AgQAsIAAhXIAiAAIAABXg");
	this.shape_102.setTransform(637,552.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C17B65").s().p("AgQAvIAAhdIAiAAIAABdg");
	this.shape_103.setTransform(622.9,552.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C4A876").s().p("AgeD1IAAnpIA9AAIAAHpg");
	this.shape_104.setTransform(625.5,496.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C4A876").s().p("AgUFOIgKgFIAAqcIA9AAIAAKcQgIAKgUABQgKAAgNgGg");
	this.shape_105.setTransform(548.9,497.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C4A876").s().p("AgRF2IgNgHIAArrIA9AAIAALrQgOAOgNAAQgGAAgPgHg");
	this.shape_106.setTransform(473,494);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C4A876").s().p("AgVF2IgJgHIAArsIA9AAIAALsQgLAPgTAAQgKAAgMgIg");
	this.shape_107.setTransform(398.1,494);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B2A9A0").s().p("AmAAPIAAgdIMBAAIAAAdg");
	this.shape_108.setTransform(435.7,463.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B2A9A0").s().p("AmAAPIAAgdIMBAAIAAAdg");
	this.shape_109.setTransform(511.5,472.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B2A9A0").s().p("AmAAPIAAgdIMBAAIAAAdg");
	this.shape_110.setTransform(588,480.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#C3B48B","#B09E72","#9B8755","#937F4C"],[0,0.184,0.427,0.553],0,-18.4,0,18.5).s().p("AmsCtQgvgSAAgZQAAgWjUAaQj0AdgngFQhBgKAdgXQAcgWAwAAQA0AAB4gZQCIgcAbgbQAZgYi6ADQjQAIgiAAQguAAAGgpQAHgpAhgLQAcgJCxgQQCqgPA3AAIBrAaQB0AcAsAMQAxAOCjgHQCLgHBNgNQAogHAIgeQADgMAGgEQAKgFAbAEQAxAJETghIElgkQAeAAAvAbQAvAbgeAAQglAAi4APQjEAQguAJQguAKAeASQAZAPA6ALQAoAJDBgXQDVgaAKAAQAbAAARgIQADAAAAApQAAApjlAGQj2AAgiAGQglAIgoAoQgpAqgQAFQgaAIgkgFIhIgNQghgGimAAIi9ABQgZAAh1AwIhxAvQgXgEgYgIg");
	this.shape_111.setTransform(263.6,589.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#C3B48B","#B09E72","#9B8755","#937F4C"],[0,0.184,0.427,0.553],0,-17.5,0,17.6).s().p("ALUCuQgvgHoCggIoagiQgQgBAogTIBcgqQCHg/g+gQQg+gQh8gJIivgPQg7gIi5gkIitgjQAxgZHWAQQDyAJEpANIDbgBQCGAFgXAoQgMAXg+AqQgSAMABAHQABAJAcAJQAaAJB7ATQBgAQAXAXQAZAZCdgEQBPgBBKgHQgoAbgyAZQhXArgxAAIgPgBg");
	this.shape_112.setTransform(874.2,607);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#826B2A").s().p("AlUDEQihgMAmggQAfgbgNgMIgJgIQgDgHAKgJQAngngggcQgcgXhCgHQhygLhXghQhUgfAmgIQBvgZBVguIA/goQAeACENAyQEZAwB6gBQBkAAEMgIQDSgFgkAMQg4ARgNAHQgWAOAPAUQAHAJBRAgQBFAZgKAcQgNAjg7ARQg3ARhtAEQiCACg3ACQhdAEg9AXQhEAfgeAHQgrAMhzABQjMAAhigHg");
	this.shape_113.setTransform(177.5,530.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#826B2A").s().p("AldAhQgCghATgHQAOgGAXgNQAVgLAWgDIDqgXIAyAHQA4AIAWAFQATAEBaAKQBdAKATAEQAcAGgMATQgLAUgZAKQgdAMpqAMQgLAAgCgfg");
	this.shape_114.setTransform(459.9,524.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#C3B48B","#B19F73","#A39061","#9A8655","#94814E","#937F4C"],[0.031,0.145,0.259,0.38,0.502,0.639],-44.7,0,44.6,0).s().p("AkMAlQgPgDhLABQhPAAgJgBIAEggQAFggAIgDQAKgCGcgLQGegMAfACQAeAChHAzQhGAygXAAIkCAAIhjAFQhbAFgRAAQgdAAhOgUg");
	this.shape_115.setTransform(396.4,521.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#C3B48B","#B19F73","#A39061","#9A8655","#94814E","#937F4C"],[0.031,0.145,0.259,0.38,0.502,0.639],0,9.8,0,-9.7).s().p("ACXBeQg7gHgrgMQgygOhCAJQgaADmAgmQl/gmgPgHQgVgLgSgbQgXggATgQQV7BGAmABQASAACtAKQCsAKASAAQAXAAAAAGQABAHgJAlQgFAfhHgJQgrgGgxgQQgTgHhAALIhQAQQgaAFiJAAQiJAAgkAUQgNAHghAAQgWAAghgDg");
	this.shape_116.setTransform(261,519);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C17B65").s().p("AArAdIgYgGQgGgNgjABIgjAEIgIgfIBBgMQA/gDACAnQACAVgVAAIgDAAg");
	this.shape_117.setTransform(797.8,420.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C17B65").s().p("AgMKXIgIgNIAA0lIApAVIAAT8QAAAKgQAUQgFAIgEAAQgFAAgDgFg");
	this.shape_118.setTransform(802.3,486);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A09488").s().p("AwZKkIgEglQIHgJAqgIQAagFAqgbQAVgNAPgNQMQvPAVghQAVghBGhCQBRhNAwgTQA6gZB7gJQCEgKAyAZQAbANAQAvQAJAXACAVIgMAXQgUg+gRgRQgYgZiPAMQiXATgZABQgfADg4A1IgyA0IrvOmQimDEgZAMQgPAIgyALIgvAKg");
	this.shape_119.setTransform(708.1,480.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A09488").s().p("ADiLuIgVgQIm+3BIAVgQQHJXMAFAVQACAGgEAAQgEAAgKgGg");
	this.shape_120.setTransform(834.8,496.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B3ADA6").s().p("ATNNCIgKgLInP3bQjBgLhLgBQgvAAhqBCIhgBBQjXEVjdEXQm9IvgpAPQgqAQg6AKIgyAHInbAAIAAiaIAOgLQASgMAagFQAWgECZgEQCggDAbgEQAlgFBLhAQAmggAeggQMIuhBLhTQA4g+C5gfQC5gfBkAlQBTAfAvA3QAXAcAHAVIHgXhQABAHgEAHQgIANgbAAQgaAAgQgKg");
	this.shape_121.setTransform(733.8,485.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#DCB981").s().p("AA2AXQhHAAgWgBQhRgFAAgPQAAgQAIgBQAFgCAEADIBXgIIBKAEQBIAJgKAOQgLAQgXACIggAAg");
	this.shape_122.setTransform(814.5,440.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C8A976").s().p("AgoAQIhTgMIAAggIDmAAIAJAJQAIAMAAAPQAAAQgZAEQgHABghAAQgNAAhWgNg");
	this.shape_123.setTransform(814.8,443.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#DCB981").s().p("AA1AXQhHAAgWgBQhRgFAAgPQACgQAIgCQAEgBAEACIBXgIIBKAFQBJAJgLAPQgKAQgXACIgigBg");
	this.shape_124.setTransform(845.5,536.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C8A976").s().p("AgpAQIhTgMIAAggIDoAAIAJAJQAIANAAAOQAAAQgaAEQgIABghAAQgNAAhWgNg");
	this.shape_125.setTransform(846.1,539);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DCB981").s().p("AA1AXQhHAAgWgBQhRgFAAgQQABgOAIgDQAFgBAEADIBXgIIBKAEQBJAJgLAPQgKAQgXACIgigBg");
	this.shape_126.setTransform(839.3,516.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C8A976").s().p("AgoAQIhUgMIAAggIDoAAIAIAJQAJAMAAAPQAAAQgZAEQgIABgiAAQgNAAhVgNg");
	this.shape_127.setTransform(839.7,519.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#DCB981").s().p("AA1AWQhHAAgWgBQhRgEAAgPQABgQAJgCQAEgBAEACIBXgIIBKAGQBJAIgKAOQgLAQgXACIgigBg");
	this.shape_128.setTransform(833.1,497.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C8A976").s().p("AgoARIhUgNIAAggIDoAAIAIAJQAJAMAAAPQAAAQgaAEQgHABgiAAQgNAAhVgMg");
	this.shape_129.setTransform(833.6,500.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#DCB981").s().p("AA1AXQhHAAgWgBQhRgEAAgQQACgPAIgDQAEgBAEACIBXgHIBKAFQBJAIgLAOQgLAQgWACIgiAAg");
	this.shape_130.setTransform(826.8,478.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C8A976").s().p("AgoARIhUgNIAAggIDoAAIAIAJQAJANAAAOQAAAQgaAEQgHABgiAAQgNAAhVgMg");
	this.shape_131.setTransform(827.4,481.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#DCB981").s().p("AA2AXQhEAAgZgCQhRgDAAgQQAAgPAIgCQAEgBAEACIBXgJIBKAGQBJAIgKAOQgLAQgXACIggAAg");
	this.shape_132.setTransform(820.7,459.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C8A976").s().p("AgoAQIhUgMIAAggIDoAAIAIAJQAJANAAAOQAAAQgaAEQgHABgiAAQgNAAhVgNg");
	this.shape_133.setTransform(821.1,462.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A09488").s().p("ADhLuIgVgQIm+3BIAWgQQHJXMAFAVQACAGgEAAQgFAAgKgGg");
	this.shape_134.setTransform(816.5,487.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C7BFB7").s().p("ADFL0IgLgKInO3cIBKgLIHeXgQACAIgEAGQgIANgbAAQgaAAgQgKg");
	this.shape_135.setTransform(818.7,487);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C17B65").s().p("AgMLXIgIgNIAA2QIApgUIAAWPQAAAKgPAVQgGAHgEAAQgFAAgDgEg");
	this.shape_136.setTransform(790.5,474.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C17B65").s().p("AgMFfIgHgNIAAqfIAngVIAAKfQAAAKgPAVQgFAHgEAAQgEAAgEgEg");
	this.shape_137.setTransform(699.9,518.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C17B65").s().p("AAqAsIgbgGQgGgNgjgNIgjgKIAPgtIAxAUQAzAXAHAXQAGAVgWAAIgDAAg");
	this.shape_138.setTransform(707.6,500.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C17B65").s().p("AgMEeIgHgNIAAozIAnAVIAAIJQAAAKgPAVQgFAIgEAAQgEAAgEgFg");
	this.shape_139.setTransform(711.7,530);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#C3B48B","#B09E72","#9B8755","#937F4C"],[0,0.184,0.427,0.553],0,12.8,0,-12.8).s().p("ATMB/QgygXiLgnQivgyhOAAIn9ABQmtABgxgCQgtgDleAQQlyARgbAAQgqAAhNgNQhNgOggAAQgYAAgDgIQgDgIAPgLQAjgdA8gKIDtgMQD7gNBLAAQA7AAI1gbQI3gbBEAAQBdAACkAmQCTAjBPAiQBAAaARBEQAHAZgFARQgEAMgIAAIgHgBg");
	this.shape_140.setTransform(732.4,557);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D4866F").s().p("Ai/ATIAKgkIF1AAIAAAkg");
	this.shape_141.setTransform(773.6,391.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D4866F").s().p("Ai/ATIAKgkIF1AAIAAAkg");
	this.shape_142.setTransform(773.6,377.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D4866F").s().p("ACvD3IAAkaQgCgegIgiQgRhDgigRQgigRgrgIIglgFQgOABgWAEQgsAIghARQgiARgRBDQgJAigBAeIAAEaIgjAAIAAkXQACgkAKgpQAUhQApgVQAogUA1gKQAagFARgBIAsAGQA1AKAoAUQAoAUAVBRQAKAoACAlIAAEXg");
	this.shape_143.setTransform(773.6,384.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#C3B48B","#B19F73","#A39061","#9A8655","#94814E","#937F4C"],[0.031,0.145,0.259,0.38,0.502,0.639],-152.3,0,152.4,0).s().p("AQYBgQiMgMjSgcQiygXgMAAIkugPQkMgOhUALQg2AHh4ALQhYAIgwAKQg0ALnQgNQnZgQgrAAQg2AAAeg1IApg2IG7gJQHIgJBBAAQA0AAHAgJQG+gJA0AAQEAAAEkAbQHZAsALBaQAIA8jYAAQhqAAihgPg");
	this.shape_144.setTransform(544.1,527.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#FFE0BF","#FFDDB8","#FED4A5","#FDC689","#947F3A"],[0,0.133,0.345,0.58,1],0,134,0,-133.9).s().p("Ai0UoQjJgTmuhJQnBhMnzgzQo3g5h7gKQkPgWiuAFQioAGigAUQgyAGjXAhQlKAzlSgEQjsgCiBgWQhRgOg3gaQimhOiGihQh7iShIi5QhFiygCifQgBikBIhdQAegnAtgZQAYgNA4gWQAwgTAXgQQAhgYAPgoQAuh8hWjOQgzh5hfiQIhviXQglg1ALglQANgxBagfQBqgmEJgkQD6ghCwgNQBZgGAmABQIaAHHrAjQD1ASCJAQQH0A7KhAXQT7AqRRiKIN5gCQPIAGGSArQDVAYEKAlQDPAYDSgHQCPgFC8gUQDXgWAygDQCFgJBhAPQB0ASBsA3QAHADANAHQB6BFA2C5QAbBfAEBhQACBRgTBAQgNArggA8QgoBJgNAeQgcBDgKBQQgPB0AXBxQAPBIApBoQAnBkAGAjQAMBBghAsQgkAxhOAMQgpAGh2gFQhxgEg/AMQhiARhDA7QgwArgVA2QgPAngHBAQgJBagDASQgMA+geAwQhRCEjaAoQiyAhljgTQnNgjkVgTQn9ghmYAHQl6AHkxApQiNATkxA7QjuAuimALQhUAFheAAQiuAAjPgTg");
	this.shape_145.setTransform(526.3,643.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#FFFFFF","#FDFEFF","#92E0F9","#43C9F5","#13BBF2","#00B6F1","#0072BC"],[0,0.004,0.247,0.443,0.58,0.647,1],0.2,272.4,-0.1,-272.3).s().p("EhGCAvSQjYgmiFhGQiJhIgNhXQgFgdATgxQAUg2gDg2QgFhchKhcQgug1gYgfQgrg4geg4QhDiAgTiWQgWipAziBQAghPBKg9QAkgeAPgSQAZgfAOgsQAUg/gNhBQgKgyglhSIhMipQgwh0ggh3Qg4jUgLhsQgTi3A6iKQAchBAsg1QAYgcA2gwQAvgrAUgcQAfgsAJg5QALhDgVhBQgNgpgohGQgqhLgPgnQgahEAEhHQADhIAhg6QAYgsA3g3QBBg/AigmQA9hBAnhFQBWiYgBjBQgBh9gvjVQgzjlgFhUQgJijBIhpQArg/A/gWQAvgQB1gHQC2gLBagLQDJgXDig4QCOgjCSgvIDOhEQDCg8C5ANQBoAIBQAXQAvAOBKAhQBIAgAtANQBKAVBiAEQCMAFB1ggQBGgTB3g3QB5g3BJgVQB7giCUACQBfABBTAQQAdAGBlAaQCVAnCggTQBGgJCsgqQB7gfBxAGQB8AHB3AuQBDAaCFA3QBvAlBegCQBIgBBrgdIDag4QCZghCqgKQCjgKCVANQA8AFCzAaQCNAUBoACQCWAEC1gZQBugQBfgaQBsgeBigRQDRgkEBAHQGrAKJYB4QI/ByC4A7QEIBVA1B7QAuBqgaCAQgNBDhEC2QhDCzgXB9QgkDCAeDLQARB3AoByQAIAXA9CXQAlBdALBBQAPBYgTBiQgUBtg3BeQggA3hIBZQhDBSgWAsQglBIAGBOQAGBVA1BDQAgAqBXBGQBeBMArAwQBKBTAlBpQAiBhgHBdQgFBFgjBwQg2CsgMAvQgmCUgMCeQgQDVAeDaQATCDAxDHQAsCvAEA+QAIBmg1AzQhcBYlSArQhmANh5AIQhhAGgBABIgEAFIgKADIAAAJQgPAFgZABIgxACQhfAFi+gTQi7gTh0AIQgvADiCAoQhwAjhkgHQiVgMi4gfIk4g5Ql+hEkQANQiZAIjcA5QjlA8iFAKQieAMiwgOQhmgIjKgcQjCgbhmgHQikgLiPAPQhmAMjKAvQjEAuiKANQheAJhwgMQg+gHiLgYQkOguinAPQheAJi6A7Qi2A6h3AJQiTALiMgRQhXgLiTgiQiUgihNgKQiEgRiGAMQh7AKhsApQiTA3iIAdQkGA4kUAFIg0AAQjiAAjIgig");
	this.shape_146.setTransform(530.2,306.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.instance,this.shape_5,this.shape_6,this.instance_1,this.shape_7,this.shape_8,this.instance_2,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.instance_15,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.instance_15},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_2},{t:this.shape_8},{t:this.shape_7},{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(56.2,95.4,960,590), null);


(lib.ClipGroup_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABxCVQABgGgggDQgagDg2gBQgsAAgjAEQgjADAAAFQghgOgVgVQgfgeAAgmIACgNIACgNIAEgNIAegyIATgXIATgWIA6g3QAHgGA5AAQA4AAAHAGIAoAlIAwA1IAZAlIANAZIAEANIAEAYIgCAPIgBAIIgDAKIgHAOIgJAMIgKALIgRAOIgSAMIgUAKg");
	mask.setTransform(19.8,15.2);

	// Layer_3
	this.instance = new lib.Group_1_62();
	this.instance.parent = this;
	this.instance.setTransform(20.1,15.1,1,1,0,0,0,19.8,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59, new cjs.Rectangle(0.3,0.1,39.4,30.2), null);


(lib.ClipGroup_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRCVQgVgCgIgDIgKgFIgdgRIgWgUIgOgSIgHgNIgFgQIgBgRIAAgCIABgMQAIgvA9hCQAfgjAhgbQAAADASACQATACAbAAQBAAAABgHIgBgBIAgAcIA5A+IAaAmIAMAZIAHAZIABAMIgBAPIgFASIgDAHIgNATIgFAFIgLALIgdAUIgVALQgHADgZADQgfADgxAAQgtgBgjgDg");
	mask.setTransform(19.9,15.3);

	// Layer_3
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(19.9,15.3,1,1,0,0,0,19.9,15.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58, new cjs.Rectangle(0,0,39.9,30.5), null);


(lib.ClipGroup_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWAAQABgBAVgBQAXABAAABQgBADgWAAQgWAAAAgDg");
	mask.setTransform(2.3,0.3);

	// Layer_3
	this.instance = new lib.Group_1_0();
	this.instance.parent = this;
	this.instance.setTransform(2.3,0.2,1,1,0,0,0,2.3,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57, new cjs.Rectangle(0.2,0,4.2,0.4), null);


(lib.ClipGroup_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56, null, null);


(lib.ClipGroup_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACtACQhGgHhjABQhjgBhIAGQhIAIgCAKIAAgNQACgKBIgHQBHgHBkgBQBkABBFAHQBFAIAAAJIAAANQAAgKhFgHg");
	mask.setTransform(24.2,2);

	// Layer_3
	this.instance = new lib.Group_1_2();
	this.instance.parent = this;
	this.instance.setTransform(24.3,1.9,1,1,0,0,0,24.3,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55, new cjs.Rectangle(0.1,0,48.4,3.9), null);


(lib.ClipGroup_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEABIAAgBIAEAAIAFAAIAAABIgFAAIgEAAg");
	mask.setTransform(0.5,0.1);

	// Layer_3
	this.instance = new lib.Group_1_3();
	this.instance.parent = this;
	this.instance.setTransform(0.7,0.1,1,1,0,0,0,0.7,0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54, new cjs.Rectangle(0.6,0.1,0.1,0.2), null);


(lib.ClipGroup_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhEAHQgbgDABgEQABgDAcgDQAdgDAmAAQAnAAAbADQAcADgBADQgBAEgcADQgcADgnAAQgnAAgcgDgAgWAGQAAADAWAAQAWAAABgDQAAgCgXAAQgVAAgBACg");
	mask.setTransform(9.5,1);

	// Layer_3
	this.instance = new lib.Group_1_4();
	this.instance.parent = this;
	this.instance.setTransform(9.5,1,1,1,0,0,0,9.5,1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53, new cjs.Rectangle(0,0,19,2), null);


(lib.ClipGroup_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhEAHQgbgDABgEQABgDAcgDQAdgDAmAAQAnAAAbADQAcADgBADQgBAEgcADQgcADgnAAQgnAAgcgDgAgWAGQAAADAWAAQAWAAABgDQAAgCgXAAQgVAAgBACg");
	mask.setTransform(9.5,1);

	// Layer_3
	this.instance = new lib.Group_1_5();
	this.instance.parent = this;
	this.instance.setTransform(9.5,0.9,1,1,0,0,0,9.5,0.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52, new cjs.Rectangle(0,0,19,1.8), null);


(lib.ClipGroup_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAHIgEAAIAAgMQAAgBAEAAIAFABIAAAMIgFAAg");
	mask.setTransform(0.5,0.7);

	// Layer_3
	this.instance = new lib.Group_1_6();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51, null, null);


(lib.ClipGroup_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAHIgEAAIAAgMQAAgBAEAAIAFABIAAAMIgFAAg");
	mask.setTransform(0.5,0.7);

	// Layer_3
	this.instance = new lib.Group_1_7();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.7,1,1,0,0,0,0.5,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50, new cjs.Rectangle(0,0,1.1,1.5), null);


(lib.ClipGroup_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49, null, null);


(lib.ClipGroup_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48, null, null);


(lib.ClipGroup_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAHIAAgMIAAgBIABABIAAAMg");
	mask.setTransform(0.1,0.7);

	// Layer_3
	this.instance = new lib.Group_1_10();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47, null, null);


(lib.ClipGroup_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgDATQhjAAhGgHQhFgIAAgJIAAgNQAAAKBFAHQBFAGBkABQBjAABIgGQBIgIACgKIAAAOQgCAJhIAHQhEAHhcAAIgLAAg");
	mask.setTransform(24.2,1.9);

	// Layer_3
	this.instance = new lib.Group_1_11();
	this.instance.parent = this;
	this.instance.setTransform(24.2,1.9,1,1,0,0,0,24.2,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46, new cjs.Rectangle(0,0,48.4,3.9), null);


(lib.ClipGroup_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45, null, null);


(lib.ClipGroup_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAHIAAgNIABAAIAAANg");
	mask.setTransform(0.1,0.7);

	// Layer_3
	this.instance = new lib.Group_1_13();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44, null, null);


(lib.ClipGroup_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEAHIAAgNIAEABIAFgBIAAANIgFAAIgEAAg");
	mask.setTransform(0.5,0.7);

	// Layer_3
	this.instance = new lib.Group_1_14();
	this.instance.parent = this;
	this.instance.setTransform(0.4,0.7,1,1,0,0,0,0.4,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43, new cjs.Rectangle(0,0,0.7,1.4), null);


(lib.ClipGroup_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEAHIAAgNIAEABIAFgBIAAANIgFAAIgEAAg");
	mask.setTransform(0.5,0.7);

	// Layer_3
	this.instance = new lib.Group_1_15();
	this.instance.parent = this;
	this.instance.setTransform(0.8,0.7,1,1,0,0,0,0.8,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, new cjs.Rectangle(0.6,0,0.5,1.4), null);


(lib.ClipGroup_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAMAFIgBAAIgGgCIgOgFQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIASAHQAAACAHABg");
	mask.setTransform(1.3,0.6);

	// Layer_3
	this.instance = new lib.Group_1_16();
	this.instance.parent = this;
	this.instance.setTransform(1.3,0.6,1,1,0,0,0,1.3,0.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(0,0,2.5,1.1), null);


(lib.ClipGroup_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHgBQgBAAAAgBQgBAAAAgBQgBAAAAAAQAAgBAAAAIASAGQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAg");
	mask.setTransform(1.1,0.5);

	// Layer_3
	this.instance = new lib.Group_1_17();
	this.instance.parent = this;
	this.instance.setTransform(1.3,0.6,1,1,0,0,0,1.3,0.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(0,0,2.2,1), null);


(lib.ClipGroup_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABfAIQABgEgcgDQgbgCgnAAQgmAAgdACQgcADgBAEIgTgIQABgEAigDQAhgDAvAAQAvAAAhADQAhAEgBAEIgDACQgMAGgJACQAFgBAAgCg");
	mask.setTransform(11.4,1.1);

	// Layer_3
	this.instance = new lib.Group_1_18();
	this.instance.parent = this;
	this.instance.setTransform(11.4,1.1,1,1,0,0,0,11.4,1.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(0,0,22.9,2.3), null);


(lib.ClipGroup_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABfAJQABgEgcgDQgbgCgnAAQgmgBgdACQgcADgBAEIgTgHQABgEAigEQAfgDAxAAIAAAAQAsAAAkAEQAhADgBAEIgDADIgHADIgIADIgEABQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAg");
	mask.setTransform(11.4,1.1);

	// Layer_3
	this.instance = new lib.Group_1_19();
	this.instance.parent = this;
	this.instance.setTransform(11.4,1.1,1,1,0,0,0,11.4,1.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(0,0,22.9,2.2), null);


(lib.ClipGroup_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhXABIgWgHQAWAIBXAAQBWAAAXgHIABAAIgBAAIgSAGQgWAGhFAAQhCAAgVgGg");
	mask.setTransform(11,0.7);

	// Layer_3
	this.instance = new lib.Group_1_20();
	this.instance.parent = this;
	this.instance.setTransform(11.2,0.7,1,1,0,0,0,11.2,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(0.2,0,21.9,1.5), null);


(lib.ClipGroup_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABxCVQABgGgggDQgagDg2gBQgsAAgjAEQgjADAAAFQghgOgVgVQgfgeAAgmIACgNIACgNIAEgNIAegyIATgXIATgWIA6g3QAHgGA5AAQA4AAAHAGIAoAlIAwA1IAZAlIANAZIAEANIAEAYIgCAPIgBAIIgDAKIgHAOIgJAMIgKALIgRAOIgSAMIgUAKg");
	mask.setTransform(19.8,15.2);

	// Layer_3
	this.instance = new lib.Group_1_21();
	this.instance.parent = this;
	this.instance.setTransform(20.1,15.1,1,1,0,0,0,19.8,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(0.3,0.1,39.4,30.2), null);


(lib.ClipGroup_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, null, null);


(lib.ClipGroup_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgMgZQACgBAKAAQALAAACABQAAARAzAjQgJgFg2AAQg3AAgJAFQAzgjAAgRg");
	mask.setTransform(6.4,2.7);

	// Layer_3
	this.instance = new lib.Group_1_23();
	this.instance.parent = this;
	this.instance.setTransform(6.5,2.8,1,1,0,0,0,6.5,2.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(0.1,0,12.8,5.5), null);


(lib.ClipGroup_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAKgCIAIgKIAEgHIABgEIAAgBIABAAQAAAQgvAhg");
	mask.setTransform(2.8,2.5);

	// Layer_3
	this.instance = new lib.Group_1_24();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, null, null);


(lib.ClipGroup_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, null, null);


(lib.ClipGroup_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, null, null);


(lib.ClipGroup_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, null, null);


(lib.ClipGroup_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAdQgKAAgBACIgBAAQAAgRg2glQABgDAUgCQAUgCAaAAQAcAAATACQATADAAADQg2AkAAARQgBgCgMAAg");
	mask.setTransform(6.7,3.1);

	// Layer_3
	this.instance = new lib.Group_1_28();
	this.instance.parent = this;
	this.instance.setTransform(6.7,3.1,1,1,0,0,0,6.7,3.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, new cjs.Rectangle(0,0,13.4,6.1), null);


(lib.ClipGroup_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAwCTQgTgCgcAAQgaAAgUACQgUACgBADQiDhoAAhiIABgHIABgGIAGgNIAJgLIAKgLIATgPIANgJIATgLIAUgKQARgIBUAAQBRAAARAIIAbAOIAmAaIAQAQQAEAEAFAIQAEAHACAFQACAIAAAFIgBATIgFAXQgCAMgEAFIgOAeQgEAJgJAMIgRAWIgVAWIg2AwQABgDgUgCg");
	mask.setTransform(19.8,15.2);

	// Layer_3
	this.instance = new lib.Group_1_29();
	this.instance.parent = this;
	this.instance.setTransform(19.8,15.3,1,1,0,0,0,19.8,15.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(0,0,39.6,30.5), null);


(lib.ClipGroup_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, null, null);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, null, null);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, null, null);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_33();
	this.instance.parent = this;
	this.instance.setTransform(6.8,12.8,1,1,0,0,0,6.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0.5,4.6,12.6,16.5), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, null, null);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAACIAAgDIABAAIAAADg");
	mask.setTransform(0.5,0.2);

	// Layer_3
	this.instance = new lib.Group_1_35();
	this.instance.parent = this;
	this.instance.setTransform(0.8,68.8,1,1,0,0,0,0.8,68.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, null, null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAACIAAgDIABAAIAAADg");
	mask.setTransform(0.1,0.2);

	// Layer_3
	this.instance = new lib.Group_1_36();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, null, null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAACIAAgDIABAAIAAADg");
	mask.setTransform(0.1,0.2);

	// Layer_3
	this.instance = new lib.Group_1_37();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, null, null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, null, null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, null, null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAACIAAgEIABAAIAAAEIgBABg");
	mask.setTransform(0.1,0.3);

	// Layer_3
	this.instance = new lib.Group_1_40();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, null, null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAACIAAgEIABAAIAAAEIgBABg");
	mask.setTransform(0.1,0.3);

	// Layer_3
	this.instance = new lib.Group_1_41();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, null, null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, null, null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, null, null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_44();
	this.instance.parent = this;
	this.instance.setTransform(4,3.6,1,1,0,0,0,4,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(2.6,1.9,2.8,3.5), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, null, null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAYQA0glAAgRIAAAAQACACAKAAQALAAACgCQAAARA0AlQgBAGhAABQhAgBAAgGg");
	mask.setTransform(6.5,3.1);

	// Layer_3
	this.instance = new lib.Group_1_46();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.1,1,1,0,0,0,6.5,3.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0,13,6.1), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Group_1_47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, null, null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCCNIg2gwIgLgLIgigsIgRgeIgHgSIgHgjIgBgQIABgHQAEgZAkgbQAXgRAfgPQAAAFAdADQAeADAqAAQAqAAAegDQAfgDABgEIgBgCIAZANIAmAaQALAJAFAHQAHAHACAEQAEAHACAGIACANIgBATIgHAgIgEAJIgOAdIgNAUIgRAWIgVAXIgZAYIgeAYQgFAGg9AHQg9gGgFgHg");
	mask.setTransform(19.8,15.5);

	// Layer_3
	this.instance = new lib.Group_1_48();
	this.instance.parent = this;
	this.instance.setTransform(19.8,15.2,1,1,0,0,0,19.4,15.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0.4,0.1,38.8,30.3), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAACIAAgDIABAAIAAADIAAAAIgBAAg");
	mask.setTransform(0.5,0.2);

	// Layer_3
	this.instance = new lib.Group_1_49();
	this.instance.parent = this;
	this.instance.setTransform(0.8,35,1,1,0,0,0,0.8,35);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0.6,0,0.1,0.4), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACtACQhGgGhjgBQhkAAhHAHQhIAHgCAKIAAgOQACgJBIgHQBIgIBjABQBjAABGAHQBFAIAAAJIAAANQAAgKhFgHg");
	mask.setTransform(24.2,1.9);

	// Layer_3
	this.instance = new lib.Group_1_50();
	this.instance.parent = this;
	this.instance.setTransform(24.3,1.9,1,1,0,0,0,24.3,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.1,0,48.4,3.9), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAAAEIAAgIIABAAIAAAIg");
	mask_1.setTransform(0.1,0.5);

	// Layer_3
	this.instance_1 = new lib.Group_1_51();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, null, null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance_1 = new lib.Group_1_52();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, null, null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance_1 = new lib.Group_1_53();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, null, null);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAAAEIAAgIIABAAIAAAIg");
	mask_1.setTransform(0.1,0.5);

	// Layer_3
	this.instance = new lib.Group_1_54();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, null, null);


(lib.ClipGroup_2_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAIFXQgEgDgIABQgGABgBABIACqrQAAgBAGgBQAJgBAEACIACABIgCKrg");
	mask_1.setTransform(1.2,34.3);

	// Layer_3
	this.instance = new lib.Group_1_59();
	this.instance.parent = this;
	this.instance.setTransform(1.4,34.3,1,1,0,0,0,1.4,34.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1_1, new cjs.Rectangle(0.4,0,1.9,68.7), null);


(lib.ClipGroup_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAJFWQgGgCgHABQgGABgBABIACqrQAAgBAGgBQAJgBAEACIACABIgCKrg");
	mask_1.setTransform(1.2,34.4);

	// Layer_3
	this.instance = new lib.Group_1_56();
	this.instance.parent = this;
	this.instance.setTransform(1.3,34.4,1,1,0,0,0,1.3,34.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_1, new cjs.Rectangle(0.3,0.1,2,68.7), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgMAaQAAgRg1gjQAJAFA4AAQAXABAUgCQATgCAEgCQg1AjAAARQgCABgLAAQgKAAgCgBg");
	mask_1.setTransform(6.6,2.7);

	// Layer_3
	this.instance = new lib.Group_1_55();
	this.instance.parent = this;
	this.instance.setTransform(6.6,2.7,1,1,0,0,0,6.6,2.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(0,0,13.3,5.5), null);


(lib.ClipGroup_1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAAFWIAAqsIABABIgBKsIAAgBg");
	mask_1.setTransform(0.1,34.3);

	// Layer_3
	this.instance_1 = new lib.Group_1_60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,34.3,1,1,0,0,0,0.1,34.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1_1, new cjs.Rectangle(0,0,0.3,68.6), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAAFWIAAqsIABABIgBKsIAAgBg");
	mask_1.setTransform(0.1,34.3);

	// Layer_3
	this.instance_1 = new lib.Group_1_57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,34.3,1,1,0,0,0,0.1,34.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,0.3,68.6), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgKFWIACqsQAFACAIgBQAGAAAAgCIgBKsQAAACgHAAIgGABQgEAAgDgCg");
	mask_1.setTransform(1.1,34.4);

	// Layer_3
	this.instance = new lib.Group_1_61();
	this.instance.parent = this;
	this.instance.setTransform(0.9,34.4,1,1,0,0,0,0.9,34.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0.1,1.9,68.6), null);


(lib.ClipGroup_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgKFWIACqrQAFACAIgBQAGgBAAgBIgBKrQAAABgHABIgFAAQgFAAgDgBg");
	mask_1.setTransform(1.1,34.3);

	// Layer_3
	this.instance_16 = new lib.Group_1_58();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0.9,34.4,1,1,0,0,0,0.9,34.4);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60, new cjs.Rectangle(0,0.1,1.8,68.6), null);


(lib.ans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.027)").s("#333333").ss(1,1,1).rr(-41.95,-32.3,83.9,64.6,5.6);
	this.shape.setTransform(0.2,-0.2,0.864,0.787);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s("#0063FF").ss(1,1,1).rr(-41.95,-32.3,83.9,64.6,5.6);
	this.shape_1.setTransform(0,-0.2,0.864,0.787);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlOEGIAAoLIKdAAIAAILg");
	this.shape_2.setTransform(-0.2,-0.1);

	this.instance = new lib.correct();
	this.instance.parent = this;
	this.instance.setTransform(0.8,-0.6,1,1,0,0,0,34,25.7);

	this.instance_1 = new lib.wrong();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,-1.7,1,1,0,0,0,34,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-26.6,74.4,52.9);


(lib.girrafe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDBB6B").ss(1,0,0,4,true).p("AAAgRQAKAKgEAZQgKABgCgPQgCgOAIgHg");
	this.shape.setTransform(5.2,16.7,0.039,0.039,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDBB6B").s().p("AgGAEQgCgOAIgHQAKAKgEAZIgBAAQgJAAgCgOg");
	this.shape_1.setTransform(5.2,16.7,0.039,0.039,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FEBF02").ss(1,0,0,4,true).p("EA+jBKYQgCjigBhyQgWnzgollQgqllg3kRQhElPhjkXQhxk6iZjUQgVgZAAghQAAgiAVgZQBHheAXghQA1hIAkg6QABgBAyhQQAegwAOgjQARgUARgiQAKgTASgmQCUkkBKlJQANgqgXgqIgjAEQgXAbgVAuQgMAagYA1QhbC+iHDBQgPAWgwA+QgoA0gUAiQgWASgcAjQgkAugLALQhIBQglAoQhBBFg1ArQgVAUghgDQgbgDgbgRQi+hujwhfQi7hLkHhSQjNg/j/hGQikgtkrhOQmMhqhegbQkThOjPhNQiYg7hjgvQiFhBhjhLQgzglg0g7Qgigng2hIQh+ithYiOQlRoZjXqDQjJpahXqeQgOhpgMiMQgOikgHhSIgGA1QgJgwAAg8QAAgkADhHIAMAYQA6lTgKkSQgHh+gOhTQgThygmhZQgCgEgRgiQANgbAegcQARgQAlgdQAWgNAlgPQhVgug1h8QgCAhgcAdQgMAMgrAfQgbAWgmgCQgjgBgegVQhig/hsgpQgXgKgKgGQgTgLgDgRQgLgsAOg6QAVhDAKghQg/gMgigJQg1gNgqgQQAHBrgvBqQgSAbgoAEQgvgCgVAAQgjAUg7AQQhQAVgRAHQhEAbgjAMQg9AXgugCQgFAXgaAQQgfAPgPAIQohEXo3H0QgnAjgMAPQgFAHghA2QATgGA5gXQAvgTAegIQCVggB3AXQBlAIB0AqQDXBLDaCIQBIAsBpBJQCdBtASAMQCWBmBGAzQB6BXBaBOQA/A5AlAnQA0A2AiA1QAvA9AbBJQAaBKACBMQAEBDgTBLQgPA8ggBMIgDAKQAagUAeg7QAcg5AegTQABgkATgiQAhhCAnhhQAqhvAWg3QAKgtAXg8QALADAVAHQASAIAHAOQAOAYAEAlQACAWACArQAXBCAFA4QAOBpAeCTQARBUAkCnQBWFbBQDuQASAqAiBkQAfBdAWAxQAGANA7CSQAmBgAgA8QAOAbAoBZQAhBIAZApQCpE9B/C7QA1BYAxA6QAdAjA0BLQAwBBAsAhQC3ChEfBtQA8AcBVAeQAxARBiAgQDiBJFFBXQC4AxFyBhQBBAUCtAuQCXAoBWAcQEXBRCpA+QDzBYC6BmQApAYBTAtQBJApAtAmQCMBsBpC7QBDBzA0CPQArB3AmCZQAgB+AWCaQAQBuARCtQAJBOADBqQABA+AAB7QAACpgCAyQgDB8gLBfQgGApgLBTQgMBHgVAxQgVgDg4gXQgvgTggAEQiYALhogOQiMgThihBQhrhGgohnQgXg1gHgOQgTglgZgVQhthhiCgtQjHhHj/gqQisgcklgcQj1gRgTgBQiWgJhyABQoCgbnwA5QgiACi+AXQiIAQhZAAQhQgFhZgdQhHgXhZgrQgjgPgzgiQg/gqgUgLQg7g2gdgbQgzgwgggnQhChKhDhkQgvhFhFh1QgahCg4hxQg4h6g6ilQgZg+gdhjQgqiNgIgXQgNgwgThVQgWhggJgmQgGghgdiPQgWhtgJhFQgxkCgxmmQgDgvgSiwQgNiJgDhWQgRklgIiTQAAg+gHiFQgHh/AChFQgJiaAAjiQABj9gBh/QAGi+AChgQAEimgFh4Qg0BVgOATQgmA6gmAmQgIBVAAB+QAABHABCMQgBA3ACBuQADBtgCA3QAKBoAECOQABBSACCkQAAAFAMBxQAIBIgOAvQAQFGAmGoQANCPA8JeQAJBBASCCQAPByAIBTQAcD1AtE/QAPBtBBHFQADATATBpQANBMAHAxQAFAqARBgQAQBZAFAxQAFAeBCGAQAqD5AfCkQAEAaAKA0QAJAuAAAgIARASQALAKgDAbQgFAlAKAzQAFAeAMA6QANBDAZCHQAWB3ASBUQAHAkAWAaQAZAcAjADQClAZDXg3QArgOAIgDQAdgNAQgRQAJglADg4QABg+ABgfQAWlBArjgQAYh1AYhRQAghqAqhUQAfg5AegjQAngvAwgUQAdgOAugDQAagBA0gCQgFgMgPgBQgSAAgIAAQAUgDAiAEQAnAEAOAAQB/AAA/gFQA5gFBwAAQByAAA4gFQA9gEBUgBQAxgBBhAAQAqAACUgDQB1gCBIADQBKABCTABQB/ACBeAIQBagBB9AJQBHAFCPAMQC/AVBzATQCnAdCDAsQBWAeA0AfQBHArAlA6QAZAsATBBQAMAlAUBMQAtCvAhDPQAbCnAYDdQADAZAEA0QAEAtALAfQAPALAZACQAOABAdAAQBtgEANgBQBGgEAzgOQANguAKhHIAQh2QAUiBAPhIQAYhvAhhVQAXgxAEgHQASgfAagMQAYgOAdANQAbANAMAaQAXA0AMBGQAGAiAKBdQADA4AGByQAEBjgFBHQABAOgBAgQAEAbATAKQAeAHAtAAQAZAAAzAAQAhgBBCABQA6AAApgMQAPgxgChGgEgX6g1HQgDAmgIAwQgDATgNBCQgcCmgcBuQgnCVg3B0QgcA3gfAaQgLAJgRgEQgOgDgOgKQgZgTghghQgkglgTgSQhyh0g6g5QhmhmhMhBQgkgnhAgzQhZhIgPgOQgWgTgpgcQgvghgRgNQg1gqhHgtQgugdhVgxQkkipk9g0QgrgKhEgCQhegDgTgCQgdgBgQgiQAcgnAagTQCQh0BJg5QEGi7DKh3QAhgUAjgDQAvgwA9gOQBBgsBegoQAggOCJg0QBegfAygNQBRgVBEgFQA9gGAgAAQA0AAAoANQCtA2CHBXQBwBWArBZQAqBQAQBuQAKBGADCAQACBwgKCLQgGBUgSClg");
	this.shape_2.setTransform(-0.4,0.5,0.039,0.039,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEBF02").s().p("EAufBM+QgZgCgOgLQgLgfgFgtIgHhNQgYjdgainQgijPgtivQgUhMgLglQgUhBgYgsQglg6hIgrQgzgfhWgeQiEgsingdQhzgTi+gVIjXgRQh9gJhaABQhegIh+gCIjdgCQhJgDh1ACQiUADgqAAIiRABQhVABg9AEQg3AFhyAAQhxAAg4AFQhAAFh+AAQgOAAgogEQghgEgUADIAaAAQAOABAGAMIhOADQguADgeAOQgvAUgoAvQgeAjgfA5QgqBUgfBqQgYBRgYB1QgrDggWFBIgDBdQgCA4gKAlQgQARgcANIgzARQjXA3imgZQgjgDgYgcQgXgagGgkQgShUgXh3IgljKIgShYQgJgzAEglQADgbgLgKIgQgSQgBgggIguIgPhOQgeikgrj5IhGmeQgGgxgPhZQgRhggGgqQgGgxgOhMIgVh8IhRoyQgsk/gdj1QgHhTgPhyIgcjDQg8pegNiPQgmmogPlGQANgvgHhIIgNh2IgDj2QgDiOgKhoQABg3gChtQgDhuABg3IAAjTQgBh+AJhVQAlgmAng6QANgTA0hVQAGB4gECmIgIEeQABB/gCD9QAADiAKCaQgCBFAHB/QAHCFgBA+IAZG4QADBWAOCJQARCwAEAvQAwGmAxECQAKBFAWBtIAiCwQAKAmAVBgQAUBVANAwIAxCkQAeBjAZA+QA5ClA5B6QA3BxAaBCQBGB1AuBFQBDBkBDBKQAgAnAyAwIBZBRQATALBAAqQAzAiAiAPQBZArBHAXQBaAdBQAFQBYAACJgQQC+gXAhgCQHxg5ICAbQBygBCWAJIEHASQElAcCtAcQD+AqDHBHQCCAtBtBhQAZAVAUAlQAHAOAXA1QAnBnBsBGQBiBBCMATQBoAOCXgLQAggEAvATQA5AXAVADQAVgxALhHIARh8QAMhfADh8QABgyABipIgCi5QgChqgKhOQgRitgQhuQgWiaggh+QgmiZgrh3Qg0iPhDhzQhoi7iMhsQgugmhIgpQhTgtgpgYQi7hmjzhYQipg+kWhRQhXgciXgoQisguhCgUIoqiSQlEhXjihJIiUgxQhVgeg7gcQkghti2ihQgsghgxhBQgzhLgdgjQgxg6g2hYQh/i7ipk9QgYgpghhIQgphZgNgbQggg8gnhgIhAifQgWgxgghdQgihkgRgqQhRjuhVlbQgkingRhUQgfiTgNhpQgGg4gWhCQgCgrgDgWQgEglgOgYQgHgOgRgIIgggKQgXA8gKAtIhBCmQgmBhgiBCQgSAigCAkQgdATgdA5QgeA7gZAUIACgKQAhhMAPg8QAShLgEhDQgBhMgbhKQgahJgvg9Qgig1g1g2QgkgnhAg5QhahOh5hXQhHgziWhmIiuh5QhqhJhHgsQjbiIjWhLQh1gqhkgIQh3gXiVAgQgeAIgvATQg6AXgSAGIAmg9QAMgPAmgjQI4n0IhkXIAugXQAZgQAGgXQAuACA9gXIBngnQARgHBQgVQA7gQAigUIBFACQAogEASgbQAuhqgGhrQApAQA2ANQAiAJA+AMIgfBkQgOA6ALAsQAEARASALQALAGAXAKQBrApBjA/QAeAVAjABQAmACAbgWQAqgfANgMQAcgdABghQA1B8BWAuQglAPgXANQglAdgRAQQgeAcgNAbIAUAmQAlBZATByQAOBTAIB+QAKESg6FTIgMgYQgEBHABAkQAAA8AIAwIAGg1IAVD2QANCMAOBpQBWKeDJJaQDXKDFRIZQBYCOB+CtQA2BIAjAnQAzA7A0AlQBjBLCFBBQBiAvCZA7QDOBNEUBOQBeAbGLBqQErBOCkAtQEABGDMA/QEHBSC8BLQDvBfC+BuQAbARAcADQAhADAVgUQA1grBAhFQAlgoBIhQQALgLAlguQAcgjAWgSQATgiApg0QAvg+APgWQCIjBBbi+IAjhPQAWguAWgbIAkgEQAWAqgMAqQhKFJiUEkIgdA5QgRAigRAUQgOAjgeAwIgyBRQglA6g0BIIheB/QgWAZABAiQAAAhAVAZQCYDUByE6QBjEXBDFPQA3ERArFlQAoFlAWHzIADFUQACBGgQAxQgoAMg6AAIhkAAIhMAAQgsAAgfgHQgTgKgDgbIAAguQAEhHgEhjIgIiqQgKhdgGgiQgMhGgYg0QgLgagbgNQgdgNgZAOQgZAMgTAfQgEAHgXAxQghBVgYBvQgPBIgUCBIgQB2QgJBHgOAuQgzAOhFAEIh7AFIgrgBgEgithIDQhDAFhRAVQgyANhfAfQiIA0ggAOQheAohCAsQg8AOgwAwQgjADggAUQjLB3kGC7IjYCtQgbATgbAnQAQAiAdABQASACBeADQBFACArAKQE8A0ElCpQBVAxAtAdQBHAtA2AqQAQANAwAhQAoAcAWATQAPAOBaBIQBAAzAkAnQBMBBBmBmICsCtQATASAkAlQAgAhAaATQAOAKANADQARAEAMgJQAegaAcg3QA4h0AmiVQAdhuAbimIAQhVQAJgwACgmQASilAHhUQAKiLgDhwQgDiAgKhGQgQhugphQQgshZhwhWQiGhXitg2QgogNg0AAQggAAg+AGg");
	this.shape_3.setTransform(-0.4,0.5,0.039,0.039,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F08F6C").ss(1,0,0,4,true).p("AgHADIASgHIgCAIIgJAEg");
	this.shape_4.setTransform(-9.7,9.8,0.039,0.039,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F08F6C").s().p("AgJABIATgHIgCAIIgJAFg");
	this.shape_5.setTransform(-9.7,9.8,0.039,0.039,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#7B0108").ss(1,0,0,4,true).p("AihhtQApg5AdgXQgEAWgNAaQgCADgXApQADACAOAJQAKAGAIABQAQgFAqgVQAKAIAUARQARAPAPAFQAJgDAMgIQAMgIAHgFIAbA+QAqg2AHgKQARANAhAYQAPBCgNBUQgGAigSAaQgUAdggAFQgpAIgxgTQgcgLg1ggQg7gngUgSQgqglgNgrQgRgyAvg/g");
	this.shape_6.setTransform(-7.8,10.5,0.039,0.039,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7B0108").s().p("AAYC0QgcgLg1gfQg7gogUgSQgqglgNgrQgRgxAvhAQApg5AdgXQgEAWgNAaIgZAtIARAKQAKAHAIAAQAQgEAqgVIAeAZQARAOAPAFQAJgDAMgHIATgNIAbA9IAxg/IAyAlQAPBCgNBTQgGAjgSAZQgUAeggAFQgLACgMAAQgfAAgkgOg");
	this.shape_7.setTransform(-7.8,10.5,0.039,0.039,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#890109").ss(1,0,0,4,true).p("AhIhRQAmggAQgKQAggUAegBQAYAAASAWQAKAMAOAfQArBmAIBaQghgYgQgNQgHAKgrA2Igbg+QgGAFgNAIQgLAIgJADQgPgFgSgPQgTgRgKgIQgpAVgRAFQgIgBgLgGQgOgJgDgCQAXgpACgDQANgZAEgWQAEgPAPgPQATgRAIgIg");
	this.shape_8.setTransform(-7.9,9.9,0.039,0.039,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#890109").s().p("AAjBRIgTANQgMAHgIADQgPgFgSgOIgdgZQgpAUgSAFQgHAAgLgHIgRgKIAZgtQANgZAEgWQAEgOAPgQIAbgZQAmggAQgJQAfgVAfAAQAYgBASAWQAKAMAOAfQArBnAIBaIgyglIgxA/g");
	this.shape_9.setTransform(-7.9,9.9,0.039,0.039,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#85010A").ss(1,0,0,4,true).p("ACHgEQABgTgOglQgNgkACgVQAZAbAMAiQAMAjgEAhQgGAfgdAXQgTAQgmARQhgAnhPgXQgTgHgCgBQgLgHgCgKQgGgegBgrQgBgvgCgYQAJAHAQAQQAPANAPABQBAAFAZgBQAygEAhgWQAVAMAqAXg");
	this.shape_10.setTransform(-5.2,9.6,0.039,0.039,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#85010A").s().p("AhwBwIgVgIQgLgHgBgKQgGgegCgrIgChHIAZAXQAPANAPABQBAAFAZgBQAxgEAigWIA/AjQABgTgOglQgOgkADgVQAYAbAMAiQANAjgFAhQgFAfgdAXQgUAQglARQg+AZg1AAQggAAgdgJg");
	this.shape_11.setTransform(-5.2,9.7,0.039,0.039,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8F0109").ss(1,0,0,4,true).p("AEMhKQgqhfhVhOQhMhGhngyQg4gYgYgEQgxgJgeAaQghAhgSA3QgMAhgMBDQgIA8gGBUQgCBDACAbIABAeQAJB6ADAVQALBRAbA4QAUAkAwAEQAlACAsgQQCPg2BWhPQAZgJAZgZQAPgOAbgeQAqgzAJhEQAJhDgbg9g");
	this.shape_12.setTransform(-12.2,8.5,0.039,0.039,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8F0109").s().p("AinGOQgwgEgUgkQgbg4gLhRQgDgVgJh6IgBgeQgCgbAChDQAGhUAIg8QAMhDAMghQASg3AhghQAegaAxAJQAYAEA4AYQBnAyBMBGQBVBOAqBfQAbA9gJBDQgJBEgqAzQgbAegPAOQgZAZgZAJQhWBPiPA2QgmAOghAAIgKAAg");
	this.shape_13.setTransform(-12.2,8.5,0.039,0.039,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#930109").ss(1,0,0,4,true).p("Ah0hiQAJgSASgIQATgIATAHQBRAVBNBcQADAEAHAIQAFAGgBAHQgCAVANAkQAOAlgBATQgqgXgVgMQghAWgyAEQgZABhAgFQgPgBgPgNQgQgQgIgHQAAg9ADgcQAGgyATgjg");
	this.shape_14.setTransform(-5.2,9.1,0.039,0.039,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#930109").s().p("ABSBcQghAXgyADQgZAChAgFQgPgBgPgNQgQgRgIgHQAAg9ADgbQAGgzATgjQAJgRASgIQATgIATAGQBRAWBNBbIAKALQAFAIgBAHQgCAVANAjQAOAlgBATIg/gjg");
	this.shape_15.setTransform(-5.2,9.1,0.039,0.039,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#960109").ss(1,0,0,4,true).p("AjSjAQBtgQBXgDQBpgEBaAPQAuAIAcANQAnARAUAeIABAeQgRA8gxA5QgkArg/AzQgoAdgbARQgmAXgjALIgSAIQg1ATgxgDQg4gEgngfQgmgdgYg3QgNgcgWhIQgUhUAOgzQAKgYAggMQACgBA2gOg");
	this.shape_16.setTransform(-9.7,9.1,0.039,0.039,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#960109").s().p("AhuDVQg4gEgngfQgmgdgYg3QgNgcgWhIQgUhUAOgzQAKgYAggMIA4gPQBtgQBXgDQBpgEBaAPQAuAIAcANQAnARAUAeIABAeQgRA8gxA5QgkArg/AzQgoAdgbARQgmAXgjALIgSAIQgtAQgrAAIgOAAg");
	this.shape_17.setTransform(-9.7,9.1,0.039,0.039,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FECA3D").ss(1,0,0,4,true).p("AgOAGQANgQACgkQADgpAGgOQAEAdAAAOQgCA/ACAgIABAeIgEAjQgKgVgDgLQgIgTgDgPg");
	this.shape_18.setTransform(-11,8.5,0.039,0.039,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FECA3D").s().p("AgCBGQgIgTgDgPIgBgeQANgQACgkQADgpAGgOQAEAdAAAOQgCA/ACAgIABAeIgEAjIgNggg");
	this.shape_19.setTransform(-11,8.5,0.039,0.039,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#7A0109").ss(1,0,0,4,true).p("ABzijQAiAoAPAtQARAzgKAtQgIAhggAbQgVAQgqAWQg6AagpALQg5AOgxgIQgTgCgLgRQgKgRAEgSQAJgrADgLQAIgeAMgVQAdgIA7gWQA0gRAmgDQAKgBAVgDQATgCAMgGQATgQABgfQABgLgFgrg");
	this.shape_20.setTransform(3.6,8.4,0.039,0.039,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7A0109").s().p("AiJCgQgTgCgLgRQgKgRAEgSIAMg2QAIgeAMgVQAdgIA7gWQA0gRAmgDIAfgEQATgCAMgGQATgQABgfQABgLgFgrQAiAoAPAtQARAzgKAtQgIAhggAbQgVAQgqAWQg6AagpALQglAJghAAQgTAAgRgDg");
	this.shape_21.setTransform(3.6,8.4,0.039,0.039,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#880109").ss(1,0,0,4,true).p("Ag8gyQAthFAwAEQA2AJApA5QAEArAAAJQgCAfgTARQgLAGgTACQgVACgLACQgmADg0ARQg6AVgeAJQAShQAzhTg");
	this.shape_22.setTransform(3.6,7.9,0.039,0.039,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#880109").s().p("Ag9gxQAthEAwAEQA2AJApA4QAEArAAAKQgCAfgTAQQgLAGgTADIggADQgmAEg0ARQg6AVgeAJQAShRAzhTg");
	this.shape_23.setTransform(3.6,7.9,0.039,0.039,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFC856").ss(1,0,0,4,true).p("Ag3gCIBhgEIARAGQgmAHgUAAQggABgYgKg");
	this.shape_24.setTransform(1.8,7.4,0.039,0.039,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC856").s().p("Ag5gCIABAAIBhgEIARAGQgmAHgUAAIgCAAQgfAAgYgJg");
	this.shape_25.setTransform(1.8,7.4,0.039,0.039,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A10F09").ss(1,0,0,4,true).p("AISkxQgmg+hlglQhVgghqgLQhRgIhyACQhsADgQABQhGAGgzARQguACg0APQgnALg3AWQguAUgbAWQglAegJAnQgMA0APA9QALAvAcA9QBKCXCHChQCFCmCOASQBMAKBSgfQBHgcBDg4QCMh5BOiuQAeg4AZhgQAOg7gBgtQgBg7gagqg");
	this.shape_26.setTransform(-6.7,7.1,0.039,0.039,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A10F09").s().p("AgZHEQiOgSiFimQiHihhKiXQgcg9gLgvQgPg9AMg0QAJgnAlgeQAbgWAugUQA3gWAngLQA0gPAugCQAzgRBGgGIB8gEQBygCBRAIQBqALBVAgQBlAlAmA+QAaAqABA7QABAtgOA7QgZBggeA4QhOCuiMB5QhDA4hHAcQg9AYg6AAQgTAAgUgDg");
	this.shape_27.setTransform(-6.7,7.1,0.039,0.039,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#940109").ss(1,0,0,4,true).p("AJKAcIAAAAQAAgegHgTQgUjgg6iaQgPgmgMgTQgSgegYgQQg9gnhuAIQhlAKh5AkQhNAXiIA1IABAGQhGAWhTApQgzAZhgA1QhCAhgZApIABAHQgUAagDArQgCAMACA+QAKBgAkBuQAaBSAzB0QAWA0A+AfQAhAQBSAYQCfAjDPAJQBaAEEYAAQAWADAUgPQARgNAKgWQAfhAAEhBQAKgngDgUQAGg4gBhQQgChaAAgug");
	this.shape_28.setTransform(-2.1,7.7,0.039,0.039,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#940109").s().p("AHYIXQkYAAhagEQjPgJifgjQhSgYghgQQg+gfgWg0Qgzh0gahSQgkhugKhgQgCg+ACgMQADgrAUgaIgBgHQAZgpBCghQBgg1AzgZQBTgpBGgWIgBgGQCIg1BNgXQB5gkBlgKQBugIA9AnQAYAQASAeQAMATAPAmQA6CaAUDgQAHATAAAeIAAAAIACCIQABBQgGA4QADAUgKAnQgEBBgfBAQgKAWgRANQgRANgSAAIgHgBg");
	this.shape_29.setTransform(-2.1,7.7,0.039,0.039,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A00809").ss(1,0,0,4,true).p("AIAnsQg/g1hmgVQg2gLiBgHQjPAAiuAqQiXAlhXA7Qg1AkgVA6QgVA9AABPQAAA4AMBVQAiC5AxB5QAuCNA9BtQATA1AwAcQAzAeA0gSQBbgaBZhKQA5gvBchkQBnh0BZiHQBDhmArhUQA2hnAehhQAmiEg/g2g");
	this.shape_30.setTransform(4,5.5,0.039,0.039,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A00809").s().p("AkZI2QgwgcgTg1Qg9htguiNQgxh5gii5QgMhVAAg4QAAhPAVg9QAVg6A1gkQBXg7CXglQCugqDPAAQCBAHA2ALQBmAVA/A1QA/A2gmCEQgeBhg2BnQgrBUhDBmQhZCHhnB0QhcBkg5AvQhZBKhbAaQgTAHgTAAQghAAgggTg");
	this.shape_31.setTransform(4,5.5,0.039,0.039,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A90807").ss(1,0,0,4,true).p("AAYi+QAPgTAWgHQAWgIAYAHQAeBoABCMQgBAzgGAgQgIAtgXAeQgWAcgnAGQgkAGgjgOQgpgQgRgJQgfgRgOgZQgEgNAHgRQAKgSADgKQAphfAWgvQAmhVAqgxg");
	this.shape_32.setTransform(-9.7,7,0.039,0.039,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A90807").s().p("AggDTQgpgQgRgJQgfgRgOgZQgEgNAHgRQAKgSADgKQAphfAWgvQAmhVAqgxQAPgTAWgHQAWgIAYAHQAeBoABCMQgBAzgGAgQgIAtgXAeQgWAcgnAGQgLACgKAAQgZAAgZgKg");
	this.shape_33.setTransform(-9.7,7,0.039,0.039,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F0A015").ss(1,0,0,4,true).p("AiuutQACg/AAkxQABjiAIiOQAFBOgBB/QgBCgABAtQAAAJABDFQAAB8gJBSQgEAkADA+QACAggEBFQgEBBACAjQAGBbACAnQACBIgDA6QgJHgADDaQAAAvgFCLQgDBzACBGQAAAZgEAlQgCAVgEApQgEAsAEBSQAEBWgDAoQgDAxAEBhQAEBigEAwQgFBTAMCHQA4ANBWgCQB+gDARABQAQABAggEQAdgCASALQgpAPg8ADQhGAAgiABQhCABghgBQg5gBgogLQgIglgBg0QABg8AAgdQAEh6AAjBQABkAABg8QAGipADleQAClXAHiwQAAkDABiBQABjgAHijg");
	this.shape_34.setTransform(6.4,12.4,0.039,0.039,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0A015").s().p("AhiaVQg6gBgogLQgIgkgBg1IABhZQAEh5ABjCIABk7QAHipAClfQADlXAGiwIABmDQABjhAIijQABg/AAkxQABjhAIiPQAFBOAAB/QgCCgABAuIABDOQAAB8gJBRQgEAkAEA/QABAggEBEQgEBBACAjIAICCQACBJgDA5QgJHhADDaQAAAugECLQgEB0ACBFQAAAagEAkIgFA/QgFArAFBSQADBWgCAoQgEAxAEBiQAEBhgDAxQgGBSANCIQA3ANBWgCQB/gDAQABQAQABAhgFQAdgCASALQgqAQg8ACIhoABIg5ABIgpgBg");
	this.shape_35.setTransform(6.4,12.4,0.039,0.039,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#9B0309").ss(1,0,0,4,true).p("AgaiyQATgSAngGQAygIANgGQAhAVAOALQAZAUAMAXQAdA5AWAYQARAbgGAkQgFAggUAfQgpA9hFAoQhAAkhNAOIhAABQgzgEgogfQgrgigJgwQABh4ADgmQAlgUBFgoQBIgqAigTg");
	this.shape_36.setTransform(1.5,6.5,0.039,0.039,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9B0309").s().p("Ai+C2QgrghgJgxQABh4ADglIBqg9IBqg8QATgSAngHQAygIANgGQAhAWAOALQAZAUAMAWQAdA5AWAZQARAagGAlQgFAfgUAfQgpA9hFAoQhAAlhNAOIhAABQgzgFgogfg");
	this.shape_37.setTransform(1.5,6.5,0.039,0.039,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A21409").ss(1,0,0,4,true).p("Ai3i0QATgdAkgMQAhgMAjAHQBEAMBAAqQA5AmAxA7QAcAkANAYQAUAiACAiQgWgZgdg4QgMgWgZgUQgNgLgigWQgNAGgyAIQgoAHgSASQgjAUhGAoQhHAogjAUQgEA0AABqQgLghAAguQAAgIADhJQAIhZAFggQANhDAdgug");
	this.shape_38.setTransform(1.5,6.1,0.039,0.039,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A21409").s().p("AjxCOIAEhRQAHhZAGgfQAMhEAegtQATgdAjgNQAhgLAkAHQBDALBAAqQA6AmAxA7QAcAkANAYQATAjADAhQgWgYgdg4QgMgXgZgUQgOgLghgVQgNAGgyAIQgoAGgSASIhqA8IhqA8QgEA1AABqQgKgigBgug");
	this.shape_39.setTransform(1.5,6.1,0.039,0.039,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFA000").ss(1,0,0,4,true).p("AjV8XQAJBCASCCQAPBxAIBTQAcD2AtE+QAPBuBBHFQADATASBpQANBLAHAxQAFArARBeQAQBZAFAyQAFAeBCF/QAqD6AfCjQAEAaAKA0QAJAuAAAgQgLAwgCAPQgGAkADAdQgCAegKBpQgJBTAAAzQgCBBgCAeQgFA0gNAoIgYARIgIgDQgSgLgdACQggAFgQgBQgQgBh+ADQhXACg3gNQgNiBAFhZQAEgygEhgQgEhjADgwQADgogEhWQgEhSAEgrQAFgqACgUQADglAAgaQgChEADh1QAFiHAAgyQgDjaAJnhQADg5gChJQgCgmgGhcQgCgjAEhBQAEhEgCggQgDg/AEgkQAJhRAAh8QgBjFAAgJQgBguABigQABh/gFhOQAAi1AChbg");
	this.shape_40.setTransform(6.2,11.9,0.039,0.039,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFA000").s().p("ACXcTQgSgMgdADQghAEgQgBIiOACQhXACg3gNQgNiAAGhaQADgxgEhhQgEhiAEgxQACgogDhWQgFhSAFgrIAGg+QADglAAgaQgChEAEh0QAEiIAAgyQgDjaAJngQADg6gChJIgIiBQgCgkAEhAQAEhFgBggQgEg/AEgkQAJhRAAh8IgBjOQgBgtACigQAAiAgFhOQABi0ABhbIAbDDQAQBxAHBTQAdD2AsE+IBQIzIAVB8QAOBLAGAxQAFArARBfQAQBZAFAxIBHGeQArD5AeCkIAOBNQAJAvABAfIgOA/QgGAlADAcIgMCHQgIBTgBAzQgCBCgCAdQgFA0gNAoIgYASg");
	this.shape_41.setTransform(6.2,11.8,0.039,0.039,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#B71A06").ss(1,0,0,4,true).p("AARijQAtgIAnAHQAuAHAfAZQAvAkARA9QARA6gRA6QgLAlgdAYQgfAaglgBQhvACg6gFQhegJhGgeQgcgLgOgaQgQgbAMgbQAdhNBMg2QBFgwBYgSg");
	this.shape_42.setTransform(-3.7,4.7,0.039,0.039,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B71A06").s().p("AgjCkQhegJhGgeQgcgLgOgaQgQgbAMgbQAdhNBMg2QBFgwBYgSQAtgIAnAHQAuAHAfAZQAvAkARA9QARA6gRA6QgLAlgdAYQgfAaglgBIg4ABQhHAAgqgEg");
	this.shape_43.setTransform(-3.7,4.7,0.039,0.039,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A81509").ss(1,0,0,4,true).p("AGSjJQgtgthJgfQgxgUhWgVQhpgVhVgEQhngGhYARQgyAGg8AZQhFAigOAtQgOAqANA2QAIAjAZA4QArBXBJBhQAuA+BdBsQAgAsBYgcQBFgYBJgxQA4gmBFg+QAngkAGgGQAYgZALgYQAJgDAJgJQAJgLAEgGQAiguAQghQAXgwAAgrQgIg0gXgVg");
	this.shape_44.setTransform(-0.5,4.3,0.039,0.039,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A81509").s().p("AiKE/Qhdhsgug+QhJhhgrhXQgZg4gIgjQgNg2AOgqQAOgtBFgiQA8gZAygGQBYgRBnAGQBVAEBpAVQBWAVAxAUQBJAfAtAtQAXAVAIA0QAAArgXAwQgQAhgiAuIgNARQgJAJgJADQgLAYgYAZIgtAqQhFA+g4AmQhJAxhFAYQgiALgZAAQgpAAgUgbg");
	this.shape_45.setTransform(-0.5,4.3,0.039,0.039,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFBF4A").ss(1,0,0,4,true).p("AhlAAIARgGQBQAEBYgFIAIAGQhQAShxgRg");
	this.shape_46.setTransform(2.7,2.9,0.039,0.039,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFBF4A").s().p("AhgAAIARgHQBPAFBZgFIAIAGQgqAJg0AAQgtAAg2gIg");
	this.shape_47.setTransform(2.8,2.9,0.039,0.039,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A80F09").ss(1,0,0,4,true).p("ABykGQAggMAcAFQAiAFAQAaQAQAcACAqQABAPgDA6QgTCig8B1QgRAegPATQgUAYgZALQgZAMgngZQhlg/gPgJQhAgsgpgrQg2g9ATgwQAKgUAYgVQAdgWANgMQBmhOAdgUQBMg0BDgYg");
	this.shape_48.setTransform(5.4,1.4,0.039,0.039,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A80F09").s().p("AAUD/Ih0hIQhAgsgpgrQg2g9ATgwQAKgUAYgVQAdgWANgMQBmhOAdgUQBMg0BDgYQAggMAcAFQAiAFAQAaQAQAcACAqQABAPgDA6QgTCig8B1QgRAegPATQgUAYgZALQgIAEgJAAQgUAAgbgRg");
	this.shape_49.setTransform(5.4,1.4,0.039,0.039,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#AC1E09").ss(1,0,0,4,true).p("AFbCeQhXitgthOQhPiKhQhjQg1hEhJgqQgagHgLgCQgVgDgRAGQgZAIgTAcQgFAHgXAtQgCAGgGAMQgFAKABAIQgOAVgNAdQgGAPgQAnQgxCCgVBaQgdB8AJBqQADAzAWAqQAYAuAoAYQApAWA3AOQAiAIBEAKQBQAFBYgFQA5gKApgMQA0gQAngYQArgZAZgkQAdgpgCguQgLg3gNgag");
	this.shape_50.setTransform(2.8,1.1,0.039,0.039,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AC1E09").s().p("AhRHBQhEgKgigIQg3gOgpgWQgogYgYguQgWgqgDgzQgJhqAdh8QAVhaAxiCIAWg2QANgdAOgVQgBgIAFgKIAIgSIAcg0QATgcAZgIQARgGAVADQALACAaAHQBJAqA1BEQBQBjBPCKQAtBOBXCtQANAaALA3QACAugdApQgZAkgrAZQgnAYg0AQQgpAMg5AKQgvACgrAAQgoAAgmgCg");
	this.shape_51.setTransform(2.8,1.1,0.039,0.039,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BB2103").ss(1,0,0,4,true).p("AFTCmQgYh8hZiiQgSghgVgVQgJgbgXghQgcglgNgTQhOhnhMg+QgfgXgVgJQgfgOgcAGQgTAIgNAXQgIAOgLAdQgHAUgQApQgNAkgDAbQgSAjgPBCIAEAGQgMAVgIAfQgFASgIAlQgWBngKBLQgMBiAEBUQADA5ALAnQAPA0AeAhQAbAhA2AHQBcgEBBgHQBUgKBFgUQBEgUArgXQA7gfAggsQAbgjAHgwQAGgrgKgvg");
	this.shape_52.setTransform(5.4,-1.7,0.039,0.039,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BB2103").s().p("AkcHKQgeghgPg0QgLgngDg5QgEhUAMhiQAKhLAWhnIANg3QAIgfAMgVIgEgGQAPhCASgjQADgbANgkIAXg9QALgdAIgOQANgXATgIQAcgGAfAOQAVAJAfAXQBMA+BOBnQANATAcAlQAXAhAJAbQAVAVASAhQBZCiAYB8IAAAAQAKAvgGArQgHAwgbAjQggAsg7AfQgrAXhEAUQhFAUhUAKQhBAHhcAEQg2gHgbghg");
	this.shape_53.setTransform(5.4,-1.7,0.039,0.039,0,0,180);

	this.instance = new lib.Path_26();
	this.instance.parent = this;
	this.instance.setTransform(7.7,-3.4,0.039,0.039,0,0,180,1.3,7.7);
	this.instance.alpha = 0.52;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BB1305").ss(1,0,0,4,true).p("AgliJQAHgIANACQAHABAOAHQAkAUAYAlQAYAlAFApQAKBXgkApQgOARgZgBQgXAAgQgOQg1grgWg8QgPgqAPgvQAOgsAjgfg");
	this.shape_54.setTransform(4.8,-3.9,0.039,0.039,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BB1305").s().p("AAcCQQgXAAgQgOQg1grgWg8QgPgqAPgvQAOgsAjgfQAHgIANACQAHABAOAHQAkAUAYAlQAYAlAFApQAKBXgkApQgNAQgXAAIgDAAg");
	this.shape_55.setTransform(4.8,-3.9,0.039,0.039,0,0,180);

	this.instance_1 = new lib.Path_28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.6,-3.8,0.039,0.039,0,0,180,3.9,75.8);
	this.instance_1.alpha = 0.93;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#B31206").ss(1,0,0,4,true).p("ADOiKQgPg9gOgjQgUgzggggQgWgXgfgHQghgIgbAOQgnAOgoAiQgcAYgmAtQgxBAgOAXQgfA1ACAwQABBGAoBLQAdA3A7BGQAvA0AhAYQAxAlAzAEQApABAfgiQAagcAPgsQA1imgsjag");
	this.shape_56.setTransform(6,-6,0.039,0.039,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B31206").s().p("ABUFfQgzgEgxglQghgYgvg0Qg7hGgdg3QgohLgBhGQgCgwAfg1QAOgXAxhAQAmgtAcgYQAogiAngOQAbgOAhAIQAfAHAWAXQAgAgAUAzQAOAjAPA9QAsDag1CmQgPAsgaAcQgeAhgnAAIgDAAg");
	this.shape_57.setTransform(6,-6,0.039,0.039,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FEE101").ss(1,0,0,4,true).p("Eglugz2QAWBCAGA4QANBpAfCTQARBUAkCnQBVFbBRDuQARAqAiBkQAgBdAWAxQAFANA7CSQAnBgAgA8QANAbApBZQAhBIAYApQBSCaA7BmQBQCKBLBuQA2BZAxA6QAdAjAzBLQAxBBAsAhQC1CgEiBuQA7AcBVAeQAxARBjAgQDhBIFEBXQC5AxFxBiQBAATCuAuQCXAoBXAcQEYBSCnA9QD0BZC6BlQApAYBTAtQBIApAuAmQCMBtBoC7QBDByA0CPQArB3AmCZQAgB+AWCaQAQBuARCtQAKBNACBrQABA+ABB8QgCC7AAAgQgDB8gMBeQgFApgMBTQgLBHgVAxQgVgDg5gXQgvgTggAEQiYALhngOQiMgThihBQhrhFgohnQgZg5gGgLQgTglgZgVQhuhhiBgtQjGhGj/grQiqgckogcQj1gRgSgBQiWgJhyABQoGgbnsA5QgaACjGAXQiIAQhZAAQhQgFhagdQhHgWhZgrQgigQgzgiQhAgqgTgLQg8g2gdgbQgygwgggnQhChJhEhlQguhEhGh2QgahCg3hxQg5h6g5ilQgZg+gehjQgqiNgHgXQgNgwgUhVQgVhggKglQgGgjgciOQgWhtgKhFQgzkOgumZQgEgtgRiyQgOiJgDhWQgRkmgIiTQABg8gHiHQgHh/AChFQgKibAAjgQACj+gBh+QAGi/AChgQADimgFh4IACgJQAZgUAeg7QAdg5AdgTQAQAHAfARQAcAPAVAAQAggIAaggQAOgSAXgrQAfg8AThPQAOg2AOhbgAHxIYQgtACg1APQgmALg3AWQgvAUgbAWQglAegJAnQgLAzAOA+QALAuAcA9QBKCZCIChQCFCmCOASQBNAKBRgfQBIgcBCg4QCNh5BNivQAfg5AYhfQAfiCgshLQgmg+hmgmQhUgfhqgLQhSgJhyACQhzAEgKABQhHAGgyARgAYJL0QgqAxgmBUQgWAwgpBgQgEAJgJATQgHARADANQAOAYAgASQAQAJAqAQQAjAOAkgGQAogGAVgcQAXgfAJgtQAGggAAgzQgBiNgehoQgXgGgXAHQgWAIgPATgAeXOwQggAhgTA3QgLAhgMBDQgJA7gFBUQgBgOgEgdQgGAOgDApQgDAkgNARQgTgegngRQgdgNgugIQhagPhqAEQhWADhuAQQg2AOgCABQgfAMgLAYQgOA0AVBTQAVBHANAeQAZA3AlAdQAnAfA5AEQAxADA0gTIAIAGIAKgFIACgJQAigLAngXQAbgRAogdQA/gzAkgrQAxg6AQg8QAEATAVAvIAEgjQAKB+ACARQALBRAbA4QAVAjAvAEQAlADAtgQQCOg2BYhQQAYgJAagYQAOgOAbgeQAqg0AJhEQAKhEgcg8QgphfhWhPQhMhGhngyQg5gXgYgEQgwgJgfAagEgnLgq/QgpAOgoAjQgcAYgmAtQgxBAgNAXQgfA0ABAxQACBGAoBLQAdA3A6BGQAvA0AhAZQAyAlAzADQApACAggiQAZgcAPgsQA2imgtjcQgOg9gOgiQgVg0ggggQgVgXgggHQgggIgbAOgEgjCgfUQgjAfgOAtQgPAuAPArQAWA9A0AqQASAOAXABQAZABAOgRQAkgrgLhWQgEgqgYgkQgXglglgVQgPgGgHgBQgNgDgHAIgEgoQga8QgHAUgQApQgNAkgDAbQgSAjgPBCIAEAGQgMAVgIAfQgFASgIAlQgWBogKBLQgMBiAEBUQADA5ALAnQAPA0AeAhQAbAhA2AHQBcgEBBgHQBVgKBFgUQBEgUArgXQA7gfAggsQAbgjAHgwQAGgrgKgvQgYh+haihQgQgggWgWQgJgbgXghQgcglgNgTQhOhnhNg+QgfgXgVgJQgfgOgcAGQgTAIgNAXQgIAOgLAdgEgjWgMEQhEAYhNA0QgdAUhmBOQgNAMgdAWQgYAVgKAVQgTAwA2A9QApArBBAsQAOAJBmA/QAnAZAagMQAYgLAUgYQAPgSARgfQA8h1AUijQACg6gBgPQgCgqgQgcQgPgagigFQgdgFgfAMgA9zueQgCAGgGALQgFALABAHQgOAVgNAeQgGAOgQAnQgxCCgVBcQgdB8AJBqQADAyAWAqQAYAuAoAZQApAVA3AOQAiAIBEALIgRAHQByARBQgTIgIgGQA5gJApgMQA0gQAngYQArgZAZglQAdgpgCguQgLg3gNgZQhXiugthPQhPiKhQhiQg1hEhKgqQgagIgLgBQgVgEgRAGQgZAJgTAcQgFAHgXAtgEgi2AAIQiXAlhXA7Qg1AjgVA7QgVA9AABOQAAA4AMBVQAiC7AxB4QAuCNA9BuQATA1AwAcQAzAdA0gRQBbgaBahLQA5gvBchkQBnhzBZiIQBDhnArhTQA2hoAehgQAmiFg/g1Qg/g2hmgTQg0gLiDgIQjQAAiuAqgA+yRpQg0BWgRBPQgMAVgIAeQgDALgJArQgFASALARQALASATACQAxAHA5gOQAqgLA6gaQArgWATgQQAhgbAIghQAKgugRgzQgPgtgigoQgpg4g2gJQgwgEgtBEgAxJhZQgzAEg8AbQhEAggPAtQgNAqAMA2QAIAkAZA3QArBYBJBhQAuA+BdBsQAhAsBYgcQBGgYBIgxQA5gnBFg9QAmgkAGgGQAYgZAMgYQAJgDAIgJQAJgLAFgGQAigvAQghQAWgwABgrQgIg0gXgVQgugshJgfQgwgUhXgVQhpgVhVgEQhngFhYARgA4OISQgdAugNBDQgFAggIBaQgDBJAAAIQAAAuALAhQAJAxAqAhQAoAfA0AFIgjADQAYALAhgBQAUAAAmgHIgRgHQBOgOBAglQBGgoAog9QAUgfAFgfQAHglgSgbQgCghgUgkQgNgZgcgjQgxg7g5gmQhAgqhFgMQgjgHgiAMQgjAMgTAdgApvK/IACAGQhHAWhTApQg1AaheA0QhBAhgaApIACAHQgUAbgEAqQgCAQACA6QAKBhAkBuQAaBSAzB1QAWAzA+AgQAiARBSAWQCeAjDQAJQBbAEEWAAQAWADAUgPQASgNAKgWQAeg9AEhEQAGgXABgGQACgRgBgNQAGg4gBhQQgChagBguQAAgdgHgVQgUjhg6iZQgPglgMgUQgRgegXgQQg+gnhtAIQhmAKh4AkQhNAXiKA1gAgXDFQhYAShFAxQhNA2gdBNQgLAbAPAcQAPAZAcALQBGAfBeAJQA9AFBrgCQAlAAAfgaQAdgYAMglQARg5gRg7QgSg9gugkQg+gwhjAQgADuVtQgTAjgGAzQgEAbAAA+QABAZABAwQACArAGAdQABALALAHQACAAATAIQBPAXBignQAlgRAUgQQAdgYAFgeQAFgigNgkQgMghgYgbQAAgHgFgHQgGgJgDgEQhOhbhSgWQgSgGgTAIQgTAIgIARgAPPY8QgIAIgSARQgPAPgEAPQgdAXgpA5QgvBAARAyQANArAqAlQATARA8ApQA1AfAdALQAxATApgIQAggFAUgdQASgaAGgiQANhUgPhCQgIhagrhoQgPgfgJgMQgSgWgYAAQgfABghAUQgPAJgnAhg");
	this.shape_58.setTransform(-3.8,3.3,0.039,0.039,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEE101").s().p("EApmAzbQgvgTggAEQiYALhngOQiMgThihBQhrhFgohnQgZg5gGgLQgTglgZgVQhuhhiBgtQjGhGj/grQiqgckogcIkHgSQiWgJhyABQoGgbnsA5QgaACjGAXQiIAQhZAAQhQgFhagdQhHgWhZgrQgigQgzgiQhAgqgTgLIhZhRQgygwgggnQhChJhEhlQguhEhGh2QgahCg3hxQg5h6g5ilQgZg+gehjIgxikQgNgwgUhVQgVhggKglIgiixQgWhtgKhFQgzkOgumZIgVjfQgOiJgDhWQgRkmgIiTQABg8gHiHQgHh/AChFQgKibAAjgQACj+gBh+IAIkfQADimgFh4IACgJQAZgUAeg7QAdg5AdgTQAQAHAfARQAcAPAVAAQAggIAaggQAOgSAXgrQAfg8AThPQAOg2AOhbQAWBCAGA4QANBpAfCTQARBUAkCnQBVFbBRDuQARAqAiBkQAgBdAWAxIBACfQAnBgAgA8QANAbApBZQAhBIAYApQBSCaA7BmQBQCKBLBuQA2BZAxA6QAdAjAzBLQAxBBAsAhQC1CgEiBuQA7AcBVAeICUAxQDhBIFEBXIIqCTQBAATCuAuQCXAoBXAcQEYBSCnA9QD0BZC6BlQApAYBTAtQBIApAuAmQCMBtBoC7QBDByA0CPQArB3AmCZQAgB+AWCaQAQBuARCtQAKBNACBrQABA+ABB8IgCDbQgDB8gMBeIgRB8QgLBHgVAxQgVgDg5gXgARFX/QgfABghAUQgPAJgnAhIgaAZQgPAPgEAPQgdAXgpA5QgvBAARAyQANArAqAlQATARA8ApQA1AfAdALQAxATApgIQAggFAUgdQASgaAGgiQANhUgPhCQgIhagrhoQgPgfgJgMQgSgWgXAAIgBAAgAEJVWQgTAIgIARQgTAjgGAzQgEAbAAA+IACBJQACArAGAdQABALALAHIAVAIQBPAXBignQAlgRAUgQQAdgYAFgeQAFgigNgkQgMghgYgbQAAgHgFgHIgJgNQhOhbhSgWQgIgDgIAAQgLAAgKAFgAdLYKQALBRAbA4QAVAjAvAEQAlADAtgQQCOg2BYhQQAYgJAagYQAOgOAbgeQAqg0AJhEQAKhEgcg8QgphfhWhPQhMhGhngyQg5gXgYgEQgwgJgfAaQggAhgTA3QgLAhgMBDQgJA7gFBUQgBgOgEgdQgGAOgDApQgDAkgNARQgTgegngRQgdgNgugIQhagPhqAEQhWADhuAQIg4APQgfAMgLAYQgOA0AVBTQAVBHANAeQAZA3AlAdQAnAfA5AEQAxADA0gTIAIAGIAKgFIACgJQAigLAngXQAbgRAogdQA/gzAkgrQAxg6AQg8QAEATAVAvIAEgjQAKB+ACARgAi6JHQhmAKh4AkQhNAXiKA1IACAGQhHAWhTApQg1AaheA0QhBAhgaApIACAHQgUAbgEAqQgCAQACA6QAKBhAkBuQAaBSAzB1QAWAzA+AgQAiARBSAWQCeAjDQAJQBbAEEWAAQAWADAUgPQASgNAKgWQAeg9AEhEIAHgdQACgRgBgNQAGg4gBhQIgDiIQAAgdgHgVQgUjhg6iZQgPglgMgUQgRgegXgQQgzgghTAAIglABgA+yRrQg0BWgRBPQgMAVgIAeIgMA2QgFASALARQALASATACQAxAHA5gOQAqgLA6gaQArgWATgQQAhgbAIghQAKgugRgzQgPgtgigoQgpg4g2gJIgFAAQguAAgqBAgALnH+Ih9AFQhHAGgyARQgtACg1APQgmALg3AWQgvAUgbAWQglAegJAnQgLAzAOA+QALAuAcA9QBKCZCIChQCFCmCOASQBNAKBRgfQBIgcBCg4QCNh5BNivQAfg5AYhfQAfiCgshLQgmg+hmgmQhUgfhqgLQhCgHhYAAIgqAAgAYuLbQgWAIgPATQgqAxgmBUQgWAwgpBgQgEAJgJATQgHARADANQAOAYAgASQAQAJAqAQQAjAOAkgGQAogGAVgcQAXgfAJgtQAGggAAgzQgBiNgehoQgLgDgKAAQgNAAgMAEgEgi2AAKQiXAlhXA7Qg1AjgVA7QgVA9AABOQAAA4AMBVQAiC7AxB4QAuCNA9BuQATA1AwAcQAzAdA0gRQBbgaBahLQA5gvBchkQBnhzBZiIQBDhnArhTQA2hoAehgQAmiFg/g1Qg/g2hmgTQg0gLiDgIQjQAAiuAqgA3YHrQgjAMgTAdQgdAugNBDQgFAggIBaIgDBRQAAAuALAhQAJAxAqAhQAoAfA0AFIgjADQAYALAhgBQAUAAAmgHIgRgHQBOgOBAglQBGgoAog9QAUgfAFgfQAHglgSgbQgCghgUgkQgNgZgcgjQgxg7g5gmQhAgqhFgMQgNgCgNAAQgWAAgVAHgAxJhXQgzAEg8AbQhEAggPAtQgNAqAMA2QAIAkAZA3QArBYBJBhQAuA+BdBsQAhAsBYgcQBGgYBIgxQA5gnBFg9IAsgqQAYgZAMgYQAJgDAIgJIAOgRQAigvAQghQAWgwABgrQgIg0gXgVQgugshJgfQgwgUhXgVQhpgVhVgEIgugBQhNAAhEANgAgXDHQhYAShFAxQhNA2gdBNQgLAbAPAcQAPAZAcALQBGAfBeAJQA9AFBrgCQAlAAAfgaQAdgYAMglQARg5gRg7QgSg9gugkQgugkhDAAQgXAAgZAEgA8rv1QgZAJgTAcIgcA0IgIARQgFALABAHQgOAVgNAeIgWA1QgxCCgVBcQgdB8AJBqQADAyAWAqQAYAuAoAZQApAVA3AOQAiAIBEALIgRAHQByARBQgTIgIgGQA5gJApgMQA0gQAngYQArgZAZglQAdgpgCguQgLg3gNgZQhXiugthPQhPiKhQhiQg1hEhKgqQgagIgLgBIgPgCQgMAAgLAEgEgjWgMCQhEAYhNA0QgdAUhmBOQgNAMgdAWQgYAVgKAVQgTAwA2A9QApArBBAsIB0BIQAnAZAagMQAYgLAUgYQAPgSARgfQA8h1AUijQACg6gBgPQgCgqgQgcQgPgagigFIgQgBQgVAAgXAIgEgndgcEQgTAIgNAXQgIAOgLAdIgXA9QgNAkgDAbQgSAjgPBCIAEAGQgMAVgIAfIgNA3QgWBogKBLQgMBiAEBUQADA5ALAnQAPA0AeAhQAbAhA2AHQBcgEBBgHQBVgKBFgUQBEgUArgXQA7gfAggsQAbgjAHgwQAGgrgKgvQgYh+haihQgQgggWgWQgJgbgXghQgcglgNgTQhOhnhNg+QgfgXgVgJQgWgKgUAAQgJAAgIACgEgjCgfSQgjAfgOAtQgPAuAPArQAWA9A0AqQASAOAXABQAZABAOgRQAkgrgLhWQgEgqgYgkQgXglglgVQgPgGgHgBIgGgBQgJAAgFAGgEgnLgq9QgpAOgoAjQgcAYgmAtQgxBAgNAXQgfA0ABAxQACBGAoBLQAdA3A6BGQAvA0AhAZQAyAlAzADQApACAggiQAZgcAPgsQA2imgtjcQgOg9gOgiQgVg0ggggQgVgXgggHQgMgDgLAAQgTAAgRAJg");
	this.shape_59.setTransform(-3.8,3.3,0.039,0.039,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FB4202").ss(1,0,0,4,true).p("Aj7hWQAsgVA5gKQArgHA/gDQBNgCAyAJQBGAMAvAjQAwAfAVA4QAVA6gVA1QgpgngWgSQgmggghgPQhygyhogLQgSgChOgIQg7gFgkgHQAGgJAEgEQAGgIAHgDg");
	this.shape_60.setTransform(9.6,-9.1,0.039,0.039,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FB4202").s().p("ADMBGQgmggghgPQhygyhogLIhggKQg7gFgkgHIAKgNQAGgIAHgDQAsgVA5gKQArgHA/gDQBNgCAyAJQBGAMAvAjQAwAfAVA4QAVA6gVA1Ig/g5g");
	this.shape_61.setTransform(9.6,-9.1,0.039,0.039,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#AB0E05").ss(1,0,0,4,true).p("AhLBzQAhhBAnhhQAqhuAWg4QAPA9gLBpQgMB3AFAvIAigVIADAZQgXAsgOASQgaAgggAIQgUgBgcgOQgfgRgQgHQACgjASgkg");
	this.shape_62.setTransform(6.3,-9,0.039,0.039,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AB0E05").s().p("AgwDMQgegRgRgHQACgjATgjQAghCAnhgIBAimQAPA8gLBqQgMB2AFAvIAigUIAEAZQgYArgOASQgaAggfAIQgVAAgcgPg");
	this.shape_63.setTransform(6.3,-8.9,0.039,0.039,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FD4C01").ss(1,0,0,4,true).p("AA/l3QAvA+AaBIQAbBKABBMQAEBDgTBLQgPA7ggBMQgZAGgRAhQgVApgKAJQgMAEgnAHQgOAugOAnIgZgaQgCgMAGgQQAIgSADgJQgKAGgSAMQgRAKgOACQgLgBgMgKQgMgMgHgFQAlgeAag3QAKgWAchPQAag8ALgfQATgyAGgrQAPg4gJhJQgFgpgUhWQAOAPAZAmQAZAdAfgCQgIgogEgUQgGgjACgag");
	this.shape_64.setTransform(7.5,-8.4,0.039,0.039,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FD4C01").s().p("AhNFbQgBgMAGgQIAKgbIgcASQgQALgOABQgLAAgMgLIgTgRQAlgeAag3QAKgWAbhPQAag8AMgfQASgxAGgrQAPg5gJhIQgEgqgUhWQANAPAZAmQAaAdAegCIgLg8QgGgjACgaIAAAAQAvA+AbBJQAaBJACBNQAEBCgTBLQgPA7ghBMQgZAGgQAhQgWApgKAJQgLAEgnAHQgOAugPAog");
	this.shape_65.setTransform(7.4,-8.4,0.039,0.039,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#B91603").ss(1,0,0,4,true).p("AgUjiQALAEAUAHQASAIAHANQAOAYAEAmQACAVACAsQgOBagNA2QgUBPgdA7IgDgZIgiAVQgGgvANh4QALhogQg9QAKgsAXg9g");
	this.shape_66.setTransform(5.8,-9.3,0.039,0.039,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B91603").s().p("AgVDEIgiAUQgGguANh4QALhogQg9QAKgsAXg9IAfAKQASAJAHANQAOAYAEAlQACAWACArQgOBbgNA2QgUBOgdA8g");
	this.shape_67.setTransform(5.8,-9.3,0.039,0.039,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#E6B944").ss(1,0,0,4,true).p("AgDhzIALAZQgCBAABBIIgGA1QgHgwAAg7QgBgkAEhHg");
	this.shape_68.setTransform(5.4,-11.9,0.039,0.039,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E6B944").s().p("AgGAAQgBgjAEhIIALAaQgCBAABBIIgGA1QgHgwAAg8g");
	this.shape_69.setTransform(5.4,-11.9,0.039,0.039,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FE9A08").ss(1,0,0,4,true).p("AQ5B6Qgjg5gTgcQgggvgdgfQhohxiph6QjGiIhjhFQjaiXh1hDQjAhvitgvQhZgSgtgFQhLgIg8AKQgxADgZABQhFAagKAFQgsASggATQh9BLhmCdQgyBJgTBbQgTBYAOBaQATB2BACCQB2DjD6DWQDeC3EHBwQDTBgEMAgQCIALBsgOQCDgRBlg1QBNgdBDhIQAugyA8hdQAbg/AKgbQATg0AHgqQAPg5gJhJQgFgpgVhWgArUp6QA/gHAkAAQA3ABArAOQAvAQAiAbQAnAhALAqQAVBEgUBQQgQBEgsBEQgOhWgTg1QgahLgrgxQg5hYhPgTQgFgGgagigAEtDFQAtgUA5gKQAsgIA+gDQBNgCAyAJQBGAMAwAjQAwAfAUA5QAVA6gUA1QgqgngVgSQgmggghgPQhygzhqgLQgSgChNgIQg7gFglgHQAHgJADgEQAGgIAHgDg");
	this.shape_70.setTransform(11.7,-10.2,0.039,0.039,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FE9A08").s().p("AE4NwQkMggjThgQkHhwjei3Qj6jWh2jjQhAiCgTh2QgOhaAThYQAThbAyhJQBmidB9hLQAggTAsgSIBPgfIBKgEQA8gKBLAIQAtAFBZASQCtAvDABvQB1BDDaCXQBjBFDGCIQCpB6BoBxQAdAfAgAvQATAcAjA5QAVBWAFApQAJBJgPA5QgHAqgTA0QgKAbgbA/Qg8BdguAyQhDBIhNAdQhlA1iDARQg9AIhGAAQg2AAg7gFgAH9CcQg+ADgsAIQg5AKgtAUQgHADgGAIIgKANQAlAHA7AFIBfAKQBqALByAzQAhAPAmAgIA/A5QAUg1gVg6QgUg5gwgfQgwgjhGgMQgpgHg7AAIgbAAgArUp6IAfAoQBPATA5BYQArAxAaBLQATA1AOBWQAshEAQhEQAUhQgVhEQgLgqgnghQgigbgvgQQgrgOg3gBIgFAAQgjAAg7AHg");
	this.shape_71.setTransform(11.7,-10.2,0.039,0.039,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FB4801").ss(1,0,0,4,true).p("AirjNQBAgHAkAAQA3ABApAOQAwAQAhAbQAnAhAMAqQAUBEgTBOQgRBFgsBEQgOhVgTg2QgZhKgrgxQg4hYhPgTQgFgGgbgig");
	this.shape_72.setTransform(13.9,-11.8,0.039,0.039,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FB4801").s().p("ABCBFQgZhJgrgyQg4hXhPgUIgggoQBAgHAkABQA3AAApAPQAwAPAhAcQAnAgAMArQAUBEgTBOQgRBEgsBEQgOhVgTg2g");
	this.shape_73.setTransform(13.9,-11.9,0.039,0.039,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F7FDB5").ss(1,0,0,4,true).p("AgegYQAQgPAVAGQAWAGACAWQADAMgMALQgPALgGAGIgegPg");
	this.shape_74.setTransform(6.1,-13.4,0.039,0.039,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7FDB5").s().p("AgdAVIgBgsQAQgPAVAFQAWAGACAWQADAMgMALQgPALgGAGg");
	this.shape_75.setTransform(6.1,-13.4,0.039,0.039,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#F72C02").ss(1,0,0,4,true).p("ArloCQAbgVAkgJQDYBMDZCHQBIAsBpBJQCcBtASAMQCWBlBGAzQB6BXBaBOQBAA7AkAlQA0A3AiA0QgCAZAGAjQADAUAIAoQgeACgagdQgaglgNgQQgjg5gTgbQgggwgegfQhohxioh7QjHiHhhhFQjaiXh1hDQjChvisgvg");
	this.shape_76.setTransform(10,-11.5,0.039,0.039,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F72C02").s().p("AKtIGQgaglgOgQQgjg5gTgbQgfgwgegfQhohxiph7QjGiHhihFQjaiXh1hDQjBhvitgvQAcgVAjgJQDYBMDaCHQBHAsBqBJICtB5QCWBlBHAzQB5BXBaBOQBBA7AjAlQA1A3AiA0QgCAZAGAjIALA8IgEAAQgcAAgYgbg");
	this.shape_77.setTransform(10,-11.5,0.039,0.039,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#F85301").ss(1,0,0,4,true).p("AkLAkQAzg0BdgPQAggFCCgDQBlAIB0AoQglALgaAUQhagSgsgFQhKgIg9AKQgxADgZABQg4gNg9Aag");
	this.shape_78.setTransform(13.7,-13.7,0.039,0.039,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F85301").s().p("ABBARQhKgHg9AJIhJAEQg4gNg+AaQAzg0BdgOQAggGCCgDQBmAIBzAoQglALgaAUQhagSgsgFg");
	this.shape_79.setTransform(13.7,-13.7,0.039,0.039,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FC6602").ss(1,0,0,4,true).p("ArFvVQCVghB4AYQiDADghAFQhdAPgzA1QA+gaA4ANQhFAagKAFQgsASggATQh9BLhmCdQgyBJgTBbQgTBYAOBaQASB1BBCEQB2DiD6DWQDeC3EHBwQDTBgEMAgQCIALBsgOQCDgRBlg1QBNgdBDhIQAugyA8hdQgcBRgKAUQgaA3glAeQAHAFAMAMQAMAKALABQAOgCARgKQATgMAJgGQgDAJgIASQgGAQACAMIAZAaQAOgkAOgxQAogHAMgEQAJgIAWgqQARghAZgFIgEATQg2BXgLARQgnA6glAmIgTARQh2BmihAsQiaApiigSQl/gZlii2QmEjCkJkwQjpkXgtkDQgRhUALhWQALhWAlhMQBLiWB3hsQAXgUAzg4QAugxAegZQgKAOgcAwQASgGA6gXQAvgTAegIg");
	this.shape_80.setTransform(11.8,-10,0.039,0.039,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FC6602").s().p("AHMPkQl/gZlii2QmEjCkJkwQjpkXgtkDQgRhUALhWQALhWAlhMQBLiWB3hsQAXgUAzg4QAugxAegZQgKAOgcAwQASgGA6gXQAvgTAegIIgBAAQCVghB4AYQiDADghAFQhdAPgzA1QA+gaA4ANIhPAfQgsASggATQh9BLhmCdQgyBJgTBbQgTBYAOBaQASB1BBCEQB2DiD6DWQDeC3EHBwQDTBgEMAgQCIALBsgOQCDgRBlg1QBNgdBDhIQAugyA8hdQgcBRgKAUQgaA3glAeIATARQAMAKALABQAOgCARgKIAcgSQgDAJgIASQgGAQACAMIAZAaQAOgkAOgxQAogHAMgEQAJgIAWgqQARghAZgFIgEATIhBBoQgnA6glAmIgTARQh2BmihAsQhqAchvAAQgxAAgygFg");
	this.shape_81.setTransform(11.8,-10,0.039,0.039,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FAFB69").ss(1,0,0,4,true).p("AgYijQAjgJAsAVQAYAMAvAcQAPAJAIATQAGAMAFAXQAMBXggA1QgNAWgYAUQgRAOgeASIgIgBQgggGgpgDQgoAAgkgZQgigXgVgkQgNhEAQhAQAhgwAVgTQAjgiAogCgAg9h3QgmARgXAiQgZAkADAnQACA/A4AlQA6AmA4gZQA9gVARhFQARhFgtgtQgYgdgpgIQgigHgoAJg");
	this.shape_82.setTransform(6.3,-13.4,0.039,0.039,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FAFB69").s().p("AAwClQgggGgpgDQgoAAgkgZQgigXgVgkQgNhEAQhAQAhgwAVgTQAjgiAogCQAjgJAsAVQAYAMAvAcQAPAJAIATQAGAMAFAXQAMBXggA1QgNAWgYAUQgRAOgeASgAg9h3QgmARgXAiQgZAkADAnQACA/A4AlQA6AmA4gZQA9gVARhFQARhFgtgtQgYgdgpgIQgOgDgQAAQgVAAgXAFg");
	this.shape_83.setTransform(6.3,-13.4,0.039,0.039,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FDFD45").ss(1,0,0,4,true).p("AimgSQAFhEA2gyQA0gxBEgEQBEAABAAwQAIAFAEAKQADAGAEANQgvgdgYgMQgsgVgjAKQgnACgkAiQgUATgiAwQgPA+AMBFQAVAlAiAXQAkAZAnAAQAnACAjAGQgRATgeADQgRABgjgFQhGgNgug8Qgvg+AKhFg");
	this.shape_84.setTransform(6.5,-13.4,0.039,0.039,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FDFD45").s().p("AgKC6QhHgNgug8Qgvg+AKhFQAFhEA2gyQA1gxBDgEQBEAABBAwQAHAFAFAKIAHATQgvgdgZgMQgrgVgkAKQgnACgjAiQgUATgiAwQgQA+AMBFQAVAlAiAXQAlAZAmAAQAoACAjAGQgRATgeADIgJAAQgQAAgbgEg");
	this.shape_85.setTransform(6.5,-13.4,0.039,0.039,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FE9F01").ss(1,0,0,4,true).p("AkOhrQAGgXAQgRQATgSAXAAQAYAAAtAKQAvAKAXAAQBKADBqgEQATAAA9gNQAygKAfAFQALAogXApQgQAdgnAlQiIB/itAzQgeALgggKQgfgKgWgZQgogvgNhAQgOg9AOg+g");
	this.shape_86.setTransform(4.2,-15.4,0.039,0.039,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FE9F01").s().p("AikCiQgfgKgWgZQgogvgNhAQgOg9AOg+QAGgXAQgRQATgSAXAAQAYAAAtAKQAvAKAXAAQBKADBqgEQATAAA9gNQAygKAfAFQALAogXApQgQAdgnAlQiIB/itAzQgPAGgQAAQgPAAgQgFg");
	this.shape_87.setTransform(4.2,-15.4,0.039,0.039,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#F6FDA8").ss(1,0,0,4,true).p("AgegYQAPgLAPAAQARAAAOALQgBAPAAAdQgNAGgRAJQgNgHgQgGg");
	this.shape_88.setTransform(10.2,-16,0.039,0.039,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F6FDA8").s().p("AgdAWIgBguQAPgKAPgBQARABAOAKIgBAsIgeAPQgNgHgQgGg");
	this.shape_89.setTransform(10.2,-16,0.039,0.039,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#F25F05").ss(1,0,0,4,true).p("AkChrQgOA+AOA9QANBAAoAvQAWAZAfAKQAgAKAegLQCugzCHh/QAnglAQgdQAXgpgLgoQgfgEgyAJQg9ANgTAAQheAEhWgDQgXAAgvgKQgtgKgYAAQgXAAgTASQgQARgGAXgAlNjOQBLAUBVAKQBWAPBmgCQBPgBBvgNQApgDANAAQAfAAAYAEQANAHADAQQACANgFAQQgcA7g3A2QgrAphCAuQjNCOi5gNQgHh+gOhSQgThygmhZg");
	this.shape_90.setTransform(4.2,-15.4,0.039,0.039,0,0,180,-0.2,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F25F05").s().p("Aj9DNQgIh+gOhSQgThyglhZQBKAUBVAKQBWAPBngCQBPgBBugNIA3gDQAfAAAXAEQAOAHACAQQACANgEAQQgdA7g2A2QgrAphCAuQi8CDirAAIgfgCgAjqiTQgRARgFAXQgOA+ANA9QAOBAAoAvQAWAZAeAKQAgAKAegLQCvgzCHh/QAmglAQgdQAYgpgMgoQgfgEgyAJQg8ANgUAAQhdAEhWgDQgYAAgugKQgugKgYAAQgXAAgSASg");
	this.shape_91.setTransform(4.2,-15.4,0.039,0.039,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#020204").ss(1,0,0,4,true).p("AApghIACAsIAfAPQAGgGAPgMQALgJgDgNQgCgWgWgGQgWgGgQAPgAgrh6QAogJAiAHQAoAJAYAcQAuAugRBEQgRBGg9AVQg5AZg5gmQg5gmgCg+QgCgnAZgkQAXgiAmgSg");
	this.shape_92.setTransform(6.4,-13.4,0.039,0.039,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#020204").s().p("AhEBpQg5gmgCg+QgCgnAZgkQAXgiAmgSQAogJAiAHQAoAJAYAcQAuAugRBEQgRBGg9AVQgXAKgXAAQgiAAgigXgAApghIACAsIAfAPQAGgGAPgMQALgJgDgNQgCgWgWgGIgMgCQgOAAgMALg");
	this.shape_93.setTransform(6.4,-13.4,0.039,0.039,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#020204").ss(1,0,0,4,true).p("Ah6AsQgVgzAeg2QAeg2A3gLQA6gQA1ApQA1AqgFA9QAEAigWAhQgPAZghAbQg6AUhBgSQg0gmgMgpgAAmgjIABAtQAQAHAOAHQANgIAQgHIACgsQgOgLgRAAQgQAAgPALg");
	this.shape_94.setTransform(10.5,-15.9,0.039,0.039,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#020204").s().p("Ag6B7Qg0gmgMgpQgVgzAeg2QAeg2A3gLQA6gQA1ApQA1AqgFA9QAEAigWAhQgPAZghAbQgeAKghAAQgdAAgfgIgAAmgjIABAtQAQAHAOAHIAdgPIACgsQgOgLgRAAQgQAAgPALg");
	this.shape_95.setTransform(10.5,-15.9,0.039,0.039,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FCFC55").ss(1,0,0,4,true).p("AgBi+QBQgKA+BCQA8BAgJBRQgFBOhAA3QhBA4hMgKQhXgFg1hOQg2hQAghQQAKAaAQA0QARAtAYAZQAJALASADQAKABAUACQBBARA6gTQATgEALgGQAQgIAHgNQAdgjAAgyQAAgtgVgsQgSgigmgZQgagQgvgUg");
	this.shape_96.setTransform(10.5,-15.9,0.039,0.039,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FCFC55").s().p("AgSC+QhXgFg1hOQg2hQAghQQAKAaAQA0QARAtAYAZQAJALASADIAeADQBBARA6gTQATgEALgGQAQgIAHgNQAdgjAAgyQAAgtgVgsQgSgigmgZQgagQgvgUQBQgKA+BCQA8BAgJBRQgFBOhAA3Qg3AwhBAAIgVgCg");
	this.shape_97.setTransform(10.5,-15.9,0.039,0.039,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FBFB6F").ss(1,0,0,4,true).p("AiDhZQAwgwA8gOQAYgBANABQAxAUAZAQQAmAZASAhQAVAtAAAsQAAAzgdAjQgHANgQAIQgLAGgTAEQAhgcAPgYQAWghgEgiQAFg9g1gqQg0gqg7AQQg3ALgeA2QgeA2AVA0QAMAnA0AoQgUgCgKgBQgSgEgJgKQgYgZgRguQgQg1gKgYQAOgoATgjg");
	this.shape_98.setTransform(10.6,-16,0.039,0.039,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FBFB6F").s().p("AhGCVQgSgEgJgKQgZgZgQguQgQg1gKgYQAOgoATgjQAwgwA8gOIAkAAQAxAUAZAQQAnAZASAhQAVAtAAAsQgBAzgcAjQgHANgQAIQgLAGgTAEQAhgcAPgYQAVghgDgiQAFg9g1gqQg1gqg7AQQg2ALgeA2QgeA2AVA0QAMAnA0AoIgegDg");
	this.shape_99.setTransform(10.6,-16,0.039,0.039,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FDE201").ss(1,0,0,4,true).p("AGXvpQA9gGAgAAQA0AAAoANQCsA2CHBXQBwBVAsBaQAqBQAQBuQAKBHACB/QADBwgKCLQgHBWgSCiQgCAmgIAwQgFAZgLA8QgcCmgcBuQgnCVg3B0QgcA3gfAaQgLAJgRgEQgOgDgOgKQgZgTghghQgkglgTgSQhyh0g6g5QhmhmhMhBQgkgnhAgzQhXhGgRgQQgWgTgpgcQgvghgRgNQg0gqhHgtQgugdhVgxQkkiok9g0QgrgKhFgCQhegDgSgCQgdgBgQgiQAaglAcgVQCQh0BJg5QEGi7DKh3QAhgUAigDQgSAjgPAoQggBSA2BPQA1BOBXAFQBOAKBAg4QBAg3AEhOQAJhSg7hAQg9hChSAKQgMgBgZABQBBgsBegoQAggOCIg0QBegfAygNQBRgVBEgFgAKuAdQgKBHAvA9QAuA8BHANQAjAGASgCQAegCARgTIAHABQAfgSAQgOQAYgUANgWQAgg1gMhYQgFgWgFgMQgJgTgOgJQgFgMgCgGQgFgKgHgFQhAgxhFAAQhEAFg1AxQg2AygFBCg");
	this.shape_100.setTransform(9.8,-13.6,0.039,0.039,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FDE201").s().p("AM9PvQgNgDgPgKQgZgTggghQgkglgTgSIisitQhmhmhMhBQgkgnhBgzQhWhGgSgQQgWgTgogcQgwghgQgNQg1gqhHgtQgtgdhVgxQkliok8g0QgrgKhFgCQhegDgTgCQgcgBgQgiQAZglAcgVIDZitQEGi7DLh3QAggUAjgDQgSAjgPAoQggBSA1BPQA1BOBXAFQBOAKBBg4QA/g3AFhOQAJhSg7hAQg+hChRAKIgmAAQBCgsBegoQAggOCHg0QBfgfAygNQBRgVBDgFIAAAAQA+gGAgAAQA0AAAoANQCsA2CHBXQBvBVAtBaQApBQAQBuQAKBHADB/QADBwgLCLQgGBWgSCiQgDAmgIAwIgQBVQgbCmgdBuQgmCVg4B0QgcA3geAaQgJAGgLAAIgJgBgALphXQg2AygFBCQgKBHAvA9QAuA8BGANQAkAGARgCQAegCARgTIAIABQAegSARgOQAYgUANgWQAgg1gMhYQgFgWgGgMQgIgTgPgJIgHgSQgFgKgHgFQhAgxhEAAQhFAFg0Axg");
	this.shape_101.setTransform(9.8,-13.6,0.039,0.039,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#E15804").ss(1,0,0,4,true).p("AhLgzQgDgPAMgMQAMgLAOAEQAUAGAYAMQAOAHAcAPQARANAOAeQgBAjgIA2QgYAAgJgBQgSgCgMgJQghgYgVgfQgYgigCglg");
	this.shape_102.setTransform(4.6,-17.7,0.039,0.039,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E15804").s().p("AAjBWQgSgCgMgJQghgYgVgfQgYgigCglQgDgPAMgMQAMgLAOAEQAUAGAYAMIAqAWQARANAOAeQgBAjgIA2IgOAAIgTgBg");
	this.shape_103.setTransform(4.6,-17.7,0.039,0.039,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#B31D03").ss(1,0,0,4,true).p("AiMieQAYglBPAFQAuAMAkAYQAqAcAUAmQgcgPgPgHQgYgMgUgGQgPgEgLALQgLAMACAPQADAlAXAjQAVAeAiAYQALAJATACQAFABAcAAQAHg1ABgkQAXAmAGArQAGAtgNAqQgFASgNANQgNAOgSAFQgdAJhHgIQg/gHgjAQQAXgNAlgOQhWgvg1h6QgBgvADgcQAGgpATgdg");
	this.shape_104.setTransform(4.9,-17.5,0.039,0.039,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B31D03").s().p("AgcCgQhWgvg1h6QgBgvADgcQAGgpATgdQAYglBPAFQAuAMAkAYQAqAcAUAmIgrgWQgYgMgUgGQgPgEgLALQgLAMACAPQADAlAXAjQAVAeAiAYQALAJATACIAhABQAHg1ABgkQAXAmAGArQAGAtgNAqQgFASgNANQgNAOgSAFQgdAJhHgIQg/gHgjAQQAXgNAlgOg");
	this.shape_105.setTransform(4.9,-17.5,0.039,0.039,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#F45D04").ss(1,0,0,4,true).p("AiYjWQAIgKAMgOIAVgXQgoBggRBEQgYBcAEBOQABAtAlAhQAjAfAuADQA7AFAlgEQA3gHAkgaQARgMAMgXQAEgGAPgkQATAoAZAiQgjAUg7ARQhSAWgOAFQhEAbgiANQg9AWgugCQAAgegLg7QgLg7AAgfQgGiXBBieg");
	this.shape_106.setTransform(9.4,-18.3,0.039,0.039,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F45D04").s().p("Ai8EMQAAgegLg8QgKg7AAgeQgHiXBCifQAHgKANgNIAUgXQgnBggSBDQgXBcAEBPQABAtAkAgQAjAfAuADQA7AGAmgFQA2gGAkgbQARgLANgYIATgqQATAoAYAjQgiAUg7AQQhSAXgPAFIhmAnQg4AVgrAAIgIAAg");
	this.shape_107.setTransform(9.4,-18.3,0.039,0.039,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#DD5905").ss(1,0,0,4,true).p("AhngUQAUgPAdgKQAUgGAigIQAYAAAQAKQAMAMAZAWQAUAUAHAVQgFAWgZAIQgQAEgfAAQgugDghgRQgqgVgJgng");
	this.shape_108.setTransform(7.4,-19.4,0.039,0.039,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DD5905").s().p("AAcA8QgugDgigRQgqgVgJgnQAVgPAcgKQAUgGAigIQAZAAAPAKIAlAiQAVAUAGAVQgFAWgZAIQgOAEgaAAIgGAAg");
	this.shape_109.setTransform(7.4,-19.4,0.039,0.039,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#B31F03").ss(1,0,0,4,true).p("AiRiBQBVgeBQASQghAIgUAGQgdAKgUAPQAJAoAqAVQAgARAvADQAfAAAQgEQAZgIAFgWQgHgVgUgVQgZgWgMgMQAxAQAgAaQAoAeAMAqQAHAcAAASQAAAbgQARQgTAZgjAUQgJAFg3AaQhEgPgcgHQg2gNgpgQQgNgKgPgVQgQgZgJgLQgegmAJgyQAIg1AtgTg");
	this.shape_110.setTransform(7.5,-19.1,0.039,0.039,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B31F03").s().p("AgdB/Qg2gNgpgQQgNgKgPgVQgQgZgJgLQgegmAJgyQAIg1AtgTQBVgeBQASQghAIgUAGQgdAKgUAPQAJAoAqAVQAgARAvADQAfAAAQgEQAZgIAFgWQgHgVgUgVIglgiQAxAQAgAaQAoAeAMAqQAHAcAAASQAAAbgQARQgTAZgjAUIhAAfIhggWg");
	this.shape_111.setTransform(7.5,-19.1,0.039,0.039,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FD9F02").ss(1,0,0,4,true).p("AhkiZQAohCAOgSQAjgrArgNQAYAkAMA+QAIAjANBFQAaB3A/CbQgTApAAABQgNAYgRALQgkAbg2AGQgmAEg7gFQgugDgjgfQglgggBguQgDhPAXhcQAShDAnhgg");
	this.shape_112.setTransform(9.5,-18.8,0.039,0.039,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FD9F02").s().p("Ag6EkQgugDgjgfQglghgBgtQgDhPAXhcQAShEAnhfIAAAAQAohCAOgRQAjgsArgMQAYAkAMA+IAVBoQAaB3A/CbIgTAqQgNAXgRAMQgkAag2AHQgRABgVAAQgZAAgigCg");
	this.shape_113.setTransform(9.5,-18.8,0.039,0.039,0,0,180);

	this.instance_2 = new lib.Path_51();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.7,-19.5,0.039,0.039,0,0,180,9,12.8);
	this.instance_2.alpha = 0.891;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_1},{t:this.shape_55},{t:this.shape_54},{t:this.instance},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.girrafe, new cjs.Rectangle(-17,-20.9,34.6,41.6), null);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F93F2E").ss(19).p("AAACIIABkO");
	this.shape.setTransform(0.5,-24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F93F2E").s().p("AgcAQQgGgFgBgHQgCgHAEgHQAGgMASAAIAfAAQAPAAAAAPQAAAOgPAAIgIAAQACAMgNADIgMABQgMAAgHgHg");
	this.shape_1.setTransform(7.2,-48.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F93F2E").s().p("AgOAAQAAgOAOAAQAOAAAAAOQAAAPgOAAQgOAAAAgPg");
	this.shape_2.setTransform(4.5,-37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F93F2E").s().p("AgXAhQgpgegQgwQgFgOAPgDQAOgEAFANQAMAnAiAXQAgAYApABQAOAAAAAPQAAAPgOAAQgzgBgogeg");
	this.shape_3.setTransform(-11.3,-43.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F93F2E").s().p("Ag6AOQgOgBAAgOQAAgPAOABQA4AFA9gEQAOgBAAAPQAAAOgOABQgcABgaAAQggAAgfgCg");
	this.shape_4.setTransform(-6.7,-38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F93F2E").s().p("AgFA1QgOgEACgPQAHghgBgnQgBgOAOAAQAPAAABAOQABApgIAnQgCALgJAAIgFAAg");
	this.shape_5.setTransform(-2.1,-43);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F93F2E").s().p("AA7A1QgLgvgjgXQglgbgsARQgOAFgEgOQgEgPAOgFQA3gUAxAhQAuAfANA5QAEAOgPAEIgGABQgJAAgCgLg");
	this.shape_6.setTransform(-9.1,-49.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F93F2E").s().p("AgUA7QgRAGgUgBQgOAAAAgPQAAgPAOAAQAjABAWgYQAVgYgHgjQgCgKAKgGQAJgHAIAJIAEAEIADgEQAKgKALALQALAKgLAKQgEAEAAASIABAYQgDATgKAOQgVAcgkACIgBAAQgJAAgEgJg");
	this.shape_7.setTransform(11.7,-42.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F93F2E").s().p("Ag8AlQgEgPAOgFIAwgSQAbgOAHgVQAEgNAPAEQAOADgEAOQgJAdghATQgMAGgxAUIgHABQgIAAgDgKg");
	this.shape_8.setTransform(13.8,-40);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F93F2E").s().p("AgfAwQACg5AkguQAJgLAKAKQALALgJALQgcAkgBAuQgBAOgPAAQgPAAABgOg");
	this.shape_9.setTransform(4.8,-43);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F93F2E").s().p("AgsAzQAAgPAOgBQAwgGgEhOQAAgPAPAAQAPAAAAAPQACAtgPAdQgTAjgqAFIgDAAQgLAAAAgOg");
	this.shape_10.setTransform(13.2,-41.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F93F2E").s().p("AgjBOIgFgHQgJgKAIgKQgDgsAJgdQAPgyAugJQAPgCAEAOQAEAPgPACQgjAHgJApQgFAYAGAvQABAJgKAFIgHABQgGAAgEgEg");
	this.shape_11.setTransform(-15.1,-49.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F93F2E").s().p("AgbAkIAAgBQgGgCgDgGQgDgIADgHQANgcAbgQIAFgIQAJgMANAIQANAHgJAMIgEAHQAAADgEAEQgJAOgHAJIgIAKQACADAAAGQAAAPgNACIgDAAQgMAAgEgMg");
	this.shape_12.setTransform(-16.7,-52.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F93F2E").s().p("AgBBVIgbgVQgQgOgHgMQgJgPAAgjQAAgfAEgQQAIgeAWABQAOABABAOQADAzAIAYQAPAqAkAMQAOAEgEAPQgEAOgOgFQgKgDgJgFQAAAHgHAEQgFACgDAAQgGAAgEgEg");
	this.shape_13.setTransform(-15,-44.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F93F2E").ss(6).p("AhVBDIAOACQAZADAvADQArADAbgYQAYgUAAgXQAAgjglgeQgugkg9AbQgkAQgHA9QgDAWADASQACAQAFgDg");
	this.shape_14.setTransform(9.9,-42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F93F2E").ss(6).p("ABpBnQgLAEheAIQg0AEgigkQgcgegBgkQAAg3AugtQA3g3BLApQAsAYAJBeQADAigDAbQgDAagGgFg");
	this.shape_15.setTransform(-11,-46.7);

	this.instance = new lib.Path_16();
	this.instance.parent = this;
	this.instance.setTransform(0,-23.6,1,1,0,0,0,70.5,21.5);
	this.instance.shadow = new cjs.Shadow("rgba(117,115,115,0.71)",2,7,15);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-71.4,148,155.7);


(lib.gift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		playSound("happyEndingAudioTrimmercom");
	}
	this.frame_181 = function() {
		this.stop();
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(168).call(this.frame_181).wait(1));

	// Layer_1
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(243.4,92.8,0.329,0.329);

	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.5,-60.1);

	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-111.3,-86.6);

	this.instance_3 = new lib.Symbol1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-128.9,-84.7,1,1,0,0,0,65.2,107.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},32).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3,p:{x:-128.9,y:-84.7}}]},5).to({state:[{t:this.instance_3,p:{x:-129.9,y:-84.7}}]},5).to({state:[{t:this.instance_3,p:{x:-129.3,y:-85.6}}]},130).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:243.6,y:92.6},0).to({regY:0.1,scaleX:0.35,scaleY:0.35,x:244.3,y:91.1},1).to({regY:0,scaleX:1,scaleY:1,x:-103.5,y:-42.8},32).to({_off:true},2).wait(146));

	// Layer_4
	this.instance_4 = new lib.dog();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-104.6,-22,0.658,0.658,0,0,0,48.9,54.5);
	this.instance_4._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87139").s().p("AhhDQQgUgJgBgbQAAgJADgcQADgWgDgOQAVgKAIgKQAKgOgIgVQAJhmAghtQAKghANgGQAMgHAgALQAkAfAbAnQBBBfhFBUQADAEAHABIALACQgRAggkANQg9AYghA3QgEAIgKAKQgPAOgOAAQgFAAgGgCg");
	this.shape.setTransform(-99.4,-97.7,0.69,0.69);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D89F5B").s().p("AhJgEQgPgTADgZIAaABQAQAAAJAEQAZALASgHQAQgHAPgWQABgCAIgFQAWAOAQAUQgxAqAnA7IAEAQIgBAAQhbAAg+hQg");
	this.shape_1.setTransform(-81.8,-90.6,0.69,0.69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B46B03").s().p("AgjAXQgHgMAJgMQAdgnAmALIAFAMQgCAVgPAOQgOAOgUABIgDAAQgOAAgGgKg");
	this.shape_2.setTransform(-131.1,-122.6,0.69,0.69);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232020").s().p("AgkAtQgDgDAAgFQgDgwAAgYQABgJAFgCQAGgDAHAGIA9A+QAJAKgJAIQgIAHgKgKIgngqIAAArQgBAMgIABIgCAAQgEAAgCgDg");
	this.shape_3.setTransform(-111.6,-114.9,0.69,0.69);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6A36B").s().p("ABRCKQghgEgCgdIANgVQAIgLAKgGQAHgEACgEQAEgKgOgnQgOgmgLgIQgOgGgEgFQgUgbgcgBQgUgBgkANQgyATgogDQgBgxgBgKQgCgLAEgDQAEgCAKADQAaAIAfgEQARgDAmgLIAfgHQAwgLAbAyQAjA/A7AXQgJBRADApQgNAVgWAFQgJACgLAAIgXgBg");
	this.shape_4.setTransform(-92.9,-72.1,0.69,0.69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D89F5B").s().p("AgTAkQgMgLgKgFIA0g9IAJgJQAGgEAHADQAHAEABAIQABAFgCAJQgMArgcAkIgTgSg");
	this.shape_5.setTransform(-75.4,-97.3,0.69,0.69);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#232020").s().p("AAGAtQgNgNgQACQgHABgUAJIgFgMQAUgEAGgOQAFgLgDgUQALgjAdABQARAAALALQAIAJAHARIAAARIgBARQgEAVgQAIQgGADgHAAQgIAAgIgHg");
	this.shape_6.setTransform(-124.9,-126.8,0.69,0.69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D89F5B").s().p("AgOAyQgxgcgRglQgJgSACgPQAKABATgBQAQABAKAEQAXALARgHQAPgGANgVQACgDAJgHQAKAFAMALIATASQgcAWgBAbQgBAYATAfIAEAOIgFABQgsAAgugbg");
	this.shape_7.setTransform(-81.5,-90.6,0.69,0.69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6A36B").s().p("Ag6CGQgJgYAFgOQAFgQAUgLQANgGAEgKQADgIgBgOIgIhWQgGgygIglIAoAMQAXAIASgBQAOgBACASIAIBAIgHCaIAAAAIAAAAIAAAAQgEgBgCAGIgNATQgeAGgSABIgFAAQgYAAgUgJg");
	this.shape_8.setTransform(-116.5,-72.2,0.69,0.69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5B076").s().p("AjQA8QgMgqgTgaQggguAGglQAGgkAtghIAjgYQAUgMASgGQADAUgEALQgGAOgUAEQgngKgdAmQgKANAHAMQAHALAQgBQAVAAAPgOQAOgOACgXQAVgJAHgBQAPgBAOANQAOAMAQgJQAPgIAEgUIABgSIAAgRQAfAmAzALQAPADBSAFQB2AHAaBvQhxhQhtAIQguAEgVAkQgUAjgJAmQgVBgguA7IgJAPIgIAQQgvg2gZhZg");
	this.shape_9.setTransform(-117.1,-114.1,0.69,0.69);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C98D4C").s().p("AgqDEQhfgJhHhUIAIgQIAJgPQAug7AVhfQAJgnAUgjQAVgkAvgEQBsgIBxBQQAIARAHAqQgigLgMAHQgMAGgKAhQggBsgKBnQg8AQg0AAIgdgBgAgcieQgFACgBAJQAAAYADAxQAAAFADADQADAEAFgBQAIgBABgMIAAgsIAnArQAKAKAIgHQAJgIgJgKIg9g/QgFgEgEAAIgEABg");
	this.shape_10.setTransform(-112.1,-107.2,0.69,0.69);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D89F5B").s().p("AjLETQggAAgLgOQgLgOAFggIAGgGQAGgEgBgGQAQgEAEgDQAKgFgCgNIgFhAQgEglgIgaIgKhEQgCgRgOABQgRABgYgHIgngMQgMgeAXhPQAWhPAHAMIB9gcQgDg0AQB1QAQB4gDgCQASAIAVgTQAKgIAFgKQAfg2BAgZQAigNASggQApgEAbADQgDAaAPATQA+BRBdAAQAVAwAKA+QAIApAGBKQACAYADBSQgLAXgXAGQgMADghgCQgsgBAHgpQAcgVACgbQADgXgRggIgJgUQgHgJgMgCQg4gegkg5QgTgegPgGQgQgHgjAHIgVAGIgVAGQgjAIgTACQgFAAgWgGQgPgFgGAJQgGAIABAQIACAeIABAOIgNCYQgGAOACAMQAGAogsAJQgLADgQAAIgLgBg");
	this.shape_11.setTransform(-96.2,-78.1,0.69,0.69);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D89F5B").s().p("AhSBwQgSgIgCgcQAAgPgJhBIgIg/IAtguQAAAHA+AcIAwASQA2ASAeACQgSAfgjAMQhAAZgeA2QgFAKgKAJQgPANgNAAQgGAAgGgCg");
	this.shape_12.setTransform(-100.6,-91.1,0.69,0.69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D89F5B").s().p("AgygCQgLgNACgSIATABQALAAAGADQARAHAMgEQALgFAKgQQABgBAFgEQAFADAOABQAKACgCASIgLAjQgGATAKAPIACAMIgBAAQg+AAgqg3g");
	this.shape_13.setTransform(-80.7,-90.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D89F5B").s().p("AgNAYQgIgHgHgDIAkgqIAGgHQAEgCAFACQAFACAAAGQABADgCAHQgIAdgTAZIgNgNg");
	this.shape_14.setTransform(-76.4,-97.7,1,1,-30,0,0,0.1,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D89F5B").s().p("AgLAyQgxgcgRglQgJgSACgPQAKABATgBQAQABAKAEQAXALARgHQAPgGANgVQACgDAJgHQAKAFAMALQASARgGABQgVAWgBAbQgBAYATAfIAEAOIgFABQgsAAgugbg");
	this.shape_15.setTransform(-80.7,-90.6,0.69,0.69);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#232020").s().p("AgKA1QgSgIgDgSQgCgIACgZIACgJQAIgVAFgGQAJgNAOACQAQACAGAQQADAJABAVIgCAMQgFAZgMANQgJAKgIAAQgEAAgDgCg");
	this.shape_16.setTransform(-120.9,-111.5,0.649,0.649);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#232020").s().p("AgHA2QgMgBgFgKQgEgGgCgOIgBgQQACgoAYgQQAFgFAHAAQAHABAFAFQALANACARQAAALgDAVQgBAGgFALQgGANgGAFQgGAGgIAAIgEgBg");
	this.shape_17.setTransform(-105.3,-109.2,0.649,0.649);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C98D4C").s().p("AgUAIQgWgIgJgOQALgCAoAIQAgAGAUgMQgLAVgTAGQgGACgIAAQgMAAgQgHg");
	this.shape_18.setTransform(-116.8,-93.2,0.649,0.649);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#232020").s().p("AAIBIQgogIgLACQgWgTgDgFQgEgGgBgOQAIABAGAIQAHAKAEACQANAIAEABQALADAEgHQAGgKgBgLQgCgNgLgIIgNgHQgOgLgFgJQgHgMAEgOQAIgYAlgBQAXgBAVAIQAQAGAHAHQAKAKAAAPQAAAOgKAKQgJAHgOADQgUAEgHAHQgJAKAIARQAIAQAQAAQAIgBAVgIIAHgFQAFgDAGABQADAHgFAGIgMAIQgNAIgSAAQgKAAgKgCg");
	this.shape_19.setTransform(-117.3,-98.4,0.649,0.649);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D6A36B").s().p("ABWCOQglgDgDgfIASgcIARgLQAKgIgEgMIgKgvQgGgagTgNQgegUgQgPQgLgLgQACQgIABgWAHQg+AWg1ADIgBgSQgBgoAHgGQAGgGAoABQAKAAAggHIA1gOQAlgJARAHQAQAGAWAhQAVAgAUAUQAZAZAeAMIgFA/QgDAmACAZQgMAVgVAGQgJADgNAAIgVgCg");
	this.shape_20.setTransform(-90.9,-73.2,0.649,0.649);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D89F5B").s().p("AgUAlQgLgLgKgFQAIgOASgTIAdghQAKgNAKAGQAKAFgDAQQgKAxggAlIgTgSg");
	this.shape_21.setTransform(-73.9,-97.3,0.649,0.649);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D89F5B").s().p("AgOAzQgzgdgRglQgJgTACgQQApgBAZAJQATAHALgEQAOgEAKgRQACgEAHgGIAKgIQAKAFALAKIATATQgcAXAAAcQAAAYASAhQADAEABALIgFAAQgtAAgwgcg");
	this.shape_22.setTransform(-79.9,-90.8,0.649,0.649);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D6A36B").s().p("Ag8CKQgUgrArgXQAMgHAEgJQAEgHgBgOQgJh6gOg8IAqAOQAaAHATgBQAMAAACAQIAHBCIgHCiQgBAGgIAGQgIAGgCAFQggAHgSABIgFAAQgZAAgVgKg");
	this.shape_23.setTransform(-113.6,-72.9,0.649,0.649);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C98D4C").s().p("AhUA8QgOhDAEgyIBIgmQApgXAdgTQANgJAGgGQAJgJABgNIASAAQAIBrgjCIQgPA9g6AUQgLAEgPAIIgaANQgThNgIgmgAgLgMQgEAGgIAUIgDAJQgBAaABAIQAEASARAIQAMAGAMgOQAMgNAFgZIADgNQgCgVgDgIQgFgQgQgCIgEgBQgMAAgIAMg");
	this.shape_24.setTransform(-121.3,-113.5,0.649,0.649);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A87139").s().p("Ah1BgQgSgNACggQABgtASglQAWgtAngSQApgRAuAQQAwARALAGQAfARAKAfQgBAMgJAKQgGAEgNAJQgdATgqAXIhHAnIggAJQgMADgKAAQgQAAgKgIg");
	this.shape_25.setTransform(-125,-123.2,0.649,0.649);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A87139").s().p("AA/ByIgrgWQhZhOgrguQgNgOgEgJQgGgOAEgPQAmgfBFgBQBEgBAnAeQAlAcAKA6QALA6gZAnQgNAVgWAAQgIAAgKgDg");
	this.shape_26.setTransform(-97.2,-118.1,0.649,0.649);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C98D4C").s().p("AhhBcQgggaACguQADiABQhrQAHgBAOAGQgEAPAGAOQAFAJAMAOQAqAvBaBOQgJAjgVArQgJASghA4QgIANgtBVQgrhOg5gvgAgWgmQgYAQgCAoIABAQQACAOAEAGQAFAKAMABQALACAIgHQAFgFAGgNQAFgLABgGQADgWAAgKQgCgRgLgNQgEgFgHgBQgHAAgGAFg");
	this.shape_27.setTransform(-104.2,-109.9,0.649,0.649);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5B076").s().p("AghEHQgtgFgjggQgigfgLgtQgDgNgBgSIABggIAagNQAPgIALgDQA7gVAPg8QAjiJgIhqQA6gLBBAYQhQBsgDCBQgCAsAgAbQA5AuAsBOQgiAzg1ATQggAMgoAAQgRAAgUgDgAhvC6QAEAGAVASQAJAPAWAJQAYALATgGQASgGALgWIALgJQAFgFgDgIQgFgBgFADIgIAFQgUAJgIAAQgQABgIgQQgIgSAJgJQAHgIAVgEQANgCAIgIQALgKAAgPQAAgOgKgKQgIgIgPgGQgUgIgZABQgkABgIAYQgFAOAIANQAFAJAOAKIAMAIQAMAIABAOQABALgGAKQgEAHgKgEQgEgBgOgIQgDgCgIgKQgGgIgHgBQABAPADAFg");
	this.shape_28.setTransform(-114.6,-107.8,0.649,0.649);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D89F5B").s().p("AjNEdQghgBgLgOQgMgPAFggIAGgHQAHgEgBgGQAQgEAFgDQAJgGgBgNIgGhCQgEgmgIgbIgKhGQgDgSgOABQgSACgYgIIgogMQgJgZgEhCIgCg9ICng4IASgDQgEg2ARB5QARB8gDgCQATAIAVgTQALgJAFgKQAgg5BBgZQAkgNATghQAngFAfAEQgEAaAQAUQA/BUBhAAQAWAyALBAQAHArAHBMIAGBtQgMAYgYAGQgNADgigCQgtgCAHgqQAcgVAEgcQACgZgRggQgGgOgEgGQgHgKgMgCQg7gfgkg7QgUgfgQgGQgQgHglAHIgqAMQglAIgUACQgGABgVgHQgQgEgGAJQgGAIABARIACAeIABAPIgNCdQgGAMACAOQAFAqgtAKQgLACgRAAIgLAAg");
	this.shape_29.setTransform(-94.1,-78.7,0.649,0.649);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D89F5B").s().p("AhUB0QgUgJgBgcQgBgQgIhDIgJhBIAvgwQAAAEAfARIAgAQIAxASQA5ASAfACQgTAhgkANQhCAZgfA4QgFAKgKAJQgPAOgPAAQgGAAgFgCg");
	this.shape_30.setTransform(-98.1,-91.3,0.649,0.649);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},51).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.shape_12,p:{x:-100.6}},{t:this.shape_11,p:{x:-96.2}},{t:this.shape_10,p:{x:-112.1}},{t:this.shape_9,p:{x:-117.1}},{t:this.shape_8,p:{x:-116.5}},{t:this.shape_7},{t:this.shape_6,p:{x:-124.9}},{t:this.shape_5},{t:this.shape_4,p:{x:-92.9}},{t:this.shape_3,p:{x:-111.6}},{t:this.shape_2,p:{x:-131.1}},{t:this.shape_1},{t:this.shape,p:{x:-99.4}}]},8).to({state:[{t:this.shape_12,p:{x:-99.6}},{t:this.shape_11,p:{x:-95.2}},{t:this.shape_10,p:{x:-111.1}},{t:this.shape_9,p:{x:-116.1}},{t:this.shape_8,p:{x:-115.5}},{t:this.shape_15},{t:this.shape_6,p:{x:-123.9}},{t:this.shape_14},{t:this.shape_4,p:{x:-91.9}},{t:this.shape_3,p:{x:-110.6}},{t:this.shape_2,p:{x:-130.1}},{t:this.shape_13},{t:this.shape,p:{x:-98.4}}]},3).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.shape_30,p:{x:-98.1,y:-91.3}},{t:this.shape_29,p:{x:-94.1,y:-78.7}},{t:this.shape_28,p:{x:-114.6,y:-107.8}},{t:this.shape_27,p:{x:-104.2,y:-109.9}},{t:this.shape_26,p:{x:-97.2,y:-118.1}},{t:this.shape_25,p:{x:-125,y:-123.2}},{t:this.shape_24,p:{x:-121.3,y:-113.5}},{t:this.shape_23,p:{x:-113.6,y:-72.9}},{t:this.shape_22,p:{x:-79.9,y:-90.8}},{t:this.shape_21,p:{x:-73.9,y:-97.3}},{t:this.shape_20,p:{x:-90.9,y:-73.2}},{t:this.shape_19,p:{x:-117.3,y:-98.4}},{t:this.shape_18,p:{x:-116.8,y:-93.2}},{t:this.shape_17,p:{x:-105.3,y:-109.2}},{t:this.shape_16,p:{x:-120.9,y:-111.5}}]},3).to({state:[{t:this.shape_30,p:{x:-97.7,y:-91.9}},{t:this.shape_29,p:{x:-93.7,y:-79.3}},{t:this.shape_28,p:{x:-114.1,y:-108.4}},{t:this.shape_27,p:{x:-103.7,y:-110.5}},{t:this.shape_26,p:{x:-96.7,y:-118.7}},{t:this.shape_25,p:{x:-124.6,y:-123.8}},{t:this.shape_24,p:{x:-120.8,y:-114.1}},{t:this.shape_23,p:{x:-113.1,y:-73.5}},{t:this.shape_22,p:{x:-79.5,y:-91.4}},{t:this.shape_21,p:{x:-73.5,y:-97.9}},{t:this.shape_20,p:{x:-90.4,y:-73.8}},{t:this.shape_19,p:{x:-116.9,y:-99.1}},{t:this.shape_18,p:{x:-116.4,y:-93.8}},{t:this.shape_17,p:{x:-104.8,y:-109.8}},{t:this.shape_16,p:{x:-120.5,y:-112.2}}]},95).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},0).wait(6).to({x:-103.6,y:-66.5},0).wait(4).to({x:-107.6,y:-92.5},0).to({_off:true},8).wait(14).to({_off:false,x:-104.7,y:-96.4},0).to({_off:true},3).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(209.8,68.4,75,69.9);


(lib.backG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-10.1,-1.1,1,1,0,0,0,529.8,388.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backG, new cjs.Rectangle(-539.9,-389.1,1060.2,777.1), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B08A53").s().p("AgJABQgFgBAKgBQAJgBAFACQAFABgKABIgFAAQgFAAgEgBg");
	this.shape.setTransform(1.2,0.2);

	this.instance = new lib.ClipGroup_0_1();
	this.instance.parent = this;
	this.instance.setTransform(1.2,34.6,1,1,0,0,0,1.1,34.4);

	this.instance_1 = new lib.ClipGroup_1_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,34.5,1,1,0,0,0,0.1,34.3);

	this.instance_2 = new lib.ClipGroup_2_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.2,34.3,1,1,0,0,0,1.2,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B08A53").s().p("AgJABQgDgBAIgBQAJgBAEACQAFABgJABIgGABQgFAAgDgCg");
	this.shape_1.setTransform(1.1,68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,2.4,69), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6824E").s().p("AgJABQgFgBAKgBQAJgBAFACQAFABgKABIgFAAQgFAAgEgBg");
	this.shape.setTransform(1.2,0.3);

	this.instance = new lib.ClipGroup_60();
	this.instance.parent = this;
	this.instance.setTransform(1.2,34.7,1,1,0,0,0,1.1,34.4);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,34.6,1,1,0,0,0,0.1,34.3);

	this.instance_2 = new lib.ClipGroup_2_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.2,34.4,1,1,0,0,0,1.2,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6824E").s().p("AgIABQgFgBAKgBQAIgBAFACQAEABgJABIgFAAQgFAAgDgBg");
	this.shape_1.setTransform(1,68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,2.4,69), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_59();
	this.instance.parent = this;
	this.instance.setTransform(24.2,58.5,1,1,0,0,0,19.9,15.2);

	this.instance_1 = new lib.Group_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.8,39.3,1,1,0,0,0,1.2,34.5);

	this.instance_2 = new lib.ClipGroup_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.2,4.4,1,1,0,0,0,24.2,1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#88693E").s().p("AgDAZQhlAAhFgHQhGgIACgKQACgKBIgHQBIgHBjAAQBkAABGAHQBGAIgCAJQgCALhIAHQhEAHhcAAIgLAAg");
	this.shape.setTransform(24.2,2.8);

	this.instance_3 = new lib.Group_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.7,39.2,1,1,0,0,0,1.2,34.5);

	this.instance_4 = new lib.ClipGroup_2_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24.2,36,1,1,0,0,0,6.6,2.7);

	this.instance_5 = new lib.ClipGroup_3_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.2,3,1,1,0,0,0,0.1,0.5);

	this.instance_6 = new lib.ClipGroup_4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,2.5);

	this.instance_7 = new lib.ClipGroup_5_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(24.1,2.5);

	this.instance_8 = new lib.ClipGroup_6_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(24.2,3,1,1,0,0,0,0.1,0.5);

	this.instance_9 = new lib.ClipGroup_7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(24.2,1.9,1,1,0,0,0,24.2,1.9);

	this.instance_10 = new lib.ClipGroup_8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(24.4,38.4,1,1,0,0,0,0.7,35);

	this.instance_11 = new lib.ClipGroup_9();
	this.instance_11.parent = this;
	this.instance_11.setTransform(24.3,19.2,1,1,0,0,0,19.8,15.5);

	this.instance_12 = new lib.ClipGroup_10();
	this.instance_12.parent = this;
	this.instance_12.setTransform(24.1,3.4);

	this.instance_13 = new lib.ClipGroup_11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(24.3,41.8,1,1,0,0,0,6.5,3.1);

	this.instance_14 = new lib.ClipGroup_12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(25.5,33.4);

	this.instance_15 = new lib.ClipGroup_13();
	this.instance_15.parent = this;
	this.instance_15.setTransform(21.6,37,1,1,0,0,0,4,3.6);

	this.instance_16 = new lib.ClipGroup_14();
	this.instance_16.parent = this;
	this.instance_16.setTransform(22.9,38.7);

	this.instance_17 = new lib.ClipGroup_15();
	this.instance_17.parent = this;
	this.instance_17.setTransform(17.8,38.7);

	this.instance_18 = new lib.ClipGroup_16();
	this.instance_18.parent = this;
	this.instance_18.setTransform(24.2,3.7,1,1,0,0,0,0.1,0.3);

	this.instance_19 = new lib.ClipGroup_17();
	this.instance_19.parent = this;
	this.instance_19.setTransform(24.2,3.7,1,1,0,0,0,0.1,0.3);

	this.instance_20 = new lib.ClipGroup_18();
	this.instance_20.parent = this;
	this.instance_20.setTransform(24.1,3.4);

	this.instance_21 = new lib.ClipGroup_19();
	this.instance_21.parent = this;
	this.instance_21.setTransform(23.7,3.4);

	this.instance_22 = new lib.ClipGroup_20();
	this.instance_22.parent = this;
	this.instance_22.setTransform(24.2,3.6,1,1,0,0,0,0.1,0.2);

	this.instance_23 = new lib.ClipGroup_21();
	this.instance_23.parent = this;
	this.instance_23.setTransform(24.2,3.6,1,1,0,0,0,0.1,0.2);

	this.instance_24 = new lib.ClipGroup_22();
	this.instance_24.parent = this;
	this.instance_24.setTransform(24.2,38.4,1,1,0,0,0,0.5,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AFAFAF").s().p("AhJAIQgdgEAAgEQABgEAfgDQAegDAqAAQAqAAAeAEQAeADgBADQgBAFgfADQgeADgqAAQgqAAgegDg");
	this.shape_1.setTransform(24.2,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#88693E").s().p("AitARQhGgHACgKQACgKBIgHQBHgHBkAAQBkAABGAIQBGAHgCAJQgCALhIAHQhIAHhjAAQhlAAhFgIgAhGgHQgfADgBAEQAAAEAdAEQAeADAqAAQAqAAAegDQAfgDABgFQABgDgegDQgegEgqAAQgqAAgeADg");
	this.shape_2.setTransform(24.2,3.9);

	this.instance_25 = new lib.ClipGroup_23();
	this.instance_25.parent = this;
	this.instance_25.setTransform(4.5,3.7);

	this.instance_26 = new lib.ClipGroup_24();
	this.instance_26.parent = this;
	this.instance_26.setTransform(11.3,25.1,1,1,0,0,0,6.8,12.8);

	this.instance_27 = new lib.ClipGroup_25();
	this.instance_27.parent = this;
	this.instance_27.setTransform(25.5,33.3);

	this.instance_28 = new lib.ClipGroup_26();
	this.instance_28.parent = this;
	this.instance_28.setTransform(17.5,33.3);

	this.instance_29 = new lib.ClipGroup_27();
	this.instance_29.parent = this;
	this.instance_29.setTransform(17.5,33.2);

	this.instance_30 = new lib.ClipGroup_28();
	this.instance_30.parent = this;
	this.instance_30.setTransform(24.3,18.1,1,1,0,0,0,19.8,15.3);

	this.instance_31 = new lib.ClipGroup_29();
	this.instance_31.parent = this;
	this.instance_31.setTransform(24.2,35.7,1,1,0,0,0,6.7,3.1);

	this.instance_32 = new lib.ClipGroup_30();
	this.instance_32.parent = this;
	this.instance_32.setTransform(25.5,38.7);

	this.instance_33 = new lib.ClipGroup_31();
	this.instance_33.parent = this;
	this.instance_33.setTransform(25.5,38.7);

	this.instance_34 = new lib.ClipGroup_32();
	this.instance_34.parent = this;
	this.instance_34.setTransform(17.8,38.8);

	this.instance_35 = new lib.ClipGroup_33();
	this.instance_35.parent = this;
	this.instance_35.setTransform(20.4,41.2,1,1,0,0,0,2.6,2.5);

	this.instance_36 = new lib.ClipGroup_34();
	this.instance_36.parent = this;
	this.instance_36.setTransform(24.3,41.3,1,1,0,0,0,6.5,2.8);

	this.instance_37 = new lib.ClipGroup_35();
	this.instance_37.parent = this;
	this.instance_37.setTransform(4.5,44);

	this.instance_38 = new lib.Group_5();
	this.instance_38.parent = this;
	this.instance_38.setTransform(24.3,74.3,1,1,0,0,0,11.2,0.7);

	this.instance_39 = new lib.ClipGroup_36();
	this.instance_39.parent = this;
	this.instance_39.setTransform(24.2,58.5,1,1,0,0,0,19.9,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88693E").s().p("AitARQhGgHACgKQACgKBIgHQBHgHBkAAQBkAABGAIQBGAHgCAJQgCALhIAHQhIAHhjAAQhlAAhFgIgAhOgHQgiADgBAEQgBAFAhADQAhAEAvAAQAuAAAigEQAigDABgFQABgEghgDQghgEgvAAQgvAAghAEg");
	this.shape_3.setTransform(24.2,73.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AFAFAF").s().p("AhRAIQghgDABgFQABgEAigDQAhgEAvAAQAvAAAhAEQAhADgBAEQgBAFgiADQgiAEguAAQgvAAghgEg");
	this.shape_4.setTransform(24.2,73.3);

	this.instance_40 = new lib.ClipGroup_37();
	this.instance_40.parent = this;
	this.instance_40.setTransform(24.2,74.3,1,1,0,0,0,11.1,0.7);

	this.instance_41 = new lib.ClipGroup_38();
	this.instance_41.parent = this;
	this.instance_41.setTransform(24.2,73.3,1,1,0,0,0,11.4,1.1);

	this.instance_42 = new lib.ClipGroup_39();
	this.instance_42.parent = this;
	this.instance_42.setTransform(24.2,73.3,1,1,0,0,0,11.4,1.1);

	this.instance_43 = new lib.ClipGroup_40();
	this.instance_43.parent = this;
	this.instance_43.setTransform(14.1,73.9,1,1,0,0,0,1.3,0.6);

	this.instance_44 = new lib.ClipGroup_41();
	this.instance_44.parent = this;
	this.instance_44.setTransform(14.1,73.9,1,1,0,0,0,1.3,0.6);

	this.instance_45 = new lib.ClipGroup_42();
	this.instance_45.parent = this;
	this.instance_45.setTransform(24.2,74.1,1,1,0,0,0,0.5,0.7);

	this.instance_46 = new lib.ClipGroup_43();
	this.instance_46.parent = this;
	this.instance_46.setTransform(24.2,74.1,1,1,0,0,0,0.5,0.7);

	this.instance_47 = new lib.ClipGroup_44();
	this.instance_47.parent = this;
	this.instance_47.setTransform(24.2,74.1,1,1,0,0,0,0.1,0.7);

	this.instance_48 = new lib.ClipGroup_45();
	this.instance_48.parent = this;
	this.instance_48.setTransform(0,73.3);

	this.instance_49 = new lib.ClipGroup_46();
	this.instance_49.parent = this;
	this.instance_49.setTransform(24.2,75.3,1,1,0,0,0,24.2,1.9);

	this.instance_50 = new lib.ClipGroup_47();
	this.instance_50.parent = this;
	this.instance_50.setTransform(24.2,74,1,1,0,0,0,0.1,0.7);

	this.instance_51 = new lib.ClipGroup_48();
	this.instance_51.parent = this;
	this.instance_51.setTransform(23.7,73.4);

	this.instance_52 = new lib.ClipGroup_49();
	this.instance_52.parent = this;
	this.instance_52.setTransform(23.7,73.4);

	this.instance_53 = new lib.ClipGroup_50();
	this.instance_53.parent = this;
	this.instance_53.setTransform(24.2,74,1,1,0,0,0,0.5,0.7);

	this.instance_54 = new lib.ClipGroup_51();
	this.instance_54.parent = this;
	this.instance_54.setTransform(24.2,74,1,1,0,0,0,0.5,0.7);

	this.instance_55 = new lib.ClipGroup_52();
	this.instance_55.parent = this;
	this.instance_55.setTransform(24.2,74.1,1,1,0,0,0,9.5,1);

	this.instance_56 = new lib.ClipGroup_53();
	this.instance_56.parent = this;
	this.instance_56.setTransform(24.2,74.1,1,1,0,0,0,9.5,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#88693E").s().p("AgDAZQhlAAhFgIQhGgHACgKQACgKBIgHQBIgIBjABQBkAABGAIQBGAHgCAKQgCAKhIAHQhEAHhcAAIgLAAgAgWAAQAAACAWABQAWgBABgCQAAgBgXgBQgVABgBABg");
	this.shape_5.setTransform(24.2,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AFAFAF").s().p("AgWAAQABgBAVgBQAXABAAABQgBACgWABQgWgBAAgCg");
	this.shape_6.setTransform(24.2,74.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88693E").s().p("AgWAAQABgBAVgBQAXABAAABQgBACgWABQgWgBAAgCg");
	this.shape_7.setTransform(24.2,74.7);

	this.instance_57 = new lib.ClipGroup_54();
	this.instance_57.parent = this;
	this.instance_57.setTransform(24.2,74.8,1,1,0,0,0,0.5,0.1);

	this.instance_58 = new lib.ClipGroup_55();
	this.instance_58.parent = this;
	this.instance_58.setTransform(24.2,72.7,1,1,0,0,0,24.2,1.9);

	this.instance_59 = new lib.ClipGroup_56();
	this.instance_59.parent = this;
	this.instance_59.setTransform(23.7,74.7);

	this.instance_60 = new lib.ClipGroup_57();
	this.instance_60.parent = this;
	this.instance_60.setTransform(24.2,74.8,1,1,0,0,0,2.3,0.3);

	this.instance_61 = new lib.ClipGroup_58();
	this.instance_61.parent = this;
	this.instance_61.setTransform(24.2,59.3,1,1,0,0,0,19.9,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.shape_4},{t:this.shape_3},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_2},{t:this.shape_1},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,48.5,77.2), null);


(lib.TimeOB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(0,6.6,0.876,0.876,0,0,0,24.2,38.6);

	this.timeOutTxt = new cjs.Text("אזל הזמן", "bold 24px 'Arial'");
	this.timeOutTxt.name = "timeOutTxt";
	this.timeOutTxt.textAlign = "center";
	this.timeOutTxt.lineHeight = 29;
	this.timeOutTxt.lineWidth = 330;
	this.timeOutTxt.parent = this;
	this.timeOutTxt.setTransform(1.1,-79.6,0.979,0.979);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5D62C").s().p("A3rTOQgyAAgjgjQgjgjAAgyMAAAgirQAAgxAjgkQAjgjAyAAMAvXAAAQAyAAAjAjQAjAkAAAxMAAAAirQAAAygjAjQgjAjgyAAg");
	this.shape.setTransform(0.2,5.7,1.089,0.889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.timeOutTxt},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TimeOB, new cjs.Rectangle(-178,-103.6,356.3,218.7), null);


// stage content:
(lib.testingsize = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		//קביעת גובה ורוחב הבמה
		var stageH = 590;
		var stageW = 960;
		
		$("#canvas").css("direction", "rtl");
		
		var start = "begining";
		var gameArr;//משתנה לקליטת השאלות והתשובות
		var mychoice = 0;//משתנה לקליטת בחירת המשחק על ידי המשתמש
		var currentAnswer = 0 //משתנה לקליטת שם התשובה שנלחצה לאחר חיתוך 
		var target = 0 // משתנה לקליטת חיתוך שם של התשובה הנכונה ביצירה
		var qNum = 0; //משתנה לספירת שאלות
		//var correctQ = 0; //משתנה לספירת התשובות הנכונות
		var rndQ; //משתנה להעלאת שאלות באופן רנדומלי
		var rndAns; // משתנה להעלאת מסיחים באופן רנדומלי
		var currentCir = 0; // משתנה לקליטת מספר העיגול הנוכחי בהתאם לשאלה
		var mistakeArr = []// מערך לשמירת הטעויות
		var timer; // פתיחת אינטרוול
		var scaleSize = 0; //משתנה שךפיו ישתנה הגודל
		var numGls = 0;//משתנה לשמירת ערך זכוכית המגדלת במסיחים
		var clockTXT;//משתנה לקליטת הטקסט של הטיימר
		var subjects = ["לא בחרת נושא", "חגים ומועדים בישראל", "בעלי חיים"];//מערך לשמות המשחקים
		// שניות ודקות של כל המשחק
		var totalTime = false; // זמן של המשחק כולו
		var timerAllmin = 0;
		var timerAllsec = 0;
		var timeAllGame;
		//משתנה שלתוכו יוכנס הזמן לכל שאלה
		var time;
		var timeOutBack = new lib.TimeOB(); // רקע כשנגמר הזמן
		timeOutBack.name = "timeout";
		var boyInterval; //משתנה להגדרת אינטרוול לתזוזת הילד 
		var directionBoyX;//משתנה גלובלי לתזוזת הילד על ציר האיקס
		var background;
		var forcombo;
		createOpen();
		
		function createOpen() {
			setArr();
			///////רקע המשחק///////////
			background = new lib.backG(); //יצירת רקע המשחק
			background.x = stageW / 2; //מיקום באמצע הבמה
			background.y = stageH / 2;
			background.name = "backG"; // הזרקת שם לרקע
			stage.addChild(background); //הוספת הרקע לבמה
			background.gotoAndStop(1); //בחירה של פריים מתוך מצבי הרקע
		
			//הוספת הקומבו לבמה
			forcombo = new lib.forcomb();
			forcombo.x = stageW / 2;
			forcombo.y = stageH / 2;
			stage.addChild(forcombo);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0;
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
			//start = "begining";
		}
		
		function mycb_change(evt) {
		
			//שימרת הערך שנבחר בקומבו
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", createGame);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", createGame);
			}
		}
		
		function setArr() {
			gameArr = [
				[],
				//משחק אחד
				[
		
					[
						["מה שמו הנוסף של חג הקציר?", "noImg", 1],
						["שבועות", "true", "text"],
						["סוכות", "false", "text"],
						["טו בשבט", "false", "text"],
						["שמחת תורה", "false", "text"]
					],
					[
						["מי מהבאים אינו מארבעת המינים?", "noImg", 1],
						["לולב", "false", "text"],
						["אתרוג", "false", "text"],
						["ערבה", "false", "text"],
						["תאנה", "true", "text"]
					],
					[
						["כמה ימי תשובה יש בין ראש השנה ליום הכיפורים ?", "noImg", 1],
						["7", "false", "text"],
						["10", "true", "text"],
						["3", "false", "text"],
						["8", "false", "text"]
					],
		
					[
						["מה שמו הנוסף של חג טו בשבט?", "noImg", 1],
						["חג הנטיעות", "false", "text"],
						["ראש השנה לאילנות", "true", "text"],
						["חג הפירות", "false", "text"],
						["חג העצים", "false", "text"]
					],
		
					[
						["את המאכל הבא אוכלים בחודש...", lib.purim, 1],
						["תשרי", "false", "text"],
						["אדר", "true", "text"],
						["אלול", "false", "text"],
						["אב", "false", "text"]
					],
					[
						["מה הם שלושת הרגלים?", "noImg", 1],
						["חנוכה, פורים ושבועות", "false", "text"],
						["סוכות, פסח ושבועות", "true", "text"],
						["ראש השנה, פסח ופורים", "false", "text"],
						["שבועות חנוכה ופסח", "false", "text"]
					],
					[
						["מה מציין חג פסח?", "noImg", 1],
						["ניצחון המכבים", "false", "text"],
						["יציאת בני ישראל מעבדות לחירות", "true", "text"],
						["נס פח השמן", "false", "text"],
						["הולדת משה רבינו", "false", "text"]
					],
					[
						["מדוע צמים בתשעה באב?", "noImg", 1],
						["לזכר רצח גדליהו בן אחיקם", "false", "text"],
						["לזכר חורבן בית המקדש הראשון והשני", "true", "text"],
						["לזכר חורבן בית המקדש הראשון", "false", "text"],
						["לזכר מעמד הר סיני", "false", "text"]
					],
					[
						["מה שם אביו של יהודה המכבי?", "noImg", 1],
						["שמעון", "false", "text"],
						["מתתיהו", "true", "text"],
						["יונתן", "false", "text"],
						["אליעזר", "false", "text"]
					],
					[
						["מה מהבאים אינו חלק מקערת פסח?", "noImg", 1],
						[lib.chicken, "false", "img"],
						[lib.matza, "true", "img"],
						[lib.egg, "false", "img"],
						[lib.karpas, "false", "img"]
					]
				],
				//משחק שתיים
				[
		
					[
						["למי מהקנגרואים יש כיס?", "noImg", 1],
						["לנקבות", "true", "text"],
						["לכולם", "false", "text"],
						["לזכרים", "false", "text"],
						["לצעירים", "false", "text"]
					],
					[
						["איך קוראים לבן של האריה?", "noImg", 1],
						["גור", "false", "text"],
						["כפיר", "true", "text"],
						["אריה", "false", "text"],
						["לביא", "false", "text"]
					],
					[
						["מהו החוש המפותח ביותר אצל הכלב?", "noImg", 1],
						["חוש השמיעה", "false", "text"],
						["חוש הריח", "true", "text"],
						["חוש הטעם", "false", "text"],
						["חוש הראיה", "false", "text"]
					],
		
					[
						["איך קוראים לאמא של הכפיר?", "noImg", 1],
						["אריה", "false", "text"],
						["לביאה", "true", "text"],
						["כפירה", "false", "text"],
						["נמרה", "false", "text"]
					],
		
					[
						["מה מייחד את הג'ירפה?", "noImg", 1],
						["קול מיוחד", "false", "text"],
						["רגליים וצוואר ארוכים במיוחד", "true", "text"],
						["הליכה איטית", "false", "text"],
						["לשון ירוקה", "false", "text"]
					],
		
					[
						["מה החיה היבשתית הכי גדולה שקיימת כיום?", "noImg", 1],
						[lib.girrafe, "false", "img"],
						[lib.elephent, "true", "img"],
						[lib.hipo, "false", "img"],
						[lib.lion, "false", "img"]
					],
		
					[
						["איזה משפט נהוג להגיד?", "noImg", 1],
						["בבית שיש כלב אין חתול", "false", "text"],
						["כלב הוא חברו הטוב ביותר של האדם", "true", "text"],
						["יש לנו כלב, לכלב יש זקן", "false", "text"],
						["כלב נושך לא נובח", "false", "text"]
					],
		
					[
						["כיצד נקראים פר ופרה צעירים?", "noImg", 1],
						["פר-פרה", "false", "text"],
						["עגל-עגלה", "true", "text"],
						["טלה-טליה", "false", "text"],
						["שעיר-שעירה", "false", "text"]
					],
		
					[
						["למה מבין הבאים משמש החדק של הפיל?", "noImg", 1],
						["לעיסה", "false", "text"],
						["אחיזה", "true", "text"],
						["ליטוף", "false", "text"],
						["גירוד", "false", "text"]
					],
		
					[
						["היכן חיה החיה הבאה?", lib.camel, 1],
						["ערים", "false", "text"],
						["מדבריות", "true", "text"],
						["חופים", "false", "text"],
						["ביערות", "false", "text"]
					]
		
				]
			];
		}
		
		function createGame() {
			start = "gamestarted";
			stage.removeChild(forcombo); // מחיקת הקומבו מהבמה ברגע שבחר נלחץ
		
			var recWhite = new lib.recWhite(); // יצירת מלבן לבן
			recWhite.x = stageW / 2;
			recWhite.y = stageH / 4 + 20;
			recWhite.name = "rec"; // הזרקת שם למלבן
			stage.addChild(recWhite); //הןספת המלבן לבמה
		
			//יצירת שעון על הבמה
			var clock = new lib.clock(); //שעון שסופר לאחור
			clock.name = "clock";
			clock.y = -80;
			clock.x = 330;
			recWhite.addChild(clock); //הוספת השעון שסופר שניות אחורה למלבן הלבן
		
			clockTXT = new createjs.Text(); //תיבת טקסט שמציגה את הזמן שרץ לאחור
			clockTXT.name = "clockTXT";
			clock.addChild(clockTXT);
		
			//יצירת האנימציה של הילד הולך למטה ולמעלה
			var boy = new lib.boy();
			boy.name = "boy";
			boy.x = 50;
			boy.y = stageH - 80;
			boy.scaleX = 0.50;
			boy.scaleY = 0.50;
			stage.addChild(boy);
			boy.gotoAndStop(0);
		
			//יצירת המתנה שמחכה בסוף מסלול ההתקדמות
			var gift = new lib.gift();
			gift.x = 585;
			gift.y = 430;
		gift.scaleX= 1.3;
		gift.scaleY=1.3;
			gift.name = "gift";
			stage.addChild(gift);
		
			//יצירת עיגולי התקדמות לפי מספר השאלות
			for (i = 0; i < gameArr[mychoice].length; i++) {
				var circle = new lib.cir();
				circle.name = "cir" + i;
				stage.addChild(circle);
				circle.x = 100 + (800 / gameArr[mychoice].length) * i;
				circle.y = stageH - 30;
				circle.scaleX = 1.2;
				circle.scaleY = 1.2;
		
			}
			boy.gotoAndStop(0); //מצב סטטי של הילד
			gift.gotoAndStop(0); //מצב סטטי של המתנה
		
			uploadQ();
		}
		
		
		//פונקציה להעלאת שאלה 
		function uploadQ() {
			var mission = new createjs.Text();
			mission.name = "miss";
			mission.x = stageW / 2;
			mission.y = stageH /4 -50;
			mission.text = "לחץ על התשובה הנכונה";
			mission.font = "16px Arial";
			mission.textAlign = "center";
			stage.addChild(mission);
		
			rndQ = Math.floor(Math.random() * gameArr[mychoice].length); //חישוב רנדומלי לשאלה שתופיע
		
			//יצירת תיבת טקסט דינמית להגדרת השאלה
			var newQues = new createjs.Text();
			newQues.name = "ques";
			newQues.x = stageW / 2;
			newQues.y = stageH / 4 -70;
			newQues.font = "18px Arial";
			newQues.width = "2px";
			newQues.text = gameArr[mychoice][rndQ][0][0];
			newQues.textAlign = "center";
			stage.addChild(newQues);
		
			if (gameArr[mychoice][rndQ][0][1] != "noImg") {
				var quesImg = new gameArr[mychoice][rndQ][0][1]();
				quesImg.x = -150;
				quesImg.y = -80;
				quesImg.name = "quesImg";
				stage.getChildByName("rec").addChild(quesImg);
				//scaleSize = bigsizeImage((stage.getChildByName("rec")), quesImg); //שולח לפונקציה שמתאימה את הגודל של התוכן והמסגרת
				//quesImg.scaleX = scaleSize;
				//quesImg.scaleY = scaleSize;
		
		
				var zoomQues = new lib.zoomIn(); //יצירת זכוכית מגדלת
				stage.getChildByName("rec").addChild(zoomQues);
				zoomQues.name = "zoom" + 5;
				zoomQues.x = -120;
				zoomQues.y = -50;
				//zoom.cursor = "pointer";
				zoomQues.addEventListener("click", zoomInPic); //יצירת מופע לחיצה לזכוכית מגדלת
		
			}
		
			clearInterval(timer); //בכל פעם שעולה שאלה חדשה האינטרוול  מתאפס 
			timeAllGame = setInterval(function () {
		
				timerAllsec++;
				if (timerAllsec == 60) {
					timerAllmin++;
					timerAllsec = 0;
				}
			}, 1000);
		
			//הגדרת שעון לפריט
			clockTXT.font = "18px Arial";
			time = 30;
			clockTXT.text = time;
		
			clockTXT.x = -10;
			clockTXT.y = -10;
			timer = setInterval(function () {
				time--;
				clockTXT.text = time;
				if (time == 9) {
					clockTXT.x = -5;
				}
				if (time == 0) {
					clearInterval(timer);
					timeOut();
				}
		
		
			}, 1000);
		
		
			var len = gameArr[mychoice][rndQ].length - 1; //הגדרת משתנה שקולט את אורך המסיחים
		
			var rndArray = [];
		
			for (i = 0; i < len; i++) {
		
				rndArray[i] = i + 1;
			}
		
		
		
			for (i = 1; i < len + 1; i++) {
		
				var rnd = Math.floor(Math.random() * (rndArray.length)); //חישוב רנדומלי של המסיחים
				rndAns = rndArray[rnd];
		
				//יצירת כפתורים למסיחים
				var answerBTN = new lib.ans();
				answerBTN.gotoAndStop(0);
				answerBTN.name = "btn" + i;
				answerBTN.x = i * 140 + 130;
				answerBTN.y = (stageH / 4) + 35;
				answerBTN.scaleX = 1.50;
				answerBTN.scaleY = 1.50;
				stage.addChild(answerBTN); //הוספת הכפתורים לבמה
				answerBTN.addEventListener("click", markFunc);
		
				//בדיקת אם מדובר בטקסט
				if (gameArr[mychoice][rndQ][rndAns][2] == "text") {
					//יצירת תיבת טקסט למסיח
					var ansTxt = new createjs.Text();
					ansTxt.name = "Txt" + i;
					ansTxt.textAlign = "center";
					ansTxt.text = gameArr[mychoice][rndQ][rndAns][0]; //השמה של הטקסט המתאים לפי המערך
					answerBTN.addChild(ansTxt);
					ansTxt.lineWidth = 50;
					ansTxt.y = -12;
					ansTxt.font = "9px Arial";
		
					if (gameArr[mychoice][rndQ][rndAns][1] == "true") {
						target = answerBTN.name.charAt(3);
					}
		
		
					//יצירתירידתשורהלטקסטארוך
					if (ansTxt.text.length > 15 && ansTxt.text.length < 20) {
		
						ansTxt.y = -12;
						//	ansTxt.textAlign = "right";
						//ansTxt.x = 35;
					} else if (ansTxt.text.length >= 20) {
						//ansTxt.textAlign = "right";
						ansTxt.y = -18;
						//ansTxt.x = 38;
						//בדיקה מי המסיח הנכון מבין המסיחים והזקתו ל target
		
					}
		
		
		
		
				}
		
				//בדיקה אם מדובר בתמונה
				else if (gameArr[mychoice][rndQ][rndAns][2] == "img") {
		
					//יצירת תמונות מתוך המערך 
					var ansImg = new gameArr[mychoice][rndQ][rndAns][0]();
					ansImg.name = "Img" + rndAns;
					scaleSize = bigsizeImage(answerBTN, ansImg); //שולח לפונקציה שמתאימה את הגודל של התוכן והמסגרת
					ansImg.scaleX = scaleSize;
					ansImg.scaleY = scaleSize;
					answerBTN.addChild(ansImg);
		
					var size = answerBTN.nominalBounds; //וידוא יחס תמונה למסגרת הכפתור
					//ansImg.y = size.height / 3;
		
					var zoom = new lib.zoomIn(); //יצירת זכוכית מגדלת
					answerBTN.addChild(zoom);
					zoom.name = "zoom" + rndAns;
					zoom.x = 28;
					zoom.y = 17;
					//zoom.cursor = "pointer";
					zoom.addEventListener("click", zoomInPic); //יצירת מופע לחיצה לזכוכית מגדלת
		
					//בדיקה מי המסיח הנכון מבין המסיחים והזקתו ל target 
					if (gameArr[mychoice][rndQ][rndAns][1] == "true") {
						target = answerBTN.name.charAt(3);
					}
		
				}
				rndArray.splice((rnd), 1);
			}
		}
		
		
		//פונקציה שפועלת בכל לחיצה על אחת מהתשובות
		function markFunc(evt) {
			//stage.getChildByName("check").visible = true; //הפעלת כפתור בדיקה
			////////כפתור בדיקה////////////
			var checkBtn = new lib.check; //יצירת כפתור בדיקה לשאלה
			checkBtn.x = stageW / 2;
			checkBtn.y = stageH / 4 + 105;
			checkBtn.name = "mycheck";
			stage.addChild(checkBtn);
			checkBtn.addEventListener("click", checkAnsFunc); //הוספת אירוע לחיצה לכפתור הבדיקה
		checkBtn.visible= true;
		
		
			currentAnswer = evt.currentTarget.name.charAt(3); //המספר מתוך השם המייצג איזו שאלה נענתה
		
			for (i = 1; i < gameArr[mychoice][rndQ].length; i++) {
		
				stage.getChildByName("btn" + i).gotoAndStop(0); //כיבוי כל הכפתורים
		
			}
		
			stage.getChildByName("btn" + currentAnswer).gotoAndStop(1); //הדלקת הכפתור שנלחץ בלבד
		
		}
		
		//פונקציה לבדיקת התשובה
		function checkAnsFunc() {
			clearInterval(timer);
			clearInterval(timeAllGame);
			//stage.getChildByName("check").visible = false; //העלמת כפתור בדיקה
			stage.removeChild(stage.getChildByName("mycheck"));
		
			stage.removeChild(stage.getChildByName("bigS"));
		
			for (i = 1; i < gameArr[mychoice][rndQ].length; i++) {
				stage.getChildByName("btn" + i).gotoAndStop(2); //העלמת המסגרות לכל המסיחים
				stage.getChildByName("btn" + i).removeEventListener("click", markFunc);
				//העלמת האפשרות ללחוץ שוב על מסיח
		
			}
		
		
			//במקרה של תשובה נכונה
		
			if (target == currentAnswer) {
		
				var boyWalking = stage.getChildByName("boy");
				var circle = stage.getChildByName("cir" + currentCir);
		
		
				stage.getChildByName("btn" + currentAnswer).gotoAndStop(3); //סימון הצלחה על המסיח
		
		
				if (currentCir < 10) {
					boyInterval = setInterval(move, 1);
					directionBoyX = 0.3;
				} else {
		
					clearInterval(boyInterval);
		
				}
		
				mistakeArr[currentCir] = gameArr[mychoice][rndQ][0][2];
				currentCir++
		
				gameArr[mychoice].splice(rndQ, 1);
				circle.gotoAndStop(1);
			}
			//במקרה של תשובה שגויה
			else {
				stage.getChildByName("btn" + currentAnswer).gotoAndStop(4); //סימון של אי הצלחה על המסיח
		
				gameArr[mychoice][rndQ][0][2]++
		
			
			}
		
			setTimeout(function () {
				///////// כפתור המשך///////////
				var nextBtn = new lib.next;
				nextBtn.x = stageW / 2;
				nextBtn.y = stageH / 4 + 105;
				nextBtn.name = "next";
				nextBtn.addEventListener("click", nextQ); //הוספת אירוע הלחיצה לכפתור "שאלה הבאה"
				stage.addChild(nextBtn);
			}, 2000);
		
		
		}
		
		//פונקציה שפועלת כאשר לחצנו על המשך
		function nextQ() {
			stage.removeChild(stage.getChildByName("ques")); //העלמת השאלה הקודמת
			stage.getChildByName("rec").removeChild(stage.getChildByName("rec").getChildByName("quesImg")); //העלמת התמונה מהשאלה הקודמת
			stage.removeChild(stage.getChildByName("miss"));
		
			stage.removeChild(stage.getChildByName("next"));
			stage.getChildByName("rec").removeChild(stage.getChildByName("rec").getChildByName("zoom" + 5));
			stage.removeChild(stage.getChildByName("mycheck"));
		
			stage.getChildByName("rec").removeChild(timeOutBack); //העלמת רקע טייםאאוט
			currentAnswer = 0; //איפוס המסיח הנבחר
			target = 0; //איפוס המסיח הנכון
		
			if (0 < gameArr[mychoice].length) { //אם עדיין יש שאלות במערך
		
		
				for (i = 1; i < gameArr[mychoice][0].length; i++) {
		
					stage.removeChild(stage.getChildByName("btn" + i)); //הסרת תיבת הטקסט שנמצאת במשתנה מהקוביה של התשובה
				}
		
				uploadQ(); //העלאת שאלה חדשה
		
		
			}
		
			//אם לא נשארו שאלות במערך
			else {
		
				start = "end";
				clearInterval(boyInterval);
		
				var endTxtBack = new lib.endtxtB();
				endTxtBack.name = "endBack";
				endTxtBack.x = stageW / 2;
				endTxtBack.y = stageH / 6;
				stage.addChild(endTxtBack);
		
				var EndTxt = new createjs.Text();; //הגדרת משתמה לתיבת הטקסט של המשימה	
				EndTxt.name = "endtxt";
				EndTxt.textAlign = "center";
				EndTxt.text = "כל הכבוד!! עזרת לדני לקבל את המתנה שלו "; //הודעת על סיום המשחק
				EndTxt.font = "22px Arial"; //שינוי פונט
				EndTxt.x = stageW / 2;
				EndTxt.y = stageH / 6;
				stage.addChild(EndTxt);
		
		
				stage.removeChild(stage.getChildByName("boy"));
		
		
				for (i = 0; i < currentCir; i++) {
					stage.removeChild(stage.getChildByName("cir" + i));
					//stage.getChildByName("cir" + i).visible = false; //העלמת העיגולים
					stage.removeChild(stage.getChildByName("btn" + i));
		
				}
		
			
				stage.removeChild(stage.getChildByName("rec"));
				stage.getChildByName("backG").gotoAndPlay(1); //שינוי פריים של הרקע
				stage.getChildByName("gift").gotoAndPlay(1); //התחלת האנימציה של המתנה נפתחת
		
		
		
				setTimeout(function () {
					stage.removeChild(endTxtBack);
					stage.removeChild(EndTxt);
					stage.removeChild(stage.getChildByName("gift"));
		
					var gameEnd = new lib.gameEnd();
					gameEnd.x = stageW / 2;
					gameEnd.y = stageH / 2;
					gameEnd.name = "gameEnd";
					stage.addChild(gameEnd);
				
					if (timerAllsec < 10) {
		
						timerAllsec = "0" + timerAllsec;
					}
					var sumGrade = 0;
					var gameQCount = parseInt(mistakeArr.length);
				
		
					for (i = 0; i < gameQCount; i++) {
						var num = parseInt(mistakeArr[i]);
						var qGrade = 100 / (gameQCount * num);
						sumGrade += qGrade;
					}
		
					gameEnd.titleTxt.text = "סיימתם את המשחק: " + subjects[mychoice];
					gameEnd.timeTxt.text = "זמן: " + timerAllmin + ":" + timerAllsec;
					gameEnd.resultTxt.text = "ציון:" + Math.floor(sumGrade);
		
					//לחיצה על שחק שוב באותו במשחק
					var playAgain = new lib.playAgain();
					playAgain.x = 70;
					playAgain.y = 60;
					playAgain.name = "playAgain";
					gameEnd.addChild(playAgain);
		
					var endBtn = new lib.endBtn();
					endBtn.x = -30;
					endBtn.y = 60;
					endBtn.name = "endBtn";
					gameEnd.addChild(endBtn);
					endBtn.addEventListener("click", function () {
						start = "begining";
						endOfGame();
		
					}); //הצמדת מאזין לכפתור תחילת משחק
		
					playAgain.addEventListener("click", endOfGame);
		
				}, 7500);
		
			}
		}
		
		
		
		
		function move() { // פונקציית תזוזת הכדור
		
			var boyWalking = stage.getChildByName("boy");
		
			var circle = stage.getChildByName("cir" + currentCir);
			if (currentCir < 10) { // המספר 30 מסמל מתי לעצור את הכדור בציר איקס
		
				if (boyWalking.x > circle.x) {
					directionBoyX = 0;
				}
				boyWalking.x += directionBoyX; // התזוזה עצמה	
				boyWalking.gotoAndStop(1);
				if (boyWalking.x >= circle.x) {
					clearInterval(boyInterval);
					boyWalking.gotoAndStop(0);
		
				}
			}
		
		}
		
		function timeOut() {
			clearInterval(timer);
			totalTime = false;
			cleanStage();
		}
		
		
		function cleanStage() {
			stage.removeChild(stage.getChildByName("ques"));
			stage.removeChild(stage.getChildByName("miss"));
			stage.getChildByName("rec").removeChild(stage.getChildByName("rec").getChildByName("quesImg"));
			stage.removeChild(stage.getChildByName("bigS"));
			stage.removeChild(stage.getChildByName("mycheck"));
		
			stage.removeChild(stage.getChildByName("clock"));
		
			stage.getChildByName("rec").addChild(timeOutBack);
		
			var nextTime = new lib.nextTime();
			nextTime.name = "nextT";
			timeOutBack.addChild(nextTime);
			nextTime.y = 70;
			nextTime.addEventListener("click", nextQ);
		
			for (i = 1; i < gameArr[mychoice][qNum].length; i++) {
				stage.removeChild(stage.getChildByName("btn" + i)); //הסרת תיבת הטקסט שנמצאת במשתנה מהקוביה של התשובה
		
			}
		
		}
		
		//הגדלת תמונה בלחיצה על זכוכית מגדלת//
		function zoomInPic(evt) {
			var bigSize = new lib.bigSize();
			bigSize.x = stageW / 4 +10;
			bigSize.y = stageH / 4 + 20;
			bigSize.name = "bigS";
			stage.addChild(bigSize);
		
			var exit = new lib.exit();
			exit.name = "exit";
			bigSize.addChild(exit);
			exit.x = 120;
			exit.y = -90;
		
			exit.addEventListener("click", clearBigSize);
			numGls = evt.currentTarget.name.charAt(4);
		
			//אם זאת לא תמונה בגזע השאלה
		
			if (numGls < 5) {
				var originalSize = new(gameArr[mychoice][rndQ][numGls][0]);
				originalSize.name = "origS" + numGls;
		
				scaleSize = bigsizeImage(bigSize, originalSize);
		
			} else {
				var originalSize = new(gameArr[mychoice][rndQ][0][1]);
				originalSize.name = "origS" + numGls;
				scaleSize = bigsizeImage(bigSize, originalSize);
		
			}
		
			originalSize.scaleX = scaleSize;
			originalSize.scaleY = scaleSize;
			bigSize.addChild(originalSize);
		}
		//פןנקציה שמוחקת את חלון הגדלת התמונה מהבמה
		function clearBigSize() {
			stage.removeChild(stage.getChildByName("bigS"));
			numGls = 0;
		}
		
		function bigsizeImage(tamplate, Img) {
			//משתנים לגבולות של המסגרת והתוכן
			var tamplateBounds = tamplate.nominalBounds;
			var ImgBounds = Img.nominalBounds;
		
			//מציאת הערך לפיו יש לשנות את גודל התמונה בהתאם לכיוון התמונה- לאורך או לרוחב
			var Scale = 0;
			if (tamplateBounds.height / ImgBounds.height < tamplateBounds.width / ImgBounds.width) {
				Scale = tamplateBounds.height / ImgBounds.height;
			} else {
				Scale = tamplateBounds.width / ImgBounds.width;
			}
			return Scale / 1.4;
		}
		
		function endOfGame() {
			clearInterval(boyInterval);
			clearInterval(timer);
			clearInterval(timeAllGame);
			stage.removeChild(stage.getChildByName("gameEnd"));
			stage.removeChild(stage.getChildByName("endBack"));
			stage.removeChild(stage.getChildByName("endtxt"));
			currentAnswer = 0; //משתנה לקליטת שם התשובה שנלחצה לאחר חיתוך 
			target = 0; // משתנה לקליטת חיתוך שם של התשובה הנכונה ביצירה
			qNum = 0; //משתנה לספירת שאלות
			currentCir = 0; // משתנה לקליטת מספר העיגול הנוכחי בהתאם לשאלה
			mistakeArr = [];
			scaleSize = 0; //משתנה שךפיו ישתנה הגודל
			numGls = 0;
			boyInterval = 0; //משתנה להגדרת אינטרוול לתזוזת הילד 
			// משתנים גלובליים לקליטת תזוזת הילד על ציר האיקס והווי
			directionBoyX = 0;
		
			// שניות ודקות של כל המשחק
			//totalTime = false; // זמן של המשחק כולו
			timerAllmin = 0;
			timerAllsec = 0;
			if (start == "begining") {
				createOpen();
				mychoice = 0;
			} else {
				stage.removeChild(stage.getChildByName("gift"));
				setArr();
				createGame();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'B8DB1A7485742B4FB782AE596137AB49',
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/testing size_atlas_.png?1549923315155", id:"testing size_atlas_"},
		{src:"sounds/correctwav.mp3?1549923316647", id:"correctwav"},
		{src:"sounds/happyEndingAudioTrimmercom.mp3?1549923316647", id:"happyEndingAudioTrimmercom"},
		{src:"sounds/wrongwav.mp3?1549923316647", id:"wrongwav"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1549923316647", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1549923316647", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1549923316647", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['B8DB1A7485742B4FB782AE596137AB49'] = {
	getStage: function() { return exportRoot.getStage(); },
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;