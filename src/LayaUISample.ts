import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;
import ViewPage = view.test.ViewPage;

//程序入口
Laya.init(750, 1334, WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH

//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad(){
	Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}

function onLoaded(): void {
	let viewpageUI: ViewPage = new ViewPage();
	Laya.stage.addChild(viewpageUI);
}