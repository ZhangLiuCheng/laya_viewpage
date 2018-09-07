/**Created by the LayaAirIDE*/
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
var view;
(function (view) {
    var test;
    (function (test) {
        var Image = Laya.Image;
        var screenWidth = 750;
        var screenHeight = 1334;
        var touchX = -1;
        var hboxDownX = -1;
        var page = 0;
        var touchDown = false;
        var ViewPage = /** @class */ (function (_super) {
            __extends(ViewPage, _super);
            function ViewPage() {
                var _this = _super.call(this) || this;
                _this.on(Laya.Event.MOUSE_DOWN, _this, _this.mouseDown);
                _this.on(Laya.Event.MOUSE_UP, _this, _this.mouseUp);
                _this.on(Laya.Event.MOUSE_MOVE, _this, _this.mouseMove);
                _this.on(Laya.Event.MOUSE_OUT, _this, _this.mouseUp);
                _this.btnPrevious.on("click", _this, _this.previousPage);
                _this.btnNext.on("click", _this, _this.nextPage);
                var imgs = ["a.png", "b.png", "c.png", "d.png"];
                imgs.forEach(function (item) {
                    var img = new Image(item);
                    img.width = screenWidth;
                    img.height = screenHeight;
                    _this.hbox.addChild(img);
                });
                return _this;
            }
            // ----------------------- mouse event start ------------------------
            ViewPage.prototype.mouseDown = function (event) {
                // console.log("-----------mouseDown:", event);
                touchX = event.stageX;
                hboxDownX = this.hbox.x;
                touchDown = true;
            };
            ViewPage.prototype.mouseMove = function (event) {
                // console.log("-----------mouseMove:", touchDown);
                if (!touchDown) {
                    return;
                }
                var distance = event.stageX - touchX;
                var hx = this.hbox.x + distance;
                if (hx > 0) {
                    hx = 0;
                }
                if (hx < -screenWidth * 3) {
                    hx = -screenWidth * 3;
                }
                this.hbox.x = hx;
                touchX = event.stageX;
            };
            /**
             * 鼠标离开屏幕
             */
            ViewPage.prototype.mouseUp = function (event) {
                if (touchDown == false) {
                    return;
                }
                touchX = -1;
                touchDown = false;
                var space = this.hbox.x - hboxDownX;
                if (space > 200) {
                    page -= 1;
                }
                else if (space < -200) {
                    page += 1;
                }
                // this.hbox.x = page * 750;
                this.setPage(page);
            };
            // ----------------------- mouse event end ------------------------
            ViewPage.prototype.previousPage = function () {
                page -= 1;
                if (page < 0) {
                    page = 0;
                }
                this.setPage(page);
            };
            ViewPage.prototype.nextPage = function () {
                page += 1;
                if (page > 3) {
                    page = 3;
                }
                this.setPage(page);
            };
            ViewPage.prototype.setPage = function (page) {
                Laya.Tween.to(this.hbox, { x: -page * screenWidth }, 400, Laya.Ease.linearIn, null);
            };
            return ViewPage;
        }(ui.test.ViewPageUI));
        test.ViewPage = ViewPage;
    })(test = view.test || (view.test = {}));
})(view || (view = {}));
//# sourceMappingURL=ViewPage.js.map