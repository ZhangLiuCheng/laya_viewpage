var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var ViewPageUI = /** @class */ (function (_super) {
            __extends(ViewPageUI, _super);
            function ViewPageUI() {
                return _super.call(this) || this;
            }
            ViewPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.ViewPageUI.uiView);
            };
            ViewPageUI.uiView = { "type": "View", "props": { "x": 0, "width": 750, "height": 1334 }, "child": [{ "type": "HBox", "props": { "y": 0, "x": 0, "var": "hbox", "height": 1334 } }, { "type": "Button", "props": { "y": 507, "x": 530, "width": 200, "var": "btnNext", "labelSize": 50, "label": "下一页", "height": 100 } }, { "type": "Button", "props": { "y": 497, "x": 44, "width": 200, "var": "btnPrevious", "labelSize": 50, "label": "上一页", "height": 100 } }] };
            return ViewPageUI;
        }(View));
        test.ViewPageUI = ViewPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map