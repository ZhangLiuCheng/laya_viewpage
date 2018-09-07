
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.test {
    export class ViewPageUI extends View {
		public hbox:Laya.HBox;
		public btnNext:Laya.Button;
		public btnPrevious:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":750,"height":1334},"child":[{"type":"HBox","props":{"y":0,"x":0,"var":"hbox","height":1334}},{"type":"Button","props":{"y":507,"x":530,"width":200,"var":"btnNext","labelSize":50,"label":"下一页","height":100}},{"type":"Button","props":{"y":497,"x":44,"width":200,"var":"btnPrevious","labelSize":50,"label":"上一页","height":100}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.ViewPageUI.uiView);

        }

    }
}
